! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 11)
}([, , function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && t.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", t)
    }
}, , function(t, e, i) {
    "use strict";
    (function(e) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
    }).call(this, i(5))
}, function(t, e, i) {
    "use strict";
    var n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (n = window)
    }
    t.exports = n
}, , , , , , function(t, e, i) {
    t.exports = i(12)
}, function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = r(i(2)),
        a = i(4),
        s = r(i(13));

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = a.window.jarallax;
    if (a.window.jarallax = s.default, a.window.jarallax.noConflict = function() {
            return a.window.jarallax = l, this
        }, void 0 !== a.jQuery) {
        var c = function() {
            var t = arguments || [];
            Array.prototype.unshift.call(t, this);
            var e = s.default.apply(a.window, t);
            return "object" !== (void 0 === e ? "undefined" : n(e)) ? e : this
        };
        c.constructor = s.default.constructor;
        var u = a.jQuery.fn.jarallax;
        a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function() {
            return a.jQuery.fn.jarallax = u, this
        }
    }(0, o.default)(function() {
        (0, s.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function(t, e, i) {
    "use strict";
    (function(t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                return function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var i = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                        } catch (t) {
                            o = !0, a = t
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            o = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }(),
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            s = c(i(2)),
            r = c(i(14)),
            l = i(4);

        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge/") > -1,
            d = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            m = function() {
                for (var t = "transform WebkitTransform MozTransform".split(" "), e = document.createElement("div"), i = 0; i < t.length; i++)
                    if (e && void 0 !== e.style[t[i]]) return t[i];
                return !1
            }(),
            p = void 0;
        var h = void 0,
            f = void 0,
            g = void 0,
            y = !1,
            v = !1;

        function b(t) {
            h = l.window.innerWidth || document.documentElement.clientWidth, d ? (!p && document.body && ((p = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(p)), f = (p ? p.clientHeight : 0) || l.window.innerHeight || document.documentElement.clientHeight) : f = l.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === t ? "undefined" : a(t)) || "load" !== t.type && "dom-loaded" !== t.type || (y = !0)
        }
        b(), l.window.addEventListener("resize", b), l.window.addEventListener("orientationchange", b), l.window.addEventListener("load", b), (0, s.default)(function() {
            b({
                type: "dom-loaded"
            })
        });
        var x = [],
            w = !1;

        function A() {
            if (x.length) {
                g = void 0 !== l.window.pageYOffset ? l.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var t = y || !w || w.width !== h || w.height !== f,
                    e = v || t || !w || w.y !== g;
                y = !1, v = !1, (t || e) && (x.forEach(function(i) {
                    t && i.onResize(), e && i.onScroll()
                }), w = {
                    width: h,
                    height: f,
                    y: g
                }), (0, r.default)(A)
            }
        }
        var $ = !!t.ResizeObserver && new t.ResizeObserver(function(t) {
                t && t.length && (0, r.default)(function() {
                    t.forEach(function(t) {
                        t.target && t.target.jarallax && (y || t.target.jarallax.onResize(), v = !0)
                    })
                })
            }),
            S = 0,
            j = function() {
                function t(e, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var o = this;
                    o.instanceID = S++, o.$item = e, o.defaults = {
                        type: "scroll",
                        speed: .5,
                        imgSrc: null,
                        imgElement: ".jarallax-img",
                        imgSize: "cover",
                        imgPosition: "50% 50%",
                        imgRepeat: "no-repeat",
                        keepImg: !1,
                        elementInViewport: null,
                        zIndex: -100,
                        disableParallax: !1,
                        disableVideo: !1,
                        automaticResize: !0,
                        videoSrc: null,
                        videoStartTime: 0,
                        videoEndTime: 0,
                        videoVolume: 0,
                        videoLoop: !0,
                        videoPlayOnlyVisible: !0,
                        videoLazyLoading: !0,
                        onScroll: null,
                        onInit: null,
                        onDestroy: null,
                        onCoverImage: null
                    };
                    var s = o.$item.dataset || {},
                        r = {};
                    if (Object.keys(s).forEach(function(t) {
                            var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                            e && void 0 !== o.defaults[e] && (r[e] = s[t])
                        }), o.options = o.extend({}, o.defaults, r, i), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function(t) {
                            "true" === o.options[t] ? o.options[t] = !0 : "false" === o.options[t] && (o.options[t] = !1)
                        }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                        var l = o.options.disableParallax;
                        o.options.disableParallax = function() {
                            return l.test(navigator.userAgent)
                        }
                    }
                    if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function() {
                            return !1
                        }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                        var c = o.options.disableVideo;
                        o.options.disableVideo = function() {
                            return c.test(navigator.userAgent)
                        }
                    }
                    "function" != typeof o.options.disableVideo && (o.options.disableVideo = function() {
                        return !1
                    });
                    var u = o.options.elementInViewport;
                    u && "object" === (void 0 === u ? "undefined" : a(u)) && void 0 !== u.length && (u = n(u, 1)[0]);
                    u instanceof Element || (u = null), o.options.elementInViewport = u, o.image = {
                        src: o.options.imgSrc || null,
                        $container: null,
                        useImgTag: !1,
                        position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                    }, o.initImg() && o.canInitParallax() && o.init()
                }
                return o(t, [{
                    key: "css",
                    value: function(t, e) {
                        return "string" == typeof e ? l.window.getComputedStyle(t).getPropertyValue(e) : (e.transform && m && (e[m] = e.transform), Object.keys(e).forEach(function(i) {
                            t.style[i] = e[i]
                        }), t)
                    }
                }, {
                    key: "extend",
                    value: function(t) {
                        var e = arguments;
                        return t = t || {}, Object.keys(arguments).forEach(function(i) {
                            e[i] && Object.keys(e[i]).forEach(function(n) {
                                t[n] = e[i][n]
                            })
                        }), t
                    }
                }, {
                    key: "getWindowData",
                    value: function() {
                        return {
                            width: h,
                            height: f,
                            y: g
                        }
                    }
                }, {
                    key: "initImg",
                    value: function() {
                        var t = this.options.imgElement;
                        return t && "string" == typeof t && (t = this.$item.querySelector(t)), t instanceof Element || (this.options.imgSrc ? (t = new Image).src = this.options.imgSrc : t = null), t && (this.options.keepImg ? this.image.$item = t.cloneNode(!0) : (this.image.$item = t, this.image.$itemParent = t.parentNode), this.image.useImgTag = !0), !!this.image.$item || (null === this.image.src && (this.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", this.image.bgImage = this.css(this.$item, "background-image")), !(!this.image.bgImage || "none" === this.image.bgImage))
                    }
                }, {
                    key: "canInitParallax",
                    value: function() {
                        return m && !this.options.disableParallax()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                pointerEvents: "none"
                            },
                            e = {};
                        if (!this.options.keepImg) {
                            var i = this.$item.getAttribute("style");
                            if (i && this.$item.setAttribute("data-jarallax-original-styles", i), this.image.useImgTag) {
                                var n = this.image.$item.getAttribute("style");
                                n && this.image.$item.setAttribute("data-jarallax-original-styles", n)
                            }
                        }
                        if ("static" === this.css(this.$item, "position") && this.css(this.$item, {
                                position: "relative"
                            }), "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {
                                zIndex: 0
                            }), this.image.$container = document.createElement("div"), this.css(this.image.$container, t), this.css(this.image.$container, {
                                "z-index": this.options.zIndex
                            }), u && this.css(this.image.$container, {
                                opacity: .9999
                            }), this.image.$container.setAttribute("id", "jarallax-container-" + this.instanceID), this.$item.appendChild(this.image.$container), this.image.useImgTag ? e = this.extend({
                                "object-fit": this.options.imgSize,
                                "object-position": this.options.imgPosition,
                                "font-family": "object-fit: " + this.options.imgSize + "; object-position: " + this.options.imgPosition + ";",
                                "max-width": "none"
                            }, t, e) : (this.image.$item = document.createElement("div"), this.image.src && (e = this.extend({
                                "background-position": this.options.imgPosition,
                                "background-size": this.options.imgSize,
                                "background-repeat": this.options.imgRepeat,
                                "background-image": this.image.bgImage || 'url("' + this.image.src + '")'
                            }, t, e))), "opacity" !== this.options.type && "scale" !== this.options.type && "scale-opacity" !== this.options.type && 1 !== this.options.speed || (this.image.position = "absolute"), "fixed" === this.image.position)
                            for (var o = 0, a = this.$item; null !== a && a !== document && 0 === o;) {
                                var s = this.css(a, "-webkit-transform") || this.css(a, "-moz-transform") || this.css(a, "transform");
                                s && "none" !== s && (o = 1, this.image.position = "absolute"), a = a.parentNode
                            }
                        e.position = this.image.position, this.css(this.image.$item, e), this.image.$container.appendChild(this.image.$item), this.onResize(), this.onScroll(!0), this.options.automaticResize && $ && $.observe(this.$item), this.options.onInit && this.options.onInit.call(this), "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {
                            "background-image": "none"
                        }), this.addToParallaxList()
                    }
                }, {
                    key: "addToParallaxList",
                    value: function() {
                        x.push(this), 1 === x.length && A()
                    }
                }, {
                    key: "removeFromParallaxList",
                    value: function() {
                        var t = this;
                        x.forEach(function(e, i) {
                            e.instanceID === t.instanceID && x.splice(i, 1)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFromParallaxList();
                        var t = this.$item.getAttribute("data-jarallax-original-styles");
                        if (this.$item.removeAttribute("data-jarallax-original-styles"), t ? this.$item.setAttribute("style", t) : this.$item.removeAttribute("style"), this.image.useImgTag) {
                            var e = this.image.$item.getAttribute("data-jarallax-original-styles");
                            this.image.$item.removeAttribute("data-jarallax-original-styles"), e ? this.image.$item.setAttribute("style", t) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                        }
                        this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles), this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
                    }
                }, {
                    key: "clipContainer",
                    value: function() {
                        if ("fixed" === this.image.position) {
                            var t = this.image.$container.getBoundingClientRect(),
                                e = t.width,
                                i = t.height;
                            if (!this.$clipStyles) this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);
                            var n = "#jarallax-container-" + this.instanceID + " {\n           clip: rect(0 " + e + "px " + i + "px 0);\n           clip: rect(0, " + e + "px, " + i + "px, 0);\n        }";
                            this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = n : this.$clipStyles.innerHTML = n
                        }
                    }
                }, {
                    key: "coverImage",
                    value: function() {
                        var t = this.image.$container.getBoundingClientRect(),
                            e = t.height,
                            i = this.options.speed,
                            n = "scroll" === this.options.type || "scroll-opacity" === this.options.type,
                            o = 0,
                            a = e,
                            s = 0;
                        return n && (i < 0 ? (o = i * Math.max(e, f), f < e && (o -= i * (e - f))) : o = i * (e + f), i > 1 ? a = Math.abs(o - f) : i < 0 ? a = o / i + Math.abs(o) : a += (f - e) * (1 - i), o /= 2), this.parallaxScrollDistance = o, s = n ? (f - a) / 2 : (e - a) / 2, this.css(this.image.$item, {
                            height: a + "px",
                            marginTop: s + "px",
                            left: "fixed" === this.image.position ? t.left + "px" : "0",
                            width: t.width + "px"
                        }), this.options.onCoverImage && this.options.onCoverImage.call(this), {
                            image: {
                                height: a,
                                marginTop: s
                            },
                            container: t
                        }
                    }
                }, {
                    key: "isVisible",
                    value: function() {
                        return this.isElementInViewport || !1
                    }
                }, {
                    key: "onScroll",
                    value: function(t) {
                        var e = this.$item.getBoundingClientRect(),
                            i = e.top,
                            n = e.height,
                            o = {},
                            a = e;
                        if (this.options.elementInViewport && (a = this.options.elementInViewport.getBoundingClientRect()), this.isElementInViewport = a.bottom >= 0 && a.right >= 0 && a.top <= f && a.left <= h, t || this.isElementInViewport) {
                            var s = Math.max(0, i),
                                r = Math.max(0, n + i),
                                l = Math.max(0, -i),
                                c = Math.max(0, i + n - f),
                                u = Math.max(0, n - (i + n - f)),
                                d = Math.max(0, -i + f - n),
                                m = 1 - 2 * (f - i) / (f + n),
                                p = 1;
                            if (n < f ? p = 1 - (l || c) / n : r <= f ? p = r / f : u <= f && (p = u / f), "opacity" !== this.options.type && "scale-opacity" !== this.options.type && "scroll-opacity" !== this.options.type || (o.transform = "translate3d(0,0,0)", o.opacity = p), "scale" === this.options.type || "scale-opacity" === this.options.type) {
                                var g = 1;
                                this.options.speed < 0 ? g -= this.options.speed * p : g += this.options.speed * (1 - p), o.transform = "scale(" + g + ") translate3d(0,0,0)"
                            }
                            if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                                var y = this.parallaxScrollDistance * m;
                                "absolute" === this.image.position && (y -= i), o.transform = "translate3d(0," + y + "px,0)"
                            }
                            this.css(this.image.$item, o), this.options.onScroll && this.options.onScroll.call(this, {
                                section: e,
                                beforeTop: s,
                                beforeTopEnd: r,
                                afterTop: l,
                                beforeBottom: c,
                                beforeBottomEnd: u,
                                afterBottom: d,
                                visiblePercent: p,
                                fromViewportCenter: m
                            })
                        }
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.coverImage(), this.clipContainer()
                    }
                }]), t
            }(),
            E = function(t) {
                ("object" === ("undefined" == typeof HTMLElement ? "undefined" : a(HTMLElement)) ? t instanceof HTMLElement : t && "object" === (void 0 === t ? "undefined" : a(t)) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
                for (var e = arguments[1], i = Array.prototype.slice.call(arguments, 2), n = t.length, o = 0, s = void 0; o < n; o++)
                    if ("object" === (void 0 === e ? "undefined" : a(e)) || void 0 === e ? t[o].jarallax || (t[o].jarallax = new j(t[o], e)) : t[o].jarallax && (s = t[o].jarallax[e].apply(t[o].jarallax, i)), void 0 !== s) return s;
                return t
            };
        E.constructor = j, e.default = E
    }).call(this, i(5))
}, function(t, e, i) {
    "use strict";
    var n = i(15),
        o = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function(t) {
            var e = +new Date,
                i = Math.max(0, 16 - (e - a)),
                n = setTimeout(t, i);
            return a = e, n
        },
        a = +new Date;
    var s = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (o = o.bind(n), s = s.bind(n)), (t.exports = o).cancel = s
}, function(t, e, i) {
    "use strict";
    (function(e) {
        var i;
        i = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = i
    }).call(this, i(5))
}]);