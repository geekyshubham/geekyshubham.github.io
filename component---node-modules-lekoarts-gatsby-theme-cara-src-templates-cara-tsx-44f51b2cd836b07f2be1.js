(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "7W2i": function(e, t, r) {
            var n = r("SksO");
            e.exports = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && n(e, t)
            }
        },
        "8+s/": function(e, t, r) {
            "use strict";
            r("V+eJ"), r("bWfx"), r("f3/d"), r("hHhE"), r("HAE/");
            var n, o = r("q1tI"),
                i = (n = o) && "object" == typeof n && "default" in n ? n.default : n;

            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var c = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, r) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== r && "function" != typeof r) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(n) {
                    if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
                    var s, l = [];

                    function u() {
                        s = e(l.map((function(e) {
                            return e.props
                        }))), d.canUseDOM ? t(s) : r && (s = r(s))
                    }
                    var d = function(e) {
                        var t, r;

                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, o.peek = function() {
                            return s
                        }, o.rewind = function() {
                            if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = s;
                            return s = void 0, l = [], e
                        };
                        var a = o.prototype;
                        return a.UNSAFE_componentWillMount = function() {
                            l.push(this), u()
                        }, a.componentDidUpdate = function() {
                            u()
                        }, a.componentWillUnmount = function() {
                            var e = l.indexOf(this);
                            l.splice(e, 1), u()
                        }, a.render = function() {
                            return i.createElement(n, this.props)
                        }, o
                    }(o.PureComponent);
                    return a(d, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(n) + ")"), a(d, "canUseDOM", c), d
                }
            }
        },
        "9xW6": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("q1tI"),
                o = r.n(n),
                i = r("rIun"),
                a = r("qKvR"),
                c = r("2A+t"),
                s = r("qhky"),
                l = r("Wbzz"),
                u = r("cMlJ"),
                d = function() {
                    return u.data.site.siteMetadata
                },
                f = function(e) {
                    var t = e.title,
                        r = e.description,
                        n = e.pathname,
                        o = e.image,
                        i = e.children,
                        c = d(),
                        u = c.siteTitle,
                        f = c.siteTitleAlt,
                        p = c.siteUrl,
                        h = c.siteDescription,
                        m = c.siteLanguage,
                        g = c.siteImage,
                        b = c.author,
                        y = {
                            title: t || f,
                            description: r || h,
                            url: "" + p + (n || ""),
                            image: "" + p + (o || g)
                        };
                    return Object(a.d)(s.a, {
                        title: t,
                        defaultTitle: f,
                        titleTemplate: "%s | " + u
                    }, Object(a.d)("html", {
                        lang: m
                    }), Object(a.d)("meta", {
                        name: "description",
                        content: y.description
                    }), Object(a.d)("meta", {
                        name: "image",
                        content: y.image
                    }), Object(a.d)("meta", {
                        property: "og:title",
                        content: y.title
                    }), Object(a.d)("meta", {
                        property: "og:url",
                        content: y.url
                    }), Object(a.d)("meta", {
                        property: "og:description",
                        content: y.description
                    }), Object(a.d)("meta", {
                        property: "og:image",
                        content: y.image
                    }), Object(a.d)("meta", {
                        property: "og:type",
                        content: "website"
                    }), Object(a.d)("meta", {
                        property: "og:image:alt",
                        content: y.description
                    }), Object(a.d)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), Object(a.d)("meta", {
                        name: "twitter:title",
                        content: y.title
                    }), Object(a.d)("meta", {
                        name: "twitter:url",
                        content: y.url
                    }), Object(a.d)("meta", {
                        name: "twitter:description",
                        content: y.description
                    }), Object(a.d)("meta", {
                        name: "twitter:image",
                        content: y.image
                    }), Object(a.d)("meta", {
                        name: "twitter:image:alt",
                        content: y.description
                    }), Object(a.d)("meta", {
                        name: "twitter:creator",
                        content: b
                    }), Object(a.d)("meta", {
                        name: "gatsby-theme",
                        content: "@lekoarts/gatsby-theme-cara"
                    }), Object(a.d)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: Object(l.withPrefix)("/favicon-32x32.png")
                    }), Object(a.d)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: Object(l.withPrefix)("/favicon-16x16.png")
                    }), Object(a.d)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: Object(l.withPrefix)("/apple-touch-icon.png")
                    }), i)
                },
                p = f;
            f.defaultProps = {
                title: "",
                description: !1,
                pathname: !1,
                image: !1,
                children: null
            };
            var h = function(e) {
                    var t = e.children,
                        r = e.className;
                    return Object(c.c)(o.a.Fragment, null, Object(c.c)(a.a, {
                        styles: function(e) {
                            return {
                                "*": {
                                    boxSizing: "inherit",
                                    "&:before": {
                                        boxSizing: "inherit"
                                    },
                                    "&:after": {
                                        boxSizing: "inherit"
                                    }
                                },
                                html: {
                                    fontSize: "18px"
                                },
                                "::selection": {
                                    backgroundColor: e.colors.primary,
                                    color: e.colors.background
                                }
                            }
                        }
                    }), Object(c.c)(p, null), Object(c.c)("main", {
                        className: r
                    }, t))
                },
                m = (r("bHtr"), function(e) {
                    var t = e.speed,
                        r = e.offset,
                        n = e.factor,
                        o = e.bg,
                        a = e.fill,
                        s = e.clipPath,
                        l = e.children,
                        u = e.className;
                    return Object(c.c)(i.ParallaxLayer, {
                        sx: {
                            position: "absolute",
                            width: "full",
                            height: "full",
                            background: o,
                            backgroundColor: o,
                            "#contact-wave": {
                                color: a,
                                fill: "currentColor"
                            },
                            clipPath: s
                        },
                        speed: t,
                        offset: r,
                        factor: n || 1,
                        className: u
                    }, l)
                }),
                g = function(e) {
                    var t = e.className,
                        r = e.children;
                    return Object(c.c)("div", {
                        sx: {
                            width: ["full", "full", "full", "full", "full", "2/3"],
                            textAlign: "left"
                        },
                        className: t
                    }, r)
                },
                b = function(e) {
                    var t = e.speed,
                        r = e.offset,
                        n = e.children,
                        o = e.className,
                        a = e.factor;
                    return Object(c.c)(i.ParallaxLayer, {
                        sx: {
                            padding: [3, 4, 4, 5],
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 50
                        },
                        speed: t,
                        offset: r,
                        factor: a || 1,
                        className: o
                    }, n)
                },
                y = ["none", "none", "block"],
                v = {
                    triangle: {
                        shape: Object(c.c)("polygon", {
                            strokeWidth: "1px",
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            points: "14.921,2.27 28.667,25.5 1.175,25.5 "
                        }),
                        viewBox: "0 0 30 30"
                    },
                    circle: {
                        shape: Object(c.c)("path", {
                            d: "M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"
                        }),
                        viewBox: "0 0 30 30"
                    },
                    arrowUp: {
                        shape: Object(c.c)(o.a.Fragment, null, Object(c.c)("path", {
                            d: "M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"
                        }), " ", Object(c.c)("path", {
                            d: "M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"
                        })),
                        viewBox: "0 0 30 42"
                    },
                    upDown: {
                        shape: Object(c.c)(o.a.Fragment, null, Object(c.c)("path", {
                            d: "M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"
                        }), Object(c.c)("path", {
                            d: "M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"
                        })),
                        viewBox: "0 0 30 44.58"
                    },
                    box: {
                        shape: Object(c.c)("path", {
                            d: "M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"
                        }),
                        viewBox: "0 0 30 30"
                    },
                    hexa: {
                        shape: Object(c.c)("polygon", {
                            strokeLinejoin: "round",
                            strokeMiterlimit: "10",
                            points: "27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
                        }),
                        viewBox: "0 0 30 30"
                    },
                    cross: {
                        shape: Object(c.c)("path", {
                            strokeWidth: "3px",
                            d: "M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
                        }),
                        viewBox: "0 0 100 100"
                    }
                },
                w = function(e) {
                    var t = e.stroke,
                        r = e.color,
                        n = e.width,
                        o = e.icon,
                        i = e.left,
                        a = e.top,
                        s = e.hiddenMobile;
                    return Object(c.c)("svg", {
                        sx: {
                            position: "absolute",
                            stroke: t ? "currentColor" : "none",
                            fill: t ? "none" : "currentColor",
                            display: s ? y : "block",
                            color: r,
                            width: n,
                            left: i,
                            top: a
                        },
                        viewBox: v[o].viewBox
                    }, v[o].shape)
                },
                O = w;
            w.defaultProps = {
                stroke: !1,
                hiddenMobile: !1
            };
            var j = r("wTIg");

            function k() {
                var e = T(["\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(200px);\n  }\n"]);
                return k = function() {
                    return e
                }, e
            }

            function x() {
                var e = T(["\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(30px);\n  }\n"]);
                return x = function() {
                    return e
                }, e
            }

            function S() {
                var e = T(['\n  0% {\n    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");\n  }\n  50% {\n    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");\n  }\n  100% {\n    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");\n  }\n']);
                return S = function() {
                    return e
                }, e
            }

            function T(e, t) {
                return t || (t = e.slice(0)), e.raw = t, e
            }
            var E = Object(a.e)(S()),
                A = Object(a.e)(x()),
                R = Object(a.e)(k()),
                _ = Object(a.c)(A, " 4s ease-in-out infinite alternate;"),
                C = Object(a.c)(R, " 18s ease-in-out infinite alternate;"),
                P = Object(j.a)("div", {
                    target: "e1l90hg90"
                })("animation:", _, ";position:absolute;top:0;left:0;right:0;bottom:0;"),
                L = Object(j.a)("div", {
                    target: "e1l90hg91"
                })("animation:", C, ";position:absolute;top:0;left:0;right:0;bottom:0;"),
                M = (r("91GP"), r("rGqo"), r("yt8O"), r("Btvt"), r("RW0V"), r("7ljp"));

            function I() {
                return (I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var z = {
                _frontmatter: {}
            };

            function W(e) {
                var t = e.components,
                    r = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, ["components"]);
                return Object(M.b)("wrapper", I({}, z, r, {
                    components: t,
                    mdxType: "MDXLayout"
                }), Object(M.b)("h1", null, "Hi, I'm Shubham Takankhar"), Object(M.b)("p", null, "Jack Of All Trades, Master of None"))
            }
            W.isMDXComponent = !0;
            var F = function(e) {
                var t = e.offset,
                    r = e.factor,
                    n = void 0 === r ? 1 : r;
                return Object(c.c)("div", null, Object(c.c)(m, {
                    speed: .2,
                    offset: t,
                    factor: n
                }, Object(c.c)(P, null, Object(c.c)(O, {
                    icon: "triangle",
                    hiddenMobile: !0,
                    width: 48,
                    stroke: !0,
                    color: "icon_orange",
                    left: "10%",
                    top: "20%"
                }), Object(c.c)(O, {
                    icon: "hexa",
                    width: 48,
                    stroke: !0,
                    color: "icon_red",
                    left: "60%",
                    top: "70%"
                }), Object(c.c)(O, {
                    icon: "box",
                    width: 6,
                    color: "icon_darker",
                    left: "60%",
                    top: "15%"
                })), Object(c.c)(L, null, Object(c.c)(O, {
                    icon: "arrowUp",
                    hiddenMobile: !0,
                    width: 16,
                    color: "icon_blue",
                    left: "80%",
                    top: "10%"
                }), Object(c.c)(O, {
                    icon: "triangle",
                    width: 12,
                    stroke: !0,
                    color: "icon_brightest",
                    left: "90%",
                    top: "50%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 16,
                    color: "icon_darker",
                    left: "70%",
                    top: "90%"
                }), Object(c.c)(O, {
                    icon: "triangle",
                    width: 16,
                    stroke: !0,
                    color: "icon_darkest",
                    left: "30%",
                    top: "65%"
                }), Object(c.c)(O, {
                    icon: "cross",
                    width: 16,
                    stroke: !0,
                    color: "icon_pink",
                    left: "28%",
                    top: "15%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 6,
                    color: "icon_darkest",
                    left: "75%",
                    top: "10%"
                }), Object(c.c)(O, {
                    icon: "upDown",
                    hiddenMobile: !0,
                    width: 8,
                    color: "icon_darkest",
                    left: "45%",
                    top: "10%"
                })), Object(c.c)(O, {
                    icon: "circle",
                    hiddenMobile: !0,
                    width: 24,
                    color: "icon_darker",
                    left: "5%",
                    top: "70%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 6,
                    color: "icon_darkest",
                    left: "4%",
                    top: "20%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 12,
                    color: "icon_darkest",
                    left: "50%",
                    top: "60%"
                }), Object(c.c)(O, {
                    icon: "upDown",
                    width: 8,
                    color: "icon_darkest",
                    left: "95%",
                    top: "90%"
                }), Object(c.c)(O, {
                    icon: "upDown",
                    hiddenMobile: !0,
                    width: 24,
                    color: "icon_darker",
                    left: "40%",
                    top: "80%"
                }), Object(c.c)(O, {
                    icon: "triangle",
                    width: 8,
                    stroke: !0,
                    color: "icon_darker",
                    left: "25%",
                    top: "5%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 64,
                    color: "icon_green",
                    left: "95%",
                    top: "5%"
                }), Object(c.c)(O, {
                    icon: "box",
                    hiddenMobile: !0,
                    width: 64,
                    color: "icon_purple",
                    left: "5%",
                    top: "90%"
                }), Object(c.c)(O, {
                    icon: "box",
                    width: 6,
                    color: "icon_darkest",
                    left: "10%",
                    top: "10%"
                }), Object(c.c)(O, {
                    icon: "box",
                    width: 12,
                    color: "icon_darkest",
                    left: "40%",
                    top: "30%"
                }), Object(c.c)(O, {
                    icon: "hexa",
                    width: 16,
                    stroke: !0,
                    color: "icon_darker",
                    left: "10%",
                    top: "50%"
                }), Object(c.c)(O, {
                    icon: "hexa",
                    width: 8,
                    stroke: !0,
                    color: "icon_darker",
                    left: "80%",
                    top: "70%"
                })), Object(c.c)(b, {
                    sx: {
                        variant: "texts.bigger"
                    },
                    speed: .4,
                    offset: t,
                    factor: n
                }, Object(c.c)(g, null, Object(c.c)(W, null))))
            };

            function B() {
                return (B = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var D, V = (D = "ProjectCard", function(e) {
                    return console.warn("Component " + D + " was not imported, exported, or provided by MDXProvider as global scope"), Object(M.b)("div", e)
                }),
                N = {
                    _frontmatter: {}
                };

            function H(e) {
                var t = e.components,
                    r = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, ["components"]);
                return Object(M.b)("wrapper", B({}, N, r, {
                    components: t,
                    mdxType: "MDXLayout"
                }), Object(M.b)("h2", null, "Projects"), Object(M.b)(V, {
                    title: "Crime Reporting Webapp",
                    link: "https://github.com/geekyshubham/Crime-Reporting-System",
                    bg: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
                    mdxType: "ProjectCard"
                }, "This is an WEB application built with PHP to track Events as well as add and create new ones ."), Object(M.b)(V, {
                    title: "Portfolio-On-Flutter",
                    link: "https://github.com/geekyshubham/Portfolio-On-Flutter",
                    bg: "linear-gradient(to right, green 0%, yellow 100%)",
                    mdxType: "ProjectCard"
                }, "Its a design only based simple layout for flat Portfolio  ", Object(M.b)("span", {
                    className: "Label Label--outline v-align-middle ml-1 mb-1"
                }, "Private")))
            }
            H.isMDXComponent = !0;
            var K = function(e) {
                var t = e.offset,
                    r = e.factor,
                    n = void 0 === r ? 2 : r;
                return Object(c.c)("div", null, Object(c.c)(m, {
                    bg: "linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)",
                    sx: {
                        clipPath: "polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
                    },
                    speed: -.2,
                    offset: 1.1,
                    factor: n
                }), Object(c.c)(b, {
                    speed: .4,
                    offset: t + .2,
                    factor: n
                }, Object(c.c)(g, null, Object(c.c)("div", {
                    sx: {
                        display: "grid",
                        gridGap: [4, 4, 4, 5],
                        gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
                        h2: {
                            gridColumn: "-1/1",
                            color: "white !important"
                        }
                    }
                }, Object(c.c)(H, null)))), Object(c.c)(m, {
                    speed: .1,
                    offset: t,
                    factor: n
                }, Object(c.c)(P, null, Object(c.c)(O, {
                    icon: "box",
                    width: 6,
                    color: "icon_brightest",
                    left: "85%",
                    top: "75%"
                }), Object(c.c)(O, {
                    icon: "upDown",
                    width: 8,
                    color: "icon_teal",
                    left: "70%",
                    top: "20%"
                }), Object(c.c)(O, {
                    icon: "triangle",
                    width: 8,
                    stroke: !0,
                    color: "icon_orange",
                    left: "25%",
                    top: "5%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    hiddenMobile: !0,
                    width: 24,
                    color: "icon_brightest",
                    left: "17%",
                    top: "60%"
                })), Object(c.c)(L, null, Object(c.c)(O, {
                    icon: "arrowUp",
                    hiddenMobile: !0,
                    width: 16,
                    color: "icon_green",
                    left: "20%",
                    top: "90%"
                }), Object(c.c)(O, {
                    icon: "triangle",
                    width: 12,
                    stroke: !0,
                    color: "icon_brightest",
                    left: "90%",
                    top: "30%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 16,
                    color: "icon_yellow",
                    left: "70%",
                    top: "90%"
                }), Object(c.c)(O, {
                    icon: "triangle",
                    hiddenMobile: !0,
                    width: 16,
                    stroke: !0,
                    color: "icon_teal",
                    left: "18%",
                    top: "75%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 6,
                    color: "icon_brightest",
                    left: "75%",
                    top: "10%"
                }), Object(c.c)(O, {
                    icon: "upDown",
                    hiddenMobile: !0,
                    width: 8,
                    color: "icon_green",
                    left: "45%",
                    top: "10%"
                })), Object(c.c)(O, {
                    icon: "circle",
                    hiddenMobile: !0,
                    width: 6,
                    color: "icon_brightest",
                    left: "4%",
                    top: "20%"
                }), Object(c.c)(O, {
                    icon: "circle",
                    width: 12,
                    color: "icon_pink",
                    left: "80%",
                    top: "60%"
                }), Object(c.c)(O, {
                    icon: "box",
                    width: 6,
                    color: "icon_orange",
                    left: "10%",
                    top: "10%"
                }), Object(c.c)(O, {
                    icon: "box",
                    width: 12,
                    color: "icon_yellow",
                    left: "29%",
                    top: "26%"
                }), Object(c.c)(O, {
                    icon: "hexa",
                    width: 16,
                    stroke: !0,
                    color: "icon_red",
                    left: "75%",
                    top: "30%"
                }), Object(c.c)(O, {
                    icon: "hexa",
                    width: 8,
                    stroke: !0,
                    color: "icon_yellow",
                    left: "80%",
                    top: "70%"
                })))
            };

            function q() {
                return (q = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var U = {
                _frontmatter: {}
            };

            function G(e) {
                var t = e.components,
                    r = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, ["components"]);
                return Object(M.b)("wrapper", q({}, U, r, {
                    components: t,
                    mdxType: "MDXLayout"
                }), Object(M.b)("h2", null, "About"), Object(M.b)("h4", null, "Android/iOS Developer | JavaScript | Python | DevOps | *NIX SysAdmin | CyberSec | ML/AI | Network Specialist | RESTful API"), Object(M.b)("p", null, "This is ", Object(M.b)("strong", {
                    parentName: "p"
                }, "SHUBHAM TAKANKHAR"), " from Pune. I am a Machine Learning Enthusiast, and I have worked with Android Apps, Cloud in the past. I hold 10+ years of experience in Linux system. I am currently pursuing MCA as a Freshman in Vishwakarma Institute of Technology.\nIn my spare time, I mostly code seek for new tech updates."))
            }
            G.isMDXComponent = !0;
            var Y = function(e) {
                    var t = e.offset,
                        r = e.factor,
                        n = void 0 === r ? 1 : r;
                    return Object(c.c)("div", null, Object(c.c)(m, {
                        bg: "divider",
                        clipPath: "polygon(0 16%, 100% 4%, 100% 82%, 0 94%)",
                        speed: .2,
                        offset: t,
                        factor: n
                    }), Object(c.c)(m, {
                        speed: .1,
                        offset: t,
                        factor: n
                    }, Object(c.c)(P, null, Object(c.c)(O, {
                        icon: "box",
                        hiddenMobile: !0,
                        width: 6,
                        color: "icon_blue",
                        left: "50%",
                        top: "75%"
                    }), Object(c.c)(O, {
                        icon: "upDown",
                        hiddenMobile: !0,
                        width: 8,
                        color: "icon_darkest",
                        left: "70%",
                        top: "20%"
                    }), Object(c.c)(O, {
                        icon: "triangle",
                        width: 8,
                        stroke: !0,
                        color: "icon_darkest",
                        left: "25%",
                        top: "5%"
                    }), Object(c.c)(O, {
                        icon: "upDown",
                        hiddenMobile: !0,
                        width: 24,
                        color: "icon_orange",
                        left: "80%",
                        top: "80%"
                    })), Object(c.c)(L, null, Object(c.c)(O, {
                        icon: "arrowUp",
                        hiddenMobile: !0,
                        width: 16,
                        color: "icon_purple",
                        left: "5%",
                        top: "80%"
                    }), Object(c.c)(O, {
                        icon: "triangle",
                        width: 12,
                        stroke: !0,
                        color: "icon_brightest",
                        left: "95%",
                        top: "50%"
                    }), Object(c.c)(O, {
                        icon: "circle",
                        hiddenMobile: !0,
                        width: 6,
                        color: "icon_brightest",
                        left: "85%",
                        top: "15%"
                    }), Object(c.c)(O, {
                        icon: "upDown",
                        hiddenMobile: !0,
                        width: 8,
                        color: "icon_darkest",
                        left: "45%",
                        top: "10%"
                    })), Object(c.c)(O, {
                        icon: "circle",
                        hiddenMobile: !0,
                        width: 6,
                        color: "icon_brightest",
                        left: "4%",
                        top: "20%"
                    }), Object(c.c)(O, {
                        icon: "circle",
                        width: 12,
                        color: "icon_darkest",
                        left: "70%",
                        top: "60%"
                    }), Object(c.c)(O, {
                        icon: "box",
                        width: 6,
                        color: "icon_orange",
                        left: "10%",
                        top: "10%"
                    }), Object(c.c)(O, {
                        icon: "box",
                        width: 12,
                        color: "icon_darkest",
                        left: "20%",
                        top: "30%"
                    }), Object(c.c)(O, {
                        icon: "hexa",
                        width: 8,
                        stroke: !0,
                        color: "icon_darkest",
                        left: "80%",
                        top: "70%"
                    })), Object(c.c)(b, {
                        speed: .4,
                        offset: t,
                        factor: n
                    }, Object(c.c)(g, null, Object(c.c)(G, null))))
                },
                X = r("PcS7"),
                Z = (r("a1Th"), r("h7Nl"), r("f3/d"), r("bWfx"), r("LK8F"), r("V+eJ"), r("ZdEh")),
                J = (r("Oyvg"), r("4qRI")),
                Q = r("9uj6"),
                $ = (r("0l/t"), r("KKXr"), r("Vd3H"), r("8+KV"), r("MgzW")),
                ee = r.n($),
                te = function(e, t) {
                    var r = ee()({}, e, t);
                    for (var n in e) {
                        var o;
                        e[n] && "object" == typeof t[n] && ee()(r, ((o = {})[n] = ee()(e[n], t[n]), o))
                    }
                    return r
                },
                re = {
                    breakpoints: [40, 52, 64].map((function(e) {
                        return e + "em"
                    }))
                },
                ne = function(e) {
                    return "@media screen and (min-width: " + e + ")"
                },
                oe = function(e, t) {
                    return ie(t, e, e)
                },
                ie = function(e, t, r, n, o) {
                    for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : o;
                    return e === o ? r : e
                },
                ae = function e(t) {
                    var r = {},
                        n = function(e) {
                            var n, o, i = {},
                                a = !1,
                                c = e.theme && e.theme.disableStyledSystemCache;
                            for (var s in e)
                                if (t[s]) {
                                    var l = t[s],
                                        u = e[s],
                                        d = ie(e.theme, l.scale, l.defaults);
                                    if ("object" != typeof u) ee()(i, l(u, d, e));
                                    else {
                                        if (r.breakpoints = !c && r.breakpoints || ie(e.theme, "breakpoints", re.breakpoints), Array.isArray(u)) {
                                            r.media = !c && r.media || [null].concat(r.breakpoints.map(ne)), i = te(i, ce(r.media, l, d, u, e));
                                            continue
                                        }
                                        null !== u && (i = te(i, se(r.breakpoints, l, d, u, e)), a = !0)
                                    }
                                } return a && (n = i, o = {}, Object.keys(n).sort((function(e, t) {
                                return e.localeCompare(t, void 0, {
                                    numeric: !0,
                                    sensitivity: "base"
                                })
                            })).forEach((function(e) {
                                o[e] = n[e]
                            })), i = o), i
                        };
                    n.config = t, n.propNames = Object.keys(t), n.cache = r;
                    var o = Object.keys(t).filter((function(e) {
                        return "config" !== e
                    }));
                    return o.length > 1 && o.forEach((function(r) {
                        var o;
                        n[r] = e(((o = {})[r] = t[r], o))
                    })), n
                },
                ce = function(e, t, r, n, o) {
                    var i = {};
                    return n.slice(0, e.length).forEach((function(n, a) {
                        var c, s = e[a],
                            l = t(n, r, o);
                        s ? ee()(i, ((c = {})[s] = ee()({}, i[s], l), c)) : ee()(i, l)
                    })), i
                },
                se = function(e, t, r, n, o) {
                    var i = {};
                    for (var a in n) {
                        var c = e[a],
                            s = t(n[a], r, o);
                        if (c) {
                            var l, u = ne(c);
                            ee()(i, ((l = {})[u] = ee()({}, i[u], s), l))
                        } else ee()(i, s)
                    }
                    return i
                },
                le = function(e) {
                    var t = e.properties,
                        r = e.property,
                        n = e.scale,
                        o = e.transform,
                        i = void 0 === o ? oe : o,
                        a = e.defaultScale;
                    t = t || [r];
                    var c = function(e, r, n) {
                        var o = {},
                            a = i(e, r, n);
                        if (null !== a) return t.forEach((function(e) {
                            o[e] = a
                        })), o
                    };
                    return c.scale = n, c.defaults = a, c
                },
                ue = function(e) {
                    void 0 === e && (e = {});
                    var t = {};
                    return Object.keys(e).forEach((function(r) {
                        var n = e[r];
                        t[r] = !0 !== n ? "function" != typeof n ? le(n) : n : le({
                            property: r,
                            scale: r
                        })
                    })), ae(t)
                },
                de = function() {
                    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    r.forEach((function(t) {
                        t && t.config && ee()(e, t.config)
                    }));
                    var o = ae(e);
                    return o
                },
                fe = ue({
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function(e, t) {
                            return ie(t, e, ! function(e) {
                                return "number" == typeof e && !isNaN(e)
                            }(e) || e > 1 ? e : 100 * e + "%")
                        }
                    },
                    height: {
                        property: "height",
                        scale: "sizes"
                    },
                    minWidth: {
                        property: "minWidth",
                        scale: "sizes"
                    },
                    minHeight: {
                        property: "minHeight",
                        scale: "sizes"
                    },
                    maxWidth: {
                        property: "maxWidth",
                        scale: "sizes"
                    },
                    maxHeight: {
                        property: "maxHeight",
                        scale: "sizes"
                    },
                    size: {
                        properties: ["width", "height"],
                        scale: "sizes"
                    },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0
                }),
                pe = fe,
                he = {
                    color: {
                        property: "color",
                        scale: "colors"
                    },
                    backgroundColor: {
                        property: "backgroundColor",
                        scale: "colors"
                    },
                    opacity: !0
                };
            he.bg = he.backgroundColor;
            var me = ue(he),
                ge = me,
                be = ue({
                    fontFamily: {
                        property: "fontFamily",
                        scale: "fonts"
                    },
                    fontSize: {
                        property: "fontSize",
                        scale: "fontSizes",
                        defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                    },
                    fontWeight: {
                        property: "fontWeight",
                        scale: "fontWeights"
                    },
                    lineHeight: {
                        property: "lineHeight",
                        scale: "lineHeights"
                    },
                    letterSpacing: {
                        property: "letterSpacing",
                        scale: "letterSpacings"
                    },
                    textAlign: !0,
                    fontStyle: !0
                }),
                ye = be,
                ve = ue({
                    alignItems: !0,
                    alignContent: !0,
                    justifyItems: !0,
                    justifyContent: !0,
                    flexWrap: !0,
                    flexDirection: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    flexBasis: !0,
                    justifySelf: !0,
                    alignSelf: !0,
                    order: !0
                }),
                we = ve,
                Oe = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                je = ue({
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: Oe.space
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: Oe.space
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: Oe.space
                    },
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0
                }),
                ke = je,
                xe = {
                    border: {
                        property: "border",
                        scale: "borders"
                    },
                    borderWidth: {
                        property: "borderWidth",
                        scale: "borderWidths"
                    },
                    borderStyle: {
                        property: "borderStyle",
                        scale: "borderStyles"
                    },
                    borderColor: {
                        property: "borderColor",
                        scale: "colors"
                    },
                    borderRadius: {
                        property: "borderRadius",
                        scale: "radii"
                    },
                    borderTop: {
                        property: "borderTop",
                        scale: "borders"
                    },
                    borderTopLeftRadius: {
                        property: "borderTopLeftRadius",
                        scale: "radii"
                    },
                    borderTopRightRadius: {
                        property: "borderTopRightRadius",
                        scale: "radii"
                    },
                    borderRight: {
                        property: "borderRight",
                        scale: "borders"
                    },
                    borderBottom: {
                        property: "borderBottom",
                        scale: "borders"
                    },
                    borderBottomLeftRadius: {
                        property: "borderBottomLeftRadius",
                        scale: "radii"
                    },
                    borderBottomRightRadius: {
                        property: "borderBottomRightRadius",
                        scale: "radii"
                    },
                    borderLeft: {
                        property: "borderLeft",
                        scale: "borders"
                    },
                    borderX: {
                        properties: ["borderLeft", "borderRight"],
                        scale: "borders"
                    },
                    borderY: {
                        properties: ["borderTop", "borderBottom"],
                        scale: "borders"
                    },
                    borderTopWidth: {
                        property: "borderTopWidth",
                        scale: "borderWidths"
                    },
                    borderTopColor: {
                        property: "borderTopColor",
                        scale: "colors"
                    },
                    borderTopStyle: {
                        property: "borderTopStyle",
                        scale: "borderStyles"
                    }
                };
            xe.borderTopLeftRadius = {
                property: "borderTopLeftRadius",
                scale: "radii"
            }, xe.borderTopRightRadius = {
                property: "borderTopRightRadius",
                scale: "radii"
            }, xe.borderBottomWidth = {
                property: "borderBottomWidth",
                scale: "borderWidths"
            }, xe.borderBottomColor = {
                property: "borderBottomColor",
                scale: "colors"
            }, xe.borderBottomStyle = {
                property: "borderBottomStyle",
                scale: "borderStyles"
            }, xe.borderBottomLeftRadius = {
                property: "borderBottomLeftRadius",
                scale: "radii"
            }, xe.borderBottomRightRadius = {
                property: "borderBottomRightRadius",
                scale: "radii"
            }, xe.borderLeftWidth = {
                property: "borderLeftWidth",
                scale: "borderWidths"
            }, xe.borderLeftColor = {
                property: "borderLeftColor",
                scale: "colors"
            }, xe.borderLeftStyle = {
                property: "borderLeftStyle",
                scale: "borderStyles"
            }, xe.borderRightWidth = {
                property: "borderRightWidth",
                scale: "borderWidths"
            }, xe.borderRightColor = {
                property: "borderRightColor",
                scale: "colors"
            }, xe.borderRightStyle = {
                property: "borderRightStyle",
                scale: "borderStyles"
            };
            var Se = ue(xe),
                Te = Se,
                Ee = {
                    background: !0,
                    backgroundImage: !0,
                    backgroundSize: !0,
                    backgroundPosition: !0,
                    backgroundRepeat: !0
                };
            Ee.bgImage = Ee.backgroundImage, Ee.bgSize = Ee.backgroundSize, Ee.bgPosition = Ee.backgroundPosition, Ee.bgRepeat = Ee.backgroundRepeat;
            var Ae = ue(Ee),
                Re = Ae,
                _e = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                Ce = ue({
                    position: !0,
                    zIndex: {
                        property: "zIndex",
                        scale: "zIndices"
                    },
                    top: {
                        property: "top",
                        scale: "space",
                        defaultScale: _e.space
                    },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: _e.space
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: _e.space
                    },
                    left: {
                        property: "left",
                        scale: "space",
                        defaultScale: _e.space
                    }
                }),
                Pe = Ce,
                Le = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                Me = function(e) {
                    return "number" == typeof e && !isNaN(e)
                },
                Ie = function(e, t) {
                    if (!Me(e)) return ie(t, e, e);
                    var r = e < 0,
                        n = Math.abs(e),
                        o = ie(t, n, n);
                    return Me(o) ? o * (r ? -1 : 1) : r ? "-" + o : o
                },
                ze = {};
            ze.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: Ie,
                    defaultScale: Le.space
                }
            }, ze.margin.m = ze.margin.margin, ze.margin.mt = ze.margin.marginTop, ze.margin.mr = ze.margin.marginRight, ze.margin.mb = ze.margin.marginBottom, ze.margin.ml = ze.margin.marginLeft, ze.margin.mx = ze.margin.marginX, ze.margin.my = ze.margin.marginY, ze.padding = {
                padding: {
                    property: "padding",
                    scale: "space",
                    defaultScale: Le.space
                },
                paddingTop: {
                    property: "paddingTop",
                    scale: "space",
                    defaultScale: Le.space
                },
                paddingRight: {
                    property: "paddingRight",
                    scale: "space",
                    defaultScale: Le.space
                },
                paddingBottom: {
                    property: "paddingBottom",
                    scale: "space",
                    defaultScale: Le.space
                },
                paddingLeft: {
                    property: "paddingLeft",
                    scale: "space",
                    defaultScale: Le.space
                },
                paddingX: {
                    properties: ["paddingLeft", "paddingRight"],
                    scale: "space",
                    defaultScale: Le.space
                },
                paddingY: {
                    properties: ["paddingTop", "paddingBottom"],
                    scale: "space",
                    defaultScale: Le.space
                }
            }, ze.padding.p = ze.padding.padding, ze.padding.pt = ze.padding.paddingTop, ze.padding.pr = ze.padding.paddingRight, ze.padding.pb = ze.padding.paddingBottom, ze.padding.pl = ze.padding.paddingLeft, ze.padding.px = ze.padding.paddingX, ze.padding.py = ze.padding.paddingY;
            var We = de(ue(ze.margin), ue(ze.padding)),
                Fe = We,
                Be = ue({
                    boxShadow: {
                        property: "boxShadow",
                        scale: "shadows"
                    },
                    textShadow: {
                        property: "textShadow",
                        scale: "shadows"
                    }
                });
            r("DNiP");

            function De() {
                return (De = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ve = function(e, t, r, n, o) {
                    for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : o;
                    return e === o ? r : e
                },
                Ne = [40, 52, 64].map((function(e) {
                    return e + "em"
                })),
                He = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
                    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                },
                Ke = {
                    bg: "backgroundColor",
                    m: "margin",
                    mt: "marginTop",
                    mr: "marginRight",
                    mb: "marginBottom",
                    ml: "marginLeft",
                    mx: "marginX",
                    my: "marginY",
                    p: "padding",
                    pt: "paddingTop",
                    pr: "paddingRight",
                    pb: "paddingBottom",
                    pl: "paddingLeft",
                    px: "paddingX",
                    py: "paddingY"
                },
                qe = {
                    marginX: ["marginLeft", "marginRight"],
                    marginY: ["marginTop", "marginBottom"],
                    paddingX: ["paddingLeft", "paddingRight"],
                    paddingY: ["paddingTop", "paddingBottom"],
                    size: ["width", "height"]
                },
                Ue = {
                    color: "colors",
                    backgroundColor: "colors",
                    borderColor: "colors",
                    margin: "space",
                    marginTop: "space",
                    marginRight: "space",
                    marginBottom: "space",
                    marginLeft: "space",
                    marginX: "space",
                    marginY: "space",
                    padding: "space",
                    paddingTop: "space",
                    paddingRight: "space",
                    paddingBottom: "space",
                    paddingLeft: "space",
                    paddingX: "space",
                    paddingY: "space",
                    top: "space",
                    right: "space",
                    bottom: "space",
                    left: "space",
                    gridGap: "space",
                    gridColumnGap: "space",
                    gridRowGap: "space",
                    gap: "space",
                    columnGap: "space",
                    rowGap: "space",
                    fontFamily: "fonts",
                    fontSize: "fontSizes",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    border: "borders",
                    borderTop: "borders",
                    borderRight: "borders",
                    borderBottom: "borders",
                    borderLeft: "borders",
                    borderWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    borderTopWidth: "borderWidths",
                    borderTopColor: "colors",
                    borderTopStyle: "borderStyles",
                    borderBottomWidth: "borderWidths",
                    borderBottomColor: "colors",
                    borderBottomStyle: "borderStyles",
                    borderLeftWidth: "borderWidths",
                    borderLeftColor: "colors",
                    borderLeftStyle: "borderStyles",
                    borderRightWidth: "borderWidths",
                    borderRightColor: "colors",
                    borderRightStyle: "borderStyles",
                    outlineColor: "colors",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    zIndex: "zIndices",
                    width: "sizes",
                    minWidth: "sizes",
                    maxWidth: "sizes",
                    height: "sizes",
                    minHeight: "sizes",
                    maxHeight: "sizes",
                    flexBasis: "sizes",
                    size: "sizes",
                    fill: "colors",
                    stroke: "colors"
                },
                Ge = function(e, t) {
                    if ("number" != typeof t || t >= 0) return Ve(e, t, t);
                    var r = Math.abs(t),
                        n = Ve(e, r, r);
                    return "string" == typeof n ? "-" + n : -1 * n
                },
                Ye = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce((function(e, t) {
                    var r;
                    return De({}, e, ((r = {})[t] = Ge, r))
                }), {}),
                Xe = function e(t) {
                    return function(r) {
                        void 0 === r && (r = {});
                        var n = De({}, He, {}, r.theme || r),
                            o = {},
                            i = function(e) {
                                return function(t) {
                                    var r = {},
                                        n = Ve(t, "breakpoints", Ne),
                                        o = [null].concat(n.map((function(e) {
                                            return "@media screen and (min-width: " + e + ")"
                                        })));
                                    for (var i in e) {
                                        var a = "function" == typeof e[i] ? e[i](t) : e[i];
                                        if (null != a)
                                            if (Array.isArray(a))
                                                for (var c = 0; c < a.slice(0, o.length).length; c++) {
                                                    var s = o[c];
                                                    s ? (r[s] = r[s] || {}, null != a[c] && (r[s][i] = a[c])) : r[i] = a[c]
                                                } else r[i] = a
                                    }
                                    return r
                                }
                            }("function" == typeof t ? t(n) : t)(n);
                        for (var a in i) {
                            var c = i[a],
                                s = "function" == typeof c ? c(n) : c;
                            if ("variant" !== a)
                                if (s && "object" == typeof s) o[a] = e(s)(n);
                                else {
                                    var l = Ve(Ke, a, a),
                                        u = Ve(Ue, l),
                                        d = Ve(n, u, Ve(n, l, {})),
                                        f = Ve(Ye, l, Ve)(d, s, s);
                                    if (qe[l])
                                        for (var p = qe[l], h = 0; h < p.length; h++) o[p[h]] = f;
                                    else o[l] = f
                                }
                            else o = De({}, o, {}, e(Ve(n, s))(n))
                        }
                        return o
                    }
                },
                Ze = function(e) {
                    var t, r, n = e.scale,
                        o = e.prop,
                        i = void 0 === o ? "variant" : o,
                        a = e.variants,
                        c = void 0 === a ? {} : a,
                        s = e.key;
                    (r = Object.keys(c).length ? function(e, t, r) {
                        return Xe(ie(t, e, null))(r.theme)
                    } : function(e, t) {
                        return ie(t, e, null)
                    }).scale = n || s, r.defaults = c;
                    var l = ((t = {})[i] = r, t);
                    return ae(l)
                },
                Je = Ze({
                    key: "buttons"
                }),
                Qe = Ze({
                    key: "textStyles",
                    prop: "textStyle"
                }),
                $e = Ze({
                    key: "colorStyles",
                    prop: "colors"
                }),
                et = (pe.width, pe.height, pe.minWidth, pe.minHeight, pe.maxWidth, pe.maxHeight, pe.size, pe.verticalAlign, pe.display, pe.overflow, pe.overflowX, pe.overflowY, ge.opacity, ye.fontSize, ye.fontFamily, ye.fontWeight, ye.lineHeight, ye.textAlign, ye.fontStyle, ye.letterSpacing, we.alignItems, we.alignContent, we.justifyItems, we.justifyContent, we.flexWrap, we.flexDirection, we.flex, we.flexGrow, we.flexShrink, we.flexBasis, we.justifySelf, we.alignSelf, we.order, ke.gridGap, ke.gridColumnGap, ke.gridRowGap, ke.gridColumn, ke.gridRow, ke.gridAutoFlow, ke.gridAutoColumns, ke.gridAutoRows, ke.gridTemplateColumns, ke.gridTemplateRows, ke.gridTemplateAreas, ke.gridArea, Te.borderWidth, Te.borderStyle, Te.borderColor, Te.borderTop, Te.borderRight, Te.borderBottom, Te.borderLeft, Te.borderRadius, Re.backgroundImage, Re.backgroundSize, Re.backgroundPosition, Re.backgroundRepeat, Pe.zIndex, Pe.top, Pe.right, Pe.bottom, Pe.left, function(e) {
                    var t = new RegExp("^(" + e.join("|") + ")$");
                    return Object(J.a)((function(e) {
                        return Object(Q.a)(e) && !t.test(e)
                    }))
                }),
                tt = (et(de(We, be, me, fe, ve, Se, Ae, Ce, je, Be, Je, Qe, $e).propNames), r("5D9J")),
                rt = et(Fe.propNames.concat(ge.propNames)),
                nt = Object(tt.a)("div", {
                    shouldForwardProp: rt
                })({
                    boxSizing: "border-box",
                    margin: 0,
                    minWidth: 0
                }, (function(e) {
                    return Object(Z.a)(e.__css)(e.theme)
                }), (function(e) {
                    var t = e.theme,
                        r = e.variant,
                        n = e.__themeKey;
                    return void 0 === n && (n = "variants"), Object(Z.a)(Object(Z.b)(t, n + "." + r, Object(Z.b)(t, r)))
                }), Fe, ge, (function(e) {
                    return Object(Z.a)(e.sx)(e.theme)
                }), (function(e) {
                    return e.css
                })),
                ot = Object(tt.a)(nt)({
                    display: "flex"
                });
            o.a.forwardRef((function(e, t) {
                var r = e.width,
                    n = e.columns,
                    i = e.gap;
                void 0 === i && (i = 3);
                var a = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["width", "columns", "gap"]),
                    c = r ? function e(t) {
                        return Array.isArray(t) ? t.map(e) : !!t && "repeat(auto-fit, minmax(" + (("number" == typeof(r = t) ? r + "px" : r) + ", 1fr))");
                        var r
                    }(r) : function e(t) {
                        return Array.isArray(t) ? t.map(e) : !!t && ("number" == typeof t ? "repeat(" + t + ", 1fr)" : t)
                    }(n);
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t
                }, a, {
                    __themeKey: "grids",
                    __css: {
                        display: "grid",
                        gridGap: i,
                        gridTemplateColumns: c
                    }
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "button",
                    variant: "primary"
                }, e, {
                    __themeKey: "buttons",
                    __css: {
                        appearance: "none",
                        display: "inline-block",
                        textAlign: "center",
                        lineHeight: "inherit",
                        textDecoration: "none",
                        fontSize: "inherit",
                        px: 3,
                        py: 2,
                        color: "white",
                        bg: "primary",
                        border: 0,
                        borderRadius: 4
                    }
                }))
            }));
            var it = o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        as: "a",
                        variant: "styles.a"
                    }, e, {
                        __themeKey: "links"
                    }))
                })),
                at = (o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t
                    }, e, {
                        __themeKey: "text"
                    }))
                })), o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        as: "h2",
                        variant: "heading"
                    }, e, {
                        __themeKey: "text",
                        __css: {
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading"
                        }
                    }))
                })), o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        as: "img"
                    }, e, {
                        __themeKey: "images",
                        __css: Object.assign({}, {
                            maxWidth: "100%",
                            height: "auto"
                        }, e.__css)
                    }))
                }))),
                ct = (o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        variant: "primary"
                    }, e, {
                        __themeKey: "cards"
                    }))
                })), o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        as: "label",
                        variant: "label"
                    }, e, {
                        __themeKey: "forms",
                        __css: {
                            width: "100%",
                            display: "flex"
                        }
                    }))
                }))),
                st = o.a.forwardRef((function(e, t) {
                    return o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        as: "input",
                        variant: "input"
                    }, e, {
                        __themeKey: "forms",
                        __css: {
                            display: "block",
                            width: "100%",
                            p: 2,
                            appearance: "none",
                            fontSize: "inherit",
                            lineHeight: "inherit",
                            border: "1px solid",
                            borderRadius: 4,
                            color: "inherit",
                            bg: "transparent"
                        }
                    }))
                }));
            var lt = function(e) {
                    var t = e.size;
                    void 0 === t && (t = 24);
                    var r = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["size"]);
                    return o.a.createElement(nt, Object.assign({}, {
                        as: "svg",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t + "",
                        height: t + "",
                        viewBox: "0 0 24 24",
                        fill: "currentcolor"
                    }, r))
                },
                ut = function(e) {
                    return function(t) {
                        var r = {};
                        for (var n in t) e(n || "") && (r[n] = t[n]);
                        return r
                    }
                },
                dt = /^m[trblxy]?$/,
                ft = ut((function(e) {
                    return dt.test(e)
                })),
                pt = ut((function(e) {
                    return !dt.test(e)
                })),
                ht = function(e) {
                    return o.a.createElement(lt, e, o.a.createElement("path", {
                        d: "M7 10l5 5 5-5z"
                    }))
                };
            o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, ft(e), {
                    sx: {
                        display: "flex"
                    }
                }), o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "select",
                    variant: "select"
                }, pt(e), {
                    __themeKey: "forms",
                    __css: {
                        display: "block",
                        width: "100%",
                        p: 2,
                        appearance: "none",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        border: "1px solid",
                        borderRadius: 4,
                        color: "inherit",
                        bg: "transparent"
                    }
                })), o.a.createElement(ht, {
                    sx: {
                        ml: -28,
                        alignSelf: "center",
                        pointerEvents: "none"
                    }
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "textarea",
                    variant: "textarea"
                }, e, {
                    __themeKey: "forms",
                    __css: {
                        display: "block",
                        width: "100%",
                        p: 2,
                        appearance: "none",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        border: "1px solid",
                        borderRadius: 4,
                        color: "inherit",
                        bg: "transparent"
                    }
                }))
            }));
            var mt = function(e) {
                    return o.a.createElement(lt, e, o.a.createElement("path", {
                        d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    }))
                },
                gt = function(e) {
                    return o.a.createElement(lt, e, o.a.createElement("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    }))
                },
                bt = function(e) {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(mt, Object.assign({}, e, {
                        __css: {
                            display: "none",
                            "input:checked ~ &": {
                                display: "block"
                            }
                        }
                    })), o.a.createElement(gt, Object.assign({}, e, {
                        __css: {
                            display: "block",
                            "input:checked ~ &": {
                                display: "none"
                            }
                        }
                    })))
                };
            o.a.forwardRef((function(e, t) {
                var r = e.className,
                    n = e.sx,
                    i = e.variant;
                void 0 === i && (i = "radio");
                var a = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                    return r
                }(e, ["className", "sx", "variant"]);
                return o.a.createElement(nt, null, o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "input",
                    type: "radio"
                }, a, {
                    sx: {
                        position: "absolute",
                        opacity: 0,
                        zIndex: -1,
                        width: 1,
                        height: 1,
                        overflow: "hidden"
                    }
                })), o.a.createElement(nt, {
                    as: bt,
                    "aria-hidden": "true",
                    __themeKey: "forms",
                    variant: i,
                    className: r,
                    sx: n,
                    __css: {
                        mr: 2,
                        borderRadius: 9999,
                        color: "gray",
                        "input:checked ~ &": {
                            color: "primary"
                        },
                        "input:focus ~ &": {
                            bg: "highlight"
                        }
                    }
                }))
            }));
            var yt = function(e) {
                    return o.a.createElement(lt, e, o.a.createElement("path", {
                        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    }))
                },
                vt = function(e) {
                    return o.a.createElement(lt, e, o.a.createElement("path", {
                        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    }))
                },
                wt = function(e) {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(yt, Object.assign({}, e, {
                        __css: {
                            display: "none",
                            "input:checked ~ &": {
                                display: "block"
                            }
                        }
                    })), o.a.createElement(vt, Object.assign({}, e, {
                        __css: {
                            display: "block",
                            "input:checked ~ &": {
                                display: "none"
                            }
                        }
                    })))
                },
                Ot = (o.a.forwardRef((function(e, t) {
                    var r = e.className,
                        n = e.sx,
                        i = e.variant;
                    void 0 === i && (i = "checkbox");
                    var a = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["className", "sx", "variant"]);
                    return o.a.createElement(nt, null, o.a.createElement(nt, Object.assign({}, {
                        ref: t,
                        as: "input",
                        type: "checkbox"
                    }, a, {
                        sx: {
                            position: "absolute",
                            opacity: 0,
                            zIndex: -1,
                            width: 1,
                            height: 1,
                            overflow: "hidden"
                        }
                    })), o.a.createElement(nt, {
                        as: wt,
                        "aria-hidden": "true",
                        __themeKey: "forms",
                        variant: i,
                        className: r,
                        sx: n,
                        __css: {
                            mr: 2,
                            borderRadius: 4,
                            color: "gray",
                            "input:checked ~ &": {
                                color: "primary"
                            },
                            "input:focus ~ &": {
                                color: "primary",
                                bg: "highlight"
                            }
                        }
                    }))
                })), {
                    appearance: "none",
                    width: 16,
                    height: 16,
                    bg: "currentcolor",
                    border: 0,
                    borderRadius: 9999,
                    variant: "forms.slider.thumb"
                });
            o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "input",
                    type: "range",
                    variant: "slider"
                }, e, {
                    __themeKey: "forms",
                    __css: {
                        display: "block",
                        width: "100%",
                        height: 4,
                        my: 2,
                        cursor: "pointer",
                        appearance: "none",
                        borderRadius: 9999,
                        color: "inherit",
                        bg: "gray",
                        ":focus": {
                            outline: "none",
                            color: "primary"
                        },
                        "&::-webkit-slider-thumb": Ot,
                        "&::-moz-range-thumb": Ot,
                        "&::-ms-thumb": Ot
                    }
                }))
            }));
            o.a.forwardRef((function(e, t) {
                var r = e.as;
                void 0 === r && (r = st);
                var n = e.label,
                    i = e.name,
                    a = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["as", "label", "name"]);
                return o.a.createElement(nt, ft(a), o.a.createElement(ct, {
                    htmlFor: i
                }, n), o.a.createElement(r, Object.assign({}, {
                    ref: t,
                    id: i,
                    name: i
                }, pt(a))))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "progress",
                    variant: "styles.progress"
                }, e, {
                    __css: {
                        display: "block",
                        width: "100%",
                        height: "4px",
                        margin: 0,
                        padding: 0,
                        overflow: "hidden",
                        appearance: "none",
                        color: "primary",
                        bg: "gray",
                        borderRadius: 9999,
                        border: "none",
                        "&::-webkit-progress-bar": {
                            bg: "transparent"
                        },
                        "&::-webkit-progress-value": {
                            bg: "currentcolor"
                        },
                        "&::-moz-progress-bar": {
                            bg: "currentcolor"
                        }
                    }
                }))
            }));
            o.a.forwardRef((function(e, t) {
                var r = e.size;
                void 0 === r && (r = 128);
                var n = e.strokeWidth;
                void 0 === n && (n = 2);
                var i = e.value;
                void 0 === i && (i = 0);
                var a = e.min;
                void 0 === a && (a = 0);
                var c = e.max;
                void 0 === c && (c = 1);
                var s = e.title,
                    l = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["size", "strokeWidth", "value", "min", "max", "title"]),
                    u = 16 - n,
                    d = 2 * u * Math.PI,
                    f = d - (i - a) / (c - a) * d;
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "svg",
                    viewBox: "0 0 32 32",
                    width: r,
                    height: r,
                    strokeWidth: n,
                    fill: "none",
                    stroke: "currentcolor",
                    role: "img",
                    "aria-valuenow": i,
                    "aria-valuemin": a,
                    "aria-valuemax": c
                }, l, {
                    __css: {
                        color: "primary"
                    }
                }), s && o.a.createElement("title", null, s), o.a.createElement("circle", {
                    cx: 16,
                    cy: 16,
                    r: u,
                    opacity: 1 / 8
                }), o.a.createElement("circle", {
                    cx: 16,
                    cy: 16,
                    r: u,
                    strokeDasharray: d,
                    strokeDashoffset: f,
                    transform: "rotate(-90 16 16)"
                }))
            }));
            var jt = Object(a.e)({
                from: {
                    transform: "rotate(0deg)"
                },
                to: {
                    transform: "rotate(360deg)"
                }
            });
            o.a.forwardRef((function(e, t) {
                var r = e.size;
                void 0 === r && (r = 48);
                var n = e.strokeWidth;
                void 0 === n && (n = 4);
                var i = e.title;
                void 0 === i && (i = "Loading...");
                var a = e.duration;
                void 0 === a && (a = 500);
                var c = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["size", "strokeWidth", "max", "title", "duration"]),
                    s = 16 - n,
                    l = 2 * s * Math.PI,
                    u = l - 1 / 4 * l;
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "svg",
                    viewBox: "0 0 32 32",
                    width: r,
                    height: r,
                    strokeWidth: n,
                    fill: "none",
                    stroke: "currentcolor",
                    role: "img"
                }, c, {
                    __css: {
                        color: "primary",
                        overflow: "visible"
                    }
                }), o.a.createElement("title", null, i), o.a.createElement("circle", {
                    cx: 16,
                    cy: 16,
                    r: s,
                    opacity: 1 / 8
                }), o.a.createElement(nt, {
                    as: "circle",
                    cx: 16,
                    cy: 16,
                    r: s,
                    strokeDasharray: l,
                    strokeDashoffset: u,
                    __css: {
                        transformOrigin: "50% 50%",
                        animationName: jt.toString(),
                        animationTimingFunction: "linear",
                        animationDuration: a + "ms",
                        animationIterationCount: "infinite"
                    }
                }))
            }));
            o.a.forwardRef((function(e, t) {
                var r = e.size;
                void 0 === r && (r = 48);
                var n = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                    return r
                }(e, ["size"]);
                return o.a.createElement(at, Object.assign({}, {
                    ref: t,
                    width: r,
                    height: r,
                    variant: "avatar"
                }, n, {
                    __css: {
                        borderRadius: 9999
                    }
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t
                }, e, {
                    __themeKey: "badges",
                    __css: {
                        display: "inline-block",
                        verticalAlign: "baseline",
                        fontSize: 0,
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        px: 1,
                        borderRadius: 2,
                        color: "white",
                        bg: "primary"
                    }
                }))
            }));
            var kt = o.a.forwardRef((function(e, t) {
                var r = e.size;
                void 0 === r && (r = 32);
                var n = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                    return r
                }(e, ["size"]);
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "button",
                    variant: "icon"
                }, n, {
                    __themeKey: "buttons",
                    __css: {
                        appearance: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 1,
                        width: r,
                        height: r,
                        color: "inherit",
                        bg: "transparent",
                        border: "none",
                        borderRadius: 4
                    }
                }))
            }));
            var xt = o.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                fill: "currentcolor",
                viewBox: "0 0 24 24"
            }, o.a.createElement("path", {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            }));
            o.a.forwardRef((function(e, t) {
                var r = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                    return r
                }(e, ["size"]);
                return o.a.createElement(kt, Object.assign({}, {
                    ref: t,
                    title: "Close",
                    "aria-label": "Close",
                    variant: "close"
                }, r, {
                    children: xt
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t
                }, e, {
                    __themeKey: "alerts",
                    __css: {
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        py: 2,
                        fontWeight: "bold",
                        color: "white",
                        bg: "primary",
                        borderRadius: 4
                    }
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    as: "hr",
                    variant: "styles.hr"
                }, e, {
                    __css: {
                        color: "gray",
                        m: 0,
                        my: 2,
                        border: 0,
                        borderBottom: "1px solid"
                    }
                }))
            }));
            o.a.forwardRef((function(e, t) {
                var r = e.ratio;
                void 0 === r && (r = 16 / 9);
                var n = e.src,
                    i = e.frameBorder;
                void 0 === i && (i = 0);
                var a = e.allowFullScreen;
                void 0 === a && (a = !0);
                var c = e.width;
                void 0 === c && (c = 560);
                var s = e.height;
                void 0 === s && (s = 315);
                var l = e.allow,
                    u = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"]);
                return o.a.createElement(nt, Object.assign({}, u, {
                    __css: {
                        width: "100%",
                        height: 0,
                        paddingBottom: 100 / r + "%",
                        position: "relative",
                        overflow: "hidden"
                    }
                }), o.a.createElement(nt, {
                    ref: t,
                    as: "iframe",
                    src: n,
                    width: c,
                    height: s,
                    frameBorder: i,
                    allowFullScreen: a,
                    allow: l,
                    __css: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        border: 0
                    }
                }))
            }));
            var St = o.a.forwardRef((function(e, t) {
                var r = e.ratio;
                void 0 === r && (r = 4 / 3);
                var n = e.children,
                    i = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["ratio", "children"]);
                return o.a.createElement(nt, {
                    ref: t,
                    sx: {
                        position: "relative",
                        overflow: "hidden"
                    }
                }, o.a.createElement(nt, {
                    sx: {
                        width: "100%",
                        height: 0,
                        paddingBottom: 100 / r + "%"
                    }
                }), o.a.createElement(nt, Object.assign({}, i, {
                    __css: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }), n))
            }));
            o.a.forwardRef((function(e, t) {
                var r = e.ratio,
                    n = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
                        return r
                    }(e, ["ratio"]);
                return o.a.createElement(St, {
                    ratio: r
                }, o.a.createElement(at, Object.assign({}, {
                    ref: t
                }, n, {
                    __css: {
                        objectFit: "cover"
                    }
                })))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t,
                    variant: "container"
                }, e, {
                    __themeKey: "layout",
                    __css: {
                        width: "100%",
                        maxWidth: "container",
                        mx: "auto"
                    }
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(it, Object.assign({}, {
                    ref: t,
                    variant: "nav"
                }, e, {
                    __css: {
                        color: "inherit",
                        textDecoration: "none",
                        fontWeight: "bold",
                        display: "inline-block",
                        "&:hover, &:focus, &.active": {
                            color: "primary"
                        }
                    }
                }))
            })), o.a.forwardRef((function(e, t) {
                return o.a.createElement(nt, Object.assign({}, {
                    ref: t
                }, e, {
                    __themeKey: "messages",
                    __css: {
                        padding: 3,
                        paddingLeft: function(e) {
                            return e.space[3] - e.space[1]
                        },
                        borderLeftWidth: function(e) {
                            return e.space[1]
                        },
                        borderLeftStyle: "solid",
                        borderLeftColor: "primary",
                        borderRadius: 4,
                        bg: "highlight"
                    }
                }))
            }));
            var Tt = function(e) {
                    var t = e.size;
                    return void 0 === t && (t = 24), o.a.createElement(nt, {
                        as: "svg",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        fill: "currentcolor",
                        viewBox: "0 0 24 24",
                        sx: {
                            display: "block",
                            margin: 0
                        }
                    }, o.a.createElement("path", {
                        d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    }))
                },
                Et = (o.a.forwardRef((function(e, t) {
                    return o.a.createElement(kt, Object.assign({}, {
                        ref: t,
                        title: "Menu",
                        "aria-label": "Toggle Menu",
                        variant: "menu"
                    }, e), o.a.createElement(Tt, null))
                })), function() {
                    var e = Object(X.b)(),
                        t = e[0],
                        r = e[1],
                        n = "dark" === t;
                    return Object(c.c)(nt, {
                        as: "footer",
                        variant: "footer"
                    }, Object(c.c)("button", {
                        sx: {
                            variant: "buttons.toggle",
                            fontWeight: "semibold",
                            display: "block",
                            mx: "auto",
                            mb: 3
                        },
                        onClick: function(e) {
                            r(n ? "light" : "dark")
                        },
                        type: "button",
                        "aria-label": "Toggle dark mode"
                    }, n ? "Light" : "Dark"), "Copyright © ", (new Date).getFullYear(), ". All rights reserved.", Object(c.c)("br", null), Object(c.c)(ot, {
                        sx: {
                            justifyContent: "center",
                            alignItems: "center",
                            mt: 3,
                            color: "text",
                            fontWeight: "semibold",
                            a: {
                                color: "text"
                            }
                        }
                    }, ))
                });

            function At() {
                return (At = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Rt = {
                _frontmatter: {}
            };

            function _t(e) {
                var t = e.components,
                    r = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o
                    }(e, ["components"]);
                return Object(M.b)("wrapper", At({}, Rt, r, {
                    components: t,
                    mdxType: "MDXLayout"
                }), Object(M.b)("h2", null, "Find My ", Object(M.b)("a", At({
                    parentName: "h2"
                }, {
                    href: ""
                }), "Resume")), Object(M.b)("h3", null, "Get in touch!"), Object(M.b)("p", null, "Say ", Object(M.b)("a", At({
                    parentName: "p"
                }, {
                    href: "mail://takankhar@gmail.com"
                }), "Hi"), " or find me on other platforms : ", Object(M.b)("a", At({
                    parentName: "p"
                }, {
                    href: "https://facebook.com/meshubham"
                }), "Facebook"), "\n", Object(M.b)("a", At({
                    parentName: "p"
                }, {
                    href: "https://t.me/digitl_shado"
                }), "Telegram"), "\n", Object(M.b)("a", At({
                    parentName: "p"
                }, {
                    href: "https://github.com/geekyshubham"
                }), "GitHub")))
            }
            _t.isMDXComponent = !0;
            var Ct, Pt = Object(j.a)("div", {
                    target: "e160gkj90"
                })("path{", (Ct = "20s", Object(a.c)("animation:", E, " ", Ct, " linear infinite alternate;")), ";}"),
                Lt = function(e) {
                    var t = e.offset,
                        r = e.factor,
                        n = void 0 === r ? 1 : r;
                    return Object(c.c)("div", null, Object(c.c)(m, {
                        fill: "divider",
                        speed: .2,
                        offset: t,
                        factor: n
                    }, Object(c.c)("div", {
                        sx: {
                            position: "absolute",
                            bottom: 0,
                            width: "full",
                            transform: "matrix(1, 0, 0, -1, 0, 0)"
                        }
                    }, Object(c.c)(Pt, {
                        sx: {
                            position: "relative",
                            height: "full",
                            svg: {
                                width: "100%",
                                height: "40vh"
                            }
                        }
                    }, Object(c.c)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        id: "contact-wave",
                        viewBox: "0 0 800 338.05",
                        preserveAspectRatio: "none"
                    }, Object(c.c)("path", null, Object(c.c)("animate", {
                        attributeName: "d",
                        values: "M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z",
                        repeatCount: "indefinite",
                        dur: "30s"
                    })))))), Object(c.c)(b, {
                        speed: .4,
                        offset: t,
                        factor: n
                    }, Object(c.c)(g, null, Object(c.c)(_t, null)), Object(c.c)(Et, null)), Object(c.c)(m, {
                        speed: .1,
                        offset: t,
                        factor: n
                    }, Object(c.c)(P, null, Object(c.c)(O, {
                        icon: "upDown",
                        hiddenMobile: !0,
                        width: 8,
                        color: "icon_darkest",
                        left: "70%",
                        top: "20%"
                    }), Object(c.c)(O, {
                        icon: "triangle",
                        width: 8,
                        stroke: !0,
                        color: "icon_darkest",
                        left: "25%",
                        top: "5%"
                    })), Object(c.c)(L, null, Object(c.c)(O, {
                        icon: "triangle",
                        width: 12,
                        stroke: !0,
                        color: "icon_brightest",
                        left: "95%",
                        top: "50%"
                    }), Object(c.c)(O, {
                        icon: "circle",
                        width: 6,
                        color: "icon_brightest",
                        left: "85%",
                        top: "15%"
                    }), Object(c.c)(O, {
                        icon: "upDown",
                        hiddenMobile: !0,
                        width: 8,
                        color: "icon_darkest",
                        left: "45%",
                        top: "10%"
                    })), Object(c.c)(O, {
                        icon: "circle",
                        width: 6,
                        color: "icon_brightest",
                        left: "4%",
                        top: "20%"
                    }), Object(c.c)(O, {
                        icon: "circle",
                        width: 12,
                        color: "icon_darkest",
                        left: "70%",
                        top: "60%"
                    }), Object(c.c)(O, {
                        icon: "box",
                        width: 12,
                        color: "icon_darkest",
                        left: "20%",
                        top: "30%"
                    }), Object(c.c)(O, {
                        icon: "hexa",
                        width: 8,
                        stroke: !0,
                        color: "icon_darkest",
                        left: "80%",
                        top: "70%"
                    })))
                };
            t.default = function() {
                return Object(a.d)(h, null, Object(a.d)(i.Parallax, {
                    pages: 5
                }, Object(a.d)(F, {
                    offset: 0,
                    factor: 1
                }), Object(a.d)(K, {
                    offset: 1,
                    factor: 2
                }), Object(a.d)(Y, {
                    offset: 3,
                    factor: 1
                }), Object(a.d)(Lt, {
                    offset: 4,
                    factor: 1
                })))
            }
        },
        Bnag: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        DW2E: function(e, t, r) {
            var n = r("0/R4"),
                o = r("Z6vF").onFreeze;
            r("Xtr8")("freeze", (function(e) {
                return function(t) {
                    return e && n(t) ? e(o(t)) : t
                }
            }))
        },
        EbDI: function(e, t) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        I5cv: function(e, t, r) {
            var n = r("XKFU"),
                o = r("Kuth"),
                i = r("2OiF"),
                a = r("y3w9"),
                c = r("0/R4"),
                s = r("eeVq"),
                l = r("8MEG"),
                u = (r("dyZX").Reflect || {}).construct,
                d = s((function() {
                    function e() {}
                    return !(u((function() {}), [], e) instanceof e)
                })),
                f = !s((function() {
                    u((function() {}))
                }));
            n(n.S + n.F * (d || f), "Reflect", {
                construct: function(e, t) {
                    i(e), a(t);
                    var r = arguments.length < 3 ? e : i(arguments[2]);
                    if (f && !d) return u(e, t, r);
                    if (e == r) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var n = [null];
                        return n.push.apply(n, t), new(l.apply(e, n))
                    }
                    var s = r.prototype,
                        p = o(c(s) ? s : Object.prototype),
                        h = Function.apply.call(e, p, t);
                    return c(h) ? h : p
                }
            })
        },
        INYr: function(e, t, r) {
            "use strict";
            var n = r("XKFU"),
                o = r("CkkT")(6),
                i = "findIndex",
                a = !0;
            i in [] && Array(1)[i]((function() {
                a = !1
            })), n(n.P + n.F * a, "Array", {
                findIndex: function(e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), r("nGyu")(i)
        },
        Ijbi: function(e, t, r) {
            var n = r("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return n(e)
            }
        },
        Nr18: function(e, t, r) {
            "use strict";
            var n = r("S/j/"),
                o = r("d/Gc"),
                i = r("ne8i");
            e.exports = function(e) {
                for (var t = n(this), r = i(t.length), a = arguments.length, c = o(a > 1 ? arguments[1] : void 0, r), s = a > 2 ? arguments[2] : void 0, l = void 0 === s ? r : o(s, r); l > c;) t[c++] = e;
                return t
            }
        },
        Nsbk: function(e, t) {
            function r(t) {
                return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, r(t)
            }
            e.exports = r
        },
        P4c3: function(e, t, r) {
            "use strict";
            r("rE2o"), r("ioFf"), r("INYr"), r("dRSK"), r("0l/t"), r("HEwt"), r("VRzm"), r("9VmF"), r("f3/d"), r("Tze0"), r("dZ+Y"), r("/8Fb");
            var n = r("lSNA");
            r("DNiP"), r("XfO3"), r("T39b");
            var o = r("RIqP");
            r("SRfc"), r("pIFo"), r("Oyvg"), r("LK8F"), r("8+KV"), r("a1Th"), r("h7Nl"), r("I5cv"), r("V+eJ");
            var i = r("PJYZ"),
                a = r("7W2i"),
                c = r("a1gu"),
                s = r("Nsbk");
            r("rGqo"), r("yt8O"), r("Btvt"), r("RW0V"), r("bWfx");
            var l = r("lwsE"),
                u = r("W8MJ");

            function d(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return f(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return c(this, r)
                }
            }

            function h(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            r("DW2E"), r("eM6i"), r("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var m = h(r("zLVn")),
                g = h(r("wx14")),
                b = h(r("q1tI")),
                y = h(r("i8i4")),
                v = void 0,
                w = void 0,
                O = [],
                j = function(e) {
                    return "undefined" != typeof window && window.requestAnimationFrame(e)
                },
                k = function(e) {
                    return "undefined" != typeof window && window.cancelAnimationFrame(e)
                },
                x = void 0,
                S = function() {
                    return Date.now()
                },
                T = void 0,
                E = void 0,
                A = function(e, t) {
                    return w = {
                        fn: e,
                        transform: t
                    }
                },
                R = function(e) {
                    return O = e
                },
                _ = function(e) {
                    return v = e
                },
                C = function(e) {
                    return x = e
                },
                P = function(e) {
                    return T = e
                },
                L = function(e) {
                    return E = e
                },
                M = Object.freeze({
                    get bugfixes() {
                        return v
                    },
                    get applyAnimatedValues() {
                        return w
                    },
                    get colorNames() {
                        return O
                    },
                    get requestFrame() {
                        return j
                    },
                    get cancelFrame() {
                        return k
                    },
                    get interpolation() {
                        return x
                    },
                    get now() {
                        return S
                    },
                    get defaultElement() {
                        return T
                    },
                    get createAnimatedStyle() {
                        return E
                    },
                    injectApplyAnimatedValues: A,
                    injectColorNames: R,
                    injectBugfixes: _,
                    injectInterpolation: C,
                    injectFrame: function(e, t) {
                        var r = [e, t];
                        return j = r[0], k = r[1], r
                    },
                    injectNow: function(e) {
                        return S = e
                    },
                    injectDefaultElement: P,
                    injectCreateAnimatedStyle: L
                }),
                I = function() {
                    function e() {
                        l(this, e)
                    }
                    return u(e, [{
                        key: "attach",
                        value: function() {}
                    }, {
                        key: "detach",
                        value: function() {}
                    }, {
                        key: "getValue",
                        value: function() {}
                    }, {
                        key: "getAnimatedValue",
                        value: function() {
                            return this.getValue()
                        }
                    }, {
                        key: "addChild",
                        value: function(e) {}
                    }, {
                        key: "removeChild",
                        value: function(e) {}
                    }, {
                        key: "getChildren",
                        value: function() {
                            return []
                        }
                    }]), e
                }(),
                z = function(e) {
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                },
                W = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r() {
                        var e, n;
                        return l(this, r), e = t.apply(this, arguments), n = i(e), e.children = [], e.getChildren = function() {
                            return e.children
                        }, e.getPayload = function(e) {
                            return void 0 === e && (e = void 0), void 0 !== e && n.payload ? n.payload[e] : n.payload || n
                        }, e
                    }
                    return u(r, [{
                        key: "addChild",
                        value: function(e) {
                            0 === this.children.length && this.attach(), this.children.push(e)
                        }
                    }, {
                        key: "removeChild",
                        value: function(e) {
                            var t = this.children.indexOf(e);
                            this.children.splice(t, 1), 0 === this.children.length && this.detach()
                        }
                    }]), r
                }(I),
                F = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r() {
                        var e;
                        return l(this, r), (e = t.apply(this, arguments)).payload = [], e.getAnimatedValue = function() {
                            return e.getValue()
                        }, e.attach = function() {
                            return e.payload.forEach((function(t) {
                                return t instanceof I && t.addChild(i(e))
                            }))
                        }, e.detach = function() {
                            return e.payload.forEach((function(t) {
                                return t instanceof I && t.removeChild(i(e))
                            }))
                        }, e
                    }
                    return r
                }(W),
                B = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r() {
                        var e;
                        return l(this, r), (e = t.apply(this, arguments)).payload = {}, e.getAnimatedValue = function() {
                            return e.getValue(!0)
                        }, e.attach = function() {
                            return z(e.payload).forEach((function(t) {
                                return t instanceof I && t.addChild(i(e))
                            }))
                        }, e.detach = function() {
                            return z(e.payload).forEach((function(t) {
                                return t instanceof I && t.removeChild(i(e))
                            }))
                        }, e
                    }
                    return u(r, [{
                        key: "getValue",
                        value: function(e) {
                            void 0 === e && (e = !1);
                            var t = {};
                            for (var r in this.payload) {
                                var n = this.payload[r];
                                (!e || n instanceof I) && (t[r] = n instanceof I ? n[e ? "getAnimatedValue" : "getValue"]() : n)
                            }
                            return t
                        }
                    }]), r
                }(W),
                D = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r(e) {
                        var n;
                        return l(this, r), n = t.call(this), !(e = e || {}).transform || e.transform instanceof I || (e = w.transform(e)), n.payload = e, n
                    }
                    return r
                }(B),
                V = {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                },
                N = function() {
                    function e() {
                        l(this, e)
                    }
                    return u(e, null, [{
                        key: "create",
                        value: function(t, r, n) {
                            if ("function" == typeof t) return t;
                            if (x && t.output && "string" == typeof t.output[0]) return x(t);
                            if (Array.isArray(t)) return e.create({
                                range: t,
                                output: r,
                                extrapolate: n || "extend"
                            });
                            var o = t.output,
                                i = t.range || [0, 1],
                                a = t.easing || function(e) {
                                    return e
                                },
                                c = "extend",
                                s = t.map;
                            void 0 !== t.extrapolateLeft ? c = t.extrapolateLeft : void 0 !== t.extrapolate && (c = t.extrapolate);
                            var l = "extend";
                            return void 0 !== t.extrapolateRight ? l = t.extrapolateRight : void 0 !== t.extrapolate && (l = t.extrapolate),
                                function(e) {
                                    var t = function(e, t) {
                                        for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                                        return r - 1
                                    }(e, i);
                                    return function(e, t, r, n, o, i, a, c, s) {
                                        var l = s ? s(e) : e;
                                        if (l < t) {
                                            if ("identity" === a) return l;
                                            "clamp" === a && (l = t)
                                        }
                                        if (l > r) {
                                            if ("identity" === c) return l;
                                            "clamp" === c && (l = r)
                                        }
                                        if (n === o) return n;
                                        if (t === r) return e <= t ? n : o;
                                        t === -1 / 0 ? l = -l : r === 1 / 0 ? l -= t : l = (l - t) / (r - t);
                                        l = i(l), n === -1 / 0 ? l = -l : o === 1 / 0 ? l += n : l = l * (o - n) + n;
                                        return l
                                    }(e, i[t], i[t + 1], o[t], o[t + 1], a, c, l, s)
                                }
                        }
                    }]), e
                }();
            var H = "[-+]?\\d*\\.?\\d+";

            function K() {
                return "\\(\\s*(" + Array.prototype.slice.call(arguments).join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var q = new RegExp("rgb" + K(H, H, H)),
                U = new RegExp("rgba" + K(H, H, H, H)),
                G = new RegExp("hsl" + K(H, "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%")),
                Y = new RegExp("hsla" + K(H, "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", H)),
                X = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                Z = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                J = /^#([0-9a-fA-F]{6})$/,
                Q = /^#([0-9a-fA-F]{8})$/;

            function $(e, t, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }

            function ee(e, t, r) {
                var n = r < .5 ? r * (1 + t) : r + t - r * t,
                    o = 2 * r - n,
                    i = $(o, n, e + 1 / 3),
                    a = $(o, n, e),
                    c = $(o, n, e - 1 / 3);
                return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * c) << 8
            }

            function te(e) {
                var t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }

            function re(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }

            function ne(e) {
                var t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }

            function oe(e) {
                var t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }

            function ie(e) {
                var t, r, n = "number" == typeof(t = e) ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (r = J.exec(t)) ? parseInt(r[1] + "ff", 16) >>> 0 : V.hasOwnProperty(t) ? V[t] : (r = q.exec(t)) ? (te(r[1]) << 24 | te(r[2]) << 16 | te(r[3]) << 8 | 255) >>> 0 : (r = U.exec(t)) ? (te(r[1]) << 24 | te(r[2]) << 16 | te(r[3]) << 8 | ne(r[4])) >>> 0 : (r = X.exec(t)) ? parseInt(r[1] + r[1] + r[2] + r[2] + r[3] + r[3] + "ff", 16) >>> 0 : (r = Q.exec(t)) ? parseInt(r[1], 16) >>> 0 : (r = Z.exec(t)) ? parseInt(r[1] + r[1] + r[2] + r[2] + r[3] + r[3] + r[4] + r[4], 16) >>> 0 : (r = G.exec(t)) ? (255 | ee(re(r[1]), oe(r[2]), oe(r[3]))) >>> 0 : (r = Y.exec(t)) ? (ee(re(r[1]), oe(r[2]), oe(r[3])) | ne(r[4])) >>> 0 : null;
                if (null === n) return e;
                var o = (16711680 & (n = n || 0)) >>> 16,
                    i = (65280 & n) >>> 8,
                    a = (255 & n) / 255;
                return "rgba(".concat((4278190080 & n) >>> 24, ", ").concat(o, ", ").concat(i, ", ").concat(a, ")")
            }
            var ae = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                ce = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                se = new RegExp("(".concat(Object.keys(V).join("|"), ")"), "g");
            var le = function(e) {
                a(r, e);
                var t = p(r);

                function r(e, n, a) {
                    var c;
                    return l(this, r), (c = t.call(this)).getValue = function() {
                        var e;
                        return (e = c).calc.apply(e, o(c.payload.map((function(e) {
                            return e.getValue()
                        }))))
                    }, c.updateConfig = function(e, t) {
                        return c.calc = N.create(e, t)
                    }, c.interpolate = function(e, t) {
                        return new r(i(c), e, t)
                    }, c.payload = e instanceof F && !e.updateConfig ? e.payload : Array.isArray(e) ? e : [e], c.calc = N.create(n, a), c
                }
                return r
            }(F);
            var ue = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r(e) {
                        var n, o;
                        return l(this, r), n = t.call(this), o = i(n), n.setValue = function(e, t) {
                            void 0 === t && (t = !0), o.value = e, t && o.flush()
                        }, n.getValue = function() {
                            return n.value
                        }, n.updateStyles = function() {
                            return function e(t, r) {
                                "function" == typeof t.update ? r.add(t) : t.getChildren().forEach((function(t) {
                                    return e(t, r)
                                }))
                            }(i(n), n.animatedStyles)
                        }, n.updateValue = function(e) {
                            return n.flush(n.value = e)
                        }, n.interpolate = function(e, t) {
                            return new le(i(n), e, t)
                        }, n.value = e, n.animatedStyles = new Set, n.done = !1, n.startPosition = e, n.lastPosition = e, n.lastVelocity = void 0, n.lastTime = void 0, n.controller = void 0, n
                    }
                    return u(r, [{
                        key: "flush",
                        value: function() {
                            0 === this.animatedStyles.size && this.updateStyles(), this.animatedStyles.forEach((function(e) {
                                return e.update()
                            }))
                        }
                    }, {
                        key: "prepare",
                        value: function(e) {
                            void 0 === this.controller && (this.controller = e), this.controller === e && (this.startPosition = this.value, this.lastPosition = this.value, this.lastVelocity = e.isActive ? this.lastVelocity : void 0, this.lastTime = e.isActive ? this.lastTime : void 0, this.done = !1, this.animatedStyles.clear())
                        }
                    }]), r
                }(W),
                de = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r(e) {
                        var n, o;
                        return l(this, r), n = t.call(this), o = i(n), n.setValue = function(e, t) {
                            void 0 === t && (t = !0), Array.isArray(e) ? e.length === o.payload.length && e.forEach((function(e, r) {
                                return o.payload[r].setValue(e, t)
                            })) : o.payload.forEach((function(r, n) {
                                return o.payload[n].setValue(e, t)
                            }))
                        }, n.getValue = function() {
                            return n.payload.map((function(e) {
                                return e.getValue()
                            }))
                        }, n.interpolate = function(e, t) {
                            return new le(i(n), e, t)
                        }, n.payload = e.map((function(e) {
                            return new ue(e)
                        })), n
                    }
                    return r
                }(F);

            function fe(e, t) {
                return null == e ? t : e
            }

            function pe(e) {
                return void 0 !== e ? Array.isArray(e) ? e : [e] : []
            }

            function he(e, t) {
                if (typeof e != typeof t) return !1;
                if ("string" == typeof e || "number" == typeof e) return e === t;
                var r;
                for (r in e)
                    if (!(r in t)) return !1;
                for (r in t)
                    if (e[r] !== t[r]) return !1;
                return void 0 !== r || e === t
            }

            function me(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return "function" == typeof e ? e.apply(void 0, r) : e
            }

            function ge(e) {
                return Object.keys(e).map((function(t) {
                    return e[t]
                }))
            }

            function be(e) {
                var t = function(e) {
                        return e.to, e.from, e.config, e.native, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.impl, e.inject, e.delay, e.attach, e.destroyed, e.interpolateTo, e.autoStart, e.ref, m(e, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"])
                    }(e),
                    r = Object.keys(e).reduce((function(r, o) {
                        return void 0 !== t[o] ? r : g({}, r, n({}, o, e[o]))
                    }), {});
                return g({
                    to: t
                }, r)
            }

            function ye(e, t) {
                var r = t[0],
                    o = t[1];
                return g({}, e, n({}, r, new(Array.isArray(o) ? de : ue)(o)))
            }

            function ve(e) {
                var t = e.from,
                    r = e.to,
                    n = e.native,
                    o = Object.entries(g({}, t, r));
                return n ? o.reduce(ye, {}) : g({}, t, r)
            }

            function we(e, t) {
                return t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e
            }
            var Oe = function(e) {
                return "auto" === e
            };
            var je = {
                    animationIterationCount: !0,
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
                    strokeWidth: !0
                },
                ke = ["Webkit", "Ms", "Moz", "O"];

            function xe(e, t, r) {
                return null == t || "boolean" == typeof t || "" === t ? "" : r || "number" != typeof t || 0 === t || je.hasOwnProperty(e) && je[e] ? ("" + t).trim() : t + "px"
            }
            je = Object.keys(je).reduce((function(e, t) {
                return ke.forEach((function(r) {
                    return e[function(e, t) {
                        return e + t.charAt(0).toUpperCase() + t.substring(1)
                    }(r, t)] = e[t]
                })), e
            }), je);
            var Se = {};
            L((function(e) {
                return new D(e)
            })), P("div"), C((function(e) {
                var t = e.output.map((function(e) {
                        return e.replace(ce, ie)
                    })).map((function(e) {
                        return e.replace(se, ie)
                    })),
                    r = t[0].match(ae).map((function() {
                        return []
                    }));
                t.forEach((function(e) {
                    e.match(ae).forEach((function(e, t) {
                        return r[t].push(+e)
                    }))
                }));
                var n = t[0].match(ae).map((function(t, n) {
                    return N.create(g({}, e, {
                        output: r[n]
                    }))
                }));
                return function(e) {
                    var r = 0;
                    return t[0].replace(ae, (function() {
                        return n[r++](e)
                    })).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (function(e, t, r, n, o) {
                        return "rgba(".concat(Math.round(t), ", ").concat(Math.round(r), ", ").concat(Math.round(n), ", ").concat(o, ")")
                    }))
                }
            })), R(V), _((function(e, t) {
                var r = e.from,
                    o = e.to,
                    i = e.children;
                if (ge(o).some(Oe) || ge(r).some(Oe)) {
                    var a = i(ve(e));
                    if (a) {
                        Array.isArray(a) && (a = {
                            type: "div",
                            props: {
                                children: a
                            }
                        });
                        var c = a.props.style;
                        return b.createElement(a.type, g({
                            key: a.key ? a.key : void 0
                        }, a.props, {
                            style: g({}, c, {
                                position: "absolute",
                                visibility: "hidden"
                            }),
                            ref: function(i) {
                                if (i) {
                                    var a, c, s = y.findDOMNode(i),
                                        l = getComputedStyle(s);
                                    if ("border-box" === l.boxSizing) a = s.offsetWidth, c = s.offsetHeight;
                                    else {
                                        var u = parseFloat(l.paddingLeft || 0) + parseFloat(l.paddingRight || 0),
                                            d = parseFloat(l.paddingTop || 0) + parseFloat(l.paddingBottom || 0),
                                            f = parseFloat(l.borderLeftWidth || 0) + parseFloat(l.borderRightWidth || 0),
                                            p = parseFloat(l.borderTopWidth || 0) + parseFloat(l.borderBottomWidth || 0);
                                        a = s.offsetWidth - u - f, c = s.offsetHeight - d - p
                                    }
                                    var h = function(e, t) {
                                        return function(r, o) {
                                            var i = o[0],
                                                a = o[1];
                                            return g({}, r, n({}, i, "auto" === a ? ~i.indexOf("height") ? t : e : a))
                                        }
                                    }(a, c);
                                    t(g({}, e, {
                                        from: Object.entries(r).reduce(h, r),
                                        to: Object.entries(o).reduce(h, o)
                                    }))
                                }
                            }
                        }))
                    }
                }
            })), A((function(e, t) {
                if (!e.nodeType || void 0 === e.setAttribute) return !1;
                var r = t.style,
                    n = t.children,
                    o = t.scrollTop,
                    i = t.scrollLeft,
                    a = m(t, ["style", "children", "scrollTop", "scrollLeft"]);
                for (var c in void 0 !== o && (e.scrollTop = o), void 0 !== i && (e.scrollLeft = i), void 0 !== n && (e.textContent = n), r)
                    if (r.hasOwnProperty(c)) {
                        var s = 0 === c.indexOf("--"),
                            l = xe(c, r[c], s);
                        "float" === c && (c = "cssFloat"), s ? e.style.setProperty(c, l) : e.style[c] = l
                    } for (var u in a) {
                    var d = Se[u] || (Se[u] = u.replace(/([A-Z])/g, (function(e) {
                        return "-" + e.toLowerCase()
                    })));
                    void 0 !== e.getAttribute(d) && e.setAttribute(d, a[u])
                }
            }), (function(e) {
                return e
            }));
            var Te = !1,
                Ee = new Set,
                Ae = function e() {
                    var t, r = S(),
                        n = d(Ee);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            for (var o = t.value, i = !0, a = !0, c = 0; c < o.configs.length; c++) {
                                for (var s = o.configs[c], l = void 0, u = void 0, f = 0; f < s.animatedValues.length; f++) {
                                    var p = s.animatedValues[f];
                                    if (!p.done) {
                                        var h = s.fromValues[f],
                                            m = s.toValues[f],
                                            g = p.lastPosition,
                                            b = m instanceof I,
                                            y = Array.isArray(s.initialVelocity) ? s.initialVelocity[f] : s.initialVelocity;
                                        if (b && (m = m.getValue()), s.immediate || !b && !s.decay && h === m) p.updateValue(m), p.done = !0;
                                        else if (s.delay && r - o.startTime < s.delay) i = !1;
                                        else if (a = !1, "string" != typeof h && "string" != typeof m) {
                                            if (void 0 !== s.duration) g = h + s.easing((r - o.startTime - s.delay) / s.duration) * (m - h), l = r >= o.startTime + s.delay + s.duration;
                                            else if (s.decay) g = h + y / (1 - .998) * (1 - Math.exp(-(1 - .998) * (r - o.startTime))), (l = Math.abs(p.lastPosition - g) < .1) && (m = g);
                                            else {
                                                u = void 0 !== p.lastTime ? p.lastTime : r, y = void 0 !== p.lastVelocity ? p.lastVelocity : s.initialVelocity, r > u + 64 && (u = r);
                                                for (var v = Math.floor(r - u), w = 0; w < v; ++w) {
                                                    g += 1 * (y += 1 * ((-s.tension * (g - m) + -s.friction * y) / s.mass) / 1e3) / 1e3
                                                }
                                                var O = !(!s.clamp || 0 === s.tension) && (h < m ? g > m : g < m),
                                                    k = Math.abs(y) <= s.precision,
                                                    x = 0 === s.tension || Math.abs(m - g) <= s.precision;
                                                l = O || k && x, p.lastVelocity = y, p.lastTime = r
                                            }
                                            b && !s.toValues[f].done && (l = !1), l ? (p.value !== m && (g = m), p.done = !0) : i = !1, p.updateValue(g), p.lastPosition = g
                                        } else p.updateValue(m), p.done = !0
                                    }
                                }!o.props.onFrame && o.props.native || (o.animatedProps[s.name] = s.interpolation.getValue())
                            }!o.props.onFrame && o.props.native || (!o.props.native && o.onUpdate && o.onUpdate(), o.props.onFrame && o.props.onFrame(o.animatedProps)), i && (Ee.delete(o), o.debouncedOnEnd({
                                finished: !0,
                                noChange: a
                            }))
                        }
                    } catch (T) {
                        n.e(T)
                    } finally {
                        n.f()
                    }
                    Ee.size ? j(e) : Te = !1
                },
                Re = function(e) {
                    Ee.has(e) && Ee.delete(e)
                },
                _e = function() {
                    function e(t, r) {
                        var n = this;
                        l(this, e), void 0 === r && (r = {
                            native: !0,
                            interpolateTo: !0,
                            autoStart: !0
                        }), this.getValues = function() {
                            return n.props.native ? n.interpolations : n.animatedProps
                        }, this.dependents = new Set, this.isActive = !1, this.hasChanged = !1, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.animatedProps = {}, this.configs = [], this.frame = void 0, this.startTime = void 0, this.lastTime = void 0, this.update(g({}, t, r))
                    }
                    return u(e, [{
                        key: "update",
                        value: function(e) {
                            var t = this;
                            this.props = g({}, this.props, e);
                            var r = this.props.interpolateTo ? be(this.props) : this.props,
                                o = r.from,
                                i = void 0 === o ? {} : o,
                                a = r.to,
                                c = void 0 === a ? {} : a,
                                s = r.config,
                                l = void 0 === s ? {} : s,
                                u = r.delay,
                                d = void 0 === u ? 0 : u,
                                f = r.reverse,
                                p = r.attach,
                                h = r.reset,
                                m = r.immediate,
                                b = r.autoStart,
                                y = r.ref;
                            if (f) {
                                var v = [c, i];
                                i = v[0], c = v[1]
                            }
                            this.hasChanged = !1;
                            var w = p && p(this),
                                j = h ? {} : this.merged;
                            if (this.merged = g({}, i, j, c), this.animations = Object.entries(this.merged).reduce((function(e, r, o) {
                                    var a, c, s = r[0],
                                        u = r[1],
                                        f = !h && e[s] || {},
                                        p = "number" == typeof u,
                                        b = "string" == typeof u && !u.startsWith("#") && !/\d/.test(u) && !O[u],
                                        y = !p && !b && Array.isArray(u),
                                        v = void 0 !== i[s] ? i[s] : u,
                                        j = p || y || b ? u : 1,
                                        k = me(l, s);
                                    if (w && (j = w.animations[s].parent), void 0 === k.decay && he(f.changes, u)) return e;
                                    if (t.hasChanged = !0, p || b) a = c = f.parent || new ue(v);
                                    else if (y) a = c = f.parent || new de(v);
                                    else {
                                        var x = f.interpolation && f.interpolation.calc(f.parent.value);
                                        f.parent ? (a = f.parent).setValue(0, !1) : a = new ue(0);
                                        var S = {
                                            output: [void 0 !== x ? x : v, u]
                                        };
                                        f.interpolation ? (c = f.interpolation, f.interpolation.updateConfig(S)) : c = a.interpolate(S)
                                    }
                                    me(m, s) && a.setValue(u, !1);
                                    var T = pe(a.getPayload());
                                    return T.forEach((function(e) {
                                        return e.prepare(t)
                                    })), g({}, e, n({}, s, g({}, f, {
                                        name: s,
                                        parent: a,
                                        interpolation: c,
                                        animatedValues: T,
                                        changes: u,
                                        fromValues: pe(a.getValue()),
                                        toValues: pe(w ? j.getPayload() : j),
                                        immediate: me(m, s),
                                        delay: fe(k.delay, d || 0),
                                        initialVelocity: fe(k.velocity, 0),
                                        clamp: fe(k.clamp, !1),
                                        precision: fe(k.precision, .01),
                                        tension: fe(k.tension, 170),
                                        friction: fe(k.friction, 26),
                                        mass: fe(k.mass, 1),
                                        duration: k.duration,
                                        easing: fe(k.easing, (function(e) {
                                            return e
                                        })),
                                        decay: k.decay
                                    })))
                                }), this.animations), this.hasChanged)
                                for (var k in this.configs = ge(this.animations), this.animatedProps = {}, this.interpolations = {}, this.animations) this.interpolations[k] = this.animations[k].interpolation, this.animatedProps[k] = this.animations[k].interpolation.getValue();
                            for (var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), T = 1; T < x; T++) S[T - 1] = arguments[T];
                            y || !b && !S.length || this.start.apply(this, S);
                            var E = S[0],
                                A = S[1];
                            return this.onEnd = "function" == typeof E && E, this.onUpdate = A, this.getValues()
                        }
                    }, {
                        key: "start",
                        value: function(e, t) {
                            var r, n = this;
                            return this.startTime = S(), this.isActive && this.stop(), this.isActive = !0, this.onEnd = "function" == typeof e && e, this.onUpdate = t, this.props.onStart && this.props.onStart(), r = this, Ee.has(r) || (Ee.add(r), Te || j(Ae), Te = !0), new Promise((function(e) {
                                return n.resolve = e
                            }))
                        }
                    }, {
                        key: "stop",
                        value: function(e) {
                            void 0 === e && (e = !1), e && ge(this.animations).forEach((function(e) {
                                return e.changes = void 0
                            })), this.debouncedOnEnd({
                                finished: e
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            Re(this), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.animatedProps = {}, this.configs = []
                        }
                    }, {
                        key: "debouncedOnEnd",
                        value: function(e) {
                            Re(this), this.isActive = !1;
                            var t = this.onEnd;
                            this.onEnd = null, t && t(e), this.resolve && this.resolve(), this.resolve = null
                        }
                    }]), e
                }(),
                Ce = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r(e, n) {
                        var o;
                        return l(this, r), o = t.call(this), e.style && (e = g({}, e, {
                            style: E(e.style)
                        })), o.payload = e, o.update = n, o.attach(), o
                    }
                    return r
                }(B);

            function Pe(e) {
                var t = function(t) {
                    a(n, t);
                    var r = p(n);

                    function n(e) {
                        var t;
                        return l(this, n), (t = r.call(this)).callback = function() {
                            t.node && (!1 === w.fn(t.node, t.propsAnimated.getAnimatedValue(), i(t)) && t.forceUpdate())
                        }, t.attachProps(e), t
                    }
                    return u(n, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.propsAnimated && this.propsAnimated.detach()
                        }
                    }, {
                        key: "setNativeProps",
                        value: function(e) {
                            !1 === w.fn(this.node, e, this) && this.forceUpdate()
                        }
                    }, {
                        key: "attachProps",
                        value: function(e) {
                            e.forwardRef;
                            var t = m(e, ["forwardRef"]),
                                r = this.propsAnimated;
                            this.propsAnimated = new Ce(t, this.callback), r && r.detach()
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            var t = e.style,
                                r = m(e, ["style"]),
                                n = this.props,
                                o = n.style;
                            return (!he(m(n, ["style"]), r) || !he(o, t)) && (this.attachProps(e), !0)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this,
                                r = this.propsAnimated.getValue(),
                                n = (r.scrollTop, r.scrollLeft, m(r, ["scrollTop", "scrollLeft"]));
                            return b.createElement(e, g({}, n, {
                                ref: function(e) {
                                    return t.node = we(e, t.props.forwardRef)
                                }
                            }))
                        }
                    }]), n
                }(b.Component);
                return b.forwardRef((function(e, r) {
                    return b.createElement(t, g({}, e, {
                        forwardRef: r
                    }))
                }))
            }
            var Le = {
                    default: {
                        tension: 170,
                        friction: 26
                    },
                    gentle: {
                        tension: 120,
                        friction: 14
                    },
                    wobbly: {
                        tension: 180,
                        friction: 12
                    },
                    stiff: {
                        tension: 210,
                        friction: 20
                    },
                    slow: {
                        tension: 280,
                        friction: 60
                    },
                    molasses: {
                        tension: 280,
                        friction: 120
                    }
                },
                Me = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r() {
                        var e;
                        return l(this, r), (e = t.apply(this, arguments)).state = {
                            lastProps: {
                                from: {},
                                to: {}
                            },
                            propsChanged: !1,
                            internal: !1
                        }, e.controller = new _e(null, null), e.didUpdate = !1, e.didInject = !1, e.finished = !0, e.start = function() {
                            e.finished = !1;
                            var t = e.mounted;
                            e.controller.start((function(r) {
                                return e.finish(g({}, r, {
                                    wasMounted: t
                                }))
                            }), e.update)
                        }, e.stop = function() {
                            return e.controller.stop(!0)
                        }, e.update = function() {
                            return e.mounted && e.setState({
                                internal: !0
                            })
                        }, e.finish = function(t) {
                            var r = t.finished,
                                n = t.noChange,
                                o = t.wasMounted;
                            e.finished = !0, e.mounted && r && (!e.props.onRest || !o && n || e.props.onRest(e.controller.merged), e.mounted && e.didInject && (e.afterInject = ve(e.props), e.setState({
                                internal: !0
                            })), e.mounted && (e.didInject || e.props.after) && e.setState({
                                internal: !0
                            }), e.didInject = !1)
                        }, e
                    }
                    return u(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.componentDidUpdate(), this.mounted = !0
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1, this.stop()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.children,
                                r = this.state.propsChanged;
                            if (this.props.inject && r && !this.injectProps) {
                                var n = this.props.inject(this.props, (function(t) {
                                    e.injectProps = t, e.setState({
                                        internal: !0
                                    })
                                }));
                                if (n) return n
                            }(this.injectProps || r) && (this.didInject = !1, this.injectProps ? (this.controller.update(this.injectProps), this.didInject = !0) : r && this.controller.update(this.props), this.didUpdate = !0, this.afterInject = void 0, this.injectProps = void 0);
                            var o = g({}, this.controller.getValues(), this.afterInject);
                            return this.finished && (o = g({}, o, this.props.after)), Object.keys(o).length ? t(o) : null
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.didUpdate && this.start(), this.didUpdate = !1
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var r = t.internal,
                                n = t.lastProps,
                                o = e.from,
                                i = e.to,
                                a = e.reset,
                                c = e.force;
                            return {
                                propsChanged: !he(i, n.to) || !he(o, n.from) || a && !r || c && !r,
                                lastProps: e,
                                internal: !1
                            }
                        }
                    }]), r
                }(b.Component);
            Me.defaultProps = {
                from: {},
                to: {},
                config: Le.default,
                native: !1,
                immediate: !1,
                reset: !1,
                force: !1,
                inject: v
            };
            var Ie = function(e) {
                a(r, e);
                var t = p(r);

                function r() {
                    var e;
                    return l(this, r), (e = t.apply(this, arguments)).first = !0, e.instances = new Set, e.hook = function(t, r, n, o) {
                        return e.instances.add(t), (o ? r === n - 1 : 0 === r) ? void 0 : Array.from(e.instances)[o ? r + 1 : r - 1]
                    }, e
                }
                return u(r, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            r = t.items,
                            n = t.children,
                            o = t.from,
                            i = void 0 === o ? {} : o,
                            a = t.initial,
                            c = t.reverse,
                            s = t.keys,
                            l = t.delay,
                            u = t.onRest,
                            d = m(t, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]),
                            f = pe(r);
                        return pe(f).map((function(t, r) {
                            return b.createElement(Me, g({
                                onRest: 0 === r ? u : null,
                                key: "function" == typeof s ? s(t) : pe(s)[r],
                                from: e.first && void 0 !== a ? a || {} : i
                            }, d, {
                                delay: 0 === r && l || void 0,
                                attach: function(t) {
                                    return e.hook(t, r, f.length, c)
                                },
                                children: function(e) {
                                    var o = n(t, r);
                                    return o ? o(e) : null
                                }
                            }))
                        }))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.first = !1, e.items !== this.props.items && this.instances.clear()
                    }
                }]), r
            }(b.PureComponent);
            Ie.defaultProps = {
                keys: function(e) {
                    return e
                }
            };
            var ze = function(e) {
                a(r, e);
                var t = p(r);

                function r() {
                    var e, n;
                    return l(this, r), e = t.apply(this, arguments), n = i(e), e.guid = 0, e.state = {
                        props: {},
                        resolve: function() {
                            return null
                        },
                        last: !0,
                        index: 0
                    }, e.next = function(e, t, r) {
                        return void 0 === t && (t = !0), void 0 === r && (r = 0), n.running = !0, new Promise((function(o) {
                            n.mounted && n.setState((function(n) {
                                return {
                                    props: e,
                                    resolve: o,
                                    last: t,
                                    index: r
                                }
                            }), (function() {
                                return n.running = !1
                            }))
                        }))
                    }, e
                }
                return u(r, [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0, this.componentDidUpdate({})
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this,
                            r = this,
                            n = this.props,
                            o = n.states,
                            i = n.filter,
                            a = n.state;
                        (e.state !== this.props.state || this.props.reset && !this.running || !he(o[a], e.states[e.state])) && o && a && o[a] && function() {
                            var e = ++t.guid,
                                n = o[a];
                            if (n)
                                if (Array.isArray(n))
                                    for (var c = Promise.resolve(), s = function(r) {
                                            var o = r,
                                                a = n[o],
                                                s = o === n.length - 1;
                                            c = c.then((function() {
                                                return e === t.guid && t.next(i(a), s, o)
                                            }))
                                        }, l = 0; l < n.length; l++) s(l);
                                else if ("function" == typeof n) {
                                var u = 0;
                                n((function(t, n) {
                                    return void 0 === n && (n = !1), e === r.guid && r.next(i(t), n, u++)
                                }), (function() {
                                    return j((function() {
                                        return t.instance && t.instance.stop()
                                    }))
                                }), t.props)
                            } else t.next(i(o[a]))
                        }()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            r = t.props,
                            n = t.resolve,
                            o = t.last,
                            i = t.index;
                        if (!r || 0 === Object.keys(r).length) return null;
                        var a = this.props,
                            c = (a.state, a.filter, a.states, a.config),
                            s = a.primitive,
                            l = a.onRest,
                            u = a.forwardRef,
                            d = m(a, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]);
                        return Array.isArray(c) && (c = c[i]), b.createElement(s, g({
                            ref: function(t) {
                                return e.instance = we(t, u)
                            },
                            config: c
                        }, d, r, {
                            onRest: function(e) {
                                n(e), l && o && l(e)
                            }
                        }))
                    }
                }]), r
            }(b.PureComponent);
            ze.defaultProps = {
                state: "__default"
            };
            var We = b.forwardRef((function(e, t) {
                return b.createElement(ze, g({}, e, {
                    forwardRef: t
                }))
            }));
            We.create = function(e) {
                return function(t, r) {
                    return void 0 === r && (r = function(e) {
                            return e
                        }), ("function" == typeof t || Array.isArray(t)) && (t = n({}, "__default", t)),
                        function(n) {
                            return b.createElement(ze, g({
                                primitive: e,
                                states: t,
                                filter: r
                            }, n))
                        }
                }
            }, We.Spring = function(e) {
                return We.create(Me)(e, be)
            }, We.Trail = function(e) {
                return We.create(Ie)(e, be)
            };
            var Fe = 0,
                Be = function(e) {
                    var t = e.items,
                        r = e.keys,
                        n = m(e, ["items", "keys"]);
                    return t = pe(void 0 !== t ? t : null), r = "function" == typeof r ? t.map(r) : pe(r), g({
                        items: t,
                        keys: r.map((function(e) {
                            return String(e)
                        }))
                    }, n)
                },
                De = function(e) {
                    a(r, e);
                    var t = p(r);

                    function r(e) {
                        var n;
                        return l(this, r), (n = t.call(this, e)).destroyItem = function(e, t, r) {
                            return function(o) {
                                var i = n.props,
                                    a = i.onRest,
                                    c = i.onDestroyed;
                                n.mounted && (c && c(e), n.setState((function(e) {
                                    return {
                                        deleted: e.deleted.filter((function(e) {
                                            return e.key !== t
                                        }))
                                    }
                                })), a && a(e, r, o))
                            }
                        }, n.state = {
                            first: !0,
                            transitions: [],
                            current: {},
                            deleted: [],
                            prevProps: e
                        }, n
                    }
                    return u(r, [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }]), u(r, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                r = (t.initial, t.from, t.enter, t.leave, t.update, t.onDestroyed, t.keys, t.items, t.onFrame),
                                o = t.onRest,
                                i = t.onStart,
                                a = (t.trail, t.config, t.children),
                                c = (t.unique, t.reset),
                                s = m(t, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);
                            return this.state.transitions.map((function(t, l) {
                                var u = t.state,
                                    d = t.key,
                                    f = t.item,
                                    p = t.from,
                                    h = t.to,
                                    m = t.trail,
                                    y = t.config,
                                    v = t.destroyed;
                                return b.createElement(We, g({
                                    reset: c && "enter" === u,
                                    primitive: Me,
                                    state: u,
                                    filter: be,
                                    states: n({}, u, h),
                                    key: d,
                                    onRest: v ? e.destroyItem(f, d, u) : o && function(e) {
                                        return o(f, u, e)
                                    },
                                    onStart: i && function() {
                                        return i(f, u)
                                    },
                                    onFrame: r && function(e) {
                                        return r(f, u, e)
                                    },
                                    delay: m,
                                    config: y
                                }, s, {
                                    from: p,
                                    children: function(e) {
                                        var t = a(f, u, l);
                                        return t ? t(e) : null
                                    }
                                }))
                            }))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var r = t.first,
                                n = t.prevProps,
                                i = m(t, ["first", "prevProps"]),
                                a = Be(e),
                                c = a.items,
                                s = a.keys,
                                l = a.initial,
                                u = a.from,
                                d = a.enter,
                                f = a.leave,
                                p = a.update,
                                h = a.trail,
                                b = void 0 === h ? 0 : h,
                                y = a.unique,
                                v = a.config,
                                w = Be(n),
                                O = w.keys,
                                j = w.items,
                                k = g({}, i.current),
                                x = o(i.deleted),
                                S = Object.keys(k),
                                T = new Set(S),
                                E = new Set(s),
                                A = s.filter((function(e) {
                                    return !T.has(e)
                                })),
                                R = i.transitions.filter((function(e) {
                                    return !e.destroyed && !E.has(e.originalKey)
                                })).map((function(e) {
                                    return e.originalKey
                                })),
                                _ = s.filter((function(e) {
                                    return T.has(e)
                                })),
                                C = 0;
                            A.forEach((function(e) {
                                y && x.find((function(t) {
                                    return t.originalKey === e
                                })) && (x = x.filter((function(t) {
                                    return t.originalKey !== e
                                })));
                                var t = s.indexOf(e),
                                    n = c[t];
                                k[e] = {
                                    state: "enter",
                                    originalKey: e,
                                    key: y ? String(e) : Fe++,
                                    item: n,
                                    trail: C += b,
                                    config: me(v, n, "enter"),
                                    from: me(r && void 0 !== l ? l || {} : u, n),
                                    to: me(d, n)
                                }
                            })), R.forEach((function(e) {
                                var t = O.indexOf(e),
                                    r = j[t];
                                x.push(g({}, k[e], {
                                    state: "leave",
                                    destroyed: !0,
                                    left: O[Math.max(0, t - 1)],
                                    right: O[Math.min(O.length, t + 1)],
                                    trail: C += b,
                                    config: me(v, r, "leave"),
                                    to: me(f, r)
                                })), delete k[e]
                            })), _.forEach((function(e) {
                                var t = s.indexOf(e),
                                    r = c[t];
                                k[e] = g({}, k[e], {
                                    item: r,
                                    state: "update",
                                    trail: C += b,
                                    config: me(v, r, "update"),
                                    to: me(p, r)
                                })
                            }));
                            var P = s.map((function(e) {
                                return k[e]
                            }));
                            return x.forEach((function(e) {
                                var t, r = e.left,
                                    n = e.right,
                                    i = m(e, ["left", "right"]); - 1 !== (t = P.findIndex((function(e) {
                                    return e.originalKey === r
                                }))) && (t += 1), -1 === t && (t = P.findIndex((function(e) {
                                    return e.originalKey === n
                                }))), -1 === t && (t = x.findIndex((function(e) {
                                    return e.originalKey === r
                                }))), -1 === t && (t = x.findIndex((function(e) {
                                    return e.originalKey === n
                                }))), t = Math.max(0, t), P = [].concat(o(P.slice(0, t)), [i], o(P.slice(t)))
                            })), {
                                first: r && 0 === A.length,
                                transitions: P,
                                current: k,
                                deleted: x,
                                prevProps: e
                            }
                        }
                    }]), r
                }(b.PureComponent);
            De.defaultProps = {
                keys: function(e) {
                    return e
                },
                unique: !1,
                reset: !1
            };
            var Ve = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].reduce((function(e, t) {
                return e[t] = Pe(t), e
            }), Pe);
            t.Spring = Me, t.Keyframes = We, t.Transition = De, t.Trail = Ie, t.Controller = _e, t.config = Le, t.animated = Ve, t.interpolate = function(e, t, r) {
                return e && new le(e, t, r)
            }, t.Globals = M
        },
        RIqP: function(e, t, r) {
            var n = r("Ijbi"),
                o = r("EbDI"),
                i = r("ZhPi"),
                a = r("Bnag");
            e.exports = function(e) {
                return n(e) || o(e) || i(e) || a()
            }
        },
        SksO: function(e, t) {
            function r(t, n) {
                return e.exports = r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, r(t, n)
            }
            e.exports = r
        },
        W8MJ: function(e, t) {
            function r(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            e.exports = function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        },
        WkPL: function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
        },
        ZhPi: function(e, t, r) {
            var n = r("WkPL");
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                }
            }
        },
        a1gu: function(e, t, r) {
            var n = r("cDf5"),
                o = r("PJYZ");
            e.exports = function(e, t) {
                return !t || "object" !== n(t) && "function" != typeof t ? o(e) : t
            }
        },
        bHtr: function(e, t, r) {
            var n = r("XKFU");
            n(n.P, "Array", {
                fill: r("Nr18")
            }), r("nGyu")("fill")
        },
        bmMU: function(e, t, r) {
            "use strict";
            r("f3/d"), r("SRfc"), r("a1Th"), r("h7Nl"), r("Oyvg"), r("rGqo"), r("yt8O"), r("Btvt"), r("RW0V"), r("LK8F");
            var n = Array.isArray,
                o = Object.keys,
                i = Object.prototype.hasOwnProperty,
                a = "undefined" != typeof Element;
            e.exports = function(e, t) {
                try {
                    return function e(t, r) {
                        if (t === r) return !0;
                        if (t && r && "object" == typeof t && "object" == typeof r) {
                            var c, s, l, u = n(t),
                                d = n(r);
                            if (u && d) {
                                if ((s = t.length) != r.length) return !1;
                                for (c = s; 0 != c--;)
                                    if (!e(t[c], r[c])) return !1;
                                return !0
                            }
                            if (u != d) return !1;
                            var f = t instanceof Date,
                                p = r instanceof Date;
                            if (f != p) return !1;
                            if (f && p) return t.getTime() == r.getTime();
                            var h = t instanceof RegExp,
                                m = r instanceof RegExp;
                            if (h != m) return !1;
                            if (h && m) return t.toString() == r.toString();
                            var g = o(t);
                            if ((s = g.length) !== o(r).length) return !1;
                            for (c = s; 0 != c--;)
                                if (!i.call(r, g[c])) return !1;
                            if (a && t instanceof Element && r instanceof Element) return t === r;
                            for (c = s; 0 != c--;)
                                if (!("_owner" === (l = g[c]) && t.$$typeof || e(t[l], r[l]))) return !1;
                            return !0
                        }
                        return t != t && r != r
                    }(e, t)
                } catch (r) {
                    if (r.message && r.message.match(/stack|recursion/i) || -2146828260 === r.number) return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
                    throw r
                }
            }
        },
        cDf5: function(e, t) {
            function r(t) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = r = function(e) {
                    return typeof e
                } : e.exports = r = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(t)
            }
            e.exports = r
        },
        cMlJ: function(e) {
            e.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"Cara","siteTitleAlt":"Digital_Shadow | Portfolio","siteHeadline":"Cara - Gatsby Theme from @lekoarts","siteUrl":"https://cara.lekoarts.de","siteDescription":"Playful and Colorful One-Page portfolio featuring Parallax effects and animations","siteLanguage":"en","siteImage":"/banner.jpg","author":"@lekoarts_de"}}}}')
        },
        lwsE: function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        },
        qhky: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return me
                }));
                r("dZ+Y"), r("KKXr"), r("2Spj"), r("eM6i"), r("8+KV"), r("0l/t"), r("LK8F"), r("pIFo"), r("V+eJ"), r("/SS/"), r("hHhE"), r("91GP"), r("HAE/"), r("rE2o"), r("ioFf"), r("DNiP"), r("rGqo"), r("yt8O"), r("Btvt"), r("RW0V"), r("bWfx");
                var n, o, i, a, c = r("17x9"),
                    s = r.n(c),
                    l = r("8+s/"),
                    u = r.n(l),
                    d = r("bmMU"),
                    f = r.n(d),
                    p = r("q1tI"),
                    h = r.n(p),
                    m = r("MgzW"),
                    g = r.n(m),
                    b = "bodyAttributes",
                    y = "htmlAttributes",
                    v = "titleAttributes",
                    w = {
                        BASE: "base",
                        BODY: "body",
                        HEAD: "head",
                        HTML: "html",
                        LINK: "link",
                        META: "meta",
                        NOSCRIPT: "noscript",
                        SCRIPT: "script",
                        STYLE: "style",
                        TITLE: "title"
                    },
                    O = (Object.keys(w).map((function(e) {
                        return w[e]
                    })), "charset"),
                    j = "cssText",
                    k = "href",
                    x = "http-equiv",
                    S = "innerHTML",
                    T = "itemprop",
                    E = "name",
                    A = "property",
                    R = "rel",
                    _ = "src",
                    C = "target",
                    P = {
                        accesskey: "accessKey",
                        charset: "charSet",
                        class: "className",
                        contenteditable: "contentEditable",
                        contextmenu: "contextMenu",
                        "http-equiv": "httpEquiv",
                        itemprop: "itemProp",
                        tabindex: "tabIndex"
                    },
                    L = "defaultTitle",
                    M = "defer",
                    I = "encodeSpecialCharacters",
                    z = "onChangeClientState",
                    W = "titleTemplate",
                    F = Object.keys(P).reduce((function(e, t) {
                        return e[P[t]] = t, e
                    }), {}),
                    B = [w.NOSCRIPT, w.SCRIPT, w.STYLE],
                    D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    V = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    },
                    N = function() {
                        function e(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(t, r, n) {
                            return r && e(t.prototype, r), n && e(t, n), t
                        }
                    }(),
                    H = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    },
                    K = function(e, t) {
                        var r = {};
                        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                        return r
                    },
                    q = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    },
                    U = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                    },
                    G = function(e) {
                        var t = Q(e, w.TITLE),
                            r = Q(e, W);
                        if (r && t) return r.replace(/%s/g, (function() {
                            return Array.isArray(t) ? t.join("") : t
                        }));
                        var n = Q(e, L);
                        return t || n || void 0
                    },
                    Y = function(e) {
                        return Q(e, z) || function() {}
                    },
                    X = function(e, t) {
                        return t.filter((function(t) {
                            return void 0 !== t[e]
                        })).map((function(t) {
                            return t[e]
                        })).reduce((function(e, t) {
                            return H({}, e, t)
                        }), {})
                    },
                    Z = function(e, t) {
                        return t.filter((function(e) {
                            return void 0 !== e[w.BASE]
                        })).map((function(e) {
                            return e[w.BASE]
                        })).reverse().reduce((function(t, r) {
                            if (!t.length)
                                for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                                    var i = n[o].toLowerCase();
                                    if (-1 !== e.indexOf(i) && r[i]) return t.concat(r)
                                }
                            return t
                        }), [])
                    },
                    J = function(e, t, r) {
                        var n = {};
                        return r.filter((function(t) {
                            return !!Array.isArray(t[e]) || (void 0 !== t[e] && ne("Helmet: " + e + ' should be of type "Array". Instead found type "' + D(t[e]) + '"'), !1)
                        })).map((function(t) {
                            return t[e]
                        })).reverse().reduce((function(e, r) {
                            var o = {};
                            r.filter((function(e) {
                                for (var r = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                                    var c = i[a],
                                        s = c.toLowerCase(); - 1 === t.indexOf(s) || r === R && "canonical" === e[r].toLowerCase() || s === R && "stylesheet" === e[s].toLowerCase() || (r = s), -1 === t.indexOf(c) || c !== S && c !== j && c !== T || (r = c)
                                }
                                if (!r || !e[r]) return !1;
                                var l = e[r].toLowerCase();
                                return n[r] || (n[r] = {}), o[r] || (o[r] = {}), !n[r][l] && (o[r][l] = !0, !0)
                            })).reverse().forEach((function(t) {
                                return e.push(t)
                            }));
                            for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                                var c = i[a],
                                    s = g()({}, n[c], o[c]);
                                n[c] = s
                            }
                            return e
                        }), []).reverse()
                    },
                    Q = function(e, t) {
                        for (var r = e.length - 1; r >= 0; r--) {
                            var n = e[r];
                            if (n.hasOwnProperty(t)) return n[t]
                        }
                        return null
                    },
                    $ = (n = Date.now(), function(e) {
                        var t = Date.now();
                        t - n > 16 ? (n = t, e(t)) : setTimeout((function() {
                            $(e)
                        }), 0)
                    }),
                    ee = function(e) {
                        return clearTimeout(e)
                    },
                    te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || $ : e.requestAnimationFrame || $,
                    re = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
                    ne = function(e) {
                        return console && "function" == typeof console.warn && console.warn(e)
                    },
                    oe = null,
                    ie = function(e, t) {
                        var r = e.baseTag,
                            n = e.bodyAttributes,
                            o = e.htmlAttributes,
                            i = e.linkTags,
                            a = e.metaTags,
                            c = e.noscriptTags,
                            s = e.onChangeClientState,
                            l = e.scriptTags,
                            u = e.styleTags,
                            d = e.title,
                            f = e.titleAttributes;
                        se(w.BODY, n), se(w.HTML, o), ce(d, f);
                        var p = {
                                baseTag: le(w.BASE, r),
                                linkTags: le(w.LINK, i),
                                metaTags: le(w.META, a),
                                noscriptTags: le(w.NOSCRIPT, c),
                                scriptTags: le(w.SCRIPT, l),
                                styleTags: le(w.STYLE, u)
                            },
                            h = {},
                            m = {};
                        Object.keys(p).forEach((function(e) {
                            var t = p[e],
                                r = t.newTags,
                                n = t.oldTags;
                            r.length && (h[e] = r), n.length && (m[e] = p[e].oldTags)
                        })), t && t(), s(e, h, m)
                    },
                    ae = function(e) {
                        return Array.isArray(e) ? e.join("") : e
                    },
                    ce = function(e, t) {
                        void 0 !== e && document.title !== e && (document.title = ae(e)), se(w.TITLE, t)
                    },
                    se = function(e, t) {
                        var r = document.getElementsByTagName(e)[0];
                        if (r) {
                            for (var n = r.getAttribute("data-react-helmet"), o = n ? n.split(",") : [], i = [].concat(o), a = Object.keys(t), c = 0; c < a.length; c++) {
                                var s = a[c],
                                    l = t[s] || "";
                                r.getAttribute(s) !== l && r.setAttribute(s, l), -1 === o.indexOf(s) && o.push(s);
                                var u = i.indexOf(s); - 1 !== u && i.splice(u, 1)
                            }
                            for (var d = i.length - 1; d >= 0; d--) r.removeAttribute(i[d]);
                            o.length === i.length ? r.removeAttribute("data-react-helmet") : r.getAttribute("data-react-helmet") !== a.join(",") && r.setAttribute("data-react-helmet", a.join(","))
                        }
                    },
                    le = function(e, t) {
                        var r = document.head || document.querySelector(w.HEAD),
                            n = r.querySelectorAll(e + "[data-react-helmet]"),
                            o = Array.prototype.slice.call(n),
                            i = [],
                            a = void 0;
                        return t && t.length && t.forEach((function(t) {
                            var r = document.createElement(e);
                            for (var n in t)
                                if (t.hasOwnProperty(n))
                                    if (n === S) r.innerHTML = t.innerHTML;
                                    else if (n === j) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
                            else {
                                var c = void 0 === t[n] ? "" : t[n];
                                r.setAttribute(n, c)
                            }
                            r.setAttribute("data-react-helmet", "true"), o.some((function(e, t) {
                                return a = t, r.isEqualNode(e)
                            })) ? o.splice(a, 1) : i.push(r)
                        })), o.forEach((function(e) {
                            return e.parentNode.removeChild(e)
                        })), i.forEach((function(e) {
                            return r.appendChild(e)
                        })), {
                            oldTags: o,
                            newTags: i
                        }
                    },
                    ue = function(e) {
                        return Object.keys(e).reduce((function(t, r) {
                            var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
                            return t ? t + " " + n : n
                        }), "")
                    },
                    de = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce((function(t, r) {
                            return t[P[r] || r] = e[r], t
                        }), t)
                    },
                    fe = function(e, t, r) {
                        switch (e) {
                            case w.TITLE:
                                return {
                                    toComponent: function() {
                                        return e = t.title, r = t.titleAttributes, (n = {
                                            key: e
                                        })["data-react-helmet"] = !0, o = de(r, n), [h.a.createElement(w.TITLE, o, e)];
                                        var e, r, n, o
                                    }, toString: function() {
                                        return function(e, t, r, n) {
                                            var o = ue(r),
                                                i = ae(t);
                                            return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + U(i, n) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + U(i, n) + "</" + e + ">"
                                        }(e, t.title, t.titleAttributes, r)
                                    }
                                };
                            case b:
                            case y:
                                return {
                                    toComponent: function() {
                                        return de(t)
                                    }, toString: function() {
                                        return ue(t)
                                    }
                                };
                            default:
                                return {
                                    toComponent: function() {
                                        return function(e, t) {
                                            return t.map((function(t, r) {
                                                var n, o = ((n = {
                                                    key: r
                                                })["data-react-helmet"] = !0, n);
                                                return Object.keys(t).forEach((function(e) {
                                                    var r = P[e] || e;
                                                    if (r === S || r === j) {
                                                        var n = t.innerHTML || t.cssText;
                                                        o.dangerouslySetInnerHTML = {
                                                            __html: n
                                                        }
                                                    } else o[r] = t[e]
                                                })), h.a.createElement(e, o)
                                            }))
                                        }(e, t)
                                    }, toString: function() {
                                        return function(e, t, r) {
                                            return t.reduce((function(t, n) {
                                                var o = Object.keys(n).filter((function(e) {
                                                        return !(e === S || e === j)
                                                    })).reduce((function(e, t) {
                                                        var o = void 0 === n[t] ? t : t + '="' + U(n[t], r) + '"';
                                                        return e ? e + " " + o : o
                                                    }), ""),
                                                    i = n.innerHTML || n.cssText || "",
                                                    a = -1 === B.indexOf(e);
                                                return t + "<" + e + ' data-react-helmet="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                                            }), "")
                                        }(e, t, r)
                                    }
                                }
                        }
                    },
                    pe = function(e) {
                        var t = e.baseTag,
                            r = e.bodyAttributes,
                            n = e.encode,
                            o = e.htmlAttributes,
                            i = e.linkTags,
                            a = e.metaTags,
                            c = e.noscriptTags,
                            s = e.scriptTags,
                            l = e.styleTags,
                            u = e.title,
                            d = void 0 === u ? "" : u,
                            f = e.titleAttributes;
                        return {
                            base: fe(w.BASE, t, n),
                            bodyAttributes: fe(b, r, n),
                            htmlAttributes: fe(y, o, n),
                            link: fe(w.LINK, i, n),
                            meta: fe(w.META, a, n),
                            noscript: fe(w.NOSCRIPT, c, n),
                            script: fe(w.SCRIPT, s, n),
                            style: fe(w.STYLE, l, n),
                            title: fe(w.TITLE, {
                                title: d,
                                titleAttributes: f
                            }, n)
                        }
                    },
                    he = u()((function(e) {
                        return {
                            baseTag: Z([k, C], e),
                            bodyAttributes: X(b, e),
                            defer: Q(e, M),
                            encode: Q(e, I),
                            htmlAttributes: X(y, e),
                            linkTags: J(w.LINK, [R, k], e),
                            metaTags: J(w.META, [E, O, x, A, T], e),
                            noscriptTags: J(w.NOSCRIPT, [S], e),
                            onChangeClientState: Y(e),
                            scriptTags: J(w.SCRIPT, [_, S], e),
                            styleTags: J(w.STYLE, [j], e),
                            title: G(e),
                            titleAttributes: X(v, e)
                        }
                    }), (function(e) {
                        oe && re(oe), e.defer ? oe = te((function() {
                            ie(e, (function() {
                                oe = null
                            }))
                        })) : (ie(e), oe = null)
                    }), pe)((function() {
                        return null
                    })),
                    me = (o = he, a = i = function(e) {
                        function t() {
                            return V(this, t), q(this, e.apply(this, arguments))
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                            return !f()(this.props, e)
                        }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                            if (!t) return null;
                            switch (e.type) {
                                case w.SCRIPT:
                                case w.NOSCRIPT:
                                    return {
                                        innerHTML: t
                                    };
                                case w.STYLE:
                                    return {
                                        cssText: t
                                    }
                            }
                            throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                        }, t.prototype.flattenArrayTypeChildren = function(e) {
                            var t, r = e.child,
                                n = e.arrayTypeChildren,
                                o = e.newChildProps,
                                i = e.nestedChildren;
                            return H({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [H({}, o, this.mapNestedChildrenToProps(r, i))]), t))
                        }, t.prototype.mapObjectTypeChildren = function(e) {
                            var t, r, n = e.child,
                                o = e.newProps,
                                i = e.newChildProps,
                                a = e.nestedChildren;
                            switch (n.type) {
                                case w.TITLE:
                                    return H({}, o, ((t = {})[n.type] = a, t.titleAttributes = H({}, i), t));
                                case w.BODY:
                                    return H({}, o, {
                                        bodyAttributes: H({}, i)
                                    });
                                case w.HTML:
                                    return H({}, o, {
                                        htmlAttributes: H({}, i)
                                    })
                            }
                            return H({}, o, ((r = {})[n.type] = H({}, i), r))
                        }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                            var r = H({}, t);
                            return Object.keys(e).forEach((function(t) {
                                var n;
                                r = H({}, r, ((n = {})[t] = e[t], n))
                            })), r
                        }, t.prototype.warnOnInvalidChildren = function(e, t) {
                            return !0
                        }, t.prototype.mapChildrenToProps = function(e, t) {
                            var r = this,
                                n = {};
                            return h.a.Children.forEach(e, (function(e) {
                                if (e && e.props) {
                                    var o = e.props,
                                        i = o.children,
                                        a = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            return Object.keys(e).reduce((function(t, r) {
                                                return t[F[r] || r] = e[r], t
                                            }), t)
                                        }(K(o, ["children"]));
                                    switch (r.warnOnInvalidChildren(e, i), e.type) {
                                        case w.LINK:
                                        case w.META:
                                        case w.NOSCRIPT:
                                        case w.SCRIPT:
                                        case w.STYLE:
                                            n = r.flattenArrayTypeChildren({
                                                child: e,
                                                arrayTypeChildren: n,
                                                newChildProps: a,
                                                nestedChildren: i
                                            });
                                            break;
                                        default:
                                            t = r.mapObjectTypeChildren({
                                                child: e,
                                                newProps: t,
                                                newChildProps: a,
                                                nestedChildren: i
                                            })
                                    }
                                }
                            })), t = this.mapArrayTypeChildrenToProps(n, t)
                        }, t.prototype.render = function() {
                            var e = this.props,
                                t = e.children,
                                r = K(e, ["children"]),
                                n = H({}, r);
                            return t && (n = this.mapChildrenToProps(t, n)), h.a.createElement(o, n)
                        }, N(t, null, [{
                            key: "canUseDOM",
                            set: function(e) {
                                o.canUseDOM = e
                            }
                        }]), t
                    }(h.a.Component), i.propTypes = {
                        base: s.a.object,
                        bodyAttributes: s.a.object,
                        children: s.a.oneOfType([s.a.arrayOf(s.a.node), s.a.node]),
                        defaultTitle: s.a.string,
                        defer: s.a.bool,
                        encodeSpecialCharacters: s.a.bool,
                        htmlAttributes: s.a.object,
                        link: s.a.arrayOf(s.a.object),
                        meta: s.a.arrayOf(s.a.object),
                        noscript: s.a.arrayOf(s.a.object),
                        onChangeClientState: s.a.func,
                        script: s.a.arrayOf(s.a.object),
                        style: s.a.arrayOf(s.a.object),
                        title: s.a.string,
                        titleAttributes: s.a.object,
                        titleTemplate: s.a.string
                    }, i.defaultProps = {
                        defer: !0,
                        encodeSpecialCharacters: !0
                    }, i.peek = o.peek, i.rewind = function() {
                        var e = o.rewind();
                        return e || (e = pe({
                            baseTag: [],
                            bodyAttributes: {},
                            encodeSpecialCharacters: !0,
                            htmlAttributes: {},
                            linkTags: [],
                            metaTags: [],
                            noscriptTags: [],
                            scriptTags: [],
                            styleTags: [],
                            title: "",
                            titleAttributes: {}
                        })), e
                    }, a);
                me.renderStatic = me.rewind
            }).call(this, r("yLpj"))
        },
        rIun: function(e, t, r) {
            "use strict";

            function n(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            r("8+KV"), r("0l/t"), r("HAE/"), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(r("pVnL")),
                i = n(r("8OQS")),
                a = n(r("VbXa")),
                c = n(r("q1tI")),
                s = r("P4c3"),
                l = s.Globals.defaultElement,
                u = s.animated(l),
                d = c.createContext(null),
                f = d.Provider,
                p = d.Consumer;

            function h(e) {
                return e ? "scrollLeft" : "scrollTop"
            }
            var m = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                a(t, e);
                var r = t.prototype;
                return r.componentDidMount = function() {
                    var e = this.parent;
                    e && (e.layers = e.layers.concat(this), e.update())
                }, r.componentWillUnmount = function() {
                    var e = this,
                        t = this.parent;
                    t && (t.layers = t.layers.filter((function(t) {
                        return t !== e
                    })), t.update())
                }, r.setPosition = function(e, t, r) {
                    void 0 === r && (r = !1);
                    var n = this.parent.props.config,
                        o = Math.floor(this.props.offset) * e,
                        i = e * this.props.offset + o * this.props.speed,
                        a = parseFloat(-t * this.props.speed + i);
                    this.controller.update({
                        translate: a,
                        config: n,
                        immediate: r
                    })
                }, r.setHeight = function(e, t) {
                    void 0 === t && (t = !1);
                    var r = this.parent.props.config,
                        n = parseFloat(e * this.props.factor);
                    this.controller.update({
                        space: n,
                        config: r,
                        immediate: t
                    })
                }, r.initialize = function() {
                    var e = this.props,
                        t = this.parent,
                        r = Math.floor(e.offset) * t.space,
                        n = t.space * e.offset + r * e.speed,
                        o = parseFloat(-t.current * e.speed + n);
                    this.controller = new s.Controller({
                        space: t.space * e.factor,
                        translate: o
                    })
                }, r.renderLayer = function() {
                    var e, t = this.props,
                        r = t.style,
                        n = t.children,
                        a = (t.offset, t.speed, t.factor, t.className),
                        s = i(t, ["style", "children", "offset", "speed", "factor", "className"]),
                        l = this.parent.props.horizontal,
                        d = this.controller.interpolations.translate.interpolate((function(e) {
                            return l ? "translate3d(" + e + "px,0,0)" : "translate3d(0," + e + "px,0)"
                        }));
                    return c.createElement(u, o({}, s, {
                        className: a,
                        style: o((e = {
                            position: "absolute",
                            backgroundSize: "auto",
                            backgroundRepeat: "no-repeat",
                            willChange: "transform"
                        }, e[l ? "height" : "width"] = "100%", e[l ? "width" : "height"] = this.controller.interpolations.space, e.WebkitTransform = d, e.MsTransform = d, e.transform = d, e), r)
                    }), n)
                }, r.render = function() {
                    var e = this;
                    return c.createElement(p, null, (function(t) {
                        return t && !e.parent && (e.parent = t, e.initialize()), e.renderLayer()
                    }))
                }, t
            }(c.PureComponent);
            m.defaultProps = {
                factor: 1,
                offset: 0,
                speed: 0
            };
            var g = function(e) {
                function t(t) {
                    var r;
                    return (r = e.call(this) || this).moveItems = function() {
                        r.layers.forEach((function(e) {
                            return e.setPosition(r.space, r.current)
                        })), r.busy = !1
                    }, r.scrollerRaf = function() {
                        return s.Globals.requestFrame(r.moveItems)
                    }, r.onScroll = function(e) {
                        var t = r.props.horizontal;
                        r.busy || (r.busy = !0, r.scrollerRaf(), r.current = e.target[h(t)])
                    }, r.update = function() {
                        var e = r.props,
                            t = e.scrolling,
                            n = e.horizontal,
                            o = h(n);
                        r.container && (r.space = r.container[n ? "clientWidth" : "clientHeight"], t ? r.current = r.container[o] : r.container[o] = r.current = r.offset * r.space, r.content && (r.content.style[n ? "width" : "height"] = r.space * r.props.pages + "px"), r.layers.forEach((function(e) {
                            e.setHeight(r.space, !0), e.setPosition(r.space, r.current, !0)
                        })))
                    }, r.updateRaf = function() {
                        s.Globals.requestFrame(r.update), setTimeout(r.update, 150)
                    }, r.scrollStop = function(e) {
                        return r.controller.stop()
                    }, r.state = {
                        ready: !1
                    }, r.layers = [], r.space = 0, r.current = 0, r.offset = 0, r.busy = !1, r.controller = new s.Controller({
                        scroll: 0
                    }), r
                }
                a(t, e);
                var r = t.prototype;
                return r.scrollTo = function(e) {
                    var t = this.props,
                        r = t.horizontal,
                        n = t.config,
                        o = h(r);
                    this.scrollStop(), this.offset = e;
                    var i = this.container;
                    this.controller.update({
                        scroll: e * this.space,
                        config: n,
                        onFrame: function(e) {
                            var t = e.scroll;
                            return i[o] = t
                        }
                    })
                }, r.componentDidMount = function() {
                    window.addEventListener("resize", this.updateRaf, !1), this.update(), this.setState({
                        ready: !0
                    })
                }, r.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.updateRaf, !1)
                }, r.componentDidUpdate = function() {
                    this.update()
                }, r.render = function() {
                    var e, t = this,
                        r = this.props,
                        n = r.style,
                        i = r.innerStyle,
                        a = r.pages,
                        s = r.id,
                        u = r.className,
                        d = r.scrolling,
                        p = r.children,
                        h = r.horizontal,
                        m = d ? "scroll" : "hidden";
                    return c.createElement(l, {
                        ref: function(e) {
                            return t.container = e
                        },
                        onScroll: this.onScroll,
                        onWheel: d ? this.scrollStop : null,
                        onTouchStart: d ? this.scrollStop : null,
                        style: o({
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            overflow: m,
                            overflowY: h ? "hidden" : m,
                            overflowX: h ? m : "hidden",
                            WebkitOverflowScrolling: "touch",
                            WebkitTransform: "translate(0px,0px)",
                            MsTransform: "translate(0px,0px)",
                            transform: "translate3d(0px,0px,0px)"
                        }, n),
                        id: s,
                        className: u
                    }, this.state.ready && c.createElement(l, {
                        ref: function(e) {
                            return t.content = e
                        },
                        style: o((e = {
                            position: "absolute"
                        }, e[h ? "height" : "width"] = "100%", e.WebkitTransform = "translate(0px,0px)", e.MsTransform = "translate(0px,0px)", e.transform = "translate3d(0px,0px,0px)", e.overflow = "hidden", e[h ? "width" : "height"] = this.space * a, e), i)
                    }, c.createElement(f, {
                        value: this
                    }, p)))
                }, t
            }(c.PureComponent);
            g.Layer = m, g.defaultProps = {
                config: s.config.slow,
                scrolling: !0,
                horizontal: !1
            }, t.Parallax = g, t.ParallaxLayer = m
        },
        wx14: function(e, t, r) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            r.r(t), r.d(t, "default", (function() {
                return n
            }))
        },
        yLpj: function(e, t) {
            var r;
            r = function() {
                return this
            }();
            try {
                r = r || new Function("return this")()
            } catch (n) {
                "object" == typeof window && (r = window)
            }
            e.exports = r
        },
        zLVn: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    i = Object.keys(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }
            r.r(t), r.d(t, "default", (function() {
                return n
            }))
        }
    }
]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx-44f51b2cd836b07f2be1.js.map