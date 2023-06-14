! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarBootstrap = {}, e.FullCalendar)
}(this, (function (e, t) {
    "use strict";
    var o = function (e, t) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    };
    var r = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return function (e, t) {
            function r() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }(t, e), t
    }(t.Theme);
    r.prototype.classes = {
        widget: "bootstrap-icons",
        tableGrid: "table-bordered",
        tableList: "table",
        tableListHeading: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-light",
        buttonActive: "active",
        today: "alert bg-light",
        popover: "card card-primary",
        popoverHeader: "card-header",
        popoverContent: "card-body",
        headerRow: "table-bordered",
        dayRow: "table-bordered",
        listView: "card card-primary"
    }, r.prototype.baseIconClass = "fa", r.prototype.iconClasses = {
        close: "bi-x",
        prev: "bi-chevron-left",
        next: "bi-chevron-right",
        prevYear: "bi-chevron-double-left",
        nextYear: "bi-chevron-double-right"
    };
    var a = t.createPlugin({
        themeClasses: {
            bootstrap: r
        }
    });
    e.BootstrapTheme = r, e.default = a, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));