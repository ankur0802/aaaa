if (jQuery("#apexchart1").length > 0) {
  // initiate::LINE CHART
  var options = {
      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
          height: 350,
          type: 'line',
          fontFamily: 'Poppins", sans-serif',
          zoom: {
              enabled: false
          }
     
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'straight'
      },
      title: {
          text: 'Product Trends by Month',
          align: 'left',
          style: {
              fontWeight: '500'
          }
      },
      grid: {
          row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
          },
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },

      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  fontFamily: 'Poppins", sans-serif',
                  height: 300
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#apexchart1"), options);
  chart.render();
  // END
}

if (jQuery("#apexchart2").length > 0) {
  //  AREA CHART
  var options = {
      series: [{
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
      }],
      chart: {
          type: 'area',
          height: 350,
          fontFamily: 'Poppins", sans-serif',
          zoom: {
              enabled: false
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'straight'
      },

      title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left',
          style: {
              fontWeight: '500'
          }
      },
      subtitle: {
          text: 'Price Movements',
          align: 'left'
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
          type: 'datetime',
      },
      yaxis: {
          opposite: true
      },
      legend: {
          horizontalAlign: 'left'
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  fontFamily: 'Poppins", sans-serif',
                  height: 300
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#apexchart2"), options);
  chart.render();
  //  END
}

if (jQuery("#apexchart3").length > 0) {
  //  BASIC COLUMN CHART
  var options = {
      series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
          type: 'bar',
          height: 350,
          fontFamily: 'Poppins", sans-serif',
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
      },
      xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
          title: {
              text: '$ (thousands)',
              style: {
                  fontWeight: '500'
              }
          }
      },
      fill: {
          opacity: 1
      },
      tooltip: {
          y: {
              formatter: function(val) {
                  return "$ " + val + " thousands"
              }
          }
      }
  };

  var chart = new ApexCharts(document.querySelector("#apexchart3"), options);
  chart.render();
  //  END
}

if (jQuery("#apexchart5").length > 0) {

  // MIXED CHART
  var options = {
      series: [{
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      chart: {
          height: 350,
          type: 'line',
          fontFamily: 'Poppins", sans-serif',
          toolbar: {
              show: false,
          }
      },
      stroke: {
          width: [0, 4]
      },
      title: {
          text: 'Traffic Sources',
          style: {
              fontWeight: '500'
          }
      },
      dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
          type: 'datetime'
      },
      yaxis: [{
          title: {
              text: 'Website Blog',
              style: {
                  fontWeight: '500'
              }
          },

      }, {
          opposite: true,
          title: {
              text: 'Social Media',
              style: {
                  fontWeight: '500'
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#apexchart5"), options);
  chart.render();
  //  END
}


if (jQuery("#apexchart6").length > 0) {

  //  TIMELINE CHART

  var options = {
      series: [
          // George Washington
          {
              name: 'George Washington',
              data: [{
                  x: 'President',
                  y: [
                      new Date(1789, 3, 30).getTime(),
                      new Date(1797, 2, 4).getTime()
                  ]
              }, ]
          },
          // John Adams
          {
              name: 'John Adams',
              data: [{
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
              data: [{
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
              data: [{
                  x: 'Vice President',
                  y: [
                      new Date(1801, 2, 4).getTime(),
                      new Date(1805, 2, 4).getTime()
                  ]
              }]
          },
          // George Clinton
          {
              name: 'George Clinton',
              data: [{
                  x: 'Vice President',
                  y: [
                      new Date(1805, 2, 4).getTime(),
                      new Date(1812, 3, 20).getTime()
                  ]
              }]
          },
          // John Jay
          {
              name: 'John Jay',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1789, 8, 25).getTime(),
                      new Date(1790, 2, 22).getTime()
                  ]
              }]
          },
          // Edmund Randolph
          {
              name: 'Edmund Randolph',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1794, 0, 2).getTime(),
                      new Date(1795, 7, 20).getTime()
                  ]
              }]
          },
          // Timothy Pickering
          {
              name: 'Timothy Pickering',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1795, 7, 20).getTime(),
                      new Date(1800, 4, 12).getTime()
                  ]
              }]
          },
          // Charles Lee
          {
              name: 'Charles Lee',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1800, 4, 13).getTime(),
                      new Date(1800, 5, 5).getTime()
                  ]
              }]
          },
          // John Marshall
          {
              name: 'John Marshall',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1800, 5, 13).getTime(),
                      new Date(1801, 2, 4).getTime()
                  ]
              }]
          },
          // Levi Lincoln
          {
              name: 'Levi Lincoln',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1801, 2, 5).getTime(),
                      new Date(1801, 4, 1).getTime()
                  ]
              }]
          },
          // James Madison
          {
              name: 'James Madison',
              data: [{
                  x: 'Secretary of State',
                  y: [
                      new Date(1801, 4, 2).getTime(),
                      new Date(1809, 2, 3).getTime()
                  ]
              }]
          },
      ],
      chart: {
          height: 350,
          fontFamily: 'Poppins", sans-serif',
          type: 'rangeBar',
          toolbar: {
              show: false,
          }
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
          position: 'bottom',
          horizontalAlign: 'left'
      },
      yaxis: {
          show: true,
          labels: {
              show: true,
              align: 'left',
              Width: '50px',
              style: {
                  fontSize: '12px',
                  fontWeight: 400,
              }

          }
      },
      tooltip: {
          custom: function(opts) {
              const fromYear = new Date(opts.y1).getFullYear()
              const toYear = new Date(opts.y2).getFullYear()
              const values = opts.ctx.rangeBar.getTooltipValues(opts)

              return (
                  ''
              )
          }
      }
  };

  var chart = new ApexCharts(document.querySelector("#apexchart6"), options);
  chart.render();

  //  TIMELINE CHART
}


