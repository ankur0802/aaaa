
var split_path = window.location.pathname.split('/');
window.cust_site_url= window.origin+"/"+split_path[1]+"/"+split_path[2]+"/"+split_path[3];


"use strict";
! function() { 

    var a = document.querySelector("#TagifyBasic"),
        a = (new Tagify(a), document.querySelector("#TagifyReadonly")),
        a = (new Tagify(a), document.querySelector("#TagifyCustomInlineSuggestion")),
        e = document.querySelector("#TagifyCustomListSuggestion"),
        t = ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET"],
        a = (new Tagify(a, {
            whitelist: t,
            maxTags: 10,
            dropdown: {
                maxItems: 20,
                classname: "tags-inline",
                enabled: 0,
                closeOnSelect: !1
            }
        }), new Tagify(e, {
            whitelist: t,
            maxTags: 10,
            dropdown: {
                maxItems: 20,
                classname: "",
                enabled: 0,
                closeOnSelect: !1
            }
        }),
        
        document.querySelector("#TagifyUserList"));
        const maxItems  = screen.width <= '767' ? 2 : 5 ;
        if(jQuery("#TagifyUserList").length > 0){
        let i = new Tagify(a, {
            tagTextProp: "name",
            enforceWhitelist: !0,
            skipInvalid: !0,
            dropdown: {
                closeOnSelect: !1,
                enabled: 0,
                maxItems,
                classname: "users-list",
                searchKeys: ["name", "email"],
                
            },
            templates: {
                tag: function(a) {
                    return `
        <tag title="${a.title||a.email}"
        contenteditable='false'
        spellcheck='false'
        tabIndex="-1"
        class="${this.settings.classNames.tag} ${a.class||""}"
        ${this.getAttributes(a)}
        >
        <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
        <div>
            <div class='tagify__tag__avatar-wrap'>
            <img onerror="this.style.visibility='hidden'" src="${a.avatar}">
            </div>
            <span class='tagify__tag-text'>${a.name}</span>
        </div>
        </tag>`
                },
                dropdownItem: function(a) {
                    return `
        <div ${this.getAttributes(a)}
        class='tagify__dropdown__item align-items-center ${a.class||""}'
        tabindex="0"
        role="option"
        >
        ${a.avatar?`<div class='tagify__dropdown__item__avatar-wrap'>
            <img onerror="this.style.visibility='hidden'" src="${a.avatar}">
            </div>`:""}
        <strong>${a.name}</strong>
        <span>${a.email}</span>
        </div>`
                }
            },
            whitelist: [{
                value: 1,
                name: "Ricky Smith",
                avatar: window.cust_site_url+"/src/media/avatar/avatar-1.jpg",
                email: "ricky@abc.com"
            }, {
                value: 2,
                name: "Lucy Anthony",
                avatar: window.cust_site_url+"/src/media/avatar/150-2.jpg",
                email: "lucy@abc.com"
            }, {
                value: 3,
                name: "John Mexwell",
                avatar: window.cust_site_url+"/src/media/avatar/avatar-3.jpg",
                email: "john@abc.com"
            }, {
                value: 4,
                name: "Elen Cruz",
                avatar: window.cust_site_url+"/src/media/avatar/avatar-2.jpg",
                email: "elen@abc.com"
            }, {
                value: 5,
                name: "Sophia",
                avatar: window.cust_site_url+"/src/media/avatar//150-1.jpg",
                email: "sophia@abc.com"
            }]
        });

    i.on("dropdown:show dropdown:updated", function(a) {
            let e = a.detail.tagify.DOM.dropdown.content;
            1 < i.suggestedListItems.length && (n = i.parseTemplate("dropdownItem", [{
                class: "addAll",
                name: "Add all",
                email: i.settings.whitelist.reduce(function(a, e) {
                    return i.isTagDuplicate(e.value) ? a : a + 1
                }, 0) + " Members"
            }]), e.insertBefore(n, e.firstChild))
        }), i.on("dropdown:select", function(a) {
            a.detail.elm == n && i.dropdown.selectAll.call(i)
        });

        let n;
        e = Array.apply(null, Array(100)).map(function() {
            return Array.apply(null, Array(~~(10 * Math.random() + 3))).map(function() {
                return String.fromCharCode(26 * Math.random() + 97)
            }).join("") + "@gmail.com"
        });
        const l = document.querySelector("#TagifyEmailList"),
            r = new Tagify(l, {
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                whitelist: e,
                callbacks: {
                    invalid: function(a) {
                        console.log("invalid", a.detail)
                    }
                },
                dropdown: {
                    position: "text",
                    enabled: 1
                }
            })
            if(l != null) {
            let s = l.nextElementSibling;
        s.addEventListener("click", function() {
            r.addEmptyTag()
        })
    }
}
}();