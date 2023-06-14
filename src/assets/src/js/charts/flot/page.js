  //BASIC CHART
  if(jQuery("#basicchart").length > 0){
   $(function () {
  var d1 = [];
  for (var i = 0; i < Math.PI * 2; i += 0.25) {
    d1.push([i, Math.sin(i)]);
  }

  var d2 = [];
  for (var i = 0; i < Math.PI * 2; i += 0.25) {
    d2.push([i, Math.cos(i)]);
  }

  var d3 = [];
  for (var i = 0; i < Math.PI * 2; i += 0.1) {
    d3.push([i, Math.tan(i)]);
  }

  $.plot("#basicchart", [
    { label: "sin(x)", data: d1 },
    { label: "cos(x)", data: d2 },
    { label: "tan(x)", data: d3 }
  ], {
    series: {
      lines: { show: true },
      points: { show: true }
    },
    xaxis: {
              autoScale: "exact",
      ticks: [
        0, [ Math.PI/2, "\u03c0/2" ], [ Math.PI, "\u03c0" ],
        [ Math.PI * 3/2, "3\u03c0/2" ], [ Math.PI * 2, "2\u03c0" ]
      ]
    },
    yaxis: {
              autoScale: "none",
      ticks: 10,
      min: -2,
      max: 2,
      tickDecimals: 3
    },
    grid: {
      backgroundColor: { colors: [ "#fff", "#eee" ] },
      borderWidth: {
        top: 1,
        right: 1,
        bottom: 2,
        left: 2
      }
    }
  });
});
}
//AXIS CHART
if(jQuery("#axischart").length > 0){
var data, options, plot;
$(function() {
    var index = 10000;
    function generate(start, end, fn) {
        var res = [];
        for (var i = 0; i <= 400; ++i) {
            var x = start + i / 400 * (end - start);
            res.push([x, fn(x)]);
        }
        return res;
    }

    function update() {
        index += 0.01;
        data = [
            { data: generate(index, index + 10, function (x) { return Math.cos(x);}), xaxis: 1, yaxis:1, lines: { show: true}}
        ];
        plot.setData(data);
        plot.setupGrid(true);
        plot.draw();
        window.requestAnimationFrame(update);
    }

    window.requestAnimationFrame(update);

    data = [
        { data: generate(index, 2, function (x) { return Math.cos(x);}), xaxis: 1, yaxis:1, lines: { show: true}}
    ];
    options = {
        xaxes: [
            { position: 'bottom', axisLabel: 'X Axis', showTickLabels: 'none' },
            { position: 'bottom', axisLabel: 'Second X Axis', show: true, showTickLabels: 'none', showMinorTicks: true, gridLines: false, min: 0, max: 2},
            { position: 'top', axisLabel: 'Third X Axis', show: true, showTickLabels: 'none', showTicks: true, gridLines: false }
        ],
        yaxes: [
            { position: 'left', axisLabel: 'Y Axis', showTickLabels: 'none' },
            { position: 'right', axisLabel: 'Second Y Axis', show: true, showTickLabels: 'none', showTicks: true, gridLines: false }
        ]
    };

    plot = $.plot("#axischart", data, options);

});

function toggleAxisLabels() {
    options.axisLabels = options.axisLabels || {show: true};
    options.axisLabels.show = !options.axisLabels.show;
    plot = $.plot("#axischart", data, options);
}
}
//TRACKING CURVE
if(jQuery("#trackingchart").length > 0){
$(function() {

  var sin = [], cos = [];
  for (var i = 0; i < 14; i += 0.1) {
    sin.push([i, Math.sin(i)]);
    cos.push([i, Math.cos(i)]);
  }

  plot = $.plot("#trackingchart", [
    { data: sin, label: "sin(x) = -0.00"},
    { data: cos, label: "cos(x) = -0.00" }
  ], {
          legend: {
              show: true
          },
    series: {
      lines: {
        show: true,
        lineWidth: 2
      }
    },
    crosshair: {
      mode: "xy"
    },
    grid: {
      hoverable: true,
      clickable: true,
      autoHighlight: false
    },
    yaxis: {
      min: -1.2,
      max: 1.2
    }
  });

  var legends = $("#trackingchart .legendLayer text tspan");

  legends.each(function () {
    // fix the widths so they don't jump around
    $(this).css('width', $(this).width());
  });

  var updateLegendTimeout = null;
  var latestPosition = null;

  function updateLegend() {

    updateLegendTimeout = null;
    var pos = latestPosition;
    var axes = plot.getAxes();

    if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
      pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
      return;
    }

    var i, j, dataset = plot.getData();

    for (i = 0; i < dataset.length; ++i) {
      var series = dataset[i];
      // Find the nearest points, x-wise
      for (j = 0; j < series.data.length; ++j) {
        if (series.data[j][0] > pos.x) {
          break;
        }
      }
      // Now Interpolate
      var y,
        p1 = series.data[j - 1],
        p2 = series.data[j];
      if (p1 == null) {
        y = p2[1];
      } else if (p2 == null) {
        y = p1[1];
      } else {
        y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
      }
      legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
    }
  }

  $("#trackingchart").bind("plothover", function (event, pos, item) {
    latestPosition = pos;
    if (!updateLegendTimeout) {
      updateLegendTimeout = setTimeout(updateLegend, 50);
    }
  }).bind("plotclick", function (event, pos, item) {
      plot.lockCrosshair(pos);
  });;

  
});
}
//STACKING
if(jQuery("#stackchart").length > 0){
$(function() {

  var d1 = [];
  for (var i = 0; i <= 10; i += 1) {
    d1.push([i, parseInt(Math.random() * 30)]);
  }

  var d2 = [];
  for (var i = 0; i <= 10; i += 1) {
    d2.push([i, parseInt(Math.random() * 30)]);
  }

  var d3 = [];
  for (var i = 0; i <= 10; i += 1) {
    d3.push([i, parseInt(Math.random() * 30)]);
  }

  var stack = 0,
    bars = true,
    lines = false,
    steps = false;

  function plotWithOptions() {
    $.plot("#stackchart", [ d1, d2, d3 ], {
      series: {
        stack: stack,
        lines: {
          show: lines,
          fill: true,
          steps: steps
        },
        bars: {
          show: bars,
          barWidth: 0.6
        }
      },
              yaxis: {
                  autoScale:"exact"
              }
    });
  }

  plotWithOptions();

  $(".stackControls button").click(function (e) {
    e.preventDefault();
    stack = $(this).text() == "With stacking" ? true : null;
    plotWithOptions();
  });

  $(".graphControls button").click(function (e) {
    e.preventDefault();
    bars = $(this).text().indexOf("Bars") != -1;
    lines = $(this).text().indexOf("Lines") != -1;
    steps = $(this).text().indexOf("steps") != -1;
    plotWithOptions();
  });

 
});
}
//INTERACTIVE
if(jQuery("#interactivechart").length > 0){
$(function() {

  var sin = [],
    cos = [];

  for (var i = 0; i < 14; i += 0.5) {
    sin.push([i, Math.sin(i)]);
    cos.push([i, Math.cos(i)]);
  }

  var plot = $.plot("#interactivechart", [
    { data: sin, label: "sin(x)"},
    { data: cos, label: "cos(x)"}
  ], {
    series: {
      lines: {
        show: true
      },
      points: {
        show: true
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    },
    yaxis: {
      min: -1.2,
      max: 1.2
    },
    zoom: {
      interactive: true
    },
    pan: {
      interactive: true,
      enableTouch: true
    }
  });

  window.setInterval(function () {
    plot.setData([
      { data: sin, label: "sin(x)"},
      { data: cos, label: "cos(x)"}
    ]);
  }, 2000);

  $("<div id='tooltip'></div>").css({
    position: "absolute",
    display: "none",
    border: "1px solid #fdd",
    padding: "2px",
    "background-color": "#fee",
    opacity: 0.80
  }).appendTo("body");

  $("#interactivechart").bind("plothover", function (event, pos, item) {

    if (!pos.x || !pos.y) {
      return;
    }

    if ($("#enablePosition:checked").length > 0) {
      var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
      $("#hoverdata").text(str);
    }

    if ($("#enableTooltip:checked").length > 0) {
      if (item) {
        var x = item.datapoint[0].toFixed(2),
          y = item.datapoint[1].toFixed(2);

        $("#tooltip").html(item.series.label + " of " + x + " = " + y)
          .css({top: item.pageY+5, left: item.pageX+5})
          .fadeIn(200);
      } else {
        $("#tooltip").stop().hide();
      }
    }
  });

  $("#interactivechart").bind("plothovercleanup", function (event, pos, item) {
      $("#tooltip").hide();
  });

  $("#interactivechart").bind("plotclick", function (event, pos, item) {
    if (item) {
      $("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
      plot.highlight(item.series, item.datapoint);
    }
  });
});
}