if (jQuery("#apexchart7").length > 0) {

  //  initiate::CANDLESTICK CHART
  // CANDLESTICK CHART
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
          fontFamily: 'Poppins", sans-serif',
          height: 350,
          toolbar: {
              show: false,
          }
      },
      title: {
          text: 'CandleStick Chart',
          align: 'left',
          style: {
              fontWeight: '500'
          }
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

  var chart = new ApexCharts(document.querySelector("#apexchart7"), options);
  chart.render();


  //END
}


if (jQuery("#apexchart8").length > 0) {

  //  Bubble Chart

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
          }
      ],
      chart: {
          height: 350,
          fontFamily: 'Poppins", sans-serif',
          type: 'bubble',
          toolbar: {
              show: false,
          }
      },
      dataLabels: {
          enabled: false
      },
      fill: {
          type: 'gradient',
      },
      title: {
          text: '3D Bubble Chart',
          style: {
              fontWeight: '500'
          }
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

  var chart = new ApexCharts(document.querySelector("#apexchart8"), options);
  chart.render();

  //  END
}

if (jQuery("#apexchart13").length > 0) {


  // RADIAL BAR CHART
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
                      formatter: function(w) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return 249
                      }
                  }
              }
          }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };

  var chart = new ApexCharts(document.querySelector("#apexchart13"), options);
  chart.render();

  //END
}

if (jQuery("#apexchart14").length > 0) {


  // RADAR MULTIPLE SERIES
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
          fontFamily: 'Poppins", sans-serif',
          type: 'radar',
          dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
          }
      },
      title: {
          text: 'Radar Chart - Multi Series',
          style: {
              fontWeight: '500'
          }
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
      },
      responsive: [{
          breakpoint: 576,
          options: {
              chart: {
                  fontFamily: 'Poppins", sans-serif',
                  height: 300
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#apexchart14"), options);
  chart.render();

}
if (jQuery("#apexchart15").length > 0) {
  // PIE CHART
  var options = {
      series: [44, 55, 13, 43, 22],
      chart: {
          height: 350,
          fontFamily: 'Poppins", sans-serif',
          type: 'pie',
      },

      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      legend: {
          position: 'bottom'
      },
      responsive: [{
          breakpoint: 576,
          options: {
              chart: {
                  fontFamily: 'Poppins", sans-serif',
                  height: 300
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#apexchart15"), options);
  chart.render();

}

// THIS SCRIPT IS FOR  BUBBLE ,Radial Bar Chart ,Radar Chart
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


//END

// Order Statistics Chart
'use strict';

// JS global variables
let config = {
  colors: {
      primary: '#696cff',
      secondary: '#8592a3',
      success: '#71dd37',
      info: '#03c3ec',
      warning: '#ffab00',
      danger: '#ff3e1d',
      dark: '#233446',
      black: '#000',
      white: '#fff',
      body: '#f4f5fb',
      headingColor: '#566a7f',
      axisColor: '#a1acb8',
      borderColor: '#eceef1'

  }
};

if (jQuery("#orderStatisticsChart").length > 0) {
  // --------------------------------------------------------------------
  const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
      orderChartConfig = {
          chart: {
              height: 155,
              fontFamily: 'Poppins", sans-serif',
              type: 'donut'
          },
          labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
          series: [85, 15, 50, 50],
          colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],

          dataLabels: {
              enabled: false,
              formatter: function(val, opt) {
                  return parseInt(val) + '%';
              }
          },
          legend: {
              show: false
          },
          grid: {
              padding: {
                  top: 0,
                  bottom: 0,
                  right: 15
              }
          },
          plotOptions: {
              pie: {
                  donut: {
                      size: '75%',
                      labels: {
                          show: true,
                          value: {
                              fontSize: '1.5rem',
                              fontFamily: 'Poppins , sans-serif',
                              color: config.colors.headingColor,
                              offsetY: -15,
                              formatter: function(val) {
                                  return parseInt(val) + '%';
                              }
                          },
                          name: {
                              offsetY: 20,
                              fontFamily: 'Poppins , sans-serif'
                          },
                          total: {
                              show: true,
                              fontSize: '0.8125rem',
                              color: config.colors.axisColor,
                              label: 'Weekly',
                              formatter: function(w) {
                                  return '38%';
                              }
                          }
                      }
                  }
              }
          }
      };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
      const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
      statisticsChart.render();
  }
}

if (jQuery("#totalRevenueChart").length > 0) {
  // Total Revenue Report Chart - Bar Chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
      totalRevenueChartOptions = {
          series: [{
                  name: '2021',
                  data: [18, 7, 15, 29, 18, 12, 9]
              },
              {
                  name: '2020',
                  data: [-13, -18, -9, -14, -5, -17, -15]
              }
          ],
          chart: {
              height: 285,
              fontFamily: 'Poppins", sans-serif',
              stacked: true,
              type: 'bar',
              toolbar: {
                  show: false
              }
          },
          plotOptions: {
              bar: {
                  horizontal: false,
                  columnWidth: '33%',
                  borderRadius: 12,
                  startingShape: 'rounded',
                  endingShape: 'rounded'
              }
          },
          colors: [config.colors.primary, config.colors.info],
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth',
              width: 6,
              lineCap: 'round',
              colors: '#000'
          },
          legend: {
              show: true,
              horizontalAlign: 'left',
              position: 'top',
              markers: {
                  height: 8,
                  width: 8,
                  radius: 12,
                  offsetX: -3
              },
              labels: {
                  colors: config.colors.axisColor
              },
              itemMargin: {
                  horizontal: 10
              }
          },
          grid: {
              borderColor: config.colors.borderColor,
              padding: {
                  top: 0,
                  bottom: -8,
                  left: 20,
                  right: 20
              }
          },
          xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              labels: {
                  style: {
                      fontSize: '13px',
                      colors: config.colors.axisColor
                  }
              },
              axisTicks: {
                  show: false
              },
              axisBorder: {
                  show: false
              }
          },
          yaxis: {
              labels: {
                  style: {
                      fontSize: '13px',
                      colors: config.colors.axisColor
                  }
              }
          },
          responsive: [{
                  breakpoint: 1700,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '32%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 1580,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '35%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 1440,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '42%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 1300,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '48%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 1200,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '40%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 1040,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 11,
                              columnWidth: '48%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 991,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '30%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 840,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '35%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 768,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '28%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 640,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '32%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 576,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '37%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 480,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '45%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 420,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '52%'
                          }
                      }
                  }
              },
              {
                  breakpoint: 380,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 10,
                              columnWidth: '60%'
                          }
                      }
                  }
              }
          ],
          states: {
              hover: {
                  filter: {
                      type: 'none'
                  }
              },
              active: {
                  filter: {
                      type: 'none'
                  }
              }
          }
      };
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
      const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
      totalRevenueChart.render();
  }
}

