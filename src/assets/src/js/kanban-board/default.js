! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n;
        n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.dragula = e()
    }
}(function() {
    return function e(n, t, r) {
        function o(u, a) {
            if (!t[u]) {
                if (!n[u]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(u, !0);
                    if (i) return i(u, !0);
                    var l = new Error("Cannot find module '" + u + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var f = t[u] = {
                    exports: {}
                };
                n[u][0].call(f.exports, function(e) {
                    var t = n[u][1][e];
                    return o(t ? t : e)
                }, f, f.exports, e, n, t, r)
            }
            return t[u].exports
        }
        for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]);
        return o
    }({
        1: [function(e, n, t) {
            "use strict";

            function r(e) {
                var n = u[e];
                return n ? n.lastIndex = 0 : u[e] = n = new RegExp(a + e + c, "g"), n
            }

            function o(e, n) {
                var t = e.className;
                t.length ? r(n).test(t) || (e.className += " " + n) : e.className = n
            }

            function i(e, n) {
                e.className = e.className.replace(r(n), " ").trim()
            }
            var u = {},
                a = "(?:^|\\s)",
                c = "(?:\\s|$)";
            n.exports = {
                add: o,
                rm: i
            }
        }, {}],
        2: [function(e, n, t) {
            (function(t) {
                "use strict";

                function r(e, n) {
                    function t(e) {
                        return -1 !== te.containers.indexOf(e) || ne.isContainer(e)
                    }

                    function r(e) {
                        var n = e ? "remove" : "add";
                        o(Z, n, "mousedown", b), o(Z, n, "mouseup", T)
                    }

                    function u(e) {
                        var n = e ? "remove" : "add";
                        o(Z, n, "mousemove", E)
                    }

                    function d(e) {
                        var n = e ? "remove" : "add";
                        o(Z, n, "selectstart", y), o(Z, n, "click", y)
                    }

                    function g() {
                        r(!0), T({})
                    }

                    function y(e) {
                        Q && e.preventDefault()
                    }

                    function b(e) {
                        var n = 0 !== e.which && 1 !== e.which || e.metaKey || e.ctrlKey;
                        if (!n) {
                            var t = e.target,
                                r = w(t);
                            r && (Q = r, u(), "mousedown" === e.type && e.preventDefault())
                        }
                    }

                    function E(e) {
                        u(!0), d(), S(), C(Q);
                        var n = i(K);
                        z = s("pageX", e) - n.left, H = s("pageY", e) - n.top, h.add(G || K, "gu-transit"), k(), M(e)
                    }

                    function w(e) {
                        if (!(te.dragging && U || t(e))) {
                            for (var n = e; e.parentElement && t(e.parentElement) === !1;) {
                                if (ne.invalid(e, n)) return;
                                if (e = e.parentElement, !e) return
                            }
                            var r = e.parentElement;
                            if (r && !ne.invalid(e, n)) {
                                var o = ne.moves(e, r, n);
                                if (o) return {
                                    item: e,
                                    source: r
                                }
                            }
                        }
                    }

                    function x(e) {
                        var n = w(e);
                        n && C(n)
                    }

                    function C(e) {
                        ne.copy && (G = e.item.cloneNode(!0), te.emit("cloned", G, e.item, "copy")), F = e.source, K = e.item, V = $ = f(e.item), te.dragging = !0, te.emit("drag", K, F)
                    }

                    function O() {
                        return !1
                    }

                    function S() {
                        if (te.dragging) {
                            var e = G || K;
                            B(e, e.parentElement)
                        }
                    }

                    function N() {
                        Q = !1, u(!0), d(!0)
                    }

                    function T(e) {
                        if (N(), te.dragging) {
                            var n = G || K,
                                t = s("clientX", e),
                                r = s("clientY", e),
                                o = a(U, t, r),
                                i = L(o, t, r);
                            !i || ne.copy !== !1 && i === F ? ne.removeOnSpill ? D() : P() : B(n, i)
                        }
                    }

                    function B(e, n) {
                        Y(n) ? te.emit("cancel", e, F) : te.emit("drop", e, n, F), X()
                    }

                    function D() {
                        if (te.dragging) {
                            var e = G || K,
                                n = e.parentElement;
                            n && n.removeChild(e), te.emit(ne.copy ? "cancel" : "remove", e, n), X()
                        }
                    }

                    function P(e) {
                        if (te.dragging) {
                            var n = arguments.length > 0 ? e : ne.revertOnSpill,
                                t = G || K,
                                r = t.parentElement;
                            r === F && ne.copy && r.removeChild(G);
                            var o = Y(r);
                            o === !1 && ne.copy === !1 && n && F.insertBefore(t, V), o || n ? te.emit("cancel", t, F) : te.emit("drop", t, r, F), X()
                        }
                    }

                    function X() {
                        var e = G || K;
                        N(), q(), e && h.rm(e, "gu-transit"), J && clearTimeout(J), te.dragging = !1, te.emit("out", e, ee, F), te.emit("dragend", e), F = K = G = V = $ = J = ee = null
                    }

                    function Y(e, n) {
                        var t;
                        return t = void 0 !== n ? n : U ? $ : f(K || G), e === F && t === V
                    }

                    function L(e, n, r) {
                        function o() {
                            var o = t(i);
                            if (o === !1) return !1;
                            var u = _(i, e),
                                a = A(i, u, n, r),
                                c = Y(i, a);
                            return c ? !0 : ne.accepts(K, i, F, a)
                        }
                        for (var i = e; i && !o();) i = i.parentElement;
                        return i
                    }

                    function M(e) {
                        function n(e) {
                            te.emit(e, l, ee, F)
                        }

                        function t() {
                            m && n("over")
                        }

                        function r() {
                            ee && n("out")
                        }
                        if (U) {
                            e.preventDefault();
                            var o = s("clientX", e),
                                i = s("clientY", e),
                                u = o - z,
                                c = i - H;
                            U.style.left = u + "px", U.style.top = c + "px";
                            var l = G || K,
                                d = a(U, o, i),
                                v = L(d, o, i),
                                m = null !== v && v !== ee;
                            if ((m || null === v) && (r(), ee = v, t()), v === F && ne.copy) return void(l.parentElement && l.parentElement.removeChild(l));
                            var p, g = _(v, d);
                            if (null !== g) p = A(v, g, o, i);
                            else {
                                if (ne.revertOnSpill !== !0 || ne.copy) return void(ne.copy && l.parentElement && l.parentElement.removeChild(l));
                                p = V, v = F
                            }(null === p || p !== l && p !== f(l) && p !== $) && ($ = p, v.insertBefore(l, p), te.emit("shadow", l, v))
                        }
                    }

                    function R(e) {
                        h.rm(e, "gu-hide")
                    }

                    function j(e) {
                        te.dragging && h.add(e, "gu-hide")
                    }

                    function k() {
                        if (!U) {
                            var e = K.getBoundingClientRect();
                            U = K.cloneNode(!0), U.style.width = v(e) + "px", U.style.height = m(e) + "px", h.rm(U, "gu-transit"), h.add(U, "gu-mirror"), ne.mirrorContainer.appendChild(U), o(Z, "add", "mousemove", M), h.add(ne.mirrorContainer, "gu-unselectable"), te.emit("cloned", U, K, "mirror")
                        }
                    }

                    function q() {
                        U && (h.rm(ne.mirrorContainer, "gu-unselectable"), o(Z, "remove", "mousemove", M), U.parentElement.removeChild(U), U = null)
                    }

                    function _(e, n) {
                        for (var t = n; t !== e && t.parentElement !== e;) t = t.parentElement;
                        return t === Z ? null : t
                    }

                    function A(e, n, t, r) {
                        function o() {
                            var n, o, i, u = e.children.length;
                            for (n = 0; u > n; n++) {
                                if (o = e.children[n], i = o.getBoundingClientRect(), a && i.left > t) return o;
                                if (!a && i.top > r) return o
                            }
                            return null
                        }

                        function i() {
                            var e = n.getBoundingClientRect();
                            return u(a ? t > e.left + v(e) / 2 : r > e.top + m(e) / 2)
                        }

                        function u(e) {
                            return e ? f(n) : n
                        }
                        var a = "horizontal" === ne.direction,
                            c = n !== e ? i() : o();
                        return c
                    }
                    var I = arguments.length;
                    1 === I && Array.isArray(e) === !1 && (n = e, e = []);
                    var U, F, K, z, H, V, $, G, J, Q, W = document.body,
                        Z = document.documentElement,
                        ee = null,
                        ne = n || {};
                    void 0 === ne.moves && (ne.moves = l), void 0 === ne.accepts && (ne.accepts = l), void 0 === ne.invalid && (ne.invalid = O), void 0 === ne.containers && (ne.containers = e || []), void 0 === ne.isContainer && (ne.isContainer = c), void 0 === ne.copy && (ne.copy = !1), void 0 === ne.revertOnSpill && (ne.revertOnSpill = !1), void 0 === ne.removeOnSpill && (ne.removeOnSpill = !1), void 0 === ne.direction && (ne.direction = "vertical"), void 0 === ne.mirrorContainer && (ne.mirrorContainer = W);
                    var te = p({
                        containers: ne.containers,
                        start: x,
                        end: S,
                        cancel: P,
                        remove: D,
                        destroy: g,
                        dragging: !1
                    });
                    return ne.removeOnSpill === !0 && te.on("over", R).on("out", j), r(), te
                }

                function o(e, n, r, o) {
                    var i = {
                            mouseup: "touchend",
                            mousedown: "touchstart",
                            mousemove: "touchmove"
                        },
                        u = {
                            mouseup: "MSPointerUp",
                            mousedown: "MSPointerDown",
                            mousemove: "MSPointerMove"
                        };
                    t.navigator.msPointerEnabled && g[n](e, u[r], o), g[n](e, i[r], o), g[n](e, r, o)
                }

                function i(e) {
                    var n = e.getBoundingClientRect();
                    return {
                        left: n.left + u("scrollLeft", "pageXOffset"),
                        top: n.top + u("scrollTop", "pageYOffset")
                    }
                }

                function u(e, n) {
                    if ("undefined" != typeof t[n]) return t[n];
                    var r = document.documentElement;
                    if (r.clientHeight) return r[e];
                    var o = document.body;
                    return o[e]
                }

                function a(e, n, t) {
                    if (!n && !t) return null;
                    var r, o = e || {},
                        i = o.className;
                    return o.className += " gu-hide", r = document.elementFromPoint(n, t), o.className = i, r
                }

                function c() {
                    return !1
                }

                function l() {
                    return !0
                }

                function f(e) {
                    function n() {
                        var n = e;
                        do n = n.nextSibling; while (n && 1 !== n.nodeType);
                        return n
                    }
                    return e.nextElementSibling || n()
                }

                function d(e) {
                    return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e
                }

                function s(e, n) {
                    var t = d(n),
                        r = {
                            pageX: "clientX",
                            pageY: "clientY"
                        };
                    return e in r && !(e in t) && r[e] in t && (e = r[e]), t[e]
                }

                function v(e) {
                    return e.width || e.right - e.left
                }

                function m(e) {
                    return e.height || e.bottom - e.top
                }
                var p = e("contra/emitter"),
                    g = e("crossvent"),
                    h = e("./classes");
                n.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./classes": 1,
            "contra/emitter": 4,
            crossvent: 8
        }],
        3: [function(e, n, t) {
            "use strict";
            var r = e("ticky");
            n.exports = function(e, n, t) {
                e && r(function() {
                    e.apply(t || null, n || [])
                })
            }
        }, {
            ticky: 6
        }],
        4: [function(e, n, t) {
            "use strict";
            var r = e("atoa"),
                o = e("./debounce");
            n.exports = function(e, n) {
                var t = n || {},
                    i = {};
                return void 0 === e && (e = {}), e.on = function(n, t) {
                    return i[n] ? i[n].push(t) : i[n] = [t], e
                }, e.once = function(n, t) {
                    return t._once = !0, e.on(n, t), e
                }, e.off = function(n, t) {
                    var r = arguments.length;
                    if (1 === r) delete i[n];
                    else if (0 === r) i = {};
                    else {
                        var o = i[n];
                        if (!o) return e;
                        o.splice(o.indexOf(t), 1)
                    }
                    return e
                }, e.emit = function() {
                    var n = r(arguments);
                    return e.emitterSnapshot(n.shift()).apply(this, n)
                }, e.emitterSnapshot = function(n) {
                    var u = (i[n] || []).slice(0);
                    return function() {
                        var i = r(arguments),
                            a = this || e;
                        if ("error" === n && t["throws"] !== !1 && !u.length) throw 1 === i.length ? i[0] : i;
                        return u.forEach(function(r) {
                            t.async ? o(r, i, a) : r.apply(a, i), r._once && e.off(n, r)
                        }), e
                    }
                }, e
            }
        }, {
            "./debounce": 3,
            atoa: 5
        }],
        5: [function(e, n, t) {
            n.exports = function(e, n) {
                return Array.prototype.slice.call(e, n)
            }
        }, {}],
        6: [function(e, n, t) {
            var r, o = "function" == typeof setImmediate;
            r = o ? function(e) {
                setImmediate(e)
            } : function(e) {
                setTimeout(e, 0)
            }, n.exports = r
        }, {}],
        7: [function(e, n, t) {
            (function(e) {
                function t() {
                    try {
                        var e = new r("cat", {
                            detail: {
                                foo: "bar"
                            }
                        });
                        return "cat" === e.type && "bar" === e.detail.foo
                    } catch (n) {}
                    return !1
                }
                var r = e.CustomEvent;
                n.exports = t() ? r : "function" == typeof document.createEvent ? function(e, n) {
                    var t = document.createEvent("CustomEvent");
                    return n ? t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail) : t.initCustomEvent(e, !1, !1, void 0), t
                } : function(e, n) {
                    var t = document.createEventObject();
                    return t.type = e, n ? (t.bubbles = Boolean(n.bubbles), t.cancelable = Boolean(n.cancelable), t.detail = n.detail) : (t.bubbles = !1, t.cancelable = !1, t.detail = void 0), t
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        8: [function(e, n, t) {
            (function(t) {
                "use strict";

                function r(e, n, t, r) {
                    return e.addEventListener(n, t, r)
                }

                function o(e, n, t) {
                    return e.attachEvent("on" + n, l(e, n, t))
                }

                function i(e, n, t, r) {
                    return e.removeEventListener(n, t, r)
                }

                function u(e, n, t) {
                    return e.detachEvent("on" + n, f(e, n, t))
                }

                function a(e, n, t) {
                    function r() {
                        var e;
                        return m.createEvent ? (e = m.createEvent("Event"), e.initEvent(n, !0, !0)) : m.createEventObject && (e = m.createEventObject()), e
                    }

                    function o() {
                        return new s(n, {
                            detail: t
                        })
                    }
                    var i = -1 === v.indexOf(n) ? o() : r();
                    e.dispatchEvent ? e.dispatchEvent(i) : e.fireEvent("on" + n, i)
                }

                function c(e, n, r) {
                    return function(n) {
                        var o = n || t.event;
                        o.target = o.target || o.srcElement, o.preventDefault = o.preventDefault || function() {
                            o.returnValue = !1
                        }, o.stopPropagation = o.stopPropagation || function() {
                            o.cancelBubble = !0
                        }, o.which = o.which || o.keyCode, r.call(e, o)
                    }
                }

                function l(e, n, t) {
                    var r = f(e, n, t) || c(e, n, t);
                    return h.push({
                        wrapper: r,
                        element: e,
                        type: n,
                        fn: t
                    }), r
                }

                function f(e, n, t) {
                    var r = d(e, n, t);
                    if (r) {
                        var o = h[r].wrapper;
                        return h.splice(r, 1), o
                    }
                }

                function d(e, n, t) {
                    var r, o;
                    for (r = 0; r < h.length; r++)
                        if (o = h[r], o.element === e && o.type === n && o.fn === t) return r
                }
                var s = e("custom-event"),
                    v = e("./eventmap"),
                    m = document,
                    p = r,
                    g = i,
                    h = [];
                t.addEventListener || (p = o, g = u), n.exports = {
                    add: p,
                    remove: g,
                    fabricate: a
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./eventmap": 9,
            "custom-event": 7
        }],
        9: [function(e, n, t) {
            (function(e) {
                "use strict";
                var t = [],
                    r = "",
                    o = /^on/;
                for (r in e) o.test(r) && t.push(r.slice(2));
                n.exports = t
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [2])(2)
});