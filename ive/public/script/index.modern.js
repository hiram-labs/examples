var e,
  t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
!(function (e) {
  !(function (n) {
    var r =
        "object" == typeof t
          ? t
          : "object" == typeof self
          ? self
          : "object" == typeof this
          ? this
          : Function("return this;")(),
      i = o(e);
    function o(e, t) {
      return function (n, r) {
        "function" != typeof e[n] &&
          Object.defineProperty(e, n, {
            configurable: !0,
            writable: !0,
            value: r,
          }),
          t && t(n, r);
      };
    }
    void 0 === r.Reflect ? (r.Reflect = e) : (i = o(r.Reflect, i)),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          n = "function" == typeof Symbol,
          r =
            n && void 0 !== Symbol.toPrimitive
              ? Symbol.toPrimitive
              : "@@toPrimitive",
          i = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
          o = "function" == typeof Object.create,
          s = { __proto__: [] } instanceof Array,
          a = !o && !s,
          c = {
            create: o
              ? function () {
                  return U(Object.create(null));
                }
              : s
              ? function () {
                  return U({ __proto__: null });
                }
              : function () {
                  return U({});
                },
            has: a
              ? function (e, n) {
                  return t.call(e, n);
                }
              : function (e, t) {
                  return t in e;
                },
            get: a
              ? function (e, n) {
                  return t.call(e, n) ? e[n] : void 0;
                }
              : function (e, t) {
                  return e[t];
                },
          },
          l = Object.getPrototypeOf(Function),
          u =
            "object" == typeof process &&
            process.env &&
            "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL,
          d =
            u ||
            "function" != typeof Map ||
            "function" != typeof Map.prototype.entries
              ? (function () {
                  var e = {},
                    t = [],
                    n = (function () {
                      function e(e, t, n) {
                        (this._index = 0),
                          (this._keys = e),
                          (this._values = t),
                          (this._selector = n);
                      }
                      return (
                        (e.prototype["@@iterator"] = function () {
                          return this;
                        }),
                        (e.prototype[i] = function () {
                          return this;
                        }),
                        (e.prototype.next = function () {
                          var e = this._index;
                          if (e >= 0 && e < this._keys.length) {
                            var n = this._selector(
                              this._keys[e],
                              this._values[e]
                            );
                            return (
                              e + 1 >= this._keys.length
                                ? ((this._index = -1),
                                  (this._keys = t),
                                  (this._values = t))
                                : this._index++,
                              { value: n, done: !1 }
                            );
                          }
                          return { value: void 0, done: !0 };
                        }),
                        (e.prototype.throw = function (e) {
                          throw (
                            (this._index >= 0 &&
                              ((this._index = -1),
                              (this._keys = t),
                              (this._values = t)),
                            e)
                          );
                        }),
                        (e.prototype.return = function (e) {
                          return (
                            this._index >= 0 &&
                              ((this._index = -1),
                              (this._keys = t),
                              (this._values = t)),
                            { value: e, done: !0 }
                          );
                        }),
                        e
                      );
                    })();
                  return (function () {
                    function t() {
                      (this._keys = []),
                        (this._values = []),
                        (this._cacheKey = e),
                        (this._cacheIndex = -2);
                    }
                    return (
                      Object.defineProperty(t.prototype, "size", {
                        get: function () {
                          return this._keys.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                      }),
                      (t.prototype.has = function (e) {
                        return this._find(e, !1) >= 0;
                      }),
                      (t.prototype.get = function (e) {
                        var t = this._find(e, !1);
                        return t >= 0 ? this._values[t] : void 0;
                      }),
                      (t.prototype.set = function (e, t) {
                        var n = this._find(e, !0);
                        return (this._values[n] = t), this;
                      }),
                      (t.prototype.delete = function (t) {
                        var n = this._find(t, !1);
                        if (n >= 0) {
                          for (var r = this._keys.length, i = n + 1; i < r; i++)
                            (this._keys[i - 1] = this._keys[i]),
                              (this._values[i - 1] = this._values[i]);
                          return (
                            this._keys.length--,
                            this._values.length--,
                            t === this._cacheKey &&
                              ((this._cacheKey = e), (this._cacheIndex = -2)),
                            !0
                          );
                        }
                        return !1;
                      }),
                      (t.prototype.clear = function () {
                        (this._keys.length = 0),
                          (this._values.length = 0),
                          (this._cacheKey = e),
                          (this._cacheIndex = -2);
                      }),
                      (t.prototype.keys = function () {
                        return new n(this._keys, this._values, r);
                      }),
                      (t.prototype.values = function () {
                        return new n(this._keys, this._values, o);
                      }),
                      (t.prototype.entries = function () {
                        return new n(this._keys, this._values, s);
                      }),
                      (t.prototype["@@iterator"] = function () {
                        return this.entries();
                      }),
                      (t.prototype[i] = function () {
                        return this.entries();
                      }),
                      (t.prototype._find = function (e, t) {
                        return (
                          this._cacheKey !== e &&
                            (this._cacheIndex = this._keys.indexOf(
                              (this._cacheKey = e)
                            )),
                          this._cacheIndex < 0 &&
                            t &&
                            ((this._cacheIndex = this._keys.length),
                            this._keys.push(e),
                            this._values.push(void 0)),
                          this._cacheIndex
                        );
                      }),
                      t
                    );
                  })();
                  function r(e, t) {
                    return e;
                  }
                  function o(e, t) {
                    return t;
                  }
                  function s(e, t) {
                    return [e, t];
                  }
                })()
              : Map,
          _ =
            u ||
            "function" != typeof Set ||
            "function" != typeof Set.prototype.entries
              ? (function () {
                  function e() {
                    this._map = new d();
                  }
                  return (
                    Object.defineProperty(e.prototype, "size", {
                      get: function () {
                        return this._map.size;
                      },
                      enumerable: !0,
                      configurable: !0,
                    }),
                    (e.prototype.has = function (e) {
                      return this._map.has(e);
                    }),
                    (e.prototype.add = function (e) {
                      return this._map.set(e, e), this;
                    }),
                    (e.prototype.delete = function (e) {
                      return this._map.delete(e);
                    }),
                    (e.prototype.clear = function () {
                      this._map.clear();
                    }),
                    (e.prototype.keys = function () {
                      return this._map.keys();
                    }),
                    (e.prototype.values = function () {
                      return this._map.values();
                    }),
                    (e.prototype.entries = function () {
                      return this._map.entries();
                    }),
                    (e.prototype["@@iterator"] = function () {
                      return this.keys();
                    }),
                    (e.prototype[i] = function () {
                      return this.keys();
                    }),
                    e
                  );
                })()
              : Set,
          h = new (
            u || "function" != typeof WeakMap
              ? (function () {
                  var e = c.create(),
                    n = r();
                  return (function () {
                    function e() {
                      this._key = r();
                    }
                    return (
                      (e.prototype.has = function (e) {
                        var t = i(e, !1);
                        return void 0 !== t && c.has(t, this._key);
                      }),
                      (e.prototype.get = function (e) {
                        var t = i(e, !1);
                        return void 0 !== t ? c.get(t, this._key) : void 0;
                      }),
                      (e.prototype.set = function (e, t) {
                        return (i(e, !0)[this._key] = t), this;
                      }),
                      (e.prototype.delete = function (e) {
                        var t = i(e, !1);
                        return void 0 !== t && delete t[this._key];
                      }),
                      (e.prototype.clear = function () {
                        this._key = r();
                      }),
                      e
                    );
                  })();
                  function r() {
                    var t;
                    do {
                      t = "@@WeakMap@@" + s();
                    } while (c.has(e, t));
                    return (e[t] = !0), t;
                  }
                  function i(e, r) {
                    if (!t.call(e, n)) {
                      if (!r) return;
                      Object.defineProperty(e, n, { value: c.create() });
                    }
                    return e[n];
                  }
                  function o(e, t) {
                    for (var n = 0; n < t; ++n)
                      e[n] = (255 * Math.random()) | 0;
                    return e;
                  }
                  function s() {
                    var e,
                      t =
                        ((e = 16),
                        "function" == typeof Uint8Array
                          ? "undefined" != typeof crypto
                            ? crypto.getRandomValues(new Uint8Array(e))
                            : "undefined" != typeof msCrypto
                            ? msCrypto.getRandomValues(new Uint8Array(e))
                            : o(new Uint8Array(e), e)
                          : o(new Array(e), e));
                    (t[6] = (79 & t[6]) | 64), (t[8] = (191 & t[8]) | 128);
                    for (var n = "", r = 0; r < 16; ++r) {
                      var i = t[r];
                      (4 !== r && 6 !== r && 8 !== r) || (n += "-"),
                        i < 16 && (n += "0"),
                        (n += i.toString(16).toLowerCase());
                    }
                    return n;
                  }
                })()
              : WeakMap
          )();
        function E(e, t, n) {
          var r = h.get(e);
          if (T(r)) {
            if (!n) return;
            (r = new d()), h.set(e, r);
          }
          var i = r.get(t);
          if (T(i)) {
            if (!n) return;
            (i = new d()), r.set(t, i);
          }
          return i;
        }
        function p(e, t, n) {
          if (m(e, t, n)) return !0;
          var r = B(t);
          return !N(r) && p(e, r, n);
        }
        function m(e, t, n) {
          var r = E(t, n, !1);
          return !T(r) && !!r.has(e);
        }
        function A(e, t, n) {
          if (m(e, t, n)) return S(e, t, n);
          var r = B(t);
          return N(r) ? void 0 : A(e, r, n);
        }
        function S(e, t, n) {
          var r = E(t, n, !1);
          if (!T(r)) return r.get(e);
        }
        function g(e, t, n, r) {
          E(n, r, !0).set(e, t);
        }
        function O(e, t) {
          var n = C(e, t),
            r = B(e);
          if (null === r) return n;
          var i = O(r, t);
          if (i.length <= 0) return n;
          if (n.length <= 0) return i;
          for (var o = new _(), s = [], a = 0, c = n; a < c.length; a++)
            o.has((d = c[a])) || (o.add(d), s.push(d));
          for (var l = 0, u = i; l < u.length; l++) {
            var d;
            o.has((d = u[l])) || (o.add(d), s.push(d));
          }
          return s;
        }
        function C(e, t) {
          var n = [],
            r = E(e, t, !1);
          if (T(r)) return n;
          for (
            var o = (function (e) {
                var t = I(e, i);
                if (!y(t)) throw new TypeError();
                var n = t.call(e);
                if (!b(n)) throw new TypeError();
                return n;
              })(r.keys()),
              s = 0;
            ;

          ) {
            var a = P(o);
            if (!a) return (n.length = s), n;
            var c = a.value;
            try {
              n[s] = c;
            } catch (e) {
              try {
                w(o);
              } finally {
                throw e;
              }
            }
            s++;
          }
        }
        function f(e) {
          if (null === e) return 1;
          switch (typeof e) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return null === e ? 1 : 6;
            default:
              return 6;
          }
        }
        function T(e) {
          return void 0 === e;
        }
        function N(e) {
          return null === e;
        }
        function b(e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        }
        function R(e) {
          var t = (function (e, t) {
            switch (f(e)) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return e;
            }
            var n = I(e, r);
            if (void 0 !== n) {
              var i = n.call(e, "string");
              if (b(i)) throw new TypeError();
              return i;
            }
            return (function (e, t) {
              var n,
                r,
                i = e.toString;
              if (y(i) && !b((r = i.call(e)))) return r;
              if (y((n = e.valueOf)) && !b((r = n.call(e)))) return r;
              throw new TypeError();
            })(e);
          })(e);
          return "symbol" == typeof t
            ? t
            : (function (e) {
                return "" + e;
              })(t);
        }
        function L(e) {
          return Array.isArray
            ? Array.isArray(e)
            : e instanceof Object
            ? e instanceof Array
            : "[object Array]" === Object.prototype.toString.call(e);
        }
        function y(e) {
          return "function" == typeof e;
        }
        function v(e) {
          return "function" == typeof e;
        }
        function I(e, t) {
          var n = e[t];
          if (null != n) {
            if (!y(n)) throw new TypeError();
            return n;
          }
        }
        function P(e) {
          var t = e.next();
          return !t.done && t;
        }
        function w(e) {
          var t = e.return;
          t && t.call(e);
        }
        function B(e) {
          var t = Object.getPrototypeOf(e);
          if ("function" != typeof e || e === l) return t;
          if (t !== l) return t;
          var n = e.prototype,
            r = n && Object.getPrototypeOf(n);
          if (null == r || r === Object.prototype) return t;
          var i = r.constructor;
          return "function" != typeof i || i === e ? t : i;
        }
        function U(e) {
          return (e.__ = void 0), delete e.__, e;
        }
        e("decorate", function (e, t, n, r) {
          if (T(n)) {
            if (!L(e)) throw new TypeError();
            if (!v(t)) throw new TypeError();
            return (function (e, t) {
              for (var n = e.length - 1; n >= 0; --n) {
                var r = (0, e[n])(t);
                if (!T(r) && !N(r)) {
                  if (!v(r)) throw new TypeError();
                  t = r;
                }
              }
              return t;
            })(e, t);
          }
          if (!L(e)) throw new TypeError();
          if (!b(t)) throw new TypeError();
          if (!b(r) && !T(r) && !N(r)) throw new TypeError();
          return (
            N(r) && (r = void 0),
            (function (e, t, n, r) {
              for (var i = e.length - 1; i >= 0; --i) {
                var o = (0, e[i])(t, n, r);
                if (!T(o) && !N(o)) {
                  if (!b(o)) throw new TypeError();
                  r = o;
                }
              }
              return r;
            })(e, t, (n = R(n)), r)
          );
        }),
          e("metadata", function (e, t) {
            return function (n, r) {
              if (!b(n)) throw new TypeError();
              if (
                !T(r) &&
                !(function (e) {
                  switch (f(e)) {
                    case 3:
                    case 4:
                      return !0;
                    default:
                      return !1;
                  }
                })(r)
              )
                throw new TypeError();
              g(e, t, n, r);
            };
          }),
          e("defineMetadata", function (e, t, n, r) {
            if (!b(n)) throw new TypeError();
            return T(r) || (r = R(r)), g(e, t, n, r);
          }),
          e("hasMetadata", function (e, t, n) {
            if (!b(t)) throw new TypeError();
            return T(n) || (n = R(n)), p(e, t, n);
          }),
          e("hasOwnMetadata", function (e, t, n) {
            if (!b(t)) throw new TypeError();
            return T(n) || (n = R(n)), m(e, t, n);
          }),
          e("getMetadata", function (e, t, n) {
            if (!b(t)) throw new TypeError();
            return T(n) || (n = R(n)), A(e, t, n);
          }),
          e("getOwnMetadata", function (e, t, n) {
            if (!b(t)) throw new TypeError();
            return T(n) || (n = R(n)), S(e, t, n);
          }),
          e("getMetadataKeys", function (e, t) {
            if (!b(e)) throw new TypeError();
            return T(t) || (t = R(t)), O(e, t);
          }),
          e("getOwnMetadataKeys", function (e, t) {
            if (!b(e)) throw new TypeError();
            return T(t) || (t = R(t)), C(e, t);
          }),
          e("deleteMetadata", function (e, t, n) {
            if (!b(t)) throw new TypeError();
            T(n) || (n = R(n));
            var r = E(t, n, !1);
            if (T(r)) return !1;
            if (!r.delete(e)) return !1;
            if (r.size > 0) return !0;
            var i = h.get(t);
            return i.delete(n), i.size > 0 || h.delete(t), !0;
          });
      })(i);
  })();
})(e || (e = {}));
var n,
  r,
  i =
    ((n = function (e, t) {
      function n(e, t, n, r) {
        var i,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function r(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        o = "JsonProperties",
        s = "JsonIgnore",
        a = function (e, t) {
          return Reflect.getMetadata(E, e, t);
        },
        c = function (e, t) {
          var n = a(e, t);
          return null != n && null != n.name ? n.name : t;
        },
        l = function (e) {
          switch (e) {
            case _.STRING_TYPE:
            case _.NUMBER_TYPE:
            case _.BOOLEAN_TYPE:
            case _.DATE_TYPE:
            case _.STRING_TYPE_LOWERCASE:
            case _.NUMBER_TYPE_LOWERCASE:
            case _.BOOLEAN_TYPE_LOWERCASE:
            case _.DATE_TYPE_LOWERCASE:
              return !0;
            default:
              return !1;
          }
        },
        u = function (e) {
          return (
            e.name ||
            (function (e) {
              var t = e.toString(),
                n = t.indexOf("class"),
                r = t.indexOf("{", n + 5);
              return t.substring(n + 5, r).trim();
            })(e)
          );
        },
        d = function (e, t) {
          return Reflect.getMetadata("design:type", e, t);
        },
        _ = {
          OBJECT_TYPE: "Object",
          OBJECT_TYPE_LOWERCASE: "object",
          STRING_TYPE: "String",
          STRING_TYPE_LOWERCASE: "string",
          NUMBER_TYPE: "Number",
          NUMBER_TYPE_LOWERCASE: "number",
          BOOLEAN_TYPE: "Boolean",
          BOOLEAN_TYPE_LOWERCASE: "boolean",
          DATE_TYPE: "Date",
          DATE_TYPE_LOWERCASE: "date",
          ARRAY_TYPE: "Array",
          ARRAY_TYPE_LOWERCASE: "array",
          FROM_ARRAY: "fromArray",
        },
        h = function (e, t) {
          var n =
            null != e.getJsonObjectMapperCacheKey
              ? e.getJsonObjectMapperCacheKey()
              : u(e);
          return t[n] || (t[n] = new e()), t[n];
        },
        E = "JsonProperty";
      ((i = t.AccessType || (t.AccessType = {}))[(i.READ_ONLY = 0)] =
        "READ_ONLY"),
        (i[(i.WRITE_ONLY = 1)] = "WRITE_ONLY"),
        (i[(i.BOTH = 2)] = "BOTH");
      var p = function (e) {
          return function (t) {
            var n = new Function("return '" + e + "';");
            t.getJsonObjectMapperCacheKey = n;
          };
        },
        m = function (e, t) {
          (this.json = t), (this.message = e), (this.stack = new Error().stack);
        },
        A = function (e, t, n, r, i) {
          try {
            return (e[t] = r[i]), [];
          } catch (n) {
            throw new m(
              "Property '" +
                t +
                "' of " +
                e.constructor.name +
                " does not match datatype of " +
                i,
              r
            );
          }
        },
        S = function (e, t, n, r, i) {
          try {
            return (e[t] = new Date(r[i])), [];
          } catch (n) {
            throw new m(
              "Property '" +
                t +
                "' of " +
                e.constructor.name +
                " does not match datatype of " +
                i,
              r
            );
          }
        },
        g = function (e, t, n, r, i) {
          var o = void 0 !== i ? r[i] || [] : r,
            s = o.length,
            a = [],
            c = [];
          if (((e[t] = c), s > 0))
            for (var d = 0; d < s; d++)
              if (o[d]) {
                var h = u(n);
                if (l(h)) c.push(T[_.FROM_ARRAY](o[d], h));
                else {
                  var E = new n();
                  a.push({
                    functionName: _.OBJECT_TYPE,
                    instance: E,
                    json: o[d],
                  }),
                    c.push(E);
                }
              }
          return a;
        },
        O = function (e, n, r, i, c) {
          var h,
            E = [];
          null != n ? ((h = new r()), (e[n] = h)) : (h = e);
          var p = Object.keys(h);
          return (
            (p = (p = p.concat(
              (Reflect.getMetadata(o, h) || []).filter(function (e) {
                return (
                  (!h.constructor.prototype.hasOwnProperty(e) ||
                    void 0 !==
                      Object.getOwnPropertyDescriptor(
                        h.constructor.prototype,
                        e
                      ).set) &&
                  p.indexOf(e) < 0
                );
              })
            )).filter(function (e) {
              return !Reflect.hasMetadata(s, h, e);
            })).forEach(function (e) {
              var n = a(h, e);
              if (
                (void 0 === n &&
                  (n = { name: e, required: !1, access: t.AccessType.BOTH }),
                t.AccessType.WRITE_ONLY != n.access)
              ) {
                if (n.required && void 0 === i[n.name])
                  throw new m(
                    "JSON structure does have have required property '" +
                      n.name +
                      "' as required by '" +
                      u(h) +
                      "[" +
                      e +
                      "]",
                    i
                  );
                var r = null != n.name ? n.name : e;
                if (null != i[r])
                  if (null != n.deserializer)
                    h[e] = f(n.deserializer).deserialize(i[r]);
                  else if (void 0 === n.type) h[e] = i[r];
                  else if (
                    (function (e, t) {
                      return Array === d(e, t);
                    })(h, e)
                  )
                    T[_.ARRAY_TYPE](h, e, n.type, i, r).forEach(function (e) {
                      E.push(e);
                    });
                  else {
                    var o =
                      null != n.type
                        ? u(n.type)
                        : (function (e, t) {
                            var n = d(e, t);
                            return null != n ? u(n) : n;
                          })(h, e);
                    l(o)
                      ? T[o](h, e, o, i, r)
                      : ((h[e] = new n.type()),
                        E.push({
                          functionName: _.OBJECT_TYPE,
                          type: n.type,
                          instance: h[e],
                          json: i[r],
                        }));
                  }
              }
            }),
            E
          );
        },
        C = {},
        f = function (e) {
          return h(e, C);
        },
        T = {};
      (T[_.OBJECT_TYPE] = O),
        (T[_.ARRAY_TYPE] = g),
        (T[_.DATE_TYPE] = S),
        (T[_.STRING_TYPE] = A),
        (T[_.NUMBER_TYPE] = A),
        (T[_.BOOLEAN_TYPE] = A),
        (T[_.FROM_ARRAY] = function (e, t) {
          return t === _.DATE_TYPE ? new Date(e) : e;
        }),
        (T[_.OBJECT_TYPE_LOWERCASE] = O),
        (T[_.ARRAY_TYPE_LOWERCASE] = g),
        (T[_.DATE_TYPE_LOWERCASE] = S),
        (T[_.STRING_TYPE_LOWERCASE] = A),
        (T[_.NUMBER_TYPE_LOWERCASE] = A),
        (T[_.BOOLEAN_TYPE_LOWERCASE] = A);
      var N = function (e, t, n) {
          var r = {},
            i = t.instance;
          return (
            (t.visited = !0),
            i.forEach(function (e) {
              if (void 0 !== e)
                if (l(typeof e))
                  t.values.push(k[typeof e](void 0, e, U[typeof e]));
                else {
                  var i = {
                    id: x(),
                    type: _.OBJECT_TYPE,
                    instance: e,
                    parentIndex: n,
                    values: [],
                    key: void 0,
                    visited: !1,
                  };
                  r[i.id] = i;
                }
            }),
            b(r)
          );
        },
        b = function (e) {
          var t = [];
          return (
            Object.keys(e).forEach(function (n) {
              t.push(e[n]);
            }),
            t
          );
        },
        R = function (e, t) {
          L(e), t.values.push(e.values.pop());
        },
        L = function (e) {
          var t, n;
          (t =
            e.type === _.OBJECT_TYPE
              ? (void 0 !== (n = e.key) ? '"' + n + '":' : "") +
                "{" +
                e.values.join() +
                "}"
              : (function (e, t) {
                  return (
                    (void 0 !== e ? '"' + e + '":' : "") + "[" + t.join() + "]"
                  );
                })(e.key, e.values)),
            (e.values = []),
            e.values.push(t);
        },
        y = function (e, n, r) {
          var i = {};
          n.visited = !0;
          var u = Object.keys(n.instance);
          return (
            (u = (u = u.concat(
              (Reflect.getMetadata(o, n.instance) || []).filter(function (e) {
                return (
                  (!n.instance.constructor.prototype.hasOwnProperty(e) ||
                    void 0 !==
                      Object.getOwnPropertyDescriptor(
                        n.instance.constructor.prototype,
                        e
                      ).get) &&
                  u.indexOf(e) < 0
                );
              })
            )).filter(function (e) {
              return !Reflect.hasMetadata(s, n.instance, e);
            })).forEach(function (e) {
              var o = n.instance[e];
              if (null === o) n.values.push('"' + e + '":' + o);
              else if (void 0 !== o) {
                var s = a(n.instance, e);
                if (void 0 !== s && t.AccessType.READ_ONLY === s.access);
                else if (void 0 !== s && void 0 !== s.serializer) {
                  var u = M(s.serializer);
                  n.values.push(k[_.STRING_TYPE](c(n.instance, e), o, u));
                } else if (o instanceof Array) {
                  var d = {
                    id: x(),
                    type: _.ARRAY_TYPE,
                    instance: o,
                    parentIndex: r,
                    values: [],
                    key: c(n.instance, e),
                    visited: !1,
                  };
                  i[d.id] = d;
                } else
                  l(typeof o)
                    ? ((u = U[typeof o]),
                      n.values.push(k[typeof o](c(n.instance, e), o, u)))
                    : ((d = {
                        id: x(),
                        type: _.OBJECT_TYPE,
                        instance: o,
                        parentIndex: r,
                        values: [],
                        key: c(n.instance, e),
                        visited: !1,
                      }),
                      (i[d.id] = d));
              }
            }),
            b(i)
          );
        },
        v = function (e, t, n) {
          var r = n.serialize(t);
          return void 0 !== e ? '"' + e + '":' + r : r;
        },
        I = n([p("DateSerializer"), r("design:paramtypes", [])], function () {
          this.serialize = function (e) {
            return e.getTime();
          };
        }),
        P = n([p("StringSerializer"), r("design:paramtypes", [])], function () {
          this.serialize = function (e) {
            return JSON.stringify(e);
          };
        }),
        w = n([p("NumberSerializer"), r("design:paramtypes", [])], function () {
          this.serialize = function (e) {
            return e;
          };
        }),
        B = n(
          [p("BooleanSerializer"), r("design:paramtypes", [])],
          function () {
            this.serialize = function (e) {
              return e;
            };
          }
        ),
        U = {};
      (U[_.STRING_TYPE] = new P()),
        (U[_.NUMBER_TYPE] = new w()),
        (U[_.DATE_TYPE] = new I()),
        (U[_.BOOLEAN_TYPE] = new B()),
        (U[_.STRING_TYPE_LOWERCASE] = U[_.STRING_TYPE]),
        (U[_.NUMBER_TYPE_LOWERCASE] = U[_.NUMBER_TYPE]),
        (U[_.DATE_TYPE_LOWERCASE] = U[_.DATE_TYPE]),
        (U[_.BOOLEAN_TYPE_LOWERCASE] = U[_.BOOLEAN_TYPE]);
      var M = function (e) {
          return h(e, U);
        },
        k = [];
      (k[_.STRING_TYPE] = v),
        (k[_.NUMBER_TYPE] = v),
        (k[_.BOOLEAN_TYPE] = v),
        (k[_.DATE_TYPE] = v),
        (k[_.ARRAY_TYPE] = N),
        (k[_.OBJECT_TYPE] = y),
        (k[_.STRING_TYPE_LOWERCASE] = v),
        (k[_.NUMBER_TYPE_LOWERCASE] = v),
        (k[_.BOOLEAN_TYPE_LOWERCASE] = v),
        (k[_.DATE_TYPE_LOWERCASE] = v),
        (k[_.ARRAY_TYPE_LOWERCASE] = N),
        (k[_.OBJECT_TYPE_LOWERCASE] = y);
      var x = function () {
        return Math.random() + "-" + Date.now();
      };
      !(function (e) {
        (e.deserializeArray = function (e, n) {
          var r = new (function () {
            this.instances = void 0;
          })();
          return t(T[_.ARRAY_TYPE](r, "instances", e, n, void 0)), r.instances;
        }),
          (e.deserialize = function (e, n) {
            var r = new e();
            return (
              t([{ functionName: _.OBJECT_TYPE, instance: r, json: n }]), r
            );
          });
        var t = function (e) {
          var t = [];
          e.forEach(function (e) {
            t.push(e);
          });
          for (var n = t[0]; null != n; )
            T[n.functionName](
              n.instance,
              n.instanceKey,
              n.type,
              n.json,
              n.jsonKey
            ).forEach(function (e) {
              t.push(e);
            }),
              (n = t.pop());
        };
        e.serialize = function (e) {
          var t = [],
            n = {
              id: void 0,
              type: !0 === Array.isArray(e) ? _.ARRAY_TYPE : _.OBJECT_TYPE,
              instance: e,
              parentIndex: void 0,
              values: [],
              key: void 0,
              visited: !1,
            };
          t.push(n);
          do {
            var r = t[t.length - 1],
              i = t[t.length > 1 ? r.parentIndex : 0];
            if (r.visited) R(r, i), t.pop();
            else {
              var o = k[r.type](i, r, t.length - 1);
              if (o.length > 0) for (var s = o.length; --s >= 0; ) t.push(o[s]);
              else t.length > 1 && R(r, i), t.pop();
            }
          } while (t.length > 1);
          return L(n), n.values[0];
        };
      })(t.ObjectMapper || (t.ObjectMapper = {})),
        (t.JsonProperty = function (e) {
          return (function (e) {
            return (function (e, t) {
              return Reflect.metadata(e, t);
            })(E, e);
          })(
            "string" == typeof e
              ? { name: e, required: !1, access: t.AccessType.BOTH }
              : e
          );
        }),
        (t.JsonConverstionError = m),
        (t.CacheKey = p),
        (t.JsonIgnore = function () {
          return function (e, t) {
            Reflect.defineMetadata(s, !0, e, t);
          };
        }),
        (t.DateSerializer = I);
    }),
    n((r = { exports: {} }), r.exports),
    r.exports);
function o(e) {
  return e.replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function s(e, t) {
  e.firstChild && (t.appendChild(e.firstChild), s(e, t));
}
function a(e) {
  c(e.childNodes);
}
function c(e) {
  Array.from(e).forEach(l);
}
const l = (e) => e && e.parentNode && e.parentNode.removeChild(e),
  u = (e, t) => t && t.parentNode && t.parentNode.insertBefore(e, t),
  d = new Map(),
  _ = Symbol("riot-component"),
  h = new Set(),
  E = "mount",
  p = "update",
  m = "unmount",
  A = Symbol("pure"),
  S = Symbol("is_updating"),
  g = Symbol("parent"),
  O = Symbol("attributes"),
  C = Symbol("template");
var f = { EACH: 0, IF: 1, SIMPLE: 2, TAG: 3, SLOT: 4 },
  T = { ATTRIBUTE: 0, EVENT: 1, TEXT: 2, VALUE: 3 };
const N = Symbol("head"),
  b = Symbol("tail");
function R(e, t, n, r) {
  return (
    void 0 === r && (r = {}),
    Object.defineProperty(
      e,
      t,
      Object.assign(
        { value: n, enumerable: !1, writable: !1, configurable: !0 },
        r
      )
    ),
    e
  );
}
function L(e, t, n) {
  return (
    Object.entries(t).forEach((t) => {
      let [r, i] = t;
      R(e, r, i, n);
    }),
    e
  );
}
function y(e, t) {
  return (
    Object.entries(t).forEach((t) => {
      let [n, r] = t;
      e[n] || (e[n] = r);
    }),
    e
  );
}
function v(e, t) {
  return typeof e === t;
}
function I(e) {
  const t = e.ownerSVGElement;
  return !!t || null === t;
}
function P(e) {
  return "template" === e.tagName.toLowerCase();
}
function w(e) {
  return v(e, "function");
}
function B(e) {
  return !U(e) && e.constructor === Object;
}
function U(e) {
  return null == e;
}
const M = Symbol("unmount"),
  k = {
    nodes: [],
    mount(e, t) {
      return this.update(e, t);
    },
    update(e, t) {
      const { placeholder: n, nodes: r, childrenMap: i } = this,
        o = e === M ? null : this.evaluate(e),
        s = o ? Array.from(o) : [],
        {
          newChildrenMap: a,
          batches: c,
          futureNodes: d,
        } = (function (e, t, n, r) {
          const {
              condition: i,
              template: o,
              childrenMap: s,
              itemName: a,
              getKey: c,
              indexName: l,
              root: u,
              isTemplateTag: d,
            } = r,
            _ = new Map(),
            h = [],
            E = [];
          return (
            e.forEach((e, r) => {
              const p = (function (e, t) {
                  let { itemName: n, indexName: r, index: i, item: o } = t;
                  return R(e, n, o), r && R(e, r, i), e;
                })(Object.create(t), {
                  itemName: a,
                  indexName: l,
                  index: r,
                  item: e,
                }),
                m = c ? c(p) : r,
                A = s.get(m),
                S = [];
              if (
                (function (e, t) {
                  return !!e && !e(t);
                })(i, p)
              )
                return;
              const g = !A,
                O = A ? A.template : o.clone(),
                C = O.el || u.cloneNode(),
                f =
                  d && g
                    ? (function (e) {
                        const t = e.dom.cloneNode(!0),
                          { head: n, tail: r } = (function () {
                            const e = document.createTextNode(""),
                              t = document.createTextNode("");
                            return (
                              (e[N] = !0), (t[b] = !0), { head: e, tail: t }
                            );
                          })();
                        return {
                          avoidDOMInjection: !0,
                          fragment: t,
                          head: n,
                          tail: r,
                          children: [n, ...Array.from(t.childNodes), r],
                        };
                      })(O)
                    : O.meta;
              h.push(g ? () => O.mount(C, p, n, f) : () => O.update(p, n)),
                d ? S.push(...f.children) : S.push(C),
                s.delete(m),
                E.push(...S),
                _.set(m, { nodes: S, template: O, context: p, index: r });
            }),
            { newChildrenMap: _, batches: h, futureNodes: E }
          );
        })(s, e, t, this);
      return (
        ((e, t, n, r) => {
          const i = t.length;
          let o = e.length,
            s = i,
            a = 0,
            c = 0,
            d = null;
          for (; a < o || c < s; )
            if (o === a) {
              const e =
                s < i ? (c ? n(t[c - 1], -0).nextSibling : n(t[s - c], 0)) : r;
              for (; c < s; ) u(n(t[c++], 1), e);
            } else if (s === c)
              for (; a < o; ) (d && d.has(e[a])) || l(n(e[a], -1)), a++;
            else if (e[a] === t[c]) a++, c++;
            else if (e[o - 1] === t[s - 1]) o--, s--;
            else if (e[a] === t[s - 1] && t[c] === e[o - 1]) {
              const r = n(e[--o], -1).nextSibling;
              u(n(t[c++], 1), n(e[a++], -1).nextSibling),
                u(n(t[--s], 1), r),
                (e[o] = t[s]);
            } else {
              if (!d) {
                d = new Map();
                let e = c;
                for (; e < s; ) d.set(t[e], e++);
              }
              if (d.has(e[a])) {
                const r = d.get(e[a]);
                if (c < r && r < s) {
                  let i = a,
                    l = 1;
                  for (; ++i < o && i < s && d.get(e[i]) === r + l; ) l++;
                  if (l > r - c) {
                    const i = n(e[a], 0);
                    for (; c < r; ) u(n(t[c++], 1), i);
                  } else
                    (_ = n(t[c++], 1)),
                      (h = n(e[a++], -1)) &&
                        h.parentNode &&
                        h.parentNode.replaceChild(_, h);
                } else a++;
              } else l(n(e[a++], -1));
            }
          var _, h;
        })(
          r,
          d,
          (function (e, t) {
            return (n, r) => {
              if (r < 0) {
                const n = e[e.length - 1];
                if (n) {
                  const { template: r, nodes: i, context: o } = n;
                  i.pop(), i.length || (e.pop(), r.unmount(o, t, null));
                }
              }
              return n;
            };
          })(Array.from(i.values()), t),
          n
        ),
        c.forEach((e) => e()),
        (this.childrenMap = a),
        (this.nodes = d),
        this
      );
    },
    unmount(e, t) {
      return this.update(M, t), this;
    },
  },
  x = {
    mount(e, t) {
      return this.update(e, t);
    },
    update(e, t) {
      const n = !!this.evaluate(e),
        r = () => {
          const n = this.node.cloneNode();
          u(n, this.placeholder),
            (this.template = this.template.clone()),
            this.template.mount(n, e, t);
        };
      switch (!0) {
        case !this.value && n:
          r();
          break;
        case this.value && !n:
          this.unmount(e);
          break;
        default:
          n && this.template.update(e, t);
      }
      return (this.value = n), this;
    },
    unmount(e, t) {
      return this.template.unmount(e, t, !0), this;
    },
  };
function D(e) {
  throw new Error(e);
}
function G(e) {
  const t = new Map(),
    n = (n) => (t.has(n) || t.set(n, e.call(this, n))) && t.get(n);
  return (n.cache = t), n;
}
function V(e) {
  return e.reduce((e, t) => {
    const { value: n, type: r } = t;
    switch (!0) {
      case !t.name && 0 === r:
        return Object.assign({}, e, n);
      case 3 === r:
        e.value = t.value;
        break;
      default:
        e[o(t.name)] = t.value;
    }
    return e;
  }, {});
}
const Y = "undefined" == typeof Element ? {} : Element.prototype,
  z = G((e) => Y.hasOwnProperty(e)),
  F = /^on/,
  j = {
    handleEvent(e) {
      this[e.type](e);
    },
  },
  H = new WeakMap();
function K(e) {
  return U(e) ? "" : e;
}
const W = (e, t) => {
  const n = e.childNodes[t];
  if (n.nodeType === Node.COMMENT_NODE) {
    const t = document.createTextNode("");
    return e.replaceChild(t, n), t;
  }
  return n;
};
var Q = {
  0: function e(t, n, r, i) {
    let { name: o } = n;
    if (!o)
      return (
        i &&
          (function (e, t, n) {
            const r = t ? Object.keys(t) : [];
            Object.keys(n)
              .filter((e) => !r.includes(e))
              .forEach((t) => e.removeAttribute(t));
          })(t, r, i),
        void (
          r &&
          (function (t, n) {
            Object.entries(n).forEach((n) => {
              let [r, i] = n;
              return e(t, { name: r }, i);
            });
          })(t, r)
        )
      );
    !z(o) &&
      ((function (e) {
        return v(e, "boolean");
      })(r) ||
        B(r) ||
        w(r)) &&
      (t[o] = r),
      (function (e) {
        return !e && 0 !== e;
      })(r)
        ? t.removeAttribute(o)
        : (function (e) {
            return !0 === e || ["string", "number"].includes(typeof e);
          })(r) &&
          t.setAttribute(
            o,
            (function (e, t) {
              return !0 === t ? e : t;
            })(o, r)
          );
  },
  1: function (e, t, n) {
    let { name: r } = t;
    const i = r.replace(F, ""),
      o =
        H.get(e) ||
        ((e) => {
          const t = Object.create(j);
          return H.set(e, t), t;
        })(e),
      [s, a] = ((e) => (Array.isArray(e) ? e : [e, !1]))(n),
      c = o[i],
      l = s && !c;
    c && !s && e.removeEventListener(i, o),
      l && e.addEventListener(i, o, a),
      (o[i] = s);
  },
  2: function (e, t, n) {
    e.data = K(n);
  },
  3: function (e, t, n) {
    e.value = K(n);
  },
};
const J = {
  mount(e) {
    return (this.value = this.evaluate(e)), X(this, this.value), this;
  },
  update(e) {
    const t = this.evaluate(e);
    return this.value !== t && (X(this, t), (this.value = t)), this;
  },
  unmount() {
    return 1 === this.type && X(this, null), this;
  },
};
function X(e, t) {
  return Q[e.type](e.node, e, t, e.value);
}
function q(e, t) {
  return Object.assign({}, J, t, {
    node: 2 === t.type ? W(e, t.childNodeIndex) : e,
  });
}
const Z = (e, t) => e[g] || t,
  $ = {
    attributes: [],
    getTemplateScope(e, t) {
      return (function (e, t, n) {
        if (!e || !e.length) return n;
        const r = e.map((e) => Object.assign({}, e, { value: e.evaluate(t) }));
        return Object.assign(Object.create(n || null), V(r));
      })(this.attributes, e, t);
    },
    mount(e, t) {
      const n =
          !!e.slots &&
          e.slots.find((e) => {
            let { id: t } = e;
            return t === this.name;
          }),
        { parentNode: r } = this.node,
        i = Z(e, t);
      return (
        (this.template = n && ae(n.html, n.bindings).createDOM(r)),
        this.template &&
          (a(this.node),
          this.template.mount(this.node, this.getTemplateScope(e, i), i),
          (this.template.children = Array.from(this.node.childNodes))),
        ee(this.node),
        l(this.node),
        this
      );
    },
    update(e, t) {
      if (this.template) {
        const n = Z(e, t);
        this.template.update(this.getTemplateScope(e, n), n);
      }
      return this;
    },
    unmount(e, t, n) {
      return (
        this.template &&
          this.template.unmount(this.getTemplateScope(e, t), null, n),
        this
      );
    },
  };
function ee(e) {
  const t = e && e.firstChild;
  t && (u(t, e), ee(e));
}
function te(e) {
  return e.reduce((e, t) => {
    let { bindings: n } = t;
    return e.concat(n);
  }, []);
}
const ne = {
  mount(e) {
    return this.update(e);
  },
  update(e, t) {
    const n = this.evaluate(e);
    return (
      n && n === this.name
        ? this.tag.update(e)
        : (this.unmount(e, t, !0),
          (this.name = n),
          (this.tag = (function (e, t, n) {
            return (
              void 0 === t && (t = []),
              void 0 === n && (n = []),
              e
                ? e({ slots: t, attributes: n })
                : ae(
                    (function (e) {
                      return e.reduce((e, t) => e + t.html, "");
                    })(t),
                    [
                      ...te(t),
                      {
                        expressions: n.map((e) =>
                          Object.assign({ type: 0 }, e)
                        ),
                      },
                    ]
                  )
            );
          })(this.getComponent(n), this.slots, this.attributes)),
          this.tag.mount(this.node, e)),
      this
    );
  },
  unmount(e, t, n) {
    return this.tag && this.tag.unmount(n), this;
  },
};
var re = {
  1: function (e, t) {
    let { evaluate: n, template: r } = t;
    const i = document.createTextNode("");
    return (
      u(i, e),
      l(e),
      Object.assign({}, x, {
        node: e,
        evaluate: n,
        placeholder: i,
        template: r.createDOM(e),
      })
    );
  },
  2: function (e, t) {
    let { expressions: n } = t;
    return Object.assign(
      {},
      ((r = n.map((t) => q(e, t))),
      ["mount", "update", "unmount"].reduce(
        (e, t) =>
          Object.assign({}, e, { [t]: (e) => r.map((n) => n[t](e)) && void 0 }),
        {}
      ))
    );
    var r;
  },
  0: function (e, t) {
    let {
      evaluate: n,
      condition: r,
      itemName: i,
      indexName: o,
      getKey: s,
      template: a,
    } = t;
    const c = document.createTextNode(""),
      d = e.cloneNode();
    return (
      u(c, e),
      l(e),
      Object.assign({}, k, {
        childrenMap: new Map(),
        node: e,
        root: d,
        condition: r,
        evaluate: n,
        isTemplateTag: P(d),
        template: a.createDOM(e),
        getKey: s,
        indexName: o,
        itemName: i,
        placeholder: c,
      })
    );
  },
  3: function (e, t) {
    let { evaluate: n, getComponent: r, slots: i, attributes: o } = t;
    return Object.assign({}, ne, {
      node: e,
      evaluate: n,
      slots: i,
      attributes: o,
      getComponent: r,
    });
  },
  4: function (e, t) {
    let { name: n, attributes: r } = t;
    return Object.assign({}, $, { attributes: r, node: e, name: n });
  },
};
function ie(e, t) {
  return e.map((e) =>
    2 === e.type
      ? Object.assign({}, e, { childNodeIndex: e.childNodeIndex + t })
      : e
  );
}
function oe(e, t) {
  switch (!0) {
    case I(e):
      s(t, e);
      break;
    case P(e):
      e.parentNode.replaceChild(t, e);
      break;
    default:
      e.appendChild(t);
  }
}
const se = Object.freeze({
  createDOM(e) {
    return (
      (this.dom =
        this.dom ||
        (function (e, t) {
          return (
            t &&
            ("string" == typeof t
              ? (function (e, t) {
                  return I(e)
                    ? (function (e, t) {
                        return t.ownerDocument.importNode(
                          new window.DOMParser().parseFromString(
                            `<svg xmlns="http://www.w3.org/2000/svg">${e}</svg>`,
                            "application/xml"
                          ).documentElement,
                          !0
                        );
                      })(t, e)
                    : (function (e, t) {
                        const n = P(t) ? t : document.createElement("template");
                        return (n.innerHTML = e), n.content;
                      })(t, e);
                })(e, t)
              : t)
          );
        })(e, this.html) ||
        document.createDocumentFragment()),
      this
    );
  },
  mount(e, t, n, r) {
    if ((void 0 === r && (r = {}), !e))
      throw new Error(
        "Please provide DOM node to mount properly your template"
      );
    this.el && this.unmount(t);
    const { fragment: i, children: o, avoidDOMInjection: s } = r,
      { parentNode: a } = o ? o[0] : e,
      c = P(e),
      l = c
        ? (function (e, t, n) {
            const r = Array.from(e.childNodes);
            return Math.max(r.indexOf(t), r.indexOf(n.head) + 1, 0);
          })(a, e, r)
        : null;
    this.createDOM(e);
    const u = i || this.dom.cloneNode(!0);
    return (
      (this.el = c ? a : e),
      (this.children = c ? o || Array.from(u.childNodes) : null),
      !s && u && oe(e, u),
      (this.bindings = this.bindingsData.map((e) =>
        (function (e, t, n) {
          const {
              selector: r,
              type: i,
              redundantAttribute: o,
              expressions: s,
            } = t,
            a = r ? e.querySelector(r) : e;
          o && a.removeAttribute(o);
          const c = s || [];
          return (re[i] || re[2])(
            a,
            Object.assign({}, t, { expressions: n && !r ? ie(c, n) : c })
          );
        })(this.el, e, l)
      )),
      this.bindings.forEach((e) => e.mount(t, n)),
      (this.meta = r),
      this
    );
  },
  update(e, t) {
    return this.bindings.forEach((n) => n.update(e, t)), this;
  },
  unmount(e, t, n) {
    void 0 === n && (n = !1);
    const r = this.el;
    if (!r) return this;
    switch ((this.bindings.forEach((r) => r.unmount(e, t, n)), !0)) {
      case r[A] || null === n:
        break;
      case Array.isArray(this.children):
        c(this.children);
        break;
      case !n:
        a(r);
        break;
      case !!n:
        l(r);
    }
    return (this.el = null), this;
  },
  clone() {
    return Object.assign({}, this, { meta: {}, el: null });
  },
});
function ae(e, t) {
  return (
    void 0 === t && (t = []),
    Object.assign({}, se, { html: e, bindingsData: t })
  );
}
function ce() {
  return this;
}
function le(e) {
  return w(e) ? (e.prototype && e.prototype.constructor ? new e() : e()) : e;
}
function ue(e) {
  return Array.isArray(e)
    ? e
    : /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
        Object.prototype.toString.call(e)
      ) && "number" == typeof e.length
    ? Array.from(e)
    : [e];
}
function de(e, t) {
  return ue(
    "string" == typeof e ? (t || ve.getHostNode()).querySelectorAll(e) : e
  );
}
const _e = (e) => (1 === e.length ? e[0] : e);
function he(e, t, n) {
  const r = "object" == typeof t ? t : { [t]: n },
    i = Object.keys(r);
  return (
    ue(e).forEach((e) => {
      i.forEach((t) => e.setAttribute(t, r[t]));
    }),
    e
  );
}
const Ee = new Map();
var pe,
  me = {
    CSS_BY_NAME: Ee,
    add(e, t) {
      return Ee.has(e) || (Ee.set(e, t), this.inject()), this;
    },
    inject() {
      return (
        ((() => {
          if (pe) return pe;
          if (
            (he(
              (pe = de("style[riot]")[0] || document.createElement("style")),
              "type",
              "text/css"
            ),
            !pe.parentNode)
          ) {
            const e = ve.getHostNode().querySelectorAll("style");
            e[e.length - 1].after(pe);
          }
          return pe;
        })().innerHTML = [...Ee.values()].join("\n")),
        this
      );
    },
    remove(e) {
      return Ee.has(e) && (Ee.delete(e), this.inject()), this;
    },
  };
function Ae(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return function () {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return (r = [...n, ...r]).length < e.length ? Ae(e, ...r) : e(...r);
  };
}
const Se = Object.freeze({
    $(e) {
      return de(e, this.root)[0];
    },
    $$(e) {
      return de(e, this.root);
    },
  }),
  ge = Object.freeze({ [E]: ce, [p]: ce, [m]: ce }),
  Oe = Object.freeze({
    shouldUpdate: ce,
    onBeforeMount: ce,
    onMounted: ce,
    onBeforeUpdate: ce,
    onUpdated: ce,
    onBeforeUnmount: ce,
    onUnmounted: ce,
  }),
  Ce = Object.assign({}, ge, { clone: ce, createDOM: ce }),
  fe = G(be),
  Te = (e, t) => (e[_] = t);
function Ne(e) {
  return [E, p, m].reduce((t, n) => ((t[n] = e(n)), t), {});
}
function be(e) {
  const { css: t, template: n, exports: r, name: i } = e,
    o = n
      ? (function (e, t) {
          const n = (function (e) {
            return (
              void 0 === e && (e = {}),
              Object.entries(le(e)).reduce((e, t) => {
                let [n, r] = t;
                var i;
                return (
                  (e[
                    ((i = n),
                    i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase())
                  ] = be(r)),
                  e
                );
              }, {})
            );
          })(t.exports ? t.exports.components : {});
          return e(ae, T, f, (e) => (e === t.name ? fe(t) : n[e] || d.get(e)));
        })(n, e)
      : Ce;
  return (e) => {
    let { slots: s, attributes: a, props: c } = e;
    if (r && r[A])
      return (function (e, t) {
        let { slots: n, attributes: r, props: i, css: o, template: s } = t;
        s && D("Pure components can not have html"),
          o && D("Pure components do not have css");
        const a = y(e({ slots: n, attributes: r, props: i }), ge);
        return Ne(
          (e) =>
            function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              if (e === E) {
                const [e] = n;
                R(e, A, !0), Te(e, a);
              }
              return a[e](...n), a;
            }
        );
      })(r, { slots: s, attributes: a, props: c, css: t, template: n });
    const l = le(r) || {},
      u = (function (e) {
        let { css: t, template: n, componentAPI: r, name: i } = e;
        return (
          t && i && me.add(i, t),
          Ae(Le)(
            L(
              y(r, Object.assign({}, Oe, { props: {}, state: {} })),
              Object.assign({ slots: null, root: null }, Se, {
                name: i,
                css: t,
                template: n,
              })
            )
          )
        );
      })({ css: t, template: o, componentAPI: l, name: i })({
        slots: s,
        attributes: a,
        props: c,
      });
    return {
      mount: (e, t, n) => u.mount(e, n, t),
      update: (e, t) => u.update(t, e),
      unmount: (e) => u.unmount(e),
    };
  };
}
function Re(e, t) {
  return Object.assign({}, e, le(t));
}
function Le(e, t) {
  let { slots: n, attributes: r, props: i } = t;
  return (
    (s = (function (e) {
      return [...h].reduce((e, t) => t(e) || e, e);
    })(
      L(B(e) ? Object.create(e) : e, {
        mount(t, s, a) {
          return (
            void 0 === s && (s = {}),
            R(t, A, !1),
            (this[g] = a),
            (this[O] = (function (e, t) {
              void 0 === t && (t = []);
              const n = t.map((t) => q(e, t)),
                r = {};
              return Object.assign(
                r,
                Object.assign(
                  { expressions: n },
                  Ne((e) => (t) => (n.forEach((n) => n[e](t)), r))
                )
              );
            })(t, r).mount(a)),
            R(
              this,
              "props",
              Object.freeze(
                Object.assign(
                  {},
                  (function (e, t) {
                    return (
                      void 0 === t && (t = {}),
                      Object.assign(
                        {},
                        (function (e) {
                          return Array.from(e.attributes).reduce(
                            (e, t) => ((e[o(t.name)] = t.value), e),
                            {}
                          );
                        })(e),
                        le(t)
                      )
                    );
                  })(t, i),
                  V(this[O].expressions)
                )
              )
            ),
            (this.state = Re(this.state, s)),
            (this[C] = this.template.createDOM(t).clone()),
            Te(t, this),
            e.name &&
              (function (e, t) {
                (function (e) {
                  return (
                    (function (e, t, n) {
                      const r = ["is"];
                      return _e(
                        ue(e).map((e) => _e(r.map((t) => e.getAttribute(t))))
                      );
                    })(e) || e.tagName.toLowerCase()
                  );
                })(e) !== t && he(e, "is", t);
              })(t, e.name),
            R(this, "root", t),
            R(this, "slots", n),
            this.onBeforeMount(this.props, this.state),
            this[C].mount(t, this, a),
            this.onMounted(this.props, this.state),
            this
          );
        },
        update(e, t) {
          void 0 === e && (e = {}), t && ((this[g] = t), this[O].update(t));
          const n = V(this[O].expressions);
          if (!1 !== this.shouldUpdate(n, this.props))
            return (
              R(this, "props", Object.freeze(Object.assign({}, this.props, n))),
              (this.state = Re(this.state, e)),
              this.onBeforeUpdate(this.props, this.state),
              this[S] || ((this[S] = !0), this[C].update(this, this[g])),
              this.onUpdated(this.props, this.state),
              (this[S] = !1),
              this
            );
        },
        unmount(e) {
          return (
            this.onBeforeUnmount(this.props, this.state),
            this[O].unmount(),
            this[C].unmount(this, this[g], null === e ? null : !e),
            this.onUnmounted(this.props, this.state),
            this
          );
        },
      })
    )),
    Object.keys(e)
      .filter((t) => w(e[t]))
      .forEach((e) => {
        s[e] = s[e].bind(s);
      }),
    s
  );
  var s;
}
function ye(e) {
  return function (t, n, r) {
    let { slots: i, attributes: o, parentScope: s } = void 0 === r ? {} : r;
    return (function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.reduce(
        (e, t) =>
          function () {
            return e(t(...arguments));
          }
      );
    })(
      (e) => e.mount(t, s),
      (e) => e({ props: n, slots: i, attributes: o }),
      be
    )(e);
  };
}
const ve = {
  SHADOW_ROOT: null,
  bind(e) {
    this.SHADOW_ROOT = e;
  },
  getHostNode() {
    return this.SHADOW_ROOT ? this.SHADOW_ROOT : document;
  },
};
var Ie;
!(function (e) {
  (e.HOST_TYPE_INTERNAL = "INTERNAL"),
    (e.HOST_TYPE_EXTERNAL = "EXTERNAL"),
    (e.ORM_CONFIGS = "CONFIGS"),
    (e.ORM_RUNNERS = "RUNNERS"),
    (e.ORM_SESSIONS = "SESSIONS"),
    (e.CC_OFF = "None"),
    (e.EVENT_ENGINE_READY = "ive-ready"),
    (e.EVENT_ENGINE_ATTACH_VIDEO_SRC = "ive-attach-video-src"),
    (e.EVENT_ENGINE_ATTACH_AUDIO_SRC = "ive-attach-audio-src"),
    (e.EVENT_ENGINE_EXPERIENCE_LOADING = "ive-experience-loading"),
    (e.EVENT_ENGINE_TIMEUPDATE = "ive-time-update"),
    (e.EVENT_ENGINE_VISUAL_INTERACTION = "ive-visual-interaction"),
    (e.EVENT_ENGINE_VISUAL_PRESENTED_TIMEUPDATE = "ive-visual-presented"),
    (e.RUNNER_TYPE_IMMEDIATE = "IMMEDIATE"),
    (e.RUNNER_TYPE_TIMER = "TIMER"),
    (e.RUNNER_TYPE_INTERACTION = "INTERACTION"),
    (e.RUNNER_STATE_BUSY = "busy"),
    (e.RUNNER_STATE_IDLE = "idle"),
    (e.CSS_VIDEO_ELEMENT = "ive-video-element"),
    (e.CSS_AUDIO_ELEMENT = "ive-audio-element"),
    (e.CSS_ENGINE_CONTAINER = "ive-engine-container"),
    (e.CSS_VISUAL_CONTAINER = "ive-visual-container"),
    (e.CSS_CONTROL_CONTAINER = "ive-control-container"),
    (e.CSS_LOADER_CONTAINER = "ive-loader-container"),
    (e.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP =
      "ive-loader-video-load-progress-group"),
    (e.CSS_LOADER_ENGINE_BUSY_GROUP = "ive-loader-engine-busy-group"),
    (e.CSS_LOADER_WELCOME_GROUP = "ive-loader-welcome-group"),
    (e.CSS_LOADER_NETWORK_ERROR_GROUP = "ive-loader-network-error-group"),
    (e.CSS_LOADER_VIDEO_CAPTION_CONTAINER =
      "ive-loader-video-caption-container"),
    (e.CSS_LOADER_AUDIO_CAPTION_CONTAINER =
      "ive-loader-audion-caption-container"),
    (e.CSS_LOADER_RESUME_PLAY_BTN = "ive-loader-resume-play-container"),
    (e.CSS_CONTROL_PROGRESS_TIME_GROUP = "ive-control-progress-time-group"),
    (e.CSS_CONTROL_PROGRESS_BAR = "ive-control-progress-bar-group"),
    (e.CSS_CONTROL_TIME_PER_DURATION = "ive-control-time-per-duration"),
    (e.CSS_CONTROL_CTA_GROUP = "ive-control-cta-group"),
    (e.CSS_CONTROL_PREVIOUS_BTN = "ive-control-previous-btn"),
    (e.CSS_CONTROL_PLAY_PAUSE_BTN = "ive-control-play-pause-btn"),
    (e.CSS_CONTROL_NEXT_BTN = "ive-control-next-btn"),
    (e.CSS_CONTROL_REWIND_15SEC_BTN = "ive-control-rewind-15sec-btn"),
    (e.CSS_CONTROL_FORWARD_15SEC_BTN = "ive-control-forward-15sec-btn"),
    (e.CSS_CONTROL_VOLUME_GROUP = "ive-control-volume-group"),
    (e.CSS_CONTROL_VOLUME_BTN = "ive-control-volume-btn"),
    (e.CSS_CONTROL_VOLUME_RANGE_INPUT = "ive-control-volume-range"),
    (e.CSS_CONTROL_CAPTION_BTN = "ive-control-caption-btn"),
    (e.CSS_CONTROL_CAPTION_LIST_GROUP = "ive-control-caption-select"),
    (e.CSS_CONTROL_PLAYBACK_RATE_BTN = "ive-control-playback-rate-btn"),
    (e.CSS_CONTROL_PLAYBACK_RATE_LIST_GROUP =
      "ive-control-playback-rate-select"),
    (e.CSS_CONTROL_FULLSCREEN_BTN = "ive-control-fullscreen-btn"),
    (e.CSS_CONTROL_CLOSE_POPUP_BTN = "ive-control-close-popup-btn"),
    (e.CSS_CONTROL_POPUP_CONTAINER = "ive-control-popup-container"),
    (e.CSS_CLS_ICON_PLAY_BG = "ive-play-btn-bg-img"),
    (e.CSS_CLS_ICON_PAUSE_BG = "pause-btn-bg-img"),
    (e.CSS_CLS_ICON_PREV_BG = "prev-btn-bg-img"),
    (e.CSS_CLS_ICON_NEXT_BG = "next-btn-bg-img"),
    (e.CSS_CLS_ICON_REWIND_15SEC_BG = "rewind-15sec-btn-bg-img"),
    (e.CSS_CLS_ICON_FORWARD_15SEC_BG = "forward-15sec-btn-bg-img"),
    (e.CSS_CLS_ICON_VOLUME_BG = "volume-btn-bg-img"),
    (e.CSS_CLS_ICON_VOLUME_LOW_BG = "volume-low-btn-bg-img"),
    (e.CSS_CLS_ICON_MUTE_BG = "mute-btn-bg-img"),
    (e.CSS_CLS_ICON_CAPTION_BG = "caption-btn-bg-img"),
    (e.CSS_CLS_ICON_FULLSCREEN_BG = "fullscreen-btn-bg-img"),
    (e.CSS_CLS_ICON_OK_BG = "ok-btn-bg-img"),
    (e.CSS_CLS_ICON_RELOAD_BG = "reload-btn-bg-img"),
    (e.CSS_CLS_ICON_CLOSE_BG = "close-btn-bg-img"),
    (e.CSS_CLS_ICON_RESUME_PLAY_BG = "circle-play-bg-img"),
    (e.CSS_CLS_HIDDEN = "ive-hidden"),
    (e.CSS_CLS_INVISIBLE = "ive-invisible"),
    (e.CSS_CLS_CHAPTER_LINK = "ive-chapter-link"),
    (e.CSS_CLS_VISUAL_SHOWING = "ive-visual-showing"),
    (e.CSS_CLS_CONTROL_SHOW = "ive-control-show"),
    (e.IVE_FONT_LOGO_STYLE =
      "font-family: monospace,system-ui,sans-serif; font-weight: bold; color: red; text-shadow: 2px 2px 0 rgb(217,31,38) , 4px 4px 0 rgb(226,91,14) , 6px 6px 0 rgb(245,221,8) , 8px 8px 0 rgb(5,148,68) , 10px 10px 0 rgb(2,135,206) , 12px 12px 0 rgb(4,77,145) , 14px 14px 0 rgb(42,21,113)");
})(Ie || (Ie = {}));
const Pe = {
    DEFAULT_HOST_TYPE: "INTERNAL",
    HOST_BASE_URL: "http://localhost:3000",
    HOST_ENDPOINT_GET_ALL: "/api/v1/get_all?",
    HOST_ENDPOINT_GET: "/api/v1/get?",
    HOST_ENDPOINT_PUT: "/api/v1/put?",
    HOST_ENDPOINT_POST: "/api/v1/post?",
    HOST_ENDPOINT_DELETE: "/api/v1/delete?",
    DB: { CONFIGS: [{}], RUNNERS: [{}], SESSIONS: [{}] },
    POWERED_BY_IVE_MSG: `<br/><span style='font-size:0.5em;color:springgreen'>Powered by</span> <span style='${Ie.IVE_FONT_LOGO_STYLE};font-size:0.75em'>IVE</span>`,
    WELCOME_CTA_MSG: "<span style='opacity:0.75'>Begin Experience?</span>",
    NETWORK_ERROR_CTA_MSG:
      "<span style='opacity:0.75'>Sorry!</span><br/><span style='font-size:0.65em;color:red'>something went wrong</span>",
  },
  we = Object.freeze({
    DELAY_BY: "delayBy",
    PLAY_FILM: "playFilm",
    PAUSE_FILM: "pauseFilm",
    SEEK_FILM: "seekFilm",
    PLAY_AUDIO: "playAudio",
    PAUSE_AUDIO: "pauseAudio",
    SEEK_AUDIO: "seekAudio",
    SHOW_VISUAL: "showVisual",
    HIDE_VISUAL: "hideVisual",
    LOAD_VISUAL: "loadVisual",
    PUSH_ASIDE: "pushAsideIndex",
  }),
  Be = Object.freeze({
    RIOT_INTERACTION: "riotinteraction",
    TOUCH_END: "touchend",
    MOUSE_OVER: "mouseover",
    CLICK: "click",
  }),
  Ue = Object.create(Pe);
