var dr = Object.defineProperty;
var vr = (t, e, r) => e in t ? dr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var y = (t, e, r) => vr(t, typeof e != "symbol" ? e + "" : e, r);
import { EventEmitter as W } from "eventemitter3";
var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function fu(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function u() {
      return this instanceof u ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(u) {
    var i = Object.getOwnPropertyDescriptor(t, u);
    Object.defineProperty(r, u, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[u];
      }
    });
  }), r;
}
var bt = { exports: {} };
(function(t) {
  (function(e, r) {
    var u = Math.pow(2, -24), i = Math.pow(2, 32), s = Math.pow(2, 53);
    function n(c) {
      var l = new ArrayBuffer(256), d = new DataView(l), m, f = 0;
      function E(h) {
        for (var w = l.byteLength, v = f + h; w < v; )
          w *= 2;
        if (w !== l.byteLength) {
          var g = d;
          l = new ArrayBuffer(w), d = new DataView(l);
          for (var x = f + 3 >> 2, p = 0; p < x; ++p)
            d.setUint32(p * 4, g.getUint32(p * 4));
        }
        return m = h, d;
      }
      function D() {
        f += m;
      }
      function C(h) {
        D(E(8).setFloat64(f, h));
      }
      function A(h) {
        D(E(1).setUint8(f, h));
      }
      function M(h) {
        for (var w = E(h.length), v = 0; v < h.length; ++v)
          w.setUint8(f + v, h[v]);
        D();
      }
      function T(h) {
        D(E(2).setUint16(f, h));
      }
      function _(h) {
        D(E(4).setUint32(f, h));
      }
      function I(h) {
        var w = h % i, v = (h - w) / i, g = E(8);
        g.setUint32(f, v), g.setUint32(f + 4, w), D();
      }
      function O(h, w) {
        w < 24 ? A(h << 5 | w) : w < 256 ? (A(h << 5 | 24), A(w)) : w < 65536 ? (A(h << 5 | 25), T(w)) : w < 4294967296 ? (A(h << 5 | 26), _(w)) : (A(h << 5 | 27), I(w));
      }
      function z(h) {
        var w;
        if (h === !1)
          return A(244);
        if (h === !0)
          return A(245);
        if (h === null)
          return A(246);
        if (h === r)
          return A(247);
        switch (typeof h) {
          case "number":
            if (Math.floor(h) === h) {
              if (0 <= h && h <= s)
                return O(0, h);
              if (-s <= h && h < 0)
                return O(1, -(h + 1));
            }
            return A(251), C(h);
          case "string":
            var v = [];
            for (w = 0; w < h.length; ++w) {
              var g = h.charCodeAt(w);
              g < 128 ? v.push(g) : g < 2048 ? (v.push(192 | g >> 6), v.push(128 | g & 63)) : g < 55296 ? (v.push(224 | g >> 12), v.push(128 | g >> 6 & 63), v.push(128 | g & 63)) : (g = (g & 1023) << 10, g |= h.charCodeAt(++w) & 1023, g += 65536, v.push(240 | g >> 18), v.push(128 | g >> 12 & 63), v.push(128 | g >> 6 & 63), v.push(128 | g & 63));
            }
            return O(3, v.length), M(v);
          default:
            var x;
            if (Array.isArray(h))
              for (x = h.length, O(4, x), w = 0; w < x; ++w)
                z(h[w]);
            else if (h instanceof Uint8Array)
              O(2, h.length), M(h);
            else {
              var p = Object.keys(h);
              for (x = p.length, O(5, x), w = 0; w < x; ++w) {
                var b = p[w];
                z(b), z(h[b]);
              }
            }
        }
      }
      if (z(c), "slice" in l)
        return l.slice(0, f);
      for (var V = new ArrayBuffer(f), B = new DataView(V), U = 0; U < f; ++U)
        B.setUint8(U, d.getUint8(U));
      return V;
    }
    function a(c, l, d) {
      var m = new DataView(c), f = 0;
      typeof l != "function" && (l = function(v) {
        return v;
      }), typeof d != "function" && (d = function() {
        return r;
      });
      function E(v, g) {
        return f += g, v;
      }
      function D(v) {
        return E(new Uint8Array(c, f, v), v);
      }
      function C() {
        var v = new ArrayBuffer(4), g = new DataView(v), x = _(), p = x & 32768, b = x & 31744, $ = x & 1023;
        if (b === 31744)
          b = 261120;
        else if (b !== 0)
          b += 114688;
        else if ($ !== 0)
          return $ * u;
        return g.setUint32(0, p << 16 | b << 13 | $ << 13), g.getFloat32(0);
      }
      function A() {
        return E(m.getFloat32(f), 4);
      }
      function M() {
        return E(m.getFloat64(f), 8);
      }
      function T() {
        return E(m.getUint8(f), 1);
      }
      function _() {
        return E(m.getUint16(f), 2);
      }
      function I() {
        return E(m.getUint32(f), 4);
      }
      function O() {
        return I() * i + I();
      }
      function z() {
        return m.getUint8(f) !== 255 ? !1 : (f += 1, !0);
      }
      function V(v) {
        if (v < 24)
          return v;
        if (v === 24)
          return T();
        if (v === 25)
          return _();
        if (v === 26)
          return I();
        if (v === 27)
          return O();
        if (v === 31)
          return -1;
        throw "Invalid length encoding";
      }
      function B(v) {
        var g = T();
        if (g === 255)
          return -1;
        var x = V(g & 31);
        if (x < 0 || g >> 5 !== v)
          throw "Invalid indefinite length element";
        return x;
      }
      function U(v, g) {
        for (var x = 0; x < g; ++x) {
          var p = T();
          p & 128 && (p < 224 ? (p = (p & 31) << 6 | T() & 63, g -= 1) : p < 240 ? (p = (p & 15) << 12 | (T() & 63) << 6 | T() & 63, g -= 2) : (p = (p & 15) << 18 | (T() & 63) << 12 | (T() & 63) << 6 | T() & 63, g -= 3)), p < 65536 ? v.push(p) : (p -= 65536, v.push(55296 | p >> 10), v.push(56320 | p & 1023));
        }
      }
      function h() {
        var v = T(), g = v >> 5, x = v & 31, p, b;
        if (g === 7)
          switch (x) {
            case 25:
              return C();
            case 26:
              return A();
            case 27:
              return M();
          }
        if (b = V(x), b < 0 && (g < 2 || 6 < g))
          throw "Invalid length";
        switch (g) {
          case 0:
            return b;
          case 1:
            return -1 - b;
          case 2:
            if (b < 0) {
              for (var $ = [], Ke = 0; (b = B(g)) >= 0; )
                Ke += b, $.push(D(b));
              var et = new Uint8Array(Ke), tt = 0;
              for (p = 0; p < $.length; ++p)
                et.set($[p], tt), tt += $[p].length;
              return et;
            }
            return D(b);
          case 3:
            var Le = [];
            if (b < 0)
              for (; (b = B(g)) >= 0; )
                U(Le, b);
            else
              U(Le, b);
            return String.fromCharCode.apply(null, Le);
          case 4:
            var pe;
            if (b < 0)
              for (pe = []; !z(); )
                pe.push(h());
            else
              for (pe = new Array(b), p = 0; p < b; ++p)
                pe[p] = h();
            return pe;
          case 5:
            var rt = {};
            for (p = 0; p < b || b < 0 && !z(); ++p) {
              var mr = h();
              rt[mr] = h();
            }
            return rt;
          case 6:
            return l(h(), b);
          case 7:
            switch (b) {
              case 20:
                return !1;
              case 21:
                return !0;
              case 22:
                return null;
              case 23:
                return r;
              default:
                return d(b);
            }
        }
      }
      var w = h();
      if (f !== c.byteLength)
        throw "Remaining bytes";
      return w;
    }
    var o = { encode: n, decode: a };
    t.exports ? t.exports = o : e.CBOR || (e.CBOR = o);
  })(Dr);
})(bt);
var Ar = bt.exports;
const br = /* @__PURE__ */ gr(Ar);
var Et = Math.pow(2, 32), ut = !1;
function yt() {
  ut || (ut = !0, console.warn(
    "CBOR 64-bit integer array values may lose precision. No further warnings."
  ));
}
function Er(t) {
  yt();
  for (var e = t.byteLength, r = t.byteOffset, u = e / 8, i = t.buffer.slice(r, r + e), s = new Uint32Array(i), n = new Array(u), a = 0; a < u; a++) {
    var o = a * 2, c = s[o], l = s[o + 1];
    n[a] = c + Et * l;
  }
  return n;
}
function yr(t) {
  yt();
  for (var e = t.byteLength, r = t.byteOffset, u = e / 8, i = t.buffer.slice(r, r + e), s = new Uint32Array(i), n = new Int32Array(i), a = new Array(u), o = 0; o < u; o++) {
    var c = o * 2, l = s[c], d = n[c + 1];
    a[o] = l + Et * d;
  }
  return a;
}
function wr(t, e) {
  var r = t.byteLength, u = t.byteOffset, i = t.buffer.slice(u, u + r);
  return new e(i);
}
var it = {
  64: Uint8Array,
  69: Uint16Array,
  70: Uint32Array,
  72: Int8Array,
  77: Int16Array,
  78: Int32Array,
  85: Float32Array,
  86: Float64Array
}, st = {
  71: Er,
  79: yr
};
function Cr(t, e) {
  if (e in it) {
    var r = it[e];
    return wr(t, r);
  }
  return e in st ? st[e](t) : t;
}
var Ie = null;
typeof bson < "u" && (Ie = bson().BSON);
function qe(t) {
  var e = null;
  t.transportOptions.decoder && (e = t.transportOptions.decoder);
  function r(s) {
    s.op === "publish" ? t.emit(s.topic, s.msg) : s.op === "service_response" ? t.emit(s.id, s) : s.op === "call_service" ? t.emit(s.service, s) : s.op === "send_action_goal" ? t.emit(s.action, s) : s.op === "cancel_action_goal" || s.op === "action_feedback" || s.op === "action_result" ? t.emit(s.id, s) : s.op === "status" && (s.id ? t.emit("status:" + s.id, s) : t.emit("status", s));
  }
  function u(s, n) {
    s.op === "png" ? typeof window > "u" ? import("./decompressPng-KoBqFJo3.js").then(({ default: a }) => a(s.data, n)) : import("./decompressPng-DB2EQ_f0.js").then(({ default: a }) => a(s.data, n)) : n(s);
  }
  function i(s, n) {
    if (!Ie)
      throw "Cannot process BSON encoded message without BSON header.";
    var a = new FileReader();
    a.onload = function() {
      var o = new Uint8Array(this.result), c = Ie.deserialize(o);
      n(c);
    }, a.readAsArrayBuffer(s);
  }
  return {
    /**
     * Emit a 'connection' event on WebSocket connection.
     *
     * @param {function} event - The argument to emit with the event.
     * @memberof SocketAdapter
     */
    onopen: function(n) {
      t.isConnected = !0, t.emit("connection", n);
    },
    /**
     * Emit a 'close' event on WebSocket disconnection.
     *
     * @param {function} event - The argument to emit with the event.
     * @memberof SocketAdapter
     */
    onclose: function(n) {
      t.isConnected = !1, t.emit("close", n);
    },
    /**
     * Emit an 'error' event whenever there was an error.
     *
     * @param {function} event - The argument to emit with the event.
     * @memberof SocketAdapter
     */
    onerror: function(n) {
      t.emit("error", n);
    },
    /**
     * Parse message responses from rosbridge and send to the appropriate
     * topic, service, or param.
     *
     * @param {Object} data - The raw JSON message from rosbridge.
     * @memberof SocketAdapter
     */
    onmessage: function(n) {
      if (e)
        e(n.data, function(c) {
          r(c);
        });
      else if (typeof Blob < "u" && n.data instanceof Blob)
        i(n.data, function(c) {
          u(c, r);
        });
      else if (n.data instanceof ArrayBuffer) {
        var a = br.decode(n.data, Cr);
        r(a);
      } else {
        var o = JSON.parse(typeof n == "string" ? n : n.data);
        u(o, r);
      }
    }
  };
}
class L extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.name - The topic name, like '/cmd_vel'.
   * @param {string} options.messageType - The message type, like 'std_msgs/String'.
   * @param {string} [options.compression=none] - The type of compression to use, like 'png', 'cbor', or 'cbor-raw'.
   * @param {number} [options.throttle_rate=0] - The rate (in ms in between messages) at which to throttle the topics.
   * @param {number} [options.queue_size=100] - The queue created at bridge side for re-publishing webtopics.
   * @param {boolean} [options.latch=false] - Latch the topic when publishing.
   * @param {number} [options.queue_length=0] - The queue length at bridge side used when subscribing.
   * @param {boolean} [options.reconnect_on_close=true] - The flag to enable resubscription and readvertisement on close event.
   */
  constructor(r) {
    super();
    /** @type {boolean | undefined} */
    y(this, "waitForReconnect");
    /** @type {(() => void) | undefined} */
    y(this, "reconnectFunc");
    y(this, "isAdvertised", !1);
    y(this, "_messageCallback", (r) => {
      this.emit("message", r);
    });
    this.ros = r.ros, this.name = r.name, this.messageType = r.messageType, this.compression = r.compression || "none", this.throttle_rate = r.throttle_rate || 0, this.latch = r.latch || !1, this.queue_size = r.queue_size || 100, this.queue_length = r.queue_length || 0, this.reconnect_on_close = r.reconnect_on_close !== void 0 ? r.reconnect_on_close : !0, this.compression && this.compression !== "png" && this.compression !== "cbor" && this.compression !== "cbor-raw" && this.compression !== "none" && (this.emit(
      "warning",
      this.compression + " compression is not supported. No compression will be used."
    ), this.compression = "none"), this.throttle_rate < 0 && (this.emit("warning", this.throttle_rate + " is not allowed. Set to 0"), this.throttle_rate = 0), this.reconnect_on_close ? this.callForSubscribeAndAdvertise = (u) => {
      this.ros.callOnConnection(u), this.waitForReconnect = !1, this.reconnectFunc = () => {
        this.waitForReconnect || (this.waitForReconnect = !0, this.ros.callOnConnection(u), this.ros.once("connection", () => {
          this.waitForReconnect = !1;
        }));
      }, this.ros.on("close", this.reconnectFunc);
    } : this.callForSubscribeAndAdvertise = this.ros.callOnConnection;
  }
  /**
   * @callback subscribeCallback
   * @param {T} message - The published message.
   */
  /**
   * Every time a message is published for the given topic, the callback
   * will be called with the message object.
   *
   * @param {subscribeCallback} callback - Function with the following params:
   */
  subscribe(r) {
    typeof r == "function" && this.on("message", r), !this.subscribeId && (this.ros.on(this.name, this._messageCallback), this.subscribeId = "subscribe:" + this.name + ":" + (++this.ros.idCounter).toString(), this.callForSubscribeAndAdvertise({
      op: "subscribe",
      id: this.subscribeId,
      type: this.messageType,
      topic: this.name,
      compression: this.compression,
      throttle_rate: this.throttle_rate,
      queue_length: this.queue_length
    }));
  }
  /**
   * Unregister as a subscriber for the topic. Unsubscribing will stop
   * and remove all subscribe callbacks. To remove a callback, you must
   * explicitly pass the callback function in.
   *
   * @param {import('eventemitter3').EventEmitter.ListenerFn} [callback] - The callback to unregister, if
   *     provided and other listeners are registered the topic won't
   *     unsubscribe, just stop emitting to the passed listener.
   */
  unsubscribe(r) {
    r && (this.off("message", r), this.listeners("message").length) || this.subscribeId && (this.ros.off(this.name, this._messageCallback), this.reconnect_on_close && this.ros.off("close", this.reconnectFunc), this.emit("unsubscribe"), this.ros.callOnConnection({
      op: "unsubscribe",
      id: this.subscribeId,
      topic: this.name
    }), this.subscribeId = null);
  }
  /**
   * Register as a publisher for the topic.
   */
  advertise() {
    this.isAdvertised || (this.advertiseId = "advertise:" + this.name + ":" + (++this.ros.idCounter).toString(), this.callForSubscribeAndAdvertise({
      op: "advertise",
      id: this.advertiseId,
      type: this.messageType,
      topic: this.name,
      latch: this.latch,
      queue_size: this.queue_size
    }), this.isAdvertised = !0, this.reconnect_on_close || this.ros.on("close", () => {
      this.isAdvertised = !1;
    }));
  }
  /**
   * Unregister as a publisher for the topic.
   */
  unadvertise() {
    this.isAdvertised && (this.reconnect_on_close && this.ros.off("close", this.reconnectFunc), this.emit("unadvertise"), this.ros.callOnConnection({
      op: "unadvertise",
      id: this.advertiseId,
      topic: this.name
    }), this.isAdvertised = !1);
  }
  /**
   * Publish the message.
   *
   * @param {T} message - The message to publish.
   */
  publish(r) {
    this.isAdvertised || this.advertise(), this.ros.idCounter++;
    var u = {
      op: "publish",
      id: "publish:" + this.name + ":" + this.ros.idCounter,
      topic: this.name,
      msg: r,
      latch: this.latch
    };
    this.ros.callOnConnection(u);
  }
}
class S extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.name - The service name, like '/add_two_ints'.
   * @param {string} options.serviceType - The service type, like 'rospy_tutorials/AddTwoInts'.
   */
  constructor(r) {
    super();
    /**
       * Stores a reference to the most recent service callback advertised so it can be removed from the EventEmitter during un-advertisement
       * @private
       * @type {((rosbridgeRequest) => any) | null}
       */
    y(this, "_serviceCallback", null);
    y(this, "isAdvertised", !1);
    this.ros = r.ros, this.name = r.name, this.serviceType = r.serviceType;
  }
  /**
   * @callback callServiceCallback
   *  @param {TResponse} response - The response from the service request.
   */
  /**
   * @callback callServiceFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Call the service. Returns the service response in the
   * callback. Does nothing if this service is currently advertised.
   *
   * @param {TRequest} request - The service request to send.
   * @param {callServiceCallback} [callback] - Function with the following params:
   * @param {callServiceFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  callService(r, u, i) {
    if (!this.isAdvertised) {
      var s = "call_service:" + this.name + ":" + (++this.ros.idCounter).toString();
      (u || i) && this.ros.once(s, function(a) {
        a.result !== void 0 && a.result === !1 ? typeof i == "function" && i(a.values) : typeof u == "function" && u(a.values);
      });
      var n = {
        op: "call_service",
        id: s,
        service: this.name,
        type: this.serviceType,
        args: r
      };
      this.ros.callOnConnection(n);
    }
  }
  /**
   * @callback advertiseCallback
   * @param {TRequest} request - The service request.
   * @param {Partial<TResponse>} response - An empty dictionary. Take care not to overwrite this. Instead, only modify the values within.
   * @returns {boolean} true if the service has finished successfully, i.e., without any fatal errors.
   */
  /**
   * Advertise the service. This turns the Service object from a client
   * into a server. The callback will be called with every request
   * that's made on this service.
   *
   * @param {advertiseCallback} callback - This works similarly to the callback for a C++ service and should take the following params
   */
  advertise(r) {
    if (this.isAdvertised)
      throw new Error("Cannot advertise the same Service twice!");
    this._serviceCallback = (u) => {
      var i = {}, s = r(u.args, i), n = {
        op: "service_response",
        service: this.name,
        values: i,
        result: s
      };
      u.id && (n.id = u.id), this.ros.callOnConnection(n);
    }, this.ros.on(this.name, this._serviceCallback), this.ros.callOnConnection({
      op: "advertise_service",
      type: this.serviceType,
      service: this.name
    }), this.isAdvertised = !0;
  }
  unadvertise() {
    if (!this.isAdvertised)
      throw new Error(`Tried to un-advertise service ${this.name}, but it was not advertised!`);
    this.ros.callOnConnection({
      op: "unadvertise_service",
      service: this.name
    }), this._serviceCallback && this.ros.off(this.name, this._serviceCallback), this.isAdvertised = !1;
  }
  /**
   * An alternate form of Service advertisement that supports a modern Promise-based interface for use with async/await.
   * @param {(request: TRequest) => Promise<TResponse>} callback An asynchronous callback processing the request and returning a response.
   */
  advertiseAsync(r) {
    if (this.isAdvertised)
      throw new Error("Cannot advertise the same Service twice!");
    this._serviceCallback = async (u) => {
      let i = {
        op: "service_response",
        service: this.name,
        result: !1
      };
      try {
        i.values = await r(u.args), i.result = !0;
      } finally {
        u.id && (i.id = u.id), this.ros.callOnConnection(i);
      }
    }, this.ros.on(this.name, this._serviceCallback), this.ros.callOnConnection({
      op: "advertise_service",
      type: this.serviceType,
      service: this.name
    }), this.isAdvertised = !0;
  }
}
class wt {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.name - The param name, like max_vel_x.
   */
  constructor(e) {
    this.ros = e.ros, this.name = e.name;
  }
  /**
   * @callback getCallback
   * @param {Object} value - The value of the param from ROS.
   */
  /**
   * @callback getFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Fetch the value of the param.
   *
   * @param {getCallback} callback - The callback function.
   * @param {getFailedCallback} [failedCallback] - The callback function when the service call failed.
   */
  get(e, r) {
    var u = new S({
      ros: this.ros,
      name: "/rosapi/get_param",
      serviceType: "rosapi/GetParam"
    }), i = { name: this.name };
    u.callService(
      i,
      function(s) {
        var n = JSON.parse(s.value);
        e(n);
      },
      r
    );
  }
  /**
   * @callback setParamCallback
   * @param {Object} response - The response from the service request.
   */
  /**
   * @callback setParamFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Set the value of the param in ROS.
   *
   * @param {Object} value - The value to set param to.
   * @param {setParamCallback} [callback] - The callback function.
   * @param {setParamFailedCallback} [failedCallback] - The callback function when the service call failed.
   */
  set(e, r, u) {
    var i = new S({
      ros: this.ros,
      name: "/rosapi/set_param",
      serviceType: "rosapi/SetParam"
    }), s = {
      name: this.name,
      value: JSON.stringify(e)
    };
    i.callService(s, r, u);
  }
  /**
   * Delete this parameter on the ROS server.
   *
   * @param {setParamCallback} callback - The callback function.
   * @param {setParamFailedCallback} [failedCallback] - The callback function when the service call failed.
   */
  delete(e, r) {
    var u = new S({
      ros: this.ros,
      name: "/rosapi/delete_param",
      serviceType: "rosapi/DeleteParam"
    }), i = {
      name: this.name
    };
    u.callService(i, e, r);
  }
}
class Ge extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.serverName - The action server name, like '/fibonacci'.
   * @param {string} options.actionName - The action message name, like 'actionlib_tutorials/FibonacciAction'.
   * @param {number} [options.timeout] - The timeout length when connecting to the action server.
   * @param {boolean} [options.omitFeedback] - The flag to indicate whether to omit the feedback channel or not.
   * @param {boolean} [options.omitStatus] - The flag to indicate whether to omit the status channel or not.
   * @param {boolean} [options.omitResult] - The flag to indicate whether to omit the result channel or not.
   */
  constructor(r) {
    super();
    y(this, "goals", {});
    /** flag to check if a status has been received */
    y(this, "receivedStatus", !1);
    this.ros = r.ros, this.serverName = r.serverName, this.actionName = r.actionName, this.timeout = r.timeout, this.omitFeedback = r.omitFeedback, this.omitStatus = r.omitStatus, this.omitResult = r.omitResult, this.feedbackListener = new L({
      ros: this.ros,
      name: this.serverName + "/feedback",
      messageType: this.actionName + "Feedback"
    }), this.statusListener = new L({
      ros: this.ros,
      name: this.serverName + "/status",
      messageType: "actionlib_msgs/GoalStatusArray"
    }), this.resultListener = new L({
      ros: this.ros,
      name: this.serverName + "/result",
      messageType: this.actionName + "Result"
    }), this.goalTopic = new L({
      ros: this.ros,
      name: this.serverName + "/goal",
      messageType: this.actionName + "Goal"
    }), this.cancelTopic = new L({
      ros: this.ros,
      name: this.serverName + "/cancel",
      messageType: "actionlib_msgs/GoalID"
    }), this.goalTopic.advertise(), this.cancelTopic.advertise(), this.omitStatus || this.statusListener.subscribe((u) => {
      this.receivedStatus = !0, u.status_list.forEach((i) => {
        var s = this.goals[i.goal_id.id];
        s && s.emit("status", i);
      });
    }), this.omitFeedback || this.feedbackListener.subscribe((u) => {
      var i = this.goals[u.status.goal_id.id];
      i && (i.emit("status", u.status), i.emit("feedback", u.feedback));
    }), this.omitResult || this.resultListener.subscribe((u) => {
      var i = this.goals[u.status.goal_id.id];
      i && (i.emit("status", u.status), i.emit("result", u.result));
    }), this.timeout && setTimeout(() => {
      this.receivedStatus || this.emit("timeout");
    }, this.timeout);
  }
  /**
   * Cancel all goals associated with this ActionClient.
   */
  cancel() {
    var r = {};
    this.cancelTopic.publish(r);
  }
  /**
   * Unsubscribe and unadvertise all topics associated with this ActionClient.
   */
  dispose() {
    this.goalTopic.unadvertise(), this.cancelTopic.unadvertise(), this.omitStatus || this.statusListener.unsubscribe(), this.omitFeedback || this.feedbackListener.unsubscribe(), this.omitResult || this.resultListener.unsubscribe();
  }
}
class Ct extends W {
  /**
   * @param {Object} options
   * @param {ActionClient} options.actionClient - The ROSLIB.ActionClient to use with this goal.
   * @param {Object} options.goalMessage - The JSON object containing the goal for the action server.
   */
  constructor(r) {
    super();
    y(this, "isFinished", !1);
    y(this, "status");
    y(this, "result");
    y(this, "feedback");
    // Create a random ID
    y(this, "goalID", "goal_" + Math.random() + "_" + (/* @__PURE__ */ new Date()).getTime());
    this.actionClient = r.actionClient, this.goalMessage = {
      goal_id: {
        stamp: {
          secs: 0,
          nsecs: 0
        },
        id: this.goalID
      },
      goal: r.goalMessage
    }, this.on("status", (u) => {
      this.status = u;
    }), this.on("result", (u) => {
      this.isFinished = !0, this.result = u;
    }), this.on("feedback", (u) => {
      this.feedback = u;
    }), this.actionClient.goals[this.goalID] = this;
  }
  /**
   * Send the goal to the action server.
   *
   * @param {number} [timeout] - A timeout length for the goal's result.
   */
  send(r) {
    this.actionClient.goalTopic.publish(this.goalMessage), r && setTimeout(() => {
      this.isFinished || this.emit("timeout");
    }, r);
  }
  /**
   * Cancel the current goal.
   */
  cancel() {
    var r = {
      id: this.goalID
    };
    this.actionClient.cancelTopic.publish(r);
  }
}
class Q {
  /**
   * @param {Object} [options]
   * @param {number|null} [options.x=0] - The x value.
   * @param {number|null} [options.y=0] - The y value.
   * @param {number|null} [options.z=0] - The z value.
   * @param {number|null} [options.w=1] - The w value.
   */
  constructor(e) {
    e = e || {}, this.x = e.x || 0, this.y = e.y || 0, this.z = e.z || 0, this.w = typeof e.w == "number" ? e.w : 1;
  }
  /**
   * Perform a conjugation on this quaternion.
   */
  conjugate() {
    this.x *= -1, this.y *= -1, this.z *= -1;
  }
  /**
   * Return the norm of this quaternion.
   */
  norm() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  /**
   * Perform a normalization on this quaternion.
   */
  normalize() {
    var e = Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
    e === 0 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (e = 1 / e, this.x = this.x * e, this.y = this.y * e, this.z = this.z * e, this.w = this.w * e);
  }
  /**
   * Convert this quaternion into its inverse.
   */
  invert() {
    this.conjugate(), this.normalize();
  }
  /**
   * Set the values of this quaternion to the product of itself and the given quaternion.
   *
   * @param {Quaternion} q - The quaternion to multiply with.
   */
  multiply(e) {
    var r = this.x * e.w + this.y * e.z - this.z * e.y + this.w * e.x, u = -this.x * e.z + this.y * e.w + this.z * e.x + this.w * e.y, i = this.x * e.y - this.y * e.x + this.z * e.w + this.w * e.z, s = -this.x * e.x - this.y * e.y - this.z * e.z + this.w * e.w;
    this.x = r, this.y = u, this.z = i, this.w = s;
  }
  /**
   * Clone a copy of this quaternion.
   *
   * @returns {Quaternion} The cloned quaternion.
   */
  clone() {
    return new Q(this);
  }
}
class H {
  /**
   * @param {Object} [options]
   * @param {number} [options.x=0] - The x value.
   * @param {number} [options.y=0] - The y value.
   * @param {number} [options.z=0] - The z value.
   */
  constructor(e) {
    e = e || {}, this.x = e.x || 0, this.y = e.y || 0, this.z = e.z || 0;
  }
  /**
   * Set the values of this vector to the sum of itself and the given vector.
   *
   * @param {Vector3} v - The vector to add with.
   */
  add(e) {
    this.x += e.x, this.y += e.y, this.z += e.z;
  }
  /**
   * Set the values of this vector to the difference of itself and the given vector.
   *
   * @param {Vector3} v - The vector to subtract with.
   */
  subtract(e) {
    this.x -= e.x, this.y -= e.y, this.z -= e.z;
  }
  /**
   * Multiply the given Quaternion with this vector.
   *
   * @param {Quaternion} q - The quaternion to multiply with.
   */
  multiplyQuaternion(e) {
    var r = e.w * this.x + e.y * this.z - e.z * this.y, u = e.w * this.y + e.z * this.x - e.x * this.z, i = e.w * this.z + e.x * this.y - e.y * this.x, s = -e.x * this.x - e.y * this.y - e.z * this.z;
    this.x = r * e.w + s * -e.x + u * -e.z - i * -e.y, this.y = u * e.w + s * -e.y + i * -e.x - r * -e.z, this.z = i * e.w + s * -e.z + r * -e.y - u * -e.x;
  }
  /**
   * Clone a copy of this vector.
   *
   * @returns {Vector3} The cloned vector.
   */
  clone() {
    return new H(this);
  }
}
class be {
  /**
   * @param {Object} options
   * @param {Vector3} options.translation - The ROSLIB.Vector3 describing the translation.
   * @param {Quaternion} options.rotation - The ROSLIB.Quaternion describing the rotation.
   */
  constructor(e) {
    this.translation = new H(e.translation), this.rotation = new Q(e.rotation);
  }
  /**
   * Clone a copy of this transform.
   *
   * @returns {Transform} The cloned transform.
   */
  clone() {
    return new be(this);
  }
}
class Tt extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} [options.fixedFrame=base_link] - The fixed frame.
   * @param {number} [options.angularThres=2.0] - The angular threshold for the TF republisher.
   * @param {number} [options.transThres=0.01] - The translation threshold for the TF republisher.
   * @param {number} [options.rate=10.0] - The rate for the TF republisher.
   * @param {number} [options.updateDelay=50] - The time (in ms) to wait after a new subscription
   *     to update the TF republisher's list of TFs.
   * @param {number} [options.topicTimeout=2.0] - The timeout parameter for the TF republisher.
   * @param {string} [options.serverName="/tf2_web_republisher"] - The name of the tf2_web_republisher server.
   * @param {string} [options.repubServiceName="/republish_tfs"] - The name of the republish_tfs service (non groovy compatibility mode only).
   */
  constructor(r) {
    super();
    /** @type {Goal|false} */
    y(this, "currentGoal", !1);
    /** @type {Topic|false} */
    y(this, "currentTopic", !1);
    y(this, "frameInfos", {});
    y(this, "republisherUpdateRequested", !1);
    /** @type {((tf: any) => any) | undefined} */
    y(this, "_subscribeCB");
    y(this, "_isDisposed", !1);
    this.ros = r.ros, this.fixedFrame = r.fixedFrame || "base_link", this.angularThres = r.angularThres || 2, this.transThres = r.transThres || 0.01, this.rate = r.rate || 10, this.updateDelay = r.updateDelay || 50;
    var u = r.topicTimeout || 2, i = Math.floor(u), s = Math.floor((u - i) * 1e9);
    this.topicTimeout = {
      secs: i,
      nsecs: s
    }, this.serverName = r.serverName || "/tf2_web_republisher", this.repubServiceName = r.repubServiceName || "/republish_tfs", this.actionClient = new Ge({
      ros: r.ros,
      serverName: this.serverName,
      actionName: "tf2_web_republisher/TFSubscriptionAction",
      omitStatus: !0,
      omitResult: !0
    }), this.serviceClient = new S({
      ros: r.ros,
      name: this.repubServiceName,
      serviceType: "tf2_web_republisher/RepublishTFs"
    });
  }
  /**
   * Process the incoming TF message and send them out using the callback
   * functions.
   *
   * @param {Object} tf - The TF message from the server.
   */
  processTFArray(r) {
    r.transforms.forEach((u) => {
      var i = u.child_frame_id;
      i[0] === "/" && (i = i.substring(1));
      var s = this.frameInfos[i];
      s && (s.transform = new be({
        translation: u.transform.translation,
        rotation: u.transform.rotation
      }), s.cbs.forEach((n) => {
        n(s.transform);
      }));
    }, this);
  }
  /**
   * Create and send a new goal (or service request) to the tf2_web_republisher
   * based on the current list of TFs.
   */
  updateGoal() {
    var r = {
      source_frames: Object.keys(this.frameInfos),
      target_frame: this.fixedFrame,
      angular_thres: this.angularThres,
      trans_thres: this.transThres,
      rate: this.rate
    };
    this.ros.groovyCompatibility ? (this.currentGoal && this.currentGoal.cancel(), this.currentGoal = new Ct({
      actionClient: this.actionClient,
      goalMessage: r
    }), this.currentGoal.on("feedback", this.processTFArray.bind(this)), this.currentGoal.send()) : (r.timeout = this.topicTimeout, this.serviceClient.callService(r, this.processResponse.bind(this))), this.republisherUpdateRequested = !1;
  }
  /**
   * Process the service response and subscribe to the tf republisher
   * topic.
   *
   * @param {Object} response - The service response containing the topic name.
   */
  processResponse(r) {
    this._isDisposed || (this.currentTopic && this.currentTopic.unsubscribe(this._subscribeCB), this.currentTopic = new L({
      ros: this.ros,
      name: r.topic_name,
      messageType: "tf2_web_republisher/TFArray"
    }), this._subscribeCB = this.processTFArray.bind(this), this.currentTopic.subscribe(this._subscribeCB));
  }
  /**
   * @callback subscribeCallback
   * @param {Transform} callback.transform - The transform data.
   */
  /**
   * Subscribe to the given TF frame.
   *
   * @param {string} frameID - The TF frame to subscribe to.
   * @param {subscribeCallback} callback - Function with the following params:
   */
  subscribe(r, u) {
    r[0] === "/" && (r = r.substring(1)), this.frameInfos[r] ? this.frameInfos[r].transform && u(this.frameInfos[r].transform) : (this.frameInfos[r] = {
      cbs: []
    }, this.republisherUpdateRequested || (setTimeout(this.updateGoal.bind(this), this.updateDelay), this.republisherUpdateRequested = !0)), this.frameInfos[r].cbs.push(u);
  }
  /**
   * Unsubscribe from the given TF frame.
   *
   * @param {string} frameID - The TF frame to unsubscribe from.
   * @param {function} callback - The callback function to remove.
   */
  unsubscribe(r, u) {
    r[0] === "/" && (r = r.substring(1));
    for (var i = this.frameInfos[r], s = i && i.cbs || [], n = s.length; n--; )
      s[n] === u && s.splice(n, 1);
    (!u || s.length === 0) && delete this.frameInfos[r];
  }
  /**
   * Unsubscribe and unadvertise all topics associated with this TFClient.
   */
  dispose() {
    this._isDisposed = !0, this.actionClient.dispose(), this.currentTopic && this.currentTopic.unsubscribe(this._subscribeCB);
  }
}
class Nt extends W {
  // the one this'll be preempting
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.serverName - The action server name, like '/fibonacci'.
   * @param {string} options.actionName - The action message name, like 'actionlib_tutorials/FibonacciAction'.
   */
  constructor(r) {
    super();
    // needed for handling preemption prompted by a new goal being received
    /** @type {{goal_id: {id: any, stamp: any}, goal: any} | null} */
    y(this, "currentGoal", null);
    // currently tracked goal
    /** @type {{goal_id: {id: any, stamp: any}, goal: any} | null} */
    y(this, "nextGoal", null);
    this.ros = r.ros, this.serverName = r.serverName, this.actionName = r.actionName, this.feedbackPublisher = new L({
      ros: this.ros,
      name: this.serverName + "/feedback",
      messageType: this.actionName + "Feedback"
    }), this.feedbackPublisher.advertise();
    var u = new L({
      ros: this.ros,
      name: this.serverName + "/status",
      messageType: "actionlib_msgs/GoalStatusArray"
    });
    u.advertise(), this.resultPublisher = new L({
      ros: this.ros,
      name: this.serverName + "/result",
      messageType: this.actionName + "Result"
    }), this.resultPublisher.advertise();
    var i = new L({
      ros: this.ros,
      name: this.serverName + "/goal",
      messageType: this.actionName + "Goal"
    }), s = new L({
      ros: this.ros,
      name: this.serverName + "/cancel",
      messageType: "actionlib_msgs/GoalID"
    });
    this.statusMessage = {
      header: {
        stamp: { secs: 0, nsecs: 100 },
        frame_id: ""
      },
      /** @type {{goal_id: any, status: number}[]} */
      status_list: []
    }, i.subscribe((a) => {
      this.currentGoal ? (this.nextGoal = a, this.emit("cancel")) : (this.statusMessage.status_list = [{ goal_id: a.goal_id, status: 1 }], this.currentGoal = a, this.emit("goal", a.goal));
    });
    var n = function(a, o) {
      return a.secs > o.secs ? !1 : a.secs < o.secs ? !0 : a.nsecs < o.nsecs;
    };
    s.subscribe((a) => {
      a.stamp.secs === 0 && a.stamp.secs === 0 && a.id === "" ? (this.nextGoal = null, this.currentGoal && this.emit("cancel")) : (this.currentGoal && a.id === this.currentGoal.goal_id.id ? this.emit("cancel") : this.nextGoal && a.id === this.nextGoal.goal_id.id && (this.nextGoal = null), this.nextGoal && n(this.nextGoal.goal_id.stamp, a.stamp) && (this.nextGoal = null), this.currentGoal && n(this.currentGoal.goal_id.stamp, a.stamp) && this.emit("cancel"));
    }), setInterval(() => {
      var a = /* @__PURE__ */ new Date(), o = Math.floor(a.getTime() / 1e3), c = Math.round(
        1e9 * (a.getTime() / 1e3 - o)
      );
      this.statusMessage.header.stamp.secs = o, this.statusMessage.header.stamp.nsecs = c, u.publish(this.statusMessage);
    }, 500);
  }
  /**
   * Set action state to succeeded and return to client.
   *
   * @param {Object} result - The result to return to the client.
   */
  setSucceeded(r) {
    if (this.currentGoal !== null) {
      var u = {
        status: { goal_id: this.currentGoal.goal_id, status: 3 },
        result: r
      };
      this.resultPublisher.publish(u), this.statusMessage.status_list = [], this.nextGoal ? (this.currentGoal = this.nextGoal, this.nextGoal = null, this.emit("goal", this.currentGoal.goal)) : this.currentGoal = null;
    }
  }
  /**
   * Set action state to aborted and return to client.
   *
   * @param {Object} result - The result to return to the client.
   */
  setAborted(r) {
    if (this.currentGoal !== null) {
      var u = {
        status: { goal_id: this.currentGoal.goal_id, status: 4 },
        result: r
      };
      this.resultPublisher.publish(u), this.statusMessage.status_list = [], this.nextGoal ? (this.currentGoal = this.nextGoal, this.nextGoal = null, this.emit("goal", this.currentGoal.goal)) : this.currentGoal = null;
    }
  }
  /**
   * Send a feedback message.
   *
   * @param {Object} feedback - The feedback to send to the client.
   */
  sendFeedback(r) {
    if (this.currentGoal !== null) {
      var u = {
        status: { goal_id: this.currentGoal.goal_id, status: 1 },
        feedback: r
      };
      this.feedbackPublisher.publish(u);
    }
  }
  /**
   * Handle case where client requests preemption.
   */
  setPreempted() {
    if (this.currentGoal !== null) {
      this.statusMessage.status_list = [];
      var r = {
        status: { goal_id: this.currentGoal.goal_id, status: 2 }
      };
      this.resultPublisher.publish(r), this.nextGoal ? (this.currentGoal = this.nextGoal, this.nextGoal = null, this.emit("goal", this.currentGoal.goal)) : this.currentGoal = null;
    }
  }
}
class Tr extends W {
  /**
   * @param {Object} [options]
   * @param {string} [options.url] - The WebSocket URL for rosbridge. Can be specified later with `connect`.
   * @param {boolean} [options.groovyCompatibility=true] - Don't use interfaces that changed after the last groovy release or rosbridge_suite and related tools.
   * @param {'websocket'|RTCPeerConnection} [options.transportLibrary='websocket'] - 'websocket', or an RTCPeerConnection instance controlling how the connection is created in `connect`.
   * @param {Object} [options.transportOptions={}] - The options to use when creating a connection. Currently only used if `transportLibrary` is RTCPeerConnection.
   */
  constructor(r) {
    super();
    /** @type {WebSocket | import("ws").WebSocket | null} */
    y(this, "socket", null);
    y(this, "idCounter", 0);
    y(this, "isConnected", !1);
    y(this, "groovyCompatibility", !0);
    r = r || {}, this.transportLibrary = r.transportLibrary || "websocket", this.transportOptions = r.transportOptions || {}, this.groovyCompatibility = r.groovyCompatibility ?? !0, r.url && this.connect(r.url);
  }
  /**
   * Connect to the specified WebSocket.
   *
   * @param {string} url - WebSocket URL or RTCDataChannel label for rosbridge.
   */
  connect(r) {
    if (this.transportLibrary.constructor.name === "RTCPeerConnection")
      this.socket = Object.assign(
        // @ts-expect-error -- this is kinda wild. `this.transportLibrary` can either be a string or an RTCDataChannel. This needs fixing.
        this.transportLibrary.createDataChannel(r, this.transportOptions),
        qe(this)
      );
    else if (this.transportLibrary === "websocket")
      if (typeof window < "u") {
        if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
          const u = new WebSocket(r);
          u.binaryType = "arraybuffer", this.socket = Object.assign(u, qe(this));
        }
      } else
        import("ws").then((u) => {
          if (!this.socket || this.socket.readyState === u.WebSocket.CLOSED) {
            const i = new u.WebSocket(r);
            i.binaryType = "arraybuffer", this.socket = Object.assign(i, qe(this));
          }
        });
    else
      throw "Unknown transportLibrary: " + this.transportLibrary.toString();
  }
  /**
   * Disconnect from the WebSocket server.
   */
  close() {
    this.socket && this.socket.close();
  }
  /**
   * Send an authorization request to the server.
   *
   * @param {string} mac - MAC (hash) string given by the trusted source.
   * @param {string} client - IP of the client.
   * @param {string} dest - IP of the destination.
   * @param {string} rand - Random string given by the trusted source.
   * @param {Object} t - Time of the authorization request.
   * @param {string} level - User level as a string given by the client.
   * @param {Object} end - End time of the client's session.
   */
  authenticate(r, u, i, s, n, a, o) {
    var c = {
      op: "auth",
      mac: r,
      client: u,
      dest: i,
      rand: s,
      t: n,
      level: a,
      end: o
    };
    this.callOnConnection(c);
  }
  /**
   * Send an encoded message over the WebSocket.
   *
   * @param {Object} messageEncoded - The encoded message to be sent.
   */
  sendEncodedMessage(r) {
    this.isConnected ? this.socket !== null && this.socket.send(r) : this.once("connection", () => {
      this.socket !== null && this.socket.send(r);
    });
  }
  /**
   * Send the message over the WebSocket, but queue the message up if not yet
   * connected.
   *
   * @param {Object} message - The message to be sent.
   */
  callOnConnection(r) {
    this.transportOptions.encoder ? this.transportOptions.encoder(r, this.sendEncodedMessage) : this.sendEncodedMessage(JSON.stringify(r));
  }
  /**
   * Send a set_level request to the server.
   *
   * @param {string} level - Status level (none, error, warning, info).
   * @param {number} [id] - Operation ID to change status level on.
   */
  setStatusLevel(r, u) {
    var i = {
      op: "set_level",
      level: r,
      id: u
    };
    this.callOnConnection(i);
  }
  /**
   * @callback getActionServersCallback
   * @param {string[]} actionservers - Array of action server names.
   */
  /**
   * @callback getActionServersFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of action servers in ROS as an array of string.
   *
   * @param {getActionServersCallback} callback - Function with the following params:
   * @param {getActionServersFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getActionServers(r, u) {
    var i = new S({
      ros: this,
      name: "/rosapi/action_servers",
      serviceType: "rosapi/GetActionServers"
    }), s = {};
    typeof u == "function" ? i.callService(
      s,
      function(n) {
        r(n.action_servers);
      },
      function(n) {
        u(n);
      }
    ) : i.callService(s, function(n) {
      r(n.action_servers);
    });
  }
  /**
   * @callback getTopicsCallback
   * @param {Object} result - The result object with the following params:
   * @param {string[]} result.topics - Array of topic names.
   * @param {string[]} result.types - Array of message type names.
   */
  /**
   * @callback getTopicsFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of topics in ROS as an array.
   *
   * @param {getTopicsCallback} callback - Function with the following params:
   * @param {getTopicsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getTopics(r, u) {
    var i = new S({
      ros: this,
      name: "/rosapi/topics",
      serviceType: "rosapi/Topics"
    }), s = {};
    typeof u == "function" ? i.callService(
      s,
      function(n) {
        r(n);
      },
      function(n) {
        u(n);
      }
    ) : i.callService(s, function(n) {
      r(n);
    });
  }
  /**
   * @callback getTopicsForTypeCallback
   * @param {string[]} topics - Array of topic names.
   */
  /**
   * @callback getTopicsForTypeFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of topics in ROS as an array of a specific type.
   *
   * @param {string} topicType - The topic type to find.
   * @param {getTopicsForTypeCallback} callback - Function with the following params:
   * @param {getTopicsForTypeFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getTopicsForType(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/topics_for_type",
      serviceType: "rosapi/TopicsForType"
    }), n = {
      type: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a.topics);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a.topics);
    });
  }
  /**
   * @callback getServicesCallback
   * @param {string[]} services - Array of service names.
   */
  /**
   * @callback getServicesFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of active service names in ROS.
   *
   * @param {getServicesCallback} callback - Function with the following params:
   * @param {getServicesFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getServices(r, u) {
    var i = new S({
      ros: this,
      name: "/rosapi/services",
      serviceType: "rosapi/Services"
    }), s = {};
    typeof u == "function" ? i.callService(
      s,
      function(n) {
        r(n.services);
      },
      function(n) {
        u(n);
      }
    ) : i.callService(s, function(n) {
      r(n.services);
    });
  }
  /**
   * @callback getServicesForTypeCallback
   * @param {string[]} topics - Array of service names.
   */
  /**
   * @callback getServicesForTypeFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of services in ROS as an array as specific type.
   *
   * @param {string} serviceType - The service type to find.
   * @param {getServicesForTypeCallback} callback - Function with the following params:
   * @param {getServicesForTypeFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getServicesForType(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/services_for_type",
      serviceType: "rosapi/ServicesForType"
    }), n = {
      type: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a.services);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a.services);
    });
  }
  /**
   * @callback getServiceRequestDetailsCallback
   * @param {Object} result - The result object with the following params:
   * @param {string[]} result.typedefs - An array containing the details of the service request.
   */
  /**
   * @callback getServiceRequestDetailsFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve the details of a ROS service request.
   *
   * @param {string} type - The type of the service.
   * @param {getServiceRequestDetailsCallback} callback - Function with the following params:
   * @param {getServiceRequestDetailsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getServiceRequestDetails(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/service_request_details",
      serviceType: "rosapi/ServiceRequestDetails"
    }), n = {
      type: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a);
    });
  }
  /**
   * @callback getServiceResponseDetailsCallback
   * @param {{typedefs: string[]}} result - The result object with the following params:
   */
  /**
   * @callback getServiceResponseDetailsFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve the details of a ROS service response.
   *
   * @param {string} type - The type of the service.
   * @param {getServiceResponseDetailsCallback} callback - Function with the following params:
   * @param {getServiceResponseDetailsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getServiceResponseDetails(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/service_response_details",
      serviceType: "rosapi/ServiceResponseDetails"
    }), n = {
      type: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a);
    });
  }
  /**
   * @callback getNodesCallback
   * @param {string[]} nodes - Array of node names.
   */
  /**
   * @callback getNodesFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of active node names in ROS.
   *
   * @param {getNodesCallback} callback - Function with the following params:
   * @param {getNodesFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getNodes(r, u) {
    var i = new S({
      ros: this,
      name: "/rosapi/nodes",
      serviceType: "rosapi/Nodes"
    }), s = {};
    typeof u == "function" ? i.callService(
      s,
      function(n) {
        r(n.nodes);
      },
      function(n) {
        u(n);
      }
    ) : i.callService(s, function(n) {
      r(n.nodes);
    });
  }
  /**
   * @callback getNodeDetailsCallback
   * @param {string[]} subscriptions - Array of subscribed topic names.
   * @param {string[]} publications - Array of published topic names.
   * @param {string[]} services - Array of service names hosted.
   */
  /**
   * @callback getNodeDetailsFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * @callback getNodeDetailsLegacyCallback
   * @param {Object} result - The result object with the following params:
   * @param {string[]} result.subscribing - Array of subscribed topic names.
   * @param {string[]} result.publishing - Array of published topic names.
   * @param {string[]} result.services - Array of service names hosted.
   */
  /**
   * Retrieve a list of subscribed topics, publishing topics and services of a specific node.
   * <br>
   * These are the parameters if failedCallback is <strong>defined</strong>.
   *
   * @param {string} node - Name of the node.
   * @param {getNodeDetailsCallback} callback - Function with the following params:
   * @param {getNodeDetailsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   *
   * @also
   *
   * Retrieve a list of subscribed topics, publishing topics and services of a specific node.
   * <br>
   * These are the parameters if failedCallback is <strong>undefined</strong>.
   *
   * @param {string} node - Name of the node.
   * @param {getNodeDetailsLegacyCallback} callback - Function with the following params:
   * @param {getNodeDetailsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getNodeDetails(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/node_details",
      serviceType: "rosapi/NodeDetails"
    }), n = {
      node: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a.subscribing, a.publishing, a.services);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a);
    });
  }
  /**
   * @callback getParamsCallback
   * @param {string[]} params - Array of param names.
   */
  /**
   * @callback getParamsFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of parameter names from the ROS Parameter Server.
   *
   * @param {getParamsCallback} callback - Function with the following params:
   * @param {getParamsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getParams(r, u) {
    var i = new S({
      ros: this,
      name: "/rosapi/get_param_names",
      serviceType: "rosapi/GetParamNames"
    }), s = {};
    typeof u == "function" ? i.callService(
      s,
      function(n) {
        r(n.names);
      },
      function(n) {
        u(n);
      }
    ) : i.callService(s, function(n) {
      r(n.names);
    });
  }
  /**
   * @callback getTopicTypeCallback
   * @param {string} type - The type of the topic.
   */
  /**
   * @callback getTopicTypeFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve the type of a ROS topic.
   *
   * @param {string} topic - Name of the topic.
   * @param {getTopicTypeCallback} callback - Function with the following params:
   * @param {getTopicTypeFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getTopicType(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/topic_type",
      serviceType: "rosapi/TopicType"
    }), n = {
      topic: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a.type);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a.type);
    });
  }
  /**
   * @callback getServiceTypeCallback
   * @param {string} type - The type of the service.
   */
  /**
   * @callback getServiceTypeFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve the type of a ROS service.
   *
   * @param {string} service - Name of the service.
   * @param {getServiceTypeCallback} callback - Function with the following params:
   * @param {getServiceTypeFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getServiceType(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/service_type",
      serviceType: "rosapi/ServiceType"
    }), n = {
      service: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a.type);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a.type);
    });
  }
  /**
   * @callback getMessageDetailsCallback
   * @param {string} details - An array of the message details.
   */
  /**
   * @callback getMessageDetailsFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve the details of a ROS message.
   *
   * @param {string} message - The name of the message type.
   * @param {getMessageDetailsCallback} callback - Function with the following params:
   * @param {getMessageDetailsFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getMessageDetails(r, u, i) {
    var s = new S({
      ros: this,
      name: "/rosapi/message_details",
      serviceType: "rosapi/MessageDetails"
    }), n = {
      type: r
    };
    typeof i == "function" ? s.callService(
      n,
      function(a) {
        u(a.typedefs);
      },
      function(a) {
        i(a);
      }
    ) : s.callService(n, function(a) {
      u(a.typedefs);
    });
  }
  /**
   * Decode a typedef array into a dictionary like `rosmsg show foo/bar`.
   *
   * @param {Object[]} defs - Array of type_def dictionary.
   */
  decodeTypeDefs(r) {
    var u = (i, s) => {
      for (var n = {}, a = 0; a < i.fieldnames.length; a++) {
        var o = i.fieldarraylen[a], c = i.fieldnames[a], l = i.fieldtypes[a];
        if (l.indexOf("/") === -1)
          o === -1 ? n[c] = l : n[c] = [l];
        else {
          for (var d = !1, m = 0; m < s.length; m++)
            if (s[m].type.toString() === l.toString()) {
              d = s[m];
              break;
            }
          if (d) {
            var f = u(d, s);
            o === -1 ? n[c] = f : n[c] = [f];
          } else
            this.emit(
              "error",
              "Cannot find " + l + " in decodeTypeDefs"
            );
        }
      }
      return n;
    };
    return u(r[0], r);
  }
  /**
   * @callback getTopicsAndRawTypesCallback
   * @param {Object} result - The result object with the following params:
   * @param {string[]} result.topics - Array of topic names.
   * @param {string[]} result.types - Array of message type names.
   * @param {string[]} result.typedefs_full_text - Array of full definitions of message types, similar to `gendeps --cat`.
   */
  /**
   * @callback getTopicsAndRawTypesFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Retrieve a list of topics and their associated type definitions.
   *
   * @param {getTopicsAndRawTypesCallback} callback - Function with the following params:
   * @param {getTopicsAndRawTypesFailedCallback} [failedCallback] - The callback function when the service call failed with params:
   */
  getTopicsAndRawTypes(r, u) {
    var i = new S({
      ros: this,
      name: "/rosapi/topics_and_raw_types",
      serviceType: "rosapi/TopicsAndRawTypes"
    }), s = {};
    typeof u == "function" ? i.callService(
      s,
      function(n) {
        r(n);
      },
      function(n) {
        u(n);
      }
    ) : i.callService(s, function(n) {
      r(n);
    });
  }
  Topic(r) {
    return new L({ ros: this, ...r });
  }
  Param(r) {
    return new wt({ ros: this, ...r });
  }
  Service(r) {
    return new S({ ros: this, ...r });
  }
  TFClient(r) {
    return new Tt({ ros: this, ...r });
  }
  ActionClient(r) {
    return new Ge({ ros: this, ...r });
  }
  SimpleActionServer(r) {
    return new Nt({ ros: this, ...r });
  }
}
class Bt extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.name - The action name, like '/fibonacci'.
   * @param {string} options.actionType - The action type, like 'action_tutorials_interfaces/Fibonacci'.
   */
  constructor(r) {
    super();
    y(this, "isAdvertised", !1);
    /**
     * @callback advertiseActionCallback
     * @param {TGoal} goal - The action goal.
     * @param {string} id - The ID of the action goal to execute.
     */
    /**
     * @private
     * @type {advertiseActionCallback | null}
     */
    y(this, "_actionCallback", null);
    /**
     * @callback advertiseCancelCallback
     * @param {string} id - The ID of the action goal to cancel.
     */
    /**
     * @private
     * @type {advertiseCancelCallback | null}
     */
    y(this, "_cancelCallback", null);
    this.ros = r.ros, this.name = r.name, this.actionType = r.actionType;
  }
  /**
   * @callback sendGoalResultCallback
   * @param {TResult} result - The result from the action.
   */
  /**
   * @callback sendGoalFeedbackCallback
   * @param {TFeedback} feedback - The feedback from the action.
   */
  /**
   * @callback sendGoalFailedCallback
   * @param {string} error - The error message reported by ROS.
   */
  /**
   * Sends an action goal. Returns the feedback in the feedback callback while the action is running
   * and the result in the result callback when the action is completed.
   * Does nothing if this action is currently advertised.
   *
   * @param {TGoal} goal - The action goal to send.
   * @param {sendGoalResultCallback} resultCallback - The callback function when the action is completed.
   * @param {sendGoalFeedbackCallback} [feedbackCallback] - The callback function when the action pulishes feedback.
   * @param {sendGoalFailedCallback} [failedCallback] - The callback function when the action failed.
   */
  sendGoal(r, u, i, s) {
    if (!this.isAdvertised) {
      var n = "send_action_goal:" + this.name + ":" + ++this.ros.idCounter;
      (u || s) && this.ros.on(n, function(o) {
        o.result !== void 0 && o.result === !1 ? typeof s == "function" && s(o.values) : o.op === "action_feedback" && typeof i == "function" ? i(o.values) : o.op === "action_result" && typeof u == "function" && u(o.values);
      });
      var a = {
        op: "send_action_goal",
        id: n,
        action: this.name,
        action_type: this.actionType,
        args: r,
        feedback: !0
      };
      return this.ros.callOnConnection(a), n;
    }
  }
  /**
   * Cancels an action goal.
   *
   * @param {string} id - The ID of the action goal to cancel.
   */
  cancelGoal(r) {
    var u = {
      op: "cancel_action_goal",
      id: r,
      action: this.name
    };
    this.ros.callOnConnection(u);
  }
  /**
   * Advertise the action. This turns the Action object from a client
   * into a server. The callback will be called with every goal sent to this action.
   *
   * @param {advertiseActionCallback} actionCallback - This works similarly to the callback for a C++ action.
   * @param {advertiseCancelCallback} cancelCallback - A callback function to execute when the action is canceled.
   */
  advertise(r, u) {
    this.isAdvertised || typeof r != "function" || (this._actionCallback = r, this._cancelCallback = u, this.ros.on(this.name, this._executeAction.bind(this)), this.ros.callOnConnection({
      op: "advertise_action",
      type: this.actionType,
      action: this.name
    }), this.isAdvertised = !0);
  }
  /**
   * Unadvertise a previously advertised action.
   */
  unadvertise() {
    this.isAdvertised && (this.ros.callOnConnection({
      op: "unadvertise_action",
      action: this.name
    }), this.isAdvertised = !1);
  }
  /**
   * Helper function that executes an action by calling the provided
   * action callback with the auto-generated ID as a user-accessible input.
   * Should not be called manually.
   *
   * @param {Object} rosbridgeRequest - The rosbridge request containing the action goal to send and its ID.
   * @param {string} rosbridgeRequest.id - The ID of the action goal.
   * @param {TGoal} rosbridgeRequest.args - The arguments of the action goal.
   */
  _executeAction(r) {
    var u = r.id;
    typeof u == "string" && this.ros.on(u, (i) => {
      i.op === "cancel_action_goal" && typeof this._cancelCallback == "function" && this._cancelCallback(u);
    }), typeof this._actionCallback == "function" && this._actionCallback(r.args, u);
  }
  /**
   * Helper function to send action feedback inside an action handler.
   *
   * @param {string} id - The action goal ID.
   * @param {TFeedback} feedback - The feedback to send.
   */
  sendFeedback(r, u) {
    var i = {
      op: "action_feedback",
      id: r,
      action: this.name,
      values: u
    };
    this.ros.callOnConnection(i);
  }
  /**
   * Helper function to set an action as succeeded.
   *
   * @param {string} id - The action goal ID.
   * @param {TResult} result - The result to set.
   */
  setSucceeded(r, u) {
    var i = {
      op: "action_result",
      id: r,
      action: this.name,
      values: u,
      result: !0
    };
    this.ros.callOnConnection(i);
  }
  /**
   * Helper function to set an action as failed.
   *
   * @param {string} id - The action goal ID.
   */
  setFailed(r) {
    var u = {
      op: "action_result",
      id: r,
      action: this.name,
      result: !1
    };
    this.ros.callOnConnection(u);
  }
}
const Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Bt,
  Param: wt,
  Ros: Tr,
  Service: S,
  Topic: L
}, Symbol.toStringTag, { value: "Module" }));
class Br extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} options.serverName - The action server name, like '/fibonacci'.
   * @param {string} options.actionName - The action message name, like 'actionlib_tutorials/FibonacciAction'.
   */
  constructor(e) {
    super(), this.ros = e.ros, this.serverName = e.serverName, this.actionName = e.actionName;
    var r = new L({
      ros: this.ros,
      name: this.serverName + "/goal",
      messageType: this.actionName + "Goal"
    }), u = new L({
      ros: this.ros,
      name: this.serverName + "/feedback",
      messageType: this.actionName + "Feedback"
    }), i = new L({
      ros: this.ros,
      name: this.serverName + "/status",
      messageType: "actionlib_msgs/GoalStatusArray"
    }), s = new L({
      ros: this.ros,
      name: this.serverName + "/result",
      messageType: this.actionName + "Result"
    });
    r.subscribe((n) => {
      this.emit("goal", n);
    }), i.subscribe((n) => {
      n.status_list.forEach((a) => {
        this.emit("status", a);
      });
    }), u.subscribe((n) => {
      this.emit("status", n.status), this.emit("feedback", n.feedback);
    }), s.subscribe((n) => {
      this.emit("status", n.status), this.emit("result", n.result);
    });
  }
}
const xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionClient: Ge,
  ActionListener: Br,
  Goal: Ct,
  SimpleActionServer: Nt
}, Symbol.toStringTag, { value: "Module" }));
class ue {
  /**
   * @param {Object} [options]
   * @param {Vector3} [options.position] - The ROSLIB.Vector3 describing the position.
   * @param {Quaternion} [options.orientation] - The ROSLIB.Quaternion describing the orientation.
   */
  constructor(e) {
    e = e || {}, e = e || {}, this.position = new H(e.position), this.orientation = new Q(e.orientation);
  }
  /**
   * Apply a transform against this pose.
   *
   * @param {Transform} tf - The transform to be applied.
   */
  applyTransform(e) {
    this.position.multiplyQuaternion(e.rotation), this.position.add(e.translation);
    var r = e.rotation.clone();
    r.multiply(this.orientation), this.orientation = r;
  }
  /**
   * Clone a copy of this pose.
   *
   * @returns {Pose} The cloned pose.
   */
  clone() {
    return new ue(this);
  }
  /**
   * Multiply this pose with another pose without altering this pose.
   *
   * @returns {Pose} The result of the multiplication.
   */
  multiply(e) {
    var r = e.clone();
    return r.applyTransform({
      rotation: this.orientation,
      translation: this.position
    }), r;
  }
  /**
   * Compute the inverse of this pose.
   *
   * @returns {Pose} The inverse of the pose.
   */
  getInverse() {
    var e = this.clone();
    return e.orientation.invert(), e.position.multiplyQuaternion(e.orientation), e.position.x *= -1, e.position.y *= -1, e.position.z *= -1, e;
  }
}
const _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pose: ue,
  Quaternion: Q,
  Transform: be,
  Vector3: H
}, Symbol.toStringTag, { value: "Module" }));
class Fr extends W {
  /**
   * @param {Object} options
   * @param {Ros} options.ros - The ROSLIB.Ros connection handle.
   * @param {string} [options.fixedFrame=base_link] - The fixed frame.
   * @param {number} [options.angularThres=2.0] - The angular threshold for the TF republisher.
   * @param {number} [options.transThres=0.01] - The translation threshold for the TF republisher.
   * @param {number} [options.rate=10.0] - The rate for the TF republisher.
   * @param {number} [options.updateDelay=50] - The time (in ms) to wait after a new subscription
   *     to update the TF republisher's list of TFs.
   * @param {number} [options.topicTimeout=2.0] - The timeout parameter for the TF republisher.
   * @param {string} [options.serverName="/tf2_web_republisher"] - The name of the tf2_web_republisher server.
   * @param {string} [options.repubServiceName="/republish_tfs"] - The name of the republish_tfs service (non groovy compatibility mode only).
   */
  constructor(e) {
    super(), this.ros = e.ros, this.fixedFrame = e.fixedFrame || "base_link", this.angularThres = e.angularThres || 2, this.transThres = e.transThres || 0.01, this.rate = e.rate || 10, this.updateDelay = e.updateDelay || 50;
    const r = e.topicTimeout || 2, u = Math.floor(r), i = Math.floor((r - u) * 1e9);
    this.topicTimeout = {
      secs: u,
      nsecs: i
    }, this.serverName = e.serverName || "/tf2_web_republisher", this.goal_id = "", this.frameInfos = {}, this.republisherUpdateRequested = !1, this._subscribeCB = void 0, this._isDisposed = !1, this.actionClient = new Bt({
      ros: e.ros,
      name: this.serverName,
      actionType: "tf2_web_republisher_msgs/TFSubscription"
    });
  }
  /**
   * Process the incoming TF message and send them out using the callback
   * functions.
   *
   * @param {Object} tf - The TF message from the server.
   */
  processTFArray(e) {
    let r = this;
    e.transforms.forEach(function(u) {
      let i = u.child_frame_id;
      i[0] === "/" && (i = i.substring(1));
      const s = r.frameInfos[i];
      s && (s.transform = new be({
        translation: u.transform.translation,
        rotation: u.transform.rotation
      }), s.cbs.forEach(function(n) {
        n(s.transform);
      }));
    }, this);
  }
  /**
   * Create and send a new goal (or service request) to the tf2_web_republisher
   * based on the current list of TFs.
   */
  updateGoal() {
    const e = {
      source_frames: Object.keys(this.frameInfos),
      target_frame: this.fixedFrame,
      angular_thres: this.angularThres,
      trans_thres: this.transThres,
      rate: this.rate
    };
    this.goal_id !== "" && this.actionClient.cancelGoal(this.goal_id), this.currentGoal = e;
    const r = this.actionClient.sendGoal(
      e,
      (u) => {
      },
      (u) => {
        this.processTFArray(u);
      }
    );
    typeof r == "string" && (this.goal_id = r), this.republisherUpdateRequested = !1;
  }
  /**
   * @callback subscribeCallback
   * @param {Transform} callback.transform - The transform data.
   */
  /**
   * Subscribe to the given TF frame.
   *
   * @param {string} frameID - The TF frame to subscribe to.
   * @param {subscribeCallback} callback - Function with the following params:
   */
  subscribe(e, r) {
    e[0] === "/" && (e = e.substring(1)), this.frameInfos[e] ? this.frameInfos[e].transform && r(this.frameInfos[e].transform) : (this.frameInfos[e] = {
      cbs: []
    }, this.republisherUpdateRequested || (setTimeout(this.updateGoal.bind(this), this.updateDelay), this.republisherUpdateRequested = !0)), this.frameInfos[e].cbs.push(r);
  }
  /**
   * Unsubscribe from the given TF frame.
   *
   * @param {string} frameID - The TF frame to unsubscribe from.
   * @param {function} callback - The callback function to remove.
   */
  unsubscribe(e, r) {
    e[0] === "/" && (e = e.substring(1));
    const u = this.frameInfos[e];
    for (var i = u && u.cbs || [], s = i.length; s--; )
      i[s] === r && i.splice(s, 1);
    (!r || i.length === 0) && delete this.frameInfos[e];
  }
  /**
   * Unsubscribe and unadvertise all topics associated with this TFClient.
   */
  dispose() {
    this._isDisposed = !0;
  }
}
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ROS2TFClient: Fr,
  TFClient: Tt
}, Symbol.toStringTag, { value: "Module" })), xt = 0, _t = 1, Ft = 2, St = 3;
class Ot {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    /** @type {Vector3 | null} */
    y(this, "dimension");
    var u;
    this.type = _t;
    var r = (u = e.xml.getAttribute("size")) == null ? void 0 : u.split(" ");
    r ? this.dimension = new H({
      x: parseFloat(r[0]),
      y: parseFloat(r[1]),
      z: parseFloat(r[2])
    }) : this.dimension = null;
  }
}
class Rt {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    var u;
    var r = (u = e.xml.getAttribute("rgba")) == null ? void 0 : u.split(" ");
    r && (this.r = parseFloat(r[0]), this.g = parseFloat(r[1]), this.b = parseFloat(r[2]), this.a = parseFloat(r[3]));
  }
}
class Lt {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    this.type = Ft, this.length = parseFloat(e.xml.getAttribute("length")), this.radius = parseFloat(e.xml.getAttribute("radius"));
  }
}
class ze {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    /** @type {string | null} */
    y(this, "textureFilename", null);
    /** @type {UrdfColor | null} */
    y(this, "color", null);
    this.name = e.xml.getAttribute("name");
    var r = e.xml.getElementsByTagName("texture");
    r.length > 0 && (this.textureFilename = r[0].getAttribute("filename"));
    var u = e.xml.getElementsByTagName("color");
    u.length > 0 && (this.color = new Rt({
      xml: u[0]
    }));
  }
  isLink() {
    return this.color === null && this.textureFilename === null;
  }
  assign(e) {
    return Object.assign(this, e);
  }
}
class qt {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    /** @type {Vector3 | null} */
    y(this, "scale", null);
    this.type = St, this.filename = e.xml.getAttribute("filename");
    var r = e.xml.getAttribute("scale");
    if (r) {
      var u = r.split(" ");
      this.scale = new H({
        x: parseFloat(u[0]),
        y: parseFloat(u[1]),
        z: parseFloat(u[2])
      });
    }
  }
}
class Mt {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    this.type = xt, this.radius = parseFloat(e.xml.getAttribute("radius") || "NaN");
  }
}
class It {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    /** @type {Pose | null} */
    y(this, "origin", null);
    /** @type {UrdfMesh | UrdfSphere | UrdfBox | UrdfCylinder | null} */
    y(this, "geometry", null);
    /** @type {UrdfMaterial | null} */
    y(this, "material", null);
    var r = e.xml;
    this.name = e.xml.getAttribute("name");
    var u = r.getElementsByTagName("origin");
    if (u.length === 0)
      this.origin = new ue();
    else {
      var i = u[0].getAttribute("xyz"), s = new H();
      if (i) {
        var n = i.split(" ");
        s = new H({
          x: parseFloat(n[0]),
          y: parseFloat(n[1]),
          z: parseFloat(n[2])
        });
      }
      var a = u[0].getAttribute("rpy"), o = new Q();
      if (a) {
        var c = a.split(" "), l = parseFloat(c[0]), d = parseFloat(c[1]), m = parseFloat(c[2]), f = l / 2, E = d / 2, D = m / 2, C = Math.sin(f) * Math.cos(E) * Math.cos(D) - Math.cos(f) * Math.sin(E) * Math.sin(D), A = Math.cos(f) * Math.sin(E) * Math.cos(D) + Math.sin(f) * Math.cos(E) * Math.sin(D), M = Math.cos(f) * Math.cos(E) * Math.sin(D) - Math.sin(f) * Math.sin(E) * Math.cos(D), T = Math.cos(f) * Math.cos(E) * Math.cos(D) + Math.sin(f) * Math.sin(E) * Math.sin(D);
        o = new Q({
          x: C,
          y: A,
          z: M,
          w: T
        }), o.normalize();
      }
      this.origin = new ue({
        position: s,
        orientation: o
      });
    }
    var _ = r.getElementsByTagName("geometry");
    if (_.length > 0) {
      for (var I = _[0], O = null, z = 0; z < I.childNodes.length; z++) {
        var V = I.childNodes[z];
        if (V.nodeType === 1) {
          O = V;
          break;
        }
      }
      if (O) {
        var B = O.nodeName;
        B === "sphere" ? this.geometry = new Mt({
          xml: O
        }) : B === "box" ? this.geometry = new Ot({
          xml: O
        }) : B === "cylinder" ? this.geometry = new Lt({
          xml: O
        }) : B === "mesh" ? this.geometry = new qt({
          xml: O
        }) : console.warn("Unknown geometry type " + B);
      }
    }
    var U = r.getElementsByTagName("material");
    U.length > 0 && (this.material = new ze({
      xml: U[0]
    }));
  }
}
class Ut {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    this.name = e.xml.getAttribute("name"), this.visuals = [];
    for (var r = e.xml.getElementsByTagName("visual"), u = 0; u < r.length; u++)
      this.visuals.push(
        new It({
          xml: r[u]
        })
      );
  }
}
class Or {
  /**
   * @param {Object} options
   * @param {Element} options.xml - The XML element to parse.
   */
  constructor(e) {
    this.name = e.xml.getAttribute("name"), this.type = e.xml.getAttribute("type");
    var r = e.xml.getElementsByTagName("parent");
    r.length > 0 && (this.parent = r[0].getAttribute("link"));
    var u = e.xml.getElementsByTagName("child");
    u.length > 0 && (this.child = u[0].getAttribute("link"));
    var i = e.xml.getElementsByTagName("limit");
    i.length > 0 && (this.minval = parseFloat(i[0].getAttribute("lower") || "NaN"), this.maxval = parseFloat(i[0].getAttribute("upper") || "NaN"));
    var s = e.xml.getElementsByTagName("origin");
    if (s.length === 0)
      this.origin = new ue();
    else {
      var n = s[0].getAttribute("xyz"), a = new H();
      if (n) {
        var o = n.split(" ");
        a = new H({
          x: parseFloat(o[0]),
          y: parseFloat(o[1]),
          z: parseFloat(o[2])
        });
      }
      var c = s[0].getAttribute("rpy"), l = new Q();
      if (c) {
        var d = c.split(" "), m = parseFloat(d[0]), f = parseFloat(d[1]), E = parseFloat(d[2]), D = m / 2, C = f / 2, A = E / 2, M = Math.sin(D) * Math.cos(C) * Math.cos(A) - Math.cos(D) * Math.sin(C) * Math.sin(A), T = Math.cos(D) * Math.sin(C) * Math.cos(A) + Math.sin(D) * Math.cos(C) * Math.sin(A), _ = Math.cos(D) * Math.cos(C) * Math.sin(A) - Math.sin(D) * Math.sin(C) * Math.cos(A), I = Math.cos(D) * Math.cos(C) * Math.cos(A) + Math.sin(D) * Math.sin(C) * Math.sin(A);
        l = new Q({
          x: M,
          y: T,
          z: _,
          w: I
        }), l.normalize();
      }
      this.origin = new ue({
        position: a,
        orientation: l
      });
    }
  }
}
var re = {}, ee = {};
function Rr(t, e, r) {
  if (r === void 0 && (r = Array.prototype), t && typeof r.find == "function")
    return r.find.call(t, e);
  for (var u = 0; u < t.length; u++)
    if (Object.prototype.hasOwnProperty.call(t, u)) {
      var i = t[u];
      if (e.call(void 0, i, u, t))
        return i;
    }
}
function Ve(t, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(t) : t;
}
function Lr(t, e) {
  if (t === null || typeof t != "object")
    throw new TypeError("target is not an object");
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t;
}
var kt = Ve({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(t) {
    return t === kt.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), Pt = Ve({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(t) {
    return t === Pt.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
ee.assign = Lr;
ee.find = Rr;
ee.freeze = Ve;
ee.MIME_TYPE = kt;
ee.NAMESPACE = Pt;
var Gt = ee, X = Gt.find, De = Gt.NAMESPACE;
function qr(t) {
  return t !== "";
}
function Mr(t) {
  return t ? t.split(/[\t\n\f\r ]+/).filter(qr) : [];
}
function Ir(t, e) {
  return t.hasOwnProperty(e) || (t[e] = !0), t;
}
function nt(t) {
  if (!t) return [];
  var e = Mr(t);
  return Object.keys(e.reduce(Ir, {}));
}
function Ur(t) {
  return function(e) {
    return t && t.indexOf(e) !== -1;
  };
}
function Ee(t, e) {
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
function P(t, e) {
  var r = t.prototype;
  if (!(r instanceof e)) {
    let u = function() {
    };
    u.prototype = e.prototype, u = new u(), Ee(r, u), t.prototype = r = u;
  }
  r.constructor != t && (typeof t != "function" && console.error("unknown Class:" + t), r.constructor = t);
}
var G = {}, j = G.ELEMENT_NODE = 1, le = G.ATTRIBUTE_NODE = 2, Be = G.TEXT_NODE = 3, zt = G.CDATA_SECTION_NODE = 4, Vt = G.ENTITY_REFERENCE_NODE = 5, kr = G.ENTITY_NODE = 6, jt = G.PROCESSING_INSTRUCTION_NODE = 7, Ht = G.COMMENT_NODE = 8, $t = G.DOCUMENT_NODE = 9, Xt = G.DOCUMENT_TYPE_NODE = 10, Z = G.DOCUMENT_FRAGMENT_NODE = 11, Pr = G.NOTATION_NODE = 12, q = {}, R = {};
q.INDEX_SIZE_ERR = (R[1] = "Index size error", 1);
q.DOMSTRING_SIZE_ERR = (R[2] = "DOMString size error", 2);
var k = q.HIERARCHY_REQUEST_ERR = (R[3] = "Hierarchy request error", 3);
q.WRONG_DOCUMENT_ERR = (R[4] = "Wrong document", 4);
q.INVALID_CHARACTER_ERR = (R[5] = "Invalid character", 5);
q.NO_DATA_ALLOWED_ERR = (R[6] = "No data allowed", 6);
q.NO_MODIFICATION_ALLOWED_ERR = (R[7] = "No modification allowed", 7);
var Yt = q.NOT_FOUND_ERR = (R[8] = "Not found", 8);
q.NOT_SUPPORTED_ERR = (R[9] = "Not supported", 9);
var at = q.INUSE_ATTRIBUTE_ERR = (R[10] = "Attribute in use", 10);
q.INVALID_STATE_ERR = (R[11] = "Invalid state", 11);
q.SYNTAX_ERR = (R[12] = "Syntax error", 12);
q.INVALID_MODIFICATION_ERR = (R[13] = "Invalid modification", 13);
q.NAMESPACE_ERR = (R[14] = "Invalid namespace", 14);
q.INVALID_ACCESS_ERR = (R[15] = "Invalid access", 15);
function F(t, e) {
  if (e instanceof Error)
    var r = e;
  else
    r = this, Error.call(this, R[t]), this.message = R[t], Error.captureStackTrace && Error.captureStackTrace(this, F);
  return r.code = t, e && (this.message = this.message + ": " + e), r;
}
F.prototype = Error.prototype;
Ee(q, F);
function J() {
}
J.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(t) {
    return t >= 0 && t < this.length ? this[t] : null;
  },
  toString: function(t, e) {
    for (var r = [], u = 0; u < this.length; u++)
      ce(this[u], r, t, e);
    return r.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(t) {
    return Array.prototype.filter.call(this, t);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(t) {
    return Array.prototype.indexOf.call(this, t);
  }
};
function he(t, e) {
  this._node = t, this._refresh = e, je(this);
}
function je(t) {
  var e = t._node._inc || t._node.ownerDocument._inc;
  if (t._inc !== e) {
    var r = t._refresh(t._node);
    if (nr(t, "length", r.length), !t.$$length || r.length < t.$$length)
      for (var u = r.length; u in t; u++)
        Object.prototype.hasOwnProperty.call(t, u) && delete t[u];
    Ee(r, t), t._inc = e;
  }
}
he.prototype.item = function(t) {
  return je(this), this[t] || null;
};
P(he, J);
function xe() {
}
function Wt(t, e) {
  for (var r = t.length; r--; )
    if (t[r] === e)
      return r;
}
function ot(t, e, r, u) {
  if (u ? e[Wt(e, u)] = r : e[e.length++] = r, t) {
    r.ownerElement = t;
    var i = t.ownerDocument;
    i && (u && Zt(i, t, u), Gr(i, t, r));
  }
}
function ct(t, e, r) {
  var u = Wt(e, r);
  if (u >= 0) {
    for (var i = e.length - 1; u < i; )
      e[u] = e[++u];
    if (e.length = i, t) {
      var s = t.ownerDocument;
      s && (Zt(s, t, r), r.ownerElement = null);
    }
  } else
    throw new F(Yt, new Error(t.tagName + "@" + r));
}
xe.prototype = {
  length: 0,
  item: J.prototype.item,
  getNamedItem: function(t) {
    for (var e = this.length; e--; ) {
      var r = this[e];
      if (r.nodeName == t)
        return r;
    }
  },
  setNamedItem: function(t) {
    var e = t.ownerElement;
    if (e && e != this._ownerElement)
      throw new F(at);
    var r = this.getNamedItem(t.nodeName);
    return ot(this._ownerElement, this, t, r), r;
  },
  /* returns Node */
  setNamedItemNS: function(t) {
    var e = t.ownerElement, r;
    if (e && e != this._ownerElement)
      throw new F(at);
    return r = this.getNamedItemNS(t.namespaceURI, t.localName), ot(this._ownerElement, this, t, r), r;
  },
  /* returns Node */
  removeNamedItem: function(t) {
    var e = this.getNamedItem(t);
    return ct(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(t, e) {
    var r = this.getNamedItemNS(t, e);
    return ct(this._ownerElement, this, r), r;
  },
  getNamedItemNS: function(t, e) {
    for (var r = this.length; r--; ) {
      var u = this[r];
      if (u.localName == e && u.namespaceURI == t)
        return u;
    }
    return null;
  }
};
function Jt() {
}
Jt.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(t, e) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(t, e, r) {
    var u = new ye();
    if (u.implementation = this, u.childNodes = new J(), u.doctype = r || null, r && u.appendChild(r), e) {
      var i = u.createElementNS(t, e);
      u.appendChild(i);
    }
    return u;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(t, e, r) {
    var u = new Se();
    return u.name = t, u.nodeName = t, u.publicId = e || "", u.systemId = r || "", u;
  }
};
function N() {
}
N.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(t, e) {
    return _e(this, t, e);
  },
  replaceChild: function(t, e) {
    _e(this, t, e, er), e && this.removeChild(e);
  },
  removeChild: function(t) {
    return Kt(this, t);
  },
  appendChild: function(t) {
    return this.insertBefore(t, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(t) {
    return Ue(this.ownerDocument || this, this, t);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var t = this.firstChild; t; ) {
      var e = t.nextSibling;
      e && e.nodeType == Be && t.nodeType == Be ? (this.removeChild(e), t.appendData(e.data)) : (t.normalize(), t = e);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(t, e) {
    return this.ownerDocument.implementation.hasFeature(t, e);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(t) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r) {
        for (var u in r)
          if (Object.prototype.hasOwnProperty.call(r, u) && r[u] === t)
            return u;
      }
      e = e.nodeType == le ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(t) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r && Object.prototype.hasOwnProperty.call(r, t))
        return r[t];
      e = e.nodeType == le ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(t) {
    var e = this.lookupPrefix(t);
    return e == null;
  }
};
function Qt(t) {
  return t == "<" && "&lt;" || t == ">" && "&gt;" || t == "&" && "&amp;" || t == '"' && "&quot;" || "&#" + t.charCodeAt() + ";";
}
Ee(G, N);
Ee(G, N.prototype);
function ge(t, e) {
  if (e(t))
    return !0;
  if (t = t.firstChild)
    do
      if (ge(t, e))
        return !0;
    while (t = t.nextSibling);
}
function ye() {
  this.ownerDocument = this;
}
function Gr(t, e, r) {
  t && t._inc++;
  var u = r.namespaceURI;
  u === De.XMLNS && (e._nsMap[r.prefix ? r.localName : ""] = r.value);
}
function Zt(t, e, r, u) {
  t && t._inc++;
  var i = r.namespaceURI;
  i === De.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""];
}
function He(t, e, r) {
  if (t && t._inc) {
    t._inc++;
    var u = e.childNodes;
    if (r)
      u[u.length++] = r;
    else {
      for (var i = e.firstChild, s = 0; i; )
        u[s++] = i, i = i.nextSibling;
      u.length = s, delete u[u.length];
    }
  }
}
function Kt(t, e) {
  var r = e.previousSibling, u = e.nextSibling;
  return r ? r.nextSibling = u : t.firstChild = u, u ? u.previousSibling = r : t.lastChild = r, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, He(t.ownerDocument, t), e;
}
function zr(t) {
  return t && (t.nodeType === N.DOCUMENT_NODE || t.nodeType === N.DOCUMENT_FRAGMENT_NODE || t.nodeType === N.ELEMENT_NODE);
}
function Vr(t) {
  return t && (Y(t) || $e(t) || K(t) || t.nodeType === N.DOCUMENT_FRAGMENT_NODE || t.nodeType === N.COMMENT_NODE || t.nodeType === N.PROCESSING_INSTRUCTION_NODE);
}
function K(t) {
  return t && t.nodeType === N.DOCUMENT_TYPE_NODE;
}
function Y(t) {
  return t && t.nodeType === N.ELEMENT_NODE;
}
function $e(t) {
  return t && t.nodeType === N.TEXT_NODE;
}
function lt(t, e) {
  var r = t.childNodes || [];
  if (X(r, Y) || K(e))
    return !1;
  var u = X(r, K);
  return !(e && u && r.indexOf(u) > r.indexOf(e));
}
function ht(t, e) {
  var r = t.childNodes || [];
  function u(s) {
    return Y(s) && s !== e;
  }
  if (X(r, u))
    return !1;
  var i = X(r, K);
  return !(e && i && r.indexOf(i) > r.indexOf(e));
}
function jr(t, e, r) {
  if (!zr(t))
    throw new F(k, "Unexpected parent node type " + t.nodeType);
  if (r && r.parentNode !== t)
    throw new F(Yt, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !Vr(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    K(e) && t.nodeType !== N.DOCUMENT_NODE
  )
    throw new F(
      k,
      "Unexpected node type " + e.nodeType + " for parent node type " + t.nodeType
    );
}
function Hr(t, e, r) {
  var u = t.childNodes || [], i = e.childNodes || [];
  if (e.nodeType === N.DOCUMENT_FRAGMENT_NODE) {
    var s = i.filter(Y);
    if (s.length > 1 || X(i, $e))
      throw new F(k, "More than one element or text in fragment");
    if (s.length === 1 && !lt(t, r))
      throw new F(k, "Element in fragment can not be inserted before doctype");
  }
  if (Y(e) && !lt(t, r))
    throw new F(k, "Only one element can be added and only after doctype");
  if (K(e)) {
    if (X(u, K))
      throw new F(k, "Only one doctype is allowed");
    var n = X(u, Y);
    if (r && u.indexOf(n) < u.indexOf(r))
      throw new F(k, "Doctype can only be inserted before an element");
    if (!r && n)
      throw new F(k, "Doctype can not be appended since element is present");
  }
}
function er(t, e, r) {
  var u = t.childNodes || [], i = e.childNodes || [];
  if (e.nodeType === N.DOCUMENT_FRAGMENT_NODE) {
    var s = i.filter(Y);
    if (s.length > 1 || X(i, $e))
      throw new F(k, "More than one element or text in fragment");
    if (s.length === 1 && !ht(t, r))
      throw new F(k, "Element in fragment can not be inserted before doctype");
  }
  if (Y(e) && !ht(t, r))
    throw new F(k, "Only one element can be added and only after doctype");
  if (K(e)) {
    if (X(u, function(o) {
      return K(o) && o !== r;
    }))
      throw new F(k, "Only one doctype is allowed");
    var n = X(u, Y);
    if (r && u.indexOf(n) < u.indexOf(r))
      throw new F(k, "Doctype can only be inserted before an element");
  }
}
function _e(t, e, r, u) {
  jr(t, e, r), t.nodeType === N.DOCUMENT_NODE && (u || Hr)(t, e, r);
  var i = e.parentNode;
  if (i && i.removeChild(e), e.nodeType === Z) {
    var s = e.firstChild;
    if (s == null)
      return e;
    var n = e.lastChild;
  } else
    s = n = e;
  var a = r ? r.previousSibling : t.lastChild;
  s.previousSibling = a, n.nextSibling = r, a ? a.nextSibling = s : t.firstChild = s, r == null ? t.lastChild = n : r.previousSibling = n;
  do
    s.parentNode = t;
  while (s !== n && (s = s.nextSibling));
  return He(t.ownerDocument || t, t), e.nodeType == Z && (e.firstChild = e.lastChild = null), e;
}
function $r(t, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = t, e.previousSibling = t.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : t.firstChild = e, t.lastChild = e, He(t.ownerDocument, t, e), e;
}
ye.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: $t,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(t, e) {
    if (t.nodeType == Z) {
      for (var r = t.firstChild; r; ) {
        var u = r.nextSibling;
        this.insertBefore(r, e), r = u;
      }
      return t;
    }
    return _e(this, t, e), t.ownerDocument = this, this.documentElement === null && t.nodeType === j && (this.documentElement = t), t;
  },
  removeChild: function(t) {
    return this.documentElement == t && (this.documentElement = null), Kt(this, t);
  },
  replaceChild: function(t, e) {
    _e(this, t, e, er), t.ownerDocument = this, e && this.removeChild(e), Y(t) && (this.documentElement = t);
  },
  // Introduced in DOM Level 2:
  importNode: function(t, e) {
    return sr(this, t, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(t) {
    var e = null;
    return ge(this.documentElement, function(r) {
      if (r.nodeType == j && r.getAttribute("id") == t)
        return e = r, !0;
    }), e;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(t) {
    var e = nt(t);
    return new he(this, function(r) {
      var u = [];
      return e.length > 0 && ge(r.documentElement, function(i) {
        if (i !== r && i.nodeType === j) {
          var s = i.getAttribute("class");
          if (s) {
            var n = t === s;
            if (!n) {
              var a = nt(s);
              n = e.every(Ur(a));
            }
            n && u.push(i);
          }
        }
      }), u;
    });
  },
  //document factory method:
  createElement: function(t) {
    var e = new ie();
    e.ownerDocument = this, e.nodeName = t, e.tagName = t, e.localName = t, e.childNodes = new J();
    var r = e.attributes = new xe();
    return r._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var t = new Oe();
    return t.ownerDocument = this, t.childNodes = new J(), t;
  },
  createTextNode: function(t) {
    var e = new Xe();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createComment: function(t) {
    var e = new Ye();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createCDATASection: function(t) {
    var e = new We();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createProcessingInstruction: function(t, e) {
    var r = new Qe();
    return r.ownerDocument = this, r.tagName = r.nodeName = r.target = t, r.nodeValue = r.data = e, r;
  },
  createAttribute: function(t) {
    var e = new Fe();
    return e.ownerDocument = this, e.name = t, e.nodeName = t, e.localName = t, e.specified = !0, e;
  },
  createEntityReference: function(t) {
    var e = new Je();
    return e.ownerDocument = this, e.nodeName = t, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(t, e) {
    var r = new ie(), u = e.split(":"), i = r.attributes = new xe();
    return r.childNodes = new J(), r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.namespaceURI = t, u.length == 2 ? (r.prefix = u[0], r.localName = u[1]) : r.localName = e, i._ownerElement = r, r;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(t, e) {
    var r = new Fe(), u = e.split(":");
    return r.ownerDocument = this, r.nodeName = e, r.name = e, r.namespaceURI = t, r.specified = !0, u.length == 2 ? (r.prefix = u[0], r.localName = u[1]) : r.localName = e, r;
  }
};
P(ye, N);
function ie() {
  this._nsMap = {};
}
ie.prototype = {
  nodeType: j,
  hasAttribute: function(t) {
    return this.getAttributeNode(t) != null;
  },
  getAttribute: function(t) {
    var e = this.getAttributeNode(t);
    return e && e.value || "";
  },
  getAttributeNode: function(t) {
    return this.attributes.getNamedItem(t);
  },
  setAttribute: function(t, e) {
    var r = this.ownerDocument.createAttribute(t);
    r.value = r.nodeValue = "" + e, this.setAttributeNode(r);
  },
  removeAttribute: function(t) {
    var e = this.getAttributeNode(t);
    e && this.removeAttributeNode(e);
  },
  //four real opeartion method
  appendChild: function(t) {
    return t.nodeType === Z ? this.insertBefore(t, null) : $r(this, t);
  },
  setAttributeNode: function(t) {
    return this.attributes.setNamedItem(t);
  },
  setAttributeNodeNS: function(t) {
    return this.attributes.setNamedItemNS(t);
  },
  removeAttributeNode: function(t) {
    return this.attributes.removeNamedItem(t.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(t, e) {
    var r = this.getAttributeNodeNS(t, e);
    r && this.removeAttributeNode(r);
  },
  hasAttributeNS: function(t, e) {
    return this.getAttributeNodeNS(t, e) != null;
  },
  getAttributeNS: function(t, e) {
    var r = this.getAttributeNodeNS(t, e);
    return r && r.value || "";
  },
  setAttributeNS: function(t, e, r) {
    var u = this.ownerDocument.createAttributeNS(t, e);
    u.value = u.nodeValue = "" + r, this.setAttributeNode(u);
  },
  getAttributeNodeNS: function(t, e) {
    return this.attributes.getNamedItemNS(t, e);
  },
  getElementsByTagName: function(t) {
    return new he(this, function(e) {
      var r = [];
      return ge(e, function(u) {
        u !== e && u.nodeType == j && (t === "*" || u.tagName == t) && r.push(u);
      }), r;
    });
  },
  getElementsByTagNameNS: function(t, e) {
    return new he(this, function(r) {
      var u = [];
      return ge(r, function(i) {
        i !== r && i.nodeType === j && (t === "*" || i.namespaceURI === t) && (e === "*" || i.localName == e) && u.push(i);
      }), u;
    });
  }
};
ye.prototype.getElementsByTagName = ie.prototype.getElementsByTagName;
ye.prototype.getElementsByTagNameNS = ie.prototype.getElementsByTagNameNS;
P(ie, N);
function Fe() {
}
Fe.prototype.nodeType = le;
P(Fe, N);
function we() {
}
we.prototype = {
  data: "",
  substringData: function(t, e) {
    return this.data.substring(t, t + e);
  },
  appendData: function(t) {
    t = this.data + t, this.nodeValue = this.data = t, this.length = t.length;
  },
  insertData: function(t, e) {
    this.replaceData(t, 0, e);
  },
  appendChild: function(t) {
    throw new Error(R[k]);
  },
  deleteData: function(t, e) {
    this.replaceData(t, e, "");
  },
  replaceData: function(t, e, r) {
    var u = this.data.substring(0, t), i = this.data.substring(t + e);
    r = u + r + i, this.nodeValue = this.data = r, this.length = r.length;
  }
};
P(we, N);
function Xe() {
}
Xe.prototype = {
  nodeName: "#text",
  nodeType: Be,
  splitText: function(t) {
    var e = this.data, r = e.substring(t);
    e = e.substring(0, t), this.data = this.nodeValue = e, this.length = e.length;
    var u = this.ownerDocument.createTextNode(r);
    return this.parentNode && this.parentNode.insertBefore(u, this.nextSibling), u;
  }
};
P(Xe, we);
function Ye() {
}
Ye.prototype = {
  nodeName: "#comment",
  nodeType: Ht
};
P(Ye, we);
function We() {
}
We.prototype = {
  nodeName: "#cdata-section",
  nodeType: zt
};
P(We, we);
function Se() {
}
Se.prototype.nodeType = Xt;
P(Se, N);
function tr() {
}
tr.prototype.nodeType = Pr;
P(tr, N);
function rr() {
}
rr.prototype.nodeType = kr;
P(rr, N);
function Je() {
}
Je.prototype.nodeType = Vt;
P(Je, N);
function Oe() {
}
Oe.prototype.nodeName = "#document-fragment";
Oe.prototype.nodeType = Z;
P(Oe, N);
function Qe() {
}
Qe.prototype.nodeType = jt;
P(Qe, N);
function ur() {
}
ur.prototype.serializeToString = function(t, e, r) {
  return ir.call(t, e, r);
};
N.prototype.toString = ir;
function ir(t, e) {
  var r = [], u = this.nodeType == 9 && this.documentElement || this, i = u.prefix, s = u.namespaceURI;
  if (s && i == null) {
    var i = u.lookupPrefix(s);
    if (i == null)
      var n = [
        { namespace: s, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return ce(this, r, t, e, n), r.join("");
}
function ft(t, e, r) {
  var u = t.prefix || "", i = t.namespaceURI;
  if (!i || u === "xml" && i === De.XML || i === De.XMLNS)
    return !1;
  for (var s = r.length; s--; ) {
    var n = r[s];
    if (n.prefix === u)
      return n.namespace !== i;
  }
  return !0;
}
function Me(t, e, r) {
  t.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, Qt), '"');
}
function ce(t, e, r, u, i) {
  if (i || (i = []), u)
    if (t = u(t), t) {
      if (typeof t == "string") {
        e.push(t);
        return;
      }
    } else
      return;
  switch (t.nodeType) {
    case j:
      var s = t.attributes, n = s.length, A = t.firstChild, a = t.tagName;
      r = De.isHTML(t.namespaceURI) || r;
      var o = a;
      if (!r && !t.prefix && t.namespaceURI) {
        for (var c, l = 0; l < s.length; l++)
          if (s.item(l).name === "xmlns") {
            c = s.item(l).value;
            break;
          }
        if (!c)
          for (var d = i.length - 1; d >= 0; d--) {
            var m = i[d];
            if (m.prefix === "" && m.namespace === t.namespaceURI) {
              c = m.namespace;
              break;
            }
          }
        if (c !== t.namespaceURI)
          for (var d = i.length - 1; d >= 0; d--) {
            var m = i[d];
            if (m.namespace === t.namespaceURI) {
              m.prefix && (o = m.prefix + ":" + a);
              break;
            }
          }
      }
      e.push("<", o);
      for (var f = 0; f < n; f++) {
        var E = s.item(f);
        E.prefix == "xmlns" ? i.push({ prefix: E.localName, namespace: E.value }) : E.nodeName == "xmlns" && i.push({ prefix: "", namespace: E.value });
      }
      for (var f = 0; f < n; f++) {
        var E = s.item(f);
        if (ft(E, r, i)) {
          var D = E.prefix || "", C = E.namespaceURI;
          Me(e, D ? "xmlns:" + D : "xmlns", C), i.push({ prefix: D, namespace: C });
        }
        ce(E, e, r, u, i);
      }
      if (a === o && ft(t, r, i)) {
        var D = t.prefix || "", C = t.namespaceURI;
        Me(e, D ? "xmlns:" + D : "xmlns", C), i.push({ prefix: D, namespace: C });
      }
      if (A || r && !/^(?:meta|link|img|br|hr|input)$/i.test(a)) {
        if (e.push(">"), r && /^script$/i.test(a))
          for (; A; )
            A.data ? e.push(A.data) : ce(A, e, r, u, i.slice()), A = A.nextSibling;
        else
          for (; A; )
            ce(A, e, r, u, i.slice()), A = A.nextSibling;
        e.push("</", o, ">");
      } else
        e.push("/>");
      return;
    case $t:
    case Z:
      for (var A = t.firstChild; A; )
        ce(A, e, r, u, i.slice()), A = A.nextSibling;
      return;
    case le:
      return Me(e, t.name, t.value);
    case Be:
      return e.push(
        t.data.replace(/[<&>]/g, Qt)
      );
    case zt:
      return e.push("<![CDATA[", t.data, "]]>");
    case Ht:
      return e.push("<!--", t.data, "-->");
    case Xt:
      var M = t.publicId, T = t.systemId;
      if (e.push("<!DOCTYPE ", t.name), M)
        e.push(" PUBLIC ", M), T && T != "." && e.push(" ", T), e.push(">");
      else if (T && T != ".")
        e.push(" SYSTEM ", T, ">");
      else {
        var _ = t.internalSubset;
        _ && e.push(" [", _, "]"), e.push(">");
      }
      return;
    case jt:
      return e.push("<?", t.target, " ", t.data, "?>");
    case Vt:
      return e.push("&", t.nodeName, ";");
    default:
      e.push("??", t.nodeName);
  }
}
function sr(t, e, r) {
  var u;
  switch (e.nodeType) {
    case j:
      u = e.cloneNode(!1), u.ownerDocument = t;
    case Z:
      break;
    case le:
      r = !0;
      break;
  }
  if (u || (u = e.cloneNode(!1)), u.ownerDocument = t, u.parentNode = null, r)
    for (var i = e.firstChild; i; )
      u.appendChild(sr(t, i, r)), i = i.nextSibling;
  return u;
}
function Ue(t, e, r) {
  var u = new e.constructor();
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var s = e[i];
      typeof s != "object" && s != u[i] && (u[i] = s);
    }
  switch (e.childNodes && (u.childNodes = new J()), u.ownerDocument = t, u.nodeType) {
    case j:
      var n = e.attributes, a = u.attributes = new xe(), o = n.length;
      a._ownerElement = u;
      for (var c = 0; c < o; c++)
        u.setAttributeNode(Ue(t, n.item(c), !0));
      break;
    case le:
      r = !0;
  }
  if (r)
    for (var l = e.firstChild; l; )
      u.appendChild(Ue(t, l, r)), l = l.nextSibling;
  return u;
}
function nr(t, e, r) {
  t[e] = r;
}
try {
  if (Object.defineProperty) {
    let t = function(e) {
      switch (e.nodeType) {
        case j:
        case Z:
          var r = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && r.push(t(e)), e = e.nextSibling;
          return r.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(he.prototype, "length", {
      get: function() {
        return je(this), this.$$length;
      }
    }), Object.defineProperty(N.prototype, "textContent", {
      get: function() {
        return t(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case j:
          case Z:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), nr = function(e, r, u) {
      e["$$" + r] = u;
    };
  }
} catch {
}
re.DocumentType = Se;
re.DOMException = F;
re.DOMImplementation = Jt;
re.Element = ie;
re.Node = N;
re.NodeList = J;
re.XMLSerializer = ur;
var Re = {}, ar = {};
(function(t) {
  var e = ee.freeze;
  t.XML_ENTITIES = e({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), t.HTML_ENTITIES = e({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), t.entityMap = t.HTML_ENTITIES;
})(ar);
var Ze = {}, Ae = ee.NAMESPACE, ke = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, pt = new RegExp("[\\-\\.0-9" + ke.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), mt = new RegExp("^" + ke.source + pt.source + "*(?::" + ke.source + pt.source + "*)?$"), me = 0, te = 1, se = 2, de = 3, ne = 4, ae = 5, ve = 6, Te = 7;
function fe(t, e) {
  this.message = t, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, fe);
}
fe.prototype = new Error();
fe.prototype.name = fe.name;
function or() {
}
or.prototype = {
  parse: function(t, e, r) {
    var u = this.domBuilder;
    u.startDocument(), cr(e, e = {}), Xr(
      t,
      e,
      r,
      u,
      this.errorHandler
    ), u.endDocument();
  }
};
function Xr(t, e, r, u, i) {
  function s(p) {
    if (p > 65535) {
      p -= 65536;
      var b = 55296 + (p >> 10), $ = 56320 + (p & 1023);
      return String.fromCharCode(b, $);
    } else
      return String.fromCharCode(p);
  }
  function n(p) {
    var b = p.slice(1, -1);
    return Object.hasOwnProperty.call(r, b) ? r[b] : b.charAt(0) === "#" ? s(parseInt(b.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + p), p);
  }
  function a(p) {
    if (p > D) {
      var b = t.substring(D, p).replace(/&#?\w+;/g, n);
      m && o(D), u.characters(b, 0, p - D), D = p;
    }
  }
  function o(p, b) {
    for (; p >= l && (b = d.exec(t)); )
      c = b.index, l = c + b[0].length, m.lineNumber++;
    m.columnNumber = p - c + 1;
  }
  for (var c = 0, l = 0, d = /.*(?:\r\n?|\n)|.*$/g, m = u.locator, f = [{ currentNSMap: e }], E = {}, D = 0; ; ) {
    try {
      var C = t.indexOf("<", D);
      if (C < 0) {
        if (!t.substr(D).match(/^\s*$/)) {
          var A = u.doc, M = A.createTextNode(t.substr(D));
          A.appendChild(M), u.currentElement = M;
        }
        return;
      }
      switch (C > D && a(C), t.charAt(C + 1)) {
        case "/":
          var h = t.indexOf(">", C + 3), T = t.substring(C + 2, h).replace(/[ \t\n\r]+$/g, ""), _ = f.pop();
          h < 0 ? (T = t.substring(C + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + T + " is not complete:" + _.tagName), h = C + 1 + T.length) : T.match(/\s</) && (T = T.replace(/[\s<].*/, ""), i.error("end tag name: " + T + " maybe not complete"), h = C + 1 + T.length);
          var I = _.localNSMap, O = _.tagName == T, z = O || _.tagName && _.tagName.toLowerCase() == T.toLowerCase();
          if (z) {
            if (u.endElement(_.uri, _.localName, T), I)
              for (var V in I)
                Object.prototype.hasOwnProperty.call(I, V) && u.endPrefixMapping(V);
            O || i.fatalError("end tag name: " + T + " is not match the current start tagName:" + _.tagName);
          } else
            f.push(_);
          h++;
          break;
        case "?":
          m && o(C), h = Zr(t, C, u);
          break;
        case "!":
          m && o(C), h = Qr(t, C, u, i);
          break;
        default:
          m && o(C);
          var B = new lr(), U = f[f.length - 1].currentNSMap, h = Yr(t, C, B, U, n, i), w = B.length;
          if (!B.closed && Jr(t, h, B.tagName, E) && (B.closed = !0, r.nbsp || i.warning("unclosed xml attribute")), m && w) {
            for (var v = dt(m, {}), g = 0; g < w; g++) {
              var x = B[g];
              o(x.offset), x.locator = dt(m, {});
            }
            u.locator = v, vt(B, u, U) && f.push(B), u.locator = m;
          } else
            vt(B, u, U) && f.push(B);
          Ae.isHTML(B.uri) && !B.closed ? h = Wr(t, h, B.tagName, n, u) : h++;
      }
    } catch (p) {
      if (p instanceof fe)
        throw p;
      i.error("element parse error: " + p), h = -1;
    }
    h > D ? D = h : a(Math.max(C, D) + 1);
  }
}
function dt(t, e) {
  return e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber, e;
}
function Yr(t, e, r, u, i, s) {
  function n(m, f, E) {
    r.attributeNames.hasOwnProperty(m) && s.fatalError("Attribute " + m + " redefined"), r.addValue(
      m,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      f.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, i),
      E
    );
  }
  for (var a, o, c = ++e, l = me; ; ) {
    var d = t.charAt(c);
    switch (d) {
      case "=":
        if (l === te)
          a = t.slice(e, c), l = de;
        else if (l === se)
          l = de;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (l === de || l === te)
          if (l === te && (s.warning('attribute value must after "="'), a = t.slice(e, c)), e = c + 1, c = t.indexOf(d, e), c > 0)
            o = t.slice(e, c), n(a, o, e - 1), l = ae;
          else
            throw new Error("attribute value no end '" + d + "' match");
        else if (l == ne)
          o = t.slice(e, c), n(a, o, e), s.warning('attribute "' + a + '" missed start quot(' + d + ")!!"), e = c + 1, l = ae;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (l) {
          case me:
            r.setTagName(t.slice(e, c));
          case ae:
          case ve:
          case Te:
            l = Te, r.closed = !0;
          case ne:
          case te:
            break;
          case se:
            r.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return s.error("unexpected end of input"), l == me && r.setTagName(t.slice(e, c)), c;
      case ">":
        switch (l) {
          case me:
            r.setTagName(t.slice(e, c));
          case ae:
          case ve:
          case Te:
            break;
          case ne:
          case te:
            o = t.slice(e, c), o.slice(-1) === "/" && (r.closed = !0, o = o.slice(0, -1));
          case se:
            l === se && (o = a), l == ne ? (s.warning('attribute "' + o + '" missed quot(")!'), n(a, o, e)) : ((!Ae.isHTML(u[""]) || !o.match(/^(?:disabled|checked|selected)$/i)) && s.warning('attribute "' + o + '" missed value!! "' + o + '" instead!!'), n(o, o, e));
            break;
          case de:
            throw new Error("attribute value missed!!");
        }
        return c;
      case "":
        d = " ";
      default:
        if (d <= " ")
          switch (l) {
            case me:
              r.setTagName(t.slice(e, c)), l = ve;
              break;
            case te:
              a = t.slice(e, c), l = se;
              break;
            case ne:
              var o = t.slice(e, c);
              s.warning('attribute "' + o + '" missed quot(")!!'), n(a, o, e);
            case ae:
              l = ve;
              break;
          }
        else
          switch (l) {
            case se:
              r.tagName, (!Ae.isHTML(u[""]) || !a.match(/^(?:disabled|checked|selected)$/i)) && s.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), n(a, a, e), e = c, l = te;
              break;
            case ae:
              s.warning('attribute space is required"' + a + '"!!');
            case ve:
              l = te, e = c;
              break;
            case de:
              l = ne, e = c;
              break;
            case Te:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    c++;
  }
}
function vt(t, e, r) {
  for (var u = t.tagName, i = null, d = t.length; d--; ) {
    var s = t[d], n = s.qName, a = s.value, m = n.indexOf(":");
    if (m > 0)
      var o = s.prefix = n.slice(0, m), c = n.slice(m + 1), l = o === "xmlns" && c;
    else
      c = n, o = null, l = n === "xmlns" && "";
    s.localName = c, l !== !1 && (i == null && (i = {}, cr(r, r = {})), r[l] = i[l] = a, s.uri = Ae.XMLNS, e.startPrefixMapping(l, a));
  }
  for (var d = t.length; d--; ) {
    s = t[d];
    var o = s.prefix;
    o && (o === "xml" && (s.uri = Ae.XML), o !== "xmlns" && (s.uri = r[o || ""]));
  }
  var m = u.indexOf(":");
  m > 0 ? (o = t.prefix = u.slice(0, m), c = t.localName = u.slice(m + 1)) : (o = null, c = t.localName = u);
  var f = t.uri = r[o || ""];
  if (e.startElement(f, c, u, t), t.closed) {
    if (e.endElement(f, c, u), i)
      for (o in i)
        Object.prototype.hasOwnProperty.call(i, o) && e.endPrefixMapping(o);
  } else
    return t.currentNSMap = r, t.localNSMap = i, !0;
}
function Wr(t, e, r, u, i) {
  if (/^(?:script|textarea)$/i.test(r)) {
    var s = t.indexOf("</" + r + ">", e), n = t.substring(e + 1, s);
    if (/[&<]/.test(n))
      return /^script$/i.test(r) ? (i.characters(n, 0, n.length), s) : (n = n.replace(/&#?\w+;/g, u), i.characters(n, 0, n.length), s);
  }
  return e + 1;
}
function Jr(t, e, r, u) {
  var i = u[r];
  return i == null && (i = t.lastIndexOf("</" + r + ">"), i < e && (i = t.lastIndexOf("</" + r)), u[r] = i), i < e;
}
function cr(t, e) {
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
function Qr(t, e, r, u) {
  var i = t.charAt(e + 2);
  switch (i) {
    case "-":
      if (t.charAt(e + 3) === "-") {
        var s = t.indexOf("-->", e + 4);
        return s > e ? (r.comment(t, e + 4, s - e - 4), s + 3) : (u.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (t.substr(e + 3, 6) == "CDATA[") {
        var s = t.indexOf("]]>", e + 9);
        return r.startCDATA(), r.characters(t, e + 9, s - e - 9), r.endCDATA(), s + 3;
      }
      var n = Kr(t, e), a = n.length;
      if (a > 1 && /!doctype/i.test(n[0][0])) {
        var o = n[1][0], c = !1, l = !1;
        a > 3 && (/^public$/i.test(n[2][0]) ? (c = n[3][0], l = a > 4 && n[4][0]) : /^system$/i.test(n[2][0]) && (l = n[3][0]));
        var d = n[a - 1];
        return r.startDTD(o, c, l), r.endDTD(), d.index + d[0].length;
      }
  }
  return -1;
}
function Zr(t, e, r) {
  var u = t.indexOf("?>", e);
  if (u) {
    var i = t.substring(e, u).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return i ? (i[0].length, r.processingInstruction(i[1], i[2]), u + 2) : -1;
  }
  return -1;
}
function lr() {
  this.attributeNames = {};
}
lr.prototype = {
  setTagName: function(t) {
    if (!mt.test(t))
      throw new Error("invalid tagName:" + t);
    this.tagName = t;
  },
  addValue: function(t, e, r) {
    if (!mt.test(t))
      throw new Error("invalid attribute:" + t);
    this.attributeNames[t] = this.length, this[this.length++] = { qName: t, value: e, offset: r };
  },
  length: 0,
  getLocalName: function(t) {
    return this[t].localName;
  },
  getLocator: function(t) {
    return this[t].locator;
  },
  getQName: function(t) {
    return this[t].qName;
  },
  getURI: function(t) {
    return this[t].uri;
  },
  getValue: function(t) {
    return this[t].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function Kr(t, e) {
  var r, u = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (i.lastIndex = e, i.exec(t); r = i.exec(t); )
    if (u.push(r), r[1]) return u;
}
Ze.XMLReader = or;
Ze.ParseError = fe;
var eu = ee, tu = re, Dt = ar, hr = Ze, ru = tu.DOMImplementation, gt = eu.NAMESPACE, uu = hr.ParseError, iu = hr.XMLReader;
function fr(t) {
  return t.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function pr(t) {
  this.options = t || { locator: {} };
}
pr.prototype.parseFromString = function(t, e) {
  var r = this.options, u = new iu(), i = r.domBuilder || new Ce(), s = r.errorHandler, n = r.locator, a = r.xmlns || {}, o = /\/x?html?$/.test(e), c = o ? Dt.HTML_ENTITIES : Dt.XML_ENTITIES;
  n && i.setDocumentLocator(n), u.errorHandler = su(s, i, n), u.domBuilder = r.domBuilder || i, o && (a[""] = gt.HTML), a.xml = a.xml || gt.XML;
  var l = r.normalizeLineEndings || fr;
  return t && typeof t == "string" ? u.parse(
    l(t),
    a,
    c
  ) : u.errorHandler.error("invalid doc source"), i.doc;
};
function su(t, e, r) {
  if (!t) {
    if (e instanceof Ce)
      return e;
    t = e;
  }
  var u = {}, i = t instanceof Function;
  r = r || {};
  function s(n) {
    var a = t[n];
    !a && i && (a = t.length == 2 ? function(o) {
      t(n, o);
    } : t), u[n] = a && function(o) {
      a("[xmldom " + n + "]	" + o + Pe(r));
    } || function() {
    };
  }
  return s("warning"), s("error"), s("fatalError"), u;
}
function Ce() {
  this.cdata = !1;
}
function oe(t, e) {
  e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
}
Ce.prototype = {
  startDocument: function() {
    this.doc = new ru().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(t, e, r, u) {
    var i = this.doc, s = i.createElementNS(t, r || e), n = u.length;
    Ne(this, s), this.currentElement = s, this.locator && oe(this.locator, s);
    for (var a = 0; a < n; a++) {
      var t = u.getURI(a), o = u.getValue(a), r = u.getQName(a), c = i.createAttributeNS(t, r);
      this.locator && oe(u.getLocator(a), c), c.value = c.nodeValue = o, s.setAttributeNode(c);
    }
  },
  endElement: function(t, e, r) {
    var u = this.currentElement;
    u.tagName, this.currentElement = u.parentNode;
  },
  startPrefixMapping: function(t, e) {
  },
  endPrefixMapping: function(t) {
  },
  processingInstruction: function(t, e) {
    var r = this.doc.createProcessingInstruction(t, e);
    this.locator && oe(this.locator, r), Ne(this, r);
  },
  ignorableWhitespace: function(t, e, r) {
  },
  characters: function(t, e, r) {
    if (t = At.apply(this, arguments), t) {
      if (this.cdata)
        var u = this.doc.createCDATASection(t);
      else
        var u = this.doc.createTextNode(t);
      this.currentElement ? this.currentElement.appendChild(u) : /^\s*$/.test(t) && this.doc.appendChild(u), this.locator && oe(this.locator, u);
    }
  },
  skippedEntity: function(t) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(t) {
    (this.locator = t) && (t.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(t, e, r) {
    t = At.apply(this, arguments);
    var u = this.doc.createComment(t);
    this.locator && oe(this.locator, u), Ne(this, u);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(t, e, r) {
    var u = this.doc.implementation;
    if (u && u.createDocumentType) {
      var i = u.createDocumentType(t, e, r);
      this.locator && oe(this.locator, i), Ne(this, i), this.doc.doctype = i;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(t) {
    console.warn("[xmldom warning]	" + t, Pe(this.locator));
  },
  error: function(t) {
    console.error("[xmldom error]	" + t, Pe(this.locator));
  },
  fatalError: function(t) {
    throw new uu(t, this.locator);
  }
};
function Pe(t) {
  if (t)
    return `
@` + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]";
}
function At(t, e, r) {
  return typeof t == "string" ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t, e, r) + "" : t;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(t) {
  Ce.prototype[t] = function() {
    return null;
  };
});
function Ne(t, e) {
  t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}
Re.__DOMHandler = Ce;
Re.normalizeLineEndings = fr;
Re.DOMParser = pr;
var nu = Re.DOMParser;
class au {
  /**
   * @param {Object} options
   * @param {Element} [options.xml] - The XML element to parse.
   * @param {string} [options.string] - The XML element to parse as a string.
   */
  constructor(e) {
    y(this, "materials", {});
    y(this, "links", {});
    y(this, "joints", {});
    var r = e.xml, u = e.string;
    if (u) {
      var i = new nu();
      r = i.parseFromString(u, "text/xml").documentElement;
    }
    if (!r)
      throw new Error("No URDF document parsed!");
    var s = r;
    this.name = s.getAttribute("name");
    for (var n = s.childNodes, a = 0; a < n.length; a++) {
      var o = n[a];
      if (o.tagName === "material") {
        var c = new ze({
          xml: o
        });
        this.materials[c.name] !== void 0 ? this.materials[c.name].isLink() ? this.materials[c.name].assign(c) : console.warn("Material " + c.name + "is not unique.") : this.materials[c.name] = c;
      } else if (o.tagName === "link") {
        var l = new Ut({
          xml: o
        });
        if (this.links[l.name] !== void 0)
          console.warn("Link " + l.name + " is not unique.");
        else {
          for (var d = 0; d < l.visuals.length; d++) {
            var m = l.visuals[d].material;
            m !== null && m.name && (this.materials[m.name] !== void 0 ? l.visuals[d].material = this.materials[m.name] : this.materials[m.name] = m);
          }
          this.links[l.name] = l;
        }
      } else if (o.tagName === "joint") {
        var f = new Or({
          xml: o
        });
        this.joints[f.name] = f;
      }
    }
  }
}
const ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  URDF_BOX: _t,
  URDF_CYLINDER: Ft,
  URDF_MESH: St,
  URDF_SPHERE: xt,
  UrdfBox: Ot,
  UrdfColor: Rt,
  UrdfCylinder: Lt,
  UrdfLink: Ut,
  UrdfMaterial: ze,
  UrdfMesh: qt,
  UrdfModel: au,
  UrdfSphere: Mt,
  UrdfVisual: It
}, Symbol.toStringTag, { value: "Module" })), cu = "1.4.1";
globalThis.ROSLIB = {
  REVISION: cu,
  ...Nr,
  ...xr,
  ..._r,
  ...Sr,
  ...ou
};
export {
  Bt as A,
  Ct as G,
  wt as P,
  Q,
  cu as R,
  S,
  L as T,
  Ot as U,
  H as V,
  gr as a,
  Tr as b,
  Ge as c,
  Br as d,
  Nt as e,
  ue as f,
  fu as g,
  be as h,
  Tt as i,
  Fr as j,
  Rt as k,
  Lt as l,
  Ut as m,
  ze as n,
  qt as o,
  au as p,
  Mt as q,
  It as r,
  xt as s,
  _t as t,
  Ft as u,
  St as v
};
