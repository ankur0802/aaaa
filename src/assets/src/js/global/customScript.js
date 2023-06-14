function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    let success = document.execCommand('copy');
    document.body.removeChild(elem);
    if (success) {
        return true;
    }
}
// -- Sticky action bar page --
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.sticky-action-bar').addClass("sticky");
    } else {
        $('.sticky-action-bar').removeClass("sticky");
    }
});


// -- Copy code on click --
jQuery(document).on("click", ".code-copy", function (event) {
    event.preventDefault();
    let divId = jQuery(this).closest(".card-body").find(".highlight-code .tab-pane.active code").text();
    let divId2 = jQuery(this).closest(".card-body").find(".single-code code").text();
    let result = copyToClipboard(divId);
    let result2 = copyToClipboard(divId2);
});
jQuery(document).on("click", ".code-html", function (event) {
    event.preventDefault();
    let mainDiv = jQuery(this).closest(".card-body").find(".highlight-code");
    mainDiv.toggleClass("show");
});

// ----

function toogleFunction() {
    var e = document.getElementsByTagName("body")[0];
    e.classList.toggle("foldarea")
}
document.getElementById("sidebar-toggle").addEventListener("click", toogleFunction);

// if (jQuery(".nav-item").length > 0) {
//     jQuery(".nav-item").on("click", function () {
//         jQuery(this).addClass("active");
//         jQuery(".nav-item").not(this).find(".collapse").collapse('hide');;
//         jQuery(".nav-item").not(this).removeClass("active");
//     });
// }


if (jQuery(".mobile-toggle").length > 0) {
    jQuery(".mobile-toggle").on("click", function () {
        jQuery('body').addClass('foldarea-mobile');
    });
}
if (jQuery(".cross-toggler").length > 0) {
    jQuery(".cross-toggler").on("click", function () {
        jQuery('body').removeClass('foldarea-mobile');
    });
}
// if (jQuery(".nav-link").length > 0) {
//     jQuery(".nav-link").each(function (index) {
//         let navHref = jQuery(this).attr("href");
//         if (typeof navHref !== "undefined" && navHref != '') {
//             if (navHref.match(/([^\/]*)\/*$/)[1] == window.location.pathname.split('/').pop()) {
//                 let link = window.location.pathname.split('/').pop();
//                 jQuery(this).closest('.collapse').addClass('show');
//                 jQuery(this).addClass('active-link');
//             }
//         }
//     });
// }

var body = $('body');
//  open sidebar-folded when hover
$(".sidebar .sidebar-body").hover(
    function () {
        if (body.hasClass('foldarea')) {
            body.addClass("open-sidebar-folded");
        }
    },
    function () {
        if (body.hasClass('foldarea')) {
            body.removeClass("open-sidebar-folded");
        }
    });


// To Do - Tasks Page
$(document).ready(function () {
    if ($(window).width() <= 767) {
        $(".tasks-mobile-content").css('display', 'none');
        $(".tasks-mobile").click(function () {
            $(".tasks-mobile-content").toggle();
        });
    }

    if ($('.custom-file-input.single-upload input[type="file"]').length > 0) {
        // -- Custom File Input button --
        $('.custom-file-input.single-upload input[type="file"]').change(function (e) {
            $(this).siblings('input[type="text"]').val(e.target.files[0].name);
        });
        // -- Multiple File Input button --
        $('.custom-file-input.multiple-upload input[type="file"]').change(function () {
            $(this).siblings('input[type="text"]').val(this.files.length + " files selected");
        });
    }
    // -- Toasts script --
    if ($(".toast-show").length > 0) {
        $('.toast-show').toast('show');
    }

    if ($("#liveToastBtn").length > 0) {
        $("#liveToastBtn").on("click", function () {
            $('.toast1').toast('show');
        });
    }

});
//Varying Modal Content

if (jQuery("#exampleModal").length > 0) {
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})
}
//Editor
    // ----
    if (jQuery("textarea#basic-example").length > 0) {
    tinymce.init({
        selector: 'textarea#basic-example',
        height: 200,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      });
    }
    
//flatpicker
  const flatDate = document.querySelector("#flatpickr-date"),
  endDate = document.querySelector("#flatpickr-end-date"),
  timeFlat = document.querySelector("#flatpickr-time"),
  dateTime = document.querySelector("#flatpickr-datetime"),
  multiFlat = document.querySelector("#flatpickr-multi"),
  range = document.querySelector("#flatpickr-range"),
  inline = document.querySelector("#flatpickr-inline"),
  frndly = document.querySelector("#flatpickr-human-friendly"),
  disableRange = document.querySelector("#flatpickr-disabled-range");

if (flatDate && flatDate.flatpickr({
      monthSelectorType: "static"
  }),
  endDate && endDate.flatpickr({
      monthSelectorType: "static"
  }), timeFlat && timeFlat.flatpickr({
      enableTime: !0,
      noCalendar: !0
  }), dateTime && dateTime.flatpickr({
      enableTime: !0,
      dateFormat: "Y-m-d H:i"
  }), multiFlat && multiFlat.flatpickr({
      weekNumbers: !0,
      enableTime: !0,
      mode: "multiple",
      minDate: "today"
  }), null !=  range && range.flatpickr({
      mode: "range"
  }), inline && inline.flatpickr({
      inline: !0,
      allowInput: !1,
      monthSelectorType: "static"
  }), frndly && frndly.flatpickr({
      altInput: !0,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d"
  }), disableRange) {
  const c = new Date(Date.now() - 1728e5),
      m = new Date(Date.now() + 1728e5);
      disableRange.flatpickr({
      dateFormat: "Y-m-d",
      disable: [{
          from: c.toISOString().split("T")[0],
          to: m.toISOString().split("T")[0]
      }]
  })
}
