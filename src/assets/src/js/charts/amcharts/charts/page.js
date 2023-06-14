am4core.useTheme(am4themes_animated);
var chart = am4core.create("simplecolumn", am4charts.XYChart);
// Add data
chart.data = [{
    "country": "USA",
    "visits": 3025
}, {
    "country": "China",
    "visits": 1882
}, {
    "country": "Japan",
    "visits": 1809
}, {
    "country": "Germany",
    "visits": 1322
}, {
    "country": "UK",
    "visits": 1122
}, {
    "country": "France",
    "visits": 1114
}, {
    "country": "India",
    "visits": 984
}, {
    "country": "Spain",
    "visits": 711
}, {
    "country": "Netherlands",
    "visits": 665
}, {
    "country": "Russia",
    "visits": 580
}, {
    "country": "South Korea",
    "visits": 443
}, {
    "country": "Canada",
    "visits": 441
}];

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

// Configure axis label
var label = categoryAxis.renderer.labels.template;
label.truncate = true;
label.maxWidth = 100;
label.tooltipText = "{country}";

categoryAxis.events.on("sizechanged", function(ev) {
  var axis = ev.target;
  var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
  if (cellWidth < axis.renderer.labels.template.maxWidth) {
    axis.renderer.labels.template.rotation = -45;
    axis.renderer.labels.template.horizontalCenter = "right";
    axis.renderer.labels.template.verticalCenter = "middle";
  }
  else {
    axis.renderer.labels.template.rotation = 0;
    axis.renderer.labels.template.horizontalCenter = "middle";
    axis.renderer.labels.template.verticalCenter = "top";
  }
});

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";

// Responsive
chart.responsive.enabled = true;
chart.responsive.rules.push({
  relevant: function(target) {
    if (target.pixelWidth <= 600) {     

      return true;
    }
    return false;
  },

});


//Column and Line
// Set theme
am4core.useTheme(am4themes_animated);


// create chart
var chart = am4core.createFromConfig({
        // Data
        "data": [{
                "year": "2014",
                "income": 23.5,
                "expenses": 21.1
            },
            {
                "year": "2015",
                "income": 26.2,
                "expenses": 30.5
            },
            {
                "year": "2016",
                "income": 30.1,
                "expenses": 34.9
            },
            {
                "year": "2017",
                "income": 20.5,
                "expenses": 23.1
            },
            {
                "year": "2018",
                "income": 30.6,
                "expenses": 28.2,
                "lineStroke": "3,3",
                "lineOpacity": 0.5
            },
            {
                "year": "2019",
                "income": 34.1,
                "expenses": 31.9,
                "stroke": "3,3",
                "opacity": 0.5
            }
        ],

        // Category axis
        "xAxes": [{
            "type": "CategoryAxis",
            "renderer": {
                "grid": {
                    "location": 0,
                    "disabled": true
                }
            },
            "dataFields": {
                "category": "year"
            }
        }],

        // Value axis
        "yAxes": [{
            "type": "ValueAxis",
            "min": 0,
            "tooltip": {
                "disabled": true
            }
        }],

        // Series
        "series": [{
                "id": "s1",
                "type": "ColumnSeries",
                "dataFields": {
                    "categoryX": "year",
                    "valueY": "expenses"
                },
                "tooltipText": "expenses: {valueY.value}",
                "sequencedInterpolation": true,
                "columns": {
                    "cornerRadiusTopLeft": 10,
                    "cornerRadiusTopRight": 10,
                    "strokeWidth": 1,
                    "strokeOpacity": 1,
                    "propertyFields": {
                        "strokeDasharray": "stroke",
                        "fillOpacity": "opacity"
                    }
                }
            },
            {
                "id": "s2",
                "type": "LineSeries",
                "dataFields": {
                    "categoryX": "year",
                    "valueY": "income"
                },
                "tooltipText": "income: {valueY.value}",
                "sequencedInterpolation": true,
                "stroke": "#dcaf67",
                "strokeWidth": 2,

                "propertyFields": {
                    "strokeDasharray": "lineStroke",
                    "strokeOpacity": "lineOpacity"
                },
                "bullets": [{
                    "type": "CircleBullet",
                    "fill": "#dcaf67",
                    "radius": 4
                }]
            }
        ],
        "cursor": {
            "behavior": "none",
            "lineX": {
                "opacity": 0
            },
            "lineY": {
                "opacity": 0
            }
        }
    },
    "column-line", "XYChart"
);

