// Basic Example
var o, e = ["Alabama", "Alaska", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
$("#the-basics").typeahead({
    hint: !0,
    highlight: !0,
    minLength: 1
}, {
    name: "states",
    source: (o = e, function (e, a) {
        var t = [];
        substrRegex = new RegExp(e, "i"), $.each(o, function (e, a) {
            substrRegex.test(a) && t.push(a)
        }), a(t)
    })
});

// Multiple Datasets
var s = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: "../../src/js/typeahead/json/nba.json"
    }),
    i = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: "../../src/js/typeahead/json/nhl.json"
    });
$("#multiple-datasets").typeahead({
    highlight: !0
}, {
    name: "nba-teams",
    display: "team",
    source: s,
    templates: {
        header: '<h5 class="league-name m-0">NBA Teams</h5>'
    }
}, {
    name: "nhl-teams",
    display: "team",
    source: i,
    templates: {
        header: '<h5 class="league-name m-0">NHL Teams</h5>'
    }
})
