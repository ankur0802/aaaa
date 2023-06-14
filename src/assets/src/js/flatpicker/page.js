"use strict";
! function() {
    const e = document.querySelector("#flatpickr-date"),
        t = document.querySelector("#flatpickr-time"),
        i = document.querySelector("#flatpickr-datetime"),
        a = document.querySelector("#flatpickr-multi"),
        r = document.querySelector("#flatpickr-range"),
        n = document.querySelector("#flatpickr-inline"),
        o = document.querySelector("#flatpickr-human-friendly"),
        l = document.querySelector("#flatpickr-disabled-range");
    if (e && e.flatpickr({
        altInput: !0,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d"
        }), t && t.flatpickr({
            enableTime: !0,
            noCalendar: !0
        }), i && i.flatpickr({
            enableTime: !0,
            dateFormat: "Y-m-d H:i"
        }), a && a.flatpickr({
            weekNumbers: !0,
            enableTime: !0,
            mode: "multiple",
            minDate: "today"
        }), null != typeof r && r.flatpickr({
            mode: "range"
        }), n && n.flatpickr({
            inline: !0,
            allowInput: !1,
            monthSelectorType: "static"
        }), o && o.flatpickr({
            altInput: !0,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d"
        }), l) {
        const c = new Date(Date.now() - 1728e5),
            m = new Date(Date.now() + 1728e5);
        l.flatpickr({
            dateFormat: "Y-m-d",
            disable: [{
                from: c.toISOString().split("T")[0],
                to: m.toISOString().split("T")[0]
            }]
        })
    }
}();