//LINE CHART WITH SCROLL AND ZOOM 

// Set theme
am4core.useTheme(am4themes_animated);


// Generate random data
var data = [];
var visits = 10;

for (var i = 1; i < 366; i++) {
    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits
    });
}

// Create chart
var chart = am4core.createFromConfig({
    // Set settings and data
    "paddingRight": 20,
    "data": data,

    // Create X axes
    "xAxes": [{
        "type": "DateAxis",
        "renderer": {
            "grid": {
                "location": 0
            }
        }
    }],

    // Create Y axes
    "yAxes": [{
        "type": "ValueAxis",
        "tooltip": {
            "disabled": true
        },
        "renderer": {
            "minWidth": 35
        }
    }],

    // Create series
    "series": [{
        "id": "s1",
        "type": "LineSeries",
        "dataFields": {
            "dateX": "date",
            "valueY": "value"
        },
        "tooltipText": "{valueY.value}"
    }],

    // Add cursor
    "cursor": {
        "type": "XYCursor"
    },

    // Add horizontal scrollbar
    "scrollbarX": {
        "type": "XYChartScrollbar",
        "series": ["s1"]
    }
}, "linescrollzoom", "XYChart");

//PIE CHART
/**
 * This is a demo for PieChart.
 *
 * Demo uses JSON-based config.
 *
 * Refer to the following link(s) for reference:
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/pie-chart/}
 * @see {@link https://www.amcharts.com/docs/v4/concepts/json-config/}
 */

// Set theme
am4core.useTheme(am4themes_animated);


// Create chart
// Create chart instance
var chart = am4core.create("piechart", am4charts.PieChart);

// Add data
chart.data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czechia",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}
];


// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";

// Add legend
let width = screen.width;
if(width > 767) chart.legend = new am4charts.Legend();

// Responsive
chart.responsive.enabled = true;
chart.responsive.rules.push({
  relevant: function(target) {
    if (target.pixelWidth <= 600) {     

      return true;
    }
    return false;
  },
  state: function(target, stateId) {
    if (target instanceof am4charts.PieSeries) {
      var state = target.states.create(stateId);

      var labelState = target.labels.template.states.create(stateId);
      labelState.properties.disabled = true;

      var tickState = target.ticks.template.states.create(stateId);
      tickState.properties.disabled = true;
      return state;
    }

    return null;
  }
});

//radarchart
/**
 * This is a demo for RadarChart.
 *
 * Demo uses JSON-based config.
 *
 * Refer to the following link(s) for reference:
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/radar-chart/}
 * @see {@link https://www.amcharts.com/docs/v4/concepts/json-config/}
 */

// Set theme
am4core.useTheme(am4themes_animated);


// Create chart
var chart = am4core.createFromConfig({
    // Set data
    "data": [{
        "direction": "N",
        "value": 8
    }, {
        "direction": "NE",
        "value": 9
    }, {
        "direction": "E",
        "value": 4.5
    }, {
        "direction": "SE",
        "value": 3.5
    }, {
        "direction": "S",
        "value": 9.2
    }, {
        "direction": "SW",
        "value": 8.4
    }, {
        "direction": "W",
        "value": 11.1
    }, {
        "direction": "NW",
        "value": 10
    }],

    // Padding
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10,

    // Add circular (X) axis
    "xAxes": [{
        "type": "CategoryAxis",
        "renderer": {
            "minGridDistance": 60,
            "grid": {
                "location": 0
            }
        },
        "dataFields": {
            "category": "direction"
        }
    }],

    // Add radial (Y) axis
    "yAxes": [{
        "type": "ValueAxis"
    }],

    // Add series
    "series": [{
        "type": "RadarSeries",
        "tooltipText": "{valueY.value}",
        "fillOpacity": 0.4,
        "dataFields": {
            "categoryX": "direction",
            "valueY": "value"
        }
    }],

    // Add cursor
    "cursor": {
        "type": "RadarCursor"
    }
}, "radarchart", "RadarChart");

//STACKED CHART 3D
am4core.useTheme(am4themes_animated);


var chart = am4core.create("stackedchart", am4charts.XYChart3D);


