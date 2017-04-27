﻿(function() {
    var e = function() { this.param = {}; };
    e.prototype.cookie = function(i, j, g) {
        if (arguments.length > 1 && String(j) !== "[object Object]") {
            g = g || {};
            if (j === null || j === undefined) {
                g.expires = -1;
            }
            if (typeof g.expires === "number") {
                var l = g.expires, h = g.expires = new Date();
                h.setDate(h.getDate() + l);
            }
            j = String(j);
            return (document.cookie = [encodeURIComponent(i), "=", g.raw ? j : encodeURIComponent(j), g.expires ? "; expires=" + g.expires.toUTCString() : "", g.path ? "; path=" + g.path : "; path=/", g.domain ? "; domain=" + g.domain : "", g.secure ? "; secure" : ""].join(""));
        }
        g = j || {};
        var f, k = g.raw ? function(m) { return m; } : decodeURIComponent;
        return (f = new RegExp("(?:^|; )" + encodeURIComponent(i) + "=([^;]*)").exec(document.cookie)) ? k(f[1]) : null;
    };
    e.prototype.add = function(f, g) {
        if (g != null) {
            this.param[f] = g;
        }
    };
    e.prototype.getHashString = function(f) {
        var h = window.location.hash.toString();
        var g = new RegExp("" + f + "=([^&?]*)", "ig");
        return ((h.match(g)) ? decodeURIComponent((h.match(g)[0].substr(f.length + 1))) : "");
    };
    e.prototype.getQueryString = function(f) {
        var h = window.location.search.toString();
        var g = new RegExp("" + f + "=([^&?]*)", "ig");
        return ((h.match(g)) ? decodeURIComponent((h.match(g)[0].substr(f.length + 1))) : "");
    };
    e.prototype.send = function() {
        var f = this.get_location();
        var g = new Image();
        g.src = "http://bc.qunar.com/" + f + "?" + this._collect_params();
    };
    e.prototype._collect_params = function() {
        var g = [];
        var h = this.param;
        for (var f in h) {
            g.push(f + "=" + encodeURIComponent(h[f]));
        }
        return g.join("&");
    };
    e.prototype.getDomain = function(f) { return (f || "").replace(/^.+\.(.+?\..+)$/, "$1"); };
    e.prototype.get_location = function() {
        if (window._ba_utm_l) {
            return window._ba_utm_l;
        } else {
            return "e";
        }
    };
    if (window.QNRGA) {
        window.QNR_GA = e;
    } else {
        window.QNRGA = e;
    }
    var d = new e();
    var b = false;

    function c() {
        if (b) {
            return;
        }
        b = true;
        var g = d.getDomain(document.domain);
        var h = d.getHashString("in_track") || d.getQueryString("in_track");
        var l = d.getHashString("ex_track") || d.getQueryString("ex_track");
        if (h) {
            d.cookie("QN5", h, { domain: g });
        }
        if (l) {
            d.cookie("QN6", l, { domain: g });
        }
        var f = window._ba_utm_init;
        if (f && typeof f == "function") {
            try {
                f.apply(d, [e]);
            } catch (k) {
            }
        }
        d.add("utmwv", "0.1");
        d.add("t", Math.random());
        d.add("utmsr", screen.availWidth + "*" + screen.availHeight);
        d.add("utmr", document.referrer || "-1");
        d.add("utmp", window.location.href.toString());
        d.add("utmhn", window.location.host.toString());
        d.add("s", window._ba_utm_s || null);
        if (window._ba_utm_ex) {
            var j = window._ba_utm_ex;
            for (var i in j) {
                d.add(i, j[i]);
            }
        }
        if (window._ba_utm_s) {
            d.send();
            d.sended = true;
        }
    }

    e.init = c;
    var a = 0;
    setTimeout(function() {
        if (window._ba_utm_init || window._ba_utm_s) {
            c();
        } else {
            a++;
            if (a < 50) {
                setTimeout(arguments.callee, 100);
            }
        }
    }, 100);
})();