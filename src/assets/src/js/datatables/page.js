$(document).ready(function () {
    $('#basic-datatable').DataTable({
        responsive: true,
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox'
        }],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        order: [
            [0, 'asc']
        ]
    });
});

// Form Inputs
$(document).ready(function () {
    $('div.dataTables_filter input').addClass('form-control');
    $('div.dataTables_length select').addClass('form-select');
});

// Horizontal & Vertical Scrolls
$("#xy-scroll").DataTable({
    "scrollY": 300,
    "scrollX": true
});

// Form Inputs
var table = $("#datatable_form").DataTable({
    columnDefs: [{
        orderable: false,
        targets: [1, 2, 3]
    }],
    "searching": false
});

$("#datatable_form_submit").click(function () {
    var data = table.$("input, select").serialize();
    alert(
        "The following data would have been submitted to the server: \n\n" +
        data.substr(0, 120) + "..."
    );
    return false;
});