chart.data = [{
    "category": "One",
    "value1": 1,
    "value2": 5,
    "value3": 3,
    "value4": 3
}, {
    "category": "Two",
    "value1": 2,
    "value2": 5,
    "value3": 3,
    "value4": 4
}, {
    "category": "Three",
    "value1": 3,
    "value2": 5,
    "value3": 4,
    "value4": 4
}, {
    "category": "Four",
    "value1": 4,
    "value2": 5,
    "value3": 6,
    "value4": 4
}, {
    "category": "Five",
    "value1": 3,
    "value2": 5,
    "value3": 4,
    "value4": 4
}, {
    "category": "Six",
    "value1": 8,
    "value2": 7,
    "value3": 10,
    "value4": 4
}, {
    "category": "Seven",
    "value1": 10,
    "value2": 8,
    "value3": 6,
    "value4": 4
}]

chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

chart.colors.step = 2;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.interactionsEnabled = false;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.05;
valueAxis.renderer.minGridDistance = 20;
valueAxis.interactionsEnabled = false;
valueAxis.min = 0;
valueAxis.renderer.minWidth = 35;

var series1 = chart.series.push(new am4charts.ColumnSeries3D());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.name = "Series 1";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.stacked = true;

var series2 = chart.series.push(new am4charts.ColumnSeries3D());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Series 2";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.stacked = true;

var series3 = chart.series.push(new am4charts.ColumnSeries3D());
series3.columns.template.width = am4core.percent(80);
series3.columns.template.tooltipText = "{name}: {valueY.value}";
series3.name = "Series 3";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "value3";
series3.stacked = true;

var series4 = chart.series.push(new am4charts.ColumnSeries3D());
series4.columns.template.width = am4core.percent(80);
series4.columns.template.tooltipText = "{name}: {valueY.value}";
series4.name = "Series 4";
series4.dataFields.categoryX = "category";
series4.dataFields.valueY = "value4";
series4.stacked = true;

chart.scrollbarX = new am4core.Scrollbar();

//POLARCHART
am4core.useTheme(am4themes_animated);


var chart = am4core.create("polarchart", am4charts.RadarChart);

chart.data = [{
        category: "One",
        value1: 8,
        value2: 2,
        value3: 4,
        value4: 3
    },
    {
        category: "Two",
        value1: 11,
        value2: 4,
        value3: 2,
        value4: 4
    },
    {
        category: "Three",
        value1: 7,
        value2: 6,
        value3: 6,
        value4: 2
    },
    {
        category: "Four",
        value1: 13,
        value2: 8,
        value3: 3,
        value4: 2
    },
    {
        category: "Five",
        value1: 12,
        value2: 10,
        value3: 5,
        value4: 1
    },
    {
        category: "Six",
        value1: 15,
        value2: 12,
        value3: 4,
        value4: 4
    },
    {
        category: "Seven",
        value1: 9,
        value2: 14,
        value3: 6,
        value4: 2
    },
    {
        category: "Eight",
        value1: 6,
        value2: 16,
        value3: 5,
        value4: 1
    }
];


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.tooltipLocation = 0.5;
categoryAxis.renderer.grid.template.strokeOpacity = 0.1;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.05;
valueAxis.min = 0;

var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.name = "Series 1";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value2";
series1.stacked = true;
series1.cursorHoverEnabled = false;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Series 2";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.stacked = true;
series2.cursorHoverEnabled = false;

var series3 = chart.series.push(new am4charts.RadarColumnSeries());
series3.columns.template.width = am4core.percent(80);
series3.columns.template.tooltipText = "{name}: {valueY.value}";
series3.name = "Series 3";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "value3";
series3.stacked = true;
series3.cursorHoverEnabled = false;

var series4 = chart.series.push(new am4charts.RadarColumnSeries());
series4.columns.template.width = am4core.percent(80);
series4.columns.template.tooltipText = "{name}: {valueY.value}";
series4.name = "Series 4";
series4.dataFields.categoryX = "category";
series4.dataFields.valueY = "value4";
series4.stacked = true;
series4.cursorHoverEnabled = false;


// add cursor
chart.cursor = new am4charts.RadarCursor();
chart.cursor.xAxis = categoryAxis;
chart.cursor.fullWidthLineX = true;
chart.cursor.lineX.strokeOpacity = 0;
chart.cursor.lineX.fillOpacity = 0.1;
chart.cursor.lineX.fill = am4core.color("#000000");

// add legend
chart.legend = new am4charts.Legend();


//ANIMATED TIME LINE PIE CHART