Ue.update = function (e, t) {
  Ue[e] = t;
};
class Me extends HTMLElement {
  constructor({} = {}) {
    super(),
      (this._root = void 0),
      (this._detail = void 0),
      (this._config = void 0),
      (this._configs = void 0),
      (this._runner = void 0),
      (this._runners = void 0),
      this.hasAttribute("run") || this.setAttribute("run", "0"),
      this.hasAttribute("conf") || this.setAttribute("conf", "0"),
      (this.root = this.attachShadow({ mode: "closed" })),
      console.log(
        "%c\n__________\n\n  I V E      \n__________\n",
        `font-size: 25px; ${Ie.IVE_FONT_LOGO_STYLE}`
      );
  }
  static get observedAttributes() {
    return ["css", "script", "data", "run", "conf"];
  }
  get run() {
    return parseInt(this.getAttribute("run"));
  }
  get conf() {
    return parseInt(this.getAttribute("conf"));
  }
  get css() {
    return this.getAttribute("css");
  }
  get script() {
    return this.getAttribute("script");
  }
  get data() {
    return this.getAttribute("data");
  }
  get detail() {
    return this._detail;
  }
  set detail(e) {
    this._detail = e;
  }
  get runner() {
    return this._runner;
  }
  set runner(e) {
    this._runner && this._runner.unbind(),
      (this._runner = e),
      this._runner.bind(this.root);
  }
  get runners() {
    return this._runners;
  }
  set runners(e) {
    this._runners = e;
  }
  get configs() {
    return this._configs;
  }
  set configs(e) {
    this._configs = e;
  }
  get config() {
    return this._config;
  }
  set config(e) {
    this._config && this._config.unbind(),
      (this._config = e),
      this._config.bind(this.root);
  }
  get root() {
    return this._root;
  }
  set root(e) {
    (this._root = e), ve.bind(this._root);
  }
  _extendElementPrototype() {
    (Element.prototype.showMe = function () {
      this.classList.remove(Ie.CSS_CLS_HIDDEN);
    }),
      (Element.prototype.hideMe = function () {
        this.classList.add(Ie.CSS_CLS_HIDDEN);
      }),
      (Element.prototype.showFocusMe = function () {
        this.classList.remove(Ie.CSS_CLS_HIDDEN), this.focus();
      }),
      (Element.prototype.toggleMe = function () {
        this.classList.toggle(Ie.CSS_CLS_HIDDEN);
      });
  }
  _shrinkElementPrototype() {
    delete Element.prototype.showMe,
      delete Element.prototype.hideMe,
      delete Element.prototype.showFocusMe,
      delete Element.prototype.toggleMe;
  }
}
let ke, xe, De, Ge, Ve, Ye, ze, Fe, je;
(ke = we.PLAY_FILM),
  (xe = we.PAUSE_FILM),
  (De = we.SEEK_FILM),
  (Ge = we.PLAY_AUDIO),
  (Ve = we.PAUSE_AUDIO),
  (Ye = we.SEEK_AUDIO),
  (ze = we.SHOW_VISUAL),
  (Fe = we.HIDE_VISUAL),
  (je = we.LOAD_VISUAL);
