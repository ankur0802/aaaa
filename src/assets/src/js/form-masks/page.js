"use strict";
! function() {
    var e = document.querySelector("#autosize-demo"),
        t = document.querySelector(".credit-card-mask"),
        r = document.querySelector(".phone-number-mask"),
        a = document.querySelector(".date-mask"),
        n = document.querySelector(".time-mask"),
        o = document.querySelector(".numeral-mask"),
        l = document.querySelector(".block-mask"),
        s = document.querySelector(".delimiter-mask"),
        c = document.querySelector(".custom-delimiter-mask"),
        i = document.querySelector(".prefix-mask");
    e && autosize(e), t && new Cleave(t, {
        creditCard: !0,
        onCreditCardTypeChanged: function(e) {
            document.querySelector(".card-type").innerHTML = "" != e && "unknown" != e ? '<img src="' + assetsPath + "img/icons/payments/" + e + '-cc.png" height="28"/>' : ""
        }
    }), r && new Cleave(r, {
        phone: !0,
        phoneRegionCode: "US"
    }), a && new Cleave(a, {
        date: !0,
        delimiter: "-",
        datePattern: ["Y", "m", "d"]
    }), n && new Cleave(n, {
        time: !0,
        timePattern: ["h", "m", "s"]
    }), o && new Cleave(o, {
        numeral: !0,
        numeralThousandsGroupStyle: "thousand"
    }), l && new Cleave(l, {
        blocks: [4, 3, 3],
        uppercase: !0
    }), s && new Cleave(s, {
        delimiter: "Â·",
        blocks: [3, 3, 3],
        uppercase: !0
    }), c && new Cleave(c, {
        delimiters: [".", ".", "-"],
        blocks: [3, 3, 3, 2],
        uppercase: !0
    }), i && new Cleave(i, {
        prefix: "+63",
        blocks: [3, 3, 3, 4],
        uppercase: !0
    })
}();