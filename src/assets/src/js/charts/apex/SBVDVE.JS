//  initiate::areachart CHART
var options = {
    series: [{
    name: 'PRODUCT A',
    data: dataSet[0]
  }, {
    name: 'PRODUCT B',
    data: dataSet[1]
  }, {
    name: 'PRODUCT C',
    data: dataSet[2]
  }],
    chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  fill: {
    type: 'gradient',
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      },
  },
  yaxis: {
    labels: {
        style: {
            colors: '#8e8da4',
        },
        offsetX: 0,
        formatter: function(val) {
          return (val / 1000000).toFixed(2);
        },
    },
    axisBorder: {
        show: false,
    },
    axisTicks: {
        show: false
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 8,
    min: new Date("01/01/2014").getTime(),
    max: new Date("01/20/2014").getTime(),
    labels: {
        rotate: -15,
        rotateAlways: true,
        formatter: function(val, timestamp) {
          return moment(new Date(timestamp)).format("DD MMM YYYY")
      }
    }
  },
  title: {
    text: 'Irregular Data in Time Series',
    align: 'left',
    offsetX: 14
  },
  tooltip: {
    shared: true
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetX: -10
  }
  };

  var chart = new ApexCharts(document.querySelector("#areachart2"), options);
  chart.render();
   //  /initiate::areachart CHART