// Profit Report Line Chart
if (jQuery("#profileReportChart").length > 0) {
  // Total Revenue Report Chart - Bar Chart
  const profileReportChartEl = document.querySelector('#profileReportChart'),
      profileReportChartConfig = {
          chart: {
              height: 70,
              fontFamily: 'Poppins", sans-serif',
              type: 'line',
              toolbar: {
                  show: false
              },
              dropShadow: {
                  enabled: true,
                  top: 10,
                  left: 5,
                  blur: 3,
                  color: config.colors.warning,
                  opacity: 0.15
              },
              sparkline: {
                  enabled: true
              }
          },
          grid: {
              show: false,
              padding: {
                  right: 8
              }
          },
          colors: [config.colors.warning],
          dataLabels: {
              enabled: false
          },
          stroke: {
              width: 5,
              curve: 'smooth'
          },
          series: [{
              data: [110, 270, 145, 245, 205, 285]
          }],
          xaxis: {
              show: false,
              lines: {
                  show: false
              },
              labels: {
                  show: false
              },
              axisBorder: {
                  show: false
              }
          },
          yaxis: {
              show: false
          }
      };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
      const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
      profileReportChart.render();
  }
}

//Expenses
// Expenses Mini Chart - Radial Chart
// --------------------------------------------------------------------
if (jQuery("#expensesOfWeek").length > 0) {
  const weeklyExpensesEl = document.querySelector('#expensesOfWeek'),
      weeklyExpensesConfig = {
          series: [65],
          chart: {
              width: 150,
              height: 150,
              fontFamily: 'Poppins", sans-serif',
              type: 'radialBar'
          },
          plotOptions: {
              radialBar: {
                  startAngle: 0,
                  endAngle: 360,
                  strokeWidth: '8',
                  hollow: {
                      margin: 2,
                      size: '60%'
                  },
                  track: {
                      strokeWidth: '50%',
                      background: '#eceef1'
                  },
                  dataLabels: {
                      show: true,
                      name: {
                          show: false
                      },
                      value: {
                          formatter: function(val) {
                              return '$' + parseInt(val);
                          },
                          offsetY: 5,
                          color: '#697a8d',
                          fontSize: '15px',
                          show: true
                      }
                  }
              }
          },
          fill: {
              type: 'solid',
              colors: config.colors.primary
          },
          stroke: {
              lineCap: 'round'
          },
          grid: {
              padding: {
                  top: -10,
                  bottom: -15,
                  left: -10,
                  right: -10
              }
          },
          states: {
              hover: {
                  filter: {
                      type: 'none'
                  }
              },
              active: {
                  filter: {
                      type: 'none'
                  }
              }
          }
      };
  if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
      const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
      weeklyExpenses.render();
  }

}

//Progress
if (jQuery("#progresschart").length > 0) {
  var options = {
      series: [76],
      chart: {
          fontFamily: 'Poppins", sans-serif',
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
              enabled: true
          }
      },
      plotOptions: {
          radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                  background: "#e7e7e7",
                  strokeWidth: '50%',
                  margin: 1, // margin is in pixels
                  dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                  }
              },
              dataLabels: {
                  name: {
                      show: false
                  },
                  value: {
                      offsetY: -2,
                      fontSize: '22px'
                  }
              }
          }
      },
      grid: {
          padding: {
              top: -10
          }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
          },
      },
      labels: ['Average Results'],
  };

  var chart = new ApexCharts(document.querySelector("#progresschart"), options);
  chart.render();

}

//vistorchat
if (jQuery("#visitorsChart").length > 0) {
  let i = document.querySelector("#visitorsChart"),
      n = {
          chart: {
              height: 200,
              fontFamily: 'Poppins", sans-serif',
              parentHeightOffset: 0,
              type: "bar",
              toolbar: {
                  show: !1
              }
          },
          plotOptions: {
              bar: {
                  barHeight: "75%",
                  columnWidth: "40px",
                  startingShape: "rounded",
                  endingShape: "rounded",
                  borderRadius: 5,
                  distributed: !0
              }
          },
          grid: {
              show: !1,
              padding: {
                  top: -25,
                  bottom: -12
              }
          },
          colors: [config.colors.primary, config.colors.primary, config.colors.primary, config.colors.primary, config.colors.primary, config.colors.primary, config.colors.primary],
          dataLabels: {
              enabled: !1
          },
          series: [{
              data: [40, 95, 60, 45, 90, 50, 75]
          }],
          legend: {
              show: !1
          },
          xaxis: {
              categories: ["M", "T", "W", "T", "F", "S", "S"],
              axisBorder: {
                  show: !1
              },
              axisTicks: {
                  show: !1
              },
              labels: {
                  style: {
                      colors: config.colors.secondary,
                      fontSize: "13px"
                  }
              }
          },
          yaxis: {
              labels: {
                  show: !1
              }
          },
          responsive: [{
              breakpoint: 1440,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 9,
                          columnWidth: "60%"
                      }
                  }
              }
          }, {
              breakpoint: 1300,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 9,
                          columnWidth: "60%"
                      }
                  }
              }
          }, {
              breakpoint: 1200,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 8,
                          columnWidth: "50%"
                      }
                  }
              }
          }, {
              breakpoint: 1040,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 8,
                          columnWidth: "50%"
                      }
                  }
              }
          }, {
              breakpoint: 991,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 8,
                          columnWidth: "50%"
                      }
                  }
              }
          }, {
              breakpoint: 420,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 8,
                          columnWidth: "50%"
                      }
                  }
              }
          }]
      };
  if (null !== i) {
      const g = new ApexCharts(i, n);
      g.render()
  }
}

//Activity
if (jQuery("#activityChart").length > 0) {
  let i = document.querySelector("#activityChart"),
      n = {
          chart: {
              height: 200,

              fontFamily: 'Poppins", sans-serif',
              parentHeightOffset: 0,
              toolbar: {
                  show: !1
              },
              type: "area"
          },
          dataLabels: {
              enabled: !1
          },
          stroke: {
              width: 2,
              curve: "smooth"
          },
          series: [{
              data: [15, 20, 14, 22, 17, 40, 12, 35, 25]
          }],
          colors: [config.colors.success],
          fill: {
              type: "gradient",
              gradient: {
                  shadeIntensity: .8,
                  opacityFrom: .8,
                  opacityTo: .25,
                  stops: [0, 85, 100]
              }
          },
          grid: {
              show: !1,
              padding: {
                  top: -20,
                  bottom: -8
              }
          },
          legend: {
              show: !1
          },
          xaxis: {
              categories: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
              axisBorder: {
                  show: !1
              },
              axisTicks: {
                  show: !1
              },
              labels: {
                  style: {
                      fontSize: "13px",
                  }
              }
          },
          yaxis: {
              labels: {
                  show: !1
              }
          }
      };
  if (null !== i) {
      const f = new ApexCharts(i, n);
      f.render()
  }
}
//order
if (jQuery("#total-order-chart").length > 0) {
  let i = document.querySelector("#total-order-chart"),
      n = {
          chart: {
              height: 150,
              parentHeightOffset: 0,
              fontFamily: 'Poppins", sans-serif',
              type: "donut"
          },
          labels: ["Electronic", "Sports", "Decor", "Fashion"],
          series: [45, 58, 30, 50],
          stroke: {
              width: 0
          },
          dataLabels: {
              enabled: !1,
              formatter: function(o, e) {
                  return parseInt(o) + "%"
              }
          },
          legend: {
              show: !1
          },
          tooltip: {
              theme: !1
          },
          grid: {
              padding: {
                  top: 15
              }
          },
          plotOptions: {
              pie: {
                  donut: {
                      size: "75%",
                      labels: {
                          show: !0,
                          value: {
                              fontSize: "1.5rem",
                              fontFamily: "Poppins , sans-serif",
                              color: '#000',
                              fontWeight: 500,
                              offsetY: -15,
                              formatter: function(o) {
                                  return parseInt(o) + "%"
                              }
                          },
                          name: {
                              offsetY: 20,
                              fontFamily: "Poppins , sans-serif"
                          },
                          total: {
                              show: !0,
                              value: {
                                  fontSize: "1.5rem",
                                  fontFamily: "Poppins , sans-serif",
                                  color: '#000',
                                  fontWeight: 500,
                                  offsetY: -15,
                                  formatter: function(o) {
                                      return parseInt(o) + "%"
                                  }
                              },
                              name: {
                                  offsetY: 20,
                                  fontFamily: "Poppins , sans-serif"
                              },
                              total: {
                                  show: !0,
                                  fontSize: ".7rem",
                                  label: "1 Week",
                                  color: '#000',
                                  formatter: function(o) {
                                      return "32%"
                                  }
                              }
                          }
                      }
                  }
              }
          }
      };
  if (null !== i) {
      const b = new ApexCharts(i, n);
      b.render()
  }
}



//Leads
if (jQuery("#generatedChart").length > 0) {
  let i = document.querySelector("#generatedChart"),
      n = {
          chart: {
              height: 250,
              parentHeightOffset: 0,
              fontFamily: 'Poppins", sans-serif',
              type: "donut"
          },
          labels: ["Electronic", "Sports", "Decor", "Fashion"],
          series: [45, 58, 30, 50],
          stroke: {
              width: 0
          },
          dataLabels: {
              enabled: !1,
              formatter: function(o, e) {
                  return parseInt(o) + "%"
              }
          },
          legend: {
              show: !1
          },
          tooltip: {
              theme: !1
          },
          grid: {
              padding: {
                  top: 15
              }
          },
          plotOptions: {
              pie: {
                  donut: {
                      size: "75%",
                      labels: {
                          show: !0,
                          value: {
                              fontSize: "1.5rem",
                              fontFamily: "Poppins , sans-serif",
                              color: '#000',
                              fontWeight: 500,
                              offsetY: -15,
                              formatter: function(o) {
                                  return parseInt(o) + "%"
                              }
                          },
                          name: {
                              offsetY: 20,
                              fontFamily: "Poppins , sans-serif"
                          },
                          total: {
                              show: !0,
                              value: {
                                  fontSize: "1.5rem",
                                  fontFamily: "Poppins , sans-serif",
                                  color: '#000',
                                  fontWeight: 500,
                                  offsetY: -15,
                                  formatter: function(o) {
                                      return parseInt(o) + "%"
                                  }
                              },
                              name: {
                                  offsetY: 20,
                                  fontFamily: "Poppins , sans-serif"
                              },
                              total: {
                                  show: !0,
                                  fontSize: ".7rem",
                                  label: "1 Week",
                                  color: '#000',
                                  formatter: function(o) {
                                      return "32%"
                                  }
                              }
                          }
                      }
                  }
              }
          }
      };
  if (null !== i) {
      const b = new ApexCharts(i, n);
      b.render()
  }
}
//Session
if (jQuery("#sessionChart").length > 0) {
  let i = document.querySelector("#sessionChart"),
      n = {
          chart: {
              height: 70,
              type: "area",
              fontFamily: 'Poppins", sans-serif',
              toolbar: {
                  show: !1
              },
              sparkline: {
                  enabled: !0
              }
          },
          markers: {
              size: 6,
              colors: "transparent",
              strokeColors: "transparent",
              strokeWidth: 4,
              discrete: [{
                  fillColor: config.colors.white,
                  seriesIndex: 0,
                  dataPointIndex: 8,
                  strokeColor: config.colors.warning,
                  strokeWidth: 2,
                  size: 6,
                  radius: 8
              }],
              hover: {
                  size: 7
              }
          },
          grid: {
              show: !1,
              padding: {
                  right: 8
              }
          },
          colors: [config.colors.warning],
          fill: {
              type: "gradient",
              gradient: {
                  shadeIntensity: .8,
                  opacityFrom: .8,
                  opacityTo: .25,
                  stops: [0, 95, 100]
              }
          },
          dataLabels: {
              enabled: !1
          },
          stroke: {
              width: 2,
              curve: "straight"
          },
          series: [{
              data: [280, 280, 240, 240, 200, 200, 260, 260, 310]
          }],
          xaxis: {
              show: !1,
              lines: {
                  show: !1
              },
              labels: {
                  show: !1
              },
              axisBorder: {
                  show: !1
              }
          },
          yaxis: {
              show: !1
          }
      };
  if (null !== i) {
      const h = new ApexCharts(i, n);
      h.render()
  }
}

//Recent Order
if (jQuery("#recentorder").length > 0) {
  var options = {
      series: [{
          name: "Net Profit",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
          height: 350,
          type: 'line',
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'straight'
      },
      grid: {
          row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
          },
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
  };

  var chart = new ApexCharts(document.querySelector("#recentorder"), options);
  chart.render();
}

//Recent Sale
if (jQuery("#recentsales").length > 0) {
  var options = {
      series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56],
          fontFamily: 'Poppins", sans-serif',
      }, {
          name: 'Revenue',
          data: [76, 85, 101, 98]
      }],
      chart: {
          type: 'bar',
          height: 350,
          toolbar: {
              show: false
          }
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
      },
      xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May'],
      },
      yaxis: {
          title: {
              text: '$ (thousands)'
          }
      },
      fill: {
          opacity: 1
      },
      tooltip: {
          y: {
              formatter: function(val) {
                  return "$ " + val + " thousands"
              }
          }
      }
  };

  var chart = new ApexCharts(document.querySelector("#recentsales"), options);
  chart.render();
}

//Analytics Dashboard
//Conversion
if (jQuery("#conversion-chart").length > 0) {
  var options = {
      series: [{
          name: "conversions",
          fontFamily: 'Poppins", sans-serif',
          data: [1511, 1813, 2514, 2217, 1187]
      }],
      fill: {
          colors: '#3699FF',
          opacity: 0.3,
          type: 'solid',
      },
      chart: {
          type: 'area',
          height: 100,
          fontFamily: 'Poppins", sans-serif',
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      labels: ['5 April', '8 April', '12 April', '10 April', '12 April'],
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false,
          }
      },
      yaxis: {
          labels: {
              show: false
          }
      },
      grid: {
          padding: {
              left: -9,
              right: 0,
              bottom: -30,
              top: 0,
          },

          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: false
              }

          }
      }

  };

  var chart = new ApexCharts(document.querySelector("#conversion-chart"), options);
  chart.render();
}

//Impressions

if (jQuery("#impressions-chart").length > 0) {
  var options = {
      series: [{
          name: "Impressions",
          data: [13112, 15113, 18114, 14117, 15151, 14119]
      }],
      fill: {
          colors: '#0dcaf0',
          opacity: 0.3,
          type: 'solid',

      },
      chart: {
          type: 'area',
          height: 100,
          fontFamily: 'Poppins", sans-serif',
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: ['#0dcaf0'],
      },
      labels: ['5 april', '8 april', '12 april', '10 april', '15april', '25 april'],
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false,
          }
      },
      yaxis: {
          labels: {
              show: false
          }
      },
      grid: {
          padding: {
              left: -9,
              right: 0,
              bottom: -30,
              top: 0
          },

          xaxis: {
              lines: {
                  show: false
              }

          },
          yaxis: {
              lines: {
                  show: false
              }

          },

      }

  };

  var chart = new ApexCharts(document.querySelector("#impressions-chart"), options);
  chart.render();
}

//Visits
if (jQuery("#visit-chart").length > 0) {
  var options = {
      series: [{
          name: "Visits",
          data: [17112, 18125, 18114, 19117, 18151, 18119]
      }],
      fill: {
          colors: '#198754',
          opacity: 0.3,
          type: 'solid',

      },
      chart: {
          type: 'area',
          height: 100,
          fontFamily: 'Poppins", sans-serif',
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: ['#198754'],

      },
      labels: ['5 april', '8 april', '12 april', '10 april', '15april', '25 april'],

      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false,
          }
      },
      yaxis: {
          labels: {
              show: false
          }

      },

      grid: {
          padding: {
              left: -9,
              right: 0,
              bottom: -30,
              top: 0
          },

          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: false
              }

          },

      }

  };

  var chart = new ApexCharts(document.querySelector("#visit-chart"), options);
  chart.render();
}


//session browser
if (jQuery("#session-browser").length > 0) {
  var options = {
      series: [95, 75, 25, 5],
      chart: {
          height: '335px',
          type: 'radialBar',

      },

      plotOptions: {
          radialBar: {
              offsetY: 60,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                  margin: 0,
                  size: '30%',
                  background: 'transparent',
                  imageWidth: 150,
                  imageHeight: 150,
              },
              dataLabels: {
                  name: {
                      show: false,
                  },
                  value: {
                      show: false,
                  }
              }
          }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Chrome : 95%', 'Safari : 75%', 'Firefox : 25%', 'IE : 5%'],
      legend: {
          show: true,
          position: 'top',
          floating: true,
          verticalAlign: 'bottom',
          horizontalAlign: 'left',
          fontSize: '14px',
          fontFamily: 'Poppins", sans-serif',
          fontWeight: 400,
          offsetX: -30,
          offsetY: 0,
          markers: {
              width: 20,
              height: 20,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 4,
              customHTML: undefined,
              onClick: undefined,
              offsetX: -5,
              offsetY: 5,
          },
          itemMargin: {
              horizontal: 10,
              vertical: 0
          },
          onItemClick: {
              toggleDataSeries: true
          },
          onItemHover: {
              highlightDataSeries: true
          },
      },

      responsive: [{
          breakpoint: 400,
          options: {
              chart: {
                  height: 250
              },
              legend: {

                  fontSize: '12px',
              }

          }
      }],

  };

  var chart = new ApexCharts(document.querySelector("#session-browser"), options);
  chart.render();
}
//Gender chart - analytics
if (jQuery("#gender-chart").length > 0) {
  var options = {
      chart: {
          height: 220,
          type: 'donut',
          fontFamily: 'Poppins", sans-serif',
      },
      labels: ['Male', 'Female'],
      colors: ['#e36c2c', '#fcae60'],
      dataLabels: {
          enabled: false
      },
      stroke: {
        width: 0,
    },
      series: [35, 65],
      tooltip: {
          enabled: true,
          y: {
              formatter: function(val) {
                  return val + "%"
              },
          }
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  height: 200
              },

          }
      }],
      legend: {
          show: false
      },

  };

  var chart = new ApexCharts(document.querySelector("#gender-chart"), options);
  chart.render();
}


//age chart - analytics
if (jQuery("#age-chart").length > 0) {
  var options = {
      labels: ['Under 30', 'Over 30'],
      series: [55, 45],
      tooltip: {
          enabled: true,
          y: {
              formatter: function(val) {
                  return val + "%"
              },
          }
      },
      stroke: {
        width: 0,
    },
      colors: ['#30d1c5', '#189795'],
      chart: {
          height: 220,
          type: 'donut',
          fontFamily: 'Poppins", sans-serif',
      },

      dataLabels: {
          enabled: false
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  height: 200
              },

          }
      }],
      legend: {
          show: false
      },

  };

  var chart = new ApexCharts(document.querySelector("#age-chart"), options);
  chart.render();
}

//age chart - analytics
if (jQuery("#language-chart").length > 0) {
  var options = {
      labels: ['English', 'Other'],
      series: [80, 20],
      tooltip: {
          enabled: true,
          y: {
              formatter: function(val) {
                  return val + "%"
              },
          }
      },
      stroke: {
        width: 0,
    },
      colors: ['#1d81cb', '#57b2ea'],
      chart: {
          height: 220,
          type: 'donut',
          fontFamily: 'Poppins", sans-serif',
      },

      dataLabels: {
          enabled: false
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  height: 200
              },

          }
      }],
      legend: {
          show: false
      },

  };

  var chart = new ApexCharts(document.querySelector("#language-chart"), options);
  chart.render();
}
//
//new-returning-chart - analytics
if (jQuery("#new-returning-chart").length > 0) {
  var options = {
      labels: ['New', 'Returning'],
      series: [75, 25],
      tooltip: {
          enabled: true,
          y: {
              formatter: function(val) {
                  return val + "%"
              },
          }
      },
      stroke: {
        width: 0,
    },
      colors: ['#b993ef', '#8257cf'],
      chart: {
          height: 220,
          type: 'donut',
          fontFamily: 'Poppins", sans-serif',
      },

      dataLabels: {
          enabled: false
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  height: 200
              },

          }
      }],
      legend: {
          show: false
      },

  };

  var chart = new ApexCharts(document.querySelector("#new-returning-chart"), options);
  chart.render();
}

//Crypto -Wallet growth
if (jQuery("#wallet-growth").length > 0) {
  var options = {
      series: [{
          name: 'series1',
          data: [290, 200, 750, 500, 450, 300, 820, 450, 750, 280, 750, 500]

      }],
      chart: {
          height: 400,
          type: 'area',
          toolbar: {
              show: false
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth',
          colors: ["#4FC9DA"],

      },
      fill: {
          colors: ["#4FC9DA"],
      },

      grid: {
          show: true,
          borderColor: '#EAEAEA',
          strokeDashArray: 7,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: true
              }
          }
      },
      xaxis: {
          type: 'months',
          categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: {
              style: {
                  fontSize: '13px',
                  colors: '#b5b5c3',
                  fontFamily: 'Poppins", sans-serif',
              }
          }
      },
      yaxis: {
          min: 50,
          max: 850,
          tickAmount: 6,
          labels: {
              formatter: function(val) {
                  return val.toFixed(0) + "k"
              },
              style: {
                  fontSize: '13px',
                  colors: '#b5b5c3',
                  fontFamily: 'Poppins", sans-serif',
              }
          }

      },
      tooltip: {
          x: {
              format: 'dd/MM/yy HH:mm'
          },
      },
  };

  var chart = new ApexCharts(document.querySelector("#wallet-growth"), options);
  chart.render();


}

//Ecommerce - expected-earning
if (jQuery("#expected-earning").length > 0) {
  var options = {
      series: [{
          name: "Earning",
          fontFamily: 'Poppins", sans-serif',
          data: [0, 30, 80, 70, 35, 60, 50, 60, 80, 100]
      }],
      fill: {
          colors: '#1BC5BD',
          opacity: 0.3,
          type: 'gradient',
      },
      chart: {
          type: 'area',
          height: 60,
          fontFamily: 'Poppins", sans-serif',

          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: ['#1BC5BD'],
          width: 2,
      },
      tooltip: {
          enabled: true,
          x: {
              show: false,
          },

          y: {
              formatter: function(val) {
                  return val
              },
              title: {
                  formatter: function(seriesName) {
                      return ''
                  }
              }
          }

      },
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false
          }
      },
      yaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },

      },
      grid: {
          padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: -30,
          },

          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: false
              }

          }
      },

  };

  var chart = new ApexCharts(document.querySelector("#expected-earning"), options);
  chart.render();
}
//Ecommerce - Order chart
if (jQuery("#order-chart").length > 0) {
  var options = {
      series: [{
          name: "Order this month",
          fontFamily: 'Poppins", sans-serif',
          data: [0, 35, 100, 25, 30, 80, 50, 60, 80, 100]
      }],
      fill: {
          colors: '#8950FC',
          opacity: 0.3,
          type: 'gradient',
      },
      chart: {
          type: 'area',
          height: 60,
          fontFamily: 'Poppins", sans-serif',

          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: ['#8950FC'],
          width: 2,
      },
      tooltip: {
          enabled: true,
          x: {
              show: false,
          },

          y: {
              formatter: function(val) {
                  return val
              },
              title: {
                  formatter: function(seriesName) {
                      return ''
                  }
              }
          }

      },
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false
          }
      },
      yaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },

      },
      grid: {
          padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: -20,
          },

          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: false
              }

          }
      },

  };

  var chart = new ApexCharts(document.querySelector("#order-chart"), options);
  chart.render();
}

//Ecommerce - Daily sales
if (jQuery("#daily-sales").length > 0) {
  var options = {
      series: [{
          name: "Daily Sales",
          fontFamily: 'Poppins", sans-serif',
          data: [0, 35, 80, 50, 60, 80, 90, 25, 30, 0]
      }],
      fill: {
          colors: '#FFA81E',
          opacity: 0.3,
          type: 'gradient',
      },
      chart: {
          type: 'area',
          height: 60,
          fontFamily: 'Poppins", sans-serif',

          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: ['#FFA81E'],
          width: 2,
      },
      tooltip: {
          enabled: true,
          x: {
              show: false,
          },

          y: {
              formatter: function(val) {
                  return val
              },
              title: {
                  formatter: function(seriesName) {
                      return ''
                  }
              }
          }

      },
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false
          }
      },
      yaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },

      },
      grid: {
          padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: -20,
          },

          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: false
              }

          }
      },

  };

  var chart = new ApexCharts(document.querySelector("#daily-sales"), options);
  chart.render();
}

//Ecommerce - New customer
if (jQuery("#new-customer").length > 0) {
  var options = {
      series: [{
          name: "New customer",
          fontFamily: 'Poppins", sans-serif',
          data: [0, 80, 60, 50, 65, 75, 83, 25, 30, 0]
      }],
      fill: {
          colors: '#F64E60',
          opacity: 0.3,
          type: 'gradient',
      },
      chart: {
          type: 'area',
          height: 60,
          fontFamily: 'Poppins", sans-serif',

          zoom: {
              enabled: false
          },
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          curve: 'smooth',
          colors: ['#F64E60'],
          width: 2,
      },
      tooltip: {
          enabled: true,
          x: {
              show: false,
          },

          y: {
              formatter: function(val) {
                  return val
              },
              title: {
                  formatter: function(seriesName) {
                      return ''
                  }
              }
          }

      },
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          tooltip: {
              enabled: false
          }
      },
      yaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },

      },
      grid: {
          padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: -20,
          },

          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: false
              }

          }
      },

  };

  var chart = new ApexCharts(document.querySelector("#new-customer"), options);
  chart.render();
}

//Ecommerce - sales this month
if (jQuery("#salesthismonth").length > 0) {
  var options = {
      series: [{
          name: 'sales',
          data: [338, 345, 348, 335, 349, 333]

      }],
      chart: {
          height: 200,
          type: 'area',
          toolbar: {
              show: false
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth',
          colors: ["#3699FF"],

      },
      fill: {
          colors: ["#3699FF"],
      },

      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          yaxis: {
              lines: {
                  show: true
              }
          }
      },
      xaxis: {
          type: 'months',
          categories: ["Apr 04", "Apr 07", "Apr 10", "Apr 13", "Apr 18", "Apr 21"],
          labels: {
              style: {
                  fontSize: '12px',
                  colors: '#b5b5c3',
                  fontFamily: 'Poppins", sans-serif',
              }
          }
      },
      yaxis: {
          min: 330,
          max: 351,
          tickAmount: 4,
          labels: {
              formatter: function(val) {
                  return val.toFixed(0) + "$"
              },
              style: {
                  fontSize: '12px',
                  colors: '#b5b5c3',
                  fontFamily: 'Poppins", sans-serif',
              }
          }

      },

      tooltip: {
          enabled: true,
          x: {
              show: false,
          },
          y: {
              formatter: function(val) {
                  return val
              },
              title: {
                  formatter: function(seriesName) {
                      return ''
                  }
              }
          }
      }
  };

  var chart = new ApexCharts(document.querySelector("#salesthismonth"), options);
  chart.render();
}

//Ecommerce - saleschart
if (jQuery("#saleschart").length > 0) {
  var options = {
      series: [23, 30, 40, 7],
      name: 'sales',
      chart: {
          type: 'donut',
          fontSize: '12px',
          colors: '#b5b5c3',
          fontFamily: 'Poppins", sans-serif',
          height: 260,

      },
      labels: ['Clothes 44k ', 'Smartphone 48k', 'Electronic 50k ', 'Other 17k '],

      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  height: 500
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#saleschart"), options);
  chart.render();

}

//Ecommerce - targetchart
if (jQuery("#targetchart").length > 0) {
  var options = {
      series: [{
          name: 'Net Profit',
          data: [70, 125, 80, 67, 22, 43, 80, 100, 70, 80, 80, 30]
      }, {
          name: 'Revenue',
          data: [90, 20, 60, 58, 103, 50, 41, 50, 22, 30, 60, 120]
      }],
      dataLabels: {
          enabled: false
      },
      colors: ['#3599FC', '#8950FC'],

      chart: {
          type: 'bar',
          height: 260,
          stacked: true,
          toolbar: {
              show: false
          },
          zoom: {
              enabled: true
          }
      },
      responsive: [{
          breakpoint: 480,
          options: {
              legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
              }
          }
      }],
      plotOptions: {
          bar: {
              columnWidth: '40%',
              horizontal: false,
              borderRadius: 0
          },
      },
      grid: {
          yaxis: {
              lines: false,
          },
          xaxis: {
              lines: false,
          }
      },

      xaxis: {
          type: 'months',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
              style: {
                  fontSize: '13px',
                  colors: '#b5b5c3',
                  fontFamily: 'Poppins", sans-serif',
              }
          }
      },
      yaxis: {
          min: 0,
          max: 160,
          tickAmount: 4,
          labels: {
              style: {
                  fontSize: '13px',
                  colors: '#b5b5c3',
                  fontFamily: 'Poppins", sans-serif',
              }
          }
      },
      legend: {
          show: false,
          position: 'right',
          offsetY: 40
      },
      fill: {
          opacity: 1
      }
  };

  var chart = new ApexCharts(document.querySelector("#targetchart"), options);
  chart.render();

}

// Dashboard - Projects Page
if (jQuery("#apex-github-issues").length > 0) {
  var options = {
      series: [{
              name: 'New Issues',
              type: 'column',
              data: [350, 300, 410, 300, 520, 220, 120]
          },
          {
              name: 'Closed Issues',
              type: 'line',
              data: [420, 275, 480, 342, 640, 255, 500]
          }
      ],
      chart: {
          height: 350,
          type: 'line',
          toolbar: {
              show: false,
          },
          fontFamily: 'Poppins", sans-serif',
      },
      stroke: {
          width: [0, 4]
      },
      legend: {
          show: false
      },
      dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
      },
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

  };

  var chart = new ApexCharts(document.querySelector("#apex-github-issues"), options);
  chart.render();
}

if (jQuery("#apex-task-distribute").length > 0) {
  var options = {
      series: [40, 60, 90, 60],
      chart: {
          type: 'polarArea',
      },
      labels: ["API", "Backend", "Frontend", "Issues"],
      stroke: {
          colors: ['#fff']
      },
      fill: {
          opacity: 1,
          colors: ['#008ffb', '#00e396', '#feb019', '#ff4560']
      },
      legend: {
          position: 'bottom',
          itemMargin: {
              horizontal: 12,
              vertical: 0
          }
      },
      responsive: [{
          breakpoint: 480,
          options: {
              legend: {
                  itemMargin: {
                      horizontal: 7
                  }
              }
          }
      }]
  };

  var chart = new ApexCharts(document.querySelector("#apex-task-distribute"), options);
  chart.render();

}