class He extends Me {
  constructor({} = {}) {
    super(),
      (this._isBuffering = !1),
      (this._isFilmLoadError = !1),
      (this._isAudioLoadError = !1),
      (this._filmBuffered = 0),
      (this._audioBuffered = 0),
      (this._filmLoadProgress = 0),
      (this._audioLoadProgress = 0),
      (this._isExperiencePaused_ = !1),
      (this._isRunnerFilmPaused_ = !1),
      (this._isRunnerAudioPlaying_ = !1),
      (this._isRunnerVisualShowing_ = !1),
      (this._visualElements_ = {});
  }
  [ke]() {
    this.root
      .getElementById(Ie.CSS_VIDEO_ELEMENT)
      .play()
      .then(() => {
        this._isRunnerFilmPaused_ = !1;
      })
      .catch((e) => {
        (this._isFilmLoadError_ = !0),
          console.warn(`PlayVideoError:\n[A.PLAY_FILM] call\n\n${e}`);
      });
  }
  [xe]() {
    this.root.getElementById(Ie.CSS_VIDEO_ELEMENT).pause(),
      (this._isRunnerFilmPaused_ = !0);
  }
  [De](e) {
    this.root.getElementById(Ie.CSS_VIDEO_ELEMENT).currentTime = e;
  }
  [Ge]() {
    this.root
      .getElementById(Ie.CSS_AUDIO_ELEMENT)
      .play()
      .then(() => {
        this._isRunnerAudioPlaying_ = !0;
      })
      .catch((e) => {
        (this._isAudioLoadError_ = !0),
          console.warn(`PlayAudioError:\n[A.PLAY_AUDIO] call\n\n${e}`);
      });
  }
  [Ve]() {
    const e = this.root.getElementById(Ie.CSS_AUDIO_ELEMENT);
    e.pause(), (e.currentTime = 0), (this._isRunnerAudioPlaying_ = !1);
  }
  [Ye](e) {
    this.root.getElementById(Ie.CSS_AUDIO_ELEMENT).currentTime = e;
  }
  [ze]() {
    this.root.getElementById(Ie.CSS_VISUAL_CONTAINER).showMe(),
      (this._isRunnerVisualShowing_ = !0);
  }
  [Fe]() {
    this.root.getElementById(Ie.CSS_VISUAL_CONTAINER).hideMe(),
      (this._isRunnerVisualShowing_ = !1);
  }
  [je](e) {
    e < this.config.visuals.length &&
      this.root.getElementById(Ie.CSS_VISUAL_CONTAINER).load(e);
  }
  set _isBuffering_(e) {
    (this._isBuffering = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _isBuffering_() {
    return this._isBuffering;
  }
  set _isFilmLoadError_(e) {
    (this._isFilmLoadError = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _isFilmLoadError_() {
    return this._isFilmLoadError;
  }
  set _isAudioLoadError_(e) {
    (this._isAudioLoadError = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _isAudioLoadError_() {
    return this._isAudioLoadError;
  }
  set _filmBuffered_(e) {
    (this._filmBuffered = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _filmBuffered_() {
    return this._filmBuffered;
  }
  set _audioBuffered_(e) {
    (this._audioBuffered = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _audioBuffered_() {
    return this._audioBuffered;
  }
  set _filmLoadProgress_(e) {
    (this._filmLoadProgress = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _filmLoadProgress_() {
    return this._filmLoadProgress;
  }
  set _audioLoadProgress_(e) {
    (this._audioLoadProgress = e),
      this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_EXPERIENCE_LOADING));
  }
  get _audioLoadProgress_() {
    return this._audioLoadProgress;
  }
  get _currentTime_() {
    return this.root.getElementById(Ie.CSS_VIDEO_ELEMENT).currentTime;
  }
  get _duration_() {
    return this.root.getElementById(Ie.CSS_VIDEO_ELEMENT).duration;
  }
  get _playbackRate_() {
    return this.root.getElementById(Ie.CSS_VIDEO_ELEMENT).playbackRate;
  }
  get _timePerDuration_() {
    const e = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT);
    return e.currentTime
      ? `${new Date(1e3 * e.currentTime)
          .toISOString()
          .substring(11, 19)
          .replace(/00:/, "")} / ${new Date(1e3 * e.duration)
          .toISOString()
          .substring(11, 19)
          .replace(/00:/, "")}`
      : "--:--:--/--:--:--";
  }
  _initExperience_() {
    const e = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT),
      t = this.root.getElementById(Ie.CSS_AUDIO_ELEMENT),
      n = this.root.getElementById(Ie.CSS_LOADER_WELCOME_GROUP),
      r = this.root.getElementById(Ie.CSS_CONTROL_CONTAINER);
    t
      .play()
      .then(() => {
        t.pause(), (t.muted = !1), (t.currentTime = 0);
      })
      .catch((e) => {
        (this._isAudioLoadError_ = !0),
          console.warn(`PlayAudioError:\ninitExperience call\n\n${e}`);
      }),
      e
        .play()
        .then(() => {
          (e.muted = !1),
            this._changeVolume_(null, 0.5),
            this._changePlaybackRate_(null, 1),
            this._changeCaption_(null, Ie.CC_OFF),
            r.showMe(),
            n.hideMe();
        })
        .catch((e) => {
          (this._isFilmLoadError_ = !0),
            console.warn(`PlayVideoError:\ninitExperience call\n\n${e}`);
        });
  }
  _changeExperience_(e, t = null) {}
  _changeCurrentTime_(e, t = null) {
    const n = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT),
      r = e ? parseFloat(e.currentTarget.value) * this._duration_ : t;
    (n.currentTime = r),
      this[we.PLAY_FILM](),
      this[we.PAUSE_AUDIO](),
      this[we.HIDE_VISUAL](),
      this.runner.seek();
  }
  _changeVolume_(e, t = null) {
    const n = this.root.getElementById(Ie.CSS_CONTROL_VOLUME_RANGE_INPUT),
      r = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT),
      i = this.root.getElementById(Ie.CSS_AUDIO_ELEMENT),
      o = this.root.getElementById(Ie.CSS_CONTROL_VOLUME_BTN),
      s = [
        Ie.CSS_CLS_ICON_VOLUME_BG,
        Ie.CSS_CLS_ICON_VOLUME_LOW_BG,
        Ie.CSS_CLS_ICON_MUTE_BG,
      ],
      a = e ? parseFloat(e.currentTarget.value) : t;
    (r.volume = a),
      (i.volume = a),
      null !== t && (n.value = a.toString()),
      0 == r.volume
        ? (o.classList.remove(...s), o.classList.add(Ie.CSS_CLS_ICON_MUTE_BG))
        : r.volume > 0 && r.volume < 0.5
        ? (o.classList.remove(...s),
          o.classList.add(Ie.CSS_CLS_ICON_VOLUME_LOW_BG))
        : (o.classList.remove(...s),
          o.classList.add(Ie.CSS_CLS_ICON_VOLUME_BG));
  }
  _changeCaption_(e, t = null) {
    const n = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT),
      r = this.root.getElementById(Ie.CSS_AUDIO_ELEMENT),
      i = this.root.getElementById(Ie.CSS_LOADER_VIDEO_CAPTION_CONTAINER),
      o = this.root.getElementById(Ie.CSS_LOADER_AUDIO_CAPTION_CONTAINER),
      s = this.root.getElementById(Ie.CSS_CONTROL_CAPTION_BTN),
      a = e ? e.currentTarget.innerText : t;
    s.dataset.selectedValue = a;
    for (let e = 0; e < n.textTracks.length; e++) {
      const t = n.textTracks[e],
        r = t.cues;
      if (((t.mode = "hidden"), t.label === a))
        for (let e = 0; e < r.length; e++)
          (r[e].onenter = (e) => {
            const t = document.createElement("span"),
              { text: n } = e.currentTarget || {};
            (t.innerHTML = n), i.appendChild(t), i.showMe();
          }),
            (r[e].onexit = () => {
              (i.innerHTML = ""), i.hideMe();
            });
      else if (r)
        for (let e = 0; e < r.length; e++)
          (r[e].onenter = () => {}), (r[e].onexit = () => {});
      a === Ie.CC_OFF && ((i.innerHTML = ""), i.hideMe());
    }
    for (let e = 0; e < r.textTracks.length; e++) {
      const t = r.textTracks[e],
        n = t.cues;
      if (((t.mode = "hidden"), t.label === a))
        for (let e = 0; e < n.length; e++)
          (n[e].onenter = (e) => {
            const t = document.createElement("span"),
              { text: n } = e.currentTarget || {};
            (t.innerHTML = n), o.appendChild(t), o.showMe();
          }),
            (n[e].onexit = () => {
              (o.innerHTML = ""), o.hideMe();
            });
      else if (n)
        for (let e = 0; e < n.length; e++)
          (n[e].onenter = () => {}), (n[e].onexit = () => {});
      a === Ie.CC_OFF && ((o.innerHTML = ""), o.hideMe());
    }
  }
  _changePlaybackRate_(e, t = null) {
    const n = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT),
      r = this.root.getElementById(Ie.CSS_AUDIO_ELEMENT),
      i = this.root.getElementById(Ie.CSS_CONTROL_PLAYBACK_RATE_BTN),
      o = (e ? parseFloat(e.currentTarget.innerText) : t).toFixed(2);
    (i.dataset.selectedValue = o),
      (i.innerText = `${o.replace(/(^0|.00$|0$)/g, "")}x`),
      (n.playbackRate = parseFloat(o)),
      (r.playbackRate = parseFloat(o));
  }
  _toggleControlVisibilityOnTouchDevice_(e) {
    const t = this.root.getElementById(Ie.CSS_ENGINE_CONTAINER);
    e.type == Be.TOUCH_END && t.classList.toggle(Ie.CSS_CLS_CONTROL_SHOW);
  }
  _toggleFullscreen_() {
    const e = this.root.host;
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
      ? document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen && document.webkitExitFullscreen()
      : e.requestFullscreen
      ? e.requestFullscreen()
      : e.mozRequestFullScreen
      ? e.mozRequestFullScreen()
      : e.webkitRequestFullscreen
      ? e.webkitRequestFullscreen()
      : e.msRequestFullscreen && e.msRequestFullscreen();
  }
  _toggleMute_() {
    const e = this.root.getElementById(Ie.CSS_CONTROL_VOLUME_RANGE_INPUT);
    parseFloat(e.value) > 0
      ? this._changeVolume_(null, 0)
      : this._changeVolume_(null, 0.5);
  }
  _toggleExperiencePlay_() {
    const e = this.root.getElementById(Ie.CSS_VIDEO_ELEMENT),
      t = this.root.getElementById(Ie.CSS_AUDIO_ELEMENT),
      n = this.root.getElementById(Ie.CSS_VISUAL_CONTAINER),
      r = this.root.getElementById(Ie.CSS_LOADER_RESUME_PLAY_BTN),
      i = this.root.getElementById(Ie.CSS_CONTROL_CONTAINER);
    this._isExperiencePaused_
      ? (this._isRunnerFilmPaused_ ||
          e.play().catch((e) => {
            console.warn(`PlayVideoError:\ntoggleExperiencePlay call\n\n${e}`);
          }),
        this._isRunnerAudioPlaying_ &&
          t.play().catch((e) => {
            console.warn(`PlayAudioError:\ntoggleExperiencePlay call\n\n${e}`);
          }),
        this._isRunnerVisualShowing_ && n.showMe(),
        i.showMe(),
        r.hideMe(),
        this.runner.resume(),
        (this._isExperiencePaused_ = !1))
      : this.runner.pause().then(() => {
          e.pause(),
            t.pause(),
            n.hideMe(),
            i.hideMe(),
            r.showFocusMe(),
            (this._isExperiencePaused_ = !0);
        });
  }
}
function Ke() {
  return (
    (Ke =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ke.apply(this, arguments)
  );
}
class We {
  constructor(e) {
    (this.mem = void 0),
      (this.ORM = void 0),
      (this.uid = void 0),
      (this.uid = e || Math.random().toString(16).slice(2));
  }
  deserializeArray(e) {
    return i.ObjectMapper.deserializeArray(this.constructor, e);
  }
  deserialize(e) {
    return i.ObjectMapper.deserialize(this.constructor, e);
  }
  serialize(e) {
    return i.ObjectMapper.serialize(e);
  }
  parseQuery(e = {}) {
    return new URLSearchParams(Ke({}, e));
  }
  fetch(e) {
    switch (Ue.DEFAULT_HOST_TYPE) {
      case Ie.HOST_TYPE_EXTERNAL:
        return this._external(e);
      case Ie.HOST_TYPE_INTERNAL:
        return this._internal(e);
      default:
        return Promise.reject(
          "NOT FOUND:\nHost type not found. Please set DEFAULT_HOST_TYPE to correct value"
        );
    }
  }
  _external(e) {
    const { body: t, endpoint: n, method: r } = e || {};
    return new Promise((e, i) => {
      fetch(
        n,
        Ke(
          { method: r, headers: { "Content-Type": "application/json" } },
          t ? { body: t } : {}
        )
      )
        .then((e) => e.json())
        .then((t) => e(t))
        .catch((e) => i(e));
    });
  }
  _internal(e) {
    const { body: t, endpoint: n } = e || {};
    let r = [];
    const { pathname: i, searchParams: o } = new URL(`${Ue.HOST_BASE_URL}${n}`),
      s = o.get("table");
    for (const [e, t] of o) "table" != e && (r = [e, t]);
    return new Promise((e, n) => {
      switch (i + "?") {
        case Ue.HOST_ENDPOINT_GET_ALL:
          e(Ue.DB[s]);
          break;
        case Ue.HOST_ENDPOINT_GET:
          e(Ue.DB[s].filter((e) => e[r[0]] === r[1])[0]);
          break;
        case Ue.HOST_ENDPOINT_POST:
          Ue.DB[s].push(JSON.parse(t)), e(JSON.parse(t));
          break;
        case Ue.HOST_ENDPOINT_PUT:
          let o;
          (Ue.DB[s] = Ue.DB[s].map((e) =>
            e[r[0]] === r[1] ? ((o = Ke({}, e, JSON.parse(t))), o) : e
          )),
            e(o);
          break;
        case Ue.HOST_ENDPOINT_DELETE:
          (Ue.DB[s] = Ue.DB[s].filter((e) => e[r[0]] !== r[1])),
            e("{status: SUCCESSFUL}");
          break;
        default:
          n(`Unknown api endpoint ${i}`);
      }
    });
  }
}
class Qe extends We {
  constructor(e) {
    super(e);
  }
  post() {
    return new Promise((e, t) => {
      this.fetch({
        body: this.serialize(this),
        endpoint: Ue.HOST_ENDPOINT_POST + this.parseQuery({ table: this.ORM }),
        method: "POST",
      })
        .then((t) => e(this.deserialize(t)))
        .catch((e) => t(e));
    });
  }
  put(e) {
    return new Promise((t, n) => {
      this.fetch({
        body: this.serialize(this),
        endpoint:
          Ue.HOST_ENDPOINT_PUT +
          this.parseQuery(Ke({}, e, { table: this.ORM })),
        method: "PUT",
      })
        .then((e) => t(this.deserialize(e)))
        .catch((e) => n(e));
    });
  }
  get(e) {
    return new Promise((t, n) => {
      this.fetch({
        endpoint:
          Ue.HOST_ENDPOINT_GET +
          this.parseQuery(Ke({}, e, { table: this.ORM })),
        method: "GET",
      })
        .then((e) => t(this.deserialize(e)))
        .catch((e) => n(e));
    });
  }
  delete(e) {
    return new Promise((t, n) => {
      this.fetch({
        endpoint:
          Ue.HOST_ENDPOINT_DELETE +
          this.parseQuery(Ke({}, e, { table: this.ORM })),
        method: "DELETE",
      })
        .then(() => t(!0))
        .catch((e) => n(e));
    });
  }
}
class Je extends Qe {
  constructor({ film: e, audio: t, visuals: n, uid: r } = {}) {
    super(r),
      (this.mem = null),
      (this.film = void 0),
      (this.audio = void 0),
      (this.visuals = void 0),
      (this.film = e),
      (this.audio = t),
      (this.visuals = n),
      (this.ORM = Ie.ORM_CONFIGS),
      (this._handleSourceLoad = this._handleSourceLoad.bind(this));
  }
  modify({ film: e, audio: t, visuals: n } = {}) {
    return (
      (this.film = e || this.film),
      (this.audio = t || this.audio),
      (this.visuals = n || this.visuals),
      this.put({ uid: this.uid })
    );
  }
  register() {
    return this.post();
  }
  getAllMem() {
    return this.mem;
  }
  getMem(e) {
    return this.mem[e];
  }
  setMem(e) {
    this.mem = Ke({}, this.mem, e);
  }
  bind(e) {
    return (
      this.setMem({ host: e.host }),
      this.getMem("host").addEventListener(
        Ie.EVENT_ENGINE_ATTACH_VIDEO_SRC,
        this._handleSourceLoad
      ),
      this.getMem("host").addEventListener(
        Ie.EVENT_ENGINE_ATTACH_AUDIO_SRC,
        this._handleSourceLoad
      ),
      this
    );
  }
  unbind() {
    return (
      this.getMem("host").removeEventListener(
        Ie.EVENT_ENGINE_ATTACH_VIDEO_SRC,
        this._handleSourceLoad
      ),
      this.getMem("host").removeEventListener(
        Ie.EVENT_ENGINE_ATTACH_AUDIO_SRC,
        this._handleSourceLoad
      ),
      this
    );
  }
  _handleSourceLoad({ detail: e }) {
    const { member: t, element: n } = e || {},
      r = this[t].type,
      [i, o] = r.split(";");
    if (
      (URL.revokeObjectURL(n.src),
      "MediaSource" in window && MediaSource.isTypeSupported(r))
    ) {
      const e = new MediaSource();
      (n.src = URL.createObjectURL(e)),
        (e.onsourceopen = () => {
          const o = e.addSourceBuffer(r);
          this._fetch(t)
            .then(
              (t) => (
                (o.onupdateend = () => {
                  try {
                    e.endOfStream();
                  } catch (e) {
                    URL.revokeObjectURL(n.src),
                      (n.src = URL.createObjectURL(new Blob([t], { type: i }))),
                      console.warn(
                        `Unknown:\nPossibly unsupported media type codecs or un-fragmented video source\n\n${e}`
                      );
                  }
                }),
                t
              )
            )
            .then((e) => {
              o.appendBuffer(e);
            })
            .catch((e) => {
              URL.revokeObjectURL(n.src),
                (n.src = this[t].src),
                console.warn(e);
            })
            .finally(() => {
              n.load();
            });
        });
    } else
      (n.src = this[t].src),
        n.load(),
        console.warn(
          `Unsupported:\n${this[t].type} mime type\nMedia source extension is not available in browser\nfalling back to HTML5 standard src url.`
        );
  }
  _fetch(e) {
    let t = !1;
    return new Promise((n, r) => {
      const i = new XMLHttpRequest();
      (i.responseType = "arraybuffer"),
        i.open("GET", this[e].src),
        (i.onprogress = (n) => {
          t &&
            (i.abort(),
            r(`Memory:\n${e} size exceeds 250mb\nabandoned using blob src`)),
            n.lengthComputable &&
              ((t = n.total > 262144e3),
              (this.getMem("host")[`_${e}LoadProgress_`] =
                (n.loaded / n.total) * 0.75));
        }),
        (i.onload = () => n(i.response)),
        (i.onerror = () =>
          r("Network:\nsomething went wrong during xmlHttpRequest.")),
        i.send();
    });
  }
}
function Xe(e) {
  return JSON.parse(JSON.stringify(e));
}
const qe = {
  _wait: 0,
  _timerRef: null,
  _resolve: null,
  _reject: null,
  _prom() {
    return new Promise((e, t) => {
      (this._resolve = e), (this._reject = t);
    });
  },
  now() {
    const e = this._prom();
    return (this._timerRef = setTimeout(() => this._resolve(), this._wait)), e;
  },
  abort() {
    clearTimeout(this._timerRef),
      this._reject && this._reject("Kill signal received");
  },
};
function Ze(e) {
  const t = Object.create(qe);
  return (t._wait = e), t;
}
class $e extends Qe {
  constructor({ stack: e, aside: t, uid: n } = {}) {
    super(n),
      (this.mem = null),
      (this.stack = void 0),
      (this.aside = void 0),
      (this.stack = e || []),
      (this.aside = t || []),
      (this.ORM = Ie.ORM_RUNNERS),
      (this._handleExec = this._handleExec.bind(this)),
      (this.seek = (function (e, t = 0) {
        let n;
        return function (...r) {
          clearTimeout(n),
            (n = setTimeout(() => {
              e.apply(this, r);
            }, t));
        };
      })(this.seek, 500));
  }
  modify({ stack: e, aside: t } = {}) {
    return (
      (this.stack = e || this.stack),
      (this.aside = t || this.aside),
      this.put({ uid: this.uid })
    );
  }
  register() {
    return this.post();
  }
  getAllMem() {
    return this.mem;
  }
  getMem(e) {
    return this.mem[e];
  }
  setMem(e) {
    this.mem = Ke({}, this.mem, e);
  }
  bind(e) {
    const t = Xe(this.stack),
      n = t.pop();
    return (
      this.setMem({
        state: Ie.RUNNER_STATE_IDLE,
        cloneTop: n,
        cloneStack: t,
        host: e.host,
      }),
      this.getMem("host").addEventListener(
        Ie.EVENT_ENGINE_TIMEUPDATE,
        this._handleExec
      ),
      this.getMem("host").addEventListener(
        Ie.EVENT_ENGINE_VISUAL_INTERACTION,
        this._handleExec
      ),
      this
    );
  }
  unbind() {
    return (
      this.getMem("host").removeEventListener(
        Ie.EVENT_ENGINE_TIMEUPDATE,
        this._handleExec
      ),
      this.getMem("host").removeEventListener(
        Ie.EVENT_ENGINE_VISUAL_INTERACTION,
        this._handleExec
      ),
      this
    );
  }
  seek() {
    this.pause().then(() => {
      const e = this.getMem("host")._currentTime_,
        t = Xe(
          this.stack.filter((t) => "number" == typeof t.detail && t.detail >= e)
        );
      this.setMem({ cloneStack: t, pauseStart: null }), this._setTop();
    });
  }
  pause() {
    return new Promise((e) => {
      this.getMem("delayActionRef") && this.getMem("delayActionRef").abort(),
        this.setMem({ pauseStart: Date.now() }),
        e();
    });
  }
  resume() {
    if (this.getMem("cloneTop")) {
      const e = this.getMem("pauseStart") - this.getMem("delayStart"),
        t = this.getMem("cloneTop").actions,
        n = t[t.length - 1];
      this.setMem({ pauseStart: null }),
        n === we.DELAY_BY && (t[t.length - 1] = `${we.DELAY_BY}::${e}`),
        this.getMem("state") === Ie.RUNNER_STATE_BUSY && this._exec();
    } else this.setMem({ pauseStart: null });
  }
  _handleExec({ detail: e }) {
    if (
      !this.getMem("host")._isExperiencePaused_ &&
      this.getMem("cloneTop") &&
      this.getMem("state") === Ie.RUNNER_STATE_IDLE
    ) {
      const {
        currentTime: t,
        eventType: n,
        asideIndex: r,
      } = e || { currentTime: this.getMem("host")._currentTime_ };
      switch (this.getMem("cloneTop").type) {
        case Ie.RUNNER_TYPE_IMMEDIATE:
          this._exec();
          break;
        case Ie.RUNNER_TYPE_TIMER:
          this.getMem("cloneTop").detail === Math.floor(t) && this._exec();
          break;
        case Ie.RUNNER_TYPE_INTERACTION:
          Be[this.getMem("cloneTop").detail] === n && this._exec(r);
          break;
        default:
          console.warn(
            `Undefined:\n${this.getMem("cloneTop").type} is not known`
          );
      }
    }
  }
  _setTop() {
    const e = this.getMem("cloneStack").pop();
    if (
      (this.setMem({
        cloneTop: e,
        state: e ? Ie.RUNNER_STATE_IDLE : Ie.RUNNER_STATE_BUSY,
      }),
      e && this.getMem("cloneTop").type === Ie.RUNNER_TYPE_IMMEDIATE)
    ) {
      const e = this.getMem("cloneTop").detail,
        t = "number" == typeof e ? e : Be[this.getMem("cloneTop").detail];
      this._handleExec(new CustomEvent(null, { detail: { detail: t } }));
    }
  }
  async _exec(e) {
    this.setMem({ state: Ie.RUNNER_STATE_BUSY });
    const t = this.getMem("cloneTop").actions;
    for (; t.length; ) {
      const [n, r = null] = t[t.length - 1].split("::"),
        i = we[n];
      switch (i) {
        case we.DELAY_BY:
          this.setMem({
            delayActionRef: Ze(
              (1e3 * parseInt(r)) / this.getMem("host")._playbackRate_
            ),
            delayStart: Date.now(),
          });
          try {
            await this.getMem("delayActionRef").now();
          } catch (e) {
            console.warn(`Interruption:\n${e} for ${n}`);
          }
          break;
        case we.PUSH_ASIDE:
          const t = r || e;
          this.aside[t]
            ? this.getMem("cloneStack").push(Xe(this.aside[t]))
            : console.warn(`Undefined:\naside index ${t} is out of bounds`);
          break;
        default:
          this.getMem("host")[i]
            ? this.getMem("host")[i](r)
            : console.warn(`Undefined:\n${i} is NOT a valid action`);
      }
      if (this.getMem("pauseStart")) return;
      t.pop();
    }
    this._setTop();
  }
}
class et extends Qe {
  constructor({ uid: e } = {}) {
    super(e), (this.ORM = Ie.ORM_SESSIONS);
  }
  modify({} = {}) {
    return this.put({ uid: this.uid });
  }
  register() {
    return this.post();
  }
}
const tt = {
  [Ie.ORM_CONFIGS]: Je,
  [Ie.ORM_RUNNERS]: $e,
  [Ie.ORM_SESSIONS]: et,
};
class nt extends We {
  constructor(e) {
    super(), (this.ORM = e), (this.constructor = tt[e]);
  }
  then(e) {
    return new Promise((t, n) => {
      this.fetch({
        endpoint:
          Ue.HOST_ENDPOINT_GET_ALL + this.parseQuery({ table: this.ORM }),
        method: "GET",
      })
        .then((e) => this.deserializeArray(e))
        .then((n) => t(e(n)))
        .catch((e) => n(e));
    });
  }
}
class rt extends He {
  constructor({} = {}) {
    super();
  }
  onEngineReady(e) {
    this._loadDataSrc().then(() => {
      e.apply(this),
        this._extendElementPrototype(),
        this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_READY));
    });
  }
  onDataChange(e) {
    this.isConnected &&
      this.configs &&
      this.root.childNodes.length &&
      this._loadDataSrc().then(() => {
        e.apply(this);
      });
  }
  onEngineDestroyed(e) {
    this._shrinkElementPrototype(), e.apply(this);
  }
  _loadDataSrc() {
    return new Promise((e, t) => {
      fetch(this.data)
        .then((e) => e.json())
        .then((e) => Ue.update("DB", e))
        .then(() => {
          new nt(Ie.ORM_CONFIGS)
            .then((e) => {
              (this.configs = e), (this.config = this.configs[this.conf]);
            })
            .then(() => {
              new nt(Ie.ORM_RUNNERS)
                .then((t) => {
                  (this.runners = t),
                    (this.runner = this.runners[this.run]),
                    e();
                })
                .catch((e) => t(e));
            })
            .catch((e) => t(e));
        });
    });
  }
}
class it extends rt {
  constructor({} = {}) {
    super();
  }
  _addLoaderElement() {
    const e = this._createLoader();
    return (
      e.append(
        this._createWelcomeGroup(),
        this._createNetworkErrorGroup(),
        this._createVideoLoadProgressGroup(),
        this._createEngineBusySpinner(),
        this._createVideoCaptionContainer(),
        this._createAudioCaptionContainer(),
        this._createResumePlayBtn()
      ),
      this._addLoaderListener(e),
      e
    );
  }
  _createLoader() {
    const e = document.createElement("div");
    return (e.id = Ie.CSS_LOADER_CONTAINER), e;
  }
  _createWelcomeGroup() {
    const e = document.createElement("span"),
      t = document.createElement("span"),
      n = document.createElement("button");
    return (
      (e.id = Ie.CSS_LOADER_WELCOME_GROUP),
      (t.innerHTML = `${Ue.WELCOME_CTA_MSG}${Ue.POWERED_BY_IVE_MSG}`),
      n.classList.add(Ie.CSS_CLS_ICON_OK_BG),
      (n.ariaLabel = "okay"),
      (n.disabled = !0),
      (n.onclick = this._initExperience_.bind(this)),
      e.append(t, n),
      e
    );
  }
  _createNetworkErrorGroup() {
    const e = document.createElement("span"),
      t = document.createElement("span"),
      n = document.createElement("button");
    return (
      (e.id = Ie.CSS_LOADER_NETWORK_ERROR_GROUP),
      e.classList.add(Ie.CSS_CLS_HIDDEN),
      (t.innerHTML = `${Ue.NETWORK_ERROR_CTA_MSG}`),
      n.classList.add(Ie.CSS_CLS_ICON_RELOAD_BG),
      (n.ariaLabel = "reload"),
      (n.onclick = () => location.reload()),
      e.append(t, n),
      e
    );
  }
  _createVideoLoadProgressGroup() {
    const e = document.createElement("span"),
      t = document.createTextNode("0%"),
      n = document.createElement("progress");
    return (
      (e.id = Ie.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP),
      e.classList.add(Ie.CSS_CLS_HIDDEN),
      (n.ariaLabel = "video loading"),
      (n.value = 0),
      (n.max = 100),
      e.append(t, n),
      e
    );
  }
  _createEngineBusySpinner() {
    const e = document.createElement("span");
    return (
      (e.id = Ie.CSS_LOADER_ENGINE_BUSY_GROUP),
      e.classList.add(Ie.CSS_CLS_HIDDEN),
      e
    );
  }
  _createVideoCaptionContainer() {
    const e = document.createElement("span");
    return (
      (e.id = Ie.CSS_LOADER_VIDEO_CAPTION_CONTAINER),
      e.classList.add(Ie.CSS_CLS_HIDDEN),
      e
    );
  }
  _createAudioCaptionContainer() {
    const e = document.createElement("span");
    return (
      (e.id = Ie.CSS_LOADER_AUDIO_CAPTION_CONTAINER),
      e.classList.add(Ie.CSS_CLS_HIDDEN),
      e
    );
  }
  _createResumePlayBtn() {
    const e = document.createElement("button");
    return (
      (e.id = Ie.CSS_LOADER_RESUME_PLAY_BTN),
      (e.ariaLabel = "resume experience"),
      e.classList.add(Ie.CSS_CLS_HIDDEN, Ie.CSS_CLS_ICON_RESUME_PLAY_BG),
      (e.onclick = this._toggleExperiencePlay_.bind(this)),
      e
    );
  }
  _addLoaderListener(e) {
    const [t, n, r, i] = e.childNodes,
      [, o] = t.childNodes;
    this.addEventListener(Ie.EVENT_ENGINE_EXPERIENCE_LOADING, () => {
      const [e, s] = r.childNodes;
      if (this._isFilmLoadError_ || this._isAudioLoadError_)
        return (
          t.hideMe(),
          r.hideMe(),
          i.hideMe(),
          this.root.getElementById(Ie.CSS_CONTROL_CONTAINER).hideMe(),
          void n.showMe()
        );
      if ((this._filmLoadProgress_ + this._audioLoadProgress_) / 2 < 0.85) {
        r.showMe();
        const t = Math.round(
          ((this._filmLoadProgress_ + this._audioLoadProgress_) / 2) * 100
        );
        (e.nodeValue = `${t}%`), (s.value = t), (s.innerHTML = `${t}% loaded`);
      } else (o.disabled = !1), r.hideMe();
      this._isBuffering_ ? i.showMe() : i.hideMe();
    });
  }
}
class ot extends it {
  constructor({} = {}) {
    super();
  }
  _addControlElement() {
    const e = this._createControl();
    return (
      e.append(
        this._createControlProgressTimeGroup(),
        this._createControlCTAGroup()
      ),
      this._addControlListener(e),
      e
    );
  }
  _createControl() {
    const e = document.createElement("aside");
    return (
      (e.id = Ie.CSS_CONTROL_CONTAINER), e.classList.add(Ie.CSS_CLS_HIDDEN), e
    );
  }
  _createControlProgressTimeGroup() {
    const e = document.createElement("span"),
      t = document.createElement("span"),
      n = document.createElement("span"),
      r = document.createElement("span"),
      i = document.createElement("input"),
      o = document.createElement("span");
    return (
      (e.id = Ie.CSS_CONTROL_PROGRESS_TIME_GROUP),
      (o.id = Ie.CSS_CONTROL_TIME_PER_DURATION),
      (t.id = Ie.CSS_CONTROL_PROGRESS_BAR),
      (t.ariaLabel = "film progress bar"),
      (t.tabIndex = 0),
      t.setAttribute("role", "progressbar"),
      t.setAttribute("aria-valuenow", "0"),
      t.setAttribute("aria-valuemin", "0"),
      t.setAttribute("aria-valuemax", "100"),
      t.setAttribute("aria-valuetext", "0% played"),
      (i.type = "range"),
      (i.name = "film range"),
      (i.min = "0"),
      (i.max = "1"),
      (i.step = "0.01"),
      (i.value = "0"),
      (i.ariaLabel = "film range slider"),
      (i.oninput = this._changeCurrentTime_.bind(this)),
      t.append(n, r, i),
      e.append(t, o),
      e
    );
  }
  _createControlPreviousBtnWrapper() {
    const e = document.createElement("button");
    return (
      (e.ariaLabel = "previous experience"),
      (e.id = Ie.CSS_CONTROL_PREVIOUS_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_PREV_BG),
      (e.onclick = this._changeExperience_.bind(this)),
      e
    );
  }
  _createControlPlayPauseBtnWrapper() {
    const e = document.createElement("button");
    return (
      (e.ariaLabel = "play/pause"),
      (e.id = Ie.CSS_CONTROL_PLAY_PAUSE_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_PLAY_BG),
      (e.onclick = this._toggleExperiencePlay_.bind(this)),
      e
    );
  }
  _createControlNextBtnWrapper() {
    const e = document.createElement("button");
    return (
      (e.ariaLabel = "next experience"),
      (e.id = Ie.CSS_CONTROL_NEXT_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_NEXT_BG),
      (e.onclick = this._changeExperience_.bind(this)),
      e
    );
  }
  _createControlRewind15secBtnWrapper() {
    const e = document.createElement("button");
    return (
      (e.ariaLabel = "rewind 15 seconds"),
      (e.id = Ie.CSS_CONTROL_REWIND_15SEC_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_REWIND_15SEC_BG),
      (e.onclick = () =>
        this._changeCurrentTime_(null, this._currentTime_ - 15)),
      e
    );
  }
  _createControlForward15secBtnWrapper() {
    const e = document.createElement("button");
    return (
      (e.ariaLabel = "forward 15 seconds"),
      (e.id = Ie.CSS_CONTROL_FORWARD_15SEC_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_FORWARD_15SEC_BG),
      (e.onclick = () =>
        this._changeCurrentTime_(null, this._currentTime_ + 15)),
      e
    );
  }
  _createControlVolumeGroup() {
    const e = document.createElement("span"),
      t = document.createElement("button"),
      n = document.createElement("input");
    return (
      (e.id = Ie.CSS_CONTROL_VOLUME_GROUP),
      (n.oninput = this._changeVolume_.bind(this)),
      (t.id = Ie.CSS_CONTROL_VOLUME_BTN),
      t.classList.add(Ie.CSS_CLS_ICON_VOLUME_BG),
      (t.ariaLabel = "show volume slider"),
      (t.onclick = this._toggleMute_.bind(this)),
      (n.id = Ie.CSS_CONTROL_VOLUME_RANGE_INPUT),
      (n.type = "range"),
      (n.name = "volume"),
      (n.min = "0"),
      (n.max = "1"),
      (n.step = "0.1"),
      (n.ariaLabel = "volume slider"),
      e.append(t, n),
      e
    );
  }
  _createControlCaptionGroup() {
    const e = document.createElement("button");
    return (
      (e.id = Ie.CSS_CONTROL_CAPTION_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_CAPTION_BG),
      (e.ariaLabel = "open caption menu"),
      e.setAttribute("aria-expanded", "false"),
      e.setAttribute("aria-controls", Ie.CSS_CONTROL_POPUP_CONTAINER),
      (e.onclick = this._togglePopupMenu.bind(this)),
      e
    );
  }
  [Ie.CSS_CONTROL_CAPTION_BTN]() {
    const e = this.root.getElementById(Ie.CSS_CONTROL_CAPTION_BTN),
      t = document.createElement("ul");
    t.id = Ie.CSS_CONTROL_CAPTION_LIST_GROUP;
    const n = [Ie.CC_OFF, ...this.config.film.tracks.map((e) => e.label)].map(
      (t) => {
        const n = document.createElement("li"),
          r = document.createElement("a"),
          i = e.dataset.selectedValue === t;
        return (
          (r.href = "javascript:void 0;"),
          (r.innerText = t),
          (r.dataset.selected = i.toString()),
          (r.dataset.associateBtnId = e.id),
          (r.onclick = this._changeCaption_.bind(this)),
          n.appendChild(r),
          n
        );
      }
    );
    return t.append(...n), t;
  }
  _createControlPlaybackRateGroup() {
    const e = document.createElement("button");
    return (
      (e.id = Ie.CSS_CONTROL_PLAYBACK_RATE_BTN),
      (e.ariaLabel = "open playback rate menu"),
      (e.innerText = "--"),
      e.setAttribute("aria-expanded", "false"),
      e.setAttribute("aria-controls", Ie.CSS_CONTROL_POPUP_CONTAINER),
      (e.onclick = this._togglePopupMenu.bind(this)),
      e
    );
  }
  [Ie.CSS_CONTROL_PLAYBACK_RATE_BTN]() {
    const e = this.root.getElementById(Ie.CSS_CONTROL_PLAYBACK_RATE_BTN),
      t = document.createElement("ul");
    t.id = Ie.CSS_CONTROL_PLAYBACK_RATE_LIST_GROUP;
    const n = [
      "0.25",
      "0.50",
      "0.75",
      "1.00",
      "1.25",
      "1.50",
      "1.75",
      "2.00",
    ].map((t) => {
      const n = document.createElement("li"),
        r = document.createElement("a"),
        i = e.dataset.selectedValue === t;
      return (
        (r.href = "javascript:void 0;"),
        (r.innerText = t),
        (r.dataset.associateBtnId = e.id),
        (r.dataset.selected = i.toString()),
        (r.onclick = this._changePlaybackRate_.bind(this)),
        n.appendChild(r),
        n
      );
    });
    return t.append(...n), t;
  }
  _createControlFullscreenBtnWrapper() {
    const e = document.createElement("button");
    return (
      (e.ariaLabel = "open in fullscreen"),
      (e.id = Ie.CSS_CONTROL_FULLSCREEN_BTN),
      e.classList.add(Ie.CSS_CLS_ICON_FULLSCREEN_BG),
      (e.onclick = this._toggleFullscreen_.bind(this)),
      e
    );
  }
  _createControlCTAGroup() {
    const e = document.createElement("span"),
      t = document.createElement("span");
    return (
      (e.id = Ie.CSS_CONTROL_CTA_GROUP),
      (t.style.flex = "1"),
      (t.style.visibility = "hidden"),
      e.append(
        this._createControlPreviousBtnWrapper(),
        this._createControlPlayPauseBtnWrapper(),
        this._createControlNextBtnWrapper(),
        this._createControlRewind15secBtnWrapper(),
        this._createControlForward15secBtnWrapper(),
        this._createControlVolumeGroup(),
        t,
        this._createControlCaptionGroup(),
        this._createControlPlaybackRateGroup(),
        this._createControlFullscreenBtnWrapper()
      ),
      e
    );
  }
  _createControlPopupList() {
    const e = document.createElement("span"),
      t = document.createElement("span"),
      n = document.createElement("span"),
      r = document.createElement("button");
    return (
      (e.id = Ie.CSS_CONTROL_POPUP_CONTAINER),
      (r.id = Ie.CSS_CONTROL_CLOSE_POPUP_BTN),
      r.classList.add(Ie.CSS_CLS_ICON_CLOSE_BG),
      (r.onclick = this._togglePopupMenu.bind(this)),
      (n.onclick = this._togglePopupMenu.bind(this)),
      t.appendChild(r),
      e.append(t, n),
      [e, r, n]
    );
  }
  _togglePopupMenu(e) {
    let t = this.root.getElementById(Ie.CSS_CONTROL_POPUP_CONTAINER);
    const n = this.root.getElementById(
      e.currentTarget.dataset.associateBtnId || e.currentTarget.id
    );
    if (!t) {
      const [e, r, i] = this._createControlPopupList();
      return (
        (t = e),
        (t.dataset.associateBtnId = n.id),
        (r.dataset.associateBtnId = n.id),
        (i.dataset.associateBtnId = n.id),
        i.appendChild(this[n.id]()),
        n.setAttribute("aria-expanded", "true"),
        n.after(t),
        void t.querySelector("a[data-selected='true']").scrollIntoView()
      );
    }
    if (t.dataset.associateBtnId === n.id)
      t.remove(), n.setAttribute("aria-expanded", "false");
    else {
      t.remove();
      const e = this.root.getElementById(t.dataset.associateBtnId),
        [r, i, o] = this._createControlPopupList();
      (t = r),
        (t.dataset.associateBtnId = n.id),
        (i.dataset.associateBtnId = n.id),
        (o.dataset.associateBtnId = n.id),
        o.appendChild(this[n.id]()),
        n.setAttribute("aria-expanded", "true"),
        e.setAttribute("aria-expanded", "false"),
        n.after(t),
        t.querySelector("a[data-selected='true']").scrollIntoView();
    }
  }
  _updateControlBtnState() {
    const e = parseInt(this.getAttribute("conf")),
      t = this.root.getElementById(Ie.CSS_CONTROL_PLAY_PAUSE_BTN),
      n = this.root.getElementById(Ie.CSS_CONTROL_REWIND_15SEC_BTN),
      r = this.root.getElementById(Ie.CSS_CONTROL_FORWARD_15SEC_BTN),
      i = this.root.getElementById(Ie.CSS_CONTROL_PREVIOUS_BTN),
      o = this.root.getElementById(Ie.CSS_CONTROL_NEXT_BTN);
    this._isExperiencePaused_
      ? (t.classList.remove(Ie.CSS_CLS_ICON_PAUSE_BG),
        t.classList.add(Ie.CSS_CLS_ICON_PLAY_BG))
      : (t.classList.remove(Ie.CSS_CLS_ICON_PLAY_BG),
        t.classList.add(Ie.CSS_CLS_ICON_PAUSE_BG)),
      (n.disabled = !(this._currentTime_ > 15)),
      (r.disabled = this._currentTime_ > this._duration_ - 15),
      (i.disabled = !(e > 0)),
      (o.disabled = !(e < this.configs.length - 1));
  }
  _updateControlChapterJump() {
    if (this._currentTime_ > 1 && this._currentTime_ < 3) {
      const e = this.root.getElementById(Ie.CSS_CONTROL_PROGRESS_BAR);
      e.querySelectorAll(`.${Ie.CSS_CLS_CHAPTER_LINK}`).forEach((e) =>
        e.remove()
      );
      const t = [];
      for (const { timestamp: e } of this.config.film.chapters) {
        const n = document.createElement("a");
        n.classList.add(Ie.CSS_CLS_CHAPTER_LINK),
          (n.href = "javascript:void 0;"),
          (n.style.left = (e / this._duration_) * 100 + "%"),
          (n.onclick = () => this._changeCurrentTime_(null, e)),
          t.push(n);
      }
      e.append(...t);
    }
  }
  _addControlListener(e) {
    const [t] = e.childNodes,
      [n, r] = t.childNodes,
      [i, o] = n.childNodes;
    this.addEventListener(Ie.EVENT_ENGINE_EXPERIENCE_LOADING, () => {
      (r.innerText = this._timePerDuration_),
        (i.style.width = `${n.getAttribute("aria-valuenow")}%`),
        (o.style.width = 100 * this._filmBuffered_ + "%");
    }),
      this.addEventListener(Ie.EVENT_ENGINE_TIMEUPDATE, () => {
        const e = (this._currentTime_ / this._duration_) * 100;
        (r.innerText = this._timePerDuration_),
          n.setAttribute("aria-valuenow", e.toString()),
          n.setAttribute("aria-valuetext", `${e}% played`),
          (i.style.width = `${n.getAttribute("aria-valuenow")}%`),
          (o.style.width = 100 * this._filmBuffered_ + "%"),
          this._updateControlBtnState(),
          this._updateControlChapterJump();
      }),
      this.addEventListener(
        Ie.EVENT_ENGINE_VISUAL_PRESENTED_TIMEUPDATE,
        ({ detail: e }) => {
          e.currentTime
            ? t.classList.add(Ie.CSS_CLS_VISUAL_SHOWING)
            : t.classList.remove(Ie.CSS_CLS_VISUAL_SHOWING);
        }
      );
  }
}
class st extends ot {
  constructor({} = {}) {
    super();
  }
  _addVisualElement() {
    const e = this._createVisual();
    return this._addVisualListener(e), e;
  }
  _createVisual() {
    const e = document.createElement("main");
    return (
      (e.id = Ie.CSS_VISUAL_CONTAINER),
      e.classList.add(Ie.CSS_CLS_HIDDEN),
      (e.ontouchend = this._toggleControlVisibilityOnTouchDevice_.bind(this)),
      (e.load = (t) => {
        const n = this._createLazyVisualContent(t);
        try {
          e.replaceChildren(...n);
        } catch (t) {
          (e.innerHTML = ""),
            e.append(...n),
            console.warn(
              `Compatibility:\nreplaceChildren not supported by browser\n\n${t}`
            );
        }
      }),
      e
    );
  }
  _createLazyVisualContent(e) {
    return (
      this._visualElements_[e] ||
        (this._visualElements_[e] = [
          ...this._renderElements(this.config.visuals[e].elements || []),
          ...this._renderRiots(this.config.visuals[e].riots || []),
        ]),
      this._visualElements_[e]
    );
  }
  _renderElements(e) {
    const t = [];
    for (const {
      tag: n,
      id: r,
      text: i,
      classList: o,
      attribute: s,
      event: a,
      children: c,
    } of e) {
      const e = document.createElement(n);
      (e.ontouchstart = (e) => e.stopImmediatePropagation()),
        (e.ontouchend = (e) => e.stopImmediatePropagation()),
        (e.onclick = (e) => e.stopImmediatePropagation()),
        r && (e.id = r),
        i && (e.innerText = i),
        e.classList.add(...o);
      for (const t in s) e.setAttribute(t, s[t]);
      for (const t in a)
        e[t] = (e) => {
          e.stopImmediatePropagation(),
            _ive_script_ && _ive_script_.hasOwnProperty(a[t])
              ? _ive_script_[a[t]]
                  .call(this, e)
                  .then((t) =>
                    this.dispatchEvent(
                      new CustomEvent(Ie.EVENT_ENGINE_VISUAL_INTERACTION, {
                        detail: { eventType: e.type, asideIndex: t },
                      })
                    )
                  )
              : console.warn(
                  `Undefined:\n${a[t]} is not a member of _ive_script_`
                );
        };
      c && e.append(...this._renderElements(c)), t.push(e);
    }
    return t;
  }
  _renderRiots(e) {
    const t = [];
    for (const { tag: n, id: r } of e)
      if (_ive_script_ && _ive_script_.hasOwnProperty(n)) {
        const e = document.createElement("div");
        (e.ontouchstart = (e) => e.stopImmediatePropagation()),
          (e.ontouchend = (e) => e.stopImmediatePropagation()),
          (e.onclick = (e) => e.stopImmediatePropagation()),
          (e.id = r),
          ye(_ive_script_[n])(e),
          (_ive_script_[n].exports.onInteraction = (e) =>
            this.dispatchEvent(
              new CustomEvent(Ie.EVENT_ENGINE_VISUAL_INTERACTION, {
                detail: { eventType: Be.RIOT_INTERACTION, asideIndex: e },
              })
            )),
          t.push(e);
      } else console.warn(`Undefined:\n${n} is not a member of _ive_script_`);
    return t;
  }
  _addVisualListener(e) {
    let t,
      n = !1,
      r = 0,
      i = 0;
    new MutationObserver((e) => {
      for (const o of e)
        "attributes" === o.type &&
          ((n = !o.target.classList.contains(Ie.CSS_CLS_HIDDEN)),
          n
            ? ((r = 0),
              (t = setInterval(() => {
                r++,
                  this.dispatchEvent(
                    new CustomEvent(
                      Ie.EVENT_ENGINE_VISUAL_PRESENTED_TIMEUPDATE,
                      { detail: { currentTime: r, totalTime: i || r } }
                    )
                  );
              }, 1e3)))
            : ((i += r), (r = 0), clearInterval(t)),
          this.dispatchEvent(
            new CustomEvent(Ie.EVENT_ENGINE_VISUAL_PRESENTED_TIMEUPDATE, {
              detail: { currentTime: r, totalTime: i },
            })
          ));
    }).observe(e, { attributes: !0 });
  }
}
class at extends st {
  constructor({} = {}) {
    super();
  }
  _addAudioElement() {
    const e = this._createAudio();
    return (
      e.append(...this._createAudioTrack(), this._createNoAudioSupport()),
      this._addAudioEventListener(e),
      this._addAudioSrc(e),
      e
    );
  }
  _addAudioSrc(e) {
    const t = e || this.root.getElementById(Ie.CSS_AUDIO_ELEMENT);
    this.dispatchEvent(
      new CustomEvent(Ie.EVENT_ENGINE_ATTACH_AUDIO_SRC, {
        detail: { element: t, member: "audio" },
      })
    );
  }
  _createAudio() {
    const e = document.createElement("audio");
    return (
      (e.id = Ie.CSS_AUDIO_ELEMENT),
      (e.autoplay = !1),
      (e.controls = !1),
      (e.loop = !1),
      (e.muted = !0),
      (e.preload = "metadata"),
      e
    );
  }
  _createAudioTrack() {
    const e = [];
    for (const { label: t, src: n } of this.config.audio.tracks) {
      const r = document.createElement("track");
      (r.kind = "captions"),
        (r.label = t),
        (r.src = n),
        (r.default = !1),
        (r.srclang = t.substring(0, 2).toLowerCase()),
        r.classList.add(Ie.CSS_CLS_HIDDEN),
        e.push(r);
    }
    return e;
  }
  _createNoAudioSupport() {
    return document.createTextNode("HTML5 audio not supported by browser");
  }
  _addAudioEventListener(e) {
    (e.onprogress = (t) => {
      const n = e.duration,
        r = e.buffered;
      for (let t = 1; t <= r.length; t++) {
        const i = r.start(r.length - t),
          o = r.end(r.length - t);
        if (i < e.currentTime) {
          this._audioBuffered_ = o / n;
          break;
        }
      }
      this._audioLoadProgress_ =
        this._audioBuffered_ > 0.75
          ? 1
          : this._audioLoadProgress_ + 0.1 * (1 - this._audioLoadProgress_);
    }),
      (e.oncanplaythrough = () => {
        (this._audioLoadProgress_ = 1), (this._audioBuffered_ = 1);
      }),
      (e.onwaiting = () => {
        this._isBuffering_ = !0;
      }),
      (e.onwaiting = () => {
        this._isBuffering_ = !1;
      }),
      (e.onerror = (e) => {
        (this._isAudioLoadError_ = !0),
          console.warn(`PlayAudioError:\naudio.onerror call\n\n${e}`);
      });
  }
}
class ct extends at {
  constructor({} = {}) {
    super();
  }
  _addVideoElement() {
    const e = this._createVideo();
    return (
      e.append(...this._createVideoTrack(), this._createNoVideoSupport()),
      this._addVideoEventListener(e),
      this._addVideoSrc(e),
      e
    );
  }
  _addVideoSrc(e) {
    const t = e || this.root.getElementById(Ie.CSS_VIDEO_ELEMENT);
    (t.poster = this.config.film.poster),
      this.dispatchEvent(
        new CustomEvent(Ie.EVENT_ENGINE_ATTACH_VIDEO_SRC, {
          detail: { element: t, member: "film" },
        })
      );
  }
  _createVideo() {
    const e = document.createElement("video");
    return (
      (e.id = Ie.CSS_VIDEO_ELEMENT),
      (e.disablePictureInPicture = !0),
      (e.disableRemotePlayback = !0),
      (e.playsInline = !0),
      (e.autoplay = !1),
      (e.controls = !1),
      (e.muted = !0),
      (e.loop = !1),
      (e.preload = "metadata"),
      (e.ontouchend = this._toggleControlVisibilityOnTouchDevice_.bind(this)),
      e
    );
  }
  _createVideoTrack() {
    const e = [];
    for (const { label: t, src: n } of this.config.film.tracks) {
      const r = document.createElement("track");
      (r.kind = "captions"),
        (r.label = t),
        (r.src = n),
        (r.default = !1),
        (r.srclang = t.substring(0, 2).toLowerCase()),
        r.classList.add(Ie.CSS_CLS_HIDDEN),
        e.push(r);
    }
    return e;
  }
  _createNoVideoSupport() {
    return document.createTextNode("HTML5 video not supported by browser");
  }
  _addVideoEventListener(e) {
    (e.onprogress = (t) => {
      const n = e.duration,
        r = e.buffered;
      for (let t = 1; t <= r.length; t++) {
        const i = r.start(r.length - t),
          o = r.end(r.length - t);
        if (i < e.currentTime) {
          this._filmBuffered_ = o / n;
          break;
        }
      }
      this._filmLoadProgress_ =
        this._filmBuffered_ > 0.75
          ? 1
          : this._filmLoadProgress_ + 0.1 * (1 - this._filmLoadProgress_);
    }),
      (e.oncanplaythrough = () => {
        (this._filmLoadProgress_ = 1), (this._filmBuffered_ = 1);
      }),
      (e.onwaiting = () => {
        this._isBuffering_ = !0;
      }),
      (e.onplaying = () => {
        this._isBuffering_ = !1;
      }),
      (e.onerror = (e) => {
        (this._isFilmLoadError_ = !0),
          console.warn(`PlayVideoError:\naudio.onerror call\n\n${e}`);
      }),
      (e.ontimeupdate = (e) => {
        this.dispatchEvent(new CustomEvent(Ie.EVENT_ENGINE_TIMEUPDATE));
      });
  }
}
const lt = `\n:host {\n    --color-white: #fff;\n    --color-black: #000;\n    --color-off-white: #e8e8e8;\n    --color-royal-blue: #4169e1;\n    --color-melon-yellow: #ff9900;\n    --color-control-container-bg: #1e1e1e;\n    --color-overlay-bg: rgba(0, 0, 0, 0.6);\n    --color-caption-bg: rgba(0, 0, 0, 0.75);\n    --color-control-btn-bg: rgba(0, 0, 0, 0.6);\n    --color-off-white-0: rgba(232, 232, 232, 0.8);\n    --color-off-white-1: rgba(232, 232, 232, 0.6);\n    --color-off-white-2: rgba(232, 232, 232, 0.15);\n    --color-control-btn-hover-bg: rgba(0, 0, 0, 0.8);\n    --color-loader-container-bg: rgba(37, 37, 37, 0.8);\n\n    --dimension-control-container-height: 65px;\n    --dimension-control-btn-size: 27.5px;\n\n    --spacing-col-element: 10px;\n\n    position: relative;\n    display: block;\n    color: white;\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background-color: var(--color-black);\n}\n\n:host * {\n    box-sizing: border-box;\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-black) transparent;\n}\n:host *::-webkit-scrollbar {\n    width: 15px;\n}\n:host *::-webkit-scrollbar-track {\n    background: transparent;\n}\n:host *::-webkit-scrollbar-thumb {\n    background-color: var(--color-black);\n    border-radius: 15px;\n    border: 3px solid var(--color-control-container-bg);\n}\n\n#${Ie.CSS_AUDIO_ELEMENT} {\n    display: block;\n}\n\n#${Ie.CSS_VIDEO_ELEMENT} {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n}\n\n#${Ie.CSS_VISUAL_CONTAINER} {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-overlay-bg);\n    z-index: 1;\n    -webkit-transition: height .25s ease-in;\n    -moz-transition: height .25s ease-in;\n    -o-transition: height .25s ease-in;\n    -ms-transition: height .25s ease-in;\n    transition: height .25s ease-in;\n}\n\n#${Ie.CSS_CONTROL_CONTAINER} {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 0 7.5px;\n    width: 100%;\n    color: var(--color-off-white-0);\n    height: var(--dimension-control-container-height);\n    background-color: var(--color-control-container-bg);\n    -moz-transform: translate(0, 65%);\n    -ms-transform: translate(0, 65%);\n    -o-transform: translate(0, 65%);\n    -webkit-transform: translate(0, 65%);\n    transform: translate(0, 65%);\n    -webkit-transition: transform .25s ease-in;\n    -moz-transition: transform .25s ease-in;\n    -o-transition: transform .25s ease-in;\n    -ms-transition: transform .25s ease-in;\n    transition: transform .25s ease-in;\n    z-index: 1;\n}\n#${Ie.CSS_CONTROL_PROGRESS_TIME_GROUP} {\n    display: flex;\n    align-items: center;\n    margin: 5px 0;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    flex: 1;\n    height: 4.5px;\n    border-radius: 2.5px;\n    overflow: hidden;\n    background-color: var(--color-black);\n    -webkit-transition: height .25s ease-in;\n    -moz-transition: height .25s ease-in;\n    -o-transition: height .25s ease-in;\n    -ms-transition: height .25s ease-in;\n    transition: height .25s ease-in;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR}:hover {\n    height: 8px;\n    border-radius: 4px;\n    -webkit-transition: height .25s ease-in, border-radius .25s ease-in;\n    -moz-transition: height .25s ease-in, border-radius .25s ease-in;\n    -o-transition: height .25s ease-in, border-radius .25s ease-in;\n    -ms-transition: height .25s ease-in, border-radius .25s ease-in;\n    transition: height .25s ease-in, border-radius .25s ease-in;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR}:hover .${Ie.CSS_CLS_CHAPTER_LINK} {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    -webkit-transition: width .25s ease-in, height .25s ease-in, border-radius .25s ease-in;\n    -moz-transition: width .25s ease-in, height .25s ease-in, border-radius .25s ease-in;\n    -o-transition: width .25s ease-in, height .25s ease-in, border-radius .25s ease-in;\n    -ms-transition: width .25s ease-in, height .25s ease-in, border-radius .25s ease-in;\n    transition: width .25s ease-in, height .25s ease-in, border-radius .25s ease-in;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR}:hover > span:nth-child(1) {\n    background-color: var(--color-off-white);\n    -webkit-transition: background .25s ease-in;\n    -moz-transition: background .25s ease-in;\n    -o-transition: background .25s ease-in;\n    -ms-transition: background .25s ease-in;\n    transition: background .25s ease-in;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR}:hover > span:nth-child(1),\n#${Ie.CSS_CONTROL_PROGRESS_BAR}:hover > span:nth-child(2) {\n    border-radius: 4px;\n    -webkit-transition: border-radius .25s ease-in;\n    -moz-transition: border-radius .25s ease-in;\n    -o-transition: border-radius .25s ease-in;\n    -ms-transition: border-radius .25s ease-in;\n    transition: border-radius .25s ease-in;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} > span:nth-child(1) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    border-radius: 2.5px;\n    background-color: var(--color-off-white-1);\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} > span:nth-child(2) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    border-radius: 2.5px;\n    background-color: var(--color-off-white-2);\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} > input[type=range] {\n    -webkit-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    background: transparent;\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translate(0, -50%);\n    width: 100%;\n    opacity: 0;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} input[type=range]::-webkit-slider-runnable-track {\n    height: 100%;\n    border-radius: 0;\n    background-color: transparent;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} input[type=range]::-moz-range-track {\n    height: 100%;\n    border-radius: 0;\n    background-color: transparent;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} input[type="range"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    margin-top: -4px;\n    border-radius: 13px;\n    width: 13px;\n    height: 13px;\n    background-color: transparent;\n}\n#${Ie.CSS_CONTROL_PROGRESS_BAR} input[type="range"]::-moz-range-thumb {\n    border: none;\n    border-radius: 13px;\n    width: 13px;\n    height: 13px;\n    background-color: transparent;\n}\n\n#${Ie.CSS_CONTROL_TIME_PER_DURATION} {\n    position: relative;\n    display: inline-block;\n    width: 90px;\n    font-size: 70%;\n    text-align: right;\n    white-space: nowrap;\n}\n#${Ie.CSS_CONTROL_CTA_GROUP} {\n    display: flex;\n    align-items: flex-start;\n}\n#${Ie.CSS_CONTROL_CTA_GROUP} button {\n    display: inline-block;\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    font-size: 70%;\n    font-weight: 400;\n    width: var(--dimension-control-btn-size);\n    height: var(--dimension-control-btn-size);\n    margin: 0 2.5px;\n    border-radius: 2.5px;\n    background-color: var(--color-control-btn-bg);\n}\n#${Ie.CSS_CONTROL_CTA_GROUP} button:hover,\n#${Ie.CSS_CONTROL_CTA_GROUP} a:hover,\n#${Ie.CSS_CONTROL_CTA_GROUP} a[data-selected="true"] {\n    background-color: var(--color-control-btn-hover-bg);\n}\n#${Ie.CSS_CONTROL_CTA_GROUP} button:disabled {\n    cursor: not-allowed;\n    opacity: 0.35;\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} {\n    position: relative;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} input[type=range]:focus,\n#${Ie.CSS_CONTROL_VOLUME_GROUP}:hover input[type=range],\n#${Ie.CSS_CONTROL_VOLUME_GROUP} > button:focus ~ input[type=range] {\n    opacity: 1;\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} input[type=range] {\n    -webkit-appearance: none;\n    appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 90px;\n    margin: 0 5px;\n    opacity: 0;\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} input[type=range]::-webkit-slider-runnable-track {\n    height: 4.5px;\n    border-radius: 2.5px;\n    background-color: var(--color-off-white-1);\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} input[type=range]::-moz-range-track {\n    height: 4.5px;\n    border-radius: 2.5px;\n    background-color: var(--color-off-white-1);\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} input[type="range"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    margin-top: -4px;\n    border-radius: 13px;\n    width: 13px;\n    height: 13px;\n    background-color: var(--color-white);\n}\n#${Ie.CSS_CONTROL_VOLUME_GROUP} input[type="range"]::-moz-range-thumb {\n    border: none;\n    border-radius: 13px;\n    width: 13px;\n    height: 13px;\n    background-color: var(--color-white);\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} {\n    display: inline-block;\n    position: absolute;\n    bottom: calc(var(--dimension-control-container-height) + var(--spacing-col-element));\n    right: calc(var(--spacing-col-element));\n    border-radius: 2.5px;\n    font-size: 0.85em;\n    padding: calc(var(--spacing-col-element) / 1.25);\n    background-color: var(--color-control-container-bg);\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} span:first-child button {\n    width: calc(var(--dimension-control-btn-size) / 1.25);\n    height: calc(var(--dimension-control-btn-size) / 1.25);\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} span:first-child {\n    display: flex;\n    justify-content: flex-end;\n    border-bottom: solid 1px var(--color-off-white-2);\n    padding-bottom: calc(var(--spacing-col-element) / 2);\n    margin-bottom: calc(var(--spacing-col-element) / 2);\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} span:last-child {\n    display: block;\n    min-width: min(50vw, 140px);\n    max-height: min(50vh, 200px);\n    overflow: auto;\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} li {\n    margin: 0;\n    padding: 0;\n}\n#${Ie.CSS_CONTROL_POPUP_CONTAINER} a {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n    width: 100%;\n    border-radius: 2.5px;\n    padding: calc(var(--spacing-col-element)/1.25);\n}\n\n#${Ie.CSS_LOADER_CONTAINER} {\n    display: block;\n}\n#${Ie.CSS_LOADER_CONTAINER} button:disabled {\n    cursor: not-allowed;\n    opacity: 0.35;\n}\n#${Ie.CSS_LOADER_WELCOME_GROUP},\n#${Ie.CSS_LOADER_NETWORK_ERROR_GROUP} {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-loader-container-bg);\n    z-index: 2;\n}\n#${Ie.CSS_LOADER_WELCOME_GROUP} button,\n#${Ie.CSS_LOADER_NETWORK_ERROR_GROUP} button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    font-size: 70%;\n    font-weight: 400;\n    width: var(--dimension-control-btn-size);\n    height: var(--dimension-control-btn-size);\n    border-radius: 2.5px;\n    margin: var(--spacing-col-element) 0;\n    background-color: var(--color-control-btn-bg);\n}\n#${Ie.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP} {\n    position: absolute;\n    bottom: calc(var(--dimension-control-container-height) + 2.5%);\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: 100%;\n    font-size: 0.5rem;\n    color: var(--color-off-white-1);\n    z-index: 3;\n}\n#${Ie.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP} progress {\n    border: none;\n    border-radius: 2.5px;\n    width: 25%;\n    height: 2.5px;\n    margin: var(--spacing-col-element) 0;\n}\n#${Ie.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP} progress::-webkit-progress-bar {\n    border-radius: 2.5px;\n    background-color: var(--color-off-white-1);\n}\n#${Ie.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP} progress::-webkit-progress-value {\n    border-radius: 2.5px;\n    background-color: var(--color-black);\n}\n#${Ie.CSS_LOADER_VIDEO_LOAD_PROGRESS_GROUP} progress::-moz-progress-bar {\n    background-color: var(--color-black);\n}\n#${Ie.CSS_LOADER_ENGINE_BUSY_GROUP} {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    margin-left: -10px;\n    border-radius: 50%;\n    border: 2px solid var(--color-black);\n    border-top-color: var(--color-white);\n    -webkit-animation-name: ive-busy-spinner;\n    -webkit-animation-duration: .6s;\n    -webkit-animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    z-index: 3;\n}\n#${Ie.CSS_LOADER_VIDEO_CAPTION_CONTAINER} span,\n#${Ie.CSS_LOADER_AUDIO_CAPTION_CONTAINER} span {\n    display: inline-block;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 20pt;\n    border-radius: 2.5px;\n    background-color: var(--color-caption-bg);\n    padding: calc(var(--spacing-col-element) / 1.5);\n}\n#${Ie.CSS_LOADER_VIDEO_CAPTION_CONTAINER},\n#${Ie.CSS_LOADER_AUDIO_CAPTION_CONTAINER} {\n    position: absolute;\n    left: 50%;\n    max-width: 85%;\n    text-align: left;\n    -moz-transform: translate(-50%, 0);\n    -ms-transform: translate(-50%, 0);\n    -o-transform: translate(-50%, 0);\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    z-index: 0;\n}\n#${Ie.CSS_LOADER_VIDEO_CAPTION_CONTAINER} {\n    bottom: calc(var(--dimension-control-container-height) + var(--spacing-col-element));\n}\n#${Ie.CSS_LOADER_AUDIO_CAPTION_CONTAINER} {\n    top: 5%;\n}\n#${Ie.CSS_LOADER_RESUME_PLAY_BTN} {\n    background-size: 50px !important;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    color: inherit;\n    font: inherit;\n    margin: 0;\n    padding: 0;\n    border: none;\n    border-radius: 0;\n    background-color: var(--color-loader-container-bg);\n    z-index: 1;\n}\n\n.${Ie.CSS_CLS_ICON_RESUME_PLAY_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEpElEQVRoge2az29VRRTHv1Ma+7Ao9MGDohuJRMUflYULFTHRBC0Wf+6K4goCMUEI4t6NK+OGWCNb/A+MhCARrFZC+VH8FUoruOFHhGhMEGorwsfFnMubprfv3TvvvlANZ3Nz75zz/Z5zZ+bMmblXuiUzS1xRQEBZ0tOSVkh6UNK9khZKajeVK5IuSPpF0glJA5K+ds79UZQP0QKUgHXAF8A18ss/wF7gDaCtEV+iegSYLektSe9IWmyPJyQdlHRA0o+SRiT9Kumytc+R1Cnpfkldkp6R9ISkJIDzkj6U9LFzbjzGr7xB9ACng7d6BFgPzI3AmgdsAI4GeKeA1c3wPSEtAZ8EhMeA5wrE7waOB/h9QKko/ISk0xwHuAJsBmYVSuJ5ZgFbgLGgtxcVBb7EuhtgGHi4EODanF3AiHH+DCxpFLASAB4GFhTkaxbuDmDAuE8DnbFApWA4HQTa61sVK0A7cCgYZvnnTDCxh/GL3U0RYH4wKvryGvcEE7vpcyKDP11BAujOajSb6jqxOQfZu8Bt0d7Wx98aTP76QwzYbgbH8qRYsxmhSYsZ0Ap8Zzxb6ym3AedMeVVOolD2Acsa8jyd4wXDP1+zV/DFG8CRCJJELtl1HHi/yGwHOKqZdG0txX2mtD6CJJHFwE6q1fA54E2gkC0DsNFw90ynUMaX1ePEFYAABPdPBm8PoB/oaiCGBLcDmACupvoJvGqEX0YSTArEnrVYb1yw5mvALqASGUeC2294LybPWoL2FXb9qhGSUJxz151zuyQtk9QnCUnrJJ2wIdJSE2B6OWDXlVNagN0W5UsxyGk9kqLzAH43mchx4KkIrmT0fJbWOGqNUWkzSyCm54Be4IyZXAc+Be7KwfWQ2Z5Ma/zdGqPqqqyBBPq3A+8Bf5npZbuvu3cHFpjNxbTGCWuMKjPyBhLYLQU+D4bbCPB8HZs2072xt4+dbDNX/mNDq1JraP1vJnuSfl/OGUNiXzcQpqbfIeLS72tmfyP9hnNk2K6P5gXOQFwGPpL0k6RVkn6TtEnSY865gQjIpNRJ7ZFXLMr9kc5O6RGaX6KsSWvsoFo0zosAnxQIzSsay1SLxjunU9prpBsiCBJpdhm/yXB311J63ZSORhAk0uyN1ZDh99ZSbAPOmmLN1TXFNpRmbXXXGP4Z6q03wDZTHmLmHT58bzxvZzEoUT3r3ZKDqNnHQduCl5XtoxCw2ozGKCDTNCrAcqqlTL5PGfjvE8kbmN8kH7P4UcEfygHsiAEo4Q+OwR8k34xD7DnAoPkwmHlIpQBVgJMGdJgGV+Sc3GXgW+M+RaMffPAfepKuHQEKr8VSOJcHnKPAPUUBLwqG2Rj+QLm1EPDJPK2WnZKJPQgsLJqkFCQA8AfKhawZ+BW7h+o6AbAjek5kJO0Ouh18YbgR6IjAKuNrp6EAb5SIr8WxPwyU5PcT2yXdbY//lnRI0n5JP0galf9h4E9rv0P+54L7JD0i6VlJj0tKFtGzkj6QtNM5NxHjV7Tga7O1wB78FiCvXMXvTHsbHUZF/lQzV/6nmpXyR6RLJVXke0LyPXNR0in5nd03kvqdc5eK8uGWzCT5F05QXc/Nk/+qAAAAAElFTkSuQmCC") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_PLAY_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB5ElEQVRoge2ZMS8EQRTH7wgSIiEhcY1GcxoUdDqViE8g8RVUeo0PoFRSalWicRrR6BRoFBQkCiIhuPsp7m3y7m7Pzd3O7pjJ/prL3s689/9nZ3fezBQKOTk5ORpgGxh0rSMx1LkBVl1rSQSNnAKzrjX1hDLxJr+fwC4w4lpbVygjJWAfqMr1I7AJFF1rNCJyoa4XgQtlsALMu9RoRLMR+a9PnsaT3K4Ch8CkK50diTOi7o0Be8C3NHsBtoD+rHV25C8jqk0ZOFHD7QpYzkqjESZGVNt14F4ZOgam09ZoRDdGpP0wsAN8SNd3uR5KU6eJsK6MqH4zwJF6OnfAWhoaTQX1ZET1XwGulSE31UFSIxJjQL5mrxLuS752o7Z0mohIbETFKlGfb2oSNrvqwKYRFXMJuFTDrQLM2cwRl9S6EYkbVQfPkiKqDiZs54oSpmJExR+X9+VHUqVTHaRtROVZAM7VcLNbHWRlRHIVgQ3gQdLWgANgql2fviyE/SvyoWUe3++XPYjPL60T4hk+TYj4XqIQQtFIfBlftqnRVEhPRmhdWN3i08KKEJa6NG4+1OSJ+LP5gO/bQfi+QUf7LdN0ZmUbNBshfhM73VnZBkpwGMcKBHTQAwEcvQVxGBrG8XROTo7f/AKcSk4xvp2PUQAAAABJRU5ErkJggg==") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_PAUSE_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAcElEQVRoge3YwQqAIBAGYTd6/1fe7mKga8Eg8537hcmbrUmSVBerg8zMqYMjhmfv7t9cKx+T3dXhX398dt875kYMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGEpvwaX301/2rfO+ZGJEna8QBvaBhAtB8jZQAAAABJRU5ErkJggg==") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_PREV_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABv0lEQVRoge3Zv48OQRzH8Ts/Q0FIJIorJCgUOg2l66ivvdK/IKJRKDQKpVYpdCoKNAqdgo6C6uQkQsSPHC/FTWLztZl9nrvZZOcyn3Ln+32/s5PnmZ2dXVhoaWlpaWmZcLAfN6fOHBKex2uYMjMnO4Bb2JAyReaQ8CLeJtevElIsl2bmZIdwB7+T5xXObUeKw6WZQ8JLeJ/433ED+9LYlqRjMHOyI7jrX17gTKiZSzoGc0i4grXE/Iar2N1TN7M0MT+WZOZkx/GgM2PPcTpTPyhNzIclmUM3sYL1xPmMK1gc6MlKE/NTSWau8QQed2bsEZZm7O2VJuaTksxcw2KaoS+pdw2rMwN6pB3m11LMoeKTeNqZsfs4No8wSnEKz0oyc0V7cM3m2g0fcHleWZTiOn6UZOYKzuJlqvuDezi6VWFXOgazb2CvzTX7Z6p5h+XtyKJ0DGa8eAFv0tgGbuNgCWHij8H870Z2lYJPIjvipxUK6v6zh6L6l99QXPcDMTTUv0UJjXVvGnsAdW/jA6T+F6sAq/tVNwDrP3wI4LqPg4K4/gO6IK/7yDSI6z/EDvK6PysEcf0felpaWlpadnz+AmU+bU+WvHU/AAAAAElFTkSuQmCC") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_NEXT_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRoge3Zv0tWURzHcU0hiIgMAocEIRIK2loKJx2lIaF/wbUxotXBxaHRtTEadWiKGhrcHBQXJ9EWiQgs8Ucvh05wFOm593nOk/cezme5l3PP9/2558u995zzvQMDRUVFRUVFiYR5XG06s4oprONxk5lVTeE3lnC9icw6pofhuIXpPjCnUt1zJ9OHWI0y+Ra3msKsbBrOh/EC+6H5K2YTM3fxLPU4zphGbXfxMcrsO9y+TGZXpqF9EHP4Ebp8w9xlMbs2ja6P40OUyRWMJWYu404v4+hoGvV7jr3Q/XvI7OD/YnZUVdPQdxTvo0x+xkRi5ifcqzuOWqZRzFPshNCfeImhhMz988wqgNqmIe6mP7P2X33Bgx6ZIxcw71cN7so0ip/BdsAc4HVi5i+8wnCnoJ5MA+MG3uAkymZq5hoe/SugZ9OINYnNPjKPsOCiLUJK08C7hkUc94MZbncDT66kMmiUyqN1ltH+l13bP79ymBC1fYkih0Wjti/jtX1jJYetrrYXH+RQDpJLgU5GJdMsithZ/FbI40dPUVFRUVFRTZ0CTmptVyb//40AAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_REWIND_15SEC_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEbElEQVRoge2ZTWxUVRTHzxRoCykQW6JUoxAtVlqq5aNUjQSCupEYV7IyrlyywMSEDQlxC4gffJUlJCREWECtX4nGAAmJC0RbSKk71ETBqcA0EuhAfy7uec7tm3nT++bememCfzK5mXfPPef/f+/ec+87T8QTQBPwYZn+ecB23zhVBfAycAUgof814HJSf90BLAI+BR6giPV3AkNYqBfXRABvAX8ov3s2UWAJcBDI6+V/Zp0QoB04Zd3kC0C39f99i3geOAC0zRohQAZ4F8gqp3+BHcAc7Y/jO6DHGl9/IcAK4AeL5BfAkzGbCKPAGyV8RBjHJIZBYBewGZgXiuvcUI4c0Kq/LhF5U6/dAj4XkYFMJnOpqtF1ar0H3NQ7mwO2AQ3aH8c3QJc1PkI7sAZ4B5PxxmLjhoAXqipGCbUDJ63A3osdWAXsBybU7D6wB5hfC0HB0y/wqAq6r+Y/A0/XQsxi4BDJG2I38K09bxz99ltTLgv0VUdBceBXMNkqaepsAa66CtExiymcCm4D/eEYlw8c/NAIzAWOq5gbwDP+TOsEYA5wRsWMAM315lQxgBZrzeytNx8vAGs1C+aBVfXm4wXMBgowVG8uXgBaddOcotq7P/BI0p4BDFMGjv73qflAePbTA21P2BwbgDsBhHSp+TjQGJp8iy7GzygcL+JClunlvwLEi57sxnif7zF+wsHmWW1/9YwlIvK9iPSIyCYROWt3NARwPhMiIWMBfF3Qtjfe4SUkE0OCWSRkA/A7MKntALA8Zcjoqa6ojLEjEtbI12XWeQ54PYX/6P0m62J8HjhfgY4kIR9g3ktOYI7384E+pp9wlzn6b9Qx91yMo5el1CkuKZ0CC4CiqWeJOezov0nt77oYR2WfNif208eWFFLGfr0OueZov0Tt/473lVrsN7R93JWQB0a1fczR/gltr8c7SgmJ0mRnSlJFAG7pHUzKTiu1dd0sI05FqbyUkGFtX3R0Xg7ntN2Z0L9L268c/b2k7S8zWgKb9C6mLpjF1wjm+DKpl08C6zDHmvXAl1bWesrR/4iO2eBi3EShjPOcjxC99jbJh8bbOO4jFGpoWVxLrZhdF2CPrxC93gEcAX7DpPdrmHKS05NQHx+p+0NpCK3GvMTkgFbngVUCZkev7MXKmsP7qsQvDZdPlMtgJYOfp/DSX3TarBUwhe+8Jo3Kig/WvBwFWgJzdIm/kEI5aLePo2bgkjo6DdTsewqm2jiosS8CTb4OOzBlS4CjtRCjIo5pzOuEqsxjjt05dXymmtNMp1P0JHLAutAB+qwncxVYHTSA/L+wx6wnEVaEFagD+EkD5YGPqeC4X8Jvm6bY6APRxWDTqUzQZmCvFTSn/7tmHl3kq1szY/TpbRLY7b2wU5LowXyunqKAYX1KW4FeTKmzUX9tem2r2oxY46Z0XXTXTEAJQb2Yc9M46ZHFfHP0rucmlXBSA/OO3y8ir4oponWKyFIRWagmEyLyp5iSzrCYYtuPmUwmH4rDQ8wm/AdKwkFw69lcCwAAAABJRU5ErkJggg==") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_FORWARD_15SEC_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEWElEQVRoge2Zz29VRRTHzyVA+anAgwAL0GilSC20SEESSEDjBheu6MqEDTGRkIgJfwBsURCMIBg3EhYmbqBClATjgkTjApGCtMUVAlG0/HiviQEK/biYM97b23m3c++7971n4jd5mbw759c3M3Nm5oxIwQB2AVMS+vcCLUXHUTMwuAZsTej/Fdhc79hSgbE4B6ys0j8KHAfmNSrWREQCvavtCHAYmB/rf6jtTeDNRsc9DpFAS8DHSsQSey/S3w58H/n/JbCo0fH/CxtV5H8b8FVsyqF9AfA2UNbP94F3gUn1DHgK8CqwB+gFfgHuxIlE5LcA/a5+YEmM7HfAC0n+J+dAoEtE3hGRHhF5ulZ7dQfQBZyJzZAB4CDwFrAaWOyYWiuAb6pMrUnATqCin+8B24GgCAIzgA+Ax+psGPgIaK8ib9E8ix14Hrikjh4Dh4AFE+hYNEf6BboJF+8A0O2pF8XZ+MhF+p4AR4Di1hmwjjAl9gJPpdC1xN9I6L8KbMgvYrejVuBPdXgCSJXpaIZDI9AC/KwkzqQl0TQADkSGfmaj48kEYKVmmEeYTe+/CcJNa3+jY8kMoFNJlIE5jY7HB9VOlTu0/TQIgvv1CiZXaKayu/DyFHpz7c7m6OsjAfkyCJ1uVvsXU+rtcgWGOQj+XTQR176wSdtvPYKfJSJtIrJNwukYxxIRmS4it4MgKOzG5yLSqe0PHvrDHjLLtL3mFVFGuBa7vYnl5dgSGczJnhMuIgu1vTWRchBDFTFLZCNwQzfYG8BR4NksQXuB8F4wNYOua7F/nbDOK8DrKX2cB877COZNZDcmnX+BuQVOx9xtTqt4GXjG036L6jzwER5S4VIeRPT7DBz37giZTzztz1f5v3yEr6pwh1f0Y3VT7QvAWlW57im/SuWvxPtci91mlzbfgGpAv7YLE6VC2JjGZUAXkT5tX0kZ1DhgKoUkZKcXtf3D0+R6bS/5ON+kzlMdUVR3zNTC3O8BPqsib+tiRzztX1b5jT7CmQ6Nqhsn8jJm3wBTp1oDzNK1YUmUgaUetttVfoiEGkBc6agqvV8LEf22leqHxjKe+wiwP83oWaUuzMNLhRQPLy4i+r0VOAb8htmnrmNqWBOOhOqXMBXNUWCVNxFVtkN/IJViAcDUkwF6syjb4sMI0DmxRjHAFMNtEeSlrEbsvOzH3D3qCmA2MKgx7KvF0DTgoho6SR0LdMBkwvR9gVqrkYwtmX5eDzJK4rj6vA08l5fhbsLHl1NFTjOdTnYkKsCavB10R0ZmgAKqj7qwByMjkS+JiKNW4Cd1NAJ8SIbjvsNuSVOsfc26kNt0SnA6DfP0Zp1W9P+KDLbaNTMOq61HwL6aF3bKIDowT8ijhOjTUerBlF3nAVP1V9JvPSpzOaI3quvC+Q5ZL0KdmOPGHdJjCPOemO7Y4UBuz76YO/46EXlNRDrEXIIWichsFRkWkd/FlJn6xBQAfwyCYCSvGP5HM+EfxLY/VkoBSKsAAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_VOLUME_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEEUlEQVRoge2ZXYhVVRTH98ydDyc/0L4Gckb0QTJ1oIdiYGrExGoQTHzyRXwIkijpIYkwYaBoKGiCFBXywQfLj6hkihCUXoIgQvxAZdJQakxqxnEcSLEcm/n1cP7Hu++9+5x79pk7c0aY9XK4+7/W2ut3Pu5Zex9jpm3a7h8DcsA7wO/AMLAHqM26Li8D6oAeSq0r69oSmyC+UeHXgNVAq35fybq+ROaAaNF4tcZGPfMtnJhK4ye1IQaA5UU6AB75XlfIcWBJ5St2TxoLIR9fkKeVC2AE6ASqK1t54YT2gz0Q3k4OPy8QxcwFdgB3FX4UmFeZygsnKr4Sy2J8vUGs2BXW1TkDPJi+6tLkNkR/HIT8U4Movgk4qzQ/A3PS5rKTFkMsTRATC6Kc3wOHgOYIn0bgglL1AFWTCqG4ciCzgety+xvYEOHXDAzKb8ukQii27K0FLAC+lesYsC3Cb630f4BF44H4C3jCMz7xMwK8BYzGnXVgn/TP7MEGgr+5G5Q3bwhfEPm/orP+H9Dm0JuA2wJuCQd3JgBIDZEGRDEfKewSUO/QP5G+KxwY0sALEQmvSH8mDYRyFIAAM4H3gU1AQ0RMHXBeoW849OXSrgN19yYBZkQkHJOeukVwgDxnzdsHrIyIWyefP1zzAyeldyQB8b4tEoBUAy8Dv0gaAV50xFUBl+WzyqF/IO29TECs8RzwqeRrwEMOny7p3Q5tvbRjmYJIqwJ+lEunQ++Q9oNDWyStL3MQ6WvkcsqhNUm76tBmSbs5VUAelcsth9Yg7XZE7L8wkYuVSbapAvKUjhcd2sM63igWgFnGmHpjzK3MQQja8e362eNwCZfOlxzaIzoOZQoC5Iwxe40xbcaYQWPMbofbszqecGhP6nghyxfiZvILpTvA8444+4VY8vYHPpT27lRoUX4D2iPiwhalzzU/cEp6h900dkQkC5vGFRUEaSBoGjfi6GzlYzeNJesSoEXaIGoad5DM7u0ejhckYUy3wn51wVp17wwHZhD09kOUt1QwviDkF1Z3gVaH3kyw1B3FsSEYl9i5r+sRnxgE2EqwMgTYHOETLnX3+9QRBtu7il4wSUCA+Vb+UeDNCL+XyG8+pNvoFswRX5hyIATtfL/choH1EX4LyG8HvZYKwkpWC3ztA5PwinwOHAAei9AbgYtKdSRt/cVJa4GvksL4PuyO+GbgnNL8BMxOm8uVvBb4MgnMeECAleQ3sU8zQTvyOd0SsTBpQCj9rPAdMLcylbsnrAG+iIPxBaHwU8IdYDvj2bT2mLgGOBwFkwKkUyHHgMcrX3H85DUEnwUKYIAHwjPrmWvxxFVbvoAccNCCaSe/sdCbWWFpTDD7KbW3s67N2wgWRK8CvcCfwMdATdZ1Tdu0pbD/AWi0WyEV/M6mAAAAAElFTkSuQmCC") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_VOLUME_LOW_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACNklEQVRoge2YPUtcQRSGj+vnmi5C/oOoXcBClAQSDfkNYmER/AcBA6m0FNRCkHT57BLzH1JbarAx2UKJoKksFOJjscfrdXfWnXsmuzML+zaXmXPmvOfhXuYOI9JVV50joBdYBn4Bf4EtoD92X4UEDAA71Gs1dm/eUojv2vgJ8AyY1HEldn9eckBM6HxJ5/7F7rGpaj6nDCIXByBWf15qBqE5aYPUQPxxQWheuiAOiPF7ctMEKQKh+emBFIXQNWmBWCB0XTogVghdmwaIA2Ks4PrWgwBlYAM4o7mOgVGDR1tANj0AzBDq0RaQU/WZbRCvaHwqwOMOCPAAWAEWgLK1rtMEGGoQv9J4KdQjN36a8/0NPLHWrjO5ByT4s3CAlIBFYF9Dl8BciEcUkNx8L7Ct4RNgJNgkBojGeoAfmvI22CQWiMZfaspusElkkEeacm71MO9ELdKVdWEqII/1eWAtEB0E6BGRNzrcCSkUe/t9l9t+HwabtBOE6g/xFfBTQxfA8xCPFI4oh8C0tXbe5ObQ+KJB/ObQOBPgUQtSpnponAcGrXVrTTbwk/POygLSEgFDwHruzfx3mLaAeDYyAHyzwiQDIiIC9ANfLTBJgYjYYZIDEcl+Yl+KwCQJIpLBfPaFSRZEJIP55AOTNIhIBvOxGUzyICJ+MB0BIpLBfGgE0zEgIiJAn2s3A4Z17iJ2j95y7GbT3F4s7MXur5AU5j31eh27t8Kiele1BOwBR8Aa0Be7r666MugagV1qiCmz2jgAAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_MUTE_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACKklEQVRoge3ZzU4UQRSG4a8RCHgBSrwDg65ZGE1IjDFeiXdg4t6libjwAgR1589VuDEEjGF0Z1j4l6hbXOjr5tB2muqeqhqm64yZbzVTp5o6z1R3MQFpnnlmJ8AZ4C7wEfgJPAKWSveVFGAZeMnJ3CvdW3QM8coa/wZcBzbs/WHp/qISQFy28QUb+126x7Fp3U41olEHoFR/URmHsDm+IS3E1xDC5vmFBBCXeub6hKQgbL4/SCrCrvEFyUHYdX4guQi71gckgFhPvH76EGAV2AJ+MD6fgYsZawwCeRgByEbYGoNAvts6Nzrqh1a/MsEag0COs9JR/2P1hUnXCIzvAm+BtZ5r14A3wOuoRXogE3+aPZB9K41CGEOMbM4uUHmFnAPeWfkDcKFRO9+ovW/W3EG6MMkIDxCrN2+hUet15/MTXKQkxOY0dyZ+JyzZJ9EU0n6Qux/sUDzsyH9xaxF4sOk5zVxCQohGLQ1TGJLyC3Gvb42Yhx37odM4GI4k7UnarKrqS7toY5uS9m1ud/j3pfFmR/34S+O13G5PY1djFtkiLsG/WUWuMQhkBXjQ2JlTxwwCiWxkGXiRi3EDkSRgCXieg3EFkfIx7iBS/d+oZykYlxCpxjyNxbiFSDXmSQzGNUSqMTvjMO4hUhxmJiBSjdnuwswMRJKAxdBpBpy1sV+le4xO4DS7Ctyy9wel+0uKYR5zMndK95YcoAJuAwfAJ+A+sFi6r3nmychfhFcHzJwBUtEAAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_CAPTION_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB1klEQVRoge2ZQU7CQBSG/0eMRzCEE7jUrWiMF/EaujNuRI/hRTRGMIaNGxP1ABhP4efCqU6GTgcs0oH0W5U3703/R/++tCC1tLRUAmwCV8A7q8cEGACbBlxKOmn6C63JQK4rgD1/BRgB92FFTnGgX1yZjqSeJJnZQ1D7KYlww5ziZjZyhz0DcEErKc6eQn8nCGZjm3njnSAnG9vMG19PawUJ2dimKl4QbUQZ2SYRl7Su1srNNu3UKinInnZqZRiXtK7Wys027dQqKcieQv9GRcKNpKOlKZqNoZkdlC1Er0gRz42YzugViRU2ReqLnWlq5UadqZUb0zrdzylT4sviwJhfHktq/m09pTN5s/vxcKPUgFjkekpn1bPWSjFvI2PveMoaS1iP43vPnwYxTzZFSufaTK25bvYmqX2z8788AV3vXKNYYkpnVSPDVPEC2JF06zWzV5UsKf7UMWvHiwbYAp7d6d+A3l+0/NT4xSz5zQ7oAi9OwouvZdZ9ippG3xDN7EPf7zyvkrZr7d+UtQINvs3qWytIaMJmT8BdRHBsnx9rvbtAP8hZus3MbNfMDssaKdsH2HeHEwMGkk4jxavCxYakM/fhWO4f3hViIula0nnTQlpacucLx/BHx+PecukAAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_FULLSCREEN_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAkklEQVRoge3ZOwqAMBCE4UXsvP9pLCwUxVONlYXgaxNJFvm/VszOaBMSMwD4BfmNCTNm75CrtZq8usdchd5xTnj4AqWV/CNVUSQaikRDkWgoEk1782yyEluI93oz62qHAAAAwB9JWiUttXPskvNwQFcJRaKhSDQUiYYi0TwWcdxTDt7hksbcS9DXRTy5PlwLAM5t/Iby+IVFZREAAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_OK_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC9UlEQVRoge3ZT6iUVRjH8TOJlNc/cS9iWRlkBeXq6iK0CMpllNCiaOHKRS4KqmUS7lpICgoF0UZIqJVtghalUbSICAqFtOgPBXYjK/9wbxilflrMMzRc575zpvfc982YHwyHec/D7/k+c86c97znTWmsscZqXFiG/fgVM3gVk21zjSQswbuu1NeYapsvW3gxwH/ENO7Gsbi2t22+LGErLuEvbO67fl8U8m2bfFnC6hgF2DWvb0Vcv9AWX5bQwdsBexTXzOufjr6v2mLMEp4J0NO4aUD/vuh/uQ2+LGEj/sBlPDygfwK/RSGb2mAcKizHyYDcv0DMk9H/UdN82cLBgDyO6xaI6S29jzfNlyU8FoBzuGuBmAf67ilLm2YcKqzH+YDcURF3OGJeaJIvS1iKTwLwzYq423ARF7CmScYsYU8U8YOKjSAORNxrTfJlKeZ8bwuypSJuVUy9y9jQJONQYQ1+il/5+SGxvRvkIM3hTMVnBh9jF1aULqKDdwLkiHlbkAHx2/FnRTG5OoEbShbyVBifxtoaPssxOeSzDtvwReQ8VKqIKZwL00eLmOblvSNyni9l+FwYvlfEMD/vZOSdy4mvnOuhh6Jtehm9JdpTRdzwc/wyV2zPF1O4vzci2FnC8GIYLinAN0rea/FKX/56m87eOliI79/kfzoQPq1r1HYhUzl/+pw/e9u6M9qztVzaHBHdk5nPAuFAXbM2Czke6b8z5Mj1vz61vo/25pTSwKfQbLU8Ih28FAjv1zVre9Va/X9ZtW6M9kxVUE4hsymlhJV1iUYVbk0pvRFfj9Q1+zKGdro22Wh5t+P3vlWrcq+XMyIfRvtIfbyRtDWlNJFS+jyltLnT6czUctN950H36XBVCcLMvPdE3pMlTY+G6WFDntcL5pyInOXeqeB23Reb8BauL2a+cM7ekew3pY3v7SvmF+zGJoWPbLAWO/1zJPtsSf9ekvW6x0FN6XWLOZXxoO678xOYLQw/iw/wxKIVMNZYY129+hvtFueCjOcEIQAAAABJRU5ErkJggg==") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_RELOAD_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABrElEQVRIie2WyUoDQRCG/zl7jUYxBiKJ+CJehOCCC1EQj3oR8RV8ChGXi6jB9SL4KpqbElxQz4kmn4eUZAwTZjJpc7KgL1PL19XTVV3Sv/RIvKiGQFrSrKQJSeOSkqYqSypJupF07Xneg5OdAWngEKgSLlVgFxjpFjoHfPiCHgEFYBTos5W1b8e+zX0A+bjQIaBmgc7tqMN8MsCZ+dSBtThgD9gGVmL4bhr4C5juGN6NAFuW+RvQ32v4tcH3wwzngXmH4LRduErbrIF+4MWWs6PxXbbNdgZFXz0WHYILP5URpFwIaAZOjhzIWbz7VkUCeA4AvwLJNvGiAIsBMX/kNMzgqgtwAnhqk9BAq3HJlLm4wJZ4U5F+IXBhykUXYIsZfmlpdhuXtzq8TIEBmgWfcggPb0zAgWV94QocSSzrd4MHd5s/hM/QeNLqwEYM/1UaT2rk0crvvG5gaPTbTASfDHBlPjVgsGOwBcr7jr1KY7xZAsb4PfosAyfAp9m+AXOxoD54Ctgh2rBXAfaiVEQn421K0pSkSUlZScOmKku6k3Qr6dLzvMfO0/uXP5RvHD/lZJn8ZpoAAAAASUVORK5CYII=") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n.${Ie.CSS_CLS_ICON_CLOSE_BG} {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAkUlEQVRIie2VwQ2AIBAE1R40WiKWKw/LGR+SaIzi7SE/90XC7Y7CAU3zSxUQgMHhG4DwVjSzKyqQFB6Td84V9sCSCldgMoRfPaNqeITI4QrEHW6BFIfnIJ+FnyDnDomXsdzOlj+Rvrwr4LYF3kNVl+huQz2H0RyemdMgllZ0Q5Q+lyGeQyRBqH1dp+J6D86vO23cMwceYU71pwAAAABJRU5ErkJggg==") !important;\n    background-repeat: no-repeat !important;\n    background-position: center !important;\n    background-size: 17.5px !important;\n}\n\n.${Ie.CSS_CLS_HIDDEN} {\n    display: none !important;\n}\n\n.${Ie.CSS_CLS_INVISIBLE} {\n    visibility: hidden !important;\n}\n\n.${Ie.CSS_CLS_CHAPTER_LINK} {\n    position: absolute;\n    top: 50%;\n    width: 4.5px;\n    height: 4.5px;\n    border-radius: 0px;\n    background-color: var(--color-royal-blue);\n    -moz-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    -o-transform: translate(0, -50%);\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n    -webkit-transition: width .25s ease-in, height .25s ease-in, border-radius 0.25s ease-in;\n    -moz-transition: width .25s ease-in, height .25s ease-in, border-radius 0.25s ease-in;\n    -o-transition: width .25s ease-in, height .25s ease-in, border-radius 0.25s ease-in;\n    -ms-transition: width .25s ease-in, height .25s ease-in, border-radius 0.25s ease-in;\n    transition: width .25s ease-in, height .25s ease-in, border-radius 0.25s ease-in;\n}\n.${Ie.CSS_CLS_VISUAL_SHOWING} #${Ie.CSS_CONTROL_TIME_PER_DURATION} {\n    text-decoration-line: line-through;\n    text-decoration-color: var(--color-royal-blue);\n}\n.${Ie.CSS_CLS_VISUAL_SHOWING} #${Ie.CSS_CONTROL_TIME_PER_DURATION}::before {\n    content: "• ";\n    color: var(--color-royal-blue);\n}\n.${Ie.CSS_CLS_VISUAL_SHOWING} #${Ie.CSS_CONTROL_TIME_PER_DURATION}::after {\n    content: " •";\n    color: var(--color-royal-blue);\n}\n\n.${Ie.CSS_CLS_CONTROL_SHOW} #${Ie.CSS_CONTROL_CONTAINER} {\n    -moz-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n    -webkit-transition: transform .25s ease-in;\n    -moz-transition: transform .25s ease-in;\n    -o-transition: transform .25s ease-in;\n    -ms-transition: transform .25s ease-in;\n    transition: transform .25s ease-in;\n}\n.${Ie.CSS_CLS_CONTROL_SHOW} #${Ie.CSS_VISUAL_CONTAINER} {\n    height: calc(100% - var(--dimension-control-container-height));\n    -webkit-transition: height .25s ease-in;\n    -moz-transition: height .25s ease-in;\n    -o-transition: height .25s ease-in;\n    -ms-transition: height .25s ease-in;\n    transition: height .25s ease-in;\n}\n@media (any-hover: hover) {\n    #${Ie.CSS_ENGINE_CONTAINER}:hover #${Ie.CSS_CONTROL_CONTAINER} {\n        -moz-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n        -o-transform: translate(0, 0);\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0);\n        -webkit-transition: transform .25s ease-in;\n        -moz-transition: transform .25s ease-in;\n        -o-transition: transform .25s ease-in;\n        -ms-transition: transform .25s ease-in;\n        transition: transform .25s ease-in;\n    }\n    #${Ie.CSS_ENGINE_CONTAINER}:hover #${Ie.CSS_VISUAL_CONTAINER} {\n        height: calc(100% - var(--dimension-control-container-height));\n        -webkit-transition: height .25s ease-in;\n        -moz-transition: height .25s ease-in;\n        -o-transition: height .25s ease-in;\n        -ms-transition: height .25s ease-in;\n        transition: height .25s ease-in;\n    }\n}\n@media (any-hover: none) {\n    #${Ie.CSS_CONTROL_VOLUME_GROUP} {\n        display: none;\n    }\n}\n\n@keyframes ive-busy-spinner {\n    to {-webkit-transform: rotate(360deg);}\n}\n`;
customElements.define(
  "interactive-video-engine",
  class extends ct {
    constructor({} = {}) {
      super(),
        (this.styleElement = void 0),
        (this.externalStyleElement = void 0),
        (this.externalScriptElement = void 0);
    }
    connectedCallback() {
      this.onEngineReady(() => {
        (this.styleElement = this._addStyleElement()),
          (this.externalStyleElement = this._addExternalStyleElement()),
          (this.externalScriptElement = this._addExternalScriptElement()),
          this.root.append(
            this.styleElement,
            this.externalStyleElement,
            this.externalScriptElement
          );
        const e = this._addEngineChildren();
        this.root.append(e);
      });
    }
    attributeChangedCallback(e, t, n) {
      let r, i;
      if ("data" !== e)
        if ("run" !== e) {
          if ("conf" === e)
            return (
              (this.config = this.configs[this.conf]),
              this._addVideoSrc(),
              void this._addAudioSrc()
            );
          if (this.isConnected && this.configs && this.root.childNodes.length)
            switch (e) {
              case "css":
                (r = this.externalStyleElement),
                  (i = this._addExternalStyleElement()),
                  this.root.replaceChild(i, r),
                  (this.externalStyleElement = i);
                break;
              case "script":
                (r = this.externalScriptElement),
                  (i = this._addExternalScriptElement()),
                  this.root.replaceChild(i, r),
                  (this.externalScriptElement = i);
            }
        } else this.runner = this.runners[this.run];
      else
        this.onDataChange(() => {
          this._resetEngineChildren();
        });
    }
    disconnectedCallback() {
      this.onEngineDestroyed(() => {
        console.info("Engine element removed from page.");
      });
    }
    adoptedCallback() {
      console.info("Engine element moved to new document.");
    }
    _addStyleElement() {
      const e = document.createElement("style");
      return (e.textContent = lt), e;
    }
    _addExternalStyleElement() {
      const e = document.createElement("style");
      return this.css && (e.textContent = `@import url('${this.css}');`), e;
    }
    _addExternalScriptElement() {
      const e = document.createElement("script");
      return this.script && ((e.src = this.script), (e.async = !0)), e;
    }
    _addEngineChildren() {
      const e = document.createElement("figure");
      return (
        (e.id = Ie.CSS_ENGINE_CONTAINER),
        e.append(
          this._addVideoElement(),
          this._addAudioElement(),
          this._addVisualElement(),
          this._addControlElement(),
          this._addLoaderElement()
        ),
        e
      );
    }
    _resetEngineChildren() {
      const e = this.root.getElementById(Ie.CSS_ENGINE_CONTAINER),
        t = [
          this._addVideoElement(),
          this._addAudioElement(),
          this._addVisualElement(),
          this._addControlElement(),
          this._addLoaderElement(),
        ];
      try {
        e.replaceChildren(...t);
      } catch (n) {
        (e.innerHTML = ""),
          e.append(...t),
          console.warn(
            `Compatibility:\nreplaceChildren not supported by browser\n\n${n}`
          );
      }
    }
  }
);
export { we as A, Ue as C, Je as Config, $e as Runner, et as Session, Be as T };
