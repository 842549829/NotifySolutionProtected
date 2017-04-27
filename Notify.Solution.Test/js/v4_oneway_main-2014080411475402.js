var OTA_AD_CONFIG = { white_list: "CJ,CZ,CA,8C,ZH,3U,3Q,2Z,FM,G8,HU,IV,MF,MU,SC,SZ,WH,WU,X2,XO,Z2,NX,CI,BR,GE,BK,CK,G5,WC,PO,9C,KN,JR,KA,JD,9S,8L,CG,VD,J5,9C,GS,NS,OQ,UO,HX,VY,KY", black_list: "", route_by_white_list: [/\/site\/oneway_list.htm\?/, /\/site\/roundtrip_list_new.htm\?/], route_by_black_list: [/\/site\/oneway_list_inter.htm\?/, /\/site\/interroundtrip_compare.htm\?/] };
var oneway_config = { late: 50, rank: { TITLE: { G1: "较可靠,推荐购买", G2: "较可靠,推荐购买", G3: "可能过期,谨慎购买", G4: "需申请,谨慎购买", G5: "供参考,可尝试购买" }, GTITLE: { AD_G1: ["", "", "", ""], AD_G2: ["", "", "", ""], AD_G3: ["可能过期", "可能过期", "可能过期", "可能过期"], AD_G4: ["需申请", "需申请", "需申请", "需申请"], AD_G5: ["仅供参考", "仅供参考", "仅供参考", "仅供参考"], nonAD_G1: ["", "", "", ""], nonAD_G2: ["", "", "", ""], nonAD_G3: ["可能过期", "可能过期", "可能过期", "可能过期"], nonAD_G4: ["需申请", "需申请", "需申请", "需申请"], nonAD_G5: ["仅供参考", "仅供参考", "仅供参考", "仅供参考"] } }, PayCarrierList: { CA: true, CZ: true, "8L": true, SC: true, JD: true, PN: true, GS: true, HU: true, MU: true, ZH: true, "3U": true }, PayCarrierSort: { HU: [], "3U": [], GS: [], MF: [], "8L": [], PN: [], MU: [], HO: [], JD: [], JR: [], BK: [], CA: [], SC: [], ZH: [], CZ: [], TV: [] }, StrikingCarrier: { "9C": 100 }, NonStrikingCarrier: {}, NoNeedStatementList: ["9C"], SpecialRecommend: { price: 200 }, DefaultTax: { FUEL: 0, ACF: 50 }, SpringHotConfig: { springDate: new Date("2009/01/26"), startShowDate: new Date("2008/10/01"), endShowDate: new Date("2009/03/20"), roundtripspringStartDate: new Date("2009/01/11"), springStartDate: new Date("2009/01/11"), springEndDate: new Date("2009/02/19") }, OnewayListShareConfig: { shareCodeNum: 8, mainCodeNum: 6, showornotshow: {} }, CuxiaoConfig: { gnd0907cxcp: { name: "川航促销专区", text: "直减10元" }, gndcphnair2: { name: "海航促销专区", text: "后返10元" } }, AirlineDirectSelling: ["gnd090722cp"] };

function trackAction(d, b, a) {
    if (trackAction.root) {
        d = trackAction.root + "|" + d;
    }
    if (trackAction.prefix && d.indexOf("|") > 0 && d.indexOf("&") < 0) {
        d = d.replace(d.substr(0, trackAction.prefix.length), trackAction.prefix);
    }
    if (trackAction.prefix && d.indexOf("&") >= 0) {
        d = d + "&_module=" + trackAction.prefix;
    }
    if (CLIENT_TIME && SERVER_TIME) {
        var c = (new Date().getTime() - CLIENT_TIME.getTime()) + SERVER_TIME.getTime();
    } else {
        var c = new Date().getTime();
    }
    var f = "/site/track.htm?action=" + d + "&t=" + c;
    if (b) {
        f += "&rId=" + b;
    } else {
        if (trackAction.rid) {
            f += "&rId=" + trackAction.rid;
        }
    }
    if (a) {
        f = f.replace("track.htm", "timetrack.htm");
    }
    if (f.length >= 1024) {
        return;
    }
    setTimeout(function() {
        try {
            new Image().src = f;
        } catch (g) {
        }
    }, 0);
}

var $jex = {
    ie: 0,
    gecko: 0,
    opera: 0,
    safari: 0,
    isdebug: false,
    testurl: (window.location.search.indexOf("&testurl") > 0),
    browser: null,
    mobile: null,
    air: null,
    VOIDFUNC: function() {},
    globalID: (function() {
        var a = 0;
        return function() { return a++; };
    })(),
    _innerClass: {},
    register: function(b, a) { $jex._innerClass[b] = a; },
    getClass: function(a) { return $jex._innerClass[a]; },
    $: function(a) { return(typeof a == "string") ? document.getElementById(a) : a; },
    _: function(f, d) {
        var g = function() {};
        g.prototype = d.prototype;
        f.prototype = new g();
    },
    compare: function(b, h, g) {
        var d = h || {};
        var c = g || {};
        for (var a = 0; a < b.length; a++) {
            var f = b[a];
            if (d[f] != c[f]) {
                return false;
            }
        }
        return true;
    },
    $defined: function(a) { return typeof a != "undefined" && a != null; },
    $empty: function(b) {
        for (var a in b) {
            if (typeof b[a] == "function") {
                continue;
            }
            return false;
        }
        return true;
    },
    parseQueryParam: function() {
        var d = {};
        var b = window.location.search.replace("?", "").split("&");
        for (var a = 0; a < b.length; a++) {
            var c = b[a].split("=");
            d[c[0]] = decodeURIComponent(c[1]);
        }
        return d;
    },
    extendClass: function() {
        var a = Object.prototype.constructor;
        return function(b, g) {
            var c = g.prototype;
            var f = b.prototype;
            var d = function() {};
            d.prototype = c;
            f = b.prototype = new d();
            b.superclass = c;
            f.constructor = b;
            if (c.constructor == a) {
                c.constructor = g;
            }
            b.prototype.toString = g.prototype.toString;
            return b;
        };
    }(),
    body: function(a) {
        if (!a) {
            a = document;
        }
        return a.body ? a.body : a.getElementsByTagName("body")[0];
    },
    doc: function(a) { return a ? a.nodeType == 9 ? a : a.ownerDocument || document : document; },
    merge: function(b, d) {
        for (var a in d) {
            if (d[a] !== undefined) {
                b[a] = d[a];
            }
        }
        return b;
    },
    exec: function(a) { return a(); },
    toInt: function(b, c) {
        var a;
        return isNaN(a = parseInt(b)) ? c : a;
    },
    toFloat: function(b, c) {
        var a;
        return isNaN(a = parseFloat(b)) ? c : a;
    },
    toBoolean: function(a) {
        if (!a) {
            return false;
        }
        return(a == true || (a = a.toUpperCase()) == "TRUE" || a == "1");
    },
    toQueryString: function(b) {
        var a = [];
        $jex.foreach(b, function(d, f, c) {
            if (f > 0) {
                a.push("&");
            }
            a.push(encodeURIComponent(c), "=", encodeURIComponent(d));
        });
        return a.join("");
    },
    text: function(a) { return a.innerText || a.textContent; },
    trim: function(b, a) {
        switch (a) {
        case"l":
            return b.replace(/(^\s*)/g, "");
        case"r":
            return b.replace(/(\s*$)/g, "");
        default:
            return b.replace(/(^\s*)|(\s*$)/g, "");
        }
    },
    stripTag: function(a) { return a.replace(/<\/?[^>]+>/gi, ""); },
    starsWith: function(b, a, c) {
        if (!c) {
            c = 0;
        }
        if (!b || b.length < c + a.length) {
            return false;
        }
        return b.substring(c, a.length) == a;
    },
    exists: function(d, a) {
        var c = a.split("."), b;
        for (b = 0; b < c.length; b++) {
            if (!d[c[b]]) {
                return false;
            }
            d = d[c[b]];
        }
        return true;
    },
    isNull: function(a) { return(typeof a == "object") && !a; },
    isNumber: function(a) { return typeof a == "number" && isFinite(a) ? true : false; },
    isArray: function(a) { return !!a && a.constructor == Array; },
    removeElement: function(a) {
        if (a && a.parentNode) {
            a.parentNode.removeChild(a);
        }
    },
    isChildrenOf: function(b, a, c) {
        if (c && b) {
            b = b.parentNode;
        }
        while (b) {
            if (b == a) {
                return true;
            }
            b = b.parentNode;
        }
        return false;
    },
    hasClassName: function(b, a) {
        if (!b) {
            return;
        }
        return this.array.indexOf(b.className.split(/\s+/), a) != -1;
    },
    addClassName: function(b, a) {
        if (!b) {
            return;
        }
        if (this.hasClassName(b, a)) {
            return;
        }
        b.className = b.className + " " + a;
    },
    removeClassName: function(a, b) {
        if (!a) {
            return;
        }
        if (typeof b == "string") {
            b = [b];
        }
        a.className = this.array.select(a.className.split(/\s+/), function(c) { return($jex.array.indexOf(b, c) == -1); }).join(" ");
    },
    toggleClassName: function(b, a, d, c) {
        if ($jex.hasClassName(b, a)) {
            $jex.removeClassName(b, a);
            if (c) {
                c();
            }
        } else {
            $jex.addClassName(b, a);
            if (d) {
                d();
            }
        }
    },
    createCssText: function(f, d) {
        if (!f) {
            return;
        }
        if (!d) {
            d = document;
        }
        var c = d.createElement("style");
        c.setAttribute("type", "text/css");
        var a = d.getElementsByTagName("head")[0];
        if (!a) {
            return;
        } else {
            a.appendChild(c);
        }
        if (c.styleSheet) {
            c.styleSheet.cssText = f;
        } else {
            var b = d.createTextNode(f);
            c.appendChild(b);
        }
        return c;
    },
    createCssLink: function(a, d) {
        if (!a) {
            return;
        }
        if (!d) {
            d = document;
        }
        if (document.createStyleSheet) {
            document.createStyleSheet(a);
        } else {
            var c = d.createElement("link");
            c.setAttribute("rel", "stylesheet");
            c.setAttribute("type", "text/css");
            c.setAttribute("href", a);
            var b = d.getElementsByTagName("head")[0];
            if (!b) {
                return;
            } else {
                b.appendChild(c);
            }
        }
    },
    stopPropagation: function(a) {
        if (!a) {
            return;
        }
        if (a.stopPropagation) {
            a.stopPropagation();
        } else {
            a.cancelBubble = true;
        }
    },
    preventDefault: function(a) {
        if (!a) {
            return;
        }
        if (a.preventDefault) {
            a.preventDefault();
        } else {
            a.returnValue = false;
        }
    },
    stopEvent: function(a) {
        a = a || window.event;
        $jex.preventDefault(a);
        $jex.stopPropagation(a);
    },
    callback: function(b, a) { return function() { return a.apply(b, arguments); }; },
    getDocumentWindow: function(a) { return a.parentWindow || window; },
    array: {
        toArray: function(c) {
            if (!c) {
                return[];
            }
            var b = [], a;
            for (a = 0; a < c.length; a++) {
                b.push(c[a]);
            }
            return b;
        },
        indexOf: function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                if (a[c] == b) {
                    return c;
                }
            }
            return -1;
        },
        each: function(a, d, c) {
            if (!a) {
                return;
            }
            for (var b = 0, f = a.length; b < f; b++) {
                d.call(c, a[b], b);
            }
        },
        select: function(a, d) {
            if (!a) {
                return[];
            }
            var b = [], c, f;
            for (c = 0, f = a.length; c < f; c++) {
                if (d(a[c])) {
                    b.push(a[c]);
                }
            }
            return b;
        },
        copy: function(d, c, g, b) {
            var f = g || 0, a = b || d.length;
            for (; f < a; ++f) {
                c.push(d[f]);
            }
        },
        remove: function(a, d, g) {
            var b = 0, c, f;
            for (c = 0, f = a.length; c < f; c++) {
                if (a[c] === d || g && a[c] == d) {
                    a.splice(c--, 1);
                    b++;
                }
            }
            return b;
        },
        map: function(b, g, d) {
            if (typeof b.map === "function") {
                return b.map(g, d);
            }
            var a = b.length;
            var f = new Array(a);
            for (var c = 0; c < a; c++) {
                if (c in b) {
                    f[c] = g.call(d, b[c], c, b);
                }
            }
            return f;
        },
        some: function(b, f, d) {
            if (typeof b.some === "function") {
                return b.some(f, d);
            }
            for (var c = 0, a = b.length; c < a; c++) {
                if (c in b && callback.call(d, b[c], c, b)) {
                    return true;
                }
            }
            return false;
        }
    },
    hash: {
        each: function(c, b) {
            for (var a in c) {
                b(a, c[a]);
            }
        }
    },
    each: function(b, a) {
        if (b instanceof Array) {
            this.array.each(b, a);
        } else {
            this.hash.each(b, a);
        }
    },
    $continue: new Object(),
    $break: new Object(),
    foreach: function(b, g) {
        var a = null;
        if (b instanceof Array) {
            for (var d = 0; d < b.length; d++) {
                var f = b[d];
                a = g(f, d);
                if (a == $jex.$continue) {
                    continue;
                }
                if (a == $jex.$break) {
                    break;
                }
            }
        } else {
            var d = 0;
            for (var c in b) {
                var f = b[c];
                a = g(f, d, c);
                if (a == $jex.$continue) {
                    continue;
                }
                if (a == $jex.$break) {
                    break;
                }
                d++;
            }
        }
        return a;
    },
    event: {
        doclick: function(c) {
            var b = document.getElementById(c);
            if (document.createEvent) {
                var a = document.createEvent("MouseEvents");
                a.initEvent("click", true, false);
                b.dispatchEvent(a);
            } else {
                if (document.createEventObject) {
                    b.fireEvent("onclick");
                }
            }
        },
        add: function(c, a, b) {},
        remove: function(a) {},
        bind: function(f, b, d) {
            var c = (f == window && b == "unload");
            if (f.addEventListener) {
                var a = false;
                if (b == "focusin") {
                    b = "focus";
                    a = true;
                } else {
                    if (b == "focusout") {
                        b = "blur";
                        a = true;
                    }
                }
                f.addEventListener(b, d, a);
                d = this.add(f, b, d, a ? 4 : 1, c);
            } else {
                if (f.attachEvent) {
                    d = $jex.callback(f, d);
                    f.attachEvent("on" + b, d);
                    d = this.add(f, b, d, 2, c);
                } else {
                    f["on" + b] = d;
                    d = this.add(f, b, d, 3, c);
                }
            }
            return d;
        },
        bindDom: function(c, a, d, b) {
            return this.bind(c, a, function(f) {
                if (!f.target) {
                    f.target = f.srcElement;
                }
                b.call(d, f, this);
            });
        },
        stop: function(b, a) {
            this.bind(b, a, function(c) {
                $jex.stopEvent(c);
                return false;
            });
        },
        trigger: function(c, b, a) {}
    },
    element: {
        hide: function(a) {
            if (!a) {
                return;
            }
            a.style.display = "none";
            return a;
        },
        show: function(a) {
            if (!a) {
                return;
            }
            a.style.display = "block";
            return a;
        },
        visible: function(a) {
            if (!a) {
                return false;
            }
            return a.style.display != "none";
        },
        toggle: function(c) {
            for (var c = arguments[0], b = 0, a = arguments.length; b < a; b++, c = arguments[b]) {
                c = $jex.$(c);
                if (!c) {
                    continue;
                }
                if ($jex.element.visible(c)) {
                    $jex.element.hide(c);
                } else {
                    $jex.element.show(c);
                }
            }
        }
    }
};
$jex.createXMLHttpRequest = $jex.exec(function() {
    var b = 0, a = [function() { return new XMLHttpRequest(); }, function() { return new ActiveXObject("Msxml2.XMLHTTP"); }, function() { return new ActiveXObject("Microsoft.XMLHTTP"); }];
    return function() {
        for (var c = b; c < a.length; c++) {
            try {
                b = c;
                return a[c]();
            } catch (d) {
            }
        }
        return $jex.VOIDFUNC;
    };
});
$jex.exec(function() {
    var b = navigator.userAgent, a;
    if ((/WebKit|KHTML/).test(b)) {
        $jex.browser = "safari";
        $jex.safari = 1;
    }
    a = b.match(/AppleWebKit\/([^\s]*)/);
    if (a && a[1]) {
        $jex.safari = $jex.toFloat(a[1]);
        if (/ Mobile\//.test(b)) {
            $jex.mobile = "Apple";
        } else {
            a = b.match(/NokiaN[^\/]*/);
            if (a) {
                $jex.mobile = a[0];
            }
        }
        a = b.match(/AdobeAIR\/([^\s]*)/);
        if (a) {
            $jex.air = a[0];
        }
    } else {
        a = b.match(/Opera[\s\/]([^\s]*)/);
        if (a && a[1]) {
            $jex.opera = $jex.toFloat(a[1]);
            $jex.browser = "opera";
            a = b.match(/Opera Mini[^;]*/);
            if (a) {
                $jex.mobile = a[0];
            }
        } else {
            a = b.match(/MSIE\s([^;]*)/);
            if (a && a[1]) {
                $jex.browser = "ie";
                $jex.ie = $jex.toFloat(a[1]);
            } else {
                a = b.match(/Gecko\/([^\s]*)/);
                if (a) {
                    $jex.browser = "gecko";
                    $jex.gecko = 1;
                    a = b.match(/rv:([^\s\)]*)/);
                    if (a && a[1]) {
                        $jex.gecko = $jex.toFloat(a[1]);
                    }
                }
            }
        }
    }
    return false;
});
$jex.exec(function() {
    var a = -1;
    $jex.boxModel = function() {
        if (a !== -1) {
            return a;
        }
        var b = document.createElement("div");
        b.style.width = b.style.paddingLeft = "1px";
        document.body.appendChild(b);
        a = b.offsetWidth === 2;
        document.body.removeChild(b).style.display = "none";
        return a;
    };
    if (window.location.hostname.indexOf("local") >= 0 || window.location.search.indexOf("debug=true") > 0) {
        $jex.isdebug = true;
    }
});
$jex.exec(function() {
    var g = false, c, d, b, f;

    function a() {
        if (g) {
            return;
        }
        var o = document.body, i = document.createElement("div"), k, j, q, l, p, h, m = o.style.marginTop, n = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
        p = { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" };
        for (h in p) {
            i.style[h] = p[h];
        }
        i.innerHTML = n;
        o.insertBefore(i, o.firstChild);
        k = i.firstChild, j = k.firstChild, l = k.nextSibling.firstChild.firstChild;
        c = (j.offsetTop !== 5);
        d = (l.offsetTop === 5);
        k.style.overflow = "hidden", k.style.position = "relative";
        b = (j.offsetTop === -5);
        o.style.marginTop = "1px";
        f = (o.offsetTop === 0);
        o.style.marginTop = m;
        o.removeChild(i);
        g = true;
    }

    if (document.documentElement.getBoundingClientRect) {
        $jex.offset = function(j) {
            if (j === j.ownerDocument.body) {
                return $jex.bodyOffset(j);
            }
            var l = j.getBoundingClientRect(), p = j.ownerDocument, m = p.body, h = p.documentElement, k = h.clientTop || m.clientTop || 0, n = h.clientLeft || m.clientLeft || 0, o = l.top + (self.pageYOffset || $jex.boxModel && h.scrollTop || m.scrollTop) - k, i = l.left + (self.pageXOffset || $jex.boxModel && h.scrollLeft || m.scrollLeft) - n;
            return{ top: o, left: i };
        };
    } else {
        $jex.offset = function(m) {
            if (m === m.ownerDocument.body) {
                return $jex.bodyOffset(m);
            }
            g || a();
            var m = m, j = m.offsetParent, i = m, s = m.ownerDocument, p, k = s.documentElement, n = s.body, o = s.defaultView, h = o.getComputedStyle(m, null), q = m.offsetTop, l = m.offsetLeft;
            while ((m = m.parentNode) && m !== n && m !== k) {
                p = o.getComputedStyle(m, null);
                q -= m.scrollTop, l -= m.scrollLeft;
                if (m === j) {
                    q += m.offsetTop, l += m.offsetLeft;
                    if (c && !(d && /^t(able|d|h)$/i.test(m.tagName))) {
                        q += parseInt(p.borderTopWidth, 10) || 0, l += parseInt(p.borderLeftWidth, 10) || 0;
                    }
                    i = j, j = m.offsetParent;
                }
                if (b && p.overflow !== "visible") {
                    q += parseInt(p.borderTopWidth, 10) || 0, l += parseInt(p.borderLeftWidth, 10) || 0;
                }
                h = p;
            }
            if (h.position === "relative" || h.position === "static") {
                q += n.offsetTop, l += n.offsetLeft;
            }
            if (h.position === "fixed") {
                q += Math.max(k.scrollTop, n.scrollTop), l += Math.max(k.scrollLeft, n.scrollLeft);
            }
            return{ top: q, left: l };
        };
    }
    $jex.bodyOffset = function() {
        g || a();
        var i = body.offsetTop, h = body.offsetLeft;
        return{ top: i, left: h };
    };
    $jex.pointerX = function(h) { return h.pageX || (h.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)); }, $jex.pointerY = function(h) { return h.pageY || (h.clientY + (document.documentElement.scrollTop || document.body.scrollTop)); }, $jex.getPageSize = function() {
        var j, h;
        if (window.innerHeight && window.scrollMaxY) {
            j = document.body.scrollWidth;
            h = window.innerHeight + window.scrollMaxY;
        } else {
            if (document.body.scrollHeight > document.body.offsetHeight) {
                j = document.body.scrollWidth;
                h = document.body.scrollHeight;
            } else {
                j = document.body.offsetWidth;
                h = document.body.offsetHeight;
            }
        }
        var i, k;
        if (self.innerHeight) {
            i = self.innerWidth;
            k = self.innerHeight;
        } else {
            if (document.documentElement && document.documentElement.clientHeight) {
                i = document.documentElement.clientWidth;
                k = document.documentElement.clientHeight;
            } else {
                if (document.body) {
                    i = document.body.clientWidth;
                    k = document.body.clientHeight;
                }
            }
        }
        if (h < k) {
            pageHeight = k;
        } else {
            pageHeight = h;
        }
        if (j < i) {
            pageWidth = i;
        } else {
            pageWidth = j;
        }
        return{ pageWidth: pageWidth, pageHeight: pageHeight, windowWidth: i, windowHeight: k };
    };
});
$jex.exec(function() {
    function setObjectValue(target, id, obj) {
        if (!target[id]) {
            target[id] = obj;
        } else {
            if (target[id] instanceof Array) {
                var arr = target[id];
                if (obj instanceof Array) {
                    for (var i = 0; i < obj.length; i++) {
                        arr.push(obj[i]);
                    }
                } else {
                    target[id].push(obj);
                }
            } else {
                target[id] = [target[id], obj];
            }
        }
    }

    var readObject = $jex.readObject = function(el, target, id) {
        var obj, text;
        var childs = el.getAttribute("jxChilds") || !target;
        if (text = el.getAttribute("jxObject")) {
            obj = eval("({" + text + "});");
        } else {
            if (text = el.getAttribute("jxValue")) {
                if (_Rp$(text, "%.")) {
                    obj = el.getAttribute(text.substring(2));
                } else {
                    obj = text;
                }
            } else {
                if (!childs) {
                    obj = el.innerHTML;
                } else {
                    obj = {};
                }
            }
        }
        if (childs == "1") {
            var els = el.childNodes;
            for (var i = 0; i < els.length; i++) {
                if (els[i].nodeType == 1) {
                    var _id = els[i].getAttribute("jxc");
                    if (_id) {
                        readObject(els[i], obj, _id);
                    }
                }
            }
        }
        if (id == ".") {
            asd = (obj);
        }
        if (target && id) {
            if (id == ".") {
                for (var i in obj) {
                    setObjectValue(target, i, obj[i]);
                }
            } else {
                setObjectValue(target, id, obj);
            }
        }
        return obj;
    };

    function getEventStack(obj, name, create) {
        var arr, prop = obj.__x_;
        if (prop) {
            arr = prop[name];
            if (!arr) {
                arr = [];
                if (create) {
                    prop[name] = arr;
                }
            }
        } else {
            arr = [];
            if (create) {
                obj.__x_ = {};
                obj.__x_[name] = arr;
            }
        }
        return arr;
    }

    function getEventStackCopy(obj, name) {
        var arr = [], prop = obj.__x_;
        if (prop) {
            if (name) {
                if (prop[name]) {
                    $jex.array.copy(prop[name], arr);
                }
            } else {
                $jex.array.each(prop, function(name, obj) { $jex.arraycopy(obj, arr); });
            }
        }
        return arr;
    }

    var events = [];
    var bindingArr = "blur,focus,load,resize,scroll,unload,click,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error";
    var bindingEvent = { keypress: function(object, target, eventname, handler) { return $jex.event.bindDom(object, $jex.ie || $jex.safari ? "keydown" : "keypress", target, handler); } };
    $jex.event.binding = function(object, target, eventname, handler) {
        if (!object) {
            return;
        }
        if (arguments.length == 3) {
            handler = eventname;
            eventname = target;
            target = object;
        }
        if (bindingArr.indexOf(eventname.toLowerCase()) < 0) {
            return $jex.event.add(target, eventname, handler);
        } else {
            if (!bindingEvent[eventname]) {
                return $jex.event.bindDom(object, eventname, target, handler);
            } else {
                return bindingEvent[eventname](object, target, eventname, handler);
            }
        }
    };
    $jex.event.addEx = function(objarr, name, handler, type, notmark) {
        for (var i = 0, n = objarr.length; i < n; i++) {
            var obj = objarr[i];
            $jex.event.add(obj, name, handler, type, notmark);
        }
    };
    $jex.event.add = function(obj, name, handler, type, notmark) {
        obj = new EventListener(obj, name, handler, type);
        if (!notmark) {
            events.push(obj);
            obj.refer = events.length - 1;
        }
        return obj;
    };
    $jex.event.remove = function(listener) {
        listener.remove();
        var i = listener.refer;
        if (!(i < 0)) {
            var obj = events.pop();
            if (i < events.length) {
                events[i] = obj;
                obj.refer = i;
            }
            listener.refer = -1;
        }
    };
    $jex.event.clear = function(elem, name) { $jex.array.each(getEventStackCopy(elem, name), $jex.event.remove); };
    $jex.event.trigger = function(elem, name, arg) {
        $jex.console.info("[事件触发] name:", name, ", elem:", elem, "  , arg:", arg);
        var args = [];
        $jex.array.copy(arguments, args, 2);
        this.triggerParam(elem, name, args);
    };
    $jex.event.triggerParam = function(elem, name, args) { $jex.array.each(getEventStackCopy(elem, name), function(func) { func.apply(elem, args); }); };
    $jex.event.click = function(elemId, func) {
        $jex.event.binding($jex.$(elemId), "click", function(evt) {
            func(evt);
            $jex.stopEvent(evt);
        });
    };
    $jex.event.within = function(contentEl, evt) {
        var element = typeof event != "undefined" ? event.srcElement : evt.target;
        var isIn = false;
        while (element) {
            isIn = (element == contentEl);
            if (isIn) {
                break;
            }
            element = element.parentNode;
        }
        return isIn;
    };
    $jex.errorStack = [];
    window.onerror = function(e) {
        e.toString = $jex.errToString;
        $jex.console.error(e);
    };

    function EventListener(elem, name, handler, type) {
        this.elem = elem;
        this.name = name;
        this.handler = handler;
        this.type = type;
        this.refer = -1;
        getEventStack(elem, name, true).push(this);
    }

    EventListener.prototype.remove = function() {
        if (this.elem) {
            switch (this.type) {
            case 1:
                this.elem.removeEventListener(this.name, this.handler, false);
                break;
            case 4:
                this.elem.removeEventListener(this.name, this.handler, true);
                break;
            case 2:
                this.elem.detachEvent("on" + this.name, this.handler);
                break;
            case 3:
                this.elem["on" + this.name] = null;
                break;
            }
            $jex.array.remove(getEventStack(this.elem, this.name), this);
            this.elem = this.handler = null;
        }
    };
    EventListener.prototype.apply = function(obj, args) { return this.handler.apply(obj, args); };
});
$jex.exec(function() {
    function ScriptRequest(option) {
        if (option.funcName) {
            this.funcName = option.funcName;
        }
        this.callbackName = option.callbackName || "callback";
        this.doc = option.doc || document;
        this.win = $jex.getDocumentWindow(this.doc);
        if (option.onerror) {
            $jex.event.add(this, "error", option.onerror);
        }
        if (option.ontimeout) {
            $jex.event.add(this, "timeout", option.ontimeout);
        }
        if (option.oncancel) {
            $jex.event.add(this, "cancel", option.oncancel);
        }
        if (option.oncomplete) {
            $jex.event.add(this, "complete", option.oncomplete);
        }
    }

    ScriptRequest.loadScript = function(url, doc) {
        doc = doc || document;
        var port = doc.createElement("script");
        port.type = "text/javascript";
        port.src = url;
        doc.getElementsByTagName("head")[0].appendChild(port);
        return port;
    };
    ScriptRequest.prototype.send = function(url, timeout) {
        var cid = this.callID = this.funcName ? this.funcName : "XQScript_" + $jex.globalID();
        if (url.indexOf("?") == -1) {
            url = url + "?";
        }
        url += "&" + this.callbackName + "=" + cid;
        var _self = this;
        var _win = this.win;
        var timerid;
        _win[cid] = function() {
            if (timerid) {
                window.clearTimeout(timerid);
                timerid = null;
            }
            _self.release();
            _win[cid] = null;
            $jex.event.triggerParam(_self, "complete", $jex.array.toArray(arguments));
        };
        if (timeout && timeout > 0) {
            timerid = window.setTimeout(function() {
                _self.release();
                $jex.event.trigger(_self, "timeout");
            }, timeout);
        }
        this.searchPort = ScriptRequest.loadScript(url, this.doc);
    };
    ScriptRequest.prototype.release = function() {
        if (this.searchPort) {
            $jex.removeElement(this.searchPort);
            this.searchPort = null;
            this.win[this.callID] = $jex.VOIDFUNC;
            return true;
        }
        return false;
    };
    ScriptRequest.prototype.cancel = function() {
        if (this.release()) {
            $jex.event.trigger(this, "cancel");
        }
    };
    $jex.scriptRequest = ScriptRequest;
    $jex.jsonp = function(url, data, successhandler, options) {
        if (arguments.length == 2 && typeof data == "function") {
            successhandler = data;
            data = {};
        }
        options = options || {};
        options.oncomplete = successhandler;
        var timeout = options.timeout || {};
        if (url.indexOf("?") == -1) {
            url = url + "?";
        }
        for (var k in data) {
            url += "&" + k + "=" + encodeURIComponent(data[k]);
        }
        var req = new ScriptRequest(options);
        req.send(url);
        if (timeout.time && timeout.time > 0) {
            window.setTimeout(function() {
                req.cancel();
                timeout.func();
            }, timeout.time);
        }
        return req;
    };
    $jex.ajax = function(url, data, successhandler, options) {
        if ($jex.isdebug && $jex.gecko) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            } catch (e) {
                alert("Permission UniversalBrowserRead denied.");
            }
        }
        var request = $jex.createXMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status >= 200 && request.status < 300 || request.status == 304) {
                    var _result = { result: {} };
                    try {
                        var str = request.responseText;
                        if (str) {
                            str = $jex.trim(str);
                            if (str.charAt(0, 1) == "{") {
                                str = "(" + str + ")";
                            }
                            _result = eval(str);
                            successhandler(_result);
                        } else {
                            if (options.onerror) {
                                options.onerror(request);
                            }
                            $jex.console.error(url, "返回值为空");
                        }
                    } catch (e) {
                        if (options.onerror) {
                            options.onerror(e);
                        }
                        e.toString = $jex.errToString;
                        $jex.console.error(url, e);
                    }
                } else {
                    if (options.onerror) {
                        options.onerror();
                    }
                }
            }
        };
        var token = Math.floor(Math.random() * 100000);
        data._token = token;
        if (url.indexOf("?") == -1) {
            url = url + "?";
        }
        request.open("GET", url + "&" + $jex.toQueryString(data), true);
        request.send(null);
        $jex.console.info("[接口调用 token=", token, "]", " url:", url, data, successhandler, options, request);
        return request;
    };
    var timeMap = {};
    var _consoleStack = [];
    var _filter = { INFO: 1, WARN: 1 };
    $jex.errToString = function() {
        var s = ["[ERROR]"];
        for (var key in this) {
            if (typeof this[key] == "function") {
                continue;
            }
            s.push(key, ":", this[key], "<br/>");
        }
        return s.join(" ");
    };
    var _pushToStack = function(level) {
        if (!_filter[level]) {
            return function() { _consoleStack.push(arguments); };
        } else {
            return $jex.VOIDFUNC;
        }
    };
    $jex.console = { info: new _pushToStack("INFO"), error: new _pushToStack("ERROR"), warn: new _pushToStack("WARN"), time: new _pushToStack("TIME"), trace: new _pushToStack("TRACE") };
    if ($jex.isdebug) {
    }
    $jex.console.start = function(key) { timeMap[key] = new Date(); };
    $jex.console.end = function(key) {
        if (timeMap[key]) {
            $jex.console.time("[TIME]", key, ":", new Date() - timeMap[key]);
            delete timeMap[key];
        }
    };
    $jex.console.output = function() {
        var str = [];
        for (var i = 0; i < _consoleStack.length; i++) {
            var line = [];
            var args = _consoleStack[i];
            for (var j = 0; j < args.length; j++) {
                line.push(args[j]);
            }
            str.push(line.join(""));
        }
        var div = $jex.$("divDebugConsole");
        if (div) {
            div.innerHTML = str.join("<br/>");
            $jex.element.show(div);
        } else {
            alert(str.join("\r\n"));
        }
    };
    $jex.event.binding(document, "keydown", function(ev) {
        if ((ev.keyCode == 121 && ev.ctrlKey && ev.altKey) || (ev.keyCode == 77 && ev.ctrlKey && ev.altKey)) {
            $jex.console.output();
        }
    });
});

function UIObject() {
    this._XGUI_ = true;
    this._content_ = [];
    this._childrens_ = [];
    this._GID_ = "XI" + $jex.globalID();
    this._tplsreg = /\{\#([^\}]*?)\}/;
}

UIObject.prototype.isempty = function() { return this._content_.length == 0; };
UIObject.prototype.clear = function() {
    this._content_ = [];
    this._childrens_ = [];
};
UIObject.prototype.newid = function(a) { return a + this._GID_; };
UIObject.prototype.tpls = function(b) {
    var d = this._content_;
    var a = this._childrens_;
    var f = this._GID_;
    for (var c = 0; c < arguments.length; c++) {
        var g = arguments[c];
        if (g != null) {
            if (g.indexOf("{#") < 0) {
                d.push(g);
            } else {
                if (g._XGUI_ == true) {
                    a.push(g);
                    d.push(g);
                } else {
                    d.push(g.replace(this._tplsreg, "$1" + f));
                }
            }
        }
    }
    return this;
};
UIObject.prototype.append = function(b) {
    var d = this._content_;
    var a = this._childrens_;
    var f = this._GID_;
    for (var c = 0; c < arguments.length; c++) {
        var g = arguments[c];
        if (g != null) {
            if (c % 2 == 0) {
                d.push(g);
            } else {
                if (g._XGUI_ == true) {
                    a.push(g);
                    d.push(g);
                } else {
                    d.push(' id="', g, f, '"');
                }
            }
        }
    }
    return this;
};
UIObject.prototype.text = function(c) {
    var b = this._content_;
    for (var a = 0; a < arguments.length; a++) {
        b.push(arguments[a]);
    }
    return this;
};
UIObject.prototype.getDomNode = function(a) { return $jex.$(a + this._GID_, this._document_); };
UIObject.prototype.initDocument = function(a) {
    this._document_ = a;
    var b = this._childrens_;
    for (var c = 0; c < b.length; c++) {
        b[c].initDocument(a);
    }
    this.initialize();
};
UIObject.prototype.write = function(b) {
    var a = this.toString();
    if (a) {
        b.innerHTML = a;
        this.initDocument($jex.doc(b));
    } else {
        b.innerHTML = "";
    }
};
UIObject.prototype.toString = function() { return this._content_.join(""); };
UIObject.prototype.initialize = $jex.VOIDFUNC;
$jex.List = function(a) {
    this._map = {};
    this._size = 0;
    this.addRange(a);
};
$jex.exec(function() {
    var a = new Object();
    $jex.List.prototype.addRange = function(d) {
        var g = this._size;
        if (d) {
            var b = this._map;
            for (var f in d) {
                var c = d[f];
                b[f] = c == null ? a : c;
                g++;
            }
        }
        this._size = g;
    };
    $jex.List.prototype.firstkey = function() {
        var b = this.keys();
        if (b.length == 0) {
            return null;
        }
        return b[0];
    };
    $jex.List.prototype.first = function() {
        var b = this.keys();
        if (b.length == 0) {
            return null;
        }
        return this.get(b[0]);
    };
    $jex.List.prototype.get = function(c) {
        var b = this._map[c];
        return b === a ? null : b;
    };
    $jex.List.prototype.put = function(c, d) {
        var b = this._map[c];
        if (typeof b === "undefined") {
            this._size++;
        }
        if (d == null) {
            d = a;
        }
        this._map[c] = d;
        return b;
    };
    $jex.List.prototype.keys = function() {
        var c = [];
        var b = this._map;
        for (var d in b) {
            c.push(d);
        }
        return c;
    };
    $jex.List.prototype.contains = function(b) { return this._map[b] != null; };
    $jex.List.prototype.remove = function(c) {
        var b = this._map[c];
        if (b != null) {
            this._size--;
        }
        if (b === a) {
            b = null;
        }
        delete this._map[c];
        return b;
    };
    $jex.List.prototype.size = function() { return this._size; };
    $jex.List.prototype.clear = function() {
        this._map = {};
        this._size = 0;
    };
    $jex.List.prototype.toArray = function() {
        var c = this._map;
        var b = [];
        for (var d in c) {
            v = c[d];
            if (v === a) {
                v = null;
            }
            b.push([d, v]);
        }
        return b;
    };
    $jex.List.prototype.toString = function() {
        var d = [];
        var c = this._map;
        for (var b in c) {
            d.push(b + ": " + c[b]);
        }
        return d.join("\n");
    };
});

function ActionDelay(a) {
    this.delay = a;
    this.timer = null;
}

ActionDelay.prototype.reset = function(a) {
    this.cancel();
    this.timer = setTimeout(a, this.delay);
};
ActionDelay.prototype.cancel = function() {
    if (this.timer) {
        clearTimeout(this.timer);
    }
};

function ActionFlow(a) {
    this.actions = {};
    this.logs = [];
    this.interval = a;
    this.tid = null;
}

ActionFlow.prototype.add = function(b, a, d) {
    var c = this.actions[a];
    if (c && c.order < b) {
        return;
    }
    this.actions[a] = { order: b, key: a, func: d };
    return this;
};
ActionFlow.prototype.remove = function(a) { delete this.actions[a]; };
ActionFlow.prototype.start = function() {
    if (this.tid !== null) {
        return;
    }
    var b = false;
    for (var a in this.actions) {
        b = true;
        break;
    }
    if (!b) {
        return;
    }
    this.tid = setTimeout($jex.callback(this, this.run), this.interval);
};
ActionFlow.prototype.run = function() {
    clearTimeout(this.tid);
    this.tid = null;
    var a = this.actions, h = null;
    for (var b in a) {
        var c = a[b];
        if (!h || c.order < h.order) {
            h = c;
            delete a[b];
        }
    }
    if (h == null) {
        return;
    }
    var g = new Date().getTime();
    var d;
    try {
        h.func();
        d = "done";
    } catch (f) {
        d = "error:" + f;
    }
    this.logs.push([g, d, new Date().getTime() - g, h.key]);
    this.start();
};
if ($jex.ie > 5 && $jex.ie < 7) {
    try {
        (function() {
            document.execCommand("BackgroundImageCache", false, true);
            $jex.addClassName(document.getElementsByTagName("html")[0], "jx-ie" + ($jex.ie * 10));
        })();
    } catch (e) {
    }
}
(function() {
    var a = null;
    $jex.scrollTo = function(d, c) {
        if (!d) {
            return;
        }
        if (a) {
            clearInterval(a);
        }
        c = c || 0;
        var i = $jex.offset(d);
        var h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var g = Math.floor(i.left);
        var f = Math.floor(i.top);
        window.scrollTo(g, f);
    };
    $jex.define = function(c) { return typeof(c) != "undefined" && c != null; };
    $jex.extend = function() {
        for (var d = 1, c = arguments.length; d < c; d++) {
            $jex.merge(arguments[0], arguments[d]);
        }
        return arguments[0];
    };
    $jex.element.compareDocumentPosition = function(d, c) { return d.compareDocumentPosition ? d.compareDocumentPosition(c) : d.contains ? (d != c && d.contains(c) && 16) + (d != c && c.contains(d) && 8) + (d.sourceIndex >= 0 && c.sourceIndex >= 0 ? (d.sourceIndex < c.sourceIndex && 4) + (d.sourceIndex > c.sourceIndex && 2) : 1) : 0; };
    $jex.array.inArray = function(d, c) { return $jex.array.indexOf(c, d); };
    $jex.array.xcopy = function() {
        var h = -1, c = arguments.length, k, j = arguments[c - 1];
        if (typeof arguments[c - 1] == "number") {
            var g = [j, 0];
            j = arguments[--c - 1];
            while (++h < c - 1) {
                arguments.callee(arguments[h], g);
            }
            Array.prototype.splice.apply(j, g);
        } else {
            while (++h < c - 1) {
                for (var f = 0, d = arguments[h].length; f < d; f++) {
                    j.push(arguments[h][f]);
                }
            }
        }
        return j;
    };
    $jex.hash.size = function(d) {
        var c = 0;
        $jex.hash.each(d, function() { c++; });
        return c;
    };
    $jex.hash.first = function(d) {
        for (var c in d) {
            return d[c];
        }
        return null;
    };
    var b = null;
    $jex.cookie = {
        reset: function() { b = $jex.cookie._getCookieHash(); },
        _getCookieHash: function() {
            var f = document.cookie.split(";");
            var d = {};
            for (var c = 0; c < f.length; c++) {
                if (f[c].indexOf("=") != -1) {
                    d[$jex.trim(f[c].split("=")[0])] = $jex.trim(unescape(f[c].split("=")[1]));
                }
            }
            return d;
        },
        get: function(c) {
            if (!b) {
                b = $jex.cookie._getCookieHash();
            }
            return b[c];
        }
    };
    $jex.merge($jex.event, {
        _readyList: [],
        _isReady: false,
        _bindReady: function() {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", function() {
                    document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                    $jex.event._ready();
                }, false);
            } else {
                if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", function() {
                        if (document.readyState === "complete") {
                            document.detachEvent("onreadystatechange", arguments.callee);
                            $jex.event._ready();
                        }
                    });
                    if (document.documentElement.doScroll && window == window.top) {
                        (function() {
                            if ($jex.event._isReady) {
                                return;
                            }
                            try {
                                document.documentElement.doScroll("left");
                            } catch (c) {
                                setTimeout(arguments.callee, 0);
                                return;
                            }
                            $jex.event._ready();
                        })();
                    }
                }
            }
            $jex.event.bind(window, "load", $jex.event._ready);
        },
        ready: function(c) {
            if ($jex.event._isReady) {
                c();
            } else {
                $jex.event._readyList.push(c);
            }
        },
        _ready: function() {
            if (!$jex.event._isReady) {
                $jex.event._isReady = true;
                for (var d = 0, c = $jex.event._readyList.length; d < c; d++) {
                    $jex.event._readyList[d].call(document);
                }
            }
        }
    });
    $jex.event._bindReady();
    $jex.merge($jex.date = {}, {
        _prefix: function(c, d) {
            d = d || 2;
            c = c + "";
            while (c.length < d) {
                c = "0" + c;
            }
            return c;
        },
        _format: { yyyy: function(c) { return c.getFullYear().toString(); }, MM: function(c) { return $jex.date._prefix(c.getMonth() + 1); }, M: function(c) { return c.getMonth() + 1 + ""; }, HH: function(c) { return $jex.date._prefix(c.getHours()); }, H: function(c) { return c.getHours(); }, dd: function(c) { return $jex.date._prefix(c.getDate()); }, d: function(c) { return c.getDate(); }, mm: function(c) { return $jex.date._prefix(c.getMinutes()); }, m: function(c) { return c.getMinutes(); }, m: function(c) { return c.getMinutes(); }, ss: function(c) { return $jex.date._prefix(c.getSeconds()); }, s: function(c) { return c.getSeconds(); } },
        format: function(c, d) {
            switch (d) {
            case"MM月dd日":
                return[$jex.date._format.MM(c) + "月", $jex.date._format.dd(c) + "日"].join("-");
            }
            return[$jex.date._format.yyyy(c), $jex.date._format.MM(c), $jex.date._format.dd(c)].join("-");
        },
        parse: function(c) {
            if (!c || typeof c != "string") {
                return c;
            }
            return new Date(c.replace(/-/g, "/"));
        },
        add: function(c, i, g) {
            var h = c;
            if (g == null) {
                g = (typeof c == "string");
            }
            if (typeof c == "string") {
                h = new Date(c.replace(/-/g, "/"));
            }
            var f = new Date(h.getTime() + (i * 86400000));
            if (g) {
                return $jex.date.format(f);
            } else {
                return f;
            }
        },
        getMinute: function(f) {
            var g = f.split(":");
            var d = parseInt(g[0], 10);
            d = (d == 0) ? 24 : d;
            var c = parseInt(g[1], 10);
            return d * 60 + c;
        },
        getTime: function(c) { return parseInt(c.replace(":", ""), 10); }
    });
    $jex.merge($jex.web = {}, {
        parseQueryString: function(f) {
            var d = /([^\?|\&]\w+)=([^\?|\&]+)/ig;
            var c = {};
            if (f) {
                if (f.charAt(0) == "?") {
                    f = f.substr(1);
                }
                while (true) {
                    if ((r = d.exec(f))) {
                        c[r[1]] = r[2];
                    } else {
                        break;
                    }
                }
            }
            return c;
        }
    });
    $jex.web.parameters = $jex.web.parseQueryString(window.location.search);
})();
(function() {
    $jex.lightbox = {
        overlay: null,
        content: null,
        a: { display: "none", left: "0" },
        b: { display: "none" },
        c: { display: "block", left: "50%" },
        d: { display: "block" },
        binded: false,
        toBind: function() { $jex.lightbox.show(null, null, 1); },
        cache: {},
        gid: 1,
        expand: "lightbox_temp",
        removeData: function(c) {
            var f = c[this.expand];
            if (!f) {
                return;
            }
            try {
                delete c[this.expand];
            } catch (d) {
                if (c.removeAttribute) {
                    c.removeAttribute(this.expand);
                }
            }
            delete this.cache[f];
        },
        data: function(d, f) {
            var c = d[this.expand] ? d[this.expand] : (d[this.expand] = "" + this.gid++);
            if (f != undefined) {
                this.cache[c] = f;
            }
            return this.cache[c];
        },
        _place: function(c) {
            var g = (document.compatMode && document.compatMode.toLowerCase() == "css1compat") ? document.documentElement : document.body;
            if (c & 2) {
                var f = (g.clientHeight - this.content.offsetHeight) / 2;
                var d = Math.floor(this.content.offsetWidth / 2);
                $jex.hash.each($jex.extend({}, this.c, { top: ((f > 0 ? f : 0) + (window.pageYOffset || g.scrollTop)) + "px", marginLeft: 0 - d + "px" }), function(i, h) { $jex.lightbox.content.style[i] = h; });
            }
            if (c & 1) {
                $jex.hash.each($jex.extend({}, this.d, { height: Math.max(g.scrollHeight, g.clientHeight) + "px", width: Math.max(g.scrollWidth, g.clientWidth) + "px" }), function(i, h) { $jex.lightbox.overlay.style[i] = h; });
            }
        },
        show: function(f, h, d) {
            if (!this.overlay) {
                this.overlay = document.body.appendChild(document.createElement("div"));
                this.content = document.body.appendChild(document.createElement("div"));
                this.overlay.className = "lb_overlay";
                this.content.className = "lb_content";
            }
            if (f) {
                this.content.innerHTML = f;
            }
            if (!this.binded) {
                this.binded = true;
                var g = $jex.array.xcopy(document.getElementsByTagName("object"), document.getElementsByTagName("select"), document.getElementsByTagName("embed"), []);
                $jex.array.each(g, function(i) {
                    $jex.lightbox.data(i, i.style.visibility);
                    i.style.visibility = "hidden";
                });
                if (window.attachEvent) {
                    window.attachEvent("onresize", this.toBind);
                } else {
                    if (window.addEventListener) {
                        window.addEventListener("resize", this.toBind, false);
                    }
                }
            }
            this.content.style.visibility = "hidden";
            this.content.style.display = "block";
            if (typeof h == "function") {
                h.call(this);
            }
            this._place(d == null ? 3 : d);
            this.content.style.visibility = "visible";
            var c = $jex.$("msgButton");
            if (c) {
                $jex.event.click(c, function() { $jex.lightbox.hide(); });
            }
        },
        hide: function() {
            var d = $jex.array.xcopy(document.getElementsByTagName("object"), document.getElementsByTagName("select"), document.getElementsByTagName("embed"), []);
            $jex.array.each(d, function(f) {
                f.style.visibility = $jex.lightbox.data(f) || "inherit";
                $jex.lightbox.removeData(f);
            });
            for (var c in this.a) {
                this.content.style[c] = this.a[c];
            }
            for (var c in this.b) {
                this.overlay.style[c] = this.b[c];
            }
            if (window.detachEvent) {
                window.detachEvent("onresize", this.toBind);
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("resize", this.toBind, false);
                }
            }
            this.binded = false;
        }
    };
    var a = document.createElement("style");
    a.type = "text/css";
    var b = ".lb_content {display : none ; position : absolute ; z-index:10000 ; left:0 ;}.lb_overlay {display : none ; position : absolute ; z-index:10000 ; background-color : #000 ; left : 0px ; top : 0px ; opacity : 0.2 ; filter: Alpha(opacity=20) ;}";
    if (a.styleSheet) {
        a.styleSheet.cssText = b;
    } else {
        a.appendChild(document.createTextNode(b));
    }
    document.getElementsByTagName("head")[0].appendChild(a);
    window.$jex = $jex;
})();
$jex.hover = function(z) {
    var y = z.delay || 100,
        x = z.isover || !1,
        w = z.act,
        u = z.extra || [],
        t = null,
        s = function(b) { x && z.onmouseover.apply(w, [b]); },
        q = function(b) { x || z.onmouseout.apply(w, [b]); },
        p = function(b) {
            x = !0;
            t && clearTimeout(t);
            t = setTimeout(function() { s(b); }, y);
        },
        o = function(b) {
            x = !1;
            t && clearTimeout(t);
            t = setTimeout(function() { q(b); }, y);
        };
    $jex.event.bind(w, "mouseover", p);
    $jex.event.bind(w, "mouseout", o);
    for (var n = 0, a = u.length; n < a; n += 1) {
        $jex.event.bind(u[n], "mouseover", p);
        $jex.event.bind(u[n], "mouseout", o);
    }
};
var DataSet = function(a) {
    this.options = a || {};
    this._init();
};
DataSet.prototype._init = function() {
    this.currentPage = 0;
    this.totalPage = 0;
    this._pageSize = this.options.pageSize || 15;
    this._currentPageData = null;
    this.currentPageDataMap = {};
    this.recordCount = 0;
    this._data = {};
    this._dataMap = [];
    this.filteredDataMap = [];
    this._currentSortArray = this.options.defaultSort || [];
    this._currentSortKey = this._getSortKey(this.options.defaultSort);
    this._sortMatrix = {};
    this._filterMatrix = {};
    this._filters = [];
    this._filtersMap = {};
};
DataSet.prototype.getData = function() { return this._data; };
DataSet.prototype.loadData = function(b) {
    var a = this;
    this._init();
    $jex.foreach(b, function(f, c, d) { a.addItem(d, f); });
};
DataSet.prototype.addItem = function(b, c) {
    $jex.console.info("DataSet.prototype.addItem:", arguments);
    var a = this._data[b];
    this._data[b] = c;
    this._dataMap.push(b);
    this.filteredDataMap.push(b);
    this._filterMatrix[b] = 0;
    if (!a) {
        this.recordCount++;
        this.filteredRecCount++;
    }
};
DataSet.prototype._doSort = function(a) {
    var b = this;
    a = a || this._currentSortKey;
    var f = a.replace(/\-(0|1)/g, function(i, j) { return"-" + (j == "1" ? "0" : "1"); });
    if (!this._sortMatrix[a]) {
        this._sortMatrix[a] = [];
        if (this._sortMatrix[f]) {
            this._sortMatrix[a] = this._sortMatrix[f].slice().reverse();
        } else {
            this._sortMatrix[a] = this._dataMap.slice();
            var h = this._currentSortArray;
            var d = this._data;
            var g = {};
            var c = function(j, i, k) {
                if (!g[i]) {
                    g[i] = b._gotSortValue(j, i, k);
                    if (g[i] == null) {
                        g[i] = Number.MAX_VALUE;
                    }
                }
                return g[i];
            };
            this._sortMatrix[a].sort(function(o, m) {
                var p, k, j;
                for (var n = 0; n < h.length; n++) {
                    p = h[n][0];
                    k = c(d, o, p);
                    j = c(d, m, p);
                    var l = 0;
                    if (k > j) {
                        l = 1;
                    } else {
                        if (k == j) {
                            l = 0;
                        } else {
                            l = -1;
                        }
                    }
                    if (h[n][1]) {
                        l = (-l);
                    }
                    if (l == 0) {
                        continue;
                    }
                    return l;
                }
                return 0;
            });
        }
    }
    $jex.console.info("DataSet.prototype._doSort:", "_sortKey:", a, "_sortMatrix[_sortKey]:", this._sortMatrix[a]);
};
DataSet.prototype._doGroup = function() {
    var f = this.options.group;
    if (!f) {
        return;
    }
    var d = this._group = {};
    var h = this.filteredDataMap;
    for (var b = 0; b < h.length; b++) {
        var g = this._data[h[b]];
        for (var c in f) {
            if (!d[c]) {
                d[c] = {};
            }
            var a = f[c](g);
            if (!d[c][a]) {
                d[c][a] = [];
            }
            d[c][a].push(g);
        }
    }
};
DataSet.prototype.currentGroup = function(a) {
    if (a) {
        return this._group[a] || {};
    } else {
        return this._group;
    }
};
DataSet.prototype._doAllFilters = function() {
    var a = this;
    if (this._filters.length == 0) {
        this.filteredDataMap = this._sortMatrix[this._currentSortKey];
    } else {
        $jex.foreach(this._filters, function(b) { a.doFilter(b); });
    }
};
DataSet.prototype.addFilter = function(b) {
    var c = null;
    if (!this._filtersMap[b.name]) {
        var a = Math.pow(2, this._filters.length);
        c = { name: b.name, type: b.type, value: b.value, mask: a, nmask: ~a };
        this._filters.push(c);
        this._filtersMap[c.name] = c;
        this._filterCount = this._filters.length;
    } else {
        this._filtersMap[b.name].value = b.value;
        c = this._filtersMap[b.name];
    }
    return c;
};
DataSet.prototype.clearFilter = function(a) {
    if (!this._filtersMap[a]) {
        return;
    } else {
        this._filtersMap[a].value = [];
    }
    if (this.filteredDataMap) {
        this.filteredDataMap = [];
    } else {
        return;
    }
    var d = this._sortMatrix[this._currentSortKey];
    for (var c = 0; c < this._dataMap.length; c++) {
        var b = d[c];
        this._filterMatrix[b] &= this._filtersMap[a].nmask;
        if (!this._filterMatrix[b]) {
            this.filteredDataMap.push(b);
        }
    }
    this.filteredRecCount = this.filteredDataMap.length;
};
DataSet.prototype.doFilter = function(d) {
    var c = this;
    var a = d.name, f = d.value, b = d.type;
    if (!f || f.length == 0) {
        this.clearFilter(a);
        return false;
    }
    this.filteredDataMap = [];
    var g = this.addFilter(d);
    if (this.recordCount == 0) {
        return;
    }
    if (!this._currentSortKey || this._currentSortKey == -1) {
        var h = this._dataMap;
    } else {
        var h = this._sortMatrix[this._currentSortKey];
    }
    $jex.console.info("DataSet.prototype.doFilter:", "_filter:", g);
    if (h) {
        $jex.foreach(h, function(j) {
            if (c.options.filterFunc && c.options.filterFunc[a]) {
                var i = c.options.filterFunc[a](c._data[j], j, g);
            } else {
                var i = c._data[j][a];
            }
            if (c._checkFilter(c._filtersMap[a], i)) {
                c._filterMatrix[j] &= c._filtersMap[a].nmask;
            } else {
                c._filterMatrix[j] |= c._filtersMap[a].mask;
            }
            if (!c._filterMatrix[j]) {
                c.filteredDataMap.push(j);
            }
        });
    }
};
DataSet.prototype._checkFilter = function(c, b) {
    var a = false;
    if (c.value.length == 0) {
        return true;
    }
    switch (c.type) {
    case 4:
        $jex.foreach(c.value, function(f) {
            if (f == b) {
                a = true;
                return $jex.$break;
            }
        });
        break;
    case 8:
        var d = b.join();
        $jex.foreach(c.value, function(f) {
            if (d.indexOf(f) >= 0) {
                a = true;
                return $jex.$break;
            }
        });
        break;
    }
    $jex.console.info("DataSet.prototype._checkFilter", "_filter:", c, "_value:", b, "result:", a);
    return a;
};
DataSet.prototype._gotSortValue = function(d, b, c) {
    var a = d[b][c];
    if (typeof a == "function") {
        return a.call(d[b]);
    } else {
        if (a) {
            return a;
        } else {
            if (this.options.sortFunc && this.options.sortFunc[c]) {
                return this.options.sortFunc[c](d[b], b, c);
            } else {
                $jex.console.error("DataSet,sort,gotSortValue:", "dataSource[key]:", d[b], "key:", b, "indexStr:", c);
                return 0;
            }
        }
    }
};
DataSet.prototype.sort = function(b) {
    var c = b || this._defaultSort;
    this._currentSortArray = c;
    var a = this._getSortKey(c);
    this._currentSortKey = a;
    $jex.console.info("DataSet.prototype.sort: _sortDef:", b, ", _sortKey:", a, ", _currentSortKey:", this._currentSortKey);
};
DataSet.prototype._getSortKey = function(b) {
    var a = [];
    $jex.foreach(b, function(d, c) { a.push([d[0], d[1] ? "1" : "0"].join("-")); });
    return a.join("|");
};
DataSet.prototype.pageSize = function(a) {
    if (!a) {
        return this._pageSize;
    } else {
        this._pageSize = a;
        this.currentPage = 0;
        this._refreshDisplay();
    }
};
DataSet.prototype.pageIndex = function() { return this.currentPage; };
DataSet.prototype.pageCount = function() { return this._maxPage; };
DataSet.prototype._refreshDisplay = function(f) {
    if (f == null) {
        var f = this.currentPage;
    } else {
        this.currentPage = f;
    }
    var g = (this.filteredDataMap.length) / this._pageSize;
    var a = Math.floor(g);
    this._maxPage = a + ((g - a == 0) ? 0 : 1);
    if (this._maxPage < 0) {
        this._maxPage = 0;
    }
    if (this.currentPage > this._maxPage) {
        this.currentPage = this._maxPage;
    }
    var b = this.filteredDataMap.slice();
    $jex.event.trigger(this, "refreshCurrentPage", b, this._data, this.currentPage, this._pageSize);
    var h = [];
    for (var d = this.currentPage * this._pageSize; d < Math.min((this.currentPage + 1) * this._pageSize, b.length); d++) {
        var c = b[d];
        h.push(this._data[c]);
        this.currentPageDataMap[c] = 1;
    }
    this._currentPageData = h;
    $jex.console.info("DataSet.prototype._refreshDisplay:", "_page:", f, "this.currentPage:", this.currentPage, "this._maxPage:", this._maxPage);
};
DataSet.prototype.setPageIndex = function(a) { this.currentPage = a; };
DataSet.prototype.gotoPage = function(a) {
    a = parseInt(a, 10);
    if (a >= 0) {
        this._refreshDisplay(a);
    } else {
        if (a == -1) {
            this._refreshDisplay(this.currentPage - 1);
        } else {
            if (a == -2) {
                this._refreshDisplay(this.currentPage + 1);
            }
        }
    }
};
DataSet.prototype.currentPageData = function() { return this._currentPageData; };
DataSet.prototype.refreshPage = function() { this._refreshDisplay(); };
DataSet.prototype.refresh = function() {
    $jex.console.start("DataSet.prototype.refresh");
    this._sortMatrix = {};
    this._filterMatrix = {};
    $jex.console.start("_doSort");
    this._doSort();
    $jex.console.end("_doSort");
    $jex.console.start("_doAllFilters");
    this._doAllFilters();
    $jex.console.end("_doAllFilters");
    $jex.console.start("_doGroup");
    this._doGroup();
    $jex.console.end("_doGroup");
    $jex.console.start("_refreshDisplay");
    this._refreshDisplay();
    $jex.console.end("_refreshDisplay");
    $jex.console.end("DataSet.prototype.refresh");
};
DataSet.prototype.getRecordCount = function() { return this._dataMap.length; };
DataSet.prototype.hasItem = function(a) { return this._data[a]; };

function XControl(c) {
    this._type = "XControl";
    this._setting = c || {};
    this._onInit_funcArr = [];
    XControl.superclass.constructor.call(this, this._setting);
    var f = null;
    this.dataSource = function(g) {
        if (g == null) {
            return f;
        } else {
            f = g;
        }
    };
    var b = this._setting;
    if (b.handler) {
        for (var a in b.handler) {
            this[a] = b.handler[a];
        }
    }
    if (b.on) {
        for (var d in b.on) {
            $jex.event.binding(this, d, b.on[d]);
        }
    }
}

try {
    $jex.extendClass(XControl, UIObject);
    XControl.prototype.update = $jex.VOIDFUNC;
} catch (e) {
}
XControl.prototype.updateSource = function(a) {
    if (a) {
        this.dataSource(a);
    }
    this.update(this.dataSource());
};
XControl.prototype.initialize = function() {
    for (var a = 0; a < this._onInit_funcArr.length; a++) {
        this._onInit_funcArr[a].call(this);
    }
    this._onInit_funcArr = [];
};
XControl.prototype.elem = function() { return this._setting.elemId ? $jex.$(this._setting.elemId) : null; };
XControl.prototype.onInit = function(a) {
    if (typeof a == "function") {
        this._onInit_funcArr.push(a);
    }
};
XControl.prototype.render = function(a) {
    var b = a || this.elem();
    if (!b) {
        $jex.console.info("[XControl]没有可供生成HTML的容器", this);
        return;
    }
    this.write(b);
};
XControl.prototype.show = function() {};
XControl.prototype.hide = function() {};
XControl.prototype.find = XControl.prototype.getDomNode;

function XSelect(a) {
    XSelect.superclass.constructor.call(this, a);
    this._type = "XSelect";
    this.selectedItem = null;
    this._currOpt = null;
    this._dataSource = [];
    this.dataSource = null;
}

$jex.extendClass(XSelect, XControl);
$jex.register("XSelect", XSelect);
XSelect.prototype.initList = function(d) {
    this.find("curr").innerHTML = "";
    this.find("ulList").innerHTML = "";
    this.dataSource = d;
    this._dataSource = [];
    var c = this;
    var h = 0;
    var b = 0;
    var a = this._items_buffer = new UIObject();
    $jex.console.info("add items , ", d);
    $jex.foreach(d, function(l, i, k) {
        var j = c.createOptionItem(l, i, k);
        c._addNewItem(j, i);
        if (j.selected) {
            h = i;
        }
        b++;
    });
    a.write(this.find("ulList"));
    var c = this;
    for (var g = 0; g < b; g++) {
        var f = a.getDomNode("item" + g);
        f.index = g;
        f.dataSource = this._dataSource[g];
        $jex.event.binding(f, "mouseover", function(i) { c._chooseItem(this.index); });
        $jex.event.binding(f, "mousedown", function(i) {
            c.selectItem(this.index);
            $jex.element.hide(c.find("ulList"));
        });
    }
    this.selectItem(h);
    this.initial = true;
};
XSelect.prototype.val = function(b) {
    if (b) {
        for (var a = 0; a < this._dataSource.length; a++) {
            var c = this._dataSource[a];
            $jex.console.info("XSelect", this, a, "set value", c, b);
            if (c.value == b) {
                this.selectItem(a);
                break;
            }
        }
    } else {
        return this.selectedItem;
    }
};
XSelect.prototype.selectItem = function(b) {
    var a = this.selectedItem;
    var c = this._dataSource[b];
    this.selectedItem = c;
    this._chooseItem(b);
    this.find("curr").innerHTML = c.name;
    $jex.console.info("XSelect selectItem", b, c, this);
    if (this._setting.initFire == true || (this._setting.initFire == false && this.initial == true)) {
        $jex.event.trigger(this, "changeValue", c, a);
    }
};
XSelect.prototype.createOptionItem = function(c, a, b) { return c; };
XSelect.prototype.update = function() {
    this.clear();
    var a = this;
    a.text('<div class="cs">');
    a.text("<div>");
    a.text('		<div class="CSContainer">');
    a.append("			<div ", "btnDown", ' class="CSTitleLine">');
    a.text('				<div class="CSButton"> <img src="http://simg1.qunarzz.com/site/images/new_main/icon_MoreNextDays.gif"/> </div>');
    a.text('				<div class="CSTitleText"> ');
    a.append("					<span ", "curr", " ></span>");
    a.text("				</div>");
    a.text("			</div>");
    a.append("			<ul  ", "ulList", ' class="CSList" style="display:none;">');
    a.text("			</ul>");
    a.text("		</div>");
    a.text("</div>");
    a.text("</div>");
    this.onInit(function() {
        var d = this.find("btnDown");
        var c = this.find("ulList");
        var b = this.elem();
        $jex.event.binding(d, "click", function() { $jex.element.toggle(c); });
        $jex.event.binding(document, "mousedown", function(f) {
            if (!$jex.event.within(b, f)) {
                $jex.element.hide(c);
            }
        });
        if (this._setting.values) {
            this.initList(this._setting.values);
        }
    });
};
XSelect.prototype._addNewItem = function(c, a) {
    var b = this._items_buffer;
    b.append("<li ", "item" + a, ' class="CSOption" ');
    b.text(' title="', c.name, '">', c.name, "</li>");
    this._dataSource.push(c);
};
XSelect.prototype._chooseItem = function(a) {
    var b = this._items_buffer;
    var c = b.getDomNode("item" + a);
    if (this._currOpt) {
        $jex.removeClassName(this._currOpt, "onhover");
    }
    $jex.addClassName(c, "onhover");
    this._currOpt = c;
};
(function(d) {
    if (typeof d.QNR === "undefined") {
        d.QNR = {};
    }
    var b = d.location.hostname, a = d.document;
    QNR.crossDomainPost = function(i, l, p, j) {
        if (!i) {
            return;
        }
        j = j || {};
        l = l || {};
        var q = j.timeout || 0, h = "crossDomainPost" + new Date().getTime(), k = false;
        var g = function() {
            if (k) {
                return;
            }
            if (j.ontimeout) {
                j.ontimeout(i, l, p, h);
            }
            o();
        };
        var s = function(u) {
            if (k) {
                return;
            }
            if (j.onsuccess) {
                j.onsuccess(u);
            }
            o();
        };
        var o = function() {
            var u = a.getElementById(h);
            u.parentNode.removeChild(u);
            k = true;
            d[h] = null;
        };
        d[h] = s;
        var n = c(i, p, l, h, h), m = a.createElement("div");
        m.style.display = "none";
        m.id = h;
        m.innerHTML = n;
        a.body.appendChild(m);
        var t = a.getElementById("form" + h);
        if (/MSIE/i.test(navigator.appVersion)) {
            a.getElementById("ifr" + h).src = 'javascript:\'<script>window.onload=function(){document.write(\\\'<script>document.domain=\\"qunar.com\\";parent.document.getElementById("form' + h + "\").submit();<\\\\/script>\\');document.close();};<\/script>'";
        } else {
            t.submit();
        }
        if (q) {
            setTimeout(g, q);
        }
    };

    function c(i, o, m, q, g) {
        var j = [];
        var n = f(i, o, q, g), h = "ifr" + g, p = "form" + g;
        j.push('<form id="' + p + '" target="' + h + '" action="' + n + '" method="POST">');
        for (var l in m) {
            if (m.hasOwnProperty(l)) {
                j.push('<input type="text" name="' + l + '" value="' + m[l] + '" />');
            }
        }
        j.push('<input id="hostname" name="" value="' + b + '" />');
        j.push('<input id="proxypath" name="" value="' + o + '" />');
        j.push('<input id="crosscall" name="" value="' + q + '" />');
        j.push('<input id="frameid" name="frameid" value="' + g + '" /></form>');
        j.push('<iframe name="' + h + '" id="' + h + '" src="about:blank"></iframe>');
        return j.join("");
    }

    function f(l, j, k, n) {
        var m = b, i = l.indexOf("#"), g = [l];
        var h = i < 0 ? "#" : l.substr(i);
        g[g.length] = h;
        if (h.replace(/#/g, "").length) {
            g.push("&");
        }
        g[g.length] = "crosspath=" + encodeURIComponent("http://" + m + "/" + j);
        g[g.length] = "&";
        g[g.length] = "crosscall=" + encodeURIComponent(k);
        g[g.length] = "&";
        g[g.length] = "frameid=" + n;
        return g.join("");
    }
})(this);

function ScriptRequest(a) {
    if (a.funcName) {
        this.funcName = a.funcName;
    }
    this.callbackName = a.callbackName || "__jscallback";
    this.doc = a.doc || document;
    this.win = $jex.getDocumentWindow(this.doc);
    if (a.onerror) {
        $jex.event.add(this, "error", a.onerror);
    }
    if (a.ontimeout) {
        $jex.event.add(this, "timeout", a.ontimeout);
    }
    if (a.oncancel) {
        $jex.event.add(this, "cancel", a.oncancel);
    }
    if (a.oncomplete) {
        $jex.event.add(this, "complete", a.oncomplete);
    }
}

ScriptRequest.loadScript = function(b, c) {
    c = c || document;
    var a = c.createElement("script");
    a.type = "text/javascript";
    a.src = b;
    c.getElementsByTagName("head")[0].appendChild(a);
    return a;
};
ScriptRequest.prototype.send = function(b, c) {
    var g = this.callID = this.funcName ? this.funcName : "XQScript_" + $jex.globalID();
    if (b.indexOf("?") == -1) {
        b = b + "?";
    }
    b += "&" + this.callbackName + "=" + g;
    var a = this;
    var f = this.win;
    var d;
    f[g] = function() {
        if (d) {
            window.clearTimeout(d);
            d = null;
        }
        a.release();
        f[g] = null;
        $jex.event.triggerParam(a, "complete", $jex.array.toArray(arguments));
    };
    if (c && c > 0) {
        d = window.setTimeout(function() {
            a.release();
            $jex.event.trigger(a, "timeout");
        }, c);
    }
    this.searchPort = ScriptRequest.loadScript(b, this.doc);
};
ScriptRequest.prototype.release = function() {
    if (this.searchPort) {
        $jex.removeElement(this.searchPort);
        this.searchPort = null;
        this.win[this.callID] = $jex.VOIDFUNC;
        return true;
    }
    return false;
};
ScriptRequest.prototype.cancel = function() {
    if (this.release()) {
        $jex.event.trigger(this, "cancel");
    }
};
var ConfigManager = new (function() {
    var a = {};
    this.setConfig = function(b) { $jex.merge(a, b); };
    this.getConfig = function() {
        var b = a;
        var f = [];
        for (var d = 0; d < arguments.length; d++) {
            var c = arguments[d];
            f.push(c);
            if (b[c] == null) {
                $jex.console.warn("[ConfigManager][找不到配置]:", f.join("."));
                return null;
            } else {
                b = b[c];
            }
        }
        return b;
    };
    return this;
})();
var PriceUtil = {
    getOneWayDiscount: function(a) {
        var b = PriceUtil.getDiscount(a);
        return b.replace(/([\d.]+)/, '<span class="f_tha">$1</span>');
    },
    getDiscount: function(a) {
        if (a <= 0) {
            return"";
        }
        if (a > 9.9) {
            if (a > 10) {
                return"";
            } else {
                return"全价";
            }
        } else {
            if (a.toString().length == 1) {
                return a + ".0折";
            } else {
                return a + "折";
            }
        }
    },
    getTransferDiscount: function(a) {
        if (a <= 0) {
            return"";
        }
        if (a > 9.9) {
            return"";
        } else {
            if (a.toString().length == 1) {
                return a + ".0折";
            } else {
                return a + "折";
            }
        }
    }
};
var FlightUtil = {
    codePatch: function(d) {
        var b = 1;
        var f = "";
        for (var a = 0; a < d.length; a++) {
            if (d.charAt(a) == "/") {
                if (b % 2 == 0) {
                    f += "/ ";
                    b++;
                } else {
                    f += "/";
                    b++;
                }
            } else {
                f += d.charAt(a);
            }
        }
        return f;
    },
    catAdtext: function(a, b) {
        if (!b) {
            b = 19;
        }
        if (!a) {
            return"";
        }
        if (a.length > b) {
            return a.substr(0, b) + "...";
        } else {
            return a;
        }
    },
    catText: function(g, b) {
        var f = g.replace(/[^x00-xff]/g, "aa");
        if (f.length > 2 * b) {
            var a = 0;
            for (var d = 0; d < b; d++) {
                var c = g.charAt(d);
                if (/[^x00-xff]/.test(c)) {
                    a++;
                } else {
                    a += 2;
                }
                if (a >= 2 * b) {
                    break;
                }
            }
            return g.substr(0, a) + "...";
        } else {
            return g;
        }
    },
    starClass: function(a) {
        if (a == null || (typeof a != "number" && !/^(\d+.\d+|\d+)$/.test(a))) {
            return"";
        }
        var a = parseFloat(a);
        if (a > 3) {
            return"star30";
        }
        switch (a) {
        case 0:
            return"star00";
        case 0.5:
            return"star05";
        case 1:
            return"star10";
        case 1.5:
            return"star15";
        case 2:
            return"star20";
        case 2.5:
            return"star25";
        case 3:
            return"star30";
        default:
            return"star00";
        }
    },
    getGTITLE: function(b, a, h, g) {
        if (b == null || a == null) {
            return"";
        }
        if (b >= 100) {
            var f = "AD_";
        } else {
            var f = "nonAD_";
        }
        var c = ConfigManager.getConfig("rank", "GTITLE", f + "G" + a);
        if (!c) {
            return"";
        }
        var d = 0;
        if (h <= 5 && h >= 4) {
            d = 0;
        } else {
            if (h < 3.9 && h >= 3) {
                d = 1;
            } else {
                if (h < 2.9 && h >= 2) {
                    d = 2;
                } else {
                    if (h < 1.9 && h >= 0) {
                        d = 3;
                    }
                }
            }
        }
        if (c[d]) {
            return c[d];
        } else {
            return"";
        }
    },
    timeRange: function(c) {
        var a = c.substr(0, 2);
        var b = parseInt(a, 10);
        if (b >= 6 && b < 12) {
            return 0;
        }
        if (b == 12) {
            return 1;
        }
        if (b > 12 && b <= 17) {
            return 2;
        }
        return 3;
    },
    duration: function(c) {
        var a = Math.floor(c / 60);
        var d = c % 60;
        var b = a ? a + "小时" : "";
        b += d ? d + "分" : "";
        if (b) {
            b = "约" + b;
        }
        return b;
    },
    interDuration: function(c) {
        if (c == Number.MAX_VALUE) {
            return"";
        }
        var a = Math.floor(c / 60);
        var d = c % 60;
        if (d >= 24 && d <= 36) {
            a += 0.5;
        } else {
            if (d > 36) {
                a += 1;
            }
        }
        var b = a ? a + "小时" : "";
        if (b) {
            b = "约" + b;
        }
        return b;
    }
};
var QunarDate = $jex.exec(function() {
    var k = { "2014-04-05": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "清明" }, "2014-05-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "五一" }, "2014-06-02": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "端午" }, "2014-09-08": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "中秋" }, "2014-10-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "国庆" }, "2014-12-25": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "圣诞" }, "2015-01-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "元旦" }, "2015-02-18": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "除夕" }, "2015-02-19": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "春节" }, "2015-03-05": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "元宵" }, "2015-04-05": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "清明" }, "2015-05-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "五一" }, "2015-06-20": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "端午" }, "2015-09-27": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "中秋" }, "2015-10-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "国庆" }, "2015-12-25": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "圣诞" }, "2016-01-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "元旦" }, "2016-02-07": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "除夕" }, "2016-02-08": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "春节" }, "2016-02-22": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "元宵" }, "2016-04-04": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "清明" }, "2016-05-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "五一" }, "2016-06-09": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "端午" }, "2016-09-15": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "中秋" }, "2016-10-01": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "国庆" }, "2016-12-25": { afterTime: 3, beforeTime: 3, dayindex: 0, holidayName: "圣诞" } };
    var h = ["今天", "明天", "后天"];
    var c = 24 * 60 * 60 * 1000;
    var a = ["日", "一", "二", "三", "四", "五", "六"];
    var d = { week: "周", day: "天", before: "前", after: "后" };
    var g = { SECOND: "秒", MILLISECOND: "毫秒", MINUTE: "分钟", HOUR: "小时", DAY: "天", YEAR: "年" };
    var f = null;
    var b = null;
    var j = ["1周之内", "1个月内", "3个月内", "半年内", "1年"];
    var i = ["+1周", "+2周", "1个月内", "3个月内", "1年"];
    var l = { "1周之内": { valid: true, value: "1周之内", range: 7 }, "2周之内": { valid: true, value: "2周之内", range: 14 }, "+1周": { valid: false, value: "2周之内", range: 14 }, "+2周": { valid: false, value: "3周之内", range: 21 }, "3周之内": { valid: true, value: "3周之内", range: 21 }, "1个月内": { valid: true, value: "1个月内", range: 30 }, "3个月内": { valid: true, value: "3个月内", range: 90 }, "半年内": { valid: true, value: "半年内", range: 180 }, "1年": { valid: true, value: "1年", range: 360 } };
    return{
        getFuzzyDate: function(o) {
            var n = this.today();
            var m = l[o];
            if (m) {
                m.start = this.format(this.plus(n, 1));
                m.end = this.format(this.plus(n, m.range));
            }
            return m;
        },
        getFuzzyDateText0: function() { return j; },
        getFuzzyDateText1: function() { return i; },
        getTimeRange: function(n) {
            var m = parseInt(n.replace(/(\d+):\d+/i, "$1"), 10);
            if (m >= 6 && m < 12) {
                return 0;
            }
            if (m == 12) {
                return 1;
            }
            if (m > 12 && m <= 18) {
                return 2;
            }
            return 3;
        },
        isHoliday: function(m) { return !!k[m]; },
        parseTimeToNL_et: function(m) {
            if (m >= c) {
                m = c;
            }
            return this.parseTimeToNL(m);
        },
        parseTimeToNL: function(s) {
            var q = s % 1000;
            var p = (s - q) % 60000;
            var n = (s - p * 1000 - q) % 3600000;
            var t = (s - n * 60000 - p * 1000 - q) % (24 * 3600000);
            var m = (s - t * 3600000 - n * 60000 - p * 1000 - q) % (24 * 3600000);
            var o = "";
            if (s < 1000) {
                o = 1 + g.SECOND;
            } else {
                if (s < 60000) {
                    o = parseInt(s / 1000) + g.SECOND;
                } else {
                    if (s < 3600000) {
                        o = parseInt(s / 60000) + g.MINUTE;
                    } else {
                        if (s < (24 * 3600000)) {
                            o = parseInt(s / 3600000) + g.HOUR;
                        } else {
                            if (s < (365 * 24 * 3600000)) {
                                o = parseInt(s / (24 * 3600000)) + g.DAY;
                            } else {
                                o = parseInt(s / (365 * 24 * 3600000)) + g.YEAR;
                            }
                        }
                    }
                }
            }
            return o;
        },
        plus: function(m, n) { return new Date(m.getTime() + n * c); },
        getMinute: function(p) {
            var q = p.split(":");
            var o = parseInt(q[0], 10);
            var n = parseInt(q[1], 10);
            return o * 60 + n;
        },
        today: function() {
            if (f) {
                return f;
            }
            var m = window.SERVER_TIME || new Date();
            return f = new Date(m.getFullYear(), m.getMonth(), m.getDate());
        },
        parse: function(n) {
            var m = n.split("-");
            return new Date(m[0], m[1] - 1, m[2]);
        },
        format: function(m) {
            if (typeof m == "number") {
                m = new Date(m);
            }
            return m.getFullYear() + "-" + this.convert2digit(m.getMonth() + 1) + "-" + this.convert2digit(m.getDate());
        },
        convert2digit: function(m) { return m < 10 ? "0" + m : m; },
        compareDate: function(n, m) { return n.getTime() - m.getTime(); },
        getFirstDaysOfMonth: function(m) { return new Date(m.getFullYear(), m.getMonth(), 1); },
        getLastDaysOfMonth: function(m) { return new Date(m.getFullYear(), m.getMonth() + 1, 0); },
        getHolidayName: function(m) { return k[m]["holidayName"]; },
        showIcon: function(m) { return !k[m]["nodatepickerico"]; },
        getDateTip: function(m) {
            var n = this.parse(m);
            var o = (n.getTime() - this.today().getTime()) / 1000 / 3600 / 24;
            var p = "";
            if (o < 3) {
                p = h[o];
                if (this.isHoliday(m)) {
                    p = k[m]["holidayName"];
                }
            } else {
                this.initDataTable();
                if (b[m]) {
                    p = b[m].holidayName;
                }
            }
            if (p == "") {
                p = d.week + a[n.getDay()];
            }
            return p;
        },
        seconds2days: function(m) {
            var n = 60 * 1000 * 60 * 24;
            return m / n;
        },
        getDatesOffset: function(u, m) {
            var q = {};
            var n = this.compareDate(this.parse(m), this.parse(u));
            var t = this.seconds2days(n);
            var s = this.parse(u);
            for (var o = 1; o < t; o++) {
                s = QunarDate.plus(s, 1);
                var p = this.format(s);
                q[p] = s;
            }
            return q;
        },
        initDataTable: function() {
            if (b != null) {
                return b;
            }
            b = {};
            for (var x in k) {
                var n = x;
                var s = k[x];
                b[x] = s;
                var q = "";
                var t = "";
                if (s.beforeTime > 0) {
                    for (var o = 1; o <= s.beforeTime; o++) {
                        var u = {};
                        var y = new Date(this.parse(n).getTime() - o * 24 * 3600 * 1000);
                        var p = this.format(y);
                        u.holidayName = s.holidayName + d.before + o + d.day;
                        u.dayindex = s.dayindex;
                        if (!b[p]) {
                            b[p] = u;
                        } else {
                            if ((s.dayindex > b[p].dayindex) && b[p].beforeTime == null) {
                                b[p] = u;
                            }
                        }
                    }
                }
                if (s.afterTime > 0) {
                    for (var o = 1; o <= s.afterTime; o++) {
                        var u = {};
                        var w = new Date(this.parse(n).getTime() + o * 24 * 3600 * 1000);
                        var m = this.format(w);
                        u.holidayName = s.holidayName + d.after + o + d.day;
                        u.dayindex = s.dayindex;
                        if (!b[m]) {
                            b[m] = u;
                        } else {
                            if ((s.dayindex > b[m].dayindex) && b[this.format(new Date(y))].afterTime == null) {
                                b[m] = u;
                            }
                        }
                    }
                }
            }
        }
    };
});

function DateChecker(a, g, f) {
    a = a || 209;
    g = g || 2;
    f = f || 3;
    var b = QunarDate.today();
    var d = new Date(b.getTime() + a * 24 * 3600000);
    var c = new Date(b.getTime() + g * 24 * 3600000);
    this.date1 = c;
    this.setDate1 = function(h) { return this.date1 = this.checkDate1(h).recommendDate; };
    this.getDate1 = function() { return QunarDate.format(this.date1); };
    this.date2 = new Date(c.getTime() + f * 24 * 3600000);
    this.setDate2 = function(i, h) { return this.date2 = this.checkDate2(i, QunarDate.format(this.date1), h).recommendDate; };
    this.getDate2 = function() { return QunarDate.format(this.date2); };
    this.checkDate1 = function(h) { return this.checkDate(h, b, d, c); };
    this.checkDate2 = function(m, k, i) {
        var h = d, j;
        if (i) {
            h = QunarDate.parse(i);
        }
        var l = new Date(this.date1.getTime() + f * 24 * 3600000);
        if (l.getTime() > h.getTime()) {
            l = h;
        }
        j = this.date1;
        return this.checkDate(m, j, h, l);
    };
    this.setDelay2 = function(h) { f = h || f; };
    this.checkDate = function(o, l, p, h) {
        var j = null;
        var k = false;
        var i = null;
        var n = "";
        try {
            j = QunarDate.parse(o);
        } catch (m) {
            k = true;
            i = "格式错误";
            n = "日期格式如: " + QunarDate.format(h);
            j = h;
        }
        if (isNaN(j)) {
            k = true;
            i = "格式错误";
            n = "日期格式如: " + QunarDate.format(h);
            j = h;
        } else {
            if (l.getTime() > j.getTime()) {
                k = true;
                i = "超出范围";
                n = "应选择" + QunarDate.format(l) + "至" + QunarDate.format(p) + "之间的日期";
                j = h;
            } else {
                if (j.getTime() > p.getTime()) {
                    k = true;
                    i = "超出范围";
                    n = "应选择" + QunarDate.format(l) + "至" + QunarDate.format(p) + "之间的日期";
                    j = h;
                }
            }
        }
        return{ error: k, recommend: QunarDate.format(j), recommendDate: j, value: i, tip: n };
    };
    this.getMin = function() { return b; };
    this.getMax = function() { return d; };
    this.resetMax = function(i, j) {
        var k = i || b;
        var h = j || a;
        d = new Date(k.getTime() + h * 24 * 3600000);
    };
    this.setSpan = function(h) { a = h; };
    this.marks = {};
    this.date2Hide = false;
    this.hideDate2 = function() { this.date2Hide = true; };
    this.showDate2 = function() { this.date2Hide = false; };
    this.getTdStyle = function(i, j, h) {
        h = h || d;
        j = j || b;
        var l = i.getTime();
        var k = "";
        if (l == this.date1.getTime()) {
            k += " curr";
        } else {
            if (l == this.date2.getTime() && this.date2Hide == false) {
                k += " curr";
            }
        }
        if (i.getDay() == 0 || i.getDay() == 6) {
            k += " holi";
        }
        if (QunarDate.isHoliday(QunarDate.format(i)) && QunarDate.showIcon(QunarDate.format(i))) {
            k += " holi_sp";
        }
        if (l == b.getTime()) {
            k += " today";
        }
        if (!(j.getTime() <= l && l <= h.getTime())) {
            k += " out";
        }
        return k;
    };
    this.isInter = false;
}

function DateLayer(s, u) {
    this.panel = s;
    var m = this;
    var F = [];
    var K = true;
    if (s.parentNode.parentNode.className.indexOf("toD") > -1) {
        K = false;
    }
    var a;
    var h = {};
    var c = [];
    var E = [];
    var M, x, z, A;
    var b = {};
    var d, i, k, J;

    function j() {
        h = {};
        b = {};
        c.length = 0;
        E.length = 0;
        M = x = z = A = null;
    }

    function C() {
        var N = this.getAttribute("value");
        var P = this.getAttribute("data-pos");
        var O = QunarDate.parse(N);
        if (O && (O.getTime() >= M.getTime()) && (O.getTime() <= x.getTime())) {
            $jex.event.trigger(m, "selected", [O, P]);
        } else {
            $jex.event.trigger(m, "fuzzySelected", [N]);
            d = this.getAttribute("start");
            i = this.getAttribute("end");
        }
    }

    function G() {
        if (!k) {
            m.render(QunarDate.parse(this.getAttribute("ym")), M, x, null, A);
        } else {
            m.fuzzyRenderPanel(QunarDate.parse(this.getAttribute("ym")), M, x, null, A);
        }
    }

    function p(N) {
        if (!b[N]) {
            var O = h[N];
            b[N] = a.getDomNode(O);
        }
        return b[N];
    }

    function L(Q) {
        var R, P, Q = Q || {};
        for (var O = 0, N = c.length; O < N; O++) {
            P = c[O];
            if (Q[P]) {
                Q[P] = 0;
            } else {
                R = p(P);
                $jex.removeClassName(R, "day_sel_area");
            }
        }
    }

    function l(N) {
        c.length = 0;
        $jex.each(N, function(O, Q) {
            c[c.length] = O;
            if (N[O]) {
                var P = p(O);
                $jex.addClassName(P, "day_sel_area");
            }
        });
    }

    function y(O) {
        var N = p(QunarDate.format(O));
        $jex.addClassName(N, "curr");
    }

    function n(O) {
        var N = p(QunarDate.format(O));
        $jex.removeClassName(N, "curr");
    }

    var q = function(T, O) {
        var S = $jex.ie ? "mouseenter" : "mouseover";
        var R = $jex.ie ? "mouseleave" : "mouseout";
        var Q;
        for (var P = 0, N = E.length; P < N; P++) {
            Q = p(E[P]);
            $jex.event.bind(Q, S, function() {
                T(this);
                D(this);
                $jex.addClassName(this, "hover");
            });
            $jex.event.bind(Q, R, function() {
                O(this);
                H(this);
                $jex.removeClassName(this, "hover");
            });
            $jex.event.bind(Q, "click", C);
            F.push(Q);
        }
        if (J) {
            Q = p(J);
            $jex.event.bind(Q, "click", C);
        }
    };
    var f = function() {
        for (var N = 0; N < 2; N++) {
            var O = a.getDomNode("a" + N);
            $jex.event.bind(O, "mousedown", G);
            F.push(O);
        }
    };
    var t = function() {
        var Q = null;
        var P = function(R) { clearTimeout(Q); };
        var N = function(R) {
            L();
            c.length = 0;
            y(u.date1);
        };
        var O = function(R) {
            clearTimeout(Q);
            Q = setTimeout(function() { N(R); }, 150);
        };
        q(P, O);
    };
    var g = function() {
        var Q = null;
        var P = function(T) {
            clearTimeout(Q);
            var U = T.getAttribute("value");
            var V = QunarDate.parse(U);
            var W = u.date1;
            var R = u.date2;
            var S = {};
            if (K) {
                if (QunarDate.compareDate(W, V) > 0) {
                    S = QunarDate.getDatesOffset(U, QunarDate.format(R));
                } else {
                    if (QunarDate.compareDate(V, R) > 0) {
                        S = {};
                    } else {
                        S = QunarDate.getDatesOffset(U, QunarDate.format(R));
                    }
                }
                n(W);
                y(R);
            } else {
                S = QunarDate.getDatesOffset(QunarDate.format(W), U);
                n(R);
                y(W);
            }
            L(S);
            l(S);
        };
        var N = function() {
            var T = u.date1;
            var R = u.date2;
            var S = QunarDate.getDatesOffset(QunarDate.format(T), QunarDate.format(R));
            y(T);
            y(R);
            L(S);
            l(S);
        };
        var O = function() {
            clearTimeout(Q);
            Q = setTimeout(function() { N(); }, 150);
        };
        q(P, O);
    };
    var D = function(P) {
        var Q = P.getAttribute("start"), N = P.getAttribute("end"), O = {};
        if (!Q || !N) {
            return;
        }
        n(u.date1);
        n(u.date2);
        y(QunarDate.parse(Q));
        y(QunarDate.parse(N));
        O = QunarDate.getDatesOffset(Q, N);
        L(O);
        l(O);
    };
    var H = function(P) {
        var Q = P.getAttribute("start"), N = P.getAttribute("end"), O = {};
        if (!Q || !N) {
            return;
        }
        n(QunarDate.parse(Q));
        n(QunarDate.parse(N));
    };
    var w = function() {
        var Q = null;
        var P = function(R) {
            clearTimeout(Q);
            if (QunarDate.getFuzzyDate(R.getAttribute("value"))) {
                n(QunarDate.parse(i));
            }
        };
        var N = function() {
            var R = QunarDate.getDatesOffset(d, i);
            L(R);
            l(R);
            y(QunarDate.parse(d));
            y(QunarDate.parse(i));
        };
        var O = function() {
            clearTimeout(Q);
            Q = setTimeout(function() { N(); }, 150);
        };
        q(P, O);
    };
    var o = function() {
        for (var N = 0, O = F.length; N < O; N++) {
            $jex.event.clear(F[N]);
        }
        F.length = 0;
    };
    var B = function(O, R, T, S, U) {
        z = S || 0;
        M = R || u.getMin();
        x = T || u.getMax();
        A = U || {};
        var N = 0;
        var Q = 0;
        a = new UIObject();
        a.text('<div class="dpanel">');
        $jex.array.each([0, 1], function(aa, ab) {
            var an = new Date(O.getFullYear(), O.getMonth() + aa - z, 1);
            var ah = an.getMonth() + 1;
            var aj = QunarDate.convert2digit(ah);
            var ae = an.getFullYear();
            var ao = new Date(ae, an.getMonth(), 0);
            var Y = new Date(ae, an.getMonth(), 1);
            var V = new Date(ae, an.getMonth() + 1, 1);
            var ac = new Date(ae, ah - 1, 1).getDay() - 1;
            if (ac < 0) {
                ac = 6;
            }
            var ag = new Date(ae, ah, 0).getDate();
            var Z = ab == 0 ? M.getTime() <= ao.getTime() : V.getTime() <= x.getTime();
            a.text('<div class="dpart">');
            a.text('<div class="cld_dbg">' + ah + "</div>");
            a.text("<h3>");
            a.append("<a ", "a" + (Q++)).text(' class="', (ab ? "downTd" : "upTd"), '" ym="', (QunarDate.format(ab ? Y : ao)), '" style="', (Z ? "display:block" : "display:none"), '" href="javascript:;"></a>', ae, "年", ah, "月</h3>");
            a.text('<table cellspacing="0" cellpadding="0" border="0">');
            a.text('<tr class="thead"><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td class="holi">六</td><td class="holi">日</td></tr>');
            var al = 0;
            var af = /out$/;
            var W = "";
            for (var ai = 0; ai < 42; ai++) {
                if (ai % 7 == 0) {
                    a.text('<tr class="tdate">');
                }
                if (ai < ac) {
                    a.text('<td class="cnone">&nbsp;</td>');
                } else {
                    if (al < ag) {
                        al++;
                        var ap = al;
                        var am = QunarDate.convert2digit(al);
                        var ad = ae + "-" + aj + "-" + am;
                        var X = new Date(ae, ah - 1, al);
                        var ak = QunarDate.today();
                        if (QunarDate.compareDate(X, ak) === 0) {
                            ap = "今天";
                        }
                        if (QunarDate.isHoliday(ad) && QunarDate.showIcon && QunarDate.showIcon(ad)) {
                            ap = QunarDate.getHolidayName(ad);
                        }
                        h[ad] = N;
                        W = u.getTdStyle(X, M, x);
                        if (!af.test(W)) {
                            E[E.length] = ad;
                        }
                        if (!!A[ad]) {
                            c[c.length] = ad;
                            a.append("<td ", N++).text(' value="', ad, '" data-pos="', aa, '" class=" day_sel_area  ', W, '" >', ap, "</td>");
                        } else {
                            a.append("<td ", N++).text(' value="', ad, '" data-pos="', aa, '" class="', W, '" >', ap, "</td>");
                        }
                    } else {
                        a.text('<td class="cnone">&nbsp;</td>');
                    }
                }
                if (ai % 7 == 6) {
                    a.text("</tr>");
                }
            }
            a.text("</table></div>");
        });
        if (u.isInter) {
            a.text('<div class="fuzzy_t_box">');
            a.text(' <ul class="fuzzy_t_list clrfix">');
            var P = k == "1周之内" && !K ? QunarDate.getFuzzyDateText1() : QunarDate.getFuzzyDateText0();
            $jex.array.each(P, function(W, V) {
                var X = QunarDate.getFuzzyDate(W);
                if (k == W) {
                    _class = "hover";
                    J = W;
                    h[W] = N;
                } else {
                    E[E.length] = W;
                    h[W] = N;
                    _class = "";
                }
                a.append("<li ", N++).text(' value="', X.value, '" start="', X.start, '" end="', X.end, '" class="', _class, '">', W, "</li>");
            });
            a.text(" </ul>");
            a.text("</div>");
        }
        a.text("</div>");
        a.write(s);
    };
    var I = function() {
        var N = function() {};
        q(N, N);
    };
    this.render = function(O, P, N, R, Q) {
        k = "";
        o();
        j();
        B(O, P, N, R, Q);
        if (u.date2Hide) {
            t();
        } else {
            g();
        }
        f();
    };
    this.fuzzyRenderPanel = function(P, R, N, U, S) {
        var O = QunarDate.getFuzzyDate(P), Q, T;
        o();
        j();
        if (!O) {
            B(P, R, N, U, S);
        } else {
            k = P;
            d = O.start;
            i = O.end;
            Q = QunarDate.getDatesOffset(d, i);
            u.setDate1(d);
            u.setDate2(i);
            T = K ? 0 : QunarDate.parse(d);
            B(QunarDate.today(), T, 0, 0, Q);
            y(QunarDate.parse(i));
        }
        w();
        f();
    };
}

var TraceAnalyzer = function(a) {
    var a = a || {};
    var c = {};
    var b = {};
    this.addParam = function(d, f) { c[d] = f; };
    this.queryInfo = function(g) {
        for (var f in g) {
            var d = g[f];
            this.addParam(f, d);
        }
        return this;
    };
    this.otherErr = function(d) {
        this.addParam("err", d);
        return this;
    };
    this.__fe = null;
    this.addOpenInfo = function(g, h) {
        for (var f in h) {
            var d = h[f];
            this.addParam(f, d);
        }
        this.addParam("act", "open");
        this.__fe = g;
        return this;
    };
    this.sendOpenInfo = function() {
        if (!c.act || !this.__fe) {
            return;
        }
        var g = this.__fe;
        if (g.firstTrip) {
            var d = g.firstTrip().wrappers().size() + "_" + g.secondTrip().wrappers().size();
        } else {
            var d = g.wrappers().size();
        }
        this.addParam("wr", d);
        this.report();
    };
    this.sendTsingOpenInfo = function() {
        if (!c.act || !this.__fe) {
            return;
        }
        var g = this.__fe;
        if (g.firstTrip) {
            var d = g.firstTrip().wrappers().size() + "_" + g.secondTrip().wrappers().size();
        } else {
            var d = g.wrappers().size();
        }
        this.addParam("wr", d);
        this.tsingReport();
    };
    this.addOpenInfo_onewayInter = function(g, h) {
        for (var f in h) {
            var d = h[f];
            this.addParam(f, d);
        }
        this.addParam("act", "open");
        this.__fe = g;
        return this;
    };
    this.sendOpenInfo_onewayInter = function() {
        if (!c.act || !this.__fe) {
            return;
        }
        var h = this.__fe;
        if (h.flightType == "oneway") {
            var d = h.flightList.first().value.vendorList.size();
        } else {
            var g = h.flightList.keys();
            var d = h.flightList[g[0]].vendorList.size() + "_" + h.flightList[g[1]].vendorList.size();
        }
        this.addParam("wr", d);
        this.report();
    };
    this.invalidErr = function() {
        this.addParam("invalid", "true");
        return this;
    };
    this.justone = function(d, f) {
        if (b[d]) {
            return;
        }
        b[d] = true;
        this.addParam(d, f);
    };
    this.noOnewayErr = function() {
        this.addParam("noOneway", "true");
        return this;
    };
    this.noTransErr = function() {
        this.addParam("noTrans", "true");
        return this;
    };
    this.noResultErr = function() {
        this.addParam("noResult", "true");
        return this;
    };
    this.sameCityErr = function() {
        this.addParam("sameCity", "true");
        return this;
    };
    this.report = function() {
        var f = "QSA";
        var g = [];
        for (var d in c) {
            g.push("&", d, "=", encodeURIComponent(c[d]));
        }
        trackAction(f + g.join(""));
        return this;
    };
    this.tsingReport = function() {
        var f = "QSA";
        var g = [];
        for (var d in c) {
            g.push("&", d, "=", encodeURIComponent(c[d]));
        }
        TsinghuaOneWayTracker.track("action", f + g.join("") + "&_module=FL", +new Date());
        return this;
    };
};
(function() { TraceAnalyzer.create = function() { return new TraceAnalyzer(); }; })();
var PAGE_EVENT = (function() {
    var a = {};
    return{
        bind: function(d, c) {
            var b = [].slice.apply(arguments);
            b.splice(0, 0, a);
            $jex.event.binding.apply($jex.event, b);
        },
        trigger: function(d, c) {
            var b = [].slice.apply(arguments);
            b.splice(0, 0, a);
            $jex.event.trigger.apply($jex.event, b);
        }
    };
})();
var InfoManager = function() {
    var b = this;
    var a = { uiCache: {}, my_wrappInfo: {}, my_wrappInfo_s: {}, my_wrappInfo_bf: {}, flightInfo: {}, Recommend_wrapper: {} };
    this.getStore = function() { return a; };
    this.addSource = function(d, j, f) {
        var g = f || {};
        var i = g.isTrigger;
        var h = g.isOverwrite || true;
        if (!a[d] && !i) {
            a[d] = j;
        } else {
            for (var c in j) {
                a[d][c] = j[c];
                if (i == true) {
                    $jex.event.trigger(b, "add", d, c, j[c]);
                }
            }
        }
    };
    this.addItem = function(c, j, g, d) {
        var f = d || {};
        var i = f.isTrigger;
        var h = f.isOverwrite || true;
        a[c] = a[c] || {};
        if (h) {
            a[c][j] = g;
        } else {
            if (!a[c][skey]) {
                a[c][j] = g;
            }
        }
        if (i == true) {
            $jex.event.trigger(b, "add", c, j, g);
        }
    };
    this.get = function(c, d) {
        var f = a[c];
        if (!f) {
            $jex.console.warn("InfoManager[没有找到对应的信息类别]", c, d, a);
            return null;
        }
        if (arguments.length == 1) {
            return f;
        }
        if (f[d] == null) {
            $jex.console.warn("InfoManager[没有找到对应的信息]", c, d, a);
        }
        return f[d];
    };
};

function FlashAdUI(a) {
    FlashAdUI.superclass.constructor.call(this, a);
    this._type = "FlashAdUI";
}

$jex.extendClass(FlashAdUI, XControl);
FlashAdUI.config = { systembusy: { info1: "<span class='textRed'>此ip操作过于频繁，请稍后再来。</span>", info2: "搜索结束", img: "http://simg1.qunarzz.com/site/images/no_loading.gif" }, searching: { info1: "请稍等,您查询的结果正在实时搜索中...", info2: "想去哪儿就去哪儿", img: "http://simg1.qunarzz.com/site/images/loading.gif" }, noResult: { info1: "<span class='textRed'>该航线当前无可售航班<br />请您尝试其他航线或日期</span>", info2: "搜索结束<br /><a hidefocus='on' href='#' id='flightReserve' style='display:none;'>预约本航线低价机票</a>", img: "http://simg1.qunarzz.com/site/images/no_loading.gif" }, inValidQuery: { info1: "<span class='textRed'>抱歉，无直达航班，正试图搜索联程航班。</span>", info2: "想去哪儿就去哪儿", img: "http://simg1.qunarzz.com/site/images/loading.gif" }, sameCity: { info1: "<span class='textRed'>噢噢~Orz 原地打转的话搜不到结果哦！<br />请立即输入目的地城市，想去哪儿就去哪儿！<br />--Qunar 员工语录!<br /><b>您输入出发城市与到达城市相同，请至少修改其中之一。</b></span>", info2: "", img: "http://simg1.qunarzz.com/site/images/no_loading.gif" }, internopack: { info1: "<span class='textRed' style='text-align:left;'><b>没有找到您所查询的航班，可能原因如下：</b><br>1、您所查询的航线在“去哪儿”暂无往返报价，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以更改为查询单程报价，也期待您联系<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;010-57603866，协助我们补充航班信息。<br />2、网络暂时繁忙。</span>", info2: "", img: "http://simg1.qunarzz.com/site/images/no_loading.gif" } };
FlashAdUI.prototype.show = function(b) {
    if (!b) {
        return;
    }
    var a = FlashAdUI.config[b];
    if (!a) {
        return;
    }
    this.clear();
    if (b === "internopack") {
        this.text('<div class="loading1">');
    } else {
        this.text('<div class="loading">');
    }
    this.text('<p class="msg">', a.info1, "</p>");
    this.text('<div><img src="', a.img, '" alt="loading" width="114" height="16" /></div>');
    this.text('<p class="msg2">', a.info2, "</p>");
    this.text("</div>");
    this.render();
};
var LoginControl = {
    isLogin: false,
    user: { name: "" },
    checkLogin: function() {
        $jex.cookie.reset();
        if (!$jex.cookie.get("_t") || !$jex.cookie.get("_q")) {
            LoginControl.isLogin = false;
        } else {
            LoginControl.isLogin = true;
            LoginControl.user.name = $jex.cookie.get("_q").replace("U.", "");
        }
    },
    login: function(d, a, c) {
        if (!d || !a) {
            c(false, "用户名或密码为空");
            return;
        }
        var b = "http://user.qunar.com/tloginx.jsp";
        QNR.crossDomainPost(b, { username: d, password: a, remember: 1 }, "site/proxy.htm", {
            onsuccess: function(f) {
                if (f == 0) {
                    c(true);
                    $jex.event.trigger(LoginControl, "login");
                } else {
                    c(false, "用户名或密码错误");
                }
            }
        });
    }
};
var LockScreen = function(c, b) {
    b = b || { msg: "您的前一次搜索已经过去了10分钟，<br />正在为您重新搜索以提供更准确报价", lockNow: false };
    if (((new Date() - CLIENT_TIME) / 1000 / 60 > 10) || b.lockNow) {
        var a = ['<div class="p_layer_cont"><div class="layer_inner" style="width: 370px"><div class="e_tit_pop">&nbsp;</div><div class="layer_cont"><div id="pageBoxText">', b.msg, '<br /><img src="http://simg1.qunarzz.com/site/images/loading.gif" />', "</div></div></div></div>"].join("");
        $jex.lightbox.show(a);
        $jex.lightbox.overlay.style.backgroundColor = "#fff";
        setTimeout(function() { window.location.reload(); }, 500);
    } else {
        c();
    }
};
window.LockScreen = LockScreen;
var SingletonUIManager = {};
$jex.exec(function() {
    var a = {};
    var b = {};
    var c = {};
    SingletonUIManager.register = function(d, h, f, g) {
        f = f || $jex.VOIDFUNC;
        g = g || $jex.VOIDFUNC;
        if (a[d] && a[d] != h) {
            c[d].call(a[d]);
        }
        f.call(h);
        a[d] = h;
        c[d] = g;
    };
    SingletonUIManager.close = function(d) {
        if (c[d]) {
            c[d].call(a[d]);
        }
        a[d] = null;
    };
});
var FlightEntity = function() {
    this.changed = false;
    this._valCache = {};
};
$jex.foreach(["key", "commInfoMgr", "flightInfoMgr", "lowestPrice", "highestPrice"], function(a) {
    FlightEntity.prototype[a] = function(b) {
        if (b == null) {
            return this._valCache[a];
        } else {
            this._valCache[a] = b;
        }
    };
});
FlightEntity.prototype.safeLowestPrice = function() { return this.lowestPrice() ? this.lowestPrice() : ConfigManager.getConfig("default", "safePrice"); };
FlightEntity.prototype.flightInfo = function(a) { return this.flightInfoMgr().get("flightInfo", this.key()); };
FlightEntity.prototype.getAcf = function() {
    var a = this.extInfo();
    return Number(a.acf) || 0;
};
FlightEntity.prototype.getFot = function() {
    var a = this.extInfo();
    return Number(a.fot) || 0;
};
FlightEntity.prototype.extInfo = function(c) {
    var a = this.flightInfoMgr();
    var d = this.flightInfo();
    var b = a.get("extInfo", d.co + "-" + d.da + "-" + d.aa) || a.get("extInfo", d.co);
    if (!b) {
        $jex.console.trace("[ERROR]没有扩展信息" + this.key());
        return{};
    }
    return b;
};
FlightEntity.prototype.deptTimeValue = function() {
    var b = this._valCache._deptTimeValue;
    if (typeof b == "undefined" || b == null) {
        var a = this.flightInfo().dd.replace(/-/g, "/") + " " + this.flightInfo().dt;
        b = new Date(a).getTime();
        this._valCache._deptTimeValue = b;
    }
    return b;
};
FlightEntity.prototype.deptTimeRange = function() {
    var a = this._valCache._deptTimeRange;
    if (typeof a == "undefined" || a == null) {
        a = ConfigManager.getConfig("config", "timerange", FlightUtil.timeRange(this.deptTime()).toString());
        this._valCache._deptTimeRange = a;
    }
    return a;
};
FlightEntity.prototype.arriTimeRange = function() {
    var a = this._valCache._arriTimeRange;
    if (typeof a == "undefined" || a == null) {
        a = ConfigManager.getConfig("config", "timerange", FlightUtil.timeRange(this.arriTime()).toString());
        this._valCache._arriTimeRange = a;
    }
    return a;
};
FlightEntity.prototype.deptTimeRangeValue = function() {
    var a = this._valCache._deptTimeRangeValue;
    if (typeof a == "undefined" || a == null) {
        a = this.deptTimeRange().value;
        this._valCache._deptTimeRangeValue = a;
    }
    return a;
};
FlightEntity.prototype._arriTimeRangeValue = function() {
    var a = this._valCache._arriTimeRangeValue;
    if (typeof a == "undefined" || a == null) {
        a = this.arriTimeRange().value;
        this._valCache._arriTimeRangeValue = a;
    }
    return a;
};
FlightEntity.prototype.plane = function() {
    var a = this._valCache._plane;
    if (typeof a == "undefined" || a == null) {
        a = this.commInfoMgr().get("plane", this.flightInfo().pt) || ConfigManager.getConfig("default", "plane");
        this._valCache._plane = a;
    }
    return a;
};
FlightEntity.prototype.planeType = function() {
    var a = this._valCache._planeType;
    if (typeof a == "undefined" || a == null) {
        a = this.plane().type;
        this._valCache._planeType = a;
    }
    return a;
};
FlightEntity.prototype.airportCodes = function() {
    var a = this._valCache._airportCodes;
    if (typeof a == "undefined" || a == null) {
        a = [this.flightInfo().da, this.flightInfo().aa];
        this._valCache._airportCodes = a;
    }
    return a;
};
FlightEntity.prototype.deptCity = function() {
    var a = this._valCache._deptCity;
    if (typeof a == "undefined" || a == null) {
        a = this.commInfoMgr().get("city", this.deptCityCode()) || ConfigManager.getConfig("default", "city");
        this._valCache._deptCity = a;
    }
    return a;
};
FlightEntity.prototype.arriCity = function() {
    var a = this._valCache._arriCity;
    if (typeof a == "undefined" || a == null) {
        a = this.commInfoMgr().get("city", this.arriCityCode()) || ConfigManager.getConfig("default", "city");
        this._valCache._arriCity = a;
    }
    return a;
};
FlightEntity.prototype.carrier = function() {
    var a = this._valCache._carrier;
    if (typeof a == "undefined" || a == null) {
        a = this.commInfoMgr().get("carrier", this.carrierCode()) || ConfigManager.getConfig("default", "carrier");
        this._valCache._carrier = a;
    }
    return a;
};
FlightEntity.prototype.carrierCode = function() { return this.flightInfo().ca; };
FlightEntity.prototype.fixKMGAirport = function(c) {
    var a = new Date(this.flightInfo().dd.replace(/-/g, "/")).getTime();
    var b = new Date("2013/5/30").getTime();
    if (a >= b && (c.code === "HFE" || c.key === "HFE")) {
        c = { ab: "新桥机场", code: "HFE", key: "HFE", full: "合肥新桥国际机场" };
    }
    return c;
};
FlightEntity.prototype.deptAirport = function() {
    var a = this._valCache._deptAirport;
    if (typeof a == "undefined" || a == null) {
        a = this.commInfoMgr().get("airport", this.flightInfo().da) || ConfigManager.getConfig("default", "airport");
        this._valCache._deptAirport = a;
    }
    a = this.fixKMGAirport(a);
    return a;
};
FlightEntity.prototype.arriAirport = function() {
    var a = this._valCache._arriAirport;
    if (typeof a == "undefined" || a == null) {
        a = this.commInfoMgr().get("airport", this.flightInfo().aa) || ConfigManager.getConfig("default", "airport");
        this._valCache._arriAirport = a;
    }
    a = this.fixKMGAirport(a);
    return a;
};
FlightEntity.prototype.flightKeyCode = function() { return this.code() + "|" + this.deptDate(); };
FlightEntity.prototype.flightHistory = function() { return this.flightInfo().hp || this.flightInfo().hisp || []; };
FlightEntity.prototype.code = function() { return this.flightInfo().co || ""; };
FlightEntity.prototype.stopover = function() { return(this.extInfo() && this.extInfo().sp != "0") ? this.extInfo().sp : 0; };
FlightEntity.prototype.spCity = function() { return(this.extInfo() && this.extInfo().sp == "1") ? this.extInfo().spCity : null; };
FlightEntity.prototype.spAirPort = function() { return(this.extInfo() && this.extInfo().sp == "1") ? this.extInfo().spAirPort : null; };
FlightEntity.prototype.spInfo = function() {
    var d = 8;
    var f = this.spCity() + " " + this.spAirPort();
    var b = f.length;
    var c = b > d ? f.substring(0, d) : f;
    var a = b > d ? ' title = "' + this.spAirPort() + '" ' : "";
    return{ sTitle: c, setTitle: a };
};
FlightEntity.prototype.findCity = function(a) {
    var b = System.service.longwell();
    if (b.departureAirport.codeList.indexOf(a) >= 0) {
        return b.departureAirport.en;
    }
    if (b.arrivalAirport.codeList.indexOf(a) >= 0) {
        return b.arrivalAirport.en;
    }
};
FlightEntity.prototype.deptCityCode = function() {
    var a = this.flightInfo().dc;
    if (!a) {
        a = this.findCity(this.deptAirportCode());
    }
    return a;
};
FlightEntity.prototype.arriCityCode = function() {
    var a = this.flightInfo().ac;
    if (!a) {
        a = this.findCity(this.arriAirportCode());
    }
    return a;
};
FlightEntity.prototype.deptDate = function() { return this.flightInfo().dd; };
FlightEntity.prototype.deptTime = function() { return this.flightInfo().dt; };
FlightEntity.prototype.arriTime = function() { return this.flightInfo().at; };
FlightEntity.prototype.deptAirportCode = function() { return this.flightInfo().da; };
FlightEntity.prototype.arriAirportCode = function() { return this.flightInfo().aa; };
FlightEntity.prototype.dptTower = function() {
    var a = this.flightInfo();
    return a && a.dpttower || "";
};
FlightEntity.prototype.arrTower = function() {
    var a = this.flightInfo();
    return a && a.arrtower || "";
};
FlightEntity.prototype.terminal = function() {
    var a = this.flightInfo();
    return a && a.t || "";
};
FlightEntity.prototype.codeShare = function() {
    var a = this.extInfo();
    return a && a.cs || "";
};
FlightEntity.prototype.transferCity = function() { return[]; };
FlightEntity.prototype.stops = function() { return this.extInfo().sp | 0; };
FlightEntity.prototype.crossDays = function() {
    var a = this.flightInfo();
    return a.cd || 0;
};
FlightEntity.prototype.dur = function() { return this.flightInfo().dur; };
FlightEntity.prototype.hasWrapper = function(a) { return null; };
FlightEntity.prototype.onTimeRate = function() {
    var a = this.flightInfoMgr().get("corrInfo", this.code());
    return a ? a.correctness : "";
};
FlightEntity.prototype.delayTime = function() {
    var a = this.flightInfoMgr().get("corrInfo", this.code());
    return a ? a.delay : "";
};
FlightEntity.prototype.quasipointRateHTML = function() {
    var c = this.flightInfoMgr().get("corrInfo", this.code());
    var a = "";
    if (c) {
        var b = parseInt(c.correctness.replace("%", ""), 10);
        if (b > 95) {
            a = '<p class="a_pty_rate">约100%</p>';
        } else {
            if (b < 30) {
                a = '<p class="a_pty_rate">低于30%</p>';
            }
            if (b < 60) {
                a = '<p class="a_pty_rate">低于60%</p>';
            } else {
                a = '<p class="a_pty_mint">' + c.correctness + "</p>";
            }
            if (parseInt(c.delay, 10) <= 5) {
                a += '<p class="a_pty_mint">小于5分钟</p>';
            } else {
                if (parseInt(c.delay) <= 120) {
                    a += '<p class="a_pty_mint">' + c.delay + "分钟</p>";
                } else {
                    a += '<p class="a_pty_mint">2小时以上</p>';
                }
            }
        }
    } else {
        a = '<p class="a_pty_rate">--</p>';
    }
    return a;
};
FlightEntity.prototype.getWrapperList = function() { return this.flightInfoMgr().get(this.getPriceDataKey(), this.key()); };
FlightEntity.prototype._ajaxLoadList = function(g, a) {
    var f = this.getWrapperListType(), c = this;
    var d = this.ajaxStat[f];
    var b = this.commInfoMgr().getDataLoad();
    var i = g.isUserClick;
    var h = true;
    if (d == 3 || (!i && !a) || d == 1) {
        h = false;
    } else {
        this.ajaxStat[f] = 1;
        a && g.loading();
    }
    if (h) {
        this.syncPriceData(g.isMainFlight, function() {
            c.ajaxStat[f] = b ? 3 : 2;
            var j = c.getWrapperListType();
            if (j !== f) {
                return;
            }
            g.loadBack();
        });
    }
};
FlightEntity.prototype.getCurWrapperList = function(a) {
    if (!this.ajaxStat) {
        this.ajaxStat = {};
    }
    var b = this.getWrapperList();
    if (b) {
        a.callBack();
    }
    this._ajaxLoadList(a, !b);
};
FlightEntity.prototype.getWrapperListType = function() { return this._wlistType || "all"; };
FlightEntity.prototype.setWrapperListType = function(b) {
    this._wlistType = b;
    var a = this.codeShareFlight();
    if (a) {
        a.setWrapperListType(b);
    }
};
FlightEntity.prototype.getPriceDataKey = function() {
    var a = this.getWrapperListType();
    return a == "all" ? "my_wrappInfo" : ("my_wrappInfo_" + a);
};
FlightEntity.prototype.getLowpr = function(b) {
    var a = "lowpr";
    if (b && b != "all") {
        a = b + a;
    }
    return this._getPriceInfoValue(a);
};
FlightEntity.prototype.getHipr = function(b) {
    var a = "hipr";
    if (b && b != "all") {
        a = b + a;
    }
    return this._getPriceInfoValue(a);
};
FlightEntity.prototype.getWrlen = function(b) {
    var a = "wrlen";
    if (b && b != "all") {
        a = b + a;
    }
    return this.priceInfo()[a] || 0;
};
FlightEntity.prototype._getPriceInfoValue = function(a) {
    var b = this.priceInfo()[a];
    if (!b || b == 100000) {
        b = 0;
    }
    return b;
};
FlightEntity.prototype.arriDate = function() {
    var a = this.deptDate();
    if (this.isNextDate()) {
        a = QunarDate.parse(a);
        a.setDate(a.getDate() + 1);
        a = QunarDate.format(a);
    }
    return a;
};
FlightEntity.prototype.isNextDate = function() { return this.arriTime().replace(":", "") * 1 - this.deptTime().replace(":", "") * 1 < 0; };
var FlightEntityManager = function() { FlightEntityManager.superclass.constructor.call(this); };
$jex.extendClass(FlightEntityManager, $jex.List);
FlightEntityManager.prototype.getAll = function() { return this._map ? this._map : null; };

function WrapperEntity() { this._valCache = {}; }

$jex.foreach(["key", "dataSource", "commInfoMgr", "flightInfoMgr"], function(a) {
    WrapperEntity.prototype[a] = function(b) {
        if (b == null) {
            return this._valCache[a];
        } else {
            this._valCache[a] = b;
        }
    };
});
WrapperEntity.prototype.ownerFlight = function(a) {
    if (a == null) {
        return this._valCache.ownerFlight;
    } else {
        this._valCache.ownerFlight = a;
        this.commInfoMgr(a.commInfoMgr());
        this.flightInfoMgr(a.flightInfoMgr());
    }
};
WrapperEntity.prototype.packagePrice = function() { return 0; };
WrapperEntity.prototype.bpackagePrice = function() { return 0; };
WrapperEntity.prototype.vendor = function() {
    var a = this._valCache.vendor;
    if (typeof a == "undefined" || a == null) {
        $jex.console.info("[WrapperEntity.vendor] wrapperId:", this.wrapperId(), ",ownerFlight:", this.ownerFlight());
        a = new VendorEntity();
        a.ownerWrapper(this);
        if (!this.commInfoMgr().get("vendor", this.wrapperId())) {
            $jex.console.error(this.wrapperId() + "没有vendors扩展信息");
        }
        a.dataSource(this.commInfoMgr().get("vendor", this.wrapperId()));
    }
    this._valCache.vendor = a;
    return a;
};
WrapperEntity.prototype.wrapperId = function() { return this.dataSource().wr || this.dataSource().wrid || ""; };
WrapperEntity.prototype.isTTS = function() { return this.wrapperId().indexOf("tts") == 0 || this.wrapperId().indexOf("wstts") == 0; };
WrapperEntity.prototype.advalue = function() { return parseInt(this.dataSource().advalue || this.vendor().seq(), 10); };
WrapperEntity.prototype.isADVendor = function() { return(this.vendor().seq() > 100) && this.vendor().adwords(); };
WrapperEntity.prototype.comments = function() { return[]; };
WrapperEntity.prototype.price = function() { return this.dataSource().pr; };
WrapperEntity.prototype.typeOfCabin = function() { return this.dataSource().tc || ""; };
WrapperEntity.prototype.isFCabin = function() { return this.typeOfCabin().indexOf("头等") > -1; };
WrapperEntity.prototype.isBCabin = function() { return this.typeOfCabin().indexOf("公务") > -1; };
WrapperEntity.prototype.isTCabin = function() { return/^t/i.test(this.dataSource().type); };
WrapperEntity.prototype.isLCabin = function() { return/^l/i.test(this.dataSource().type); };
WrapperEntity.prototype.isOta = function() { return this.dataSource().type == "s"; };
WrapperEntity.prototype.isApplyPrice = function() {
    if (typeof this.dataSource().type != "undefined") {
        return this.dataSource().type == "a";
    }
    return false;
};
WrapperEntity.prototype.isFakeNormalPrice = function() { return false; };
WrapperEntity.prototype.afee = function() { return this.dataSource().afee; };
WrapperEntity.prototype.insuranceType = function() { return this.dataSource().insuranceType; };
WrapperEntity.prototype.afeeInsSum = function() {
    var b = this.commInfoMgr().get("insurancesum");
    var a = this.insuranceType();
    if (a == "i5") {
        return b[a];
    }
    return 0;
};
WrapperEntity.prototype.showInsTip = function(a) {
    if (a == null) {
        return this.hasShownInsTip;
    } else {
        this.hasShownInsTip = a;
    }
};
WrapperEntity.prototype.parValue = function() { return this.dataSource().vppr; };
WrapperEntity.prototype.vType = function() { return this.dataSource().vt; };
WrapperEntity.prototype.vAmount = function() { return parseInt(this.dataSource().va, 10); };
WrapperEntity.prototype.vPrice = function() { return this.dataSource().vup; };
WrapperEntity.prototype.vTitle = function() {
    var a = parseInt(this.vType(), 10);
    switch (a) {
    case 1:
    case 2:
        return"机票 + 租车服务";
    case 4:
        return"机票 + 送机服务";
    default:
        return"";
    }
};
WrapperEntity.prototype.vDes = function() {
    var a = parseInt(this.vType(), 10);
    switch (a) {
    case 1:
    case 2:
        return"代金券仅供易到新注册用户使用，节假日亦可使用，每次最多使用一张，代金券不可兑换现金。";
    case 4:
        return"每张送机服务券对应一次机场送机服务（限起飞城市），自购买机票之日起6个月内可用，需提前24小时预约，不可单独退款";
    default:
        return"";
    }
};
WrapperEntity.prototype.vClass = function() {
    var a = parseInt(this.vType(), 10);
    switch (a) {
    case 1:
    case 2:
        return"ico_zyx_quan";
    case 4:
        return"ico_zyx_scar";
    default:
        return"";
    }
};
WrapperEntity.prototype.vPrd = function() {
    var a = parseInt(this.vType(), 10);
    switch (a) {
    case 1:
    case 2:
        return"租车券";
    case 4:
        return"送机服务";
    default:
        return"";
    }
};
WrapperEntity.prototype.vName = function() {
    var a = parseInt(this.vType(), 10);
    switch (a) {
    case 0:
        return"去哪儿团购代金券";
    case 1:
        return"易到租车代金券";
    case 2:
        return"易到租车代金券";
    case 3:
        return"去哪儿酒店代金券";
    case 4:
        return"送机服务券";
    default:
        return"";
    }
};
WrapperEntity.prototype.discount = function() { return this.dataSource().dis; };
WrapperEntity.prototype.fake = function() { return this.dataSource().fk == true; };
WrapperEntity.prototype.bpr = function() {
    if (typeof this.dataSource().bpr != "undefined") {
        return this.dataSource().bpr;
    } else {
        return false;
    }
};
WrapperEntity.prototype.pid = function() { return this.dataSource().pid; };
WrapperEntity.prototype.hasAgeLimit = function() { return this.dataSource().type === "q"; };
WrapperEntity.prototype.getTGQInfo = function() {
    var h = this.dataSource();
    if (!h.hasOwnProperty("tgq")) {
        return false;
    }
    var g = h.tgq;
    if (g === "" || h.type === "a") {
        return"退改签规定以订单标注规定为准，<br />请联系售票代理商或航空公司咨询。";
    }
    var a = g.split("|"), f = [];
    for (var c = 0, b = a.length; c < b; c++) {
        var d = a[c];
        f.push(d.replace(/(.+[:：])/, "<em>$1</em>"));
    }
    return f.join("<br />") + '<p class="tips"><i>*</i>仅供参考,以订单标注的退改签规定为准。</p>';
};
WrapperEntity.prototype.isTao = function() { return true; };
WrapperEntity.prototype.isQb = function() { return this.dataSource().isQb || false; };
WrapperEntity.prototype.bxfee = function() { return this.dataSource().bxfee || 0; };
WrapperEntity.prototype.updateTime = function() { return this.dataSource().ut; };
WrapperEntity.prototype.rankgrade = function() {};
WrapperEntity.prototype.ranktitle = function() { return""; };
WrapperEntity.prototype.booking = function(a, c) {
    var b = this;
    LockScreen(function() { b._booking(a, c); });
};
WrapperEntity.prototype.rank = function() { return this.dataSource().rank || 0; };
WrapperEntity.prototype.rankline = function() { return this.dataSource().rankline || 0; };
WrapperEntity.prototype._booking = function(a, b) {
    var c = this._booking_url(a, b);
    this._booking_track();
};
WrapperEntity.prototype._booking_url = function(b, d) {
    var a = { full: "false", fk: this.dataSource().fk ? 1 : 0, updatetime: this.dataSource().ut, inter: "false", departureTime: this.ownerFlight().deptTime(), arrivalTime: this.ownerFlight().arriTime(), ccn: this.getVpr() };
    switch (this.ownerFlight().type) {
    case"roundtrip":
        a.isRt = 1;
        a.returnDepartureTime = this.ownerFlight().secondTrip().deptTime();
        a.returnArrivalTime = this.ownerFlight().secondTrip().arriTime();
        break;
    case"onewayInRoundTrip":
        a.isRt = 1;
        break;
    }
    var f = window.location.param().from;
    if (f) {
        a.from = f;
    }
    this._addEx_track(a);
    if (b) {
        a.stat = b.value();
    }
    if (this.ownerFlight().type == "onewayInTransfer") {
        a.iftrans = 1;
    }
    if (d) {
        $jex.merge(a, d);
    }
    if (d && d.prt === 0) {
        a.prt = 0;
    }
    var c = this._transBu(a.prt);
    return"/booksystem/booking.jsp?" + c + "&" + $jex.toQueryString(a);
};
WrapperEntity.prototype._addEx_track = function(a) {
    var b = window.location.param().ex_track;
    if (!a) {
        return;
    }
    a.ex_track = b || "";
};
WrapperEntity.prototype._transBu = function(c) {
    var b = this.dataSource().bu;
    var d = this.dataSource().bbu;
    d = d ? d : b;
    b = b ? b : d;
    var a = c === 0 ? d : b;
    return a;
};
WrapperEntity.prototype._booking_track = function() {
    var c = window.location.param();
    var a = this.ownerFlight();
    var b = ["FL", "BU", this.wrapperId(), encodeURIComponent(c.searchDepartureAirport) + "-" + encodeURIComponent(c.searchArrivalAirport), c.searchDepartureTime, encodeURIComponent(a.deptCity().zh) + "-" + encodeURIComponent(a.arriCity().zh), a.deptDate()];
    switch (a.type) {
    case"oneway":
        b.push("DA");
        b.push("OW");
        break;
    case"compose":
        b.push("PA");
        b.push("OW");
        break;
    case"onewayInTransfer":
        b.push("DA");
        if (a.position() == 0) {
            b.push("FST");
        } else {
            b.push("SND");
        }
        break;
    }
    b.push(a.code());
    trackAction(b.join("|"));
};
WrapperEntity.prototype.bigLogoUrl = function() { return this.dataSource().logoUrl || ""; };
WrapperEntity.prototype.sortRank = function() {
    var b = this.vendor();
    var a = b && b.dataSource().status;
    return a == 0 ? (this.dataSource().sortRank || 0) : (a == 1 ? 999999 : 1000000);
};
WrapperEntity.prototype.isNotWork = function() { return this.dataSource().type == "notWork"; };
WrapperEntity.prototype.setVpr = function(a) { this._vpr = a; };
WrapperEntity.prototype.getVpr = function() { return this._vpr || 0; };
WrapperEntity.prototype.coupon = function() { return Number(this.dataSource().cd) || 0; };
WrapperEntity.prototype.cat = function() { return this.dataSource().cat || 1; };
WrapperEntity.prototype.couponAdwords = function() { return this.dataSource().caw; };
var StatProvider = function() {};
StatProvider.prototype.value = function() {};

function VendorEntity() {
    var b = null;
    this.ownerWrapper = function(g) {
        if (g == null) {
            return b;
        } else {
            b = g;
        }
    };
    var f = null;
    this.dataSource = function(g) {
        if (g == null) {
            if (f == null) {
                $jex.console.error("没有vendor数据", this.wrapperId());
            }
            return f;
        } else {
            f = g;
        }
    };
    this.get = function(g) {
        var h = this.dataSource();
        return g && h ? h[g] : h;
    };
    var a = null;
    this.seq = function(g) {
        if (g) {
            a = g;
        } else {
            if (typeof a == "undefined" || a == null) {
                this.checkLine();
            }
            return a;
        }
    };
    var c = null;
    this.adwords = function(g) {
        if (g) {
            c = g;
        } else {
            if (typeof c == "undefined" || c == null) {
                this.checkLine();
            }
            return c;
        }
    };
    var d = null;
    this.comment = function() {
        try {
            if (typeof d == "undefined" || d == null) {
                if (this.dataSource().recommend && this.dataSource().recommend.comment) {
                    d = this.dataSource().recommend.comment;
                } else {
                    d = "";
                }
            }
        } catch (g) {
            $jex.console.error(this.wrapperId() + " VendorEntity 缺失 recommend comment 信息");
            d = "";
        }
        return d;
    };
}

VendorEntity.prototype.iataInfo = function() {
    var a = this.dataSource();
    var b = { level: 0, url: "" };
    try {
        if (a.recommend && a.recommend.iata) {
            b.level = a.recommend.iata.level;
            b.url = a.recommend.iata.url;
        }
    } catch (c) {
        $jex.console.error(this.wrapperId() + " VendorEntity.prototype.iataInfo recommend信息");
    }
    return b;
};
VendorEntity.prototype.checkLine = function() {
    if (this._checkLine == true) {
        return;
    }
    var c = this.dataSource();
    if (!c) {
        return;
    }
    var a = this.ownerWrapper().ownerFlight();
    if (a && a.flightInfo()) {
        var d = [a.deptCity().zh, "-", a.arriCity().zh, "|", this.wrapperId()].join("");
        var b = a.commInfoMgr().get("flightLineVendor", d);
    } else {
        var b = null;
    }
    this._checkLine = true;
    if (b) {
        this.seq(b.sequenceNum);
        this.ADwords(b.adwords);
    } else {
        this.seq(c.sequenceNum);
        this.adwords(c.adwords);
    }
};
VendorEntity.prototype.wrapperId = function() { return this.ownerWrapper().wrapperId(); };
VendorEntity.prototype.rebateTye = function() { return(this.dataSource() ? this.dataSource().rt : ""); };
VendorEntity.prototype.name = function() {
    if (!this.dataSource()) {
        $jex.console.error(this.wrapperId(), "出现错误!!!!!");
    }
    return(this.dataSource() ? this.dataSource().name : "");
};
VendorEntity.prototype.hasDetail = function() { return this.dataSource().wrdetail && !$jex.$empty(this.dataSource().wrdetail); };
VendorEntity.prototype.star = function() { return(this.dataSource().recommend && this.dataSource().recommend.star) ? this.dataSource().recommend.star : 0; };
VendorEntity.prototype.codeName = function() { return this.dataSource().codeName; };
VendorEntity.prototype.tss = function() { return this.dataSource().tss || 120; };
VendorEntity.prototype.isSuperOTA = function() { return this.dataSource().isSuperOTA === "true"; };
VendorEntity.prototype.isWorking = function() { return this.dataSource().status == 0; };
VendorEntity.prototype.getStatus = function() { return this.dataSource().status; };
VendorEntity.prototype.info = function() { return this.dataSource().info || {}; };
VendorEntity.prototype.starRank = function() {
    var a = this.dataSource().star;
    if (!a) {
        return{ lv: { kd: 0, dw: 0, db: 0, ds: 0, ts: 0 }, count: 0 };
    } else {
        return{ lv: { kd: (Math.round(a.lv.kd * 10) / 10).toFixed(1), dw: (Math.round(a.lv.dw * 10) / 10).toFixed(1), db: (Math.round(a.lv.db * 10) / 10).toFixed(1), ds: (Math.round(a.lv.ds * 10) / 10).toFixed(1), ts: (Math.round(a.lv.ts * 10) / 10).toFixed(1) }, count: a.count };
    }
};
VendorEntity.prototype.srv_ICON = function() {
    var b = this.dataSource();
    if (!b) {
        return null;
    }
    var a = b.info.icon;
    if (!a) {
        return null;
    }
    return{ key: this.__getIconInfo(a).key, text: this.__getIconInfo(a).text, title: this.__getIconInfo(a).title };
};
VendorEntity.prototype.__getIconInfo = function(a) {
    switch (a) {
    case"cata":
        return{ key: "ico_cata", text: "CATA认证", title: "获得《中国民用航空运输销售代理业务资格认可证书》" };
    case"official":
        return{ key: "ico_official", text: "官网", title: "航空公司官网购票，权威服务，值得信赖。" };
    case"direct":
        return{ key: "ico_direct", text: "直营", title: "航空公司直营旗舰店，实时出票，官方服务保障，购票放心。" };
    case"none":
        return{ key: "ico_nocertify", text: "", title: "" };
    }
    return{ key: "ico_nocertify", text: "", title: "" };
};
VendorEntity.prototype.isOffical = function() {
    var b = this.dataSource();
    if (!b) {
        return false;
    }
    var a = b.info.icon;
    if (!a) {
        return false;
    }
    if (a == "official") {
        return true;
    }
    return false;
};
VendorEntity.prototype.__getService = function(a) {
    var c = this.dataSource();
    if (!c) {
        $jex.console.error("没有vendor数据:" + a);
        return null;
    }
    var b = c.services[a];
    if (!b) {
        return null;
    }
    return{ key: a, title: ConfigManager.getConfig("config", "servicesDesc", a), desc: ConfigManager.getConfig("config", "services", a) };
};
VendorEntity.prototype.srv_CATA = function() { return this.__getService("s1"); };
VendorEntity.prototype.srv_ALLDAY = function() { return this.__getService("s2"); };
VendorEntity.prototype.srv_QNHELP = function() { return this.__getService("s3"); };
VendorEntity.prototype.srv_CHECKOUT = function() { return this.__getService("s4"); };
VendorEntity.prototype.srv_TGQ = function() { return this.__getService("s5"); };
VendorEntity.prototype.srv_BAOXIAN = function() { return this.__getService("s6"); };
VendorEntity.prototype.srv_QUALITY = function() { return false; };
VendorEntity.prototype.srv_FREEMAIL = function() { return this.__getService("s8"); };
VendorEntity.prototype.srv_ASSISTANT = function() {
    if (this.__getService("s4")) {
        return{ key: "s9", title: ConfigManager.getConfig("config", "servicesDesc", "s9"), desc: ConfigManager.getConfig("config", "services", "s9") };
    } else {
        return null;
    }
};
VendorEntity.prototype.complaintRate = function() {
    if (this.dataSource().crtext) {
        var a = 99;
        var b = this.dataSource().crtext;
        if (b.indexOf("出票信息可能被遗漏通知") >= 0) {
            a = 1;
        }
        if (b.indexOf("支付后才能确认金额，可能要求加价出票") >= 0) {
            a = 2;
        }
        if (b.indexOf("退款会出现不能及时到账") >= 0) {
            a = 3;
        }
        if (b.indexOf("客服电话难联络") >= 0) {
            a = 4;
        }
        if (b.indexOf("暂无用户反馈") >= 0) {
            a = 5;
        }
        return{ rate: 0, url: this.dataSource().crurl, desc: this.dataSource().crtext, descType: a };
    }
    return null;
};
VendorEntity.prototype.ppc = function() {
    if (this.dataSource().ppc) {
        return this.dataSource().ppc;
    }
    return{};
};
VendorEntity.prototype.ppcphone = function() {
    if (this.ppc().pn) {
        return this.ppc().pn;
    }
    return"";
};

function WrapperListEntity() {
    var d = null;
    this.commInfoMgr = function(f) {
        if (f == null) {
            return d;
        } else {
            d = f;
        }
    };
    var a = null;
    this.flightInfoMgr = function(f) {
        if (f == null) {
            return a;
        } else {
            a = f;
        }
    };
    var c = null;
    this.ownerFlight = function(f) {
        if (f == null) {
            return c;
        } else {
            c = f;
            this.commInfoMgr(c.commInfoMgr());
            this.flightInfoMgr(c.flightInfoMgr());
        }
    };
    var b = null;
    this.dataSource = function(f) {
        if (f == null) {
            return b;
        } else {
            b = f;
            this._update(f);
        }
    };
    WrapperListEntity.superclass.constructor.call(this);
}

$jex.extendClass(WrapperListEntity, $jex.List);
WrapperListEntity.prototype.createWrapperEntity = function() { $jex.console.error("没有重写createWrapperEntity方法"); };
WrapperListEntity.prototype.update = function() { $jex.console.error("没有重写update方法"); };
WrapperListEntity.prototype.sort = function() {
    $jex.console.error("没有重写sort方法");
    return this.keys();
};
WrapperListEntity.prototype._update = function(b) {
    var a = this;
    this.clear();
    $jex.foreach(b, function(g, c, h) {
        $jex.console.info("[WrapperList.update create WrapperEntity] wrdata:", g, ",ownerFlight:", a.ownerFlight());
        var f = a.createWrapperEntity();
        f.dataSource(g);
        f.ownerFlight(a.ownerFlight());
        var d = h || f.wrapperId();
        f.key(d);
        var i = a.commInfoMgr().get("vendor", f.wrapperId());
        if (!a.get(d) && i) {
            a.put(d, f);
        }
    });
};
var OnewayFlightEntity = function() {
    OnewayFlightEntity.superclass.constructor.call(this);
    this.type = "oneway";
    var c = null;
    this.totalTax = function() {
        if (typeof c == "undefined" || c == null) {
            if (this.type != "compose") {
                var g = this.extInfo();
                var d = (g ? parseInt(g.acf, 10) : 0) || ConfigManager.getConfig("default", "acf");
                var f = (g ? parseInt(g.fot, 10) : 0) || ConfigManager.getConfig("default", "fot");
                c = d + f;
            } else {
                c = 200;
            }
        }
        return c;
    };
    var a = this;
    var b = null;
    this.wrappers = function() {
        if (typeof b == "undefined" || b == null) {
            b = new OnewayFlightWrapperListEntity();
            b.ownerFlight(this);
            b.update();
        }
        return b;
    };
};
$jex.extendClass(OnewayFlightEntity, FlightEntity);
OnewayFlightEntity.prototype.isCodeShare = function() { return !!(this.codeShare() && this.codeShareFlight()); };
OnewayFlightEntity.prototype.isAV = function() { return this.lowestPrice() == null; };
OnewayFlightEntity.prototype.getPayCarrier = function() {
    var a = this.flightInfoMgr();
    return a.get("PayCarrier", this.key());
};
OnewayFlightEntity.prototype.getRecommandWrapperData = function() {
    var c = this.flightInfoMgr();
    var a = c.get("Recommend_wrapper", this.key());
    if ($jex.$empty(a)) {
        return null;
    }
    for (var b in a) {
        return a[b];
    }
};
OnewayFlightEntity.prototype.isAV = function() { return !this.lowestPrice(); };
OnewayFlightEntity.prototype.getReWrapperEntity = function() {
    if (this.isAV()) {
        return;
    }
    var b = this.getRecommandWrapperData(), a;
    if (b) {
        a = this._createWrapper(b);
    }
    return a;
};
OnewayFlightEntity.prototype._createWrapper = function(b) {
    if (!b) {
        return null;
    }
    var a = new OnewayFlightWrapperEntity();
    a.dataSource(b);
    a.ownerFlight(this);
    return a;
};
OnewayFlightEntity.prototype.getRecommandWrapper = function() {
    var b, a;
    b = this.getReWrapperEntity();
    if (b) {
        a = this.commInfoMgr().get("vendor", b.dataSource().wrid);
        if (!a) {
            return null;
        }
        return{ entity: b, conf: a, isPay: b.isADVendor() };
    }
};
OnewayFlightEntity.prototype.lowestDiscount = function() {
    var a = this.flightInfoMgr().get("priceInfo", this.key());
    if (!a || !a.op) {
        return 0;
    }
    return Math.round((this.lowestPrice() / a.op) * 100) / 10;
};
OnewayFlightEntity.prototype.turelyLowestPrice = function() { return this.lowprInfo ? this.lowprInfo.tlp : Number.MAX_VALUE; };
OnewayFlightEntity.prototype.priceGroup = function() { return this.flightInfoMgr().get("priceGroup", this.key()); };
OnewayFlightEntity.prototype.lastPriceGroup = function() { return this.flightInfoMgr().get("lastPriceGroup", this.key()); };
OnewayFlightEntity.prototype.priceInfo = function() { return this.flightInfoMgr().get("priceInfo", this.key()); };
OnewayFlightEntity.prototype.deptCityCode = function() { return this.commInfoMgr().deptCityCode(); };
OnewayFlightEntity.prototype.arriCityCode = function() { return this.commInfoMgr().arriCityCode(); };
OnewayFlightEntity.prototype.lowestWrapperIds = function() {
    var a = this.flightInfoMgr().get("priceGroup", this.key());
    if (a) {
        return a.lpwr || [];
    } else {
        return[];
    }
};
OnewayFlightEntity.prototype.lowestBprWrapperIds = function() {
    var a = this.flightInfoMgr().get("priceGroup", this.key());
    return a ? a.lbpwr || [] : [];
};
OnewayFlightEntity.prototype.syncPriceData = function(a, b) {
    var c = this.commInfoMgr().analyzer();
    c.syncPriceData(this, a, b);
};
OnewayFlightEntity.prototype.syncCurrentFlightCode = function() {
    var a = this.commInfoMgr().service();
    a.syncCurrentFlightCode(this.key());
};
OnewayFlightEntity.prototype.codeShareFlight = function() { return this.commInfoMgr().entityManager().get(this.codeShare() + "|" + this.deptDate()); };
OnewayFlightEntity.prototype.update = function() {
    var c = this.key();
    var b = this.commInfoMgr();
    var a = this.flightInfoMgr();
    this.type = (c.indexOf("/") == -1 && c.indexOf("+") == -1) ? "oneway" : "compose";
    this.flightInfo(a.get("flightInfo", c));
    this.lowprInfo = a.get("priceInfo", c);
    this.lowestPrice(this.lowprInfo ? this.lowprInfo.lowpr : null);
    $jex.event.trigger(this, "updating");
    this.changed = false;
};
OnewayFlightEntity.tryCreate = function(j, g, a, h) {
    var f = j;
    var b = g;
    var i = a;
    var c = i.get("flightInfo", j);
    if (!c) {
        return null;
    }
    if (!b.get("airport", c.da)) {
        return null;
    }
    if (!b.get("airport", c.aa)) {
        return null;
    }
    if (!b.get("carrier", c.ca)) {
        return null;
    }
    if (!b.get("plane", c.pt)) {
        return null;
    }
    var d = new OnewayFlightEntity();
    d.key(j);
    d.commInfoMgr(b);
    d.flightInfoMgr(i);
    d.update();
    h.put(d.key(), d);
    return d;
};

function OnewayFlightWrapperEntity(a) {
    OnewayFlightWrapperEntity.superclass.constructor.call(this, a);
    this._type = "OnewayFlightWrapperEntity";
}

$jex.extendClass(OnewayFlightWrapperEntity, WrapperEntity);
OnewayFlightWrapperEntity.prototype.wrapperId = function() { return this.dataSource().wrid; };
OnewayFlightWrapperEntity.prototype.b2bpf = function() { return this.dataSource().b2bpf || ""; };
OnewayFlightWrapperEntity.prototype.rank = function() { return this.groupInfo().rank || 999999; };
OnewayFlightWrapperEntity.prototype.rankline = function() { return this.groupInfo().rankline || -2; };
OnewayFlightWrapperEntity.prototype.isApplyPrice = function() { return this.dataSource().type == "a" && !this.isFakeNormalPrice(); };
OnewayFlightWrapperEntity.prototype.packagePrice = function() { return this.dataSource().pg; };
OnewayFlightWrapperEntity.prototype.bpackagePrice = function() { return this.dataSource().bpg; };
OnewayFlightWrapperEntity.prototype.isFakeNormalPrice = function() {
    var a = ["ttsmiao0001", "ttsmiao0003"];
    return $jex.array.indexOf(a, this.wrapperId()) > -1;
};
OnewayFlightWrapperEntity.prototype.arank = function() { return this.groupInfo().arank || 9999999; };
OnewayFlightWrapperEntity.prototype.rankgrade = function() { return this.rankline() || 0; };
OnewayFlightWrapperEntity.prototype.ranktitle = function() {
    var a = this.groupInfo();
    return FlightUtil.getGTITLE(this.advalue(), a.grprank, a.rankline, a.showlevel);
};
OnewayFlightWrapperEntity.prototype.comments = function() { return this.groupInfo()["comments"] || []; };
OnewayFlightWrapperEntity.prototype.groupInfo = function() {
    if (this.ownerFlight().priceGroup()) {
        return this.ownerFlight().priceGroup().wrlist[this.key()] || {};
    } else {
        return{};
    }
};
OnewayFlightWrapperEntity.prototype._openBookingUrl = function(b, c) {
    var f = this._booking_url(b, c);
    var d = 1;
    if (c.prt === 0) {
        d = 2;
    }
    if (c.recom === 1) {
        d = 3;
        System.service.genTraceTimeStamp();
        System.analyzer.triggerTrace = true;
    }
    System.service.genBookingTimeStamp();
    var a = this.ownerFlight();
    if (a) {
        d += "&package=" + a.code();
    }
    window.open(f);
    $jex.event.trigger($jex.$("hdivResultPanel"), "fem_booking");
    this._bookingBtnTrace();
    TsinghuaOneWayTracker.track("btype", d, System.service.traceTimeStamp, null, "&burl=" + encodeURIComponent(f) + "&wt=" + System.service.wrapperExpandStamp);
    this._booking_track();
    TsinghuaOneWayTracker.trackLowPrChange(a, 1);
};
OnewayFlightWrapperEntity.prototype._booking = function(a, c) {
    c = c || {};
    if (!c.BookingLocation) {
        var b = this.ownerFlight().getWrapperListType() || "all";
        c.BookingLocation = "list_" + b;
    }
    this._openBookingUrl(a, c);
    setTimeout(function() { window.location.reload(); }, 500);
};
OnewayFlightWrapperEntity.prototype._bookingBtnTrace = function() {
    var a = this.ownerFlight();
    var b = a.codeShareFlight();
    TsinghuaOneWayTracker.trackWrappers(a);
    if (b) {
        TsinghuaOneWayTracker.trackWrappers(b);
    }
    if (a._shareFlight) {
        TsinghuaOneWayTracker.trackWrappers(a._shareFlight);
    }
    TsinghuaOneWayTracker.traceFlightList();
};
OnewayFlightWrapperEntity.prototype.cabin = function() { return this.dataSource().cabin; };
OnewayFlightWrapperEntity.prototype.tag = function() { return this.dataSource().type; };
OnewayFlightWrapperEntity.prototype.hasPackageprice = function() { return this.price(); };
OnewayFlightWrapperEntity.prototype.afeePrice = function() { return this.price(); };
OnewayFlightWrapperEntity.prototype.bprPrice = function() { return this.bpr(); };
WrapperEntity.prototype.isLowestPr = function() { return this.dataSource().prColor; };
WrapperEntity.prototype.isLowestBpr = function() { return this.dataSource().bprColor; };

function OnewayFlightWrapperListEntity() { OnewayFlightWrapperListEntity.superclass.constructor.call(this); }

$jex.extendClass(OnewayFlightWrapperListEntity, WrapperListEntity);
OnewayFlightWrapperListEntity.prototype.createWrapperEntity = function() { return new OnewayFlightWrapperEntity(); };
OnewayFlightWrapperListEntity.prototype.update = function() {
    var a = this.ownerFlight();
    var b = a.getWrapperList();
    this._update(b);
};
OnewayFlightWrapperListEntity.prototype.bigUrlSort = function(d) {
    var c, a, b = this;
    $jex.foreach(d, function(g, f) {
        var h = b.get(g);
        if (h.bigLogoUrl()) {
            c = g;
            a = f;
            return $jex.$break;
        }
    });
    if (c) {
        d.splice(a, 1);
        d.splice(0, 0, c);
    }
};
OnewayFlightWrapperListEntity.prototype.sort = function(b) {
    var c = this.keys(), a = this;
    b = b || this._sortType;
    this._sortType = b;
    if (b && b == "priceDesc") {
        c.sort(function(g, f) {
            var i = a.get(g);
            var h = a.get(f);
            var j = i.afeePrice() || i.bprPrice();
            var d = h.afeePrice() || h.bprPrice();
            if (!i.vendor().isWorking()) {
                j = 100000;
            }
            if (!h.vendor().isWorking()) {
                d = 100000;
            }
            return(j - d);
        });
        this.bigUrlSort(c);
    } else {
        if (b && b == "priceAsc") {
            c.sort(function(g, f) {
                var i = a.get(g);
                var h = a.get(f);
                var j = i.afeePrice() || i.bprPrice();
                var d = h.afeePrice() || h.bprPrice();
                if (!i.vendor().isWorking()) {
                    j = -100000;
                }
                if (!h.vendor().isWorking()) {
                    d = -100000;
                }
                return -(j - d);
            });
            this.bigUrlSort(c);
        } else {
            c.sort(function(f, d) {
                var h = a.get(f);
                var g = a.get(d);
                return h.sortRank() - g.sortRank();
            });
        }
    }
    this._keysCache = c;
    return c;
};
OnewayFlightWrapperListEntity.prototype.wrapperLength = function() {
    var b = this._keysCache || [];
    for (var a = b.length; a > 0; a--) {
        if (this.get(b[a - 1]).isNotWork()) {
            continue;
        } else {
            break;
        }
    }
    return a;
};

function FlightUI(a) {
    FlightUI.superclass.constructor.call(this, a);
    this._type = "FlightUI";
    this._state = 0;
    if (window.UICacheManager) {
        UICacheManager.addToCache(this);
    }
}

$jex.extendClass(FlightUI, XControl);
FlightUI.prototype.state = function(a) {
    if (a == null) {
        return this._state;
    } else {
        this._state = a;
        $jex.event.trigger(this, "stateChanged", a, this);
    }
};
FlightUI.prototype.ownerFlightUI = function(a) {
    if (a == null) {
        return this._flightUI;
    } else {
        this._flightUI = a;
    }
};
FlightUI.prototype.gotoDetailPage = function(b) {
    switch (b.type) {
    case"onewayInTransfer":
        var a = b.owner().flightKeyCode();
        break;
    default:
        var a = b.flightKeyCode();
        break;
    }
    trackAction("FL|ALL|" + encodeURIComponent(a));
    var d = window.location.param();
    var c = ["oneway_detail.htm?", "&origional=", encodeURIComponent(a), "&searchDepartureAirport=", encodeURIComponent(d.searchDepartureAirport), "&searchArrivalAirport=", encodeURIComponent(d.searchArrivalAirport), "&searchDepartureTime=", d.searchDepartureTime, "&searchArrivalTime=", d.searchArrivalTime, "&nextNDays=0", "&arrivalTime=", d.searchArrivalTime, "&listtime=", SERVER_TIME.getTime(), "&code=", b.code(), "&listlp=", b.lowestPrice(), "&sortid=", "&deptcity=", encodeURIComponent(b.deptCity().zh), "&arricity=", encodeURIComponent(b.arriCity().zh), "&tserver=", this.dataSource().commInfoMgr().service().tserver()];
    if (b.getWrapperListType) {
        c.push("&wtype=", b.getWrapperListType());
    }
    if (d.from) {
        c.push("&from=", d.from);
    }
    LockScreen(function() { window.open(c.join("")); });
};
FlightUI.prototype.container = function() { return this.find("itemRow"); };
FlightUI.prototype.moveToHome = function() {
    if (this._homeNode) {
        if (!this._homeNode.parentNode) {
            return;
        }
    }
    var a = $jex.$("hdivResultPanel");
    var b = $jex.$(this.newid("itemBar"));
    a.insertBefore(b, this._homeNode);
    this._homeNode = null;
};
FlightUI.prototype.moveToFirst = function() {
    var a = this.dataSource();
    if (a.isAV && a.isAV()) {
        return;
    }
    this.ownerFlightUI().setFirstFlight(this);
    if (this.index == 0) {
        return;
    }
    var d = $jex.$("hdivResultPanel");
    var f = d.childNodes[0], b = this.newid("itemBar");
    var c = $jex.$(b);
    if (f.id != b) {
        this._homeNode = c.nextElementSibling || c.nextSibling;
        d.insertBefore(c, f);
    }
};

function WrapperUI() {
    WrapperUI.superclass.constructor.call(this);
    this.bookingScreenUI = new BookingScreenUI();
    this.bookingLockScreenUI = new BookingLockScreenUI();
    this.starUI = new StarRankUI();
    this.starUI.ownerWrapperUI(this);
    var a = null;
    this.ownerListUI = function(b) {
        if (b == null) {
            return a;
        } else {
            a = b;
        }
    };
    this.stat = new StatProvider();
}

$jex.extendClass(WrapperUI, XControl);
WrapperUI.prototype.update = function(a) {};
WrapperUI.prototype.insert_HEADER = function() {};
WrapperUI.prototype.insert_FOOTER = function() {};
WrapperUI.prototype._getBookingData = function(d, c, a) {
    var b = c;
    a = a || d.dataSource().type;
    a = a && a.toLocaleUpperCase();
    if (typeof c == "undefined") {
        b = d.afeePrice() ? 1 : 0;
    }
    if (a && b == 1) {
        a += "I";
    }
    return{ prt: b };
};
WrapperUI.prototype.jumpToBooking = function(d, c, a) {
    var b = this._getBookingData(d, c, a);
    d.booking(this.stat, b);
};
WrapperUI.prototype.insert_IATAIMG = function(c) {
    var b = c;
    var a = b.vendor().iataInfo();
    $jex.console.info("[WrapperUI.insert_IATAIMG] iata:", a, ", wrEn:", b);
    switch (a.level) {
    case 1:
        this.text("<img ");
        if (a.url.indexOf("http") != -1) {
            this.text("onclick=\"window.open('", a.url, "');return false;\"");
        }
        this.text(' align="absmiddle" src="http://simg1.qunarzz.com/site/images/new_main/iatav2.gif" title="经Qunar验证：该网站已获得《中国民用航空运输销售代理业务资格认可证书》" />');
        break;
    default:
        break;
    }
};
WrapperUI.prototype.insert_VENDORNAME = function(d) {
    var c = d;
    var a = this.specWR;
    var b = this.superOTA;
    if (b && !c.isApplyPrice()) {
        this.text('<div class="clr_after">');
        this.text('    <div class="imggold">');
        this.text('    	<p class="icon_gold">金牌代理</p>');
        this.text('        <div class="prelative">');
        this.text('            <div class="gold_sumary">');
        this.text("                <b>快速出票：</b>3分钟内出票率在99%以上<br /><b>价格真实：</b>价格准确率在99%以上<br /><b>优质服务：</b>24小时内完成退改签，服务<cite>响应快，在行业内领先 </cite>");
        this.text('           		<p class="jt_arrow"></p>');
        this.text("            </div>");
        this.text("         </div>");
        this.text("    </div>");
        this.append("    <div", "superOTADetail", ' class="fl_summary"><!--显示弹出层内容加hover_gold，不显示去掉该class-->');
        this.text("    	 <h2>", c.vendor().name(), "</h2>");
        this.append("        <p", "superOTATip", ">快速出票、价格真实、优质服务</p>");
        this.text('         <div class="prelative">');
        this.text('            <div class="gold_sumary gold_txtsumry">');
        this.text("                <b>快速出票：</b>3分钟内出票率在99%以上<br /><b>价格真实：</b>价格准确率在99%以上<br /><b>优质服务：</b>24小时内完成退改签，服务<cite>响应快，在行业内领先 </cite>");
        this.text('           		<p class="jt_arrow left110"></p>');
        this.text("            </div> ");
        this.text("         </div>");
        this.text("    </div>");
        this.text("</div>");
    } else {
        if (a) {
            this.text('	<div class="t"><b><img class="img" src="', a.picurl, '">');
            this.text("</b>");
            if (c.vendor().srv_QUALITY()) {
                this.text('<span title="已签署《去哪儿网客户服务规范》，服务有保障。" class="s7">服务保障</span><br />');
            }
            this.text('<span class="s" title="', c.vendor().adwords(), '">', a.text[0], a.text[1], FlightUtil.catAdtext(c.vendor().adwords(), 36 - (a.text[0].length + a.text[1].length)), "</span>");
            this.text("</div>");
        } else {
            this.text('	<div class="t"><b>', c.vendor().name());
            this.text("</b>");
            if (c.vendor().srv_QUALITY()) {
                this.text('<span title="已签署《去哪儿网客户服务规范》，服务有保障。" class="s7">服务保障</span>');
            }
            this.text("</div>");
        }
    }
    this.onInit(function() {
        var f = this.find("superOTATip");
        var g = this.find("superOTADetail");
        if (f && g) {
            $jex.event.bind(f, "mouseover", function() { $jex.addClassName(g, "hover_gold"); });
            $jex.event.bind(f, "mouseout", function() { $jex.removeClassName(g, "hover_gold"); });
        }
    });
};
WrapperUI.prototype.insert_Services = function(f) {
    var b = this;
    var d = f;
    var a = d.vendor();
    this.text('<div class="v"><ul>');
    var c = [a.srv_ASSISTANT(), a.srv_ALLDAY(), a.srv_CHECKOUT(), a.srv_BAOXIAN(), a.srv_FREEMAIL(), a.srv_QNHELP()];
    $jex.foreach(c, function(g) {
        if (g) {
            b.append("<li ", g.key);
            b.text(' class="', g.key, '" alt="', g.title, '" title="', g.title, '">', g.desc, "</li>");
        }
    });
    this.text("</ul></div>");
};
WrapperUI.prototype.insert_RecommendBlog = function(b) {
    var a = b.vendor().complaintRate();
    if (a) {
        if (a.url) {
            a.url = "http://" + a.url.replace("http://", "");
            this.text("<a onclick=\"window.open('", a.url, '\'); $jex.stopEvent(event); return false;" target="_blank">', a.desc, "</a>&nbsp;&nbsp;");
        } else {
            this.text("<span>", a.desc, "</span>&nbsp;&nbsp;");
        }
    } else {
    }
};
WrapperUI.prototype.insert_CATA = function(c) {
    var b = c.vendor();
    var a = b.srv_CATA();
    if (a) {
        this.text('<div class="', a.key, '" alt="', a.title, '" title="', a.title, '"></div>');
    }
};
WrapperUI.prototype.insert_STAR = function(b) {
    var a = b;
    this.append("<div", "btnStar", ' class="starkb" >');
    this.text('<p class="star ', FlightUtil.starClass(a.vendor().star()), '"></p>');
    this.text('<p class="sbarTitle">网站口碑</p>');
    this.text("</div>");
    if (a.vendor().hasDetail()) {
        this.onInit(function() {
            $jex.event.binding(this.find("btnStar"), this, "click", function(c) {
                SingletonUIManager.register("vendor", this.vdetailUI, function() {
                    if (!this.visible()) {
                        this.updateSource(this.ownerWrapperUI().dataSource().vendor());
                        this.show();
                    } else {
                        this.hide();
                    }
                }, function() { this.hide(); });
                $jex.stopEvent(c);
            });
        });
    }
};
WrapperUI.prototype.insert_RANK = function(b) {
    var a = b;
    this.text('<p title="', a.rankgrade(), '分/5分" class="sbar"><b class="ids"><b style="width:', a.rankgrade() * 20, '%;" class="id"></b></b><b class="bg"></b></p>');
    this.text('<p class="sbarMsg">', a.ranktitle(), "</p>");
};
WrapperUI.prototype.insert_UPDATETIME = function(d) {
    var c = d;
    var b = c.updateTime();
    var a = "";
    if (b > 0) {
        a = QunarDate.parseTimeToNL(b) + "前更新";
    } else {
        a = "10分钟前更新";
    }
    if (c.isApplyPrice() || this.specWR) {
        return a;
    } else {
        return this.bookingScreenUI.getStatusMsg(a);
    }
};
WrapperUI.prototype.insert_PRICE = function(b) {
    var a = b;
    this.insert_PRICE_NORMAL(a);
};
WrapperUI.prototype.insert_PRICE_INSURANCE = function(c) {
    var b = c;
    this.text('<div class="f1booking"> <span class="insure">+', b.afee(), '(保险)</span><span class="naked">&yen;<b>', b.price(), "</b></span> </div>");
    var a = b.isApplyPrice() ? "申 请" : "预 订";
    this.text('<div class="f2booking"> <a class="btn" href="#"> <span>', a, "</span> </a> </div>");
    if (b.bpr()) {
        this.append('<div class="f3booking"> <a', "onlyt", ' class="bbtn" href="#" ');
        this.text('title="', a, '">无保险&yen;', b.bpr(), "</a> </div>");
    }
};
WrapperUI.prototype.insert_PRICE_NORMAL = function(g) {
    var f = g;
    var b = ConfigManager.getConfig("CuxiaoConfig");
    var a = f.wrapperId();
    var d = b[a];
    this.text('<div class="prs">');
    if (d) {
        this.text('<span class="insure">', d.text, "</span>");
    } else {
        if (f.afee()) {
            this.text('<span class="insure">+ ', f.afee(), "</span>");
        } else {
            this.text('<span class="disc">', PriceUtil.getDiscount(f.discount()), "</span>");
        }
    }
    this.text('<span class="pr">&yen;<b>', f.price(), "</b></span>");
    this.text("</div>");
    this.text('<div class="alt">');
    var c = f.ranktitle();
    if (c) {
        this.text(c);
    } else {
        if (f.afee()) {
            this.text("搭售保险");
        } else {
            if (f.parValue()) {
                this.text("票面价：&yen;", f.parValue());
            }
        }
    }
    this.text("</div>");
    this.insert_BOOKING_BUTTON(f);
    this.text('<div class="up">', this.insert_UPDATETIME(f), "</div>");
};
WrapperUI.prototype.insert_BOOKING_BUTTON = function(a) {
    if (a.isApplyPrice()) {
        this.append("<a ", "btnBook", ' class="btnBook" href="#"><span>' + this.bookingScreenUI.getButtonMsg("申 请") + "</span></a>");
    } else {
        if (this.specWR) {
            this.append('<div class="ops"><a ', "btnBook", ' title="预订" class="btnBook" href="#"><span>预 订</span></a></div>');
        } else {
            this.append('<div class="ops"><a ', "btnBook", ' title="' + this.bookingScreenUI.getButtonTips("预订") + '" class="btnBook" href="#"><span>' + this.bookingScreenUI.getButtonMsg("预 订") + "</span></a></div>");
        }
    }
};
var StatProvider = function() {
    this.ownerWrapperEntity = function(g) {
        if (g.isApplyPrice() || g.isFakeNormalPrice()) {
            this.location(4);
        }
        this.fake(g.fake());
        if (g.ownerFlight().lowestPrice() == g.price()) {
            this.lowestStat(g.ownerFlight().lowestWrapperIds ? g.ownerFlight().lowestWrapperIds().length : 1);
        } else {
            this.lowestStat(0);
        }
        if (g.advalue() > 100) {
            this.isAD(true);
        } else {
            this.isAD(false);
        }
    };
    var b = "00";
    this.position = function(g) {
        if (g == null) {
            return b;
        } else {
            if (g < 10) {
                b = "0" + g.toString();
            } else {
                b = g.toString();
            }
        }
    };
    var f = "0";
    this.isAD = function(g) {
        if (g == null) {
            return f;
        } else {
            if (g) {
                f = "1";
            } else {
                f = "0";
            }
        }
    };
    var d = "0";
    this.fake = function(g) {
        if (g == null) {
            return d;
        } else {
            if (g) {
                d = "1";
            } else {
                d = "0";
            }
        }
    };
    var a = 0;
    this.lowestStat = function(g) {
        if (g == null) {
            return a;
        } else {
            if (g > 2) {
                a = 2;
            } else {
                a = g;
            }
        }
    };
    var c = 1;
    this.location = function(g) {
        if (g == null) {
            return c;
        } else {
            c = g;
        }
    };
};
StatProvider.prototype.value = function() { return[this.position(), this.isAD(), this.fake(), this.lowestStat(), this.location()].join(""); };

function FlightListUI(a) {
    FlightListUI.superclass.constructor.call(this, a);
    this._type = "FlightListUI";
    this._cachelist = {};
    this.firstCodeClick = false;
    this.secondCodeClick = false;
}

FlightListUI.flightCount = 0;
$jex.extendClass(FlightListUI, XControl);
FlightListUI.prototype.getSorter = function() {
    if (typeof FlightListUISorter != "undefined") {
        return FlightListUISorter;
    }
    return{ resortPage: function() {}, open: function() {}, close: function() {} };
};
FlightListUI.prototype.loadData = function(b, d) {
    var a = this;
    this.analyzer = d;
    this.clear();
    this._firstFlightUI = null;
    this.currentDataMap = b;
    this.getSorter().resortPage(b);
    FlightListUI.flightCount = 100;
    $jex.console.start("FlightListUI:loadData:建立数据");
    var c = [];
    $jex.foreach(b, function(g, f) { c.push(a._addFlightUI(g, f)); });
    $jex.console.end("FlightListUI:loadData:建立数据");
    $jex.console.start("FlightListUI:loadData:渲染");
    this.refresh();
    $jex.console.end("FlightListUI:loadData:渲染");
    this._fuiListCache = c;
    this.keepLastOpen();
    $jex.event.trigger(this, "refreshed", c);
};
FlightListUI.prototype.keepLastOpen = function() {
    var d = HoldLastShowFlight.getUrlFlight(), b;
    $jex.foreach(this._fuiListCache, function(g, f) {
        if (g.dataSource().flightKeyCode() === d) {
            b = g;
            return false;
        }
    });
    if (b) {
        var a = b.dataSource().code();
        var c = HoldLastShowFlight.getUrlType(a) || "all";
        SingletonUIManager.register("flight", b, function() {
            b.dataSource().setWrapperListType(c);
            b.showVendorPanel();
        }, function() { b.hideVendorPanel(); });
    }
};
FlightListUI.prototype.refresh = function() {
    this.render();
    $jex.event.trigger($jex.$("hdivResultPanel"), "fem_flightListShow");
    this.styleList = [];
    this._randomArr = {};
};
FlightListUI.prototype._addFlightUI = function(b, a) {
    var c = this;
    var f = [b.type, "_", b.flightKeyCode()].join("");
    var g = this._cachelist[f], d = g;
    if (!g || g.dataSource() != b) {
        switch (b.type) {
        case"oneway":
        case"compose":
            g = new OnewayFlightUI();
            if (g.ownerFlightUI) {
                g.ownerFlightUI(this);
            }
            break;
        case"transfer":
            g = new TransferFlightUI();
            if (g.ownerFlightUI) {
                g.ownerFlightUI(this);
            }
            break;
        }
        g.dataSource(b);
        g.ownerList = this;
        if (d) {
            d._homeNode = null;
            g._state = d._state;
        }
        $jex.event.binding(g, "open", function() {
            c.getSorter().open(g.dataSource());
            c._track("open", b);
            try {
                var h = b.firstTrip ? true : false;
                TraceAnalyzer.open = TraceAnalyzer.create().addOpenInfo(b, { da: (h ? b.firstTrip().deptCity().zh : b.deptCity().zh), aa: (h ? b.secondTrip().arriCity().zh : b.arriCity().zh), co: b.key(), inter: 0, dd: (h ? b.firstTrip().deptDate() : b.deptDate()), now: $jex.date.format(SERVER_TIME), ip: CLIENT_IP, transfer: h });
            } catch (i) {
            }
        });
        $jex.event.binding(g, "close", function() {
            c.getSorter().close();
            c._track("close", b);
        });
        $jex.event.binding(g, "changeFilter", function(h, j, i) { $jex.event.trigger(c, "changeFilter", h, j, i); });
        this._cachelist[f] = g;
    }
    g.index = a;
    g.updateSource();
    this.append("", g, "");
    return g;
};
FlightListUI.prototype._track = function(b, a) {
    var c = this;
    var d = ["FL|T|"];
    switch (a.type) {
    case"oneway":
    case"compose":
        d.push("Ow|v", b, "|");
        break;
    case"transfer":
        d.push("Tf|v", b, "|");
        break;
    case"roundtrip":
        d.push("Tf|v", b, "|");
        break;
    }
    d.push("p", c.analyzer.currentPageIndex() + 1, "|");
    d.push($jex.array.indexOf(c.currentDataMap, a) + 1, "|");
    switch (a.type) {
    case"oneway":
    case"compose":
        d.push(a.code(), "|");
        break;
    case"transfer":
        d.push(a.firstTrip().code(), "-", a.secondTrip().code(), "|");
        break;
    case"roundtrip":
        d.push(a.firstTrip().code(), "+", a.secondTrip().code(), "|");
        break;
    }
    d.push(a.lowestPrice(), "|");
    var f = window.location.param();
    d.push(encodeURIComponent(f.searchDepartureAirport || f.fromCity), "-", encodeURIComponent(f.searchArrivalAirport || f.toCity), "|");
    d.push(f.searchDepartureTime || f.fromDate, "|");
    d.push($jex.date.format(SERVER_TIME), "|");
    switch (a.type) {
    case"oneway":
    case"compose":
        if (a.wrappers()) {
            d.push(a.wrappers().size());
        }
        break;
    case"transfer":
        d.push(a.firstTrip().wrappers().size() + a.secondTrip().wrappers().size());
        break;
    case"roundtrip":
        d.push(a.firstTrip().wrappers().size() + a.secondTrip().wrappers().size());
        break;
    }
    trackAction(d.join(""));
};
FlightListUI.prototype.setFirstFlight = function(a) {
    this.closeFirstFlight();
    var b;
    if (a.index != 0) {
        b = this._fuiListCache.slice(0);
        b.splice(a.index, 1);
        b.splice(0, 0, a);
        this._firstFlightUI = a;
    } else {
        b = this._fuiListCache;
    }
    $jex.event.trigger(this, "refreshed", b);
};
FlightListUI.prototype.closeFirstFlight = function() {
    if (!this._firstFlightUI) {
        return;
    }
    this._firstFlightUI.moveToHome();
    this._firstFlightUI = null;
};

function FilterListUI(a) {
    FilterListUI.superclass.constructor.call(this, a);
    this._type = "FilterListUI";
    this._filterConf = (a && a.filterConf) ? a.filterConf : {};
    this._list = new $jex.List();
    this._cacheItem = {};
}

$jex.extendClass(FilterListUI, XControl);
FilterListUI.prototype.addFilter = function(b) {
    if (!b || b.value === "") {
        return;
    }
    if (b.value == null) {
        var a = "___defaultvalue";
    } else {
        var a = b.catalog + "-" + b.value;
    }
    if (this._cacheItem[a]) {
        return;
    }
    this._cacheItem[a] = true;
    var c = this._list.get(b.catalog);
    if (!c) {
        c = new FilterUI(this._filterConf[b.catalog]);
        c.ownerList(this);
        this.bindEvent(c);
        this._list.put(b.catalog, c);
    } else {
    }
    c.addItem(b);
};
FilterListUI.prototype.bindEvent = function(b) {
    var a = this;
    $jex.event.binding(b, "changeFilter", function(c, d, h, i, g) {
        var f = { name: c, type: (a._filterConf[c] && a._filterConf[c].type) ? a._filterConf[c].type : 4, value: d };
        $jex.event.trigger(a, "changeFilter", f, c, d, h, i, g);
    });
};
FilterListUI.prototype.getFilterUI = function(a) {
    var b = this._list.get(a);
    return(b && b.visible()) ? b : false;
};
FilterListUI.prototype.appendFilter = function(b, c) {
    var d = c || {};
    var a = d.attr || "";
    this.append("<div ", b, ' class="item" ' + a + " ></div>");
};
FilterListUI.prototype.layout = function() {};
FilterListUI.prototype.update = function() {};
FilterListUI.prototype.refresh = function() {
    var a = this;
    $jex.foreach(this._list.keys(), function(b) {
        var c = a._list.get(b);
        if (c && c.visible()) {
            c.update();
            c.render(a.find(b));
            $jex.element.show(a.find(b));
            if (!c.firstRefresh) {
                $jex.event.trigger(a, "firstRefresh", c);
                c.firstRefresh = true;
            }
        } else {
            $jex.element.hide(a.find(b));
        }
    });
    this.layout();
};

function FilterUI(a) {
    FilterUI.superclass.constructor.call(this, a);
    this._type = "FilterUI";
    var d = null;
    this.ownerList = function(f) {
        if (f == null) {
            return d;
        } else {
            d = f;
        }
    };
    var c = null;
    this.catalog = function(f) {
        if (f == null) {
            return c;
        } else {
            c = f;
        }
    };
    var b = false;
    this.visible = function(f) {
        if (f == null) {
            return b;
        } else {
            b = f;
        }
    };
    this._groups = {};
    this._checkboxes = {};
    this._displayboxes = [];
}

$jex.extendClass(FilterUI, XControl);
FilterUI.prototype.defaultCheck = function() { return this._setting.defaultCheck || false; };
FilterUI.prototype.allName = function() {
    var a = [];
    $jex.foreach(this._displayboxes, function(b) { a.push(b.dataSource().name); });
    return a;
};
FilterUI.prototype.clearFilter = function() {
    var a = this;
    $jex.foreach(this._displayboxes, function(b) { b.clearValue(a.defaultCheck()); });
    $jex.event.trigger(a, "changeFilter", a.catalog(), a.getValue());
};
FilterUI.prototype.addItem = function(f) {
    var g = f;
    var b = this._groups;
    var c = g.group || "default";
    var a = g.catalog + "|" + c + "|" + g.value;
    this.catalog(g.catalog);
    if (!b[c]) {
        b[c] = [];
    }
    var d = this._checkboxes[a];
    if (!d) {
        d = new FilterCheckBoxUI();
        d.ownui(this);
        d.checked(this.defaultCheck());
        d.dataSource(g);
        d.updateSource();
        this.bindEvent(d);
        this._checkboxes[a] = d;
        b[c].push(d);
    }
    if (b[c].length > 1) {
        this.visible(true);
    }
};
FilterUI.prototype.bindEvent = function(b) {
    var a = this;
    $jex.event.binding(b, "changeCheckbox", function(d, f, c) { $jex.event.trigger(a, "changeFilter", a.catalog(), a.getValue(), d, f, c); });
};
FilterUI.prototype.getValue = function() {
    var a = [];
    $jex.foreach(this._displayboxes, function(c) {
        var b = c.getValue();
        if (b) {
            a.push(b);
        }
    });
    if (a.length == this._displayboxes.length) {
        a = [];
    }
    return a;
};
FilterUI.prototype.update = function() {
    this.clear();
    this._displayboxes = [];
    var a = this;
    this.text('<span class="flt_lab">', this.catalog(), "</span>");
    this.text('<span class="flt_sel">');
    $jex.foreach(this._groups, function(d, b, c) {
        if (d.length <= 1) {
            return $jex.$continue;
        }
        a.updateGroup(d);
    });
    this.text("</span>");
};
FilterUI.prototype.updateGroup = function(b) {
    var a = this;
    if (this._setting.sort) {
        var c = this._setting.sort;
        b.sort(function(f, d) { return c[f.dataSource().name] - c[d.dataSource().name]; });
    }
    $jex.foreach(b, function(d) {
        a._displayboxes.push(d);
        d.update();
        a.append("", d);
    });
};

function FilterCheckBoxUI(c) {
    FilterCheckBoxUI.superclass.constructor.call(this, c);
    this._type = "FilterCheckBoxUI";
    var b = false;
    this.checked = function(d) {
        if (d == null) {
            return b;
        } else {
            b = d;
        }
    };
    var a = null;
    this.ownui = function(d) {
        if (d == null) {
            return a;
        } else {
            a = d;
        }
    };
}

$jex.extendClass(FilterCheckBoxUI, XControl);
FilterCheckBoxUI.prototype.getValue = function() {
    var a = this.find("chk");
    if (a.checked) {
        return a.value;
    } else {
        return"";
    }
};
FilterCheckBoxUI.prototype.clearValue = function(b) {
    this.checked(b);
    var a = this.find("chk");
    if (a) {
        a.checked = b;
    }
};
FilterCheckBoxUI.prototype.update = function(c) {
    var b = c || this.dataSource();
    this.clear();
    this.text(" <span>");
    this.append("<input ", "chk");
    this.text(' type="checkbox" value="', b.value, '"');
    if (this.checked()) {
        this.text(' checked="checked" ');
    }
    this.text(" />");
    this.tpls('<label for="{#chk}"><span>' + b.name + "</span></label>");
    this.text("</span>");
    var a = this;
    this.onInit(function() {
        var d = this.find("chk");
        $jex.event.binding(d, this, "click", function() {
            this.checked(d.checked);
            $jex.event.trigger(a, "changeCheckbox", this, this.dataSource().value, d.checked);
        });
    });
};

function DomesticOnewayFilterListUI(a) {
    DomesticOnewayFilterListUI.superclass.constructor.call(this, a);
    this._type = "DomesticOnewayFilterListUI";
}

$jex.extendClass(DomesticOnewayFilterListUI, FilterListUI);
DomesticOnewayFilterListUI.prototype.update = function() {
    this.clear();
    this.append("<div ", "moreFilter", ' class="m_flt_more" style="display:none;">');
    this.append("<a", "filterMoreTitle", ' onfocus="this.blur();" href="#">更多筛选条件<i class="ico_up"></i></a>');
    this.text("</div>");
    this.append("<div", "filter_panel", ' class="clrfix"></div>');
    this.append("<div", "filterMore", ' class="hide">');
    this.appendFilter("起飞时间", "m_sep2_1");
    this.appendFilter("方式", "m_sep2_1");
    this.appendFilter("起飞机场", "m_sep2_1");
    this.appendFilter("降落机场", "m_sep2_1");
    this.appendFilter("机型", "m_sep2_1");
    this.appendFilter("航空公司", "m_sep_full");
    this.text("</div>");
    this.onInit(function() {
        var a = this;
        a.isMoreOpen = 0;
        $jex.event.binding(this.find("filterMoreTitle"), this, "click", function(b) {
            var c = this.find("filterMore");
            var d = this.find("filterMoreTitle");
            $jex.toggleClassName(c, "hide", function() {
                d.innerHTML = '更多筛选条件<i class="ico_up"></i>';
                a.isMoreOpen = 0;
                trackAction("FL|F|Mo|close");
            }, function() {
                d.innerHTML = '收起<i class="ico_down"></i>';
                a.isMoreOpen = 1;
                trackAction("FL|F|Mo|open");
            });
            $jex.stopEvent(b);
            $jex.event.trigger(a, "openMore");
        });
        $jex.event.binding($jex.$(this._setting.elemId), this, "click", function(d) {
            var f = typeof event != "undefined" ? event.srcElement : d.target;
            if (/input|label/i.test(f.tagName)) {
                var c = this.getCurCheckbox(f.id);
                if (c) {
                    var b = c.find("chk");
                    c.checked(b.checked);
                    $jex.event.trigger(c, "changeCheckbox", c, c.dataSource().value, b.checked);
                }
            }
        });
    });
};
DomesticOnewayFilterListUI.prototype.addFilter = function(b) {
    if (!b || b.value === "") {
        return;
    }
    if (b.value == null) {
        var a = "___defaultvalue";
    } else {
        var a = b.value;
    }
    if (this._cacheItem[a]) {
        return;
    }
    this._cacheItem[a] = true;
    var c = this._list.get(b.catalog);
    if (!c) {
        c = new OnewayFilterUI(this._filterConf[b.catalog]);
        c.ownerList(this);
        this.bindEvent(c);
        this._list.put(b.catalog, c);
    } else {
    }
    c.addItem(b);
};
DomesticOnewayFilterListUI.prototype.setCheckBoxCache = function(a, b) {
    if (!this._chkBox) {
        this._chkBox = {};
    }
    this._chkBox[a] = b;
};
DomesticOnewayFilterListUI.prototype.getCurCheckbox = function(a) { return this._chkBox && this._chkBox[a]; };
DomesticOnewayFilterListUI.prototype.appendFilter = function(b, a) { this.append("<div ", b, ' class="' + a + '"></div>'); };
DomesticOnewayFilterListUI.prototype.setTransformLoad = function() { this._isTransformLoad = true; };
DomesticOnewayFilterListUI.prototype.layout = function() {
    var c = this;
    var b = this.find("filter_panel"), g = this.find("filterMore"), d = 0, h = false;
    var a = [];
    $jex.foreach(["起飞时间", "方式", "起飞机场", "降落机场", "航空公司", "机型"], function(k, j) {
        if (c.getFilterUI(k)) {
            a.push(k);
        }
    });
    if (a.length == 0) {
        $jex.element.hide($jex.$(this._setting.elemId));
        return;
    }
    if (a[0] == "航空公司") {
        b.appendChild(this.find("航空公司"));
        if (a[1]) {
            h = true;
            g.appendChild(this.find("机型"));
        }
    } else {
        var f = this._isTransformLoad ? 1 : 0;
        $jex.foreach(a, function(k, j) {
            if (j <= f) {
                b.appendChild(c.find(k));
            } else {
                h = true;
                g.appendChild(c.find(k));
            }
        });
        if (this.getFilterUI("航空公司") && this.getFilterUI("机型")) {
            h = true;
            g.appendChild(this.find("航空公司"));
        }
    }
    $jex.element.show($jex.$(this._setting.elemId));
    $jex.element[h ? "show" : "hide"](this.find("moreFilter"));
};

function OnewayFilterCheckBoxUI(a) {
    OnewayFilterCheckBoxUI.superclass.constructor.call(this, a);
    this._type = "OnewayFilterCheckBoxUI";
}

$jex.extendClass(OnewayFilterCheckBoxUI, FilterCheckBoxUI);
OnewayFilterCheckBoxUI.prototype.update = function(c) {
    var b = c || this.dataSource();
    this.clear();
    var a = this.newid("chk");
    this.ownui().ownerList().setCheckBoxCache(a, this);
    this.text('<label for="' + a + '">');
    this.append("<input ", "chk");
    this.text(' type="checkbox" class="inp_chk" value="', b.value, '"');
    if (this.checked()) {
        this.text(' checked="checked" ');
    }
    this.text(" />" + b.name + "</label>");
};

function OnewayFilterUI(a) {
    OnewayFilterUI.superclass.constructor.call(this, a);
    this._type = "OnewayFilterUI";
}

$jex.extendClass(OnewayFilterUI, FilterUI);
OnewayFilterUI.prototype.addItem = function(f) {
    var g = f;
    var b = this._groups;
    var c = g.group || "default";
    var a = g.catalog + "|" + c + "|" + g.value;
    this.catalog(g.catalog);
    if (!b[c]) {
        b[c] = [];
    }
    var d = this._checkboxes[a];
    if (!d) {
        d = new OnewayFilterCheckBoxUI();
        d.ownui(this);
        d.checked(this.defaultCheck());
        d.dataSource(g);
        d.updateSource();
        this.bindEvent(d);
        this._checkboxes[a] = d;
        b[c].push(d);
    }
    if (b[c].length > 1) {
        this.visible(true);
    }
};
var HotSale = (function() {
    var b = { ps: "航班票量较少", hot: "一周内热门预订", lcc: "除商务经济座外，其他机票不提供免费餐饮，免<br/>费行李额度低，详情请咨询春秋航空：95524" };
    var d = -1, a = 100;
    var c = function(g, f) {
        var h = f.rate || 100;
        f.late = (h <= a && h < d);
    };
    return{
        init: function() { d = ConfigManager.getConfig("late"); },
        hotSaleInfo: function(g) {
            var f = g.extInfo() || {}, h = {};
            $jex.foreach(["hot", "ps", "late", "lcc"], function(j, i) {
                if (i == 2) {
                    c(g, f);
                }
                if (i == 3 && (typeof f[j] == "undefined")) {
                    f[j] = g.carrierCode() == "9C";
                }
                if (f[j]) {
                    h[j] = b[j];
                    if (i == 2) {
                        h[j] = "航班易晚点，近三个月该航班准点率" + f.rate + "%";
                    }
                    return $jex.$break;
                }
            });
            return h;
        },
        setMinLate: function(g) {
            var f = g.extInfo() || {};
            f.rate = 100;
        }
    };
})();

function BookingLockScreenUI(a) { BookingLockScreenUI.superclass.constructor.call(this, a); }

$jex.extendClass(BookingLockScreenUI, XControl);
BookingLockScreenUI.prototype.setEntity = function(a) { this.entity = a; };
BookingLockScreenUI.prototype.preBooking = function(f, b) {
    this.bFunc = f;
    this._vpr = 0;
    var d = this.entity, a = d.vType() !== undefined;
    price = (b === 1 && d.afeePrice()) ? d.afeePrice() : d.bprPrice(), priceInfo = typeof d.ownerFlight().priceInfo == "function" ? d.ownerFlight().priceInfo() : null;
    oprice = priceInfo ? priceInfo.op : Number.MAX_VALUE, attrs = [], carrierCode = d.ownerFlight().carrierCode();
    var c = d.typeOfCabin().indexOf("经济舱") > -1;
    if (d.isApplyPrice()) {
        if (a) {
            attrs.push("zyxapp");
        } else {
            attrs.push("app");
        }
    } else {
        if (d.ownerFlight().type == "onewayInTransfer") {
            if (a) {
                attrs.push("zyxtransfer");
            } else {
                attrs.push("transfer");
            }
        }
    }
    if (attrs.length > 0) {
        this.showDialog(attrs.join("+"));
    } else {
        f();
    }
};
BookingLockScreenUI.prototype.getMsgInfo = function(g) {
    var f = this.entity;
    var a = f.vPrice();
    var i = f.vAmount();
    var c = f.vName();
    var k = this._vpr || 0;
    var l = { app: { txt: "您所选购的是特殊机票产品，机票需要申请，申请成功后将短信通知您。" }, zyxapp: { txt: ["您购买的是自由行产品，包括机票和价值", a * i, "元（", a, "元*", i, "张）", c, "。机票需要申请，代理商将在申请成功后与您取得联系。"].join("") }, transfer: { txt: ['您预订的是中转联程票，请确定各段价格都有效再付款。为了保证您的权益请阅读<a href="http://www.qunar.com/site/zh/Multi-city.shtml?', new Date().getTime(), '" target="_blank">《中转联程票购买须知》</a>。'].join("") }, zyxtransfer: { txt: ["您所选购的是中转联程的自由行产品，包括机票和价值", a * i, "元（", a, "元*", i, "张）", c, '，请确定各段价格都有效再付款。为了保证您的权益请阅读<a href="http://www.qunar.com/site/zh/Multi-city.shtml?', new Date().getTime(), '" target="_blank">《中转联程票购买须知》</a>。'].join("") } };
    var m = l[g], b = /app/.test(g), j = /transfer/.test(g), d = /zyxapp/.test(g), h = /zyxtransfer/.test(g);
    m.className = "icon_apply";
    if (b) {
        m.note = '<div class="note">说明：申请机票是指需要代理商向航空公司申请的机票，由于数量有限，代理商对是否申请成功不做承诺。</div>';
    } else {
        if (j) {
            m.className = "icon_transfer";
            m.note = '<div class="note">说明：先确认各段机票价格均有效才能付款，避免某一航班无法预定带来的已购买航班处理的麻烦；每段行程都需要单独缴纳机场建设费和燃油税。</div>';
        } else {
            if (d) {
                magInfo.className = "icon_zyxapply";
                m.note = '<div class="note">说明：申请机票是指需要代理商向航空公司申请的机票，由于数量有限，代理商对是否申请成功不做承诺。</div>';
            } else {
                if (h) {
                    m.className = "icon_zyxtransfer";
                    m.note = '<div class="note">说明：申请机票是指需要代理商向航空公司申请的机票，由于数量有限，代理商对是否申请成功不做承诺。</div>';
                } else {
                    m.note = "";
                }
            }
        }
    }
    return m;
};
BookingLockScreenUI.prototype.showDialog = function(d) {
    $jex.event.trigger(this, "open");
    this.type = d;
    this.addStyleHTML();
    if (window.BookingScreenUI) {
        BookingScreenUI.closeMySelf();
    }
    var g = this.getContainerID();
    var f = this.dlg;
    f.innerHTML = "";
    var b = [];
    var c = this.getMsgInfo(d);
    b.push('<div class="p_layer_cont">');
    b.push('    <div style="width:440px;" class="layer_inner"> <a id="', g, '_close" href="javascript:void(0);" title="关闭" class="btn_close"></a> ');
    b.push('        <div class="e_tit_pop"></div>');
    b.push('        <div class="layer_cont">');
    b.push('            <div class="b_warn_pop_l clrfix">');
    b.push('                <div class="e_warn_ico"> <i class="ico_del_l"></i></div>');
    b.push('                <div class="e_warn_inf"><h3>', c.txt, "</h3>");
    b.push("                </div>");
    b.push("                </div>");
    b.push('                <div class="b_submit_pop_l"><a id="', g, '_continue" href="javascript:void(0);" class="btn btn_primary"><span><b>继续预订</b></span></a><a id="', g, '_cancel" href="javascript:void(0);" class="btn"><span><b>取　消</b></span></a></div>');
    b.push('                <div class="e_note">', c.note, "</div>");
    b.push("            </div>");
    b.push("        </div>");
    b.push("    </div>");
    $jex.lightbox.show(b.join(""));
    var a = ["&type=", d, "&act=lock", "&wrid=", (this.vendor.wr || this.vendor.wrid), "&wrname=", encodeURIComponent(this.vendor.name)];
    trackAction(a.join(""));
};
BookingLockScreenUI.prototype.setVendorInfo = function(b, a) {
    a.wr = b;
    this.vendor = a;
};
BookingLockScreenUI.prototype.closeDialog = function(c) {
    var b = c.target;
    while (b != document) {
        if (b.id == this.getContainerID() + "_close") {
            $jex.lightbox.hide();
            return;
        }
        if (b.id == this.getContainerID() + "_cancel") {
            $jex.lightbox.hide();
            var a = ["&type=", this.type, "&act=cancel", "&wrid=", this.vendor.wr || this.vendor.wrid, "&wrname=", encodeURIComponent(this.vendor.name)];
            trackAction(a.join(""));
            return;
        }
        if (b.id == this.getContainerID() + "_continue") {
            $jex.lightbox.hide();
            this.bFunc(this._vpr);
            var a = ["&type=", this.type, "&act=continue", "&wrid=", this.vendor.wr || this.vendor.wrid, "&wrname=", encodeURIComponent(this.vendor.name)];
            trackAction(a.join(""));
            return;
        }
        if (b.className == "lb_content") {
            return;
        }
        b = b.parentNode;
    }
    $jex.lightbox.hide();
    return;
};
BookingLockScreenUI.prototype.close = function() {};
BookingLockScreenUI.closeMySelf = function() {};
BookingLockScreenUI.prototype.addStyleHTML = function() {
    if (this.__ApplyScreenUI_addstyle == true) {
        return;
    }
    var a = document.createElement("div");
    a.id = this.getContainerID();
    a.style.position = "absolute";
    a.style.zIndex = "999999";
    a.style.width = "450px";
    a.style.height = "231px";
    document.getElementsByTagName("body")[0].appendChild(a);
    this.dlg = a;
    this.clickBind(this.closeDialog);
    this.__ApplyScreenUI_addstyle = true;
};
BookingLockScreenUI.prototype.getContainerID = function() {
    if (!this.containerID) {
        this.containerID = "__apply_screen_dialog_container__" + Math.floor(Math.random() * 1000000);
    }
    return this.containerID;
};
BookingLockScreenUI.prototype.clickBind = function(d) {
    var b = document;
    var c = this;
    var a = function(f) {
        if (!f.target) {
            f.target = f.srcElement;
        }
        d.call(c, f, this);
    };
    if (b.addEventListener) {
        b.addEventListener("click", a, false);
    } else {
        if (b.attachEvent) {
            b.attachEvent("onclick", a);
        }
    }
};
BookingLockScreenUI.prototype.openMark = function() {};
BookingLockScreenUI.prototype.closeMark = function() {};

function OnewayFlightUI(a) {
    OnewayFlightUI.superclass.constructor.call(this, a);
    this._type = "OnewayFlightUI";
    if (ConfigManager.getConfig("pageId") == "onewayDetail") {
        this._state = 1;
    }
}

$jex.extendClass(OnewayFlightUI, FlightUI);
OnewayFlightUI.prototype.getRwstat = function() { return new RcmdWrStatProvider(); };
OnewayFlightUI.prototype.avlistui = function() {
    if (!this._avlistui) {
        this._avlistui = new AVFlightVendorListUI();
        this._avlistui.owner(this);
    }
    return this._avlistui;
};
OnewayFlightUI.prototype.listui = function() {
    if (!this._listui) {
        this._listui = new OnewayFlightVendorListUI();
        this._listui.owner(this);
    }
    return this._listui;
};
OnewayFlightUI.prototype._getStaticUI = function(b) {
    var c = [], d = b;
    c.push('<div class="c0">');
    c.push('<div class="a_logo"><img width="16" height="16" title="', d.carrier().full, '" alt="', d.carrier().full, '" src="http://simg1.qunarzz.com/site/images/airlines/small/', d.carrier().key, '.gif"></div>');
    c.push("</div>");
    c.push('<div class="c1">');
    var a = FlightUtil.codePatch(d.code());
    c.push('    <div class="a_name">', d.carrier().zh, a.indexOf("/") > 0 ? "<br/>" : "", "<strong>", a, "</strong></div>");
    c.push('    <div class="a_model">', d.plane().full);
    c.push('<span class="lnk_sta">');
    if (d.stopover()) {
        c.push('<em title="该航班是经停航班" class="lnk_a">经停</em>');
    }
    var g = d.codeShare(), f = d.codeShareFlight();
    if (g && f) {
        c.push('<em title="实际乘坐航班：', f.carrier().zh, g, '" class="lnk_a">共享</em>');
    }
    c.push("</span>");
    c.push("</div>");
    c.push("</div>");
    c.push('<div class="c2">');
    c.push('    <div class="a_tm_dep">', d.deptTime(), "</div>");
    if (d.stopover() && d.stops() == 1 && d.spCity()) {
        c.push('<div class="a_tm_jt">&nbsp;</div>');
    }
    c.push('    <div class="a_tm_arv">', d.arriTime());
    if (d.isNextDate()) {
        c.push('<i class="i_1day" title="到达时间为第2天：', d.arriDate(), '"></i>');
    }
    c.push("</div>");
    c.push("</div>");
    c.push('<div class="c3">');
    c.push('    <div class="a_lacal_dep">', d.deptAirport().ab, d.dptTower(), "</div>");
    if (d.stopover() && d.stops() == 1 && d.spCity()) {
        c.push('<div class="a_lacal_jt"><span', d.spInfo().setTitle, ">经停&nbsp;", d.spInfo().sTitle, "</span></div>");
    }
    c.push('    <div class="a_local_arv">', d.arriAirport().ab, d.arrTower(), "</div>");
    c.push("</div>");
    c.push('<div class="c4">', d.quasipointRateHTML(), "</div>");
    this._html = c.join("");
    return this._html;
};
OnewayFlightUI.prototype.update = function(a) {
    var b = a;
    this.entity = b;
    this.clear();
    this._homeNode = null;
    this.append("<div", "itemBar", ' class="avt_column');
    if (this.state()) {
        this.text(" avt_column_on ");
    }
    this.text('">');
    this.text('<div class="b_avt_lst">');
    this.text(this._getStaticUI(b));
    this.append("<div", "recommandWrapper", 'class="c5">');
    this.insert_recommandWrapper(b);
    this.text("</div>");
    this.append("<div", "lowPrice", ' class="c6">');
    this.text(this.getPriceInfoHTML(b));
    this.text("</div>");
    this.text('<div class="c7">');
    this.insertSaleAndCabin(b);
    this.text("</div>");
    this.insertBookingBtn(b);
    this.insert_recommandZyf(b);
    this.text("</div>");
    this.updateVendors(a);
    this.text("</div>");
    this.onInit(function() { $jex.hover({ act: this.find("itemBar"), onmouseover: function(c) { $jex.addClassName(this, "avt_column_hover"); }, onmouseout: function(c) { $jex.removeClassName(this, "avt_column_hover"); } }); });
};
OnewayFlightUI.prototype.updateLowestPrice = function() { this.find("lowPrice").innerHTML = this.getPriceInfoHTML(this.entity); };
OnewayFlightUI.prototype.getPriceInfoHTML = function(c) {
    var b = c.lowestPrice();
    if (b && b == this._lastPrice) {
        return this._lastPriceHTML;
    }
    this._lastPrice = b;
    var a = [];
    if (b && b != 100000) {
        a.push('<div class="a_low_prc">', Price_html.getHTML(b), '<i class="rmb">&yen;</i></div>');
        a.push('<div class="a_low_dsc">', PriceUtil.getOneWayDiscount(c.lowestDiscount()), "</div>");
    } else {
        a.push('<div class="nopr"><div>暂无报价</div></div>');
    }
    this._lastPriceHTML = a.join("");
    return this._lastPriceHTML;
};
OnewayFlightUI.prototype.insertSaleAndCabin = (function() {
    var c = ["hot", "ps", "late", "lcc"], a = ["i_org_hot", "i_org_hot", "dot_gy", "dot_gy"], b = ["热门", "票少", "易晚点", "廉航!"];
    return function(j) {
        var k = !this._sinfoHTML;
        if (!this.sinfoCache) {
            var h = HotSale.hotSaleInfo(j), f = [];
            this.sinfoCache = h;
            for (var d = 0; d < 4; d++) {
                if (h[c[d]]) {
                    f.push('<div class="a_pct">');
                    if ($jex.ie == 6) {
                        f.push('<i class="', a[d], '" title="', h[c[d]], '">', b[d], "</i>");
                    } else {
                        f.push('<i class="', a[d], '">', b[d], "</i>");
                        f.push(this._getTipHTML(h[c[d]]));
                    }
                    f.push("</div>");
                    k = false;
                    break;
                }
            }
            this._sinfoHTML = f.join("");
        }
        if (this._sinfoHTML) {
            this.text(this._sinfoHTML);
        }
        if (!j.isAV()) {
            var g = j.priceInfo();
            if (g && g.tc) {
                if (~g.tc.indexOf("头等")) {
                    k = false;
                    this.text('<div class="t_st"><i class="i_fst_cls">头等舱</i></div>');
                } else {
                    if (~g.tc.indexOf("公务")) {
                        k = false;
                        this.text('<div class="t_st"><i class="i_fst_bsn">商务舱</i></div>');
                    }
                }
            }
        }
        if (k) {
            this.text("&nbsp");
        }
    };
})();
OnewayFlightUI.prototype._getTipHTML = function(a) { return['<div class="p_tips_cont"><div class="p_tips_wrap"> <div class="p_tips_arr p_tips_arr_t"> <p class="arr_o">◆</p><p class="arr_i">◆</p></div> <div class="p_tips_content"> <p>', a, "</p> </div> </div> </div>"].join(""); };
OnewayFlightUI.prototype.insertBookingBtn = function(a) {
    var b = a;
    this.text('<div class="c8"><div class="a_booking">');
    if (b.lowestPrice()) {
        this.append("<a", "openwrapperbtn", ' data-evtDataId="' + this.newid("") + '"  hidefocus="on" onfocus="this.blur();" title="点击查看订票网站" href="#" class="btn_book"><span><b>订&nbsp;&nbsp;票</b></span></a>');
    } else {
        if (b.extInfo()) {
            this.append('<p class="c_vmore"><a', "openwrapperbtn", ' data-evtDataId="' + this.newid("") + '" onfocus="this.blur();"  href="#">详&nbsp;&nbsp;细</a></p>');
        }
    }
    this.text("</div></div>");
};
OnewayFlightUI.prototype.insert_recommandZyf = function(d) {
    var g = d;
    var c = g.commInfoMgr().get("zyfData") || [], j = g.flightInfoMgr(), i = "/zyf/?";

    function b(q, s, p) {
        var t = null;
        var u = g.lowestPrice();
        for (var o = 0, m = c.length; o < m; o++) {
            t = c[o];
            var n = parseInt(t.tPrice, 10);
            var k = n - u;
            if (t.airline === q && t.dpt === s && t.arr === p && k <= 0) {
                return t;
            }
        }
        return null;
    }

    var f = j.getZYFReference(g.code());
    if (!f && !j.getZYFAirlines(g.carrierCode())) {
        f = b(g.carrierCode(), g.deptAirportCode(), g.arriAirportCode());
    }
    if (f) {
        var h = !(g.lowestPrice() == null);
        var a = [i, "client=", f.client, "&policyId=" + (f.policyId || 0), "&price=", (h ? g.lowestPrice() : ""), "&dptDate=" + g.deptDate(), "&from=flightlist_", f.client].join("");
        this.text('<div class="c_zyf" data-carrier="', g.carrier().key, '">');
        this.append("<a", "js-zfy", "");
        this.text('target="_blank" href="', a, '">', f.text || "", "</a></div>");
        if (!j.getZYFReference(g.code())) {
            j.addZYFReference(g.code(), f);
        }
        if (!j.getZYFAirlines(g.carrierCode())) {
            j.addZYFAirlines(g.carrierCode(), 1);
        }
        this.onInit(function() { $jex.event.bind(this.find("js-zfy"), "click", function() { TsinghuaOneWayTracker.trackZFY(f, g); }); });
    }
};
OnewayFlightUI.prototype.updateVendors = function(a) {
    this.append("<div", "vendorlist", "");
    if (!this.state()) {
        this.text(' style="display:none;" ');
    }
    this.text(">");
    var b = this.vendorListUI();
    if (this.state()) {
        b.dataSource(a);
        b.updateSource();
        this.append("", b, "");
    }
    this.text("</div>");
};
OnewayFlightUI.prototype.isAV = function() { return this.dataSource().isAV(); };
OnewayFlightUI.prototype.vendorListUI = function() {
    var a = this.isAV() ? this.avlistui() : this.listui();
    return a;
};
OnewayFlightUI.prototype.renderVendorPanel = function() {
    var a = this.vendorListUI();
    a.update(this.dataSource());
    a.render(this.find("vendorlist"));
};
OnewayFlightUI.prototype.changeWrapperTypeList = function(a) {
    if (this.state() == 0) {
        return;
    }
    PAGE_EVENT.trigger("wrapper_list_close", this.dataSource());
    this.dataSource().setWrapperListType(a);
    this._isUserClick = true;
    this.renderVendorPanel();
    this._isUserClick = false;
};
OnewayFlightUI.prototype.openBtnClickEvent = function() {
    var a = this;
    HoldLastShowFlight.clearLast();
    LockScreen(function() { SingletonUIManager.register("flight", a, function() { a.toggleVendorPanel(); }, function() { a.hideVendorPanel(); }); });
};
OnewayFlightUI.prototype.toggleVendorPanel = function() {
    if (this.state() === 0) {
        System.service.genTraceTimeStamp();
        System.analyzer.triggerTrace = true;
        this.dataSource().setWrapperListType("all");
        this.showVendorPanel();
        $jex.event.trigger(this, "open");
    } else {
        this.hideVendorPanel();
    }
};
OnewayFlightUI.prototype.showVendorPanel = function() {
    this.moveToFirst();
    this.renderVendorPanel();
    $jex.addClassName(this.find("itemBar"), "avt_column_on");
    $jex.element.show(this.find("vendorlist"));
    $jex.event.trigger($jex.$("hdivResultPanel"), "fem_openWrapperList");
    this.state(1);
};
OnewayFlightUI.prototype.hideVendorPanel = function() {
    if (this.state() === 0) {
        return;
    }
    $jex.element.hide(this.find("vendorlist"));
    $jex.removeClassName(this.find("itemBar"), "avt_column_on");
    $jex.event.trigger($jex.$("hdivResultPanel"), "fem_closeWrapperList");
    this.listui().reset();
    this.state(0);
    PAGE_EVENT.trigger("wrapper_list_close", this.dataSource());
    $jex.event.trigger(this, "close");
};
OnewayFlightUI.prototype.insert_recommandWrapper = function(c, j) {
    c = c || this.entity;
    var i = this;
    if (j) {
        this.clear();
    }
    if (!j && this.isAV()) {
        this.text("&nbsp;");
        return;
    }
    var g = this.reWrCache, k = c.getRecommandWrapper() || g;
    if (!k) {
        this.text("&nbsp;");
        return;
    }
    this.reWrCache = k;
    var b = k.entity, f = b.afeePrice() || b.bprPrice(), a = b.dataSource();
    var d = b.isADVendor() ? a.proPayName : a.proName;
    this.text('<p class="a_rtlst">');
    this.append('<a hidefocus="on" href="javascript:;" ', "reWrBtn", '  data-evtDataId="' + this.newid("") + '"  >');
    this.text(d, "</a></p>");
    this.text('<p class="a_rtlst">');
    this.append('<a hidefocus="on" href="javascript:;"', "reWrBtnXI0", '  data-evtDataId="' + this.newid("") + '"  >');
    this.text('<span class="rcpr"><i class="rmb">&yen;</i><b>', f, "</b></span>");
    if (b.dataSource().proBooking) {
        this.text("&nbsp;直接订");
    }
    this.text("</a></p>");
    if (b.isOta()) {
        this.append("<div", "reCommOtaTip", ' class="p_tips_cont" style="display:none;">');
        this.text('<div class="p_tips_wrap" style="left:-93px;top:3px;">', '<div class="p_tips_arr p_tips_arr_t" style="left:153px;"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>', '<div class="p_tips_content">', '<p><span class="fb">出票迅速：</span>支付后极速出票</p>', '<p><span class="fb">报销无忧：</span>起飞后可邮寄行程单', '<p><span class="fb">服务优先：</span>7*24小时全天候服务</p>', "</div>", "</div>", "</div>");
        if (!j) {
            this.onInit(function() { this.onInit(function() { h(); }); });
        }
    }
    if (j) {
        this.find("recommandWrapper").innerHTML = this.toString();
        if (b.isOta()) {
            h();
        }
    }

    function h() {
        var n = i.find("reWrBtnXI0");
        var l = i.find("reWrBtn");
        var m = i.find("reCommOtaTip");
        $jex.hover({ act: n, onmouseover: function() { m.style.display = "block"; }, onmouseout: function() { m.style.display = "none"; } });
        $jex.hover({ act: l, onmouseover: function() { m.style.display = "block"; }, onmouseout: function() { m.style.display = "none"; } });
    }
};
var RcmdWrStatProvider = function() {};
RcmdWrStatProvider.prototype.value = function() { return"000002"; };

function AVFlightVendorListUI(a) {
    AVFlightVendorListUI.superclass.constructor.call(this, a);
    this._type = "AVFlightVendorListUI";
    var b = null;
    this.owner = function(c) {
        if (c == null) {
            return b;
        } else {
            b = c;
        }
    };
    this.extui = new FlightInfoExtBarUI();
}

$jex.extendClass(AVFlightVendorListUI, XControl);
AVFlightVendorListUI.prototype.update = function(a) {
    this.clear();
    this.text('<div class="b_qvt_lst">');
    this.text('<div class="qvt_arr_t"><p class="arr_o"></p><p class="arr_i"></p></div>');
    this.extui.dataSource(a);
    this.extui.updateSource();
    this.text('<div class="c_fly">');
    this.append("", this.extui, "");
    this.text("</div>");
    this.text("</div>");
};

function OnewayFlightVendorListUI(a) {
    OnewayFlightVendorListUI.superclass.constructor.call(this, a);
    this._type = "OnewayFlightVendorListUI";
    var b = null;
    this.owner = function(d) {
        if (d == null) {
            return b;
        } else {
            b = d;
        }
    };
    var c = null;
    this.dataSource = function(d) {
        if (d == null) {
            return c;
        } else {
            c = d;
        }
    };
    this.extui = new FlightInfoExtBarUI();
    this.extui.wrapperList(this);
    this.wrlistUI = new OnewayFlightWrapperListUI();
    this.wrlistUI.ownerVendorListUI(this);
    this.mainWrlistUI = new OnewayFlightWrapperListUI();
    this.mainWrlistUI.ownerVendorListUI(this);
    this.mainWrlistUI.isMainFlight(true);
    UICacheManager.addToCache(this);
}

$jex.extendClass(OnewayFlightVendorListUI, XControl);
OnewayFlightVendorListUI.prototype.reset = function() {
    this.wrlistUI.resetInvokeData();
    this.mainWrlistUI.resetInvokeData();
};
OnewayFlightVendorListUI.prototype.update = function(c) {
    var h = c, f = h.codeShare(), d = h.codeShareFlight();
    h._shareFlight = null;
    if (f && d) {
        var g = h.carrierCode();
        var b = d.carrierCode();
        d.setWrapperListType(c.getWrapperListType());
        d._shareFlight = h;
        this.wrlistUI.applyShareCodeRule(g, b);
        var a = this.mainWrlistUI.applyShareCodeRule(g, b);
        if (a) {
            this.onInit(function() { $jex.element.show(this.find("hdivCS")); });
        }
    }
    this.clear();
    this.insertExtInfo(c);
    this.text('<div class="b_qvt_lst">');
    this.text('<div class="qvt_arr_t"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>');
    this.insertVendorTypeChange(c);
    this.wrlistUI.dataSource(c);
    this.wrlistUI.updateSource();
    this.wrlistUI.placeHolder();
    this.wrlistUI.insert_footer(c);
    if (f && d) {
        this.append("<div ", "hdivCS", ' class="mainFlist" style="display:none;z-index:2;position: relative;">');
        this.text('<div class="qvt_col_more qvt_col_more_hover">该航班为代码共享航班，主飞航班为<span class="hl">', d.carrier().zh, f, "</span>，参考报价如下：</div>");
        this.mainWrlistUI.dataSource(h.codeShareFlight());
        this.mainWrlistUI.updateSource();
        this.mainWrlistUI.placeHolder();
        this.text("</div>");
    }
    this.text('<div class="qvt_col_hide">');
    this.append("<a ", "btnHide", '  data-evtDataId="' + this.newid("") + '" class="lnk_more lnk_more_hd"  href="##">隐藏报价<i class="ico_down"></i></a>');
    this.text("</div>");
    this.text("</div>");
    this.append("<div", "extAd_panel", ' class="extAD"></div>');
    this.onInit(function() {
        var i = this;
        clearTimeout(i._ad_timer);
        i._ad_timer = setTimeout(function() {
            var j = i.newid("extAd");
            var k = i.find("extAd_panel");
            if (k) {
                k.innerHTML = '<iframe id="' + j + '" querystring="chan=flight&pg=list&pos=mid&site=qunar&size=728x90" scrolling="no" frameborder="0" height="0" width="100%" src="/site/adframe/ad.html#' + j + '#now"></iframe>';
            }
        }, 100);
    });
};
OnewayFlightVendorListUI.prototype.insertExtInfo = function(a) {
    if (a.extInfo()) {
        this.extui.dataSource(a);
        this.extui.updateSource();
        this.text('<div class="c_fly">');
        this.append("", this.extui, "");
        this.text("</div>");
    }
};
OnewayFlightVendorListUI.prototype.updateLowerPriceShow = function(d, g) {
    var f = this.owner().newid("");
    var a = new UIObject();
    var b = d.getWrapperListType("all");
    var h = function(l, k, n, m) {
        a.append("<li ", "js_ctype-" + l, "");
        a.text('data-ctype="', l, '" data-evtDataId="' + f + '" ');
        a.text(b == l ? ' class="cur">' : ">", n);
        a.append("<span", "js-" + l + "_lpr", ">");
        a.text('(<a href="##" class="q_prc"><i class="rmb">¥</i>', k, "</a>起)");
        a.text("</span>", m ? "" : '<em class="sep_line">|</em>', "</li>");
    };
    a.text("<ul>");
    var c = [], i = [];
    $jex.foreach(["all", "s", "bf"], function(l) {
        var k = d.getLowpr(l);
        if (k) {
            c.push(l);
            i.push(k);
        }
    });
    this.tabsCache = { show: c, price: i, tab: b };
    var j = { all: "全部报价", s: "商旅优选", bf: "头等/商务舱" };
    $jex.foreach(c, function(l, k) { h(l, i[k], j[l], k == c.length - 1); });
    a.text("</ul>");
    if (g) {
        a.write(this.find("js-vType_wrap"));
    }
    return a;
};
OnewayFlightVendorListUI.prototype.insertVendorTypeChange = function(a) {
    this.append("<div ", "js-vType_wrap", ' class="e_qvt_hd">');
    if (a.priceInfo()) {
        var b = this.updateLowerPriceShow(a);
        b && this.append("", b, "");
    }
    this.text("</div>");
};

function WrapperListUI(b) {
    WrapperListUI.superclass.constructor.call(this, b);
    var a = null;
    this.ownerVendorListUI = function(c) {
        if (c == null) {
            return a;
        } else {
            a = c;
        }
    };
    this.placeHolderId = this.newid("wrlistPH");
    this._wrUIcache = {};
}

$jex.extendClass(WrapperListUI, XControl);
WrapperListUI.prototype.placeHolder = function() {
    var a = this.ownerVendorListUI();
    a.append("<div", this.placeHolderId, ' style="z-index:3;zoom:1;position:relative;">');
    a.append("", this, "</div>");
};
WrapperListUI.prototype.getHolder = function() {
    var a = this.ownerVendorListUI();
    return a.find(this.placeHolderId);
};
WrapperListUI.prototype.update = function(a) { this.updateSourceEntity(a); };
WrapperListUI.prototype.filterWrappers = function(b, a) { return b; };
WrapperListUI.prototype.getSortKey = function() { return this._sortType; };
WrapperListUI.prototype.setSortKey = function(a) { return this._sortType = a; };
WrapperListUI.prototype.flushRendor = function() { this.render(this.getHolder()); };
WrapperListUI.prototype.updateSourceEntity = function(g, a) {
    this.clear();
    clearTimeout(this._drawTimer);
    var q = this;
    var n = g.wrappers();
    n.update();
    var m = n.sort(this.getSortKey());
    m = q.filterWrappers(m, n, g);
    var o = 9;
    var l = Math.ceil(m.length / o);
    var f = 0, d = m.length, c = 0;
    var p = m.length + 100;
    this.firstIndex = p;
    this.zIndex = p;
    var b = false;
    g.hasShownInsTip = false;
    if (g.transShownInsTip) {
        g.hasShownInsTip = true;
    }
    var k = function(i) {
        if (!i) {
            q.clear();
        }
        var s = (c + 1) * o;
        for (; f < s && f < d; f++) {
            var j = n.get(m[f]);
            if (!j) {
                $jex.console.error("[WrapperListUI update] 找不到指定的wrapperEntity, key:", m[f], q);
                return $jex.$continue;
            }
            if (!g.hasShownInsTip && j.afeeInsSum() && j.afeePrice() && !j.isNotWork() && !(j.coupon() > 0 && j.bprPrice())) {
                g.hasShownInsTip = true;
                j.showInsTip(true);
            }
            q._addWrapperUI(g, j, f);
        }
        if (!i) {
            q.render(q.find("js-wlist_" + c));
        }
        c++;
        b = c < l;
        if (!i && b) {
            q._drawTimer = setTimeout(function() { k(); }, 10);
        }
    };
    clearTimeout(this._drawTimer);
    k(true);
    this._drawMoreWrapper = function() {
        if (b) {
            q._drawTimer = setTimeout(function() { k(); }, 10);
        }
        this._drawMoreWrapper = null;
    };
    for (var h = 0; h < l; h++) {
        this.append('<div class="e_qvt_bd" ', "js-wlist_" + h, "></div>");
    }
    $jex.console.end("[WrapperListUI update] addwrappers");
    $jex.console.trace("[WrapperListUI update] addwrappers 个数：" + n.size());
    $jex.console.trace("[WrapperListUI update] addwrappers 传送个数：" + n._size);
    if (a) {
        this.onInit(function() { this.ownerVendorListUI().updateLowerPriceShow(g, true); });
    }
    this._traceWrappers(g);
};
WrapperListUI.prototype._traceWrappers = function(a) { TsinghuaOneWayTracker.trackWrappers(a); };
WrapperListUI.prototype.eachWrappers = function(a) { $jex.foreach(this._wrUIcache, function(b) { a(b); }); };
WrapperListUI.prototype.createWrapperUI = function() { $jex.console.error("请替换该方法, WrapperListUI.prototype.createWrapperUI"); };
WrapperListUI.prototype._addWrapperUI = function(c, b, a) {
    var d = c.key() + "^" + b.key();
    var f = this._wrUIcache[d];
    if (!f) {
        f = this.createWrapperUI(c, b, a);
        f.ownerListUI(this);
        this._wrUIcache[d] = f;
    }
    if (f && f.stat && f.stat.position) {
        f.stat.position(a + 1);
    }
    f.updateSource(b);
    this.append("", this._wrUIcache[d], "");
};

function OnewayFlightWrapperListUI(b) {
    OnewayFlightWrapperListUI.superclass.constructor.call(this, b);
    this._type = "OnewayFlightWrapperListUI";
    var a = false;
    this.isMainFlight = function(c) {
        if (c == null) {
            return a;
        } else {
            a = c;
        }
    };
    this.invokeDataStatus = 0;
    this.enableShareCode = false;
    this.adVendorCount = 0;
    UICacheManager.addToCache(this);
}

$jex.extendClass(OnewayFlightWrapperListUI, WrapperListUI);
OnewayFlightWrapperListUI.prototype.updateSourceEntity = function(a) { OnewayFlightWrapperListUI.superclass.updateSourceEntity.call(this, a, !this.isMainFlight()); };
OnewayFlightWrapperListUI.prototype.resetInvokeData = function() { this.invokeDataStatus = 0; };
OnewayFlightWrapperListUI.prototype.createWrapperUI = function(c, b, a) {
    if (b.vType() !== undefined) {
        return new ZiyouxingOnewayFlightWrapperUI();
    }
    if (c.type && c.type == "compose") {
        return new TransPackageFlightWrapperUI();
    } else {
        return new OnewayFlightWrapperUI();
    }
};
OnewayFlightWrapperListUI.prototype.getMaxCount = function(c) {
    var b = ConfigManager.getConfig("pageId") == "onewayDetail";
    if (b) {
        return 10000000;
    }
    var f = 18;
    var d = c.carrier();
    var a = d ? (d.maxvendors || f) : f;
    return a;
};
OnewayFlightWrapperListUI.prototype.insert_footer = function(a) {
    var d = a.getWrapperListType();
    var b = a.getLowpr(d), c = a.getHipr(d);
    var f = a.getWrlen(d);
    if (f > 1) {
        this.text('<div class="qvt_col_more qvt_col_more_hover">');
        this.append("<a ", "gotoDetail", 'data-evtdataid="' + this.newid("") + '" data-gotype= nowType  hidefocus="true" class="lnk_more" href="##">所有报价<i class="ico_arr_more"></i></a>');
        this.text("共有", f, "个代理商报价");
        if (b) {
            this.text("，报价");
            if (b != c) {
                this.text("范围 ");
            }
            this.text('<i class="rmb">&yen;</i>', b);
            if (c && b != c) {
                this.text(' ~ <i class="rmb">&yen;</i>', c);
            }
        }
        this.text("</div>");
    }
};
OnewayFlightWrapperListUI.prototype.getWrapperFormEntity = function(c) {
    var b = this, f = c.key();
    clearTimeout(this._drawTimer);
    clearTimeout(this._ladingTimer);
    this._drawMoreWrapper = null;
    var d = 0;
    var g = this.ownerVendorListUI().owner()._isUserClick;
    var a = this.ownerVendorListUI().owner()._openBtnClick;
    PAGE_EVENT.trigger("wrapper_list_open", c);
    c.getCurWrapperList({
        isUserClick: g,
        isMainFlight: this.isMainFlight(),
        loading: function() {
            d = (new Date()).valueOf();
            $jex.console.start("航班价格接口调用[" + f + "]");
            b.loadingPanel(c);
        },
        loadBack: function() {
            b.updateSourceEntity(c);
            if (c.getWrapperListType() == "all") {
                TsinghuaOneWayTracker.trackLowPrChange(c, 0);
            }
            var j = c.wrappers();
            if (j.wrapperLength() === 0) {
                TsinghuaOneWayTracker.noWrapperList(c);
            }
            c.lowestPrice(c.priceInfo().lowpr);
            if (c.type === "oneway") {
                DomesticOnewayDataAnalyzer.lowestOneway(c);
            } else {
                if (c.type === "compose") {
                    DomesticOnewayDataAnalyzer.lowestCompose(c);
                }
            }
            b.ownerVendorListUI().owner().updateLowestPrice();
            b.ownerVendorListUI().owner().insert_recommandWrapper(undefined, true);
            $jex.event.trigger(PAGE_EVENT, "lowPriceChange");
            b.insert_footer(c);
            clearTimeout(b._ladingTimer);
            var h = (new Date()).valueOf() - d;
            var i = a ? 0 : 250;
            if (h < i) {
                b._ladingTimer = setTimeout(function() {
                    b.render(b.getHolder());
                    b._drawMoreWrapper && b._drawMoreWrapper();
                }, i - h);
            } else {
                b.render(b.getHolder());
                b._drawMoreWrapper && b._drawMoreWrapper();
            }
            $jex.console.end("航班价格接口调用[" + f + "]");
        },
        callBack: function() {
            $jex.console.start("航班价格缓存调用[" + f + "]");
            c.syncCurrentFlightCode();
            b.updateSourceEntity(c);
            b._drawMoreWrapper && b._drawMoreWrapper();
            $jex.console.end("航班价格缓存调用[" + f + "]");
        }
    });
};
OnewayFlightWrapperListUI.prototype.update = function(a) {
    this.clear();
    this.getWrapperFormEntity(a);
};
OnewayFlightWrapperListUI.prototype.applyShareCodeRule = function(b, a) {
    this.enableShareCode = true;
    if (this.isMainFlight()) {
        this.filterWrappers = OnewayFlightWrapperListUI.filterWrappers_mainCode;
    } else {
        this.filterWrappers = OnewayFlightWrapperListUI.filterWrappers_shareCode;
    }
    return this.enableShareCode;
};
OnewayFlightWrapperListUI.prototype.cancelShareCodeRule = function(b, a) { this.enableShareCode = false; };
OnewayFlightWrapperListUI.prototype.loadingPanel = function(a) { this.text('<div class="qvt_loadding"><img style="text-align:center;" src="http://simg1.qunarzz.com/site/images/new_main/m_loading.gif" /></div>'); };
OnewayFlightWrapperListUI.filterWrappers_shareCode = function(f, d, c) {
    if (!this.enableShareCode) {
        return f;
    }
    if (ConfigManager.getConfig("pageId") == "onewayDetail") {
        return f;
    }
    var b = [];
    var a = ConfigManager.getConfig("OnewayListShareConfig", "shareCodeNum");
    $jex.foreach(f, function(h) {
        var g = d.get(h);
        if (!g.isNotWork()) {
            b.push(h);
            if (b.length === a) {
                return $jex.$break;
            }
        }
    });
    this._insertLowestPrice(c, b);
    return b;
};
OnewayFlightWrapperListUI.prototype._insertLowestPrice = function(a, b) {
    var d = a;
    var c = d.lowestWrapperIds()[0];
    var f = d.lowestBprWrapperIds()[0];
    this._pushLowestPrice(a, b, c);
    if (c === f) {
        return;
    }
    this._pushLowestPrice(a, b, f);
};
OnewayFlightWrapperListUI.prototype._pushLowestPrice = function(a, b, d) {
    var c = a;
    if ($jex.array.indexOf(b, d) < 0 && c.wrappers().get(d)) {
        b.push(d);
    }
};
OnewayFlightWrapperListUI.filterWrappers_mainCode = function(c, b) {
    if (ConfigManager.getConfig("pageId") == "onewayDetail") {
        return c;
    }
    var a = ConfigManager.getConfig("OnewayListShareConfig", "mainCodeNum");
    c = (a && a < c.length) ? c.slice(0, a) : c;
    return c;
};
OnewayFlightWrapperListUI.clearWrappers_notwork = function(d, c, b) {
    var a = [];
    $jex.foreach(d, function(g) {
        var f = c.get(g);
        if (!f.isNotWork()) {
            a.push(g);
        }
    });
    if (b) {
        a = a.slice(0, b);
    }
    return a;
};

function OnewayFlightWrapperUI(a) {
    OnewayFlightWrapperUI.superclass.constructor.call(this, a);
    this._type = "OnewayFlightWrapperUI";
    this.starUI = new OnewayStarRankUI();
    this.starUI.ownerWrapperUI(this);
    this._itemClass = "qvt_column";
    UICacheManager.addToCache(this);
}

$jex.extendClass(OnewayFlightWrapperUI, WrapperUI);
OnewayFlightWrapperUI.prototype.update = function(h) {
    var d = h;
    this.specWR = d.bigLogoUrl();
    var c = d.vendor().isSuperOTA();
    this.clear();
    this.bookingScreenUI.setVendorInfo(d.wrapperId(), d.vendor().dataSource());
    this.bookingLockScreenUI.setEntity(d);
    this.bookingLockScreenUI.setVendorInfo(d.wrapperId(), d.vendor().dataSource());
    this.insert_HEADER(d);
    var g = this.ownerListUI().zIndex, a = this.ownerListUI().firstIndex;
    this.append("<div", "flightbar", "");
    this.text(' data-evtDataId="', this.newid(""), '" class="', this._itemClass, a == g ? " qvt_column_first" : "", '">');
    this.zIndex = this.ownerListUI().zIndex;
    this.ownerListUI().zIndex--;
    this._insertH3(h);
    var b = $jex.array.indexOf(ConfigManager.getConfig("AirlineDirectSelling"), d.wrapperId()) > -1;
    this.text('<div class="v3 ' + (b ? "v3_np" : "") + '">');
    if (d.isOta()) {
        this.insertOta(d);
    } else {
        if (b) {
            this.insertAirlineDirectSelling();
        } else {
            this.insert_Services(d);
        }
    }
    this.text("</div>");
    this.text('<div class="v4">');
    var f = 0;
    if (d.getTGQInfo()) {
        f = 1;
        this.append("<div", "js-stopClick", ' class="t_st">');
        this.append('<span class="dot_gy"', "tgq", ">退改签</span>");
        this.insert_TGQ(d);
        this.text("</div>");
    }
    if (d.hasAgeLimit() && d.vendor().isOffical()) {
        this.text('<i class="i_yao_pre">青老年优惠</i>');
    } else {
        if (d.hasAgeLimit()) {
            this.append("<div", "js-stopClick", ' class="t_st">');
            this.append('<span class="dot_gy"', "ageLimit", ">年龄限制</span>");
            this.insertAgeLimit(d);
            this.text("</div>");
        }
    }
    if (c && !d.isApplyPrice()) {
        f = 1;
        this.text('<div class="t_st">');
        if ($jex.ie == 6) {
            this.text('<i title="提供足额行程单，推荐商旅用户使用。" class="i_bns_tvl">商旅优选</i>');
        } else {
            this.text('<i class="i_bns_tvl">商旅优选</i>');
            this.text(this._getTipHTML("提供足额行程单，推荐商旅用户使用。"));
        }
        this.text("</div>");
    }
    if (d.isFCabin()) {
        f = 1;
        this.text('<div class="t_st"><i class="i_fst_cls">头等舱</i></div>');
    } else {
        if (d.isBCabin()) {
            f = 1;
            this.text('<div class="t_st"><i class="i_fst_bsn">商务舱</i></div>');
        }
    }
    if (f === 0) {
        this.text("&nbsp");
    }
    this.insert_AirchinaCoupon(d);
    this.text("</div>");
    this.insert_PRICE(d);
    this.text('<div class="v7">');
    this.insert_BOOKING_BUTTON(d);
    this.text("</div>");
    this.text("</div>");
    this._bindHoverEvent(d);
    this._bindOnInitEvent(d);
};
OnewayFlightWrapperUI.prototype.insert_AirchinaCoupon = function(a) {
    var b = a;
    if (b.coupon() > 0 && (typeof a.vendor === "function" && a.vendor().rebateTye() !== "RM")) {
        this.text('<div class="t_ofc_sep" >');
        this.text('    <p class="direct_red">', this.getRebateText(a), b.coupon(), "元</p>");
        this.text("</div>");
    }
};
OnewayFlightWrapperUI.prototype.getRebateText = function() {
    var a = { "1": "官网特惠直减", "2": "优惠码直减", "3": "折上再减" };
    return function(b) { return a[b.cat()] || ""; };
}();
OnewayFlightWrapperUI.prototype._getTipHTML = function(a) { return['<div class="p_tips_cont"><div class="p_tips_wrap"> <div class="p_tips_arr p_tips_arr_t"> <p class="arr_o">◆</p> <p class="arr_i">◆</p> </div> <div class="p_tips_content"> <p>', a, "</p> </div> </div> </div>"].join(""); };
OnewayFlightWrapperUI.prototype._bindHoverEvent = function(b) {
    if ($jex.ie != 6) {
        return;
    }
    var a = b;
    this.onInit(function() {
        var c = this.find("flightbar");
        $jex.hover({ act: c, onmouseover: function(d) { $jex.addClassName(c, "qvt_column_hover"); }, onmouseout: function(d) { $jex.removeClassName(c, "qvt_column_hover"); } });
    });
};
OnewayFlightWrapperUI.prototype._bindOnInitEvent = function(c) {
    var b = c;
    var a = this;
    this.onInit(function() {
        a.loadedTgq = false;
        var f = this.find("tgq"), d = false;
        var h = b.getTGQInfo();

        function i() {
            var k = "/twell/flight/getTGQ.jsp";
            var n = b.ownerFlight();
            var m = a.find("tgq_notice");
            var l = "";
            $jex.jsonp(k, { flightNum: n.flightInfo().co, deptAirport: n.deptAirport().code, arrAirport: n.arriAirport().code, deptDate: n.deptDate().replace(/-/g, ""), printPrice: b.parValue(), wrapperId: b.wrapperId(), cabin: b.cabin(), policyId: b.pid(), maxSellPrice: Math.max(b.afeePrice(), b.bprPrice()), minSellPrice: Math.min(b.afeePrice() || Number.MAX_VALUE, b.bprPrice() || Number.MAX_VALUE), tag: b.tag(), b2bpf: b.b2bpf() }, function(p) {
                a.loadedTgq = true;
                if (!p || (p && !p.tgqAdult)) {
                    m.innerHTML = h;
                    return;
                }
                l = p.tgqAdult;
                var o = g(p);
                m.innerHTML = o;
            }, {
                timeout: {
                    time: 2000,
                    func: function() {
                        if (!l) {
                            m.innerHTML = h;
                        }
                    }
                }
            });
        }

        function g(o) {
            var p = 0, u, t = o.tgqAdult, m = t.timePointCharges, s = [], k = [], x = [], n = null;
            var w = "", y = "", l = '<span class="f_thm"><i class="rmb">¥</i>', z = "/人</span>";
            var q = [];
            m && (u = m.length);
            if (t.viewType == 1 && u > 0) {
                t.adultTgq = {};
                for (; p < u; p++) {
                    n = m[p];
                    w = n.changeFee == -1 ? "不可改期" : l + n.changeFee + z;
                    y = n.returnFee == -1 ? "只退机建和燃油" : l + n.returnFee + z;
                    s.push("<p>", n.timeText, "</p>");
                    k.push("<p>", y, "</p>");
                    x.push("<p>", w, "</p>");
                }
                q.push('<table class="tbl_tgq_tip">', '<tr class="nw">', t.hasTime ? "<th>退改签时间点</th>" : "", "<th>退票扣费</th><th>改期加收手续费</th><th>签转</th></tr>", '<tr class="nw">');
                t.hasTime && q.push('     <td class="c1 nw">', s.join(""), "</td>");
                q.push('     <td class="c2 nw">', k.join(""), "</td>");
                q.push('     <td class="c3 nw">', x.join(""), "</td>");
                q.push('     <td class="c4 nw">', t.signText, "</td>");
                q.push("<tr>");
                q.push("</table>");
                q.push("<div>以上为成人退改签费用标准</div>");
            } else {
                if (t.tgqText) {
                    q.push(t.tgqText);
                    q.push("<br/><i>*</i>仅供参考,以订单标注的退改签规定为准。");
                }
            }
            return q.join("");
        }

        if (f) {
            var j = this.find("tgq_notice_panel");
            $jex.hover({
                act: f,
                extra: [this.find("tgq_notice_panel")],
                onmouseover: function(k) {
                    if (d) {
                        return;
                    }
                    if (b.pid() && !a.loadedTgq) {
                        i();
                    }
                    $jex.element.show(j);
                    $jex.event.trigger($jex.$("hdivResultPanel"), "fem_showTGQ");
                    d = true;
                },
                onmouseout: function(k) {
                    d = false;
                    $jex.element.hide(j);
                }
            });
        }
    });
    this.onInit(function() {
        var i = a.find("ageLimit");
        if (!i) {
            return;
        }
        var d = a.find("ageLimit-tips");
        var g = false;
        $jex.hover({
            act: i,
            extra: [this.find("ageLimit-tips")],
            onmouseover: function() {
                if (g) {
                    d.style.display = "";
                    return;
                }
                f();
            },
            onmouseout: function() { $jex.element.hide(d); }
        });

        function f() {
            var j = "/twell/flight/getQLN.jsp";
            $jex.jsonp(j, { wrapperId: b.wrapperId(), policyId: b.pid() }, function(k) { h(k); }, {
                timeout: {
                    time: 3000,
                    func: function() {
                        if (!g) {
                            h({});
                        }
                    }
                }
            });
        }

        function h(n) {
            g = true;
            var l = "该产品限制乘机人年龄，下单时请注意相关提示";
            var k = a.find("ageLimit-tips-content");
            var j = n.maxAge;
            var m = n.minAge;
            if (j && m) {
                l = "限" + m + "-" + j + "（含）周岁购买";
            } else {
                if (j && !m) {
                    l = "限<" + j + "（含）周岁购买";
                } else {
                    if (!j && m) {
                        l = "限>" + m + "（含）周岁购买";
                    }
                }
            }
            k.innerHTML = l;
            d.style.display = "";
        }
    });
};
OnewayFlightWrapperUI.prototype._insertH3 = function(c) {
    var a = c.vendor();
    var b = a.srv_ICON();
    this.text('<div class="v0">');
    if (b) {
        this.text('<i class="', b.key, '" title="', b.title, '">', b.text, "</i>");
    } else {
        this.text('<i class="ico_nocertify" title=""></i>');
    }
    this.text("</div>");
    if (c.bigLogoUrl()) {
        this._insertSpecWR(c);
    } else {
        if (c.isOta()) {
            this._insterOtaName(c);
        } else {
            this._insertH3Normal(c);
        }
    }
};
OnewayFlightWrapperUI.prototype._insertSpecWR = function(c) {
    var b = c;
    this.text('<div class="v_ofc">');
    this.text('<dl class="dl_ofc clrfix"><dt><img class="ofc_img" src="', b.bigLogoUrl(), '"/></dt>');
    var a = b.couponAdwords() ? b.couponAdwords() : b.vendor().adwords();
    this.text('<dd title="', a, '"><div class="f_txt">', FlightUtil.catAdtext(a, 30), "</div></dd>");
    this.text("</dl>");
    this.text('<div class="t_cmt">');
    this.starUI.displayPanel(b);
    this.text('<div class="e_btn_cmt">');
    this.starUI.insert_btn(b);
    this.text("</div>");
    this.text("</div>");
    this.text("</div>");
};
OnewayFlightWrapperUI.prototype._insterOtaName = function(f) {
    var d = f;
    var c = this.ownerListUI().ownerVendorListUI().owner().entity;
    var a = c.getAcf();
    var b = c.getFot();
    this.text('<div class="v_ofc">');
    this.text('<div class="t_name">', d.vendor().name(), "</div>");
    this.text('<div class="t_cmt">');
    this.text("支付后极速出票；起飞后可邮寄行程单；<br/>7*24小时全天候服务");
    this.text("</div>");
    this.text("</div>");
};
OnewayFlightWrapperUI.prototype._insertH3Normal = function(b) {
    var a = b;
    this.text('<div class="v1">');
    this.text('<div class="t_name">', a.vendor().name());
    if (a.isTCabin()) {
        this.text('<i class="i_bns_thui">特惠</i>');
    }
    if (a.isLCabin()) {
        this.text('<i class="i_bns_shm">甩卖</i>');
    }
    this.text("</div>");
    this.text('<div class="t_cmt">');
    this.starUI.displayPanel(a);
    this.text("</div>");
    this.text("</div>");
    this.text('<div class="v2"><div class="e_btn_cmt">');
    this.starUI.insert_btn(a);
    this.text("</div></div>");
};
OnewayFlightWrapperUI.prototype.insertAirlineDirectSelling = function() { this.text('<div class="ico_gwzx">实时出票</div>'); };
OnewayFlightWrapperUI.prototype.insertOta = function(d) {
    var c = this.ownerListUI().ownerVendorListUI().owner().entity;
    var a = c.getAcf();
    var b = c.getFot();
    this.text('<div class="t_sv">');
    this.append("<span", "superOtaBtn", ' class="hv_dbt"><i class="ico_youxuan">极速出票</i></span>');
    this.append("<div", "superOtaTip", ' class="p_tips_cont">');
    this.text('<div class="p_tips_wrap" style="left:-135px">', '<div class="p_tips_arr p_tips_arr_t" style="left:162px;"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>', '<div class="p_tips_content">', '<p><span class="fb">出票迅速：</span>支付后极速出票</p>', '<p><span class="fb">报销无忧：</span>起飞后可邮寄行程单</p>', '<p><span class="fb">服务优先：</span>7*24小时全天候服务</p>', "</div>", "</div>", "</div>", "</div>");
    if ($jex.ie == 6) {
        this.onInit(function() {
            var g = this.find("superOtaBtn");
            var f = this.find("superOtaTip");
            $jex.hover({ act: g, onmouseover: function() { f.style.display = "block"; }, onmouseout: function() { f.style.display = "none"; } });
        });
    }
};
OnewayFlightWrapperUI.prototype.insert_Services = function(f) {
    var b = this;
    var d = f;
    var a = d.vendor();
    var c = [a.srv_ASSISTANT(), a.srv_ALLDAY()];
    $jex.foreach(c, function(g) {
        if (g) {
            if ($jex.ie == 6) {
                b.text('<div class="t_sv" ><span class="hv_dbt"', ' title="', g.title, '"><i class="', (g.key == "s9" ? "ico_dbt" : "ico_724"), '"></i>', g.desc, "</span></div>");
            } else {
                b.text('<div class="t_sv" ><span class="hv_dbt"><i class="', (g.key == "s9" ? "ico_dbt" : "ico_724"), '"></i>', g.desc, "</span>", b._getTipHTML(g.title), "</div>");
            }
        }
    });
};
OnewayFlightWrapperUI.prototype.insertAgeLimit = function() {
    this.append('<div class="p_tips_cont" ', "ageLimit-tips", ">");
    this.text('<div class="p_tips_wrap" style="left:-80px"><div class="p_tips_arr p_tips_arr_t" style="left:95px"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>');
    this.append('<div style="text-align:center;min-width:160px;_width:160px;" class="p_tips_content" ', "ageLimit-tips-content", " >");
    this.text('<img class="p_tips_tgq_img" src="http://simg1.qunarzz.com/site/images/new_main/m_loading.gif" />');
    this.text("</div></div></div>");
};
OnewayFlightWrapperUI.prototype.insert_TGQ = function(b) {
    var a = b.getTGQInfo();
    this.append('<div class="p_tips_cont" ', "tgq_notice_panel", ">");
    this.text('<div class="p_tips_wrap" style="left:-160px"><div class="p_tips_arr p_tips_arr_t" style="left:170px"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>');
    this.append('<div class="p_tips_content" ', "tgq_notice", " >");
    if (b.pid() == null) {
        this.text(a);
    } else {
        this.text('<img class="p_tips_tgq_img" src="http://simg1.qunarzz.com/site/images/new_main/m_loading.gif" />');
    }
    this.text("</div></div></div>");
};
OnewayFlightWrapperUI.prototype.insert_PRICE = function(a) {
    if (a.isNotWork()) {
        this.text('<div class="v5"><span class="noPrice">暂无报价</span></div><div class="v6">&nbsp;</div>');
    } else {
        this.insert_PRICE_NORMAL(a);
    }
};
OnewayFlightWrapperUI.prototype._disHTML = function(a) { this.text(PriceUtil.getOneWayDiscount(a.discount())); };
OnewayFlightWrapperUI.prototype.priceHTML = function(b, a) { this.text('<div class="t_prc ', a, '">' + Price_html.getHTML(b) + '<i class="rmb">&yen;</i></div>'); };
OnewayFlightWrapperUI.prototype.insert_PRICE_NORMAL = function(a) {
    if (a.coupon() > 0 && a.bprPrice()) {
        this.insert_couponPrice(a);
    } else {
        this.insert_normalPrice(a);
    }
};
OnewayFlightWrapperUI.prototype.insert_normalPrice = function(a) {
    var d = a;
    var f = d.afeePrice(), b = d.bprPrice();
    f = parseInt(f);
    b = parseInt(b);
    this.text('<div class="v5">');
    if (f) {
        this.priceHTML(f, d.isLowestPr() ? "t_prc_lp" : "");
    }
    if (b) {
        this.priceHTML(b, d.isLowestBpr() ? "t_prc_lp" : "");
    }
    if (!f || !b) {
        this.text("<div>");
        var c = this._getCuXiao(d);
        if (c) {
            this.text(c);
        } else {
            this._disHTML(d);
        }
        this.text("</div>");
    }
    this.text("</div>");
    this.text('<div class="v6"><div class="t_ins">');
    if (f) {
        this.text("+", d.afee(), "保险");
        if (d.showInsTip() && d.afeeInsSum()) {
            this.text('<div class="p_tips_cont"><div class="p_tips_wrap"><div class="p_tips_arr p_tips_arr_b"><p class="arr_o">◆</p><p class="arr_i">◆</p></div><div class="p_tips_content"><p>航意险仅售5元，保额<span class="fb hl">', d.afeeInsSum(), "万</span></p></div></div></div>");
        }
    } else {
        this.text("&nbsp;");
    }
    this.text("</div></div>");
};
OnewayFlightWrapperUI.prototype.insert_priceForReduction = function(a) {
    var c = a;
    var b = parseInt(c.bprPrice());
    this.text('<div class="v5">');
    this.priceHTML(b);
    this.priceHTML(b + c.coupon(), "t_prc_p");
    this.text('</div><div class="v6"><div class="t_jg_n">&nbsp;&nbsp;现价</div><div class="t_jg_p">&nbsp;&nbsp;原价</div></div>');
};
OnewayFlightWrapperUI.prototype.insert_priceForRM = function(b) {
    var d = b;
    var a = d.coupon();
    var c = parseInt(d.bprPrice());
    this.text('<div class="v5">');
    this.priceHTML(c);
    this._disHTML(d);
    this.text('</div><div class="v6"><div class="t_fanb"><i class="i_fan">返</i><span class="m_fan">&yen;' + a + "</span></div></div>");
};
OnewayFlightWrapperUI.prototype.insert_couponPrice = function(a) {
    var b = a;
    var c = b.vendor();
    if (c && c.rebateTye() === "RM") {
        this.insert_priceForRM(a);
    } else {
        this.insert_priceForReduction(a);
    }
};
OnewayFlightWrapperUI.prototype._getCuXiao = function(d) {
    var b = ConfigManager.getConfig("CuxiaoConfig");
    var a = d.wrapperId();
    var c = b[a];
    return c && c.text || "";
};
OnewayFlightWrapperUI.prototype._buttonHTML = function(d, f, g) {
    var a = "";
    var c = this.bookingScreenUI;
    var b = d === "bpr" ? f.bpackagePrice() : f.packagePrice();
    if (f.isApplyPrice() && b > 0) {
        a = "申请套餐";
    } else {
        if (f.isApplyPrice()) {
            a = "申 请";
        } else {
            if (b > 0) {
                a = "预订套餐";
            } else {
                a = f.bigLogoUrl() ? "预 订" : c.getButtonMsg("预 订");
            }
        }
    }
    this.text('<div class="t_bk">');
    if (g) {
        this.append("<a", g, ' data-evtDataId="' + this.newid("") + '" class="btn_book_org" href="#"><span><b>' + a + "</b></span></a>");
    } else {
        this.text('<a class="btn_book_org" href="javascript:void(0)"><span><b>' + a + "</b></span></a>");
    }
    this.text("</div>");
};
OnewayFlightWrapperUI.prototype.insert_Working_BUTTON = function(b) {
    var c = b.afeePrice(), a = b.bprPrice();
    c = parseInt(c);
    a = parseInt(a);
    if (c) {
        this._buttonHTML("pr", b, "btnBook");
    }
    if (a) {
        this._buttonHTML("bpr", b, "lbtnBook");
    }
    if (!c || !a) {
        this.text('<div class="ut">', this.insert_UPDATETIME(b), "</div>");
    }
};
OnewayFlightWrapperUI.prototype.insert_notWorking_BUTTON = function(b) {
    var a = this.bookingScreenUI.getButtonMsg("预 订");
    this.text('<div class="t_bk">');
    this.text('<a class="btn_book_org" href="#"><span><b>' + a + "</b></span></a>");
    this.text("</div>");
    this.text('<div class="ut">', this.insert_UPDATETIME(b), "</div>");
};
OnewayFlightWrapperUI.prototype.insert_BOOKING_BUTTON = function(a) {
    if (a.isNotWork()) {
        this.insert_notWorking_BUTTON(a);
    } else {
        this.insert_Working_BUTTON(a);
    }
};
$jex.register("OnewayFlightWrapperUI", OnewayFlightWrapperUI);

function ZiyouxingOnewayFlightWrapperUI(a) {
    ZiyouxingOnewayFlightWrapperUI.superclass.constructor.call(this, a);
    this._type = "ZiyouxingOnewayFlightWrapperUI";
    this._itemClass = "qvt_column qvt_column_zyx";
    UICacheManager.addToCache(this);
}

$jex.extendClass(ZiyouxingOnewayFlightWrapperUI, OnewayFlightWrapperUI);
ZiyouxingOnewayFlightWrapperUI.prototype.update = function(d) {
    var b = d;
    this.clear();
    this.bookingScreenUI.setVendorInfo(b.wrapperId(), b.vendor().dataSource());
    this.bookingLockScreenUI.setEntity(b);
    this.bookingLockScreenUI.setVendorInfo(b.wrapperId(), b.vendor().dataSource());
    var c = this.ownerListUI().zIndex, a = this.ownerListUI().firstIndex;
    this.append("<div", "flightbar", "");
    this.text(' data-evtDataId="', this.newid(""), '" class="', this._itemClass, a == c ? " qvt_column_first" : "", '">');
    this.zIndex = this.ownerListUI().zIndex;
    this.ownerListUI().zIndex--;
    this.text('<div class="v_zyx">');
    this.text('<div class="t_ban"><span class="i_ban">自由行</span><em class="i_arr"></em></div>');
    this.text('<div class="t_name">', b.vTitle(), "</div>");
    this.insert_zyxPackage(b);
    this.text("</div>");
    this.text('<div class="v3">');
    this.text(b.vendor().name(), "代售");
    this.text("</div>");
    this.text('<div class="v4">');
    this.append("<div", "js-stopClick", ' class="t_st">');
    this.append('<span class="dot_gy"', "zyx", ">使用说明</span>");
    this.insert_ZYX(b);
    this.text("</div>");
    this.text("</div>");
    this.insert_PRICE(b);
    this.text('<div class="v7">');
    this.insert_BOOKING_BUTTON(b);
    this.text("</div>");
    this.text("</div>");
    this._bindHoverEvent(b);
    this._bindOnInitEvent(b);
};
ZiyouxingOnewayFlightWrapperUI.prototype.insert_zyxPackage = function(d) {
    var c = d.vClass();
    var b = d.vAmount() > 1 ? "*" + d.vAmount() : "";
    var a = d.vPrd();
    this.text('<div class="t_cmt">产品包含：<i class="ico_zyx_jp"></i>机票 + <i class="', c, '"></i>', a, b, "</div>");
};
ZiyouxingOnewayFlightWrapperUI.prototype.insert_PRICE = function(a) {
    if (a.isNotWork()) {
        this.text('<div class="v5"><span class="noPrice">暂无报价</span></div><div class="v6">&nbsp;</div>');
    } else {
        this.insert_PRICE_ZYX(a);
    }
};
ZiyouxingOnewayFlightWrapperUI.prototype.insert_PRICE_ZYX = function(a) {
    var b = a.afeePrice();
    b = parseInt(b);
    this.text('<div class="v5">');
    this.priceHTML(b);
    this.text("</div>");
    this.text('<div class="v6"><div class="t_ins">');
    this.text("+", a.afee(), "保险");
    this.text("</div></div>");
};
ZiyouxingOnewayFlightWrapperUI.prototype.insert_ZYX = function(a) {
    this.append('<div class="p_tips_cont" ', "zyx_notice_panel", ">");
    this.text('<div class="p_tips_wrap" style="left:-160px"><div class="p_tips_arr p_tips_arr_t" style="left:170px"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>');
    this.append('<div class="p_tips_content" ', "zyx_notice", " >");
    this.text(a.vDes());
    this.text("</div></div></div>");
};
ZiyouxingOnewayFlightWrapperUI.prototype.insert_notWorking_BUTTON = function(b) {
    var a = this.bookingScreenUI.getButtonMsg("预 订");
    this.text('<div class="t_bk">');
    this.text('<a class="btn_book" href="#"><span><b>' + a + "</b></span></a>");
    this.text("</div>");
};
ZiyouxingOnewayFlightWrapperUI.prototype.insert_Working_BUTTON = function(a) {
    var b = a.afeePrice();
    b = parseInt(b);
    if (b) {
        this._buttonHTML("pr", a, "zyxBtnBook");
    }
};
ZiyouxingOnewayFlightWrapperUI.prototype._buttonHTML = function(b, d, f) {
    var a = "";
    var c = this.bookingScreenUI;
    if (d.isApplyPrice()) {
        a = "申 请";
    } else {
        a = c.getButtonMsg("预 订");
    }
    this.text('<div class="t_bk">');
    this.append("<a", f, ' data-evtDataId="' + this.newid("") + '" class="btn_book" href="#"><span><b>' + a + "</b></span></a>");
    this.text("</div>");
};
ZiyouxingOnewayFlightWrapperUI.prototype._bindOnInitEvent = function(b) {
    var a = b;
    this.onInit(function() {
        var c = this;
        var f = this.find("zyx");
        var g = false;
        if (a.vType() !== undefined) {
            var d = this.find("zyx_notice_panel");
            $jex.hover({
                act: f,
                extra: [this.find("zyx_notice_panel")],
                onmouseover: function(h) {
                    if (g) {
                        return;
                    }
                    $jex.element.show(d);
                    g = true;
                },
                onmouseout: function(h) {
                    g = false;
                    $jex.element.hide(d);
                }
            });
        }
    });
};
$jex.register("ZiyouxingOnewayFlightWrapperUI", ZiyouxingOnewayFlightWrapperUI);

function HistoryPriceUI(b) {
    HistoryPriceUI.superclass.constructor.call(this, b);
    this._type = "HistoryPriceUI";
    var a = 0;
    this.state = function(c) {
        if (c == null) {
            return a;
        } else {
            a = c;
        }
    };
}

$jex.extendClass(HistoryPriceUI, XControl);
$jex.register("HistoryPriceUI", HistoryPriceUI);
HistoryPriceUI.prototype.update = function(a) {
    var b = a.flightHistory();
    if (!b || b.length != 2 || !b[0] || !b[1] || !a.lowestPrice()) {
        this.state(0);
        return;
    } else {
        this.state(1);
    }
    this.clear();
    this.append('<span class="y_pt" ', "hlbar");
    this.text(">", this.description(a), "</span>");
    this.onInit(function() {
        $jex.event.binding(this.find("hlbar"), this, "mouseover", function(c) { HistoryPriceUI.historyPrice.show(c, this.dataSource()); });
        $jex.event.binding(this.find("hlbar"), this, "mousemove", function(c) { HistoryPriceUI.historyPrice.move(c); });
    });
};
HistoryPriceUI.prototype.description = function(a) {
    var b = HistoryPriceUI.AvgPriceIcon(a.flightHistory(), a.lowestPrice());
    return b.msg;
};
HistoryPriceUI.languageVars = { _HISTORYPRICE: { arrow: ["大幅上涨", "小幅上涨", "稳定波动", "小幅下跌", "大幅下跌"], noinfo: "暂无走势", title: "走势", template: ["过去7天最低报价", "出发", "* 仅供参考", "近期："] } };
HistoryPriceUI.AvgPriceIcon = function(j, a) {
    if (j == null) {
        return"";
    }
    var d = HistoryPriceUI.languageVars;
    var f = parseFloat(j[1]);
    var g = parseInt(a);
    var i = "http://simg1.qunarzz.com/flighthistory/icons/";
    var b = "";
    var h = "";
    var c = "";
    if (g >= f * 1.3) {
        h = "icon_history_0.gif";
        c = d._HISTORYPRICE.arrow[0];
        b = "up";
    }
    if (g > f * 1.05 && g < f * 1.3) {
        h = "icon_history_1.gif";
        c = d._HISTORYPRICE.arrow[1];
        b = "up";
    }
    if (g <= f * 1.05 && g >= f * 0.95) {
        h = "icon_history_2.gif";
        c = d._HISTORYPRICE.arrow[2];
        b = "normal";
    }
    if (g < f * 0.95 && g > f * 0.7) {
        h = "icon_history_3.gif";
        c = d._HISTORYPRICE.arrow[3];
        b = "down";
    }
    if (g <= f * 0.7) {
        h = "icon_history_4.gif";
        c = d._HISTORYPRICE.arrow[4];
        b = "down";
    }
    return{ msg: c, img: "<img src='" + i + h + "' />", level: b };
};
HistoryPriceUI.historyPrice = new function() {
    var a = this;
    this.getPricePx = function(d) {
        var c = 62;
        var h = 14;
        var b = 76;
        var g = this.pricerange;
        var f = d - g.lowestPrice;
        if (f < 0) {
            return b;
        }
        if (f > g.highestPrice - g.lowestPrice) {
            return 0;
        }
        var i = (g.highestPrice - g.lowestPrice) / Math.abs(h - c);
        return c - ((d - g.lowestPrice) / i);
    };
    this.praseHistory = function(f) {
        if (!f) {
            return null;
        }
        var c = f[1];
        var d = f[0].split("|");
        var g = parseInt(d[0], 10);
        var b = parseInt(d[2], 10);
        this.pricerange = { highestPrice: g, lowestPrice: b, sevendaysAvgPrice: c };
        return this.pricerange;
    };
    this.showed = false;
    this.show = function(q, h) {
        var i = HistoryPriceUI.languageVars;
        var s = h.flightInfo();
        var m = QunarDate.format(SERVER_TIME);
        var g = s.dd;
        var j = h.deptCity().en.toUpperCase();
        var l = h.arriCity().en.toUpperCase();
        var c = s.co;
        var o = g + j + l + c;
        var f = "";
        var p = this.praseHistory(h.flightHistory());
        var f = "http://simg1.qunarzz.com/flighthistory/pics/";
        var b = HistoryPriceUI.AvgPriceIcon(h.flightHistory(), h.lowestPrice());
        var k = { code: c, deptcitycn: h.deptCity().zh, arricitycn: h.arriCity().zh, deptdate: g, imageurl: o, pointleft: 0, pointtop: this.getPricePx(h.lowestPrice()) - 6 };
        var n = ['<div class="innerBody"><div class="arrow"><p class="arr_o">◆</p><p class="arr_i">◆</p></div>', "<h5><em>", k.code, "</em> <span>", i._HISTORYPRICE.template[0], " (", i._HISTORYPRICE.template[3], b.msg, ")</span></h5>", '<p class="info"><span>', k.deptcitycn, "</span>-<span>", k.arricitycn, "</span> <span>", k.deptdate, " ", i._HISTORYPRICE.template[1], "</span>	</p>", '<div class="img"><div style="width:250px; height:108px; background-image:url(', f, k.imageurl, ".gif?", QunarDate.format(SERVER_TIME).replace(/-/g, ""), ')">', '<div class="redline" style="left:', k.pointleft, "px; top:", k.pointtop, 'px;"></div>', '</div></div><p class="note">', i._HISTORYPRICE.template[2], "</p></div>"].join("");
        $jex.$("Lw_historyprice").innerHTML = n;
        this.showed = true;
        this.move(q);
        $jex.$("Lw_historyprice").style.visibility = "visible";
        $jex.stopEvent(q);
        return false;
    };
    this.move = function(b) {
        if (this.showed == false) {
            return;
        }
        if (!b) {
            b = window.event;
        }
        var d = $jex.pointerX(b) + 40;
        var c = $jex.pointerY(b) - 45;
        $jex.$("Lw_historyprice").style.left = d + "px";
        $jex.$("Lw_historyprice").style.top = c + "px";
        $jex.stopEvent(b);
        return false;
    };
    this.hide = function() {
        if (this.showed == false) {
            return;
        }
        $jex.$("Lw_historyprice").style.visibility = "hidden";
        this.showed = false;
    };
    $jex.event.binding(document, "mouseover", function() { a.hide(); });
};

function FlightInfoExtBarUI(b) {
    FlightInfoExtBarUI.superclass.constructor.call(this, b);
    this._type = "FlightInfoExtBarUI";
    this.hpUI = new HistoryPriceUI();
    var a = null;
    this.wrapperList = function(c) {
        if (c == null) {
            return a;
        } else {
            a = c;
        }
    };
}

$jex.extendClass(FlightInfoExtBarUI, XControl);
FlightInfoExtBarUI.prototype.update = function(b) {
    this.clear();
    var a = b.extInfo();
    this.text('<div id="hdivSort" class="hdivSort"></div>');
    var d = [];
    if (a) {
        if (a.fdt) {
            d.push("飞行" + a.fdt);
        }
        var c = a.acf && parseInt(a.acf, 10) || 0;
        if (a.fot || c) {
            d.push(["机建/燃油：", '<span class="y_prc"><i class="rmb">&yen;</i>', c, "</span>", '&nbsp;/&nbsp;<span class="y_prc"><i class="rmb">&yen;</i>', a.fot, "</span>"].join(""));
        }
        d.push(a.ml == "true" ? "有餐食" : "无餐食");
        d.push(a.zj && a.zj.info != "" ? "有网上值机" : "无网上值机");
    }
    this.text('<div class="c_fly_info">');
    this.text(d.join('<em class="sep_line">|</em>'));
    this.hpUI.dataSource(b);
    this.hpUI.updateSource();
    if (this.hpUI.state()) {
        if (d.length > 0) {
            this.text('<em class="sep_line">|</em>');
        }
        this.append("近期价格走势：", this.hpUI);
    }
    this.text("</div>");
    if (ConfigManager.getConfig("pageId") !== "onewayDetail" || !this.wrapperList()) {
        return;
    }
    this.onInit(function() {
        var h = this;
        var g = h.wrapperList().wrlistUI;
        var i = h.wrapperList().mainWrlistUI;
        var l = h.wrapperList().wrlistUI.dataSource();
        var k = true;
        var m = false;
        var f = false;
        $jex.console.trace("当前排序值", g.getSortKey());
        switch (g.getSortKey()) {
        case"default":
            k = true;
            break;
        case"priceDesc":
            m = true;
            break;
        case"priceAsc":
            f = true;
            break;
        default:
            k = true;
            break;
        }
        $jex.console.trace("各排序值状态", k, m, f);
        var j = new XSelect({
            elemId: "hdivSort",
            initFire: false,
            values: [{ value: "defalut", name: "默认排序", selected: k }, { value: "priceDesc", name: "价格由低到高", selected: m }, { value: "priceAsc", name: "价格由高到低", selected: f }],
            on: {
                changeValue: function(n) {
                    g.setSortKey(n.value);
                    g.update(l);
                    g.flushRendor();
                    if (l.codeShare() && l.codeShareFlight()) {
                        i.setSortKey(n.value);
                        i.update(l.codeShareFlight());
                        i.flushRendor();
                    }
                    trackAction("FD|S|" + n.value);
                }
            }
        });
        j.update();
        j.render();
    });
};
var BookingScreenUI = function() { this.vendor = null; };
BookingScreenUI.prototype.setVendorInfo = function(b, a) {
    var c = BookingScreenUI.adjustOption;
    if (c.allBusy === true && c.isTimeRange()) {
        a.status = 2;
    }
    if (c.allNoWork === true && c.isTimeRange()) {
        a.status = 1;
    }
    a.wr = b;
    this.vendor = a;
};
BookingScreenUI.adjustOption = { allBusy: false, allNoWork: false, isTimeRange: function() { return false; }, allBusyTips: function() { return""; }, allNoWorkTips: function() { return""; } };
BookingScreenUI.prototype.getTimeDesc = function(c) {
    var b = c;
    if (b > 60) {
        var d = Math.floor(b / 60);
        var a = b % 60;
        return d + "小时" + a + "分钟";
    } else {
        if (b < 5) {
            return"5分钟";
        } else {
            return b + "分钟";
        }
    }
};
BookingScreenUI.prototype.isBusy = function() { return this.vendor.status == 2; };
BookingScreenUI.prototype.isNowork = function() { return this.vendor.status == 1; };
BookingScreenUI.prototype.getButtonTips = function(b) {
    var f = BookingScreenUI.adjustOption;
    switch (this.vendor.status) {
    case 0:
        return b || "";
    case 1:
        var a = "目前为代理商非工作时间，不提供出票服务";
        if (f.allNoWork === true && f.isTimeRange()) {
            a = f.allNoWorkTips() || a;
        }
        return a;
    case 2:
        var a = "";
        var d = "目前代理商业务繁忙，暂时无法提供服务，";
        var c = this.vendor.bzt || "";
        if (!c) {
            a = d + "请稍候再来预订";
        } else {
            a = d + "请在" + this.getTimeDesc(c) + "后再来预订";
        }
        if (f.allBusy === true && f.isTimeRange()) {
            a = f.allBusyTips() || a;
        }
        break;
    }
    return"";
};
BookingScreenUI.prototype.getButtonMsg = function(a) {
    switch (this.vendor.status) {
    case 0:
        return a || "";
    case 1:
        return"暂停服务";
    case 2:
        return"繁忙中";
    }
    return"";
};
BookingScreenUI.prototype.getStatusMsg = function(a) {
    switch (this.vendor.status) {
    case 0:
        return a || "";
    case 1:
        return"不在工作时间";
    case 2:
        return"请稍后预订";
    }
    return"";
};
BookingScreenUI.prototype.preBooking = function(a) {
    switch (this.vendor.status) {
    case 0:
        this.processBooking(a);
        break;
    case 1:
        this.showDialog("nonwork", a);
        break;
    case 2:
        this.showDialog("busy", a);
        break;
    }
};
BookingScreenUI.prototype.getDialogMsg = function() {
    switch (this.vendor.status) {
    case 1:
        return"为非工作时间，暂时无法提供服务。";
    case 2:
        var b = "业务繁忙，暂时无法提供服务，";
        var a = this.vendor.bzt || "";
        if (!a) {
            return b + "请稍候再来预订，";
        } else {
            return b + "请在" + this.getTimeDesc(a) + "后再来预订，";
        }
        break;
    }
};
BookingScreenUI.prototype.closeDialog = function(b) {
    var a = b.target;
    while (a != document) {
        if (a.id == BookingScreenUI.getContainerID() + "_close") {
            $jex.lightbox.hide();
            return;
        }
        if (a.className == "lb_content") {
            return;
        }
        a = a.parentNode;
    }
    $jex.lightbox.hide();
    return;
};
BookingScreenUI.prototype.close = function() {
    if (BookingScreenUI.getDlg()) {
        BookingScreenUI.getDlg().style.display = "none";
    }
};
BookingScreenUI.prototype.showDialog = function(h, a) {
    this.addStyleHTML();
    var b = BookingScreenUI.getContainerID();
    var j = this.vendor;
    var g = BookingScreenUI.getDlg();
    var c = [];
    c.push('<div class="p_layer_cont">');
    c.push('    <div style="width:480px;" class="layer_inner"> <a id="', b, '_close" href="javascript:void(0);" title="关闭" class="btn_close"></a> ');
    c.push('        <div class="e_tit_pop"></div>');
    c.push('        <div class="layer_cont">');
    c.push('            <div class="b_warn_pop_l clrfix">');
    c.push('                <div class="e_warn_ico"> <i class="ico_del_l"></i></div>');
    var f = "目前" + j.name + this.getDialogMsg() + "您可以通过其他代理商网站预订机票。";
    var i = BookingScreenUI.adjustOption;
    if (i.allNoWork === true && i.isTimeRange()) {
        f = i.allNoWorkTips() || f;
    }
    c.push('                <div class="e_warn_inf"><h3>', f, "</h3>");
    c.push("                </div>");
    c.push("          </div>");
    c.push('			<table cellpadding="0" cellspacing="0" width="430" class="vinfo">');
    c.push("				<tr>");
    if (j.info.cata) {
        c.push('					<td width="25"><div title="经Qunar验证：该网站已获得《中国民用航空运输销售代理业务资格认可证书》" class="iata"></div></td>');
    } else {
        c.push('					<td width="25"><div title="经Qunar验证：该网站未获得《中国民用航空运输销售代理业务资格认可证书》" class="iata"></div></td>');
    }
    c.push('					<td width="210"><span class="hl">', j.name, "</span></td>");
    c.push('					<td width="195">');
    c.push('						<div class="praise">');
    c.push('							<div class="r" style="width:', (parseFloat(j.star.lv.kd) * 2 * 10), '%;"></div>');
    c.push("						</div>");
    c.push("					</td>");
    c.push("				</tr>");
    c.push("				<tr>");
    c.push("					<td></td>");
    c.push('					<td colspan="2"><div class="name">', j.info.cname, "</div>");
    c.push('						<table cellpadding="0" cellspacing="0" class="contact">');
    c.push("							<tr>");
    c.push('								<td colspan="2">出票时间：', j.info.st, "</td>");
    c.push("							</tr>");
    c.push("							<tr>");
    c.push('								<td width="210">客服电话：', j.info.wp, "</td>");
    c.push("								<td>投诉电话：", j.info.nwp, "</td>");
    c.push("							</tr>");
    c.push("							<tr>");
    c.push("								<td>网址：", j.info.web, "</td>");
    c.push("								<td>ICP备案：", j.info.icp, "</td>");
    c.push("							</tr>");
    c.push("						</table></td>");
    c.push("				</tr>");
    c.push("			</table>");
    c.push("            </div>");
    c.push("        </div>");
    c.push("    </div>");
    if (typeof $jex != "undefined") {
        $jex.event.trigger(this, "preshow");
    }
    $jex.lightbox.show(c.join(""));
    var d = ["&type=vstat", "&clickby=", this.vendor.status, "&wrid=", this.vendor.wr || this.vendor.wrid, "&wrname=", encodeURIComponent(this.vendor.name)];
    trackAction(d.join(""));
};
BookingScreenUI.prototype.addStyleHTML = function() {
    if (window.__bookingscreenui_addstyle == true) {
        return;
    }
    var a = document.createElement("div");
    a.id = BookingScreenUI.getContainerID();
    a.style.position = "absolute";
    a.style.zIndex = "999999";
    document.getElementsByTagName("body")[0].appendChild(a);
    this.dlg = a;
    this.clickBind(this.closeDialog);
    window.__bookingscreenui_addstyle = true;
};
BookingScreenUI.closeMySelf = function() {
    var a = document.getElementById(BookingScreenUI.getContainerID());
    if (a && a.style.display == "block") {
        a.style.display = "none";
    }
};
BookingScreenUI.getContainerID = function() { return"__booking_screen_dialog_container__"; };
BookingScreenUI.getDlg = function() {
    var a = document.getElementById(BookingScreenUI.getContainerID());
    return a;
};
BookingScreenUI.prototype.processBooking = function(a) {
    if (typeof a == "function") {
        a();
    } else {
        if (typeof a == "string") {
            window.open(a);
        }
    }
};
BookingScreenUI.prototype.clickBind = function(c) {
    var a = document;
    var b = this;
    _cb = function(d) {
        if (!d.target) {
            d.target = d.srcElement;
        }
        c.call(b, d, this);
    };
    if (a.addEventListener) {
        a.addEventListener("click", _cb, false);
    } else {
        if (a.attachEvent) {
            a.attachEvent("onclick", _cb);
        }
    }
};
BookingScreenUI.prototype.getPosition = function() {
    var b, d;
    if (window.pageXOffset) {
        b = window.pageXOffset;
    } else {
        if (document.documentElement && document.documentElement.scrollLeft) {
            b = document.documentElement.scrollLeft;
        } else {
            if (document.body) {
                b = document.body.scrollLeft;
            }
        }
    }
    if (window.pageYOffset) {
        d = window.pageYOffset;
    } else {
        if (document.documentElement && document.documentElement.scrollTop) {
            d = document.documentElement.scrollTop;
        } else {
            if (document.body) {
                d = document.body.scrollTop;
            }
        }
    }
    var c, a;
    if (window.innerWidth) {
        c = window.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientWidth) {
            c = document.documentElement.clientWidth;
        } else {
            if (document.body) {
                c = document.body.clientWidth;
            }
        }
    }
    if (window.innerHeight) {
        a = window.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            a = document.documentElement.clientHeight;
        } else {
            if (document.body) {
                a = document.body.clientHeight;
            }
        }
    }
    return{ scrollTop: d, scrollLeft: b, clientHeight: a, clientWidth: c };
};
BookingScreenUI.prototype.openMark = function() {};
BookingScreenUI.prototype.closeMark = function() {};

function StarRankUI(a) {
    StarRankUI.superclass.constructor.call(this, a);
    this._type = "StarRankUI";
    this.url = "http://www.qunar.com/bookingFeedback/interface/userRemark.jsp";
    var b = null;
    this.ownerWrapperUI = function(c) {
        if (c == null) {
            return b;
        } else {
            b = c;
        }
    };
    this.agentUIO = new UIObject();
    this.star_dw = new StarPickerUI({ name: "dw", title: "网站使用", desc: ["无法使用", "很难使用", "一般般吧", "使用较方便", "使用很方便，赞！"] });
    this.star_db = new StarPickerUI({ name: "db", title: "价格真实", desc: ["机票经常售完", "经常遇到支付后要求加价", "经常遇到支付前要求加价", "偶尔遇到售完或要求加价", "从未遇到过售完或要求加价"] });
    this.star_ds = new StarPickerUI({ name: "ds", title: "售后服务", desc: ["服务很差劲", "服务挺差的", "服务一般", "服务还不错", "服务非常好，赞！"] });
    this.starList = [this.star_dw, this.star_db, this.star_ds];
    this.commitOpened = false;
}

$jex.extendClass(StarRankUI, XControl);
StarRankUI.prototype.update = function() {};
StarRankUI.prototype.displayPanel = function(c) {
    var b = this;
    var d = this.ownerWrapperUI();
    var a = c.vendor().starRank();
    d.text('<div class="e_qstar">');
    d.append('<div class="p_qstar_twp"><div ', "agent", ' class="p_qstar_tip"></div></div>');
    d.append("<span ", "panelStarR", ' class="bg_qstar">');
    d.text('<em style="width:', (a.lv.kd * 10 * 2), '%;" class="r"></em></span>');
    d.text("</div>");
    if (a.count) {
        d.text('<span class="u_num">来自', a.count, "位用户</span>");
    } else {
        d.text('<span class="u_num">暂无点评</span>');
    }
    d.onInit(function() {
        var f = d.find("panelStarR");
        var h = d.find("agent");
        var g = true;
        $jex.hover({
            act: f,
            onmouseover: function(i) {
                if (g) {
                    b.updateAgentPanel(c, a);
                    b.agentUIO.write(h);
                    g = false;
                }
                $jex.element.show(h);
                trackAction("FL|STAR|SHOW");
            },
            onmouseout: function(i) { $jex.element.hide(h); }
        });
    });
};
StarRankUI.prototype.showCommit = function() {
    var b = this.ownerWrapperUI();
    var c = b.find("btnstarR");
    var a = b.find("usercomment");
    $jex.addClassName(c.parentNode, "e_btn_cmt_on");
    $jex.element.show(a);
    this.commitOpened = true;
    trackAction("FL|CMT|OPEN");
};
StarRankUI.prototype.hideCommit = function() {
    var b = this.ownerWrapperUI();
    var c = b.find("btnstarR");
    var a = b.find("usercomment");
    if (c) {
        $jex.removeClassName(c.parentNode, "e_btn_cmt_on");
    }
    if (a) {
        $jex.element.hide(a);
    }
    this.commitOpened = false;
};
StarRankUI.prototype.updateAgentPanel = function(b, g) {
    var a = this;
    var c = this.agentUIO;
    var d = this.ownerWrapperUI();
    var i = d.find("agent");
    if (!c.isempty()) {
        return;
    }
    c.text('<div class="p_qstar_cont"><dl class="dl_score_lst">');
    var h = ["总分：", "满意程度", "网站使用", "价格真实", "售后服务"], f = g.lv;
    $jex.foreach(["kd", "ts", "dw", "db", "ds"], function(k, j) {
        c.text(j ? "<dd>" : "<dt>");
        c.text('<span class="sc_lab">', h[j], "</span>");
        c.text('<span class="bg_qstar"><em style="width: ', (parseFloat(f[k]) * 2 * 10), '%;"></em></span>');
        c.text('<span class="sc_num">', f[k], "分</span>");
        c.text(j ? "</dd>" : "</dt>");
    });
    c.text("</dl></div>");
};
StarRankUI.prototype.updateUserCommentPanel = function(c, d) {
    var b = this;
    var a = c.ownerFlight();
    $jex.foreach(["dw", "db", "ds"], function(f) {
        b["star_" + f].setValue(0);
        b["star_" + f].update();
    });
    this.clear();
    this.text('<div class="p_cmt_cont">');
    this.append("<a ", "cls", ' class="p_close" title="关闭"></a>');
    this.text("<h3>请对网站的服务做出点评</h3>");
    this.append("<form ", "frmCommit", ' action="' + this.url + '" target="ifmPost" method="post" >');
    this.text('			<input type="hidden" name="ispost" value="true" />');
    this.text('			<input type="hidden" name="wrid" value="', c.wrapperId(), '" />');
    this.text('			<input type="hidden" name="depCode" value="', a.deptAirportCode(), '" />');
    this.text('			<input type="hidden" name="arrCode" value="', a.arriAirportCode(), '" />');
    this.text('			<input type="hidden" name="depDate" value="', a.deptDate(), '" />');
    this.text('			<input type="hidden" name="flightNo" value="', a.code(), '" />');
    this.text('			<input type="hidden" name="other" value="" />');
    this.append("		<input ", "callback", ' type="hidden" name="callback" value="" />');
    this.text('<ul class="ul_webser_cmt">');
    this.append("", this.star_dw);
    this.append("", this.star_db);
    this.append("", this.star_ds);
    LoginControl.checkLogin();
    if (LoginControl.isLogin) {
        this.text("<li>");
        this.text('<p class="w_lab">用户名</p>');
        this.text('<p class="w_txt">', LoginControl.user.name, "</p>");
        this.text("</li>");
        this.text("<li>");
        this.text('<p class="w_lab">&nbsp;</p>');
        this.append("<button ", "btnSave", ' class="btn btn_primary"><span><b>提交</b></span></button>');
        this.text("</li>");
    }
    this.text("</ul>");
    if (!LoginControl.isLogin) {
        this.text('<div class="e_login_ifo clrfix">');
        this.text('    <div class="m_sep2">');
        this.text('        <div class="s_lab">用户名</div>');
        this.text('        <div class="s_ctl">');
        this.append("            <input ", "uname", ' type="text" class="inp_t"/>');
        this.text("        </div>");
        this.text("    </div>");
        this.text('    <div class="m_sep2">');
        this.text('         <div class="s_lab">密码</div>');
        this.text('         <div class="s_ctl">');
        this.append("            <input ", "passwd", ' name="" type="password" class="inp_t"/>');
        this.text("         </div>");
        this.text("     </div>");
        this.text("     </div>");
        this.text('<div class="e_login_ifo clrfix">');
        this.text('     <div class="m_login">');
        this.append("           <a ", "btnSaveAndLogin", ' href="##" class="btn btn_primary"><span><b>登录并提交</b></span></a>&nbsp;<span class="txt_a">请登录后发表点评，没有帐号?&nbsp;请');
        this.append('<a href="http://user.qunar.com/reg.jsp" ', "reg", ' target="_blank">注册</a></span>');
        this.text("     </div>");
        this.text("</div>");
    }
    this.text('<div class="e_login_ifo clrfix">');
    this.append("<div ", "msg", ' class="m_login_wwrn"></div>');
    this.text("</div>");
    this.text("</form>");
    this.text("</div>");
    this.onInit(function() {
        $jex.event.click(this.find("reg"), function() { window.open("http://user.qunar.com/reg.jsp"); });
        $jex.event.click(this.find("btnSaveAndLogin"), function() {
            if (!b.checkComment()) {
                return;
            }
            LoginControl.login(b.find("uname").value, b.find("passwd").value, function(f, g) {
                if (f) {
                    b.submitComment();
                } else {
                    b.find("msg").innerHTML = '<span class="f_warn">' + g + "</span>";
                }
            });
        });
        $jex.event.click(this.find("btnSave"), function() {
            if (!b.checkComment()) {
                return;
            }
            b.submitComment();
        });
        $jex.event.click(this.find("cls"), function() { b.hideCommit(); });
    });
};
StarRankUI.prototype.checkComment = function() {
    var a = this;
    var b = true;
    $jex.foreach(a.starList, function(c) {
        if (!c.getSelectedValue()) {
            a.find("msg").innerHTML = '<span class="f_warn">请选择<b>' + c.title() + "</b>的评分.</span>";
            b = false;
            return $jex.$break;
        }
    });
    return b;
};
StarRankUI.prototype.submitComment = function() {
    var a = this;
    var b = "callbkId" + $jex.globalID();
    this.find("frmCommit").callback.value = "window.parent." + b;
    window[b] = function(d) { a.processComment(d); };
    var c = this.find("frmCommit").id;
    if (/MSIE/i.test(navigator.appVersion)) {
        document.getElementById("ifmPost").src = 'javascript:\'<script>window.onload=function(){document.write(\\\'<script>document.domain=\\"qunar.com\\";parent.document.getElementById("' + c + "\").submit();<\\\\/script>\\');document.close();};<\/script>'";
    } else {
        this.find("frmCommit").submit();
    }
};
StarRankUI.prototype.processComment = function(a) {
    var b = this;
    var c = this.find("msg");
    if (a.success) {
        c.innerHTML = "成功提交";
    } else {
        c.innerHTML = '<span class="f_warn">' + a.msg + "</span>";
    }
    setTimeout(function() {
        $jex.$("ifmPost").src = "about:blank";
        b.hideCommit();
    }, 1000);
};
StarRankUI.prototype.placeHolder = function(b) {
    var c = this.ownerWrapperUI(), a = this;
    c.append("<div ", "usercomment", ' class="p_cmt_tip" ');
    if (!this.commitOpened) {
        c.text(' style="display:none;" ');
    } else {
        c.text(' style="display:block;" ');
    }
    c.text(" >");
    if (this.commitOpened) {
        this.updateUserCommentPanel(b, b.vendor().starRank());
        c.append("", this);
    }
    c.text("</div>");
    c.onInit(function() {
        $jex.event.binding(c.find("usercomment"), "click", function(d) {
            $jex.stopEvent(d);
            return false;
        });
        if (a.commitOpened) {
            $jex.addClassName(c.find("usercomment").parentNode, "e_btn_cmt_on");
        }
    });
};

function StarPickerUI(a) {
    StarPickerUI.superclass.constructor.call(this, a);
    this._type = "StarPickerUI";
}

$jex.extendClass(StarPickerUI, XControl);
StarPickerUI.prototype.update = function() {
    var a = this;
    var c = this._setting;
    a.clicked = false;
    this.clear();
    this.text("<li>");
    this.append("<input ", "fldInput", ' name="' + c.name + '" type="hidden" value="0" />');
    this.text('<p class="w_lab">', c.title, "</p>");
    this.text('<p class="w_star">');
    this.append("<span", "sPr", ' class="bg_qstar">');
    this.append("<em ", "shR", ' style="width: 0%;"></em><b class="lst_star">');
    for (var b = 1; b <= 5; b++) {
        this.append("<i ", "sR" + b, ' class="i_star"></i>');
    }
    this.text("</b></span></p>");
    this.append("<p ", "desc", ' class="w_txt"></p>');
    this.text("</li>");
    this.onInit(function() {
        var g = this.find("shR");
        for (var d = 1; d <= 5; d++) {
            (function(h) {
                var i = a.find("sR" + h);
                $jex.event.binding(i, "mouseover", function() {
                    if (a.clicked) {
                        return;
                    }
                    var j = c.desc[h - 1];
                    if (j) {
                        a.find("desc").innerHTML = j;
                    }
                    g.style.width = (h * 2 * 10) + "%";
                });
                $jex.event.click(i, function() {
                    if (a.clicked) {
                        return;
                    }
                    a.setValue(h);
                    a.clicked = true;
                });
            })(d);
        }
        var f = this.find("sPr");
        $jex.event.binding(f, "mouseout", function(h) {
            if (!$jex.event.within(f, h)) {
                return;
            }
            a.restore();
            if (!a.getSelectedValue()) {
                a.find("desc").innerHTML = "";
            }
            a.clicked = false;
        });
    });
};
StarPickerUI.prototype.restore = function() {
    var a = this.find("desc");
    if (!a) {
        return;
    }
    this.setValue(this.value);
};
StarPickerUI.prototype.setValue = function(b) {
    var a = this.find("shR");
    if (!a) {
        this.onInit(function() {
            this.find("shR").style.width = b * 2 * 10 + "%";
            this.selValue = b;
        });
    } else {
        a.style.width = b * 2 * 10 + "%";
        this.find("fldInput").value = b;
        this.selValue = b;
    }
    this.value = b;
};
StarPickerUI.prototype.getValue = function(a) { return parseInt(this.find("fldInput").value, 10); };
StarPickerUI.prototype.title = function(a) { return this._setting.title; };
StarPickerUI.prototype.getSelectedValue = function() { return this.selValue || 0; };

function OnewayStarRankUI(a) {
    OnewayStarRankUI.superclass.constructor.call(this, a);
    this._type = "OnewayStarRankUI";
}

$jex.extendClass(OnewayStarRankUI, StarRankUI);
OnewayStarRankUI.prototype.insert_btn = function(a) {
    var b = this.ownerWrapperUI();
    b.append("	<a ", "btnstarR", '  data-evtDataId="' + b.newid("") + '"  hidefocus="on" class="btn_cmt" href="##">点评<i class="i_arrb_ud"></i></a>');
    this.placeHolder(a);
};

function StopInfoUI(a) {
    StopInfoUI.superclass.constructor.call(this, a);
    this._type = "StopInfoUI";
    var b = null;
    this.owner = function(c) {
        if (c == null) {
            return b;
        } else {
            b = c;
        }
    };
    this.placeHolderId = this.newid("MyPH");
}

$jex.extendClass(StopInfoUI, XControl);
StopInfoUI.prototype.placeHolder = function() {
    var a = this.owner();
    a.append("<div", this.placeHolderId, ' class="jtPanel" style="display:none;" >');
    a.append("", this, "</div>");
};
StopInfoUI.prototype.getHolder = function() {
    var a = this.owner();
    return a.find(this.placeHolderId);
};
StopInfoUI.prototype._invoke = function(b) {
    if (this.cache) {
        this.update(b);
        return;
    }
    var c = ["/twell/flight/flight_stops.jsp?depCode=", b.deptAirportCode(), "&arrCode=", b.arriAirportCode(), "&flightNo=", b.code(), "&depDate=", window.location.param().searchDepartureTime].join("");
    var a = this;
    $jex.jsonp(c, function(d) {
        a.cache = d;
        a.update(b);
    });
};
StopInfoUI.prototype.update = function(a) {
    this.clear();
    var d = this.cache;
    if (d.data.length <= 0) {
        return;
    }
    this.text('		<div class="ic"></div>');
    this.text('		<div class="hd"><b>经停城市</b>|<b>到达时间</b>|<b>起飞时间</b></div>');
    this.text('		<div class="ct">');
    this.text('			<table cellpadding="0" cellspacing="0">');
    for (var b = 0; b < d.data.length; b++) {
        var c = d.data[b];
        this.text("				<tr>");
        this.text('					<td class="c1">', c.city, "</td>");
        this.text('					<td class="c2">', c.depTime, "</td>");
        this.text('					<td class="c3">', c.arrTime, "</td>");
        this.text("				</tr>");
    }
    this.text("			</table>");
    this.text("		</div>");
    this.render(this.getHolder());
    $jex.element.show(this.getHolder());
};
StopInfoUI.prototype.show = function(a) { this._invoke(a); };
StopInfoUI.prototype.hide = function() { $jex.element.hide(this.getHolder()); };
var checkTimeOfStopSale = {
    deal: function(c, b) {
        var a;
        if (window.CLIENT_TIME && window.SERVER_TIME) {
            a = (new Date().getTime() - CLIENT_TIME.getTime()) + SERVER_TIME.getTime();
        } else {
            a = new Date().getTime();
        }
        if (((c.getTime() - a) / (1000 * 60)) <= b) {
            this.showDialog();
            return true;
        } else {
            return false;
        }
    },
    showDialog: function() {
        var a = [];
        a.push('<div class="p_layer_cont p_player_tss">');
        a.push('    <div style="width:480px;" class="layer_inner"> <a id="msgButton" href="javascript:void(0);" title="关闭" class="btn_close"></a> ');
        a.push('        <div class="e_tit_pop"></div>');
        a.push('        <div class="layer_cont">');
        a.push('            <div class="b_warn_pop_l clrfix">');
        a.push('              <div class="e_warn_ico"> <i class="ico_del_l"></i></div>');
        a.push('              <div class="e_warn_inf"><h3>对不起，该代理商报价已售完，您可以在去哪儿网重新搜索和预订!</h3></div>');
        a.push("            </div>");
        a.push('            <div class="b_submit_pop_l"><a href="javascript:void(0);" class="btn" id="reSearchLine"><span><b>重新搜索</b></span></a></div>');
        a.push("        </div>");
        a.push("      </div>");
        a.push("    </div>");
        $jex.lightbox.show(a.join(""));
        this.bindEvent();
    },
    bindEvent: function() {
        var b = $jex.$("reSearchLine"), a = function() { window.location.reload(); };
        if (b.addEventListener) {
            b.addEventListener("click", a, false);
        } else {
            if (b.attachEvent) {
                b.attachEvent("onclick", a);
            }
        }
    }
};
var Price_html;
(function() {
    var c = 11;
    Price_html = {
        getHTML: function(k) {
            k += "";
            a(k);
            var j = ['<span class="prc_wp" style="zoom:1;position:relative;overflow:hidden;width:' + c * k.length + 'px" >', '<em class="prc">'];
            j.push(d(k));
            j.push(f(k.length));
            j.push("</em></span>");
            return j.join("");
        }
    };
    var b, i, h, g;

    function a(l) {
        h = [];
        i = [];
        var j = l.length;
        do {
            h[h.length] = j;
        } while (--j);
        b = Math.floor(Math.random() * l.length + 1);
        do {
            var k = Math.floor(Math.random() * h.length);
            i[i.length] = h[k];
            h.splice(k, 1);
        } while (--b);
    }

    function d(l) {
        var m = -1 * c * l.length;
        g = [];
        var j = l.split("");
        for (var k = 0; k < i.length; k++) {
            g[g.length] = { digit: i[k], val: j[i[k] - 1] };
            j[i[k] - 1] = Math.floor(Math.random() * 10) + "";
        }
        return"<b style='width:" + Math.abs(m) + "px;left:" + m + "px'>" + j.join("") + "</b>";
    }

    function f(j) {
        var o = 1;
        var k = j;
        var m = [];
        for (var l = 0; l < g.length; l++) {
            var n = (-1 * (k - g[l].digit + o) * c) + "px";
            m[m.length] = '<b style="left:' + n + '">' + g[l].val + "</b>";
        }
        return m.join("");
    }
})();
var FlightEventProxy = (function() {
    function c(d) {
        var f = d.getAttribute("data-evtDataId");
        return f && UICacheManager.getCache(f);
    }

    function b(h, g) {
        var f = c(h);
        if (!f) {
            return;
        }
        var d = f.dataSource();
        f.stat.ownerWrapperEntity(d);
        LockScreen(function() {
            var j = d.ownerFlight(), k = new Date($jex.date.parse(j.deptDate() + " " + j.deptTime())), i = d.vendor().tss();
            if (window.checkTimeOfStopSale && checkTimeOfStopSale.deal(k, i)) {
                return;
            }
            f.bookingScreenUI.preBooking(function() {
                if (typeof window.BookingPriceCheck != "undefined") {
                    if (BookingPriceCheck.check(d, g)) {
                        return;
                    }
                }
                f.bookingLockScreenUI.preBooking(function(l) {
                    d.setVpr(l);
                    f.jumpToBooking(d, g);
                }, g);
            });
        });
        return false;
    }

    function a(f) {
        this.$node = $jex.$(f);
        var d = this;
        $jex.event.binding(this.$node, "click", function(g) {
            var h = g.target || window.event.srcElement;
            while (h && h != this) {
                if (h.id && d.clickDo(h.id, h) === false) {
                    $jex.stopEvent(g);
                    break;
                }
                h = h.parentNode;
            }
        });
    }

    a.prototype = {
        clickDo: function(g, f) {
            if (/^js-stopClick/.test(g)) {
                return false;
            }
            if (!/(js_ctype)|([a-z_-]+)XI\d+/i.test(g)) {
                return;
            }
            var d = this["_" + (RegExp.$1 || RegExp.$2) + "Click"];
            return d && d(f);
        },
        _btnHideClick: function(f) {
            var g = c(f);
            if (!g) {
                return;
            }
            g.owner().hideVendorPanel();
            var d = $jex.offset($jex.$("resultAnchor"));
            window.scrollTo(d.left, d.top);
            return false;
        },
        _js_ctypeClick: function(f) {
            var d = c(f);
            if (!d) {
                return;
            }
            LockScreen(function() {
                var g = d.dataSource(), h = f.getAttribute("data-ctype");
                System.service.genBookingTimeStamp();
                System.analyzer.triggerTrace = true;
                TsinghuaOneWayTracker.trackTabChange(h, d);
                d.changeWrapperTypeList(h);
            });
            return false;
        },
        _btnstarRClick: function(g) {
            var f = c(g);
            if (!f) {
                return;
            }
            var h = f.starUI, d = f.dataSource();
            SingletonUIManager.register("vendor", h, function() {
                var i = d.vendor().starRank();
                var j = f.find("usercomment");
                if (h.commitOpened) {
                    h.hideCommit();
                } else {
                    h.updateUserCommentPanel(d, i);
                    h.render(j);
                    h.showCommit();
                }
            }, function() { h.hideCommit(); });
            return false;
        },
        _zyxBtnBookClick: function(d) { return b(d, 1); },
        _btnBookClick: function(d) { return b(d, 1); },
        _lbtnBookClick: function(d) { return b(d, 0); },
        _flightbarClick: function(d) { return b(d, 1); },
        _openwrapperbtnClick: function(f) {
            var d = c(f);
            if (!d) {
                return;
            }
            d._isUserClick = true;
            d._openBtnClick = true;
            d.openBtnClickEvent();
            d._isUserClick = false;
            d._openBtnClick = false;
            return false;
        },
        _reWrBtnClick: function(j) {
            var g = c(j);
            if (!g) {
                return;
            }
            var i = g.reWrCache, f = i.entity;
            if (f.dataSource().proBooking) {
                var k = { recom: 1, BookingLocation: "kuaishu" };
                if (f.isOta()) {
                    var h = f.afeePrice() ? 1 : 0;
                    var d = f.dataSource().type;
                    d = d && d.toLocaleUpperCase();
                    if (d && h == 1) {
                        d += "I";
                    }
                    k.prt = h;
                }
                i.entity.setVpr();
                i.entity.booking(g.getRwstat(), k);
            } else {
                g.openBtnClickEvent();
            }
            return false;
        },
        _gotoFirstDetailClick: function(f) {
            var d = c(f);
            if (!d) {
                return;
            }
            d.owner().gotoDetailPage(d.dataSource().firstTrip());
            return false;
        },
        _gotoSecondDetailClick: function(f) {
            var d = c(f);
            if (!d) {
                return;
            }
            d.owner().gotoDetailPage(d.dataSource().secondTrip());
            return false;
        },
        _gotoDetailClick: function(f) {
            var d = c(f);
            if (!d) {
                return;
            }
            d.ownerVendorListUI().owner().gotoDetailPage(d.dataSource());
            return false;
        }
    };
    return a;
})();
var HoldLastShowFlight = (function() {
    var c = {};
    var a, b;
    c.init = function(d) {
        if (!d.openCode) {
            return;
        }
        c.setData(d);
    };
    c.clearLast = function() { a = null; };
    c.setData = function(d) {
        a = d.openCode;
        if (a) {
            a = decodeURIComponent(a);
        }
        b = d.openType;
        delete d.openCode;
        delete d.openType;
    };
    c.getUrlFlight = function() { return a; };
    c.getUrlType = function(d) { return d === a && /^(all|bf|s)$/.test(b) ? b : null; };
    c.goHoldUrl = function(f, d) {
        $jex.ui.lockScreenProgress({}, function() {
            var h = window.location.param();
            h.openCode = encodeURIComponent(f);
            h.openType = d;
            var g = window.location.href.split("?")[0];
            g += "?" + $jex.toQueryString(h);
            location.href = g;
        });
    };
    return c;
})();

function OTABlade(a) {
    this.extractor = a;
    this.group = new OTAGroup();
    this._wrLen = 0;
}

OTABlade.prototype = {
    getLength: function() { return this._wrLen; },
    extract: function(a) { this.extractor.extract(a); },
    require_wrapperinfo: function(b) {
        var a = this;
        this.group.datasource(this.extractor.result());
        this.group.with_wrappers(function() { b.call(a); });
    },
    getDiscount: function(a) {
        if (a <= 0) {
            return"";
        }
        if (a > 9.9) {
            if (a > 10) {
                return"";
            } else {
                return"全价";
            }
        } else {
            if (a.toString().length == 1) {
                return a + ".0折";
            } else {
                return a + "折";
            }
        }
    },
    create_ui: function() {
        var c = new UIObject();
        var a = this.group.opts;
        var g = this.group.sort_by_wrappers(this.extractor.flightType);
        var n = g && g.length || 0;
        this._wrLen = n;
        if (!n) {
            return c;
        }
        c.text('<div class="b_fly_pmt">');
        c.text('<div class="e_pmt_tit"><h3>机票推广</h3></div>');
        c.text('<div class="e_pmt_cont"> ');
        for (var m = 0; m < n; m++) {
            var p = g[m];
            var d = p.createBookingUrl(this.group.opts.queryID, window.SERVER_TIME || new Date(), m);
            var b = p.info.pr;
            var h = "";
            var j = p.flight.outFi();
            var o = p.flight.retFi();
            var f = "";
            if (p.flight.pi.op) {
                f = this.getDiscount(Math.floor(b * 100 / p.flight.pi.op) / 10);
            }
            var q = "";
            var l = p.info.tax;
            if (l && l == -1) {
                h += "（含税）";
            }
            if (p.info.afee) {
                h += "（含险）";
                b += p.info.afee;
            }
            var k = p.flight.showType();
            if (k == "rt") {
                q = '<i class="i_baf"></i>';
            } else {
                if (k == "tf") {
                    q = '<i class="i_cnt"></i>';
                }
            }
            type = k == "rt" ? '<b class="rt"></b>' : '<b class="tr"></b>';
            c.text('<dl class="dl_pmt_fly">');
            c.text('<dt><a target="_blank" href="', d, '">', a.fromCity, "&nbsp;-&nbsp;", a.toCity, "&nbsp;&nbsp;", j.ca, "</a>", q, "</dt>");
            if (k == "rt") {
                this._createPriceHtml(c, j, "去程");
                this._createPriceHtml(c, o, "回程");
            } else {
                this._createPriceHtml(c, j);
            }
            c.text('<dd><a target="_blank" href="', d, '" class="lnk_bk">订票</a><span class="highlight"><i class="rmb">¥</i><em class="f_tmt">', b, "</em>", h, "</span>&nbsp;", f, "</dd>");
            c.text("</dl>");
        }
        c.text("</div> ");
        c.text("</div>");
        return c;
    },
    _createPriceHtml: function(a, b, c) {
        c = c && (c + "&nbsp") || "";
        a.text("<dd>" + c, this._fixDD(b.dd) + '<span class="f_tm">', b.dt, "-", b.at);
        if (b.at.replace(":", "") * 1 - b.dt.replace(":", "") * 1 < 0) {
            a.text('<i class="i_1day"></i>');
        }
        a.text("</span>", b.co, "</dd>");
    },
    _getCity: function(c, b) {
        c = c || "";
        b = b || "";
        var a = "";
        if ((c.length >= 4 || b.length >= 4) || (!c || !b)) {
            a = b;
        } else {
            a = c + " - " + b;
        }
        return a;
    },
    _fixDD: function(a) {
        a = a || "";
        try {
            return a.replace(/\d\d\d\d-/, "").replace("-", "/");
        } catch (b) {
            return"";
        }
    },
    load: function(b) {
        var a = this;
        this.require_wrapperinfo(function() {
            var c = a.create_ui();
            b.call(a, c);
        });
    }
};

function OTAInfoExtractor(a) {
    this.flight_map = {};
    this.flight_array = [];
    if (a) {
        $jex.merge(this, a);
    }
}

OTAInfoExtractor.prototype = {
    result: function() { return this.flight_array; },
    add: function(a) {
        if (!this.flight_map[a.key()]) {
            this.flight_map[a.key()] = a;
            this.flight_array.push(a);
        } else {
            this.flight_map[a.key()].priceInfo(a.priceInfo());
        }
    },
    extract: function(a) {}
};

function OnewayOTAInfoExtractor() { OTAInfoExtractor.call(this); }

OnewayOTAInfoExtractor.prototype = $jex.merge({ extract: function(a) {} }, OTAInfoExtractor);

function RoundtripOTAInfoExtractor() { OTAInfoExtractor.call(this); }

RoundtripOTAInfoExtractor.prototype = $jex.merge({ extract: function(a) {} }, OTAInfoExtractor);

function OTAFlight(a) {
    this.keycode = a;
    this.wrappers = {};
    this._out = null;
    this._ret = null;
}

OTAFlight.prototype = {
    key: function() { return this.keycode; },
    flightInfo: function(b, a) {
        if (b) {
            this._out = b;
        }
        if (a) {
            this._ret = a;
        }
        return[this._out, this._ret];
    },
    outFi: function() {
        if (this.wrInfo() && this.wrInfo().info) {
            return this.wrInfo().info[0];
        } else {
            if (this._out) {
                return this._out;
            } else {
                return{};
            }
        }
    },
    retFi: function() {
        if (this.wrInfo() && this.wrInfo().info) {
            return this.wrInfo().info[1];
        } else {
            if (this._ret) {
                return this._ret;
            } else {
                return{};
            }
        }
    },
    priceInfo: function(a) {
        if (a) {
            this.pi = a;
        }
        return this.pi;
    },
    price: function() { return this.pi ? this.pi.lowpr : Number.MAX_VALUE; },
    wrInfo: function(a) {
        if (a) {
            this.info = a;
        }
        return this.info;
    },
    type: function() {
        if (this.keycode.indexOf("0") == 0) {
            return"rt";
        } else {
            return"ow";
        }
    },
    showType: function() {
        if (this.keycode.indexOf("0") == 0) {
            return"rt";
        } else {
            if (this.keycode.indexOf("/") > 0) {
                return"tf";
            } else {
                return"ow";
            }
        }
    },
    getWrappers: function(a) {
        if (a) {
            if (!this.wrappers[a]) {
                this.wrappers[a] = new OTAWrapper(this, this.wrInfo().wrs[a]);
            }
            return this.wrappers[a];
        } else {
            return this.wrappers;
        }
    }
};

function OTAOnewayFlight(a) { OTAFlight.call(this, a); }

OTAOnewayFlight.prototype = $jex.merge({}, OTAFlight.prototype);

function OTARoundtripFlight(a) { OTAFlight.call(this, a); }

OTARoundtripFlight.prototype = $jex.merge({}, OTAFlight.prototype);

function OTATransferFlight(a) { OTAFlight.call(this, a); }

OTATransferFlight.prototype = $jex.merge({}, OTAFlight.prototype);

function OTAWrapper(a, b) {
    this.flight = a;
    this.info = b;
}

OTAWrapper.prototype.createBookingUrl = function(d, c, b) {
    var a = { full: "false", fk: 0, updatetime: this.info.ut, inter: "false", departureTime: this.flight.outFi().dt, arrivalTime: this.flight.outFi().at };
    switch (this.flight.type()) {
    case"rt":
        a.isRt = 1;
        a.returnDepartureTime = this.flight.retFi().dt;
        a.returnArrivalTime = this.flight.retFi().at;
        break;
    }
    if (c) {
        a.querytime = c.getTime();
    }
    a.stat = (b < 10 ? "0" + b : b) + "1006";
    return"/booksystem/booking.jsp?" + this.info.bu + "&" + $jex.toQueryString(a);
};

function OTAGroup(a) {
    this.opts = $jex.merge({ debug: false, carrier_white_filter: null, carrier_black_filter: null, elsCount: 10, currentDate: new Date(), fromDate: new Date(), queryID: "" }, a);
    this.resultmap = {};
    this._store = { "0": [], "1": [], "2": [], "3": [] };
}

OTAGroup.prototype = {
    WRAPPER_URL: "/twell/flight/flight_ad.jsp",
    CARRIER_COUNT_SETTING: { "0": { "0": 0, "1": 1, "2": 4, "3": 5 }, "1": { "0": 0, "1": 0, "2": 2, "3": 8 }, "2": { "0": 0, "1": 0, "2": 0, "3": 10 }, "3": { "0": 0, "1": 0, "2": 0, "3": 0 }, "default": { "0": 2, "1": 2, "2": 3, "3": 3 } },
    options: function(b) {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                this.opts[a] = b[a];
            }
        }
    },
    datasource: function(a) { this.list = a; },
    groupByRole: function() {
        var b = this;
        var f = [];
        var d = b.opts;
        $jex.foreach(this.list, function(g) {
            var h = g.outFi().ca;
            if ((d.carrier_white_filter !== null && d.carrier_white_filter.indexOf(h) >= 0) || (d.carrier_black_filter !== null && d.carrier_black_filter.indexOf(h) < 0) || d.debug) {
                f.push(g);
            }
        });
        f.sort(function(h, g) { return h.price() - g.price(); });
        var c = this.getSetting();
        var a = this._store;
        $jex.foreach(f, function(g) {
            var h = b.timeRange(g.outFi().dt);
            if (a[h].length < c[h]) {
                a[h].push(g);
                b.resultmap[g.key()] = g;
            }
        });
    },
    sort_by_wrappers: function(c) {
        var d = this._get_wrappers_info();
        var k = d.codelist || [];
        var m = this.resultmap;
        var b = [];
        var g = k.length;
        if (c && c === "ow" && g > 9) {
            g = 9;
        }
        for (var f = 0; f < g; f++) {
            var l = (k[f] || "").split("_");
            var a = l[0];
            var j = l[1];
            if (m[a]) {
                var h = m[a].getWrappers(j);
                if (h) {
                    b.push(h);
                }
            }
        }
        return b;
    },
    with_wrappers: function(c) {
        var a = this;
        this.groupByRole();
        var b = { type: this.opts.type, count: this.opts.elsCount, code: this.toCodeString(), queryID: this.opts.queryID };
        $jex.jsonp(a.WRAPPER_URL, b, function(d) {
            a._wrappers_info = d;
            a._with_wrappers();
            c.call(a);
        });
    },
    _get_wrappers_info: function() { return this._wrappers_info || { codemap: {}, codelist: [] }; },
    _with_wrappers: function() {
        var c = this._get_wrappers_info();
        var a = c.codemap || {};
        var b = this.resultmap;
        $jex.foreach(a, function(h, f, g) {
            var d = b[g];
            if (!d) {
                return $jex.$continue;
            }
            d.wrInfo(h);
        });
    },
    toCodeString: function() {
        var a = [];
        $jex.foreach(this._store, function(b) { $jex.foreach(b, function(c) { a.push(c.key()); }); });
        return a.join(",");
    },
    getSetting: function(f) {
        var b = this.opts.currentDate;
        var d = this.opts.fromDate;
        var a = this.timeRange(b.getHours().toString()).toString();
        var g = (b.getFullYear() == d.getFullYear() && b.getMonth() == d.getMonth() && b.getDate() == d.getDate());
        var c = this.CARRIER_COUNT_SETTING["default"];
        if (g) {
            c = this.CARRIER_COUNT_SETTING[a] || c;
        }
        return c;
    },
    timeRange: function(c) {
        var a = c.substr(0, 2);
        var b = parseInt(a, 10);
        if (b >= 6 && b < 12) {
            return 0;
        }
        if (b == 12) {
            return 1;
        }
        if (b > 12 && b <= 17) {
            return 2;
        }
        return 3;
    }
};
var $OTALOGIC = (function() {
    return{
        vatafrom: "",
        vatato: "",
        departureTime: "",
        arrivalTime: "",
        track: function() {
            var d = $OTALOGIC.te1 - $OTALOGIC.ts1;
            var c = $OTALOGIC.te2 - $OTALOGIC.te1;
            var b = $OTALOGIC.te3 - $OTALOGIC.te2;
            var a = new Image();
            var f = new Date().getTime();
            a.src = ["http://bc.qunar.com/qda_b.html?t=", f, "&pid=", encodeURIComponent($OTALOGIC.id1), "&t0=", $OTALOGIC.te1, "&t1=", d, "&t2=", c, "&t3=", b, "&vatafrom=", $OTALOGIC.vatafrom, "&vatato=", $OTALOGIC.vatato, "&departureTime=", $OTALOGIC.departureTime].join("");
        },
        find_config_by_route: function(b) {
            b = (b || "white");
            var c = window.location.toString();
            var d = OTA_AD_CONFIG["route_by_" + b + "_list"];
            for (var a = 0; a < d.length; a++) {
                if (d[a].test(c)) {
                    return OTA_AD_CONFIG[b + "_list"];
                }
            }
            return null;
        },
        isDebug: function() { return AD_Manage.isDebug(); },
        init: function(g, f, c, a) {
            this.vatafrom = g;
            this.vatato = f;
            this.departureTime = c;
            this.arrivalTime = a;
            AD_Manage.qad_query = function(i) {
                var h = ["vatafrom=", encodeURIComponent(g), "&vatato=", encodeURIComponent(f)].join("");
                i(h);
            };

            function b() { return".inter_rc {padding:5px; border-top:1px solid #ccc; } .inter_rc li{float:left;} .inter_rc li.perrc { float:left; display:inline; margin-top:3px;width:100px; height:24px;line-height:22px;background:url(http://simg1.qunarzz.com/site/images/2011/bt_detail.png) 0px 0px no-repeat; } .inter_rc li.perrc .t {float:left;padding:0px 0 0 24px;padding-top:2px\9;_padding-top:0px;height:22px;overflow:hidden;} .inter_rc li.pr { width:103px;float:left; display:inline; margin-right:10px; font-family:arial; font-size:14px; color:#0069ca; } .inter_rc li.pr b { font-size:20px; } .inter_rc li.city { width:320px;text-align:center;float:left; display:inline; margin-right:30px; font-size:14px; line-height:30px; color:#0069ca; } .inter_rc li.no_pr{ width:433px;}.inter_rc li.ops { float:right; display:inline; margin-top:5px; } .inter_rc li.ops .btnView { display:block; width:70px; height:22px; line-height:22px; text-align:center; background:url(http://simg1.qunarzz.com/site/images/2011/bt_detail.png) 0px -40px no-repeat; color:#fff; } .inter_rc li.ops .btnView:hover { background-position:0 -67px; color:#fff; } .inter_rc li.ops .btnView:active { background-position:0 -94px; color:#fff; }"; }

            function d() {
                QNR.AD.createQAd("ifrNTAD_datatop_sec", function(h) {
                    h.params.departureTime = c;
                    h.params.arrivalTime = a;
                    h.getCss = b;
                    h.renderHtmlItem = function(j) {
                        var i = QadAdUnits.parse_clk_url(j);
                        return['<ul class="inter_rc clrfix">', '	<li class="perrc"><span class="t">推广链接</span></li>', '	<li class="city no_pr">', j.title || "", "</li> ", '	<li class="ops"><a class="btnView" target="_blank" href="', i, '">查看详情</a></li>', "</ul>"].join("");
                    };
                    QadAdUnits.create_iframe_hander(h, function(i) {});
                    h.load();
                });
            }

            QNR.AD.createQAd("ifrNTAD_datatop", function(h) {
                h.params.departureTime = c;
                h.params.arrivalTime = a;
                h.getCss = b;
                h.renderHtmlItem = function(k) {
                    var j = QadAdUnits.parse_clk_url(k);
                    return['<ul class="inter_rc clrfix">', '	<li class="perrc"><span class="t">特别推荐</span></li>', '	<li class="city">', k.title || "", "</li> ", '	<li class="pr">¥<b>', k.description || "", "</b></li>", '	<li class="ops"><a class="btnView" target="_blank" href="', j, '">查看详情</a></li>', "</ul>"].join("");
                };
                var i = $OTALOGIC.isDebug();
                QadAdUnits.create_iframe_hander(h, function(j) {
                    if (j == 0 || i) {
                        d();
                    }
                });
            });
            if (window["$OTA"]) {
                $OTA.group.options({ carrier_white_filter: $OTALOGIC.find_config_by_route("white"), carrier_black_filter: $OTALOGIC.find_config_by_route("black"), debug: $OTALOGIC.isDebug() });
                if (window.location.toString().indexOf("adtest=beta") > 0 && window.location.toString().indexOf("local") >= 0) {
                    $OTA.group.WRAPPER_URL = "http://flight41.qunar.com/twell/flight/flight_ad.jsp";
                }
            }
        },
        load_top: function(a) {
            var b = $OTALOGIC.isDebug();
            QNR.AD.createQdeCallback(a, function(c) {
                if (!c || b) {
                    QNR.AD.loadOneAD("ifrNTOPAD");
                }
            });
        },
        load_right: function() {
            var d = $OTALOGIC.isDebug();

            function b(j) { return document.getElementById(j); }

            function i(j) {
                var k = b(j + "_title");
                if (k) {
                    k.style.display = "block";
                }
            }

            function h(j) {
                if ($jex.$("ifrNTAD_title_more")) {
                    $jex.$("ifrNTAD_title_more").setAttribute("href", "http://a.qunar.com/more.html?type=flight&adfrom=" + encodeURIComponent($OTALOGIC.vatafrom) + "&adto=" + encodeURIComponent($OTALOGIC.vatato) + "&adcon=" + ($OTALOGIC.vatacon || "") + "&adpos=" + encodeURIComponent(j));
                }
            }

            function g(k, j) {
                return function(l) {
                    if (l > 0) {
                        i(j);
                    }
                    k && k(l);
                };
            }

            function a(l) {
                var k = b("ifrNTAD_patch"), j = k.getAttribute("data-query");
                k.setAttribute("data-query", j + "&rows=" + l);
                $OTALOGIC.ts3 = new Date().getTime();
                QadAdUnits.create_text_call("ifrNTAD_patch", g(function() {
                    $OTALOGIC.te3 = new Date().getTime();
                    $OTALOGIC.track();
                }, "ifrNTAD_patch"));
                QNR.AD.loadOneAD("ifrNTAD_patch");
            }

            function c(j) {
                $OTA.group.options({ elsCount: j });
                $OTALOGIC.ts2 = new Date().getTime();
                var k = $jex.$("divOTA");
                $OTA.load(function(m) {
                    m.write(k);
                    var n = this.getLength();
                    if (n > 0) {
                        k.style.display = "block";
                    }
                    $OTALOGIC.te2 = new Date().getTime();
                    j = j - n;
                    if (d) {
                        j = 10;
                    }
                    if (j > 0) {
                        a(j);
                    } else {
                        $OTALOGIC.ts3 = $OTALOGIC.te3 = new Date().getTime();
                        $OTALOGIC.track();
                    }
                });
                var l = new Date().getTime();
                $jex.event.bind(k, "click", function(m) {
                    var n = m.target || event.srcElement;
                    if (n.tagName == "A") {
                        if ((new Date().getTime() - l) > 10 * 60 * 1000) {
                            LockScreen(null, { msg: "您的前一次搜索已经过去了10分钟，<br />正在为您重新搜索以提供更准确报价", lockNow: true });
                            $jex.stopEvent(m);
                        }
                    }
                });
            }

            function f(j) {
                if (!window["$OTA"]) {
                    $OTALOGIC.ts2 = $OTALOGIC.te2 = new Date().getTime();
                    $OTALOGIC.ts3 = new Date().getTime();
                    a(j);
                } else {
                    setTimeout(function() { c(j); }, 3000);
                }
            }

            $OTALOGIC.ts1 = new Date().getTime();
            QadAdUnits.create_text_call("ifrNTAD", g(function(j) {
                $OTALOGIC.te1 = new Date().getTime();
                var m = b("ifrNTAD"), l = m.getAttribute("data-query");
                if (/vataposition=([a-z_=\d%]+)&?/i.test(l)) {
                    $OTALOGIC.id1 = RegExp.$1;
                }
                if (!/\brows=(\d+)/.test(l)) {
                    return;
                }
                var o = Number(RegExp.$1);
                var n = /inter/.test(location.pathname) ? "QNR_YzE=_CN" : "QNR_YQ==_CN";
                h(n);
                var k = o - j;
                if (d) {
                    k = 10;
                }
                if (k > 0) {
                    f(k);
                } else {
                    $OTALOGIC.ts2 = $OTALOGIC.te2 = $OTALOGIC.ts3 = $OTALOGIC.te3 = new Date().getTime();
                    $OTALOGIC.track();
                }
            }, "ifrNTAD"));
        }
    };
})();
var TrimPath;
(function() {
    if (typeof LOG == "undefined") {
        LOG = { error: function() {} };
    }
    if (TrimPath == null) {
        TrimPath = new Object();
    }
    if (TrimPath.evalEx == null) {
        TrimPath.evalEx = function(src) { return eval(src); };
    }
    var UNDEFINED;
    if (Array.prototype.pop == null) {
        Array.prototype.pop = function() {
            if (this.length === 0) {
                return UNDEFINED;
            }
            return this[--this.length];
        };
    }
    if (Array.prototype.push == null) {
        Array.prototype.push = function() {
            for (var i = 0; i < arguments.length; ++i) {
                this[this.length] = arguments[i];
            }
            return this.length;
        };
    }
    TrimPath.parseTemplate = function(tmplContent, optTmplName, optEtc) {
        if (optEtc == null) {
            optEtc = TrimPath.parseTemplate_etc;
        }
        var funcSrc = parse(tmplContent, optTmplName, optEtc);
        var func = TrimPath.evalEx(funcSrc, optTmplName, 1);
        if (func != null) {
            return new optEtc.Template(optTmplName, tmplContent, funcSrc, func, optEtc);
        }
        return null;
    };
    try {
        String.prototype.process = function(context, optFlags) {
            var template = TrimPath.parseTemplate(this, null);
            if (template != null) {
                return template.process(context, optFlags);
            }
            return this;
        };
    } catch (e) {
    }
    TrimPath.parseTemplate_etc = {};
    TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro";
    TrimPath.parseTemplate_etc.statementDef = {
        "if": { delta: 1, prefix: "if (", suffix: ") {", paramMin: 1 },
        "else": { delta: 0, prefix: "} else {" },
        elseif: { delta: 0, prefix: "} else if (", suffix: ") {", paramDefault: "true" },
        "/if": { delta: -1, prefix: "}" },
        "for": {
            delta: 1,
            paramMin: 3,
            prefixFunc: function(stmtParts, state, tmplName, etc) {
                if (stmtParts[2] != "in") {
                    throw new etc.ParseError(tmplName, state.line, "bad for loop statement: " + stmtParts.join(" "));
                }
                var iterVar = stmtParts[1];
                var listVar = "__LIST__" + iterVar;
                var _output = ["var ", listVar, " = ", stmtParts[3], ";", "var __LENGTH_STACK__;", "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();", "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;", "if ((", listVar, ") != null) { ", "var __IDX__ = -1; var ", iterVar, "_ct = 0;", "for (var ", iterVar, "_index in ", listVar, ") {  ", iterVar, "_ct++;", "if (typeof(", listVar, "[", iterVar, "_index]) == 'function') {continue;}", "__IDX__++; __LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var __KEY__ = ", iterVar, "_index;", "var ", iterVar, " = ", listVar, "[", iterVar, "_index];"].join("");
                return _output;
            }
        },
        forelse: { delta: 0, prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (", suffix: ") {", paramDefault: "true" },
        "/for": { delta: -1, prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];" },
        "var": { delta: 0, prefix: "var ", suffix: ";" },
        macro: {
            delta: 1,
            prefixFunc: function(stmtParts, state, tmplName, etc) {
                var macroName = stmtParts[1].split("(")[0];
                return["var ", macroName, " = function", stmtParts.slice(1).join(" ").substring(macroName.length), "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("");
            }
        },
        "/macro": { delta: -1, prefix: " return _OUT_arr.join(''); };" }
    };
    TrimPath.parseTemplate_etc.modifierDef = { eat: function(v) { return""; }, escape: function(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }, capitalize: function(s) { return String(s).toUpperCase(); }, "default": function(s, d) { return s != null ? s : d; } };
    TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape;
    TrimPath.parseTemplate_etc.Template = function(tmplName, tmplContent, funcSrc, func, etc) {
        this.process = function(context, flags) {
            if (context == null) {
                context = {};
            }
            if (context._MODIFIERS == null) {
                context._MODIFIERS = {};
            }
            if (context.defined == null) {
                context.defined = function(str) { return(context[str] != undefined); };
            }
            for (var k in etc.modifierDef) {
                if (context._MODIFIERS[k] == null) {
                    context._MODIFIERS[k] = etc.modifierDef[k];
                }
            }
            if (flags == null) {
                flags = {};
            }
            var resultArr = [];
            var resultOut = { write: function(m) { resultArr.push(m); } };
            try {
                func(resultOut, context, flags);
            } catch (e) {
                if (flags.throwExceptions == true) {
                    throw e;
                }
                var result = new String(resultArr.join("") + "[ERROR: " + e.toString() + (e.message ? "; " + e.message : "") + "]");
                result.exception = e;
                LOG.error("TEMPLATE:" + result);
                LOG.error("TEMPLATE:" + $H(e).toJSON());
                return"";
            }
            return resultArr.join("");
        };
        this.name = tmplName;
        this.source = tmplContent;
        this.sourceFunc = funcSrc;
        this.toString = function() { return"TrimPath.Template [" + tmplName + "]"; };
    };
    TrimPath.parseTemplate_etc.ParseError = function(name, line, message) {
        this.name = name;
        this.line = line;
        this.message = message;
    };
    TrimPath.parseTemplate_etc.ParseError.prototype.toString = function() { return("TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message); };
    var parse = function(body, tmplName, etc) {
        body = cleanWhiteSpace(body);
        var funcText = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
        var state = { stack: [], line: 1 };
        var endStmtPrev = -1;
        while (endStmtPrev + 1 < body.length) {
            var begStmt = endStmtPrev;
            begStmt = body.indexOf("{", begStmt + 1);
            while (begStmt >= 0) {
                var endStmt = body.indexOf("}", begStmt + 1);
                var stmt = body.substring(begStmt, endStmt);
                var blockrx = stmt.match(/^\{(cdata|minify|eval)/);
                if (blockrx) {
                    var blockType = blockrx[1];
                    var blockMarkerBeg = begStmt + blockType.length + 1;
                    var blockMarkerEnd = body.indexOf("}", blockMarkerBeg);
                    if (blockMarkerEnd >= 0) {
                        var blockMarker;
                        if (blockMarkerEnd - blockMarkerBeg <= 0) {
                            blockMarker = "{/" + blockType + "}";
                        } else {
                            blockMarker = body.substring(blockMarkerBeg + 1, blockMarkerEnd);
                        }
                        var blockEnd = body.indexOf(blockMarker, blockMarkerEnd + 1);
                        if (blockEnd >= 0) {
                            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
                            var blockText = body.substring(blockMarkerEnd + 1, blockEnd);
                            if (blockType == "cdata") {
                                emitText(blockText, funcText);
                            } else {
                                if (blockType == "minify") {
                                    emitText(scrubWhiteSpace(blockText), funcText);
                                } else {
                                    if (blockType == "eval") {
                                        if (blockText != null && blockText.length > 0) {
                                            funcText.push("_OUT.write( (function() { " + blockText + " })() );");
                                        }
                                    }
                                }
                            }
                            begStmt = endStmtPrev = blockEnd + blockMarker.length - 1;
                        }
                    }
                } else {
                    if (body.charAt(begStmt - 1) != "$" && body.charAt(begStmt - 1) != "\\") {
                        var offset = (body.charAt(begStmt + 1) == "/" ? 2 : 1);
                        if (body.substring(begStmt + offset, begStmt + 10 + offset).search(TrimPath.parseTemplate_etc.statementTag) == 0) {
                            break;
                        }
                    }
                }
                begStmt = body.indexOf("{", begStmt + 1);
            }
            if (begStmt < 0) {
                break;
            }
            var endStmt = body.indexOf("}", begStmt + 1);
            if (endStmt < 0) {
                break;
            }
            emitSectionText(body.substring(endStmtPrev + 1, begStmt), funcText);
            emitStatement(body.substring(begStmt, endStmt + 1), state, funcText, tmplName, etc);
            endStmtPrev = endStmt;
        }
        emitSectionText(body.substring(endStmtPrev + 1), funcText);
        if (state.stack.length != 0) {
            throw new etc.ParseError(tmplName, state.line, "unclosed, unmatched statement(s): " + state.stack.join(","));
        }
        funcText.push("}}; TrimPath_Template_TEMP");
        return funcText.join("");
    };
    var emitStatement = function(stmtStr, state, funcText, tmplName, etc) {
        var parts = stmtStr.slice(1, -1).split(" ");
        var stmt = etc.statementDef[parts[0]];
        if (stmt == null) {
            emitSectionText(stmtStr, funcText);
            return;
        }
        if (stmt.delta < 0) {
            if (state.stack.length <= 0) {
                throw new etc.ParseError(tmplName, state.line, "close tag does not match any previous statement: " + stmtStr);
            }
            state.stack.pop();
        }
        if (stmt.delta > 0) {
            state.stack.push(stmtStr);
        }
        if (stmt.paramMin != null && stmt.paramMin >= parts.length) {
            throw new etc.ParseError(tmplName, state.line, "statement needs more parameters: " + stmtStr);
        }
        if (stmt.prefixFunc != null) {
            funcText.push(stmt.prefixFunc(parts, state, tmplName, etc));
        } else {
            funcText.push(stmt.prefix);
        }
        if (stmt.suffix != null) {
            if (parts.length <= 1) {
                if (stmt.paramDefault != null) {
                    funcText.push(stmt.paramDefault);
                }
            } else {
                for (var i = 1; i < parts.length; i++) {
                    if (i > 1) {
                        funcText.push(" ");
                    }
                    funcText.push(parts[i]);
                }
            }
            funcText.push(stmt.suffix);
        }
    };
    var emitSectionText = function(text, funcText) {
        if (text.length <= 0) {
            return;
        }
        var nlPrefix = 0;
        var nlSuffix = text.length - 1;
        while (nlPrefix < text.length && (text.charAt(nlPrefix) == "\n")) {
            nlPrefix++;
        }
        while (nlSuffix >= 0 && (text.charAt(nlSuffix) == " " || text.charAt(nlSuffix) == "\t")) {
            nlSuffix--;
        }
        if (nlSuffix < nlPrefix) {
            nlSuffix = nlPrefix;
        }
        if (nlPrefix > 0) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(0, nlPrefix).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1);
            }
            funcText.push(s);
            funcText.push('");');
        }
        var lines = text.substring(nlPrefix, nlSuffix + 1).split("\n");
        for (var i = 0; i < lines.length; i++) {
            emitSectionTextLine(lines[i], funcText);
            if (i < lines.length - 1) {
                funcText.push('_OUT.write("\\n");\n');
            }
        }
        if (nlSuffix + 1 < text.length) {
            funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
            var s = text.substring(nlSuffix + 1).replace("\n", "\\n");
            if (s.charAt(s.length - 1) == "\n") {
                s = s.substring(0, s.length - 1);
            }
            funcText.push(s);
            funcText.push('");');
        }
    };
    var emitSectionTextLine = function(line, funcText) {
        var endMarkPrev = "}";
        var endExprPrev = -1;
        while (endExprPrev + endMarkPrev.length < line.length) {
            var begMark = "${", endMark = "}";
            var begExpr = line.indexOf(begMark, endExprPrev + endMarkPrev.length);
            if (begExpr < 0) {
                break;
            }
            if (line.charAt(begExpr + 2) == "%") {
                begMark = "${%";
                endMark = "%}";
            }
            var endExpr = line.indexOf(endMark, begExpr + begMark.length);
            if (endExpr < 0) {
                break;
            }
            emitText(line.substring(endExprPrev + endMarkPrev.length, begExpr), funcText);
            var exprArr = line.substring(begExpr + begMark.length, endExpr).replace(/\|\|/g, "#@@#").split("|");
            for (var k in exprArr) {
                if (exprArr[k].replace) {
                    exprArr[k] = exprArr[k].replace(/#@@#/g, "||");
                }
            }
            funcText.push("_OUT.write(");
            emitExpression(exprArr, exprArr.length - 1, funcText);
            funcText.push(");");
            endExprPrev = endExpr;
            endMarkPrev = endMark;
        }
        emitText(line.substring(endExprPrev + endMarkPrev.length), funcText);
    };
    var emitText = function(text, funcText) {
        if (text == null || text.length <= 0) {
            return;
        }
        text = text.replace(/\\/g, "\\\\");
        text = text.replace(/\n/g, "\\n");
        text = text.replace(/"/g, '\\"');
        funcText.push('_OUT.write("');
        funcText.push(text);
        funcText.push('");');
    };
    var emitExpression = function(exprArr, index, funcText) {
        var expr = exprArr[index];
        if (index <= 0) {
            funcText.push(expr);
            return;
        }
        var parts = expr.split(":");
        funcText.push('_MODIFIERS["');
        funcText.push(parts[0]);
        funcText.push('"](');
        emitExpression(exprArr, index - 1, funcText);
        if (parts.length > 1) {
            funcText.push(",");
            funcText.push(parts[1]);
        }
        funcText.push(")");
    };
    var cleanWhiteSpace = function(result) {
        result = result.replace(/\t/g, "    ");
        result = result.replace(/\r\n/g, "\n");
        result = result.replace(/\r/g, "\n");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result;
    };
    var scrubWhiteSpace = function(result) {
        result = result.replace(/^\s+/g, "");
        result = result.replace(/\s+$/g, "");
        result = result.replace(/\s+/g, " ");
        result = result.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1");
        return result;
    };
    TrimPath.parseDOMTemplate = function(elementId, optDocument, optEtc) {
        if (optDocument == null) {
            optDocument = document;
        }
        var element = optDocument.getElementById(elementId);
        var content = element.value;
        if (content == null) {
            content = element.innerHTML;
        }
        content = content.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        return TrimPath.parseTemplate(content, elementId, optEtc);
    };
    TrimPath.processDOMTemplate = function(elementId, context, optFlags, optDocument, optEtc) { return TrimPath.parseDOMTemplate(elementId, optDocument, optEtc).process(context, optFlags); };
})();
var recommendedHotels = {};
recommendedHotels.asciiLength = function(d) {
    var a = 0;
    for (var b = 0; b < d.length; b++) {
        var c = d.charCodeAt(b);
        if (c > 255) {
            a += 2;
        } else {
            if (c > 65 && c < 91) {
                a += 2;
            } else {
                a++;
            }
        }
    }
    return a;
};
recommendedHotels.asciiTrimByLength = function(j, b) {
    var g = "...";
    var h = g.length;
    var f = recommendedHotels.asciiLength(j);
    if (f <= b) {
        return j;
    } else {
        if (b == h) {
            return g;
        } else {
            if (b < h) {
                throw new Error("The arguments is not allowed less than " + h);
            } else {
                var a = f;
                var c = j.length - 1;
                for (; c >= 0; c--) {
                    if (a <= (b - h)) {
                        break;
                    } else {
                        var d = j.charCodeAt(c);
                        if (d > 255 || (d > 65 && d < 91)) {
                            a = a - 2;
                        } else {
                            a = a - 1;
                        }
                    }
                }
                return j.substr(0, c + 1) + g;
            }
        }
    }
};
recommendedHotels.fns = [];
recommendedHotels.show = function(M, m, l) {
    var n = recommendedHotels.con;
    var Q = recommendedHotels.type;
    var q = recommendedHotels.from;
    var s = decodeURIComponent(recommendedHotels.city);
    var w = recommendedHotels.fromDate;
    var a = ["lijiang", "xianggelila", "akesu", "anshan", "anshun", "antu", "baise", "baoshan", "bayannaoer", "bazhong", "cangnan", "changle", "changshan", "chibei", "chifeng", "chongzuo", "chuxiong", "danyang", "danzhou", "daye", "dengfeng", "dingan", "dongshan", "dongtai", "duyun", "eerduosi", "enping", "ezhou", "fengdu", "fuyang_zhejiang", "geermu", "guigang", "haicheng", "hailuogou", "hami", "honghe", "honghezhou", "huairen", "huangyan", "huayin", "jiangyan", "jiangyou", "jimo", "jingjiang", "jintan", "kaili", "kanasi", "kuerle", "kuitun", "ledong", "lincang", "lingshi", "linzhi", "liuan", "liuyang", "longhai", "mangshi", "meishan", "nanping", "pingnan", "pujiang", "qianan", "qidong", "qinzhou", "qujing", "rikaze", "rudong", "shangqiu", "shannan", "shengsi", "shihezi", "songpan", "suifenhe", "suzhou_anhui", "tianmen", "tieling", "tongliao", "weinan", "wenchang", "wendeng", "wenshan", "wuxue", "wuzhishan", "wuzhou", "xilinguole", "xinglong", "xinzhou", "yanbian", "yangquan", "yining", "yongzhou", "yueqing", "yuhang", "yulin_guangxi", "yuxi", "zhangqiu", "zhongxun"].join().indexOf(M) >= 0 ? 2 : 1;
    var E = false;
    var D = function(b) {
        var k = Number.MAX_VALUE;
        for (var j = 0; j < b.length; j++) {
            if (k >= parseInt(b[j].pr)) {
                k = b[j].pr;
            }
        }
        return parseInt(k);
    };
    var g = function(b) {
        var k = Number.MIN_VALUE;
        for (var j = 0; j < b.length; j++) {
            if (k < parseInt(b[j].pr)) {
                k = b[j].pr;
            }
        }
        return parseInt(k);
    };
    if (m.length > 0) {
        var x = Number.MAX_VALUE;
        var p = false;
        var A = Number.MIN_VALUE;
        var P = 3;
        var u = 5;
        var t = { c: 0, l: 2, b: 2, m: 0 };
        var c = { l: 10, b: 9, c: 8 };
        m.sort(function(k, j) {
            var i = c[k.tp] ? c[k.tp] : 0;
            var b = c[j.tp] ? c[j.tp] : 0;
            return i - b;
        });
        for (var N = 0; N < m.length; N++) {
            var I = m[N].hs || [];
            for (var C = 0; C < I.length; C++) {
                if (I[C].isGroupPrice === "0") {
                    I[C].isGroupPrice -= 0;
                }
            }
            var F = m[N];
            if (I && I.length > 0) {
                var I = m[N].hs = I.slice(0, Math.min(I.length, t[F.tp]));
                if (F.tp == "c") {
                    F.title = s + "最低价酒店";
                    F.footer = "更多";
                    F.footerlink = "http://hotel.qunar.com/search.jsp?toCity=" + recommendedHotels.city + "&fromDate=" + l + "&from=" + q + "-" + F.tp;
                    p = true;
                    A = Math.max(A, g(m[N].hs));
                    u = F.ct;
                } else {
                    if (F.tp == "b") {
                        F.title = s + "[连锁经济型]酒店推荐";
                        F.stitle = s + "高性价比酒店推荐";
                        F.footer = (F.ct > P) ? "更多" : "";
                        F.sfooter = "更多";
                        F.footerlink = "http://hotel.qunar.com/search.jsp?toCity=" + recommendedHotels.city + "&fromDate=" + l + "&from=" + q + "-" + F.tp + "m&q=" + encodeURIComponent("经济型酒店");
                        F.sfooterlink = "http://hotel.qunar.com/search.jsp?toCity=" + recommendedHotels.city + "&fromDate=" + l + "&from=" + q + "-" + F.tp;
                        var L = [];
                        for (var J = 0; J < I.length; J++) {
                            if (I[J].st == -1) {
                                L.push(I[J]);
                            }
                        }
                        m[N].hs = L;
                        x = Math.min(x, D(m[N].hs));
                    } else {
                        if (F.tp == "m") {
                            delete F.tp;
                        } else {
                            if (F.tp == "l") {
                                F.title = s + "[豪华型]酒店推荐";
                                F.footer = (F.ct > P) ? "更多" : "";
                                F.footerlink = "http://hotel.qunar.com/search.jsp?toCity=" + recommendedHotels.city + "&fromDate=" + l + "&from=" + q + "-" + F.tp + "m&q=" + encodeURIComponent("豪华型酒店");
                                x = Math.min(x, D(m[N].hs));
                            }
                        }
                    }
                }
                for (var K = 0; K < I.length; K++) {
                    var B = I[K];
                    if (!B.st) {
                        B.star = "";
                    } else {
                        if (B.st == -1) {
                            B.star = "连锁经济型";
                        } else {
                            if (B.st == 1) {
                                B.star = "一星级";
                            } else {
                                if (B.st == 2) {
                                    B.star = "二星级";
                                } else {
                                    if (B.st == 3) {
                                        B.star = "三星级";
                                    } else {
                                        if (B.st == 4) {
                                            B.star = "四星级";
                                        } else {
                                            if (B.st == 5) {
                                                B.star = "五星级";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    B.sname = recommendedHotels.asciiTrimByLength(B.name, 30);
                    B.url = B.detailURL + "/#from=" + q + "-" + F.tp + "&fromDate=" + B.fromDate;
                    B.scbd = B.cbd ? B.cbd.replace(/区/g, "").replace(/县/g, "") : "";
                    B.qtype = B.cbd && a ? (B.ar == 1 ? B.ar : 0) : 0;
                    if (B.ap && B.ap.length > 1) {
                        B.ap.sort(function(j, i) { return j.dist - i.dist; });
                    }
                    if (B.sd) {
                        var G = B.sd.replace(/([\u0391-\uffe5])/ig, "$1a");
                        if (K == 0) {
                            if (G.length > 39 * 2) {
                                B.sd = G.substring(0, 39 * 2).replace(/([\u0391-\uffe5])a/ig, "$1") + "...";
                            }
                        } else {
                            if (G.length > 40 * 2) {
                                B.sd = G.substring(0, 40 * 2).replace(/([\u0391-\uffe5])a/ig, "$1") + "...";
                            }
                        }
                    }
                }
                E = true;
            }
        }
        if (p && (x <= A)) {
            for (var N = 0; N < m.length; N++) {
                if (m[N].tp == "c") {
                    var I = m[N].hs;
                    var L = [];
                    for (var K = 0; K < I.length; K++) {
                        if (parseInt(I[K].pr) < x) {
                            L.push(I[K]);
                        }
                    }
                    m[N].hs = L;
                }
            }
        }
    }
    if (E) {
        var h = function() {
            switch (recommendedHotels.type) {
            case 0:
                return'					{for hotelinfo in hotelinfos}						{if hotelinfo.hs && hotelinfo.hs.length > 0}						<div class="b_htl_pmt">							<div class="e_htl_tit">						        <a class="more" target="_blank" href="${hotelinfo.footerlink}">更多</a><h3>${hotelinfo.title}</h3>						    </div>							<div class="e_pmt_cont">							    {for hotel in hotelinfo.hs}								<dl class="dl_htl_pmt clrfix">						            <dt><a target="_blank" title="${hotel.name}" href="${hotel.url}">						            {if !hotel.isGroupPrice}						            <i class="rmb">&yen;</i><em class="f_tmt">${hotel.pr}</em>起{/if}${hotel.sname}{if hotel.isGroupPrice}<img class="tuan" title="${hotel.name}" alt="${hotel.name}" src="http://simg1.qunarzz.com/site/images/flight/flight_v1/ico_fly_tuan.png" width="26" height="12">{/if}</a></dt>						            <dd>						            <div class="h_img">						            <a target="_blank"  href="${hotel.url}">						            	{if hotel.purl}						            	<img width="61" height="61" src="${hotel.purl}" title="${hotel.name}" />						            	{else}						            	<img width="61" height="61" src="http://simg1.qunarzz.com/site/images/new_main/imgnull.gif" />						            	{/if}						            </a></div>						            <div class="h_ifo">${hotel.sd}</div>						            </dd>						        </dl>						        {/for}						    </div>						</div>						{/if}					{/for}';
            case 1:
                return'					<div class="cvHotel cvAD_180">					{for hotelinfo in hotelinfos}						{if hotelinfo.hs && hotelinfo.hs.length > 0 && hotelinfo.tp == "b"}							<div class="cvHd">								<div class="t3"></div><div class="t2"></div><div class="t1"></div>								<h3>${hotelinfo.stitle}</h3>							</div>						{/if}						<ul class="cvList">							{for hotel in hotelinfo.hs}							{if hotelinfo.tp == "b"}							<li>								<h4><a href="${hotel.url}" title="${hotel.name}" target="_blank">${hotel.sname}<span class="pr">&yen;${hotel.pr}起</span></a></h4>								{if hotel.ap.length > 0}									{if city == "上海"}										<p>距机场公里数:											{for airp in hotel.ap}												${airp.apname}（${airp.dist}）											{/for}										</p>									{else}										{for airp in hotel.ap}										<p>距${airp.apname}:${airp.dist}公里</p>										{/for}									{/if}								{else}									<p>暂无距离机场数据</p>								{/if}								{if hotel.cbd}									<p>${hotel.star} 位于：<a href="http://hotel.qunar.com/search.jsp?toCity=${toCity}&from=${from}-${hotelinfo.tp}&qtype=${qtype}&q=${encodeURIComponent(hotel.scbd)}" target="_blank">${hotel.cbd}</a></p>								{/if}							</li>							{/for}							{/if}						</ul>						{if hotelinfo.tp == "b"}							<div class="cvFt"><a href="${hotelinfo.sfooterlink}" target="_blank">${hotelinfo.sfooter}</a></div>						{/if}					{/for}					</div>					';
            default:
                return"";
            }
        }();
        var z = TrimPath.parseTemplate(h);
        var d = z.process({ city: decodeURIComponent(s), city_url: M, hotelinfos: m, from: q, qtype: a, fromDate: w, toCity: recommendedHotels.city });
        if (recommendedHotels.type == 1) {
            var O = false;
            for (var N = 0; N < m.length; N++) {
                if (m[N].tp == "b") {
                    O = true;
                    break;
                }
            }
            if (!O) {
                d = "";
            }
        }
        if (d) {
            var H = document.createElement("style");
            H.setAttribute("type", "text/css");
            var o = ".cvList{margin-bottom:8px;}.cvHotel { clear:both; }.cvHotel a { font-weight:400; color:#0069ca; }.cvHotel a:hover { color:#f60; }.cvHotel .cvHd .t3 { margin:0 3px; height:1px; background-color:#f0f0f0; overflow:hidden; }.cvHotel .cvHd .t2 { margin:0 2px; height:1px; background-color:#f0f0f0; overflow:hidden; }.cvHotel .cvHd .t1 { margin:0 1px; height:1px; background-color:#f0f0f0; overflow:hidden; }.cvHotel .cvHd h3 { padding:5px 10px; border-bottom:1px solid #ccc; font-size:14px; background-color:#f0f0f0; color:#333; }.cvHotel .cvList li { padding:10px 10px 8px; border-bottom:1px solid #efefef; }.cvHotel .cvList h4 { margin-bottom:4px; font-size:14px; }.cvHotel .cvList h4 a { display:block; outline:none; }.cvHotel .cvList .pr { float:right; font-size:12px; color:#f60; cursor:pointer; }.cvHotel .cvList p { padding:2px 0; line-height:18px; }.cvHotel .cvList p.intro { padding-bottom:5px; }.cvHotel .cvList p.bt { clear:both; }.cvHotel .cvList p .rank { float:right; width:125px; }.cvHotel .wi .img { float:left; width:70px; }.cvHotel .wi .img img { padding:1px; border:1px solid #ddd;width:60px;height:60px; }.cvHotel .wi p.intro { margin-left:70px; }.cvHotel .cvFt { float:right;font:normal 12px/17px Arial; }";
            if (H.styleSheet) {
                H.styleSheet.cssText = o;
            } else {
                var y = document.createTextNode(o);
                H.appendChild(y);
            }
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(H);
            recommendedHotels.con.innerHTML = d;
            recommendedHotels.con.style.display = "block";
        } else {
            if (recommendedHotels.fns) {
                recommendedHotels.initad();
            }
        }
    } else {
        recommendedHotels.initad();
    }
};
recommendedHotels.initad = function() {
    recommendedHotels.exec = true;
    for (var a = 0; a < recommendedHotels.fns.length; a++) {
        try {
            recommendedHotels.fns[a]();
        } catch (b) {
        }
    }
    recommendedHotels.fns = [];
};
recommendedHotels.addListener = function(a) {
    recommendedHotels.fns.push(a);
    if (recommendedHotels.exec) {
        recommendedHotels.initad();
    }
};
recommendedHotels.query = function(f, c, i, h, d) {
    var a = document.getElementById(i);
    if (!a) {
        throw new Error("推荐酒店初始化错误");
    }
    if (!d) {
        d = 0;
    }
    recommendedHotels.fromDate = c;
    recommendedHotels.city = f;
    recommendedHotels.con = a;
    recommendedHotels.type = d;
    recommendedHotels.from = "flight";
    var b = document.createElement("script");
    b.src = "http://hotel.qunar.com/fch.jsp?city=" + f + "&fromDate=" + c + "&callback=recommendedHotels.show";
    var g = document.getElementsByTagName("head")[0];
    g.appendChild(b);
};
(function(Z) {
    if (typeof Z.QNR === "undefined") {
        Z.QNR = {};
    }
    QNR._AD = {};
    var aj = "getElementsByTagName";
    var ae = Z, $doc = ae.document, R = $doc.body, $head = $doc[aj]("head")[0], U = "qunar.com", F = false, al = 0, j, Q, am, q, V, o, x;
    try {
        $doc.domain = U;
    } catch (ai) {
    }
    var Y = function() {
        var au = ae.navigator, aq = "application/x-shockwave-flash";
        var ao = false, an, ar;
        var ap = (au.mimeTypes && au.mimeTypes[aq]) ? au.mimeTypes[aq].enabledPlugin : 0;
        if (ap) {
            ar = ap.description;
            if (parseInt(ar.substring(ar.indexOf(".") - 2), 10) >= 8) {
                ao = true;
            }
        } else {
            if (ae.ActiveXObject) {
                try {
                    an = new ae.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    if (an) {
                        ao = true;
                    }
                } catch (at) {
                }
            }
        }
        Y = function() { return ao; };
        ap = an = ar = au = null;
        return ao;
    };

    function w(ap, ax, aB, ay) {
        var an, aA = ax.document, ar = aA.getElementById(ap);
        if (ar) {
            aB.id = ap;
            if (/MSIE/i.test(navigator.appVersion)) {
                var az = [];
                az.push('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
                for (var aw in aB) {
                    if (aB.hasOwnProperty(aw)) {
                        aw = aw.toLowerCase();
                        if (aw === "data") {
                            ay.movie = aB[aw];
                        } else {
                            if (aw === "styleclass") {
                                az.push(' class="', aB[aw], '"');
                            } else {
                                if (aw !== "classid") {
                                    az.push(" ", aw, '="', aB[aw], '"');
                                }
                            }
                        }
                    }
                }
                az.push(">");
                for (var av in ay) {
                    if (ay.hasOwnProperty(av)) {
                        az.push('<param name="', av, '" value="', ay[av], '" />');
                    }
                }
                az.push("</object>");
                ar.outerHTML = az.join("");
                an = aA.getElementById(aB.id);
            } else {
                var aq = aA.createElement("object");
                aq.style.outline = "none";
                aq.setAttribute("type", "application/x-shockwave-flash");
                for (var au in aB) {
                    if (aB.hasOwnProperty(au)) {
                        au = au.toLowerCase();
                        if (au === "styleclass") {
                            aq.setAttribute("class", aB[au]);
                        } else {
                            if (au !== "classid") {
                                aq.setAttribute(au, aB[au]);
                            }
                        }
                    }
                }
                for (var at in ay) {
                    if (ay.hasOwnProperty(at) && at.toLowerCase() !== "movie") {
                        var ao = aA.createElement("param");
                        ao.setAttribute("name", at);
                        ao.setAttribute("value", ay[at]);
                        aq.appendChild(ao);
                    }
                }
                ar.parentNode.replaceChild(aq, ar);
                an = aq;
            }
        }
        return an;
    }

    function J(aq, ap, ao, an) {
        if (!Y()) {
            return null;
        }
        return w(aq, ap, ao, an);
    }

    function I(an) { return $doc.getElementById(an); }

    function f(ao, an) { return ao.getAttribute("data-" + an); }

    var y = (function() {
        var an = ["type", "style", "query", "main"], ap = {};

        function ao(av) {
            var au = {}, ar;
            if (!av) {
                return{};
            }
            au.id = av.id;
            for (var at = 0, aq = an.length; at < aq; at++) {
                ar = an[at];
                au[ar] = f(av, ar);
            }
            if (au.type === "qde_text") {
                au.adurl = f(av, "adurl");
            }
            return au;
        }

        return function(aq) {
            var at, ar;
            if (typeof aq === "string") {
                at = aq;
            } else {
                at = aq.id;
                ar = aq;
            }
            if (!ap[at]) {
                ap[at] = ao(ar || I(at));
            }
            return ap[at];
        };
    })();
    var L = "qde.qunar.com", k = "a.qunar.com";
    var i = String(+new Date()) + parseInt(Math.random() * 10000000, 10);

    function D(ap) {
        var ao = [];
        for (var an in ap) {
            ao.push(an + "=" + encodeURIComponent(ap[an]));
        }
        return ao.join("&");
    }

    function a(aq) {
        var an = L, ap = "/js.ng/";
        if (aq.type === "qde_text") {
            ap = aq.adurl ? "/" + aq.adurl + "?" : "/qadjs12_css.nghtml?";
        }
        var ar = i;
        if (aq.id === QNR.AD.__cur_qde_ad) {
            i = String(+new Date()) + parseInt(Math.random() * 10000000, 10);
        }
        var ao = ["http://", an, ap, "framId=", aq.id, "&", aq.query, "&tile=", ar];
        if (o) {
            ao.push("&city=", o);
        }
        if (F) {
            ao.push("&adtest=beta");
        }
        if (q) {
            ao.push(q);
        }
        return ao.join("");
    }

    function G(an) { return ad(an.id).urlPath(an); }

    function g(ao) {
        var an = "";
        switch (ao.type) {
        case"qde":
        case"qde_text":
        case"qde_auto":
            an = a(ao);
            break;
        case"qad":
            an = G(ao);
            break;
        default:
            break;
        }
        return an;
    }

    function X() { return $doc.createElement("div"); }

    function A() {
        var an = $doc.createElement("iframe");
        an.setAttribute("height", 0);
        an.setAttribute("frameBorder", 0);
        an.setAttribute("scrolling", "no");
        an.style.display = "none";
        return an;
    }

    function z(ao, an) {
        if (an && an.parentNode) {
            an.parentNode.insertBefore(ao, an);
        }
    }

    function K(ao, an) {
        var ap = ao === "div" ? X() : A();
        if (an && an.style) {
            ap.style.cssText = an.style;
        }
        if (ao === "iframe") {
            ap.style.display = "none";
        }
        return ap;
    }

    function n(aq, ao) {
        ao = ao || "div";
        var an = y(aq), ap = K(ao, an);
        return ap;
    }

    function ak(ap) {
        var ao = n(ap, "div"), an = I(ap);
        if (an && an.parentNode) {
            an.parentNode.insertBefore(ao, an);
        }
        return ao;
    }

    function t(an) {
        var ao = $doc.createElement("script");
        ao.charset = "utf-8";
        ao.async = true;
        ao.src = an;
        $head.insertBefore(ao, $head.lastChild);
    }

    var d;

    function M(an) {
        if (!d) {
            d = X();
            d.style.display = "none";
            document.body.appendChild(d);
        }
        d.appendChild(an);
    }

    function aa() {
        var aq = $doc[aj]("abbr"), ap = [];
        for (var ao = 0, an = aq.length; ao < an; ao++) {
            if (f(aq[ao], "type") && f(aq[ao], "lazyAD") !== "1") {
                ap.push(aq[ao]);
            }
        }
        return ap;
    }

    function s(aq, ao) {
        aq = aq || [];
        ao = ao || {};
        var au = {}, ax, av, ar, an = /chan=([a-z_]+)/, aw;
        for (var at = 0, ap = aq.length; at < ap; at++) {
            ax = aq[at];
            av = y(ax);
            if (av.type === "qad") {
                av.callback = QNR.AD.getCallbackName(av.id, true);
            }
            ar = g(av);
            if (!Q && av.type === "qde") {
                aw = an.exec(ar);
                if (aw && aw[1]) {
                    Q = aw[1];
                }
            }
            if (ar) {
                au[av.id] = ar;
            }
        }
        return{ ads: au, domain: U };
    }

    var c;

    function p() {
        if (c) {
            setTimeout(function() {
                if (c) {
                    c.parentNode.removeChild(c);
                    c = null;
                }
            }, 0);
        }
    }

    function B(aq) {
        var ap = $doc.createElement("div");
        ap.style.display = "none";
        var ao = [];
        j = "http://vata.qunar.com/vata?chan=" + (Q || "");
        ao.push('<form name="vata_main_form" target="vata_main_frame" action="' + j + '" method="POST">');
        aq.ads = aq.ads || {};
        for (var an in aq.ads) {
            if (aq.ads.hasOwnProperty(an)) {
                ao.push('<input type="text" name="', an, '" value="', aq.ads[an], '" />');
            }
        }
        ao.push("</form>");
        ao.push("<iframe src='' name='vata_main_frame' id='vata_main_frame'></iframe>");
        ap.innerHTML = ao.join("");
        c = ap;
        M(ap);
        if (/MSIE/i.test(navigator.appVersion)) {
            I("vata_main_frame").src = "javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"" + U + "\\\";parent.document.vata_main_form.submit();<\\\\/script>\\');document.close();};<\/script>'";
        } else {
            $doc.vata_main_form.submit();
        }
    }

    function h(ap) {
        var at = aa();
        var au = [],
            ar,
            av = function(aw) {
                ar = f(aw, "type");
                if (ar === "qde_auto") {
                    u(aw);
                } else {
                    if (al === 1 || ar === "qde_text") {
                        af(aw, ap || {});
                    } else {
                        au.push(aw);
                    }
                }
            };
        for (var aq = 0, ao = at.length; aq < ao; aq++) {
            av(at[aq]);
        }
        var an = au.length;
        if (an == 1) {
            af(au[0], ap || {});
        } else {
            if (an > 1) {
                B(s(au, ap));
            }
        }
    }

    function S(ao, an) {
        if (ao.attachEvent) {
            ao.attachEvent("onload", an);
        } else {
            ao.onload = an;
        }
    }

    function W(ao, ar) {
        if (ao == null || ao != ao.window) {
            return false;
        }
        var ap = ao.frameElement;
        var an = ao.document.body;
        var aq = function(au) {
            ap.style.display = "";
            var at = an.offsetHeight;
            if (!au) {
                S(ao, function() { aq(true); });
            }
            if (at == 0) {
                ap.style.display = "none";
            } else {
                ap.style.height = at + "px";
                ar && ar();
            }
        };
        aq();
    }

    var H = {};
    var ah = /MSIE 6\.0/.test(navigator.userAgent);

    function l(aq, an) {
        var ap = H[an];
        var ao = ap && ap.join("") || "";
        if (ao) {
            ap.length = 0;
            aq.write(ao);
        } else {
            P(an, false);
        }
    }

    var C = {};

    function O(ap, an) {
        var ao = C[an] || 0;
        C[an] = "";
        ao && ap.write(ao);
    }

    function N(an, ao) {
        an = an || "ad_queue_all";
        if (!H[an]) {
            H[an] = [];
        }
        H[an].push(ao);
    }

    function E(an) { return am + (ah ? ("&rnd=" + an) : "") + "#" + an; }

    function ac(aq, ao, ap, ar) {
        var an = [];
        if (aq) {
            an[an.length] = "<style>" + aq + "</style>";
        }
        if (ao) {
            an[an.length] = ao.replace(/(scr)_(ipt)/gi, "$1$2");
        }
        if (ap) {
            an[an.length] = '<script type="text/javascript">' + ap + "<\/script>";
        }
        if (ar) {
            an[an.length] = '<script type="text/javascript" src="' + ar + '"><\/script>';
        }
        return an.join("");
    }

    function ag(an, ar) {
        var ao = E(an), aq = n(an, "iframe");
        aq.src = ao;
        if (ar == 1) {
            M(aq);
        } else {
            var ap = I(an);
            z(aq, ap);
        }
    }

    function ab(an, ar, ap) {
        var ao = I(an), aq = n(an, "iframe");
        aq.style.display = "";
        aq.src = ar;
        aq.id = ap || an;
        ao.parentNode.replaceChild(aq, ao);
    }

    function u(ao) {
        var an = ao.getAttribute("data-src");
        if (an) {
            ab(ao.id, an);
        }
    }

    function af(at) {
        var ao = y(at), aq = ao.id, ap, an, ar = "";
        if (!aq) {
            return;
        }
        if (ao.type === "qde_auto") {
            u(at);
        } else {
            if (ao.type === "qad") {
                ao.callback = QNR.AD.getCallbackName(aq);
                an = g(ao);
                if (an) {
                    t(an);
                }
            } else {
                an = g(ao);
                if (!an) {
                    return;
                }
                if (ao.type === "qde_text") {
                    ar = "call_show=1;";
                    ap = ac("", "", ar, an);
                    N(aq, ap);
                } else {
                    ap = '<script type="text/javascript" src="' + an + '"><\/script>';
                    C[aq] = ap;
                }
                ag(aq, 0);
            }
        }
    }

    function m(at, av, aq, aw, an, ao) {
        if (aq === '<div style="display:none"></div>') {
            P(at, false);
            return;
        }
        var au = I(at), ar = "", ap;
        if (!au) {
            return;
        }
        P(at, true);
        ap = aq && /top.QNR.AD.run_in_content/.test(aq);
        if (!ap) {
            ap = aw && /top.QNR.AD.run_in_content/.test(aw);
        }
        if (ap) {
            ao = 1;
        }
        if (aq.indexOf("q_header|qn_header") > -1 || aw.indexOf("q_header|qn_header") > -1) {
            I("j-pagecontainer") && (I("j-pagecontainer").style.background = "none");
        } else {
            if (ap && /ad_type="([a-z_]+)"/.test(aq)) {
                if (RegExp.$1 == "static_shading") {
                    I("j-pagecontainer") && (I("j-pagecontainer").style.background = "none");
                }
            }
        }
        if (al === 1) {
            if (ao != 1) {
                aw = aw || "";
                aw = "call_show = 1;" + aw;
            }
            ar = ac(av, aq, aw, an);
            if (ap) {
                ar = ar + "<script>writeContent(document,Current_ad_id);<\/script>";
            }
            N(at, ar);
            return;
        }
        if (ao == 1) {
            ar = ac(av, aq, aw, an);
            if (ar) {
                ar = '<script type="text/javascript">Current_ad_id = "' + at + '";<\/script>' + ar;
            }
        } else {
            aw = "call_show=1;" + aw;
            ar = ac(av, aq, aw, an);
            ao = 0;
        }
        N(at, ar);
        ag(at, ao);
    }

    function P(an, ap) {
        var ao = QNR.AD._DE;
        if (an) {
            if (ao[an]) {
                ao[an](ap);
                delete ao[an];
            }
            return;
        }
        for (var aq in ao) {
            ao[aq](false);
        }
        QNR.AD._DE = {};
    }

    function T(an) {
        this.$aid = an;
        this.params = {};
    }

    T.prototype = {
        constructor: T,
        createCall: function(an) {
            var ao = this;
            QNR._AD[this.$aid] = function(ap) { an(ap, ao); };
        },
        createDiv: function() { return ak(this.$aid); },
        set: function(an, ao) {
            this.params[an] = ao;
            return this;
        },
        getId: function() { return this.$aid; },
        run_in_iframe: function(an, ao) {
            if (typeof ao == "undefined") {
                ao = 1;
            }
            QNR.AD.add_AD_iframe(this.$aid, an, ao);
        },
        urlPath: function(ap) {
            var ao = ["http://", k, "/vataplan?", "framId=", ap.id, "&", ap.query, "&callback=", ap.callback, "&ab=b&tile=", i];
            if (V) {
                ao.push(V);
            }
            var an = D(this.params);
            an && ao.push("&", an);
            if (o) {
                ao.push("&city=", o);
            }
            return ao.join("");
        },
        load: function() { QNR.AD.loadOneAD(this.$aid); }
    };
    var b = {};

    function ad(ao, an) {
        if (!b[ao]) {
            b[ao] = new T(ao);
        }
        an && an(b[ao]);
        return b[ao];
    }

    QNR.AD = {
        version: "4.4",
        _AD: {},
        _DE: {},
        run_in_content: m,
        run_queue_list: function() {
            var an = "ad_queue_all";
            var ap = H[an];
            var ao = ap && ap.join("") || "";
            if (ao) {
                ap.length = 0;
                ao += '<script type="text/javascript">writeContent(document,"ad_queue_all");<\/script>';
                N(an, ao);
                ag(an, 1);
            }
            p();
            P();
        },
        writeHeadScript: O,
        create_div_container: ak,
        writeContent: l,
        $inject_flash: J,
        createAdFrame: ab,
        createQAd: ad,
        add_AD_iframe: function(an, ap, ao) {
            if (!ap) {
                return;
            }
            if (ao) {
                ap = ap + '<script type="text/javascript">call_show=1;<\/script>';
            }
            N(an, ap);
            ag(an, 0);
        },
        init: function(an) {
            F = an.debug || false;
            al = an.type || "";
            if (ah) {
                al = 1;
            }
            o = an.ip || "";
            q = an.qde_plus || "";
            V = an.qad_plus || "";
            am = an.blank_html || "";
            x = an;
            if (F) {
                L = "qdebeta.qunar.com";
            }
            h(an);
        },
        show: function(ao, an) { W(ao, function() { QNR.AD.callWinShowFun(an, ao); }); },
        getCallbackName: function(an, ao) { return(ao ? "parent." : "") + "QNR._AD." + an; },
        callWinShowFun: function(an, aq) {
            var ao = an + "_win_", ap = QNR._AD[ao];
            if (ap) {
                ap(an, aq);
            }
        },
        createWinShowCall: function(an, ap) {
            var ao = an + "_win_";
            QNR._AD[ao] = ap;
        },
        createCallback: function(ao, ap) {
            var an = ad(ao);
            an.createCall(function(ar) {
                var aq = an.createDiv();
                ap(aq, ar);
            });
        },
        createQdeCallback: function(an, ao) { QNR.AD._DE[an] = function(ap) { ao(ap, an); }; },
        callBackQDE: P,
        change_one_async: function() {
            var an = x;
            an.type = 1;
            QNR.AD.init(an);
            p();
        },
        loadOneAD: function(ao) {
            var an = I(ao);
            if (an) {
                af(an);
            }
        }
    };
})(this);
QNR.ips = (function(g) {
    if (typeof g.QNR === "undefined") {
        g.QNR = {};
    }
    var i = g.document, f = location.search.match(/debug=city=([^&#]+)/), j = f ? decodeURI(f[1]) : null, h = 0, b = [];

    function a(m, n) {
        b.push(m);
        if (h) {
            return;
        }
        var k = i.createElement("script");
        d.callback = function(p) {
            if (j !== null) {
                return;
            }
            j = p.city || "";
            c();
            k.parentNode.removeChild(k);
        };
        k.type = "text/javascript";
        k.charset = "utf-8";
        k.src = "http://ws.qunar.com/ips.jcp?callback=QNR.ips.callback&_=" + (+new Date);
        k.async = true;
        var l = i.getElementsByTagName("head");
        container = l ? l[0] : document.documentElement;
        container.insertBefore(k, container.firstChild);
        h = 1;
        setTimeout(function() { d.callback({}); }, n || 2000);
    }

    function c() {
        for (var m = 0, k = b.length; m < k; m++) {
            b[m].call(null, j);
        }
        b.length = 0;
    }

    function d(k, l) {
        k = k || function() {};
        if (j !== null) {
            k.call(null, j);
        } else {
            a(k, l);
        }
    }

    return d;
})(this);
if (typeof AD_Manage === "undefined") {
    var AD_Manage = {};
}
AD_Manage.isDebug = function() {
    var a = location.href;
    return a.indexOf("adtest=beta") > 0 && a.indexOf("adebug") > 0;
};
var QadAdUnits = (function() {
    function d(j) { return typeof j === "string" ? document.getElementById(j) : j; }

    function c(l) {
        var m = document;
        var j = m.getElementsByTagName("head")[0];
        if (m.createStyleSheet) {
            m.createStyleSheet().cssText = l;
        } else {
            var k = m.createElement("style");
            k.textContent = l;
            j.insertBefore(k, j.firstChild);
        }
    }

    var a = "";

    function h() {
        if (a) {
            c(a);
        }
        a = null;
    }

    function b(s, q) {
        var o = [], p = null, m = "";
        var j = s.key_data || [];
        for (var n = 0, k = j.length; n < k; n++) {
            p = j[n];
            if (q) {
                m = q(p);
            } else {
                if (p.img) {
                    m = g(p);
                } else {
                    m = i(p);
                }
            }
            o.push(m);
        }
        return o.join("");
    }

    function g(k) {
        var j = f(k);
        return['<div class="un_ct">', '<dl class="hn_dl">', '<dt><a target="_blank" href="', j, '">', '<img src="', k.img, '"></a>', "</dt>", '<dd><a target="_blank" href="', j, '" class="hn_d2">', k.title, "</a></dd>", '<dd><a target="_blank" href="', j, '" class="hn_d3">', k.description, "</a></dd>", '<dd><a target="_blank" href="', j, '">', k.show, "</a></dd>", '</dl><div class="clr"></div></div>'].join("");
    }

    function i(k) {
        var j = f(k);
        var m = k.title || "";
        m = m.replace("...", "");
        var l = k.description || "";
        return['<dl class="dl_spy">', '<dt><a class="lnk_rut" title="', m, '" target="_blank" href="', j, '">', m, "</a></dt>", k.phone ? '<dd><a class="lnk_tel" target="_blank" href="' + j + '">TEL: ' + k.phone || "</a></dd>" : "", '<dd><a title="' + l + '" class="lnk_t" href="', j, '" target="_blank">', l, "</a></dd>", '<dd><a class="lnk_h" target="_blank" href="', j, '">', k.margin ? '<span class="icon_bz" title="商户服务安全双重保障"></span>' : "", k.show || "", "</a></dd>", "</dl>"].join("");
    }

    function f(j) { return["http://clk.qunar.com/q?k=", j.s || "", "&e=", j.e].join(""); }

    return{
        $E: d,
        append_style: c,
        renderTextLinkHTML: b,
        appendTextCss: h,
        parse_clk_url: f,
        create_iframe_hander: function(j, k) {
            if (typeof j === "string") {
                j = QNR.AD.createQAd(j);
            }
            j.createCall(function(o) {
                var l = o && o.key_data && o.key_data.length || 0;
                var n = "", m;
                if (l) {
                    var m = j.getCss && j.getCss() || "";
                    if (m) {
                        n = '<style type="text/css">' + m + "</style>";
                    }
                    n += b(o, j.renderHtmlItem);
                    j.run_in_iframe(n, 1);
                }
                k(l, j);
            });
        },
        create_text_call: function(j, k) {
            QNR.AD.createCallback(j, function(m, n) {
                var l = n && n.key_data && n.key_data.length || 0;
                if (!l) {
                    m.style.display = "none";
                } else {
                    QadAdUnits.appendTextCss();
                    m.innerHTML = QadAdUnits.renderTextLinkHTML(n);
                }
                k(l, n);
            });
        }
    };
})();
(function() {
    var c = QadAdUnits.$E;

    function g(m) {
        var k = m && m.key_data && m.key_data.length;
        if (!k) {
            return;
        }
        var l = m.key_data[0].description;
        if (!l) {
            return;
        }
        l = l.replace(/(st)_(yle)/ig, "$1$2");
        l = l.replace(/(scr)_(ipt)/gi, "$1$2");
        return l;
    }

    function j(k) {
        return function(l, m) {
            l.style.display = "none";
            html = g(m);
            QNR.AD.add_AD_iframe(k, html, 1);
        };
    }

    QNR.AD.createCallback("ifrHelperAd", j("ifrHelperAd"));
    QNR.AD.createCallback("ifrCataAd", j("ifrCataAd"));

    function i() {
        var k = c("ifmRightTextlink_title");
        if (k) {
            k.style.display = "block";
        }
        k = c("ifmRightTextlink_footer");
        if (k) {
            k.style.display = "block";
        }
    }

    QadAdUnits.create_text_call("ifmRightTextlink", function(k) {
        if (k > 0) {
            i();
        }
    });

    function a(t, m, o) {
        var q = o && o.key_data && o.key_data.length;
        m.style.display = "none";
        if (!q) {
            return;
        }
        var l = '<style type="text/css">.f_org { color: #FF6600; }.ul_listBticket li { display: inline-block; float: left; line-height: 20px; text-align: left; width: 27%; }.ul_listBticket li a { display: block; }.ul_listBticket li a .tit { display: block;}.ul_listBticket li.col_qnr { padding-top: 0; text-align: left; width: 18%; }.ul_listBticket li.col_qnr .txtlnk_qnr { background: none repeat scroll 0 0 #EFEFEF; color: #333; display: inline-block; height: 17px; line-height: 17px; padding: 0 6px; }</style>';
        var p = ['<div class="bannerTK_cont" id="result">'], s = o.key_data, u, k;
        p.push('<ul class="ul_listBticket clr_after">');
        p.push('<li class="col_qnr"><span class="txtlnk_qnr">去哪儿提供的链接</span></li>');
        for (var n = 0; n < q; n++) {
            u = s[n];
            k = ["http://clk.qunar.com/q?k=", u.s || "", "&e=", u.e].join("");
            p.push('<li><a href="', k, '" target="_blank"><span class="tit">', u.title, '</span> <span class="f_org">', u.show, "</span> </a></li>");
        }
        p.push("</ul></div>");
        var p = l + p.join("");
        QNR.AD.add_AD_iframe(t, p, 1);
    }

    function h(t, m, p) {
        var s = p && p.key_data && p.key_data.length;
        m.style.display = "none";
        if (!s) {
            return;
        }
        var n = "text-align:center;";
        var w = "padding-top:8px;";
        if (t == "topicLinkR" || t == "topicLinkL") {
            n = "text-align:right;*padding-right:10px;";
            w = "padding-top:6px;*padding-top:4px;_padding-top:8px;";
        }
        var l = '<style type="text/css">.topicLink { height:24px;color:#333;' + n + "}.topicLink p {" + w + " }.topicLink p .ico_vl{ margin-left:2px;vertical-align:middle;margin-top:-2px;*margin-top:2px;_margin-top:-3px;}</style>";
        var q = ['<div class="topicLink">'], p = p.key_data, k, u;
        for (var o = 0; o < s; o++) {
            u = p[o];
            k = ["http://clk.qunar.com/q?k=", u.s || "", "&e=", u.e].join("");
            q.push('<p><a href="', k, '" target="_blank" title="', u.title + '">', u.description, '<img src="', u.img, '" alt="hot" class="ico_vl"></a></p>');
        }
        q.push("</div>");
        q = l + q.join("");
        QNR.AD.add_AD_iframe(t, q, 1);
    }

    QNR.AD.createCallback("listBottomAD", function(k, l) { a("listBottomAD", k, l); });
    QNR.AD.createCallback("ifrNTOPAD", function(k, l) { a("ifrNTOPAD", k, l); });
    QNR.AD.createCallback("topicLinkL", function(k, l) { h("topicLinkL", k, l); });
    QNR.AD.createCallback("topicLinkR", function(k, l) { h("topicLinkR", k, l); });
    d("ifmRightFlightOwner", "js_rightFlightOwnerBanner");
    d("ifmRightFlightExt", "js_rightFlightExtBanner");
    d("ifmOwnFlightRightBottom", "js_ownFlightRightBottom");

    function d(l, k) {
        QNR.AD.createCallback(l, function(o, u) {
            var m = u && u.key_data && u.key_data.length;
            o.style.display = "none";
            var n = document.getElementById(k);
            if (!m) {
                n.parentNode.style.display = "none";
                return;
            }
            var s = [];
            for (var q = 0; q < m; q++) {
                var t = u.key_data[q];
                var p = ["http://clk.qunar.com/q?k=", t.s || "", "&e=", t.e].join("");
                s.push('<a style="display:block;padding-bottom:7px;" href="', p, '" target="_blank">', '<img style="display:block;" src="', t.img, '" /></a>');
            }
            n.innerHTML = s.join("");
        });
    }

    var f = 0;

    function b() { return"ad_dyna_" + (f++); }

    AD_Manage.createFlightAD = function(l) {
        var m = QNR.AD.create_div_container(l);
        var q = /inter/.test(location.pathname) ? "QNR_ZDM%3D_CN" : "QNR_YjM%3D_CN";
        var t = QadAdUnits.$E(l);
        l = b();
        var s = l + "_qad", o = l + "_qde";
        var k = '<span style="display:none;" data-query="vataposition=' + q + '&tag=0&rows=3&cur_page_num=0&rep=1&f=s" data-type="qad" data-style="width:100%;" id="' + s + '"></span><div style="padding: 0 6px;"><span style="display:none;" data-style="width:100%;" data-type="qde" data-query="" id="' + o + '"></span></div>';
        m.innerHTML = k;
        var n = AD_Manage.isDebug();
        QNR.AD.createQdeCallback(o, function(u) {
            if (!u || n) {
                QNR.AD.loadOneAD(s);
            }
        });
        QNR.AD.createCallback(s, function(u, w) { a(s, u, w); });
        var p = t.getAttribute("querystring");
        QadAdUnits.$E(o).setAttribute("data-query", p);
        QNR.AD.__cur_qde_ad = o;
        QNR.AD.loadOneAD(o);
    };
})();
(function() {
    function b(c) { return ~location.search.indexOf(c); }

    function a(f) {
        var g = {};
        g.type = b("debug=type=open") ? 1 : 0;
        g.debug = b("adtest=beta");
        g.blank_html = "http://www.qunar.com/vataframe/b.html?_=20120830";
        g.qde_plus = "";
        g.qad_plus = "";
        var d = 1;
        if (AD_Manage.qad_query) {
            d++;
        }
        if (AD_Manage.qde_query) {
            d++;
        }
        if (AD_Manage.ip_query) {
            d++;
        }

        function c() {
            d--;
            if (d === 0) {
                f(g);
            }
        }

        if (AD_Manage.qad_query) {
            AD_Manage.qad_query(function(h) {
                if (h) {
                    g.qad_plus = "&" + h.replace(/^&/, "");
                }
                c();
            });
        }
        if (AD_Manage.qde_query) {
            AD_Manage.qde_query(function(h) {
                if (h) {
                    g.qde_plus = "&" + h.replace(/^&/, "");
                }
                c();
            });
        }
        if (AD_Manage.ip_query) {
            AD_Manage.ip_query(function(h) {
                if (h) {
                    g.ip = encodeURIComponent(h);
                }
                c();
            });
        }
        c();
    }

    AD_Manage.load = function() {
        a(function(c) {
            if (b("debug=charge=true")) {
                c.qde_plus += "&cm=charged";
            }
            setTimeout(function() { QNR.AD.init(c); }, 10);
        });
    };
})();

function setIfrmHeight(c, b) {
    var a = QadAdUnits.$E(c);
    if (a) {
        a.style.height = b + "px";
    }
}

var LazyScrollShow = (function() {
    var b = [], f;
    var m = ["dTrendflashPanel", "dReversePanel_normal", "hotelSearch", "frmTuan"];

    function i() {
        var t = window.document, s = t.documentElement.clientHeight;
        return $jex.boxModel() && s || t.body && t.body.clientHeight || s;
    }

    function d() {
        var s = window, u = "pageYOffset", t = "scrollTop";
        return(u in s) ? s[u] : $jex.boxModel() && s.document.documentElement[t] || s.document.body[t];
    }

    var g = {
        hotelSearch: function() {
            var u = window.location.param();
            var t = u.searchDepartureTime;
            var w = $jex.date.add(t, 2);
            var s = "http://hotel.qunar.com/hotelHot.htm?new=1&city=" + encodeURIComponent(u.searchArrivalAirport) + "&fromDate=" + t + "&toDate=" + w + "&frmid=hotelSearch&from=oneway";
            QNR.AD.createAdFrame("hotelSearch", s);
        },
        frmTuan: function() { QNR.AD.loadOneAD("frmTuan"); },
        dTrendflashPanel: function() {
            setTimeout(function() { Trendflash && Trendflash.init(); }, 100);
            if (window.dflightTool) {
                dflightTool.start();
            }
        },
        dReversePanel_normal: function() { RoundTripGrid.load(); }
    };

    function h() {
        var s = 0;
        try {
            $jex.foreach(b, function(w, u) {
                if (!w) {
                    return;
                }
                var x = $jex.offset(w);
                if (f.stop + f.height > (x.top - 50)) {
                    b[u] = null;
                    g[w.id]();
                } else {
                    s++;
                }
            });
            if (s == 0) {
                b = null;
                k();
            }
        } catch (t) {
        }
    }

    function a(t) {
        var u, s = 0;
        return function() {
            clearTimeout(u);
            var w = (new Date()).valueOf();
            if (w - s > 100) {
                t();
            }
            s = w;
            u = setTimeout(t, 100);
        };
    }

    var l = a(function() {
        f.height = i();
        h();
    });
    var q = a(function() {
        f.stop = d();
        h();
    });

    function j(s, w, u) {
        if (s.addEventListener) {
            s.addEventListener(w, u, false);
        } else {
            if (s.attachEvent) {
                s.attachEvent("on" + w, u);
            } else {
                var t = s["on" + w];
                if (t) {
                    s["on" + w] = function() {
                        t();
                        u();
                    };
                }
            }
        }
    }

    function n(s, u, t) {
        if (s.removeEventListener) {
            s.removeEventListener(u, t, false);
        } else {
            if (s.detachEvent) {
                s.detachEvent("on" + u, t);
            } else {
                if (s["on" + u] === t) {
                    s["on" + u] = null;
                }
            }
        }
    }

    function p() {
        j(window, "scroll", q);
        j(window, "resize", l);
    }

    function k() {
        n(window, "scroll", q);
        n(window, "resize", l);
    }

    function o() {
        $jex.foreach(["dFlightPanel", "hdivTrendFlash"], function(t) {
            var s = $jex.$(t);
            s && $jex.element.show(s);
        });
        $jex.foreach(["hotelSearch", "frmTuan"], function(t) {
            var s = $jex.$(t);
            s && $jex.element.show(s.parentNode);
        });
    }

    function c() {
        o();
        setTimeout(function() {
            $jex.foreach(m, function(s) {
                var t = $jex.$(s);
                if (t) {
                    b.push(t);
                }
            });
            if (b.length > 0) {
                f = { stop: d(), height: i() };
                p();
                h();
            }
        }, 100);
    }

    return{
        addShow: function(t, s) { g[t] = s; },
        addDoms: function(t) {
            for (var u = 0, s = m.length; u < s; u++) {
                if (m[u] === t) {
                    return;
                }
            }
            m[u] = t;
        },
        start: function() { setTimeout(c, 100); }
    };
})();
var QunarHistory = new function() {
    document.domain = "qunar.com";
    var l = this;
    var h = [];
    var d = null;
    var k = null;
    var j = null;
    this.ChinaFlightList = [];
    this.InterFlightList = [];
    var c = null;
    this.SFList = null;
    this.DFList = null;
    this.HLList = null;
    this.firstDSF = null;
    this.firstISF = null;
    this.firstDDF = null;
    this.firstIDF = null;
    this.firstChina = null;
    this.firstInter = null;
    this.firstFlight = null;
    this.firstHL = null;
    var b = this.cache = function(m, n) {
        if ((typeof this["_" + m] == "undefined" || this["_" + m] === null) && n) {
            this["_" + m] = n;
        }
        return this["_" + m];
    };
    var f = { SF: { Type: function() { return"SF"; }, FromCity: function() { return l.cache.call(this, "fromCity") || l.cache.call(this, "formCity", decodeURIComponent(this.fromCity)); }, ToCity: function() { return l.cache.call(this, "toCity") || l.cache.call(this, "toCity", decodeURIComponent(this.toCity)); }, FromDate: function() { return l.cache.call(this, "fromDate") || l.cache.call(this, "fromDate", QunarDate.format(this.fromDate)); }, FromCountry: function() { return l.cache.call(this, "fromCountry") || l.cache.call(this, "fromCountry", decodeURIComponent(this.fromCountry).split("-")[0]); }, ToCountry: function() { return l.cache.call(this, "toCountry") || l.cache.call(this, "toCountry", decodeURIComponent(this.fromCountry).split("-")[1]); }, isInter: function() { return this.FromCountry() != "中国" || this.ToCountry() != "中国"; }, validate: function() { return true; }, Timestamp: function() { return l.cache.call(this, "timestamp") || l.cache.call(this, "timestamp", parseInt(this.timestamp, 10)); } }, DF: { Type: function() { return"DF"; }, FromCity: function() { return l.cache.call(this, "fromCity") || l.cache.call(this, "formCity", decodeURIComponent(this.fromCity)); }, ToCity: function() { return l.cache.call(this, "toCity") || l.cache.call(this, "toCity", decodeURIComponent(this.toCity)); }, FromDate: function() { return l.cache.call(this, "fromDate") || l.cache.call(this, "fromDate", QunarDate.format(this.fromDate)); }, ToDate: function() { return l.cache.call(this, "toDate") || l.cache.call(this, "toDate", QunarDate.format(this.toDate)); }, FromCountry: function() { return l.cache.call(this, "fromCountry") || l.cache.call(this, "fromCountry", decodeURIComponent(this.fromCountry).split("-")[0]); }, ToCountry: function() { return l.cache.call(this, "toCountry") || l.cache.call(this, "toCountry", decodeURIComponent(this.fromCountry).split("-")[1]); }, isInter: function() { return this.FromCountry() != "中国" || this.ToCountry() != "中国"; }, validate: function() { return true; }, Timestamp: function() { return l.cache.call(this, "timestamp") || l.cache.call(this, "timestamp", parseInt(this.timestamp, 10)); } }, HL: { ToCity: function() { return l.cache.call(this, "toCity") || l.cache.call(this, "toCity", decodeURIComponent(this.toCity)); }, FromDate: function() { return l.cache.call(this, "fromDate") || l.cache.call(this, "fromDate", QunarDate.format(this.fromDate)); }, ToDate: function() { return l.cache.call(this, "toDate") || l.cache.call(this, "toDate", QunarDate.format(this.toDate)); }, validate: function() { return true; } } };
    var g = function(o, m) {
        var n = l[o];
        if (!n || n.Timestamp() < m.Timestamp()) {
            l[o] = m;
        }
    };
    var a = function(p, m, q) {
        if (!m) {
            return;
        }
        for (var o = 0; o < m.length; o++) {
            for (var n in q) {
                m[o][n] = q[n];
            }
            switch (p) {
            case"SF":
                if (m[o].isInter()) {
                    g("firstISF", m[o]);
                    g("firstInter", m[o]);
                    l.InterFlightList.push(m[o]);
                } else {
                    g("firstDSF", m[o]);
                    g("firstChina", m[o]);
                    l.ChinaFlightList.push(m[o]);
                }
                g("firstFlight", m[o]);
                break;
            case"DL":
                if (m[o].isInter()) {
                    g("firstIDF", m[o]);
                    g("firstInter", m[o]);
                    l.InterFlightList.push(m[o]);
                } else {
                    g("firstDDF", m[o]);
                    g("firstChina", m[o]);
                    l.ChinaFlightList.push(m[o]);
                }
                g("firstFlight", m[o]);
                break;
            case"HL":
                if (!l.firstHL) {
                    l.firstHL = m[o];
                }
                break;
            }
        }
        return m;
    };
    var i = function(m, n) { return -(parseInt(m.timestamp, 10) - parseInt(n.timestamp, 10)); };
    this.load = function() {
        var m = $jex.$("ifrmHistory");
        if (m) {
            $jex.event.bindDom(m, "load", this, function() { window.jx05CFEventFC.call(this, m); });
            m.src = "http://history.qunar.com/history/newhistory.html";
        }
    };
    this.parseQunarHistory = function() {
        this.SFList = a("SF", d.findEntries("SF"), f.SF);
        this.DFList = a("DL", d.findEntries("DL").concat(d.findEntries("IF")), f.DF);
        this.HLList = a("HL", d.findEntries("HL"), f.HL);
        try {
            $jex.event.trigger(QunarHistory, "onload");
        } catch (m) {
        }
    };
    window.jx05CFEventFC = function(m) {
        l.SFlight = k = m.contentWindow.SFlight;
        l.DFlight = j = m.contentWindow.DFlight;
        c = m.contentWindow.HotelDetail;
        l.service = d = m.contentWindow.QunarHistory;
        this.parseQunarHistory();
    };
};

function QunarHistoryToolbar(a) {
    QunarHistoryToolbar.superclass.constructor.call(this, a);
    this._type = "QunarHistoryToolbar";
    this._init();
}

$jex.extendClass(QunarHistoryToolbar, XControl);
QunarHistoryToolbar.prototype._init = function() {
    var b = this;
    var a = this._setting.elemId;
    var d = $jex.$(a + "_handler");
    var c = $jex.$(a + "_arrow_up");
    var g = $jex.$(a + "_arrow_down");
    var f = $jex.$(a + "_list");
    this.loadedHistory = false;
    this.initial = false;
    $jex.event.binding(d, "click", function(h) {
        if (!b.initial) {
            b._initList(a, c, g, f);
        }
        $jex.element.toggle(c, g, f);
        $jex.stopEvent(h);
    });
    if (QunarHistory) {
        $jex.event.binding(QunarHistory, "onload", function() {
            b.loadedHistory = true;
            if (!QunarHistory.DFList && !QunarHistory.SFList) {
                $jex.element.hide(d);
            }
        });
        QunarHistory.load();
    }
};
QunarHistoryToolbar.prototype._initList = function(k, m, b, j) {
    var c = [];
    var f = (QunarHistory.DFList || []).concat(QunarHistory.SFList || []);
    try {
        f.sort(function(i, p) { return p.timestamp - i.timestamp; });
    } catch (h) {
    }

    function q(i) { return String(i).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;").replace(/ /g, "&nbsp;"); }

    c.push('<div  id="', k, '_close" class="close"></div>');
    c.push('<ul id="hulHistroyList">');
    for (var d = 0, g = f.length; d < g; d++) {
        var o = f[d];
        if (!o.ToCity() || !o.FromCity()) {
            continue;
        }
        var a = ["fromCity=" + o.FromCity(), "toCity=" + o.ToCity(), "fromDate=" + o.FromDate()];
        if (o.Type() == "SF") {
            var l = "单程 " + o.FromCity() + "-" + o.ToCity() + " " + o.FromDate().replace(/^\d{4}-/, "");
            a.push("searchType=OnewayFlight");
        } else {
            var l = "双程 " + o.FromCity() + "-" + o.ToCity() + " " + o.FromDate().replace(/^\d{4}-/, "") + "~" + o.ToDate().replace(/^\d{4}-/, "");
            a.push("toDate=" + o.ToDate(), "searchType=RoundTripFlight");
        }
        var n = encodeURI("/twell/flight/Search.jsp?" + a.join("&"));
        l = q(l);
        c.push('<li title="', l, '"><a href="', n, '" key="', d + "", '" target="_blank">', l, "</a></li>");
    }
    c.push("</ul>");
    j.innerHTML = c.join("");
    $jex.event.binding($jex.$(k + "_close"), "click", function(i) {
        $jex.element.toggle(m, b, j);
        $jex.stopEvent(i);
    });
    this.initial = true;
};

function FocusChecker(f, g) {
    var d = false;
    var a = false;
    var c = null;
    var b = 5;

    function h() {
        c = null;
        if (d != a) {
            d = a;
        }
        if (d) {
            g.focusin();
        } else {
            g.focusout();
        }
    }

    $jex.event.bind(f, "focusin", function() {
        a = true;
        if (c) {
            clearTimeout(c);
        }
        c = setTimeout(h, b);
    });
    $jex.event.bind(f, "focusout", function() {
        a = false;
        if (c) {
            clearTimeout(c);
        }
        c = setTimeout(h, b);
    });
}

function XCombox(j, a) {
    var c = this.elem = j.parentNode;
    this.inputEl = j;
    this.collateValue = j.value;
    this.tempValue = null;
    this._invalid = false;
    var g = j.previousSibling;
    if (g) {
        g.innerHTML = "";
    } else {
        g = $jex.doc(c).createElement("DIV");
        g.className = "boxWrapper";
        c.insertBefore(g, j);
    }
    this.wrappEl = g;
    var b = new UIObject().append("<div", "mark", ' class="qcbox-mark"></div>').append("<div", "main", ' class="boxContainer">').append("<div", "sinfo", ' class="sinfo"></div><div class="sicon"><i></i></div>').text('<div style="clear:both"></div>').text("</div>");
    b.write(g);
    var h = b.getDomNode("main"), k = b.getDomNode("sinfo");
    this.txtMark = b.getDomNode("mark");
    this.infoPanel = k;
    $jex.event.bind(h, "mouseover", function() { $jex.addClassName(this, "switcher_in"); });
    $jex.event.bind(h, "mouseout", function() { $jex.removeClassName(this, "switcher_in"); });
    if (a.attrs) {
        for (var d in a.attrs) {
            this[d] = a.attrs[d];
        }
    }
    if (a.button) {
        if (a.button.mousedown) {
            $jex.event.add(this, "buttonmousedown", a.button.mousedown);
        }
    }
    if (a.input) {
        if (a.input.click) {
            $jex.event.bindDom(j, "click", this, a.input.click);
        }
        if (a.input.mousedown) {
            $jex.event.bindDom(j, "mousedown", this, a.input.mousedown);
        }
        if (a.input.change) {
            $jex.event.add(this, "valuechange", a.input.change);
        }
        if (a.input.keypress) {
            $jex.event.bindDom(j, $jex.ie || $jex.safari ? "keydown" : "keypress", this, a.input.keypress);
        }
    }
    FocusChecker(c, this, j);
    if (a.focus) {
        $jex.event.add(this, "focus", a.focus);
    }
    if (a.blur) {
        $jex.event.add(this, "blur", a.blur);
    }
    $jex.event.bindDom(j, "keyup", this, function(i) { setTimeout($jex.callback(this, this._listenKey), 0); });
    var f = this.popContainer = $jex.doc(c).createElement("DIV");
    f.className = "popContainer";
    f.display = "none";
    c.appendChild(f);
    this.popups = new XPopupManager(f);
    if (a.popups) {
        for (var d in a.popups) {
            this.popups.createPopup(d, a.popups[d]).own = this;
        }
    }
    $jex.ie && $jex.event.bind(j, "beforedeactivate", function(i) {
        if ($jex.ie < 9 && this._f_leave) {
            $jex.stopEvent(i);
        }
        this._f_leave = 0;
    });
    $jex.ie && $jex.event.bind(j, "focus", function(i) { this._f_leave = 0; });
    $jex.event.bindDom(h, "mousedown", this, this.mousedown);
    f.onmousedown = function(i) {
        j._f_leave = 1;
        return false;
    };
}

XCombox.prototype.setMark = function(a) { this.txtMark.innerHTML = a; };
XCombox.prototype.showError = function(a) {
    $jex.addClassName(this.elem, "qcbox_err");
    this.setInfo(a);
};
XCombox.prototype.hideError = function() { $jex.removeClassName(this.elem, "qcbox_err"); };
XCombox.prototype.show = function() { this.elem.style.display = "block"; };
XCombox.prototype.hide = function() { this.elem.style.display = "none"; };
XCombox.prototype.setValue = function(a) {
    $jex.removeClassName(this.wrappEl, "qbox_c");
    this.tempValue = null;
    this.inputEl.value = a;
    this._listenKey(true);
};
XCombox.prototype.volateValue = function(a) {
    this.tempValue = this.inputEl.value = a;
    this._listenKey();
};
XCombox.prototype.initValue = function(a) {
    this.collateValue = this.inputEl.value = a;
    this.tempValue = null;
};
XCombox.prototype.getValue = function() { return $jex.trim(this.inputEl.value); };
XCombox.prototype.setInfo = function(d, b, c) {
    this.infoPanel.innerHTML = d || "";
    if (d) {
        $jex.addClassName(this.wrappEl, "qbox_c");
    }
    var a = "sinfo";
    if (b) {
        a = a + " " + b;
    }
    this.infoPanel.className = a;
    this.infoPanel.title = c || "";
};
XCombox.prototype.focusin = function() {
    $jex.addClassName(this.elem, "qbc_fin");
    $jex.removeClassName(this.wrappEl, "qbox_c");
    $jex.removeClassName(this.elem, "qcbox_err");
    $jex.event.trigger(this, "focus");
    this.timerListen(true);
};
XCombox.prototype.focusout = function() {
    this.popups.close();
    $jex.removeClassName(this.elem, "qbc_fin");
    this.initValue(this.getValue());
    $jex.event.trigger(this, "blur");
    this.timerListen(false);
};
XCombox.prototype.mousedown = function(a) {
    var b = this.inputEl;
    $jex.ie && (b._f_leave = 1);
    window.setTimeout(function() { b.focus(); }, 0);
    $jex.stopEvent(a);
    $jex.event.trigger(this, "buttonmousedown", a);
    return false;
};
XCombox.prototype.openMainMenu = function() {
    var a = this.popups.get("main");
    if (a && a.isOpend()) {
        this.popups.close();
    } else {
        this.popups.open("main");
    }
};
XCombox.prototype._listenKey = function(c) {
    var b = this.getValue(), a = $jex.trim(this.collateValue);
    if (this.inputEl.value == this.tempValue) {
    } else {
        if (b != a) {
            this.collateValue = b;
            $jex.event.trigger(this, "valuechange", b, a, c === true);
        }
    }
};
XCombox.prototype.timerListen = function(a) {
    if (a) {
        if (!this.listenID) {
            this.listenID = setInterval($jex.callback(this, this._listenKey), 50);
        }
    } else {
        if (this.listenID) {
            clearInterval(this.listenID);
            this.listenID = null;
        }
    }
};

function XPopup(a) {
    this.panel = null;
    this.className = "popPanel" + (a.className ? " " + a.className : "");
    if (a.close) {
        $jex.event.add(this, "close", a.close);
    }
    if (a.open) {
        $jex.event.add(this, "open", a.open);
    }
    if (a.initialize) {
        this.initialize = a.initialize;
    }
}

XPopup.prototype.initialize = function(a) {};
XPopup.prototype._open = function() {
    this.panel.style.display = "";
    $jex.event.trigger(this, "open");
};
XPopup.prototype.isOpend = function() { return this.panel && this.panel.style.display != "none"; };
XPopup.prototype.close = function() {
    $jex.event.trigger(this, "close");
    this.panel.style.display = "none";
};

function XPopupManager(a) {
    this.popups = {};
    this.container = a;
    this.current = null;
    this.defaultName = null;
}

XPopupManager.prototype.createPopup = function(a, b) { return this.popups[a] = new XPopup(b); };
XPopupManager.prototype.open = function(b) {
    var a = this.popups[b];
    if (a) {
        var c = a.panel;
        if (!c) {
            c = $jex.doc(this.container).createElement("DIV");
            c.className = a.className;
            c.style.display = "none";
            if (!a.inited) {
                this.container.appendChild(c);
            } else {
                this.container.replaceChild(c, this.container.childNodes);
            }
            a.panel = c;
        }
        a.initialize();
        a.inited = true;
        if (this.current && this.current != a && this.current.isOpend()) {
            this.current.close();
        }
        if (!a.isOpend()) {
            a._open();
        }
        return this.current = a;
    }
};
XPopupManager.prototype.close = function(a) {
    if (a && !this.isOpend(a)) {
        return;
    }
    if (this.current != null) {
        this.current.close();
        this.current = null;
    }
};
XPopupManager.prototype.isOpend = function(a) {
    if (a) {
        if (this.popups[a]) {
            return this.popups[a].isOpend();
        }
    } else {
        if (this.current != null) {
            return this.current.isOpend();
        }
    }
    return false;
};
XPopupManager.prototype.get = function(a) { return this.popups[a]; };

function FlightCityXCombox(c, d, b) {
    var h = new Date();
    var a = this;
    this.setting = b || {};
    var g;
    var f = new ScriptRequest({ oncomplete: function(i) { a.suggLoaded(i); }, callbackName: "callback" });
    FlightCityXCombox.superclass.constructor.call(this, c, {
        button: {
            mousedown: function(i) {
                this.openMainMenu();
                i && $jex.stopEvent(i);
            }
        },
        input: {
            change: function(l, j, k) {
                g = l.replace(/\s+/g, " ");
                g = g.replace(/^\s+/, "");
                g = g.replace(/\s+$/, "");
                l = l.replace(/\s/g, "");
                if (!k) {
                    this.vidx = -1;
                    this.inputold = l;
                    l = l.replace(/[~!@#\$%\^&\*\(\)_\+<>\?:\\\\"\|\{\}`,\.\/;'\\\{\}]+/ig, "");
                    if (l) {
                        var i = this.popups.get("suggest");
                        i && i.layer && (i.layer.cursor = -1);
                        f.cancel();
                        if (this.cache[l]) {
                            a.suggLoaded(this.cache[l]);
                        } else {
                            f.send("http://www.qunar.com/suggest/livesearch2.jsp?lang=zh&q=" + encodeURIComponent(l) + "&sa=true&ver=1");
                        }
                    } else {
                        this.popups.close();
                    }
                } else {
                    $jex.event.trigger(d, "cityfinished", this.getValue());
                }
            },
            keypress: function(i) { this.keypress(i, i.keyCode); }
        },
        focus: function() {
            this.inputEl.select();
            this.setInfo("");
        },
        blur: function() {
            if (this.vidx == -1) {
                var i = this.popups.get("suggest");
                if (i && i.layer && (i.layer.cursor > -1)) {
                    var j = i.layer.nodes[i.layer.cursor].item;
                    this.setCountry(j.country);
                    this.setValue(j.key);
                    this.vidx = 0;
                    $jex.event.trigger(a, "select", j.key);
                }
            }
            this.setTip();
        },
        popups: {
            main: {
                initialize: function() {
                    var q = a.getHotCityConfig("tabs");
                    var n = a.getHotCityConfig("contents");
                    if (!q || !n) {
                        return false;
                    }
                    var j = [];
                    var l = new UIObject();
                    var s = "__flightcitybox_" + $jex.globalID();
                    var p = function(i) {
                        return function(u) {
                            var E = [];
                            if (!n[i]) {
                                return false;
                            }
                            var C = n[i].cityList;
                            if (!C) {
                                return false;
                            }
                            var w = n[i].charSort;
                            if (!w) {
                                E.push("<ul>");
                                for (var z = 0; z < C.length; z++) {
                                    var x = C[z];
                                    E.push('<li country="' + x.country + '" key="' + x.name + '"><a href="#nogo#">' + x.name + "</a></li>");
                                }
                                E.push("</ul>");
                            } else {
                                for (var z = 0; z < C.length; z++) {
                                    var x = C[z];
                                    var A = x.list;
                                    E.push('<dl class="e_hct_lst"><dt>' + x["char"] + " </dt><dd><ul>");
                                    for (var y = 0; y < A.length; y++) {
                                        var B = A[y];
                                        E.push('<li country="' + B.country + '" key="' + B.name + '"><a href="#nogo#">' + B.name + "</a></li>");
                                    }
                                    E.push("</ul></dd></dl>");
                                }
                            }
                            var D = n[i].countryList;
                            if (D) {
                                E.push('<span class="fuzzy_area_line"></span>');
                                E.push("<ul>");
                                for (var z = 0; z < D.length; z++) {
                                    var x = D[z];
                                    E.push('<li country="' + x.country + '" key="' + x.name + '"><a href="#nogo#">' + x.name + "</a></li>");
                                }
                                E.push("</ul>");
                            }
                            u.innerHTML = E.join("");
                            if (n[i].cls) {
                                $jex.$(s).className = n[i].cls;
                            } else {
                                $jex.$(s).className = "";
                            }
                        };
                    };
                    l.text('<div class="cityinput" hotcitytype="1"><div class="hint">').append("<img", "close", ' class="closeImg" src="http://simg1.qunarzz.com/site/images/new_main/Button_Hotcity_Close.gif"/>').append('<div class="b_hct_tit"><span ', "title", ">热门城市</span>").append("<span>(<span ", "desc").text(' class="CIunderline ">可直接输入城市或城市拼音</span>)</span></div>', '<div class="b_hct_nav">');
                    for (var o = 0; o < q.length; o++) {
                        var k = "tab_" + o + $jex.globalID();
                        j.push({ tabID: k, tabname: q[o], render: p(q[o]) });
                        l.text('<span id="', k, '" key="', q[o], '"');
                        if (o == 0) {
                            l.text(' class="active" ');
                        }
                        l.text(">", q[o], "</span>");
                    }
                    l.text("</div>", '<div id="', s, '"></div>', "</div>");
                    l.write(this.panel);
                    var m = new TabGroup({ panelContainerID: s, items: j });
                    $jex.event.bind(m, "onselected", function(u) {
                        var i = n[u.tabname];
                        l.getDomNode("title").innerHTML = i.title;
                        l.getDomNode("desc").innerHTML = i.desc;
                        if (i.cls) {
                            $jex.$(s).className = i.cls;
                        } else {
                            $jex.$(s).className = "";
                        }
                    });
                    $jex.event.add(this, "open", function() { $jex.event.trigger(a, "openHotCity"); });
                    var t = this.own;
                    $jex.event.bindDom($jex.$(s), "mousedown", this, function(i, u) {
                        if (i.target.tagName == "A") {
                            var w = $jex.trim(i.target.innerHTML);
                            t.setCountry(i.target.parentNode.getAttribute("country"));
                            t.setValue(w);
                            t.setInfo("");
                            t.popups.close();
                            $jex.event.trigger(a, "selectHotCity", w);
                            $jex.event.trigger(a, "select", w);
                            a._invalid = false;
                        }
                    });
                    $jex.event.bind(l.getDomNode("close"), "click", function() { t.popups.close(); });
                },
                open: function() { this.own.setInfo(""); }
            },
            suggest: {
                initialize: function() {
                    this.layer = new FlightSuggestItemListLayer(this, a.setting.suggestType);
                    $jex.event.bind(this.layer, "select", function(i, k) {
                        if (i > -1) {
                            this.popup.own.setCountry(this.nodes[i].item.country);
                        }
                        if (i > -1) {
                            k ? this.popup.own.setValue(this.nodes[i].item.key) : this.popup.own.volateValue(this.nodes[i].item.key);
                        } else {
                            k ? this.popup.own.initValue(this.popup.own.inputold) : this.popup.own.volateValue(this.popup.own.inputold);
                        }
                        this.popup.own.vidx = i;
                        if (k) {
                            var l = this.nodes[i].item.key;
                            $jex.event.trigger(a, "select", l);
                            this.popup.close();
                            var j = window.newTrackAction || window.trackAction;
                            if (j) {
                                j("QH|HCT|suggest|" + encodeURIComponent(l), null, false);
                            }
                        }
                    });
                }
            }
        },
        attrs: {
            setTip: function() {
                if (this.getValue() == "") {
                    this.setInfo((this.info || "城市名"), "infotext");
                } else {
                    this.setInfo("");
                }
            },
            clear: function() {
                var i = this.popups.get("suggest");
                i && i.layer && (i.layer.cursor = -1);
                this.setValue("");
                this.setTip();
            },
            getHotCityConfig: function(j) {
                var i = this.setting.hotCityConfig;
                if (i && i[j]) {
                    return i[j];
                }
            },
            setHotCityConfig: function(i) { this.setting.hotCityConfig = i; },
            invalid: function() { return this._invalid; },
            cache: {},
            suggLoaded: function(j) {
                var l = this.popups.open("suggest"), i = j ? j.result : null, k = i ? i[0] : null;
                if (j) {
                    this.cache[j.userInput] = j;
                }
                if (!j || !i || i.length == 0 || !k.key || !k.type || !k.display) {
                    this.setInfo("");
                    j.q = j.userInput;
                    if (this.lastCache) {
                        this.lastCache.userInput = j.q;
                        l.layer.refresh(this.lastCache, true, g);
                        l.layer.enter(0);
                    } else {
                        l.layer.error();
                        this._invalid = true;
                    }
                    return;
                }
                this._invalid = false;
                this.setInfo("");
                j.q = j.userInput;
                l.layer.refresh(j, false, g);
                this.lastCache = $jex.extend({}, j);
                l.layer.enter(0);
            },
            keypress: function(j, k) {
                if (this._invalid) {
                    return;
                }
                var i = this.popups.get("suggest");
                if (!i || !i.isOpend()) {
                    return;
                }
                switch (k) {
                case 40:
                    i.layer.moveCursor(1, true);
                    break;
                case 38:
                    i.layer.moveCursor(-1, true);
                    break;
                case 13:
                    $jex.stopEvent(j);
                    i.layer.select(i.layer.cursor, true);
                    i.close();
                    break;
                default:
                }
            }
        }
    });
}

$jex.extendClass(FlightCityXCombox, XCombox);
FlightCityXCombox.prototype.setCountry = function(a) { this.country = a; };
FlightCityXCombox.prototype.getCountry = function(a) { return this.country; };

function FlightSuggestItemListLayer(a, b) {
    this.popup = a;
    this.cursor = -1;
    this.nodes = [];
    this.specialType = [1, 6, 7];
    this.isFuzzy = !b;
    this.allPlace = "所有地点";
    if (b) {
        this.specialType.push(b);
    }
}

FlightSuggestItemListLayer.prototype.error = function() {
    var a = new UIObject();
    a.append("<table", "suggestList", ' class="ill" cellspacing="0" cellpadding="0" >');
    a.text('<tr class="illrow error">', "<td>", this.popup.own.setting.errorSuggestTip || "输入错误", "</td>", "</tr>");
    a.write(this.popup.panel);
};
FlightSuggestItemListLayer.prototype.refresh = function(g, k, n) {
    this.cursor = -1;
    if (this.nodes.length > 0) {
        for (var h = 0; h < this.nodes.length; h++) {
            var d = this.nodes[h];
            d.item = null;
            d.layer = null;
            $jex.event.clear(d);
        }
    }
    this.nodes.length = 0;
    var l = g.q;
    var j = g.result;
    var m = g.userInput;
    var a = new RegExp("(" + m + ")", "i");
    var c = new UIObject();
    if (!!g.c) {
        c.text('<div class="qcity_guess">你要找的是不是<span class="hl">', m, "</span></div>");
    }
    if (k) {
        c.text('<div class="qcity_guess">找不到<span class="hl">', n, "</span></div>");
    } else {
        if (this.isFuzzy && j[j.length - 1].display != this.allPlace) {
            j.push({ country: "中国", display: this.allPlace, key: this.allPlace, type: 0 });
        }
    }
    c.append("<table", "suggestList", ' class="ill" cellspacing="0" cellpadding="0" >');
    for (var h = 0; h < j.length; h++) {
        var f = j[h];
        var o = (f.type == 4) ? "nearbyAirport" : "";
        if (f.display.indexOf(n) != -1) {
            a = new RegExp("(" + n + ")", "i");
        }
        c.text('<tr class="illrow ', o, '"', ">");
        c.append("<td ", h).text(' class="illn" hashkey="', f.key, '"', ((f.type == 1) ? 'noAirport="true"' : ""), ">", ((f.type == 4) ? "·邻近机场:" : ""), ((f.type == 9) ? "·相关城市:" : ""), f.display.replace(a, '<span class="keystring">$1</span>'), ((f.type == 9) ? "<span>(" + f.enname + ")</span>" : ""), ((f.length) ? "<span>-" + f.length + "公里</span>" : ""), ((f.type == 1) ? "-该城市没有机场" : ""), ((f.type == 2) ? "-该地区的机场有" : ""), ((f.type == 6) ? "-该景点没有机场" : ""), ((f.type == 7) ? "-该目的地为省份" : ""), ((f.type == 8) ? "-该目的地为国家" : ""), "</td>");
        c.text("</tr>");
    }
    c.text("</table>");
    c.write(this.popup.panel);
    var b = this.nodes;
    for (var h = 0; h < j.length; h++) {
        var d = c.getDomNode(h);
        d.item = j[h];
        d.layer = this;
        d.idx = h;
        b[h] = d;
        $jex.event.bind(d, "mouseover", this.mouseover);
        $jex.event.bind(d, "click", this.click);
    }
};
FlightSuggestItemListLayer.prototype.mouseover = function(a) {
    if ($jex.array.indexOf(this.layer.specialType, this.item.type) > -1) {
        return;
    }
    this.layer.enter(this.idx);
};
FlightSuggestItemListLayer.prototype.click = function(a) {
    if ($jex.array.indexOf(this.layer.specialType, this.item.type) > -1) {
        return;
    }
    this.layer.select(this.idx, true);
};
FlightSuggestItemListLayer.prototype.select = function(a, b) { $jex.event.trigger(this, "select", a, b); };
FlightSuggestItemListLayer.prototype.enter = function(a) {
    for (var b = 0; b < this.nodes.length; b++) {
        $jex.removeClassName(this.nodes[b].parentNode, "tllover");
    }
    if (a > -1) {
        var c = this.nodes[a].item;
        if ($jex.array.indexOf(this.specialType, c.type) > -1) {
            a++;
        }
        $jex.addClassName(this.nodes[a].parentNode, "tllover");
        this.cursor = a;
    }
};
FlightSuggestItemListLayer.prototype.moveCursor = function(c, b) {
    if (this.nodes.length == 0) {
        return;
    }
    if (this.cursor == -1 && c == -1) {
        this.cursor = this.nodes.length - 1;
    } else {
        var a = this.nodes[this.cursor + c];
        if (a) {
            if ($jex.array.indexOf(this.specialType, a.item.type) > -1) {
                c *= 2;
            }
        }
        this.cursor += c;
        if (this.cursor < -1 || this.cursor >= this.nodes.length) {
            this.cursor = -1;
        }
    }
    this.enter(this.cursor);
    if (b) {
        this.select(this.cursor);
    }
};

function SearchSwitcher(b, a) {
    this._settings = b || {};
    this._oldtype = null;
    this._memories = {};
    this._globalmemories = {};
    this._state = {};
    this._count = 0;
    this._type = null;
    if (a) {
        a();
    }
}

SearchSwitcher.prototype.getCurrent = function() { return this._newtype; };
SearchSwitcher.prototype.active = function(b) {
    var a = this._settings[b];
    if (!a) {
        return;
    }
    if (!this._state[b]) {
        this._state[b] = {};
    }
    var c = this._state[b];
    this._newtype = b;
    if (!c.initialized && a.initial) {
        a.initial();
    }
    if (!a.forgetful) {
        this.memories(this._oldtype || b);
    }
    if (a.active) {
        a.active();
        this._count++;
    }
    this._oldtype = b;
};
SearchSwitcher.prototype.memories = function(c) {
    var a = this._settings.memories;
    if (!a) {
        return;
    }
    for (var b in a) {
        var d = a[b].value();
        if (d) {
            this._memories[c + "_" + b] = a[b].value();
            this._globalmemories[b] = a[b].value();
        }
    }
};
SearchSwitcher.prototype.getmem = function(b, a) { return this._memories[b + "_" + a] || ""; };
SearchSwitcher.prototype.getgmem = function(a) { return this._globalmemories[a] || ""; };
SearchSwitcher.prototype.getEleType = function() { return this._type; };
SearchSwitcher.prototype.setEleType = function(a) { return this._type = a; };

function DatePickerXCombox(d, a, j) {
    var i = this;
    var g = this;
    var h = new ActionDelay(100);
    this.setting = j || {};
    var b = this.setting.maxRange || 3630;
    var c = this.fromDateBox = this.setting.fromDateBox || null;
    var f = this.dateChecker = this.setting.dateChecker || null;
    f.isInter = this.setting.isInter || false;
    this.refDateBox = this.setting.refDateBox || null;
    DatePickerXCombox.superclass.constructor.call(this, d, {
        button: {
            mousedown: function(k) {
                this.openMainMenu();
                $jex.stopEvent(k);
            }
        },
        input: {
            click: function(k) {
                this.openMainMenu();
                $jex.stopEvent(k);
            },
            change: function(m, k, l) {
                var o = QunarDate.getFuzzyDate(m);
                if (!i.fromDateBox || i.refDateBox) {
                    if (o && o.valid) {
                        this.setInfo("");
                        $jex.event.trigger(a, "fuzzyFromDateChanged");
                        f.setDate1(o.start);
                        return;
                    }
                    var n = f.checkDate1(this.getValue());
                    if (!n.error) {
                        f.setDate1(n.recommend);
                        h.reset(function() { $jex.event.trigger(a, "fromDateChanged"); });
                    }
                    this.setTip(n);
                } else {
                    if (o && o.valid) {
                        this.setInfo("");
                        $jex.event.trigger(a, "fuzzyToDateChanged");
                        f.setDate1(o.start);
                        return;
                    }
                    var n = f.checkDate2(this.getValue(), c.getValue(), QunarDate.format(QunarDate.plus(f.getMax(), 0)));
                    if (!n.error) {
                        f.setDate2(n.recommend, QunarDate.format(QunarDate.plus(f.getMax(), 0)));
                        h.reset(function() { $jex.event.trigger(a, "toDateChanged"); });
                    }
                    this.setTip(n);
                }
            },
            keypress: function(k) { this.keypress(k, k.keyCode); }
        },
        blur: function() {
            var l = QunarDate.getFuzzyDate(this.getValue());
            if (l && l.valid) {
                f.setDate1(l.start);
                return;
            }
            if (i.fromDateBox) {
                var k = f.checkDate2(this.getValue(), c.getValue(), QunarDate.format(QunarDate.plus(f.getMax(), 0)));
                f.setDate2(k.recommend, QunarDate.format(QunarDate.plus(f.getMax(), 0)));
                this.setValue(k.recommend);
            } else {
                var k = f.checkDate1(this.getValue());
                f.setDate1(k.recommend);
                this.setValue(k.recommend);
            }
        },
        popups: {
            main: {
                initialize: function() {
                    this.dateLayer = new DateLayer(this.panel, f);
                    var l = this.own;
                    var k = this;
                    $jex.event.add(this.dateLayer, "selected", function(m) {
                        l.setValue(QunarDate.format(m[0]));
                        l.pos = m[1];
                        k.close();
                    });
                    $jex.event.add(this.dateLayer, "fuzzySelected", function(m) {
                        l.setValue(m[0]);
                        l.pos = 0;
                        k.close();
                    });
                    $jex.event.add(this, "open", function() { $jex.event.trigger(i, "openDatepicker"); });
                },
                open: function() {
                    var k = this.own;
                    var l = this.own.getValue();
                    if (QunarDate.getFuzzyDate(l)) {
                        this.dateLayer.fuzzyRenderPanel(l);
                        return;
                    }
                    if (i.fromDateBox) {
                        if (!k.pos) {
                            k.pos = i.fromDateBox["pos"];
                        }
                        f.resetMax(f.getMin(), b);
                        var n = QunarDate.parse(c.getValue()).getTime() || QunarDate.today().getTime();
                        var o = f.checkDate2(this.own.getValue(), c.getValue(), QunarDate.format(QunarDate.plus(f.getMax(), 0)));
                        var m = QunarDate.getDatesOffset(f.getDate1(), f.getDate2());
                        this.dateLayer.render(o.recommendDate, new Date(n), new Date(QunarDate.plus(f.getMax(), 0)), k.pos, m);
                    } else {
                        f.resetMax();
                        var o = f.checkDate1(this.own.getValue());
                        var m = {};
                        if (!f.date2Hide) {
                            m = QunarDate.getDatesOffset(f.getDate1(), f.getDate2());
                        }
                        if (i.refDateBox) {
                            this.dateLayer.render(o.recommendDate, new Date(QunarDate.parse(i.refDateBox.getValue()).getTime()), 0, k.pos, m);
                        } else {
                            this.dateLayer.render(o.recommendDate, f.getMin(), 0, k.pos, m);
                        }
                    }
                }
            }
        },
        attrs: {
            keypress: function(k, l) {
                switch (l) {
                case 13:
                    if (this.popups.isOpend()) {
                        $jex.stopEvent(k);
                        this.popups.close();
                    }
                    break;
                case 27:
                    $jex.stopEvent(k);
                    this.popups.close();
                    break;
                default:
                }
            },
            setTip: function(k) {
                if (!this.getValue() && typeof(k) == "string") {
                    this.setInfo(k, "txtleft", "");
                    return;
                }
                if (i.fromDateBox) {
                    var k = k || f.checkDate2(this.getValue(), c.getValue(), QunarDate.format(QunarDate.plus(f.getMax(), 0)));
                } else {
                    var k = k || f.checkDate1(this.getValue());
                }
                if (k.error) {
                    this.setInfo(k.value, "errtext", k.tip);
                } else {
                    this.setInfo(QunarDate.getDateTip(k.recommend), "", "");
                }
            },
            invalid: function() { return $jex.hasClassName(this.infoPanel, "errtext"); }
        }
    });
}

$jex.extendClass(DatePickerXCombox, XCombox);

function TabGroup(a) {
    this._contentMAP = {};
    this.setting = a || {};
    this.setting.activeTab = this.setting.activeTab || 0;
    this.setting.activeCls = "active";
    this._initPanels();
    this._bindEvent();
    this.activeTab();
    this.bindedEvent = false;
}

TabGroup.prototype._got = function(a) {
    if (typeof a == "string") {
        return $jex.$(a);
    } else {
        return a;
    }
};
TabGroup.prototype._initPanels = function() {
    if (!this.setting.panelContainerID) {
        return;
    }
    var a = this.setting.items;
    var g = this._got(this.setting.panelContainerID);
    for (var b = 0; b < a.length; b++) {
        var d = a[b];
        if (d.render && !d.panelID) {
            var f = document.createElement("DIV");
            f.id = "TG_PANEL_" + $jex.globalID();
            f.className = "b_hct_lst";
            g.appendChild(f);
            $jex.element.hide(f);
            d.panelID = f.id;
        }
    }
};
TabGroup.prototype.activeTab = function(a) {
    a = a || 0;
    var d = this.setting;
    var b = this.setting.items;
    if (this.currentTab != null && this.currentPanel != null) {
        $jex.removeClassName(this.currentTab, d.activeCls);
        $jex.element.hide(this.currentPanel);
    }
    var f = b[a];
    if (!f) {
        return;
    }
    var c = this.currentTab = this._got(f.tabID);
    var g = this.currentPanel = this._got(f.panelID);
    if (f.render && !this._contentMAP[f.panelID]) {
        f.container = g;
        f.render(g);
        this._contentMAP[f.panelID] = true;
    }
    $jex.addClassName(c, d.activeCls);
    $jex.element.show(g);
    $jex.event.trigger(this, "onselected", f);
};
TabGroup.prototype._bindEvent = function() {
    if (this.bindedEvent) {
        return;
    }
    var a = this.setting.items;
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        var b = this._got(d.tabID);
        $jex.event.bindDom(b, "mousedown", this, function(f) { return function() { this.activeTab(f); }; }(c));
    }
    this.bindedEvent = true;
};
var __hotCityListFrom__ = [{ name: "上海", country: "中国" }, { name: "北京", country: "中国" }, { name: "广州", country: "中国" }, { name: "昆明", country: "中国" }, { name: "西安", country: "中国" }, { name: "成都", country: "中国" }, { name: "深圳", country: "中国" }, { name: "厦门", country: "中国" }, { name: "乌鲁木齐", country: "中国" }, { name: "南京", country: "中国" }, { name: "重庆", country: "中国" }, { name: "杭州", country: "中国" }, { name: "大连", country: "中国" }, { name: "长沙", country: "中国" }, { name: "海口", country: "中国" }, { name: "哈尔滨", country: "中国" }, { name: "青岛", country: "中国" }, { name: "沈阳", country: "中国" }, { name: "三亚", country: "中国" }, { name: "济南", country: "中国" }, { name: "武汉", country: "中国" }, { name: "郑州  ", country: "中国" }, { name: "贵阳", country: "中国" }, { name: "南宁", country: "中国" }, { name: "福州", country: "中国" }, { name: "天津", country: "中国" }, { name: "长春", country: "中国" }, { name: "太原", country: "中国" }, { name: "南昌", country: "中国" }, { name: "丽江", country: "中国" }];
var __hotCityListTo__ = [{ name: "上海", country: "中国" }, { name: "北京", country: "中国" }, { name: "广州", country: "中国" }, { name: "昆明", country: "中国" }, { name: "西安", country: "中国" }, { name: "成都", country: "中国" }, { name: "深圳", country: "中国" }, { name: "厦门", country: "中国" }, { name: "乌鲁木齐", country: "中国" }, { name: "南京", country: "中国" }, { name: "重庆", country: "中国" }, { name: "杭州", country: "中国" }, { name: "大连", country: "中国" }, { name: "长沙", country: "中国" }, { name: "海口", country: "中国" }, { name: "哈尔滨", country: "中国" }, { name: "青岛", country: "中国" }, { name: "沈阳", country: "中国" }, { name: "三亚", country: "中国" }, { name: "济南", country: "中国" }, { name: "武汉", country: "中国" }, { name: "郑州  ", country: "中国" }, { name: "贵阳", country: "中国" }, { name: "南宁", country: "中国" }, { name: "福州", country: "中国" }, { name: "天津", country: "中国" }, { name: "南昌", country: "中国" }, { name: "丽江", country: "中国" }, { name: "香港", country: "中国" }, { name: "台北", country: "中国" }];
var __hotCityListInterFrom__ = [{ name: "上海", country: "中国" }, { name: "北京", country: "中国" }, { name: "香港", country: "中国" }, { name: "厦门", country: "中国" }, { name: "重庆", country: "中国" }, { name: "广州", country: "中国" }, { name: "成都", country: "中国" }, { name: "昆明", country: "中国" }, { name: "曼谷", country: "泰国" }, { name: "南京", country: "中国" }, { name: "杭州", country: "中国" }, { name: "深圳", country: "中国" }, { name: "首尔", country: "韩国" }, { name: "沈阳", country: "中国" }, { name: "澳门", country: "中国澳门" }, { name: "新加坡", country: "新加坡" }, { name: "武汉", country: "中国" }, { name: "天津", country: "中国" }, { name: "青岛", country: "中国" }, { name: "西安", country: "中国" }, { name: "大连", country: "中国" }, { name: "台北", country: "中国" }, { name: "东京", country: "日本" }, { name: "吉隆坡", country: "马来西亚" }, { name: "南宁", country: "中国" }, { name: "福州", country: "中国" }, { name: "普吉", country: "泰国" }, { name: "长沙", country: "中国" }, { name: "哈尔滨", country: "中国" }, { name: "悉尼", country: "澳大利亚" }];
var __hotCityListInterTo__ = [{ name: "香港", country: "中国香港" }, { name: "曼谷", country: "泰国" }, { name: "新加坡", country: "新加坡" }, { name: "马尼拉", country: "菲律宾" }, { name: "墨尔本", country: "澳大利亚" }, { name: "首尔", country: "韩国" }, { name: "澳门", country: "中国澳门" }, { name: "吉隆坡", country: "马来西亚" }, { name: "旧金山", country: "美国" }, { name: "暹粒", country: "柬埔寨" }, { name: "台北", country: "中国台湾" }, { name: "普吉", country: "泰国" }, { name: "大阪", country: "日本" }, { name: "巴厘岛", country: "印度尼西亚" }, { name: "伦敦", country: "英国" }, { name: "东京", country: "日本" }, { name: "胡志明市", country: "越南" }, { name: "纽约", country: "美国" }, { name: "高雄", country: "中国台湾" }, { name: "釜山", country: "韩国" }, { name: "洛杉矶", country: "美国" }, { name: "悉尼", country: "澳大利亚" }, { name: "苏梅岛", country: "泰国" }, { name: "济州岛", country: "韩国" }, { name: "温哥华", country: "加拿大" }, { name: "清迈", country: "泰国" }, { name: "加德满都", country: "尼泊尔" }, { name: "雅加达", country: "印度尼西亚" }, { name: "金边", country: "柬埔寨" }, { name: "迪拜", country: "阿拉伯联合酋长国" }];
var __inter__ = [{ name: "香港", country: "中国香港" }, { name: "曼谷", country: "泰国" }, { name: "新加坡", country: "新加坡" }, { name: "马尼拉", country: "菲律宾" }, { name: "墨尔本", country: "澳大利亚" }, { name: "首尔", country: "韩国" }, { name: "澳门", country: "中国澳门" }, { name: "吉隆坡", country: "马来西亚" }, { name: "旧金山", country: "美国" }, { name: "暹粒", country: "柬埔寨" }, { name: "台北", country: "中国台湾" }, { name: "普吉", country: "泰国" }, { name: "大阪", country: "日本" }, { name: "巴厘岛", country: "印度尼西亚" }, { name: "伦敦", country: "英国" }, { name: "东京", country: "日本" }, { name: "胡志明市", country: "越南" }, { name: "纽约", country: "美国" }, { name: "高雄", country: "中国台湾" }, { name: "釜山", country: "韩国" }, { name: "洛杉矶", country: "美国" }, { name: "悉尼", country: "澳大利亚" }, { name: "苏梅岛", country: "泰国" }, { name: "济州岛", country: "韩国" }, { name: "温哥华", country: "加拿大" }, { name: "清迈", country: "泰国" }, { name: "加德满都", country: "尼泊尔" }, { name: "雅加达", country: "印度尼西亚" }, { name: "金边", country: "柬埔寨" }, { name: "迪拜", country: "阿拉伯联合酋长国" }];
var __interCountry__ = [{ name: "中国", country: "中国" }, { name: "韩国", country: "韩国" }, { name: "泰国", country: "泰国" }, { name: "美国", country: "美国" }, { name: "加拿大", country: "加拿大" }, { name: "日本", country: "日本" }, { name: "澳大利亚", country: "澳大利亚" }, { name: "英国", country: "英国" }, { name: "法国", country: "法国" }, { name: "马来西亚", country: "马来西亚" }];
var _tabConfig = { "热门-from": { cityList: __hotCityListFrom__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, "热门-to": { cityList: __hotCityListTo__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, "热门-inter-from": { cityList: __hotCityListInterFrom__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, "热门-inter-to": { cityList: __hotCityListInterTo__, countryList: __interCountry__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, ABCDE: { charSort: true, cityList: [{ "char": "A", list: [{ name: "阿里", country: "中国" }, { name: "阿尔山", country: "中国" }, { name: "安庆", country: "中国" }, { name: "阿勒泰", country: "中国" }, { name: "安康", country: "中国" }, { name: "鞍山", country: "中国" }, { name: "安顺", country: "中国" }, { name: "阿克苏", country: "中国" }, { name: "阿拉善左旗", country: "中国" }, { name: "阿拉善右旗", country: "中国" }] }, { "char": "B", list: [{ name: "包头", country: "中国" }, { name: "北海", country: "中国" }, { name: "北京", country: "中国" }, { name: "百色", country: "中国" }, { name: "保山", country: "中国" }, { name: "博乐", country: "中国" }, { name: "毕节", country: "中国" }, { name: "巴彦淖尔", country: "中国" }] }, { "char": "C", list: [{ name: "长治", country: "中国" }, { name: "池州", country: "中国" }, { name: "长春", country: "中国" }, { name: "常州", country: "中国" }, { name: "昌都", country: "中国" }, { name: "朝阳", country: "中国" }, { name: "常德", country: "中国" }, { name: "长白山", country: "中国" }, { name: "成都", country: "中国" }, { name: "重庆", country: "中国" }, { name: "长沙", country: "中国" }, { name: "赤峰", country: "中国" }] }, { "char": "D", list: [{ name: "大同", country: "中国" }, { name: "大连", country: "中国" }, { name: "东营", country: "中国" }, { name: "大庆", country: "中国" }, { name: "丹东", country: "中国" }, { name: "大理", country: "中国" }, { name: "敦煌", country: "中国" }, { name: "达州", country: "中国" }, { name: "稻城", country: "中国" }] }, { "char": "E", list: [{ name: "恩施", country: "中国" }, { name: "鄂尔多斯", country: "中国" }, { name: "二连浩特", country: "中国" }, { name: "额济纳旗", country: "中国" }] }], title: "拼音A-E城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, FGHJ: { charSort: true, cityList: [{ "char": "F", list: [{ name: "佛山", country: "中国" }, { name: "福州", country: "中国" }, { name: "阜阳", country: "中国" }, { name: "抚远", country: "中国" }] }, { "char": "G", list: [{ name: "贵阳", country: "中国" }, { name: "桂林", country: "中国" }, { name: "广州", country: "中国" }, { name: "广元", country: "中国" }, { name: "格尔木", country: "中国" }, { name: "赣州", country: "中国" }, { name: "固原", country: "中国" }] }, { "char": "H", list: [{ name: "哈密", country: "中国" }, { name: "呼和浩特", country: "中国" }, { name: "黑河", country: "中国" }, { name: "海拉尔", country: "中国" }, { name: "哈尔滨", country: "中国" }, { name: "海口", country: "中国" }, { name: "黄山", country: "中国" }, { name: "杭州", country: "中国" }, { name: "邯郸", country: "中国" }, { name: "合肥", country: "中国" }, { name: "黄龙", country: "中国" }, { name: "汉中", country: "中国" }, { name: "和田", country: "中国" }, { name: "淮安", country: "中国" }] }, { "char": "J", list: [{ name: "鸡西", country: "中国" }, { name: "晋江", country: "中国" }, { name: "锦州", country: "中国" }, { name: "景德镇", country: "中国" }, { name: "嘉峪关", country: "中国" }, { name: "井冈山", country: "中国" }, { name: "济宁", country: "中国" }, { name: "九江", country: "中国" }, { name: "佳木斯", country: "中国" }, { name: "济南", country: "中国" }, { name: "加格达奇", country: "中国" }, { name: "金昌", country: "中国" }, { name: "揭阳", country: "中国" }] }], title: "拼音F-J城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, KLMNP: { charSort: true, cityList: [{ "char": "K", list: [{ name: "喀什", country: "中国" }, { name: "昆明", country: "中国" }, { name: "康定", country: "中国" }, { name: "克拉玛依", country: "中国" }, { name: "库尔勒", country: "中国" }, { name: "库车", country: "中国" }, { name: "喀纳斯", country: "中国" }, { name: "凯里", country: "中国" }] }, { "char": "L", list: [{ name: "兰州", country: "中国" }, { name: "洛阳", country: "中国" }, { name: "丽江", country: "中国" }, { name: "荔波", country: "中国" }, { name: "林芝", country: "中国" }, { name: "柳州", country: "中国" }, { name: "泸州", country: "中国" }, { name: "连云港", country: "中国" }, { name: "黎平", country: "中国" }, { name: "连城", country: "中国" }, { name: "拉萨", country: "中国" }, { name: "临沧", country: "中国" }, { name: "临沂", country: "中国" }, { name: "吕梁", country: "中国" }] }, { "char": "M", list: [{ name: "芒市", country: "中国" }, { name: "牡丹江", country: "中国" }, { name: "满洲里", country: "中国" }, { name: "绵阳", country: "中国" }, { name: "梅县", country: "中国" }, { name: "漠河", country: "中国" }] }, { "char": "N", list: [{ name: "南京", country: "中国" }, { name: "南充", country: "中国" }, { name: "南宁", country: "中国" }, { name: "南阳", country: "中国" }, { name: "南通", country: "中国" }, { name: "南昌", country: "中国" }, { name: "那拉提", country: "中国" }, { name: "宁波", country: "中国" }] }, { "char": "P", list: [{ name: "攀枝花", country: "中国" }, { name: "普洱", country: "中国" }] }], title: "拼音K-P城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, QRSTW: { charSort: true, cityList: [{ "char": "Q", list: [{ name: "衢州", country: "中国" }, { name: "黔江", country: "中国" }, { name: "秦皇岛", country: "中国" }, { name: "庆阳", country: "中国" }, { name: "且末", country: "中国" }, { name: "齐齐哈尔", country: "中国" }, { name: "青岛", country: "中国" }] }, { "char": "R", list: [{ name: "日喀则", country: "中国" }] }, { "char": "S", list: [{ name: "深圳", country: "中国" }, { name: "石家庄", country: "中国" }, { name: "三亚", country: "中国" }, { name: "沈阳", country: "中国" }, { name: "上海", country: "中国" }, { name: "神农架", country: "中国" }] }, { "char": "T", list: [{ name: "唐山", country: "中国" }, { name: "铜仁", country: "中国" }, { name: "塔城", country: "中国" }, { name: "腾冲", country: "中国" }, { name: "台州", country: "中国" }, { name: "天水", country: "中国" }, { name: "天津", country: "中国" }, { name: "通辽", country: "中国" }, { name: "吐鲁番", country: "中国" }, { name: "太原", country: "中国" }] }, { "char": "W", list: [{ name: "威海", country: "中国" }, { name: "武汉", country: "中国" }, { name: "梧州", country: "中国" }, { name: "文山", country: "中国" }, { name: "无锡", country: "中国" }, { name: "潍坊", country: "中国" }, { name: "武夷山", country: "中国" }, { name: "乌兰浩特", country: "中国" }, { name: "温州", country: "中国" }, { name: "乌鲁木齐", country: "中国" }, { name: "万州", country: "中国" }, { name: "乌海", country: "中国" }] }], title: "拼音Q-W城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, XYZ: { charSort: true, cityList: [{ "char": "X", list: [{ name: "兴义", country: "中国" }, { name: "西昌", country: "中国" }, { name: "厦门", country: "中国" }, { name: "香格里拉", country: "中国" }, { name: "西安", country: "中国" }, { name: "西宁", country: "中国" }, { name: "襄阳(中国)", country: "中国" }, { name: "锡林浩特", country: "中国" }, { name: "西双版纳", country: "中国" }, { name: "徐州", country: "中国" }] }, { "char": "Y", list: [{ name: "义乌", country: "中国" }, { name: "永州", country: "中国" }, { name: "榆林", country: "中国" }, { name: "扬州", country: "中国" }, { name: "延安", country: "中国" }, { name: "运城", country: "中国" }, { name: "烟台", country: "中国" }, { name: "银川", country: "中国" }, { name: "宜昌", country: "中国" }, { name: "宜宾", country: "中国" }, { name: "宜春", country: "中国" }, { name: "盐城", country: "中国" }, { name: "延吉", country: "中国" }, { name: "玉树", country: "中国" }, { name: "伊宁", country: "中国" }, { name: "伊春", country: "中国" }] }, { "char": "Z", list: [{ name: "珠海", country: "中国" }, { name: "昭通", country: "中国" }, { name: "张家界", country: "中国" }, { name: "舟山", country: "中国" }, { name: "郑州", country: "中国" }, { name: "中卫", country: "中国" }, { name: "芷江", country: "中国" }, { name: "湛江", country: "中国" }, { name: "遵义", country: "中国" }, { name: "张掖", country: "中国" }, { name: "张家口", country: "中国" }] }], title: "拼音X-Z城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, "国际·港澳台_fuzzy": { cityList: __inter__, countryList: __interCountry__, title: "国际·港澳台城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, "国际·港澳台": { cityList: __inter__, title: "国际·港澳台城市", desc: "可直接输入中文名/拼音/英文名/三字码" }, "热门城市_fuzzy": { cityList: __hotCityListInterTo__, countryList: __interCountry__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码", cls: "" }, "热门城市": { cityList: __hotCityListInterTo__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码", cls: "" }, "亚洲/大洋洲": { cityList: [{ name: "香港", country: "中国香港" }, { name: "新加坡", country: "新加坡" }, { name: "首尔", country: "韩国" }, { name: "曼谷", country: "泰国" }, { name: "吉隆坡", country: "马来西亚" }, { name: "东京", country: "日本" }, { name: "台北", country: "中国台湾" }, { name: "悉尼", country: "澳大利亚" }, { name: "澳门", country: "中国澳门" }, { name: "普吉", country: "泰国" }, { name: "墨尔本", country: "澳大利亚" }, { name: "胡志明市", country: "越南" }, { name: "大阪", country: "日本" }, { name: "巴厘岛", country: "印度尼西亚" }, { name: "马尼拉", country: "菲律宾" }, { name: "河内", country: "越南" }, { name: "加德满都", country: "尼泊尔" }, { name: "金边", country: "柬埔寨" }, { name: "雅加达", country: "印度尼西亚" }, { name: "马累", country: "马尔代夫" }, { name: "暹粒", country: "柬埔寨" }, { name: "迪拜", country: "阿拉伯联合酋长国" }, { name: "釜山", country: "韩国" }, { name: "名古屋", country: "日本" }, { name: "奥克兰", country: "新西兰" }, { name: "布里斯班", country: "澳大利亚" }, { name: "槟城", country: "马来西亚" }, { name: "高雄", country: "中国台湾" }, { name: "新德里", country: "印度" }, { name: "济州岛", country: "韩国" }], title: "亚洲/大洋洲热门城市", desc: "可直接输入中文名/拼音/英文名/三字码", cls: "inter" }, "美洲": { cityList: [{ name: "纽约", country: "美国" }, { name: "洛杉矶", country: "美国" }, { name: "多伦多", country: "加拿大" }, { name: "温哥华", country: "加拿大" }, { name: "旧金山", country: "美国" }, { name: "芝加哥", country: "美国" }, { name: "华盛顿", country: "美国" }, { name: "西雅图", country: "美国" }, { name: "波士顿", country: "美国" }, { name: "底特律", country: "美国" }, { name: "亚特兰大", country: "美国" }, { name: "蒙特利尔", country: "加拿大" }, { name: "休斯敦", country: "美国" }, { name: "火奴鲁鲁", country: "美国" }, { name: "达拉斯", country: "美国" }, { name: "拉斯维加斯", country: "美国" }, { name: "费城", country: "美国" }, { name: "圣保罗（巴西）", country: "巴西" }, { name: "明尼阿波利斯", country: "美国" }, { name: "渥太华", country: "加拿大" }, { name: "凤凰城", country: "美国" }, { name: "墨西哥", country: "墨西哥" }, { name: "迈阿密", country: "美国" }, { name: "丹佛", country: "美国" }, { name: "奥兰多", country: "美国" }, { name: "卡尔加里", country: "加拿大" }, { name: "埃德蒙顿", country: "加拿大" }, { name: "布宜诺斯艾利斯", country: "阿根廷" }, { name: "里约热内卢", country: "巴西" }, { name: "匹兹堡", country: "美国" }], title: "美洲热门城市", desc: "可直接输入中文名/拼音/英文名/三字码", cls: "inter" }, "欧洲": { cityList: [{ name: "伦敦", country: "英国" }, { name: "巴黎", country: "法国" }, { name: "法兰克福", country: "德国" }, { name: "莫斯科", country: "俄罗斯" }, { name: "阿姆斯特丹", country: "荷兰" }, { name: "罗马（意大利）", country: "意大利" }, { name: "米兰", country: "意大利" }, { name: "马德里", country: "西班牙" }, { name: "慕尼黑", country: "德国" }, { name: "柏林", country: "德国" }, { name: "斯德哥尔摩", country: "瑞典" }, { name: "伊斯坦布尔", country: "土耳其" }, { name: "伯明翰（英国）", country: "英国" }, { name: "巴塞罗那(西班牙)", country: "西班牙" }, { name: "雅典", country: "希腊" }, { name: "哥本哈根", country: "丹麦" }, { name: "苏黎世", country: "瑞士" }, { name: "布鲁塞尔", country: "比利时" }, { name: "赫尔辛基", country: "芬兰" }, { name: "爱丁堡", country: "英国" }, { name: "维也纳", country: "奥地利" }, { name: "格拉斯哥（英国）", country: "英国" }, { name: "日内瓦", country: "瑞士" }, { name: "圣彼得堡", country: "俄罗斯" }, { name: "都柏林(爱尔兰)", country: "爱尔兰" }, { name: "汉堡", country: "德国" }, { name: "杜塞尔多夫", country: "德国" }, { name: "布拉格", country: "捷克" }, { name: "布达佩斯", country: "匈牙利" }, { name: "基辅", country: "乌克兰" }], title: "欧洲热门城市", desc: "可直接输入中文名/拼音/英文名/三字码", cls: "inter" }, "非洲": { cityList: [{ name: "开罗", country: "埃及" }, { name: "约翰内斯堡", country: "南非" }, { name: "内罗毕", country: "肯尼亚" }, { name: "开普敦", country: "南非" }, { name: "毛里求斯", country: "毛里求斯" }, { name: "拉各斯", country: "尼日利亚" }, { name: "喀土穆", country: "苏丹" }, { name: "亚的斯亚贝巴", country: "埃塞俄比亚" }, { name: "阿克拉", country: "加纳" }, { name: "达累斯萨拉姆", country: "坦桑尼亚" }, { name: "塞舌尔", country: "塞舌尔共和国" }, { name: "阿尔及尔", country: "阿尔及利亚" }, { name: "的黎波里", country: "利比亚" }, { name: "阿布贾", country: "尼日利亚" }, { name: "卡萨布兰卡", country: "摩洛哥" }, { name: "突尼斯", country: "突尼斯" }], title: "非洲热门城市", desc: "可直接输入中文名/拼音/英文名/三字码", cls: "inter" }, "国内": { cityList: __hotCityListFrom__, title: "热门城市", desc: "可直接输入中文名/拼音/英文名/三字码" } };
var FlightLang = { hotCityConfig: { "domestic-from": { tabs: ["热门", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ"], contents: { "热门": _tabConfig["热门-from"], ABCDE: _tabConfig.ABCDE, FGHJ: _tabConfig.FGHJ, KLMNP: _tabConfig.KLMNP, QRSTW: _tabConfig.QRSTW, XYZ: _tabConfig.XYZ } }, "domestic-to": { tabs: ["热门", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ"], contents: { "热门": _tabConfig["热门-to"], ABCDE: _tabConfig.ABCDE, FGHJ: _tabConfig.FGHJ, KLMNP: _tabConfig.KLMNP, QRSTW: _tabConfig.QRSTW, XYZ: _tabConfig.XYZ } }, "international-from": { tabs: ["热门", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ", "国际·港澳台"], contents: { "热门": _tabConfig["热门-inter-from"], ABCDE: _tabConfig.ABCDE, FGHJ: _tabConfig.FGHJ, KLMNP: _tabConfig.KLMNP, QRSTW: _tabConfig.QRSTW, XYZ: _tabConfig.XYZ, "国际·港澳台": _tabConfig["国际·港澳台_fuzzy"] } }, "international-to": { tabs: ["热门城市和国家", "亚洲/大洋洲", "美洲", "欧洲", "非洲", "国内"], contents: { "热门城市和国家": _tabConfig["热门城市_fuzzy"], "亚洲/大洋洲": _tabConfig["亚洲/大洋洲"], "美洲": _tabConfig["美洲"], "欧洲": _tabConfig["欧洲"], "非洲": _tabConfig["非洲"], "国内": _tabConfig["国内"] } }, "multitrip-from": { tabs: ["热门", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ", "国际·港澳台"], contents: { "热门": _tabConfig["热门-inter-from"], ABCDE: _tabConfig.ABCDE, FGHJ: _tabConfig.FGHJ, KLMNP: _tabConfig.KLMNP, QRSTW: _tabConfig.QRSTW, XYZ: _tabConfig.XYZ, "国际·港澳台": _tabConfig["国际·港澳台"] } }, "multitrip-to": { tabs: ["热门城市", "亚洲/大洋洲", "美洲", "欧洲", "非洲", "国内"], contents: { "热门城市": _tabConfig["热门城市"], "亚洲/大洋洲": _tabConfig["亚洲/大洋洲"], "美洲": _tabConfig["美洲"], "欧洲": _tabConfig["欧洲"], "非洲": _tabConfig["非洲"], "国内": _tabConfig["国内"] } }, "domestic-list-from": { tabs: ["热门", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ", "国际·港澳台"], contents: { "热门": _tabConfig["热门-from"], ABCDE: _tabConfig.ABCDE, FGHJ: _tabConfig.FGHJ, KLMNP: _tabConfig.KLMNP, QRSTW: _tabConfig.QRSTW, XYZ: _tabConfig.XYZ, "国际·港澳台": _tabConfig["国际·港澳台"] } }, "domestic-list-to": { tabs: ["热门", "ABCDE", "FGHJ", "KLMNP", "QRSTW", "XYZ", "国际·港澳台"], contents: { "热门": _tabConfig["热门-to"], ABCDE: _tabConfig.ABCDE, FGHJ: _tabConfig.FGHJ, KLMNP: _tabConfig.KLMNP, QRSTW: _tabConfig.QRSTW, XYZ: _tabConfig.XYZ, "国际·港澳台": _tabConfig["国际·港澳台"] } } }, specPlace: ["所有地点", "中国", "日本", "泰国", "马来西亚", "韩国", "英国", "美国", "澳大利亚", "加拿大", "法国", "德国", "俄罗斯", "菲律宾", "印度", "新西兰", "西班牙", "意大利"], _CAPTIAL: "北京", _COUNTRY: "中国", _blankInput: "城市名" };

function SearchBox(a, c) {
    var o;
    this.type = "domestic";
    var d = this;
    var z = FlightLang;
    this.sswitcher = null;
    $jex.foreach(["fromCity", "toCity"], function(C, B) {
        d[C] = new FlightCityXCombox(a[C], d, { errorSuggestTip: "请输入正确的" + (B ? "到达" : "出发") + "城市", suggestType: c.suggestType });
        var A = B ? c.toHotCity : c.fromHotCity;
        d[C].setHotCityConfig(z.hotCityConfig[A]);
        d[C].setMark(B ? "到" : "从");
    });
    var g = this.fromCity;
    var p = this.toCity;
    g.info = p.info = c.info;
    var t = new DateChecker(3630);
    var k = this.fromDate = new DatePickerXCombox(a.fromDate, d, { dateChecker: t });
    var w = this.toDate = new DatePickerXCombox(a.toDate, d, { dateChecker: t, fromDateBox: k });
    t.isInter = c.isFuzzy;
    this.setValue = function(D) {
        var C = [g, D.searchDepartureAirport || D.fromCity, p, D.searchArrivalAirport || D.toCity, k, D.searchDepartureTime || D.fromDate];
        var E = D.searchArrivalTime || D.toDate;
        if (E) {
            C.push(w, E);
        }
        for (var B = 0, A = C.length; B < A; B = B + 2) {
            if (!C[B] || !C[B + 1]) {
                continue;
            }
            C[B].setValue(C[B + 1]);
            C[B].setTip();
        }
        this.param = D;
    };
    var s = { roundtrip: "searchTypeRnd", oneway: "searchTypeSng", deal: "searchTypeDeals" };
    this.setSearchType = function(A) {
        if (!s[A]) {
            throw"no searchType" + A;
        }
        $jex.$(s[A]).checked = true;
        o.active(A);
        if (A === "roundtrip") {
            var B = this.param;
            w.setValue(B.searchArrivalTime || B.toDate);
            w.setTip();
        }
    };
    $jex.event.add(this, "fromDateChanged", function() {
        var B = t.checkDate1(k.getValue()).recommend;
        var A = t.checkDate2(w.getValue(), B, QunarDate.format(QunarDate.plus(t.getMax(), 0))).recommend;
        t.setDate2(A, QunarDate.format(QunarDate.plus(t.getMax(), 0)));
        w.setValue(A);
    });
    $jex.event.add(this, "toDateChanged", function() {
        var A = t.checkDate1(k.getValue()).recommend;
        k.setValue(A);
    });
    $jex.event.add(this, "fuzzyFromDateChanged", function() { w.setValue(k.getValue()); });
    $jex.event.add(this, "fuzzyToDateChanged", function() {
        var A = w.getValue();
        if (A.indexOf("周") == -1 || A == "1周之内") {
            k.setValue(A);
        }
    });
    $jex.event.addEx([g, p], "openHotCity", function() { $jex.event.trigger(d, "openHotCity"); });
    $jex.event.addEx([g, p], "selectHotCity", function(B) {
        $jex.event.trigger(d, "selectHotCity", B);
        var A = window.newTrackAction || window.trackAction;
        if (A) {
            A("QH|HCT|select|" + encodeURIComponent(B), null, false);
        }
    });
    $jex.event.addEx([k, w], "openDatepicker", function() { $jex.event.trigger(d, "openDatepicker"); });
    $jex.event.bindDom(g.inputEl, "mousedown", this, function(A) {
        $jex.event.trigger(g, "buttonmousedown");
        return false;
    });
    $jex.event.bindDom(p.inputEl, "mousedown", this, function(A) {
        $jex.event.trigger(p, "buttonmousedown");
        return false;
    });
    var m = new ActionDelay(200);

    function j() { m.reset(function() { $jex.event.trigger(d, "dateFinish"); }); }

    $jex.event.addEx([g, p], "valuechange", function(B, A, C) {
        if (C) {
            $jex.event.trigger(d, "citychange", this.inputEl.name, B);
        }
    });
    $jex.event.add(this, "fromDateChanged", j);
    $jex.event.add(this, "toDateChanged", j);

    function l() {
        if (d.searchType == "deal") {
            return false;
        }
        var A = false;
        var B = document.activeElement;
        $jex.foreach([g, p], function(F, C) {
            var E = C == 0 ? "出发" : "到达";
            if (B === F.inputEl) {
                try {
                    F.inputEl.blur();
                } catch (D) {
                }
            }
            if (F.invalid()) {
                F.showError("请输入正确的" + E + "城市");
                A = true;
                return;
            }
            F.hideError();
        });
        return A;
    }

    function x() {
        var A = g.getValue();
        if (d.searchType == "deal") {
            return false;
        }
        var B = l();
        if (B) {
            return B;
        }
        if (A && A === p.getValue() && $jex.array.indexOf(z.specPlace, A) == -1) {
            p.showError("不能和出发地相同");
            B = true;
        }
        return B;
    }

    $jex.event.bindDom(a, "submit", this, function(A) {
        g.initValue(g.getValue());
        p.initValue(p.getValue());
        if (x()) {
            $jex.stopEvent(A);
            return false;
        }
        b();
        q();
        if (!y()) {
            $jex.stopEvent(A);
            return false;
        }
        $jex.event.trigger(d, "pre_submit");
    });
    var n = $jex.$("hbtnReturnResearch");
    if (n) {
        $jex.event.click(n, function(A) {
            $jex.stopEvent(A);
            setTimeout(function() {
                i();
                setTimeout(function() {
                    if (!x()) {
                        b();
                        q();
                        if (y()) {
                            a.submit();
                        }
                    }
                });
            });
            return false;
        });
        $jex.event.binding(d, "switch", function(B, A) {
            if (A == "oneway") {
                $jex.element.show(n);
            } else {
                $jex.element.hide(n);
            }
        });
    }

    function y() {
        var A = { fd: k.getValue(), td: w.getValue(), fromCity: g.getValue(), toCity: p.getValue(), type: "国内", searchType: $jex.$("searchTypeSng").checked ? "oneway" : "roundtrip" };
        var B = window.searchCaution;
        if (B && B.check(A)) {
            B.show();
            return false;
        }
        return true;
    }

    function b() {
        var C = window.QLib && QLib.getEx_track && QLib.getEx_track();
        if (!C) {
            return;
        }
        var A = C.split("=");
        var B = document.createElement("input");
        B.type = "hidden";
        B.name = A[0];
        B.value = A[1];
        a.appendChild(B);
    }

    function q() {
        var A = $jex.parseQueryParam();
        var B = A.from;
        if (!B) {
            return;
        }
        a.from && (a.from.value = B);
    }

    function i() {
        var A = g.getValue();
        g.setValue(p.getValue());
        p.setValue(A);
        A = g._invalid;
        g._invalid = p._invalid;
        p._invalid = A;
        A = g.getCountry();
        g.setCountry(p.getCountry());
        p.setCountry(A);
        g.setTip();
        p.setTip();
        l();
    }

    $jex.event.bindDom($jex.$("js-exchagne-city"), "click", this, function(A) {
        $jex.stopEvent(A);
        setTimeout(function() {
            i();
            var B = window.newTrackAction || window.trackAction;
            if (B) {
                B("FL|SB|huan");
            }
        }, 0);
    });
    $jex.event.bindDom($jex.$("arrivalDateDiv_disable"), "click", this, function(A) {
        $jex.$("searchTypeRnd").checked = true;
        o.setEleType("disable");
        o.active("roundtrip");
    });

    function u(A) {
        var D = A == "deal";
        $jex.foreach(["fromCity", "toCity"], function(E) {
            var F = d[E];
            F.info = D ? "城市名（可不填）" : c.info;
            F.hideError();
            F.setValue(o.getgmem(E));
            F.setTip();
        });
        k.setMark(D ? "从" : "往");
        w.setMark(D ? "到" : "返");
        t.setSpan(3630);
        t.setDelay2(3);
        if (A == "oneway") {
            t.hideDate2();
            $jex.element.hide($jex.$("arrivalDateDiv"));
            $jex.element.show($jex.$("arrivalDateDiv_disable"));
        } else {
            var C = w.getValue();
            t.showDate2();
            $jex.element.show($jex.$("arrivalDateDiv"));
            $jex.element.hide($jex.$("arrivalDateDiv_disable"));
            var B = o.getEleType();
            if ("disable" === B || (C === k.getValue() && o._count >= 1 && "radio" === B)) {
                w.mousedown({ preventDefault: function() {}, stopPropagation: function() {} });
                setTimeout(function() { $jex.$("searchTypeRnd").checked = true; }, 0);
            }
        }
        d.searchType = A;
        $jex.event.trigger(d, "switch", d, A);
    }

    var f = { memories: { fromCity: { value: function() { return g.getValue(); } }, toCity: { value: function() { return p.getValue(); } }, toDate: { value: function() { return w.getValue(); } }, fromDate: { value: function() { return k.getValue(); } } } };
    var h = ["oneway", "roundtrip", "deal"];
    $jex.foreach(h, function(B, A) { f[B] = { active: function() { u(B); } }; });
    o = this.sswitcher = new SearchSwitcher(f, function() {
        for (var A = 0, B = a.searchType.length; A < B; A++) {
            (function(C) {
                $jex.event.bindDom(a.searchType[C], "click", a.searchType[C], function(D, E) {
                    switch (this.id) {
                    case"searchTypeSng":
                        o.active("oneway");
                        break;
                    case"searchTypeRnd":
                        o.setEleType(E.type);
                        o.active("roundtrip");
                        break;
                    case"searchTypeDeals":
                        o.active("deal");
                        break;
                    }
                });
            })(A);
        }
    });
}

var SearchBoxCreate = (function() {
    var d, f;

    function b(i) {
        var g = $jex.$("js-sbtn_list");
        if (g) {
            var h = g.getElementsByTagName("button");
            if (h.length > 0) {
                $jex.foreach([h[0], h[1]], function(k, j) { k.removeAttribute("disabled"); });
            }
        }
        i.setValue(d);
        i.setSearchType(f || "oneway");
        if ($jex.$("forecast")) {
            $jex.element.show($jex.$("forecast").parentNode);
            $jex.event.click("forecast", function() { window.open("http://flight.qunar.com/t-cast/flight_cast.html?departureCity=" + encodeURIComponent(i.fromCity.getValue()) + "&departureDate=" + i.fromDate.getValue() + "&arrivalCity=" + encodeURIComponent(i.toCity.getValue())); });
        }
        $jex.console.end("第一屏,快速搜索返程等功能");
    }

    function a() {
        var i = $jex.$("searchboxForm");
        var j = window.System && window.System.queryParams ? window.System.queryParams.ex_track : "";
        if (j) {
            var g = document.createElement("input");
            g.type = "hidden";
            g.value = j;
            g.name = "ex_track";
            i.appendChild(g);
        }
        var h = new SearchBox(i, { fromHotCity: "domestic-list-from", toHotCity: "domestic-list-to", isFuzzy: false, info: "城市名", suggestType: 8 });
        b(h);
        return h;
    }

    function c() {
        $jex.console.start("第一屏,初始化搜索历史下拉菜单");
        new QunarHistoryToolbar({ elemId: "searchHistroy" });
        $jex.console.end("第一屏,初始化搜索历史下拉菜单");
    }

    return function(h, g) {
        d = h;
        f = g;
        var i = a();
        setTimeout(function() { c(); }, 10);
        return i;
    };
})();