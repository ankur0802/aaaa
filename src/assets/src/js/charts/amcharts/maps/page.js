
//ANIMATION ALONG LINES

 // Create root element
 var root = am5.Root.new("alongline");
 // Set themes
 root.setThemes([
     am5themes_Animated.new(root)
 ]);

 // Create the map chart
 var chart = root.container.children.push(am5map.MapChart.new(root, {
     panX: "rotateX",
     panY: "translateY",
     projection: am5map.geoMercator(),
     homeGeoPoint: {
         latitude: 2,
         longitude: 2
     }
 }));

 var cont = chart.children.push(am5.Container.new(root, {
     layout: root.horizontalLayout,
     x: 20,
     y: 40
 }));


 // Create series for background fill
 var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
 backgroundSeries.mapPolygons.template.setAll({
     fill: root.interfaceColors.get("alternativeBackground"),
     fillOpacity: 0,
     strokeOpacity: 0
 });

 // Add background polygon
 backgroundSeries.data.push({
     geometry: am5map.getGeoRectangle(90, 180, -90, -180)
 });

 // Create main polygon series for countries
 var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
     geoJSON: am5geodata_worldLow
 }));

 // Create line series for trajectory lines
 var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
 lineSeries.mapLines.template.setAll({
     stroke: root.interfaceColors.get("alternativeBackground"),
     strokeOpacity: 0.3
 });

 // Create point series for markers
 var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

 pointSeries.bullets.push(function() {
     var circle = am5.Circle.new(root, {
         radius: 7,
         tooltipText: "Drag me!",
         cursorOverStyle: "pointer",
         tooltipY: 0,
         fill: am5.color(0xffba00),
         stroke: root.interfaceColors.get("background"),
         strokeWidth: 2,
         draggable: true
     });

     circle.events.on("dragged", function(event) {
         var dataItem = event.target.dataItem;
         var projection = chart.get("projection");
         var geoPoint = chart.invert({
             x: circle.x(),
             y: circle.y()
         });

         dataItem.setAll({
             longitude: geoPoint.longitude,
             latitude: geoPoint.latitude
         });
     });

     return am5.Bullet.new(root, {
         sprite: circle
     });
 });

 var paris = addCity({
     latitude: 48.8567,
     longitude: 2.351
 }, "Paris");
 var toronto = addCity({
     latitude: 43.8163,
     longitude: -79.4287
 }, "Toronto");
 var la = addCity({
     latitude: 34.3,
     longitude: -118.15
 }, "Los Angeles");
 var havana = addCity({
     latitude: 23,
     longitude: -82
 }, "Havana");

 var lineDataItem = lineSeries.pushDataItem({
     pointsToConnect: [paris, toronto, la, havana]
 });

 var planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

 var plane = am5.Graphics.new(root, {
     svgPath: "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
     scale: 0.06,
     centerY: am5.p50,
     centerX: am5.p50,
     fill: am5.color(0x000000)
 });

 planeSeries.bullets.push(function() {
     var container = am5.Container.new(root, {});
     container.children.push(plane);
     return am5.Bullet.new(root, {
         sprite: container
     });
 });

 var planeDataItem = planeSeries.pushDataItem({
     lineDataItem: lineDataItem,
     positionOnLine: 0,
     autoRotate: true
 });

 planeDataItem.animate({
     key: "positionOnLine",
     to: 1,
     duration: 10000,
     loops: Infinity,
     easing: am5.ease.yoyo(am5.ease.linear)
 });

 planeDataItem.on("positionOnLine", function(value) {
     if (value >= 0.99) {
         plane.set("rotation", 180);
     } else if (value <= 0.01) {
         plane.set("rotation", 0);
     }
 });

 function addCity(coords, title) {
     return pointSeries.pushDataItem({
         latitude: coords.latitude,
         longitude: coords.longitude
     });
 }
 //END


 //GROUPED MEMBER
 // Data
 var groupData = [{
     "name": "EU member before 2004",
     "data": [{
             "id": "AT",
             "joined": "1995"
         },
         {
             "id": "IE",
             "joined": "1973"
         },
         {
             "id": "DK",
             "joined": "1973"
         },
         {
             "id": "FI",
             "joined": "1995"
         },
         {
             "id": "SE",
             "joined": "1995"
         },
         {
             "id": "GB",
             "joined": "1973"
         },
         {
             "id": "IT",
             "joined": "1957"
         },
         {
             "id": "FR",
             "joined": "1957"
         },
         {
             "id": "ES",
             "joined": "1986"
         },
         {
             "id": "GR",
             "joined": "1981"
         },
         {
             "id": "DE",
             "joined": "1957"
         },
         {
             "id": "BE",
             "joined": "1957"
         },
         {
             "id": "LU",
             "joined": "1957"
         },
         {
             "id": "NL",
             "joined": "1957"
         },
         {
             "id": "PT",
             "joined": "1986"
         }
     ]
 }, {
     "name": "Joined at 2004",
     "data": [{
             "id": "LT",
             "joined": "2004"
         },
         {
             "id": "LV",
             "joined": "2004"
         },
         {
             "id": "CZ",
             "joined": "2004"
         },
         {
             "id": "SK",
             "joined": "2004"
         },
         {
             "id": "SI",
             "joined": "2004"
         },
         {
             "id": "EE",
             "joined": "2004"
         },
         {
             "id": "HU",
             "joined": "2004"
         },
         {
             "id": "CY",
             "joined": "2004"
         },
         {
             "id": "MT",
             "joined": "2004"
         },
         {
             "id": "PL",
             "joined": "2004"
         }
     ]
 }, {
     "name": "Joined at 2007",
     "data": [{
             "id": "RO",
             "joined": "2007"
         },
         {
             "id": "BG",
             "joined": "2007"
         }
     ]
 }, {
     "name": "Joined at 2013",
     "data": [{
         "id": "HR",
         "joined": "2013"
     }]
 }];


 // Create root and chart
 var root = am5.Root.new("groupedmap");


 // Set themes
 root.setThemes([
     am5themes_Animated.new(root)
 ]);


 // Create chart
 var chart = root.container.children.push(am5map.MapChart.new(root, {
     homeZoomLevel: 3.5,
     homeGeoPoint: {
         longitude: 10,
         latitude: 52
     }
 }));


 // Create world polygon series
 var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
     geoJSON: am5geodata_worldLow,
     exclude: ["AQ"]
 }));

 worldSeries.mapPolygons.template.setAll({
     fill: am5.color(0xaaaaaa)
 });

 worldSeries.events.on("datavalidated", () => {
     chart.goHome();
 });


 // Add legend
 var legend = chart.children.push(am5.Legend.new(root, {
     useDefaultMarker: true,
     centerX: am5.p50,
     x: am5.p50,
     centerY: am5.p100,
     y: am5.p100,
     dy: -20,
     background: am5.RoundedRectangle.new(root, {
         fill: am5.color(0xffffff),
         fillOpacity: 0.2
     })
 }));

 legend.valueLabels.template.set("forceHidden", true)


 // Create series for each group
 var colors = am5.ColorSet.new(root, {
     step: 2
 });
 colors.next();

 am5.array.each(groupData, function(group) {
     var countries = [];
     var color = colors.next();

     am5.array.each(group.data, function(country) {
         countries.push(country.id)
     });

     var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
         geoJSON: am5geodata_worldLow,
         include: countries,
         name: group.name,
         fill: color
     }));


     polygonSeries.mapPolygons.template.setAll({
         tooltipText: "[bold]{name}[/]\nMember since {joined}",
         interactive: true,
         fill: color,
         strokeWidth: 2
     });

     polygonSeries.mapPolygons.template.states.create("hover", {
         fill: am5.Color.brighten(color, -0.3)
     });

     polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
         ev.target.series.mapPolygons.each(function(polygon) {
             polygon.states.applyAnimate("hover");
         });
     });

     polygonSeries.mapPolygons.template.events.on("pointerout", function(ev) {
         ev.target.series.mapPolygons.each(function(polygon) {
             polygon.states.applyAnimate("default");
         });
     });
     polygonSeries.data.setAll(group.data);

     legend.data.push(polygonSeries);
 });


 //END

 //ZOOMING TO COUNTRIES MAP
 // Create root element

 var root = am5.Root.new("zoomingmap");

 // Set themes
 root.setThemes([
     am5themes_Animated.new(root)
 ]);


 // Create the map chart
 var chart = root.container.children.push(am5map.MapChart.new(root, {
     panX: "translateX",
     panY: "translateY",
     projection: am5map.geoMercator()
 }));

 // Create main polygon series for countries
 var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
     geoJSON: am5geodata_worldLow,
     exclude: ["AQ"]
 }));

 polygonSeries.mapPolygons.template.setAll({
     tooltipText: "{name}",
     toggleKey: "active",
     interactive: true
 });

 polygonSeries.mapPolygons.template.states.create("hover", {
     fill: root.interfaceColors.get("primaryButtonHover")
 });

 polygonSeries.mapPolygons.template.states.create("active", {
     fill: root.interfaceColors.get("primaryButtonHover")
 });

 var previousPolygon;

 polygonSeries.mapPolygons.template.on("active", function(active, target) {
     if (previousPolygon && previousPolygon != target) {
         previousPolygon.set("active", false);
     }
     if (target.get("active")) {
         polygonSeries.zoomToDataItem(target.dataItem);
     } else {
         chart.goHome();
     }
     previousPolygon = target;
 });

 //END


 // ADD ZOOM CONTROL

 chart.set("zoomControl", am5map.ZoomControl.new(root, {}));


 // Set clicking on "water" to zoom out
 chart.chartContainer.get("background").events.on("click", function() {
     chart.goHome();
 })

 //END

 //CURVED LINES

 var root = am5.Root.new("mapcurvedlines");

 // Set themes
 root.setThemes([
     am5themes_Animated.new(root)
 ]);

 // Create the map chart
 var chart = root.container.children.push(am5map.MapChart.new(root, {
     panX: "translateX",
     panY: "translateY",
     projection: am5map.geoMercator()
 }));

 var cont = chart.children.push(am5.Container.new(root, {
     layout: root.horizontalLayout,
     x: 20,
     y: 40
 }));

 // Create main polygon series for countries
 var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
     geoJSON: am5geodata_worldLow
 }));

 var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
 graticuleSeries.mapLines.template.setAll({
     stroke: root.interfaceColors.get("alternativeBackground"),
     strokeOpacity: 0.08
 });

 // Create line series for trajectory lines
 var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
 lineSeries.mapLines.template.setAll({
     stroke: root.interfaceColors.get("alternativeBackground"),
     strokeOpacity: 0.6
 });

 // destination series
 var citySeries = chart.series.push(
     am5map.MapPointSeries.new(root, {})
 );

 citySeries.bullets.push(function() {
     var circle = am5.Circle.new(root, {
         radius: 5,
         tooltipText: "{title}",
         tooltipY: 0,
         fill: am5.color(0xffba00),
         stroke: root.interfaceColors.get("background"),
         strokeWidth: 2
     });

     return am5.Bullet.new(root, {
         sprite: circle
     });
 });

 // arrow series
 var arrowSeries = chart.series.push(
     am5map.MapPointSeries.new(root, {})
 );

 arrowSeries.bullets.push(function() {
     var arrow = am5.Graphics.new(root, {
         fill: am5.color(0x000000),
         stroke: am5.color(0x000000),
         draw: function(display) {
             display.moveTo(0, -3);
             display.lineTo(8, 0);
             display.lineTo(0, 3);
             display.lineTo(0, -3);
         }
     });

     return am5.Bullet.new(root, {
         sprite: arrow
     });
 });

 var cities = [{
         id: "london",
         title: "London",
         geometry: {
             type: "Point",
             coordinates: [-0.1262, 51.5002]
         },
     },
     {
         id: "brussels",
         title: "Brussels",
         geometry: {
             type: "Point",
             coordinates: [4.3676, 50.8371]
         }
     }, {
         id: "prague",
         title: "Prague",
         geometry: {
             type: "Point",
             coordinates: [14.4205, 50.0878]
         }
     }, {
         id: "athens",
         title: "Athens",
         geometry: {
             type: "Point",
             coordinates: [23.7166, 37.9792]
         }
     }, {
         id: "reykjavik",
         title: "Reykjavik",
         geometry: {
             type: "Point",
             coordinates: [-21.8952, 64.1353]
         }
     }, {
         id: "dublin",
         title: "Dublin",
         geometry: {
             type: "Point",
             coordinates: [-6.2675, 53.3441]
         }
     }, {
         id: "oslo",
         title: "Oslo",
         geometry: {
             type: "Point",
             coordinates: [10.7387, 59.9138]
         }
     }, {
         id: "lisbon",
         title: "Lisbon",
         geometry: {
             type: "Point",
             coordinates: [-9.1355, 38.7072]
         }
     }, {
         id: "moscow",
         title: "Moscow",
         geometry: {
             type: "Point",
             coordinates: [37.6176, 55.7558]
         }
     }, {
         id: "belgrade",
         title: "Belgrade",
         geometry: {
             type: "Point",
             coordinates: [20.4781, 44.8048]
         }
     }, {
         id: "bratislava",
         title: "Bratislava",
         geometry: {
             type: "Point",
             coordinates: [17.1547, 48.2116]
         }
     }, {
         id: "ljublana",
         title: "Ljubljana",
         geometry: {
             type: "Point",
             coordinates: [14.5060, 46.0514]
         }
     }, {
         id: "madrid",
         title: "Madrid",
         geometry: {
             type: "Point",
             coordinates: [-3.7033, 40.4167]
         }
     }, {
         id: "stockholm",
         title: "Stockholm",
         geometry: {
             type: "Point",
             coordinates: [18.0645, 59.3328]
         }
     }, {
         id: "bern",
         title: "Bern",
         geometry: {
             type: "Point",
             coordinates: [7.4481, 46.9480]
         }
     }, {
         id: "kiev",
         title: "Kiev",
         geometry: {
             type: "Point",
             coordinates: [30.5367, 50.4422]
         }
     }, {
         id: "paris",
         title: "Paris",
         geometry: {
             type: "Point",
             coordinates: [2.3510, 48.8567]
         }
     }, {
         id: "new york",
         title: "New York",
         geometry: {
             type: "Point",
             coordinates: [-74, 40.43]
         }
     }
 ];

 citySeries.data.setAll(cities);

 // prepare line series data
 var destinations = ["reykjavik", "lisbon", "moscow", "belgrade", "ljublana", "madrid", "stockholm", "bern", "kiev", "new york"];
 // London coordinates
 var originLongitude = -0.1262;
 var originLatitude = 51.5002;

 am5.array.each(destinations, function(did) {
     var destinationDataItem = citySeries.getDataItemById(did);
     var lineDataItem = lineSeries.pushDataItem({
         geometry: {
             type: "LineString",
             coordinates: [
                 [originLongitude, originLatitude],
                 [destinationDataItem.get("longitude"), destinationDataItem.get("latitude")]
             ]
         }
     });

     arrowSeries.pushDataItem({
         lineDataItem: lineDataItem,
         positionOnLine: 0.5,
         autoRotate: true
     });
 })

 polygonSeries.events.on("datavalidated", function() {
     chart.zoomToGeoPoint({
         longitude: -0.1262,
         latitude: 51.5002
     }, 3);
 })


 //END

 // COMMON FOR ALL SCRIPT ABOVE Make stuff animate on load
 chart.appear(1000, 100);