//  initiate::MIXED CHART
   
   var options = {
    series: [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#mixedchart"), options);
  chart.render();

//  /initiate::MIXED CHART
  //  initiate::CANDLESTICK CHART
  var options = {
      series: [{
          data: [{
                  x: new Date(1538778600000),
                  y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                  x: new Date(1538780400000),
                  y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                  x: new Date(1538782200000),
                  y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                  x: new Date(1538784000000),
                  y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                  x: new Date(1538785800000),
                  y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                  x: new Date(1538787600000),
                  y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                  x: new Date(1538789400000),
                  y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                  x: new Date(1538791200000),
                  y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                  x: new Date(1538793000000),
                  y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                  x: new Date(1538794800000),
                  y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                  x: new Date(1538796600000),
                  y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
              {
                  x: new Date(1538798400000),
                  y: [6608.91, 6618.99, 6608.01, 6612]
              },
              {
                  x: new Date(1538800200000),
                  y: [6612, 6615.13, 6605.09, 6612]
              },
              {
                  x: new Date(1538802000000),
                  y: [6612, 6624.12, 6608.43, 6622.95]
              },
              {
                  x: new Date(1538803800000),
                  y: [6623.91, 6623.91, 6615, 6615.67]
              },
              {
                  x: new Date(1538805600000),
                  y: [6618.69, 6618.74, 6610, 6610.4]
              },
              {
                  x: new Date(1538807400000),
                  y: [6611, 6622.78, 6610.4, 6614.9]
              },
              {
                  x: new Date(1538809200000),
                  y: [6614.9, 6626.2, 6613.33, 6623.45]
              },
              {
                  x: new Date(1538811000000),
                  y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                  x: new Date(1538812800000),
                  y: [6619.43, 6620.35, 6610.05, 6615.53]
              },
              {
                  x: new Date(1538814600000),
                  y: [6615.53, 6617.93, 6610, 6615.19]
              },
              {
                  x: new Date(1538816400000),
                  y: [6615.19, 6621.6, 6608.2, 6620]
              },
              {
                  x: new Date(1538818200000),
                  y: [6619.54, 6625.17, 6614.15, 6620]
              },
              {
                  x: new Date(1538820000000),
                  y: [6620.33, 6634.15, 6617.24, 6624.61]
              },
              {
                  x: new Date(1538821800000),
                  y: [6625.95, 6626, 6611.66, 6617.58]
              },
              {
                  x: new Date(1538823600000),
                  y: [6619, 6625.97, 6595.27, 6598.86]
              },
              {
                  x: new Date(1538825400000),
                  y: [6598.86, 6598.88, 6570, 6587.16]
              },
              {
                  x: new Date(1538827200000),
                  y: [6588.86, 6600, 6580, 6593.4]
              },
              {
                  x: new Date(1538829000000),
                  y: [6593.99, 6598.89, 6585, 6587.81]
              },
              {
                  x: new Date(1538830800000),
                  y: [6587.81, 6592.73, 6567.14, 6578]
              },
              {
                  x: new Date(1538832600000),
                  y: [6578.35, 6581.72, 6567.39, 6579]
              },
              {
                  x: new Date(1538834400000),
                  y: [6579.38, 6580.92, 6566.77, 6575.96]
              },
              {
                  x: new Date(1538836200000),
                  y: [6575.96, 6589, 6571.77, 6588.92]
              },
              {
                  x: new Date(1538838000000),
                  y: [6588.92, 6594, 6577.55, 6589.22]
              },
              {
                  x: new Date(1538839800000),
                  y: [6589.3, 6598.89, 6589.1, 6596.08]
              },
              {
                  x: new Date(1538841600000),
                  y: [6597.5, 6600, 6588.39, 6596.25]
              },
              {
                  x: new Date(1538843400000),
                  y: [6598.03, 6600, 6588.73, 6595.97]
              },
              {
                  x: new Date(1538845200000),
                  y: [6595.97, 6602.01, 6588.17, 6602]
              },
              {
                  x: new Date(1538847000000),
                  y: [6602, 6607, 6596.51, 6599.95]
              },
              {
                  x: new Date(1538848800000),
                  y: [6600.63, 6601.21, 6590.39, 6591.02]
              },
              {
                  x: new Date(1538850600000),
                  y: [6591.02, 6603.08, 6591, 6591]
              },
              {
                  x: new Date(1538852400000),
                  y: [6591, 6601.32, 6585, 6592]
              },
              {
                  x: new Date(1538854200000),
                  y: [6593.13, 6596.01, 6590, 6593.34]
              },
              {
                  x: new Date(1538856000000),
                  y: [6593.34, 6604.76, 6582.63, 6593.86]
              },
              {
                  x: new Date(1538857800000),
                  y: [6593.86, 6604.28, 6586.57, 6600.01]
              },
              {
                  x: new Date(1538859600000),
                  y: [6601.81, 6603.21, 6592.78, 6596.25]
              },
              {
                  x: new Date(1538861400000),
                  y: [6596.25, 6604.2, 6590, 6602.99]
              },
              {
                  x: new Date(1538863200000),
                  y: [6602.99, 6606, 6584.99, 6587.81]
              },
              {
                  x: new Date(1538865000000),
                  y: [6587.81, 6595, 6583.27, 6591.96]
              },
              {
                  x: new Date(1538866800000),
                  y: [6591.97, 6596.07, 6585, 6588.39]
              },
              {
                  x: new Date(1538868600000),
                  y: [6587.6, 6598.21, 6587.6, 6594.27]
              },
              {
                  x: new Date(1538870400000),
                  y: [6596.44, 6601, 6590, 6596.55]
              },
              {
                  x: new Date(1538872200000),
                  y: [6598.91, 6605, 6596.61, 6600.02]
              },
              {
                  x: new Date(1538874000000),
                  y: [6600.55, 6605, 6589.14, 6593.01]
              },
              {
                  x: new Date(1538875800000),
                  y: [6593.15, 6605, 6592, 6603.06]
              },
              {
                  x: new Date(1538877600000),
                  y: [6603.07, 6604.5, 6599.09, 6603.89]
              },
              {
                  x: new Date(1538879400000),
                  y: [6604.44, 6604.44, 6600, 6603.5]
              },
              {
                  x: new Date(1538881200000),
                  y: [6603.5, 6603.99, 6597.5, 6603.86]
              },
              {
                  x: new Date(1538883000000),
                  y: [6603.85, 6605, 6600, 6604.07]
              },
              {
                  x: new Date(1538884800000),
                  y: [6604.98, 6606, 6604.07, 6606]
              },
          ]
      }],
      chart: {
          type: 'candlestick',
          height: 350
      },
      title: {
          text: 'CandleStick Chart',
          align: 'left'
      },
      xaxis: {
          type: 'datetime'
      },
      yaxis: {
          tooltip: {
              enabled: true
          }
      }
  };

  var chart = new ApexCharts(document.querySelector("#apexchart5"), options);
  chart.render();

  function generateData(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
          //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

          series.push([baseval, y, z]);
          baseval += 86400000;
          i++;
      }
      return series;
  }
  //  /initiate::CANDLESTICK CHART
//  initiate::Bubble Chart
var options = {
series: [{
  name: 'Product1',
  data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    min: 10,
    max: 60
  })
},
{
  name: 'Product2',
  data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    min: 10,
    max: 60
  })
},
{
  name: 'Product3',
  data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    min: 10,
    max: 60
  })
},
{
  name: 'Product4',
  data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
    min: 10,
    max: 60
  })
}],
chart: {
  height: 350,
  type: 'bubble',
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
},
title: {
  text: '3D Bubble Chart'
},
xaxis: {
  tickAmount: 12,
  type: 'datetime',
  labels: {
    rotate: 0,
  }
},
yaxis: {
  max: 70
},
theme: {
  palette: 'palette2'
}
};
  var chart = new ApexCharts(document.querySelector("#apexchart6"), options);
  chart.render();
     //  /initiate::Bubble Chart

//  initiate::Radial Bar Chart
var options = {
series: [44, 55, 67, 83],
chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };
     var chart = new ApexCharts(document.querySelector("#apexchart7"), options);
     chart.render();
          //  /initiate::Radial Bar Chart

 //  initiate::RADAR MULTIPLE SERIES
var options = {
series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}],
chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Radar Chart - Multi Series'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

var chart = new ApexCharts(document.querySelector("#apexchart4"), options);
chart.render();
//  /initiate::RADAR MULTIPLE SERIES
 // initiate::Timeline Chart

 var options = {
    series: [
      // George Washington
      {
        name: 'George Washington',
        data: [
        {
          x: 'President',
          y: [
          new Date(1789, 3, 30).getTime(),
          new Date(1797, 2, 4).getTime()
          ]
        },
        ]
      },
      // John Adams
      {
        name: 'John Adams',
        data: [
        {
          x: 'President',
          y: [
          new Date(1797, 2, 4).getTime(),
          new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'Vice President',
          y: [
          new Date(1789, 3, 21).getTime(),
          new Date(1797, 2, 4).getTime()
          ]
        }
        ]
      },
      // Thomas Jefferson
      {
        name: 'Thomas Jefferson',
        data: [
        {
          x: 'President',
          y: [
          new Date(1801, 2, 4).getTime(),
          new Date(1809, 2, 4).getTime()
          ]
        },
        {
          x: 'Vice President',
          y: [
          new Date(1797, 2, 4).getTime(),
          new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'Secretary of State',
          y: [
          new Date(1790, 2, 22).getTime(),
          new Date(1793, 11, 31).getTime()
          ]
        }
        ]
      },
      // Aaron Burr
      {
        name: 'Aaron Burr',
        data: [
        {
          x: 'Vice President',
          y: [
          new Date(1801, 2, 4).getTime(),
          new Date(1805, 2, 4).getTime()
          ]
        }
        ]
      },
      // George Clinton
      {
        name: 'George Clinton',
        data: [
        {
          x: 'Vice President',
          y: [
          new Date(1805, 2, 4).getTime(),
          new Date(1812, 3, 20).getTime()
          ]
        }
        ]
      },
      // John Jay
      {
        name: 'John Jay',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1789, 8, 25).getTime(),
          new Date(1790, 2, 22).getTime()
          ]
        }
        ]
      },
      // Edmund Randolph
      {
        name: 'Edmund Randolph',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1794, 0, 2).getTime(),
          new Date(1795, 7, 20).getTime()
          ]
        }
        ]
      },
      // Timothy Pickering
      {
        name: 'Timothy Pickering',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1795, 7, 20).getTime(),
          new Date(1800, 4, 12).getTime()
          ]
        }
        ]
      },
      // Charles Lee
      {
        name: 'Charles Lee',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1800, 4, 13).getTime(),
          new Date(1800, 5, 5).getTime()
          ]
        }
        ]
      },
      // John Marshall
      {
        name: 'John Marshall',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1800, 5, 13).getTime(),
          new Date(1801, 2, 4).getTime()
          ]
        }
        ]
      },
      // Levi Lincoln
      {
        name: 'Levi Lincoln',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1801, 2, 5).getTime(),
          new Date(1801, 4, 1).getTime()
          ]
        }
        ]
      },
      // James Madison
      {
        name: 'James Madison',
        data: [
        {
          x: 'Secretary of State',
          y: [
          new Date(1801, 4, 2).getTime(),
          new Date(1809, 2, 3).getTime()
          ]
        }
        ]
      },
      ],
      chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%',
          rangeBarGroupRows: true
        }
      },
      colors: [
      "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
      "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
      "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
      ],
      fill: {
        type: 'solid'
      },
      xaxis: {
        type: 'datetime'
      },
      legend: {
        position: 'right'
      },
      tooltip: {
        custom: function(opts) {
          const fromYear = new Date(opts.y1).getFullYear()
          const toYear = new Date(opts.y2).getFullYear()
          const values = opts.ctx.rangeBar.getTooltipValues(opts)
          
          return (
            '<div class="apexcharts-tooltip-rangebar">' +
            '<div> <span class="series-name" style="color: ' +
            values.color +
            '">' +
            (values.seriesName ? values.seriesName : '') +
            '</span></div>' +
            '<div> <span class="category">' +
            values.ylabel +
            ' </span> <span class="value start-value">' +
            fromYear +
            '</span> <span class="separator">-</span> <span class="value end-value">' +
            toYear +
            '</span></div>' +
            '</div>'
            )
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#apexchart8"), options);
    chart.render();
// initiate::Timeline Chart


// initiate Mixed Chart