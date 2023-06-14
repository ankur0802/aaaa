! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarInteraction = {}, e.FullCalendar)
}(this, (function(e, t) {
    "use strict";
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };

    function r(e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };
    t.config.touchMouseIgnoreWait = 500;
    var o = 0,
        a = 0,
        l = !1,
        s = function() {
            function e(e) {
                var n = this;
                this.subjectEl = null, this.downEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(e) {
                    if (!n.shouldIgnoreMouse() && function(e) {
                            return 0 === e.button && !e.ctrlKey
                        }(e) && n.tryStart(e)) {
                        var t = n.createEventFromMouse(e, !0);
                        n.emitter.trigger("pointerdown", t), n.initScrollWatch(t), n.shouldIgnoreMove || document.addEventListener("mousemove", n.handleMouseMove), document.addEventListener("mouseup", n.handleMouseUp)
                    }
                }, this.handleMouseMove = function(e) {
                    var t = n.createEventFromMouse(e);
                    n.recordCoords(t), n.emitter.trigger("pointermove", t)
                }, this.handleMouseUp = function(e) {
                    document.removeEventListener("mousemove", n.handleMouseMove), document.removeEventListener("mouseup", n.handleMouseUp), n.emitter.trigger("pointerup", n.createEventFromMouse(e)), n.cleanup()
                }, this.handleTouchStart = function(e) {
                    if (n.tryStart(e)) {
                        n.isTouchDragging = !0;
                        var t = n.createEventFromTouch(e, !0);
                        n.emitter.trigger("pointerdown", t), n.initScrollWatch(t);
                        var r = e.target;
                        n.shouldIgnoreMove || r.addEventListener("touchmove", n.handleTouchMove), r.addEventListener("touchend", n.handleTouchEnd), r.addEventListener("touchcancel", n.handleTouchEnd), window.addEventListener("scroll", n.handleTouchScroll, !0)
                    }
                }, this.handleTouchMove = function(e) {
                    var t = n.createEventFromTouch(e);
                    n.recordCoords(t), n.emitter.trigger("pointermove", t)
                }, this.handleTouchEnd = function(e) {
                    if (n.isDragging) {
                        var r = e.target;
                        r.removeEventListener("touchmove", n.handleTouchMove), r.removeEventListener("touchend", n.handleTouchEnd), r.removeEventListener("touchcancel", n.handleTouchEnd), window.removeEventListener("scroll", n.handleTouchScroll, !0), n.emitter.trigger("pointerup", n.createEventFromTouch(e)), n.cleanup(), n.isTouchDragging = !1, o++, setTimeout((function() {
                            o--
                        }), t.config.touchMouseIgnoreWait)
                    }
                }, this.handleTouchScroll = function() {
                    n.wasTouchScroll = !0
                }, this.handleScroll = function(e) {
                    if (!n.shouldIgnoreMove) {
                        var t = window.pageXOffset - n.prevScrollX + n.prevPageX,
                            r = window.pageYOffset - n.prevScrollY + n.prevPageY;
                        n.emitter.trigger("pointermove", {
                            origEvent: e,
                            isTouch: n.isTouchDragging,
                            subjectEl: n.subjectEl,
                            pageX: t,
                            pageY: r,
                            deltaX: t - n.origPageX,
                            deltaY: r - n.origPageY
                        })
                    }
                }, this.containerEl = e, this.emitter = new t.EmitterMixin, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), a++ || window.addEventListener("touchmove", c, {
                    passive: !1
                })
            }
            return e.prototype.destroy = function() {
                this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), --a || window.removeEventListener("touchmove", c, {
                    passive: !1
                })
            }, e.prototype.tryStart = function(e) {
                var n = this.querySubjectEl(e),
                    r = e.target;
                return !(!n || this.handleSelector && !t.elementClosest(r, this.handleSelector)) && (this.subjectEl = n, this.downEl = r, this.isDragging = !0, this.wasTouchScroll = !1, !0)
            }, e.prototype.cleanup = function() {
                l = !1, this.isDragging = !1, this.subjectEl = null, this.downEl = null, this.destroyScrollWatch()
            }, e.prototype.querySubjectEl = function(e) {
                return this.selector ? t.elementClosest(e.target, this.selector) : this.containerEl
            }, e.prototype.shouldIgnoreMouse = function() {
                return o || this.isTouchDragging
            }, e.prototype.cancelTouchScroll = function() {
                this.isDragging && (l = !0)
            }, e.prototype.initScrollWatch = function(e) {
                this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
            }, e.prototype.recordCoords = function(e) {
                this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
            }, e.prototype.destroyScrollWatch = function() {
                this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
            }, e.prototype.createEventFromMouse = function(e, t) {
                var n = 0,
                    r = 0;
                return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                    origEvent: e,
                    isTouch: !1,
                    subjectEl: this.subjectEl,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    deltaX: n,
                    deltaY: r
                }
            }, e.prototype.createEventFromTouch = function(e, t) {
                var n, r, i = e.touches,
                    o = 0,
                    a = 0;
                return i && i.length ? (n = i[0].pageX, r = i[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (o = n - this.origPageX, a = r - this.origPageY), {
                    origEvent: e,
                    isTouch: !0,
                    subjectEl: this.subjectEl,
                    pageX: n,
                    pageY: r,
                    deltaX: o,
                    deltaY: a
                }
            }, e
        }();

    function c(e) {
        l && e.preventDefault()
    }
    var d = function() {
            function e() {
                this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
            }
            return e.prototype.start = function(e, t, n) {
                this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
            }, e.prototype.handleMove = function(e, t) {
                this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
            }, e.prototype.setIsVisible = function(e) {
                e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
            }, e.prototype.stop = function(e, t) {
                var n = this,
                    r = function() {
                        n.cleanup(), t()
                    };
                e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
            }, e.prototype.doRevertAnimation = function(e, n) {
                var r = this.mirrorEl,
                    i = this.sourceEl.getBoundingClientRect();
                r.style.transition = "top " + n + "ms,left " + n + "ms", t.applyStyle(r, {
                    left: i.left,
                    top: i.top
                }), t.whenTransitionDone(r, (function() {
                    r.style.transition = "", e()
                }))
            }, e.prototype.cleanup = function() {
                this.mirrorEl && (t.removeElement(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
            }, e.prototype.updateElPosition = function() {
                this.sourceEl && this.isVisible && t.applyStyle(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY
                })
            }, e.prototype.getMirrorEl = function() {
                var e = this.sourceElRect,
                    n = this.mirrorEl;
                return n || ((n = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), n.classList.add("fc-dragging"), t.applyStyle(n, {
                    position: "fixed",
                    zIndex: this.zIndex,
                    visibility: "",
                    boxSizing: "border-box",
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                    right: "auto",
                    bottom: "auto",
                    margin: 0
                }), this.parentNode.appendChild(n)), n
            }, e
        }(),
        g = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.handleScroll = function() {
                    r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange()
                }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r
            }
            return r(t, e), t.prototype.destroy = function() {
                this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
            }, t.prototype.getScrollTop = function() {
                return this.scrollTop
            }, t.prototype.getScrollLeft = function() {
                return this.scrollLeft
            }, t.prototype.setScrollTop = function(e) {
                this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
            }, t.prototype.setScrollLeft = function(e) {
                this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
            }, t.prototype.getClientWidth = function() {
                return this.clientWidth
            }, t.prototype.getClientHeight = function() {
                return this.clientHeight
            }, t.prototype.getScrollWidth = function() {
                return this.scrollWidth
            }, t.prototype.getScrollHeight = function() {
                return this.scrollHeight
            }, t.prototype.handleScrollChange = function() {}, t
        }(t.ScrollController),
        u = function(e) {
            function n(n, r) {
                return e.call(this, new t.ElementScrollController(n), r) || this
            }
            return r(n, e), n.prototype.getEventTarget = function() {
                return this.scrollController.el
            }, n.prototype.computeClientRect = function() {
                return t.computeInnerRect(this.scrollController.el)
            }, n
        }(g),
        h = function(e) {
            function n(n) {
                return e.call(this, new t.WindowScrollController, n) || this
            }
            return r(n, e), n.prototype.getEventTarget = function() {
                return window
            }, n.prototype.computeClientRect = function() {
                return {
                    left: this.scrollLeft,
                    right: this.scrollLeft + this.clientWidth,
                    top: this.scrollTop,
                    bottom: this.scrollTop + this.clientHeight
                }
            }, n.prototype.handleScrollChange = function() {
                this.clientRect = this.computeClientRect()
            }, n
        }(g),
        p = "function" == typeof performance ? performance.now : Date.now,
        v = function() {
            function e() {
                var e = this;
                this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
                    if (e.isAnimating) {
                        var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                        if (t) {
                            var n = p();
                            e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n)
                        } else e.isAnimating = !1
                    }
                }
            }
            return e.prototype.start = function(e, t) {
                this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
            }, e.prototype.handleMove = function(e, t) {
                if (this.isEnabled) {
                    var n = e - window.pageXOffset,
                        r = t - window.pageYOffset,
                        i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                        o = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                    i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(p()))
                }
            }, e.prototype.stop = function() {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                        t[e].destroy()
                    }
                    this.scrollCaches = null
                }
            }, e.prototype.requestAnimation = function(e) {
                this.msSinceRequest = e, requestAnimationFrame(this.animate)
            }, e.prototype.handleSide = function(e, t) {
                var n = e.scrollCache,
                    r = this.edgeThreshold,
                    i = r - e.distance,
                    o = i * i / (r * r) * this.maxVelocity * t,
                    a = 1;
                switch (e.name) {
                    case "left":
                        a = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + o * a);
                        break;
                    case "top":
                        a = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + o * a)
                }
            }, e.prototype.computeBestEdge = function(e, t) {
                for (var n = this.edgeThreshold, r = null, i = 0, o = this.scrollCaches; i < o.length; i++) {
                    var a = o[i],
                        l = a.clientRect,
                        s = e - l.left,
                        c = l.right - e,
                        d = t - l.top,
                        g = l.bottom - t;
                    s >= 0 && c >= 0 && d >= 0 && g >= 0 && (d <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > d) && (r = {
                        scrollCache: a,
                        name: "top",
                        distance: d
                    }), g <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > g) && (r = {
                        scrollCache: a,
                        name: "bottom",
                        distance: g
                    }), s <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > s) && (r = {
                        scrollCache: a,
                        name: "left",
                        distance: s
                    }), c <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > c) && (r = {
                        scrollCache: a,
                        name: "right",
                        distance: c
                    }))
                }
                return r
            }, e.prototype.buildCaches = function() {
                return this.queryScrollEls().map((function(e) {
                    return e === window ? new h(!1) : new u(e, !1)
                }))
            }, e.prototype.queryScrollEls = function() {
                for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                    var r = n[t];
                    "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
                }
                return e
            }, e
        }(),
        f = function(e) {
            function n(n) {
                var r = e.call(this, n) || this;
                r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function(e) {
                    r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, t.preventSelection(document.body), t.preventContextMenu(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.pointer.shouldIgnoreMove || (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e)))
                }, r.onPointerMove = function(e) {
                    if (r.isInteracting) {
                        if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                            var t = r.minDistance,
                                n = e.deltaX,
                                i = e.deltaY;
                            n * n + i * i >= t * t && r.handleDistanceSurpassed(e)
                        }
                        r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e))
                    }
                }, r.onPointerUp = function(e) {
                    r.isInteracting && (r.isInteracting = !1, t.allowSelection(document.body), t.allowContextMenu(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null))
                };
                var i = r.pointer = new s(n);
                return i.emitter.on("pointerdown", r.onPointerDown), i.emitter.on("pointermove", r.onPointerMove), i.emitter.on("pointerup", r.onPointerUp), r.mirror = new d, r.autoScroller = new v, r
            }
            return r(n, e), n.prototype.destroy = function() {
                this.pointer.destroy()
            }, n.prototype.startDelay = function(e) {
                var t = this;
                "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((function() {
                    t.delayTimeoutId = null, t.handleDelayEnd(e)
                }), this.delay) : this.handleDelayEnd(e)
            }, n.prototype.handleDelayEnd = function(e) {
                this.isDelayEnded = !0, this.tryStartDrag(e)
            }, n.prototype.handleDistanceSurpassed = function(e) {
                this.isDistanceSurpassed = !0, this.tryStartDrag(e)
            }, n.prototype.tryStartDrag = function(e) {
                this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
            }, n.prototype.tryStopDrag = function(e) {
                this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
            }, n.prototype.stopDrag = function(e) {
                this.isDragging = !1, this.emitter.trigger("dragend", e)
            }, n.prototype.setIgnoreMove = function(e) {
                this.pointer.shouldIgnoreMove = e
            }, n.prototype.setMirrorIsVisible = function(e) {
                this.mirror.setIsVisible(e)
            }, n.prototype.setMirrorNeedsRevert = function(e) {
                this.mirrorNeedsRevert = e
            }, n.prototype.setAutoScrollEnabled = function(e) {
                this.autoScroller.isEnabled = e
            }, n
        }(t.ElementDragging),
        E = function() {
            function e(e) {
                this.origRect = t.computeRect(e), this.scrollCaches = t.getClippingParents(e).map((function(e) {
                    return new u(e, !0)
                }))
            }
            return e.prototype.destroy = function() {
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
            }, e.prototype.computeLeft = function() {
                for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft()
                }
                return e
            }, e.prototype.computeTop = function() {
                for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop()
                }
                return e
            }, e.prototype.isWithinClipping = function(e, n) {
                for (var r, i, o = {
                        left: e,
                        top: n
                    }, a = 0, l = this.scrollCaches; a < l.length; a++) {
                    var s = l[a];
                    if (r = s.getEventTarget(), i = void 0, "HTML" !== (i = r.tagName) && "BODY" !== i && !t.pointInsideRect(o, s.clientRect)) return !1
                }
                return !0
            }, e
        }();
    var m = function() {
        function e(e, n) {
            var r = this;
            this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(e) {
                var t = r.dragging;
                r.initialHit = null, r.movingHit = null, r.finalHit = null, r.prepareHits(), r.processFirstCoord(e), r.initialHit || !r.requireInitial ? (t.setIgnoreMove(!1), r.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
            }, this.handleDragStart = function(e) {
                r.emitter.trigger("dragstart", e), r.handleMove(e, !0)
            }, this.handleDragMove = function(e) {
                r.emitter.trigger("dragmove", e), r.handleMove(e)
            }, this.handlePointerUp = function(e) {
                r.releaseHits(), r.emitter.trigger("pointerup", e)
            }, this.handleDragEnd = function(e) {
                r.movingHit && r.emitter.trigger("hitupdate", null, !0, e), r.finalHit = r.movingHit, r.movingHit = null, r.emitter.trigger("dragend", e)
            }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new t.EmitterMixin
        }
        return e.prototype.processFirstCoord = function(e) {
            var n, r = {
                    left: e.pageX,
                    top: e.pageY
                },
                i = r,
                o = e.subjectEl;
            o !== document && (n = t.computeRect(o), i = t.constrainPoint(i, n));
            var a = this.initialHit = this.queryHitForOffset(i.left, i.top);
            if (a) {
                if (this.useSubjectCenter && n) {
                    var l = t.intersectRects(n, a.rect);
                    l && (i = t.getRectCenter(l))
                }
                this.coordAdjust = t.diffPoints(i, r)
            } else this.coordAdjust = {
                left: 0,
                top: 0
            }
        }, e.prototype.handleMove = function(e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            !t && S(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
        }, e.prototype.prepareHits = function() {
            this.offsetTrackers = t.mapHash(this.droppableStore, (function(e) {
                return e.component.buildPositionCaches(), new E(e.el)
            }))
        }, e.prototype.releaseHits = function() {
            var e = this.offsetTrackers;
            for (var t in e) e[t].destroy();
            this.offsetTrackers = {}
        }, e.prototype.queryHitForOffset = function(e, n) {
            var r = this.droppableStore,
                i = this.offsetTrackers,
                o = null;
            for (var a in r) {
                var l = r[a].component,
                    s = i[a];
                if (s.isWithinClipping(e, n)) {
                    var c = s.computeLeft(),
                        d = s.computeTop(),
                        g = e - c,
                        u = n - d,
                        h = s.origRect,
                        p = h.right - h.left,
                        v = h.bottom - h.top;
                    if (g >= 0 && g < p && u >= 0 && u < v) {
                        var f = l.queryHit(g, u, p, v);
                        !f || l.props.dateProfile && !t.rangeContainsRange(l.props.dateProfile.activeRange, f.dateSpan.range) || o && !(f.layer > o.layer) || (f.rect.left += c, f.rect.right += c, f.rect.top += d, f.rect.bottom += d, o = f)
                    }
                }
            }
            return o
        }, e
    }();

    function S(e, n) {
        return !e && !n || Boolean(e) === Boolean(n) && t.isDateSpansEqual(e.dateSpan, n.dateSpan)
    }
    var y = function(e) {
            function n(n) {
                var r = e.call(this, n) || this;
                r.handlePointerDown = function(e) {
                    var t = r.dragging;
                    t.setIgnoreMove(!r.component.isValidDateDownEl(t.pointer.downEl))
                }, r.handleDragEnd = function(e) {
                    var t = r.component.context,
                        n = t.calendar,
                        i = t.view;
                    if (!r.dragging.pointer.wasTouchScroll) {
                        var o = r.hitDragging,
                            a = o.initialHit,
                            l = o.finalHit;
                        a && l && S(a, l) && n.triggerDateClick(a.dateSpan, a.dayEl, i, e.origEvent)
                    }
                };
                var i = n.component;
                r.dragging = new f(i.el), r.dragging.autoScroller.isEnabled = !1;
                var o = r.hitDragging = new m(r.dragging, t.interactionSettingsToStore(n));
                return o.emitter.on("pointerdown", r.handlePointerDown), o.emitter.on("dragend", r.handleDragEnd), r
            }
            return r(n, e), n.prototype.destroy = function() {
                this.dragging.destroy()
            }, n
        }(t.Interaction),
        D = function(e) {
            function n(n) {
                var r = e.call(this, n) || this;
                r.dragSelection = null, r.handlePointerDown = function(e) {
                    var t = r,
                        n = t.component,
                        i = t.dragging,
                        o = n.context.options.selectable && n.isValidDateDownEl(e.origEvent.target);
                    i.setIgnoreMove(!o), i.delay = e.isTouch ? function(e) {
                        var t = e.context.options,
                            n = t.selectLongPressDelay;
                        null == n && (n = t.longPressDelay);
                        return n
                    }(n) : null
                }, r.handleDragStart = function(e) {
                    r.component.context.calendar.unselect(e)
                }, r.handleHitUpdate = function(e, n) {
                    var o = r.component.context.calendar,
                        a = null,
                        l = !1;
                    e && ((a = function(e, n, r) {
                        var o = e.dateSpan,
                            a = n.dateSpan,
                            l = [o.range.start, o.range.end, a.range.start, a.range.end];
                        l.sort(t.compareNumbers);
                        for (var s = {}, c = 0, d = r; c < d.length; c++) {
                            var g = (0, d[c])(e, n);
                            if (!1 === g) return null;
                            g && i(s, g)
                        }
                        return s.range = {
                            start: l[0],
                            end: l[3]
                        }, s.allDay = o.allDay, s
                    }(r.hitDragging.initialHit, e, o.pluginSystem.hooks.dateSelectionTransformers)) && r.component.isDateSelectionValid(a) || (l = !0, a = null)), a ? o.dispatch({
                        type: "SELECT_DATES",
                        selection: a
                    }) : n || o.dispatch({
                        type: "UNSELECT_DATES"
                    }), l ? t.disableCursor() : t.enableCursor(), n || (r.dragSelection = a)
                }, r.handlePointerUp = function(e) {
                    r.dragSelection && (r.component.context.calendar.triggerDateSelect(r.dragSelection, e), r.dragSelection = null)
                };
                var o = n.component,
                    a = o.context.options,
                    l = r.dragging = new f(o.el);
                l.touchScrollAllowed = !1, l.minDistance = a.selectMinDistance || 0, l.autoScroller.isEnabled = a.dragScroll;
                var s = r.hitDragging = new m(r.dragging, t.interactionSettingsToStore(n));
                return s.emitter.on("pointerdown", r.handlePointerDown), s.emitter.on("dragstart", r.handleDragStart), s.emitter.on("hitupdate", r.handleHitUpdate), s.emitter.on("pointerup", r.handlePointerUp), r
            }
            return r(n, e), n.prototype.destroy = function() {
                this.dragging.destroy()
            }, n
        }(t.Interaction);
    var w = function(e) {
        function n(r) {
            var o = e.call(this, r) || this;
            o.subjectSeg = null, o.isDragging = !1, o.eventRange = null, o.relevantEvents = null, o.receivingCalendar = null, o.validMutation = null, o.mutatedRelevantEvents = null, o.handlePointerDown = function(e) {
                var n = e.origEvent.target,
                    r = o,
                    i = r.component,
                    a = r.dragging,
                    l = a.mirror,
                    s = i.context.options,
                    c = i.context.calendar,
                    d = o.subjectSeg = t.getElSeg(e.subjectEl),
                    g = (o.eventRange = d.eventRange).instance.instanceId;
                o.relevantEvents = t.getRelevantEvents(c.state.eventStore, g), a.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, a.delay = e.isTouch && g !== i.props.eventSelection ? function(e) {
                    var t = e.context.options,
                        n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(i) : null, l.parentNode = c.el, l.revertDuration = s.dragRevertDuration;
                var u = i.isValidSegDownEl(n) && !t.elementClosest(n, ".fc-resizer");
                a.setIgnoreMove(!u), o.isDragging = u && e.subjectEl.classList.contains("fc-draggable")
            }, o.handleDragStart = function(e) {
                var n = o.component.context,
                    r = n.calendar,
                    i = o.eventRange,
                    a = i.instance.instanceId;
                e.isTouch ? a !== o.component.props.eventSelection && r.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: a
                }) : r.dispatch({
                    type: "UNSELECT_EVENT"
                }), o.isDragging && (r.unselect(e), r.publiclyTrigger("eventDragStart", [{
                    el: o.subjectSeg.el,
                    event: new t.EventApi(r, i.def, i.instance),
                    jsEvent: e.origEvent,
                    view: n.view
                }]))
            }, o.handleHitUpdate = function(e, n) {
                if (o.isDragging) {
                    var r = o.relevantEvents,
                        i = o.hitDragging.initialHit,
                        a = o.component.context.calendar,
                        l = null,
                        s = null,
                        c = null,
                        d = !1,
                        g = {
                            affectedEvents: r,
                            mutatedEvents: t.createEmptyEventStore(),
                            isEvent: !0,
                            origSeg: o.subjectSeg
                        };
                    if (e) {
                        var u = e.component;
                        l = u.context.calendar;
                        var h = u.context.options;
                        a === l || h.editable && h.droppable ? (s = function(e, n, r) {
                            var i = e.dateSpan,
                                o = n.dateSpan,
                                a = i.range.start,
                                l = o.range.start,
                                s = {};
                            i.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = n.component.context.options.allDayMaintainDuration, o.allDay && (a = t.startOfDay(a)));
                            var c = t.diffDates(a, l, e.component.context.dateEnv, e.component === n.component ? e.component.largeUnit : null);
                            c.milliseconds && (s.allDay = !1);
                            for (var d = {
                                    datesDelta: c,
                                    standardProps: s
                                }, g = 0, u = r; g < u.length; g++) {
                                (0, u[g])(d, e, n)
                            }
                            return d
                        }(i, e, l.pluginSystem.hooks.eventDragMutationMassagers)) && (c = t.applyMutationToEventStore(r, l.eventUiBases, s, l), g.mutatedEvents = c, u.isInteractionValid(g) || (d = !0, s = null, c = null, g.mutatedEvents = t.createEmptyEventStore())) : l = null
                    }
                    o.displayDrag(l, g), d ? t.disableCursor() : t.enableCursor(), n || (a === l && S(i, e) && (s = null), o.dragging.setMirrorNeedsRevert(!s), o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-mirror")), o.receivingCalendar = l, o.validMutation = s, o.mutatedRelevantEvents = c)
                }
            }, o.handlePointerUp = function() {
                o.isDragging || o.cleanup()
            }, o.handleDragEnd = function(e) {
                if (o.isDragging) {
                    var n = o.component.context,
                        r = n.calendar,
                        a = n.view,
                        l = o,
                        s = l.receivingCalendar,
                        c = l.validMutation,
                        d = o.eventRange.def,
                        g = o.eventRange.instance,
                        u = new t.EventApi(r, d, g),
                        h = o.relevantEvents,
                        p = o.mutatedRelevantEvents,
                        v = o.hitDragging.finalHit;
                    if (o.clearDrag(), r.publiclyTrigger("eventDragStop", [{
                            el: o.subjectSeg.el,
                            event: u,
                            jsEvent: e.origEvent,
                            view: a
                        }]), c) {
                        if (s === r) {
                            r.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: p
                            });
                            for (var f = {}, E = 0, m = r.pluginSystem.hooks.eventDropTransformers; E < m.length; E++) {
                                var S = m[E];
                                i(f, S(c, r))
                            }
                            var y = i({}, f, {
                                el: e.subjectEl,
                                delta: c.datesDelta,
                                oldEvent: u,
                                event: new t.EventApi(r, p.defs[d.defId], g ? p.instances[g.instanceId] : null),
                                revert: function() {
                                    r.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: h
                                    })
                                },
                                jsEvent: e.origEvent,
                                view: a
                            });
                            r.publiclyTrigger("eventDrop", [y])
                        } else if (s) {
                            r.publiclyTrigger("eventLeave", [{
                                draggedEl: e.subjectEl,
                                event: u,
                                view: a
                            }]), r.dispatch({
                                type: "REMOVE_EVENT_INSTANCES",
                                instances: o.mutatedRelevantEvents.instances
                            }), s.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: o.mutatedRelevantEvents
                            }), e.isTouch && s.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: g.instanceId
                            });
                            var D = i({}, s.buildDatePointApi(v.dateSpan), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: v.component
                            });
                            s.publiclyTrigger("drop", [D]), s.publiclyTrigger("eventReceive", [{
                                draggedEl: e.subjectEl,
                                event: new t.EventApi(s, p.defs[d.defId], p.instances[g.instanceId]),
                                view: v.component
                            }])
                        }
                    } else r.publiclyTrigger("_noEventDrop")
                }
                o.cleanup()
            };
            var a = o.component,
                l = a.context.options,
                s = o.dragging = new f(a.el);
            s.pointer.selector = n.SELECTOR, s.touchScrollAllowed = !1, s.autoScroller.isEnabled = l.dragScroll;
            var c = o.hitDragging = new m(o.dragging, t.interactionSettingsStore);
            return c.useSubjectCenter = r.useEventCenter, c.emitter.on("pointerdown", o.handlePointerDown), c.emitter.on("dragstart", o.handleDragStart), c.emitter.on("hitupdate", o.handleHitUpdate), c.emitter.on("pointerup", o.handlePointerUp), c.emitter.on("dragend", o.handleDragEnd), o
        }
        return r(n, e), n.prototype.destroy = function() {
            this.dragging.destroy()
        }, n.prototype.displayDrag = function(e, n) {
            var r = this.component.context.calendar,
                i = this.receivingCalendar;
            i && i !== e && (i === r ? i.dispatch({
                type: "SET_EVENT_DRAG",
                state: {
                    affectedEvents: n.affectedEvents,
                    mutatedEvents: t.createEmptyEventStore(),
                    isEvent: !0,
                    origSeg: n.origSeg
                }
            }) : i.dispatch({
                type: "UNSET_EVENT_DRAG"
            })), e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: n
            })
        }, n.prototype.clearDrag = function() {
            var e = this.component.context.calendar,
                t = this.receivingCalendar;
            t && t.dispatch({
                type: "UNSET_EVENT_DRAG"
            }), e !== t && e.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
        }, n.prototype.cleanup = function() {
            this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingCalendar = null, this.validMutation = null, this.mutatedRelevantEvents = null
        }, n.SELECTOR = ".fc-draggable, .fc-resizable", n
    }(t.Interaction);
    var T = function(e) {
        function n(n) {
            var r = e.call(this, n) || this;
            r.draggingSeg = null, r.eventRange = null, r.relevantEvents = null, r.validMutation = null, r.mutatedRelevantEvents = null, r.handlePointerDown = function(e) {
                var t = r.component,
                    n = r.querySeg(e),
                    i = r.eventRange = n.eventRange;
                r.dragging.minDistance = t.context.options.eventDragMinDistance, r.dragging.setIgnoreMove(!r.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && r.component.props.eventSelection !== i.instance.instanceId)
            }, r.handleDragStart = function(e) {
                var n = r.component.context,
                    i = n.calendar,
                    o = n.view,
                    a = r.eventRange;
                r.relevantEvents = t.getRelevantEvents(i.state.eventStore, r.eventRange.instance.instanceId), r.draggingSeg = r.querySeg(e), i.unselect(), i.publiclyTrigger("eventResizeStart", [{
                    el: r.draggingSeg.el,
                    event: new t.EventApi(i, a.def, a.instance),
                    jsEvent: e.origEvent,
                    view: o
                }])
            }, r.handleHitUpdate = function(e, n, o) {
                var a = r.component.context.calendar,
                    l = r.relevantEvents,
                    s = r.hitDragging.initialHit,
                    c = r.eventRange.instance,
                    d = null,
                    g = null,
                    u = !1,
                    h = {
                        affectedEvents: l,
                        mutatedEvents: t.createEmptyEventStore(),
                        isEvent: !0,
                        origSeg: r.draggingSeg
                    };
                e && (d = function(e, n, r, o, a) {
                    for (var l = e.component.context.dateEnv, s = e.dateSpan.range.start, c = n.dateSpan.range.start, d = t.diffDates(s, c, l, e.component.largeUnit), g = {}, u = 0, h = a; u < h.length; u++) {
                        var p = (0, h[u])(e, n);
                        if (!1 === p) return null;
                        p && i(g, p)
                    }
                    if (r) {
                        if (l.add(o.start, d) < o.end) return g.startDelta = d, g
                    } else if (l.add(o.end, d) > o.start) return g.endDelta = d, g;
                    return null
                }(s, e, o.subjectEl.classList.contains("fc-start-resizer"), c.range, a.pluginSystem.hooks.eventResizeJoinTransforms)), d && (g = t.applyMutationToEventStore(l, a.eventUiBases, d, a), h.mutatedEvents = g, r.component.isInteractionValid(h) || (u = !0, d = null, g = null, h.mutatedEvents = null)), g ? a.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: h
                }) : a.dispatch({
                    type: "UNSET_EVENT_RESIZE"
                }), u ? t.disableCursor() : t.enableCursor(), n || (d && S(s, e) && (d = null), r.validMutation = d, r.mutatedRelevantEvents = g)
            }, r.handleDragEnd = function(e) {
                var n = r.component.context,
                    i = n.calendar,
                    o = n.view,
                    a = r.eventRange.def,
                    l = r.eventRange.instance,
                    s = new t.EventApi(i, a, l),
                    c = r.relevantEvents,
                    d = r.mutatedRelevantEvents;
                i.publiclyTrigger("eventResizeStop", [{
                    el: r.draggingSeg.el,
                    event: s,
                    jsEvent: e.origEvent,
                    view: o
                }]), r.validMutation ? (i.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: d
                }), i.publiclyTrigger("eventResize", [{
                    el: r.draggingSeg.el,
                    startDelta: r.validMutation.startDelta || t.createDuration(0),
                    endDelta: r.validMutation.endDelta || t.createDuration(0),
                    prevEvent: s,
                    event: new t.EventApi(i, d.defs[a.defId], l ? d.instances[l.instanceId] : null),
                    revert: function() {
                        i.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: c
                        })
                    },
                    jsEvent: e.origEvent,
                    view: o
                }])) : i.publiclyTrigger("_noEventResize"), r.draggingSeg = null, r.relevantEvents = null, r.validMutation = null
            };
            var o = n.component,
                a = r.dragging = new f(o.el);
            a.pointer.selector = ".fc-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = o.context.options.dragScroll;
            var l = r.hitDragging = new m(r.dragging, t.interactionSettingsToStore(n));
            return l.emitter.on("pointerdown", r.handlePointerDown), l.emitter.on("dragstart", r.handleDragStart), l.emitter.on("hitupdate", r.handleHitUpdate), l.emitter.on("dragend", r.handleDragEnd), r
        }
        return r(n, e), n.prototype.destroy = function() {
            this.dragging.destroy()
        }, n.prototype.querySeg = function(e) {
            return t.getElSeg(t.elementClosest(e.subjectEl, this.component.fgSegSelector))
        }, n
    }(t.Interaction);
    var M = function() {
            function e(e) {
                var n = this;
                this.isRecentPointerDateSelect = !1, this.onSelect = function(e) {
                    e.jsEvent && (n.isRecentPointerDateSelect = !0)
                }, this.onDocumentPointerUp = function(e) {
                    var r = n,
                        i = r.calendar,
                        o = r.documentPointer,
                        a = i.state;
                    if (!o.wasTouchScroll) {
                        if (a.dateSelection && !n.isRecentPointerDateSelect) {
                            var l = i.viewOpt("unselectAuto"),
                                s = i.viewOpt("unselectCancel");
                            !l || l && t.elementClosest(o.downEl, s) || i.unselect(e)
                        }
                        a.eventSelection && !t.elementClosest(o.downEl, w.SELECTOR) && i.dispatch({
                            type: "UNSELECT_EVENT"
                        })
                    }
                    n.isRecentPointerDateSelect = !1
                }, this.calendar = e;
                var r = this.documentPointer = new s(document);
                r.shouldIgnoreMove = !0, r.shouldWatchScroll = !1, r.emitter.on("pointerup", this.onDocumentPointerUp), e.on("select", this.onSelect)
            }
            return e.prototype.destroy = function() {
                this.calendar.off("select", this.onSelect), this.documentPointer.destroy()
            }, e
        }(),
        b = function() {
            function e(e, n) {
                var r = this;
                this.receivingCalendar = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function(e) {
                    r.dragMeta = r.buildDragMeta(e.subjectEl)
                }, this.handleHitUpdate = function(e, n, o) {
                    var a = r.hitDragging.dragging,
                        l = null,
                        s = null,
                        c = !1,
                        d = {
                            affectedEvents: t.createEmptyEventStore(),
                            mutatedEvents: t.createEmptyEventStore(),
                            isEvent: r.dragMeta.create,
                            origSeg: null
                        };
                    e && (l = e.component.context.calendar, r.canDropElOnCalendar(o.subjectEl, l) && (s = function(e, n, r) {
                        for (var o = i({}, n.leftoverProps), a = 0, l = r.pluginSystem.hooks.externalDefTransforms; a < l.length; a++) {
                            var s = l[a];
                            i(o, s(e, n))
                        }
                        var c = t.parseEventDef(o, n.sourceId, e.allDay, r.opt("forceEventDuration") || Boolean(n.duration), r),
                            d = e.range.start;
                        e.allDay && n.startTime && (d = r.dateEnv.add(d, n.startTime));
                        var g = n.duration ? r.dateEnv.add(d, n.duration) : r.getDefaultEventEnd(e.allDay, d),
                            u = t.createEventInstance(c.defId, {
                                start: d,
                                end: g
                            });
                        return {
                            def: c,
                            instance: u
                        }
                    }(e.dateSpan, r.dragMeta, l), d.mutatedEvents = t.eventTupleToStore(s), (c = !t.isInteractionValid(d, l)) && (d.mutatedEvents = t.createEmptyEventStore(), s = null))), r.displayDrag(l, d), a.setMirrorIsVisible(n || !s || !document.querySelector(".fc-mirror")), c ? t.disableCursor() : t.enableCursor(), n || (a.setMirrorNeedsRevert(!s), r.receivingCalendar = l, r.droppableEvent = s)
                }, this.handleDragEnd = function(e) {
                    var n = r,
                        o = n.receivingCalendar,
                        a = n.droppableEvent;
                    if (r.clearDrag(), o && a) {
                        var l = r.hitDragging.finalHit,
                            s = l.component.context.view,
                            c = r.dragMeta,
                            d = i({}, o.buildDatePointApi(l.dateSpan), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: s
                            });
                        o.publiclyTrigger("drop", [d]), c.create && (o.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: t.eventTupleToStore(a)
                        }), e.isTouch && o.dispatch({
                            type: "SELECT_EVENT",
                            eventInstanceId: a.instance.instanceId
                        }), o.publiclyTrigger("eventReceive", [{
                            draggedEl: e.subjectEl,
                            event: new t.EventApi(o, a.def, a.instance),
                            view: s
                        }]))
                    }
                    r.receivingCalendar = null, r.droppableEvent = null
                };
                var o = this.hitDragging = new m(e, t.interactionSettingsStore);
                o.requireInitial = !1, o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = n
            }
            return e.prototype.buildDragMeta = function(e) {
                return "object" == typeof this.suppliedDragMeta ? t.parseDragMeta(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? t.parseDragMeta(this.suppliedDragMeta(e)) : (n = function(e, n) {
                    var r = t.config.dataAttrPrefix,
                        i = (r ? r + "-" : "") + n;
                    return e.getAttribute("data-" + i) || ""
                }(e, "event"), r = n ? JSON.parse(n) : {
                    create: !1
                }, t.parseDragMeta(r));
                var n, r
            }, e.prototype.displayDrag = function(e, t) {
                var n = this.receivingCalendar;
                n && n !== e && n.dispatch({
                    type: "UNSET_EVENT_DRAG"
                }), e && e.dispatch({
                    type: "SET_EVENT_DRAG",
                    state: t
                })
            }, e.prototype.clearDrag = function() {
                this.receivingCalendar && this.receivingCalendar.dispatch({
                    type: "UNSET_EVENT_DRAG"
                })
            }, e.prototype.canDropElOnCalendar = function(e, n) {
                var r = n.opt("dropAccept");
                return "function" == typeof r ? r(e) : "string" != typeof r || !r || Boolean(t.elementMatches(e, r))
            }, e
        }();
    t.config.dataAttrPrefix = "";
    var C = function() {
            function e(e, n) {
                var r = this;
                void 0 === n && (n = {}), this.handlePointerDown = function(e) {
                    var n = r.dragging,
                        i = r.settings,
                        o = i.minDistance,
                        a = i.longPressDelay;
                    n.minDistance = null != o ? o : e.isTouch ? 0 : t.globalDefaults.eventDragMinDistance, n.delay = e.isTouch ? null != a ? a : t.globalDefaults.longPressDelay : 0
                }, this.handleDragStart = function(e) {
                    e.isTouch && r.dragging.delay && e.subjectEl.classList.contains("fc-event") && r.dragging.mirror.getMirrorEl().classList.add("fc-selected")
                }, this.settings = n;
                var i = this.dragging = new f(e);
                i.touchScrollAllowed = !1, null != n.itemSelector && (i.pointer.selector = n.itemSelector), null != n.appendTo && (i.mirror.parentNode = n.appendTo), i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), new b(i, n.eventData)
            }
            return e.prototype.destroy = function() {
                this.dragging.destroy()
            }, e
        }(),
        R = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(e) {
                    n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
                }, n.handlePointerMove = function(e) {
                    n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
                }, n.handlePointerUp = function(e) {
                    n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
                };
                var r = n.pointer = new s(t);
                return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n
            }
            return r(t, e), t.prototype.destroy = function() {
                this.pointer.destroy()
            }, t.prototype.setIgnoreMove = function(e) {
                this.shouldIgnoreMove = e
            }, t.prototype.setMirrorIsVisible = function(e) {
                if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
                else {
                    var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                    t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
                }
            }, t
        }(t.ElementDragging),
        I = function() {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
                var r = this.dragging = new R(n);
                "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new b(r, t.eventData)
            }
            return e.prototype.destroy = function() {
                this.dragging.destroy()
            }, e
        }(),
        P = t.createPlugin({
            componentInteractions: [y, D, w, T],
            calendarInteractions: [M],
            elementDraggingImpl: f
        });
    e.Draggable = C, e.FeaturefulElementDragging = f, e.PointerDragging = s, e.ThirdPartyDraggable = I, e.default = P, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));