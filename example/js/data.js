const menuData = [{
    dataTarget: 'base-Maps',
    styleName: 'Base Maps',
    subitems: [{
        comments: "A set of beautiful Open Map Styles for vector tiles to generate a beautiful vector-based map in browsers and on mobile devices.",
        title: 'Cloud Vector Maps',
        htmlPath: './example/html/cloud-vector-maps.html',
        jsPath: './example/js/cloud-vector-maps.js'
    }, {
        comments: 'Shows how to consume the raster-tile based services from any providers via XYZ, WMS, WMTS etc.',
        title: 'Cloud Raster Maps',
        htmlPath: './example/html/cloud-raster-maps.html',
        jsPath: './example/js/cloud-raster-maps.js'
    }, {
        comments: 'Shows how to draw the labels from Vector Tile and overlap them correctly on the top of a satallite map.',
        title: 'Satellite with Labels ',
        htmlPath: './example/html/satellite-with-labels.html',
        jsPath: './example/js/satellite-with-labels.js'
    }, {
        comments: 'Overlapping the labels from Vector tile on global light raster map from NASA at night since 2012, it helps dig geography, polulation and more. ',
        title: 'Imagery with Labels  ',
        htmlPath: './example/html/imagery-with-labels.html',
        jsPath: './example/js/imagery-with-labels.js'
    }, {
        comments: 'Displays basemaps at higher resolutions on retina devices. In this example, the map tiles are requested with \'@2x\' parameter.',
        title: 'Retina Maps ',
        htmlPath: './example/html/retina-maps.html',
        jsPath: './example/js/retina-maps.js'
    }]
}, {
    dataTarget: 'statistics',
    styleName: 'Statistics',
    subitems: [{
        comments: 'The distribution of global earthquake above 5 till 2012 is graphically presentated with heat map. The data is read from a *.kml file.',
        title: 'Heatmap with KML',
        htmlPath: './example/html/heatmap-KML.html',
        jsPath: './example/js/heatmap-KML.js'
    }, {
        comments: 'The statistics of road congestion is graphically presentated with heat map. The data is read from a geojson file. ',
        title: 'Heatmap with GeoJSON',
        htmlPath: './example/html/heatmap-json.html',
        jsPath: './example/js/heatmap-json.js'
    }, {
        comments: 'The statistics of rainfall distribution in China at 17:00 on oct 16, 2018 is converted into isoline map. ',
        title: 'Contour Line',
        htmlPath: './example/html/contour-line.html',
        jsPath: './example/js/contour-line.js'
    }, {
        comments: 'The statistics of rainfall distribution in China at 17:00 on oct 16, 2018 is converted into isoline panel map.',
        title: 'Contour Plane',
        htmlPath: './example/html/contour-plane.html',
        jsPath: './example/js/contour-plane.js'
    }, {
        comments: "A bubble map show how the PM2.5 in China's major cities is.",
        title: 'Scatter',
        htmlPath: './example/html/scatter.html',
        jsPath: './example/js/scatter.js'
    }, {
        comments: 'The statistics of what percentage of borsers (IE8-, IE9+, Safari, Chrome and Firefox) are in some U.S. states in 2012.',
        title: 'Pie Chart',
        htmlPath: './example/html/pie-chart.html',
        jsPath: './example/js/pie-chart.js'
    }, {
        comments: 'The analysis of atmospheric in some states of the United States are geographically shown up. ',
        title: 'AQI Radar',
        htmlPath: './example/html/AQI-radar.html',
        jsPath: './example/js/AQI-radar.js'
    }, {
        comments: 'An example shows how to display huge point data on the map with cluster strategy.',
        title: 'Cluster Envelope',
        htmlPath: './example/html/cluster-envelope.html',
        jsPath: './example/js/cluster-envelope.js'
    }, {
        comments: 'Features in data are aggregated on hexagonal grid. Hexagonal binning (heatmaps) provide a convenient way to visualize density.',
        title: 'Hexagon',
        htmlPath: './example/html/hexagon.html',
        jsPath: './example/js/hexagon.js'
    }, {
        comments: 'Bubble – Round Trip Time',
        title: 'Average Round Trip Commute Time',
        htmlPath: './example/html/trip-commute-time.html',
        jsPath: './example/js/trip-commute-time.js'
    }]
}, {
    dataTarget: 'styling',
    styleName: 'Styling',
    subitems: [{
        comments: 'Styling Frisco school poi with Map Suite StyleJSON ',
        title: 'Styling Points',
        htmlPath: './example/html/styling-points.html',
        jsPath: './example/js/styling-points.js'
    }, {
        comments: 'Styling rivers of europe with Map Suite StyleJSON',
        title: 'Styling Lines',
        htmlPath: './example/html/styling-lines.html',
        jsPath: './example/js/styling-lines.js'
    }, {
        comments: 'Styling polygons with Map Suite StyleJSON',
        title: 'Styling Polygons',
        htmlPath: './example/html/styling-polygons.html',
        jsPath: './example/js/styling-polygons.js'
    }, {
        comments: 'Styling Label of Frisco block  with Map Suite StyleJSON',
        title: 'Labeling Features',
        htmlPath: './example/html/labeling-features.html',
        jsPath: './example/js/labeling-features.js'
    }, {
        comments: 'Mark the places with the detailed description in popup.',
        title: 'Marking Places',
        htmlPath: './example/html/marking-places.html',
        jsPath: './example/js/marking-places.js'
    }]
}, {
    dataTarget: 'vector-data',
    styleName: 'Vector Data',
    subitems: [{
        comments: 'Example of vector data with Map Suite StyleJSON.',
        title: 'Vector Tile',
        htmlPath: './example/html/vector-tile.html',
        jsPath: './example/js/vector-tile.js'
    }, {
        comments: 'Example of GeoJSON features with labels.',
        title: 'GeoJSON ',
        htmlPath: './example/html/geojson.html',
        jsPath: './example/js/geojson.js'
    }, {
        comments: 'Rendering KML with a vector source.',
        title: 'KML ',
        htmlPath: './example/html/KML.html',
        jsPath: './example/js/KML.js'
    }, {
        comments: 'EThis example loads new features from GeoServer WFS.',
        title: 'WFS ',
        htmlPath: './example/html/WFS.html',
        jsPath: './example/js/WFS.js'
    }, {
        comments: 'Create features from geometries in WKT (Well Known Text) format..',
        title: 'WKT ',
        htmlPath: './example/html/WKT.html',
        jsPath: './example/js/WKT.js'
    }, {
        comments: 'Example of using the GPX source..',
        title: 'GPX ',
        htmlPath: './example/html/GPX.html',
        jsPath: './example/js/GPX.js'
    }, {
        comments: 'Different coordinate systems display maps',
        title: 'Projection ',
        htmlPath: './example/html/projection.html',
        jsPath: './example/js/projection.js'
    }]
}, {
    dataTarget: 'thinkGeo-cloud',
    styleName: 'ThinkGeo Cloud',
    subitems: [{
        comments: `Get the elevation of points along a line on <a href="https://cloud.thinkgeo.com/login.html">Thinkgeo  Cloud Service</a>.`,
        title: 'Elevation along Path ',
        htmlPath: './example/html/elevation.html',
        jsPath: './example/js/elevation.js'
    }, {
        comments: 'Reverse geocode a point <a href="https://cloud.thinkgeo.com/login.html">Thinkgeo  Cloud Service</a>.',
        title: 'Reverse Geocoding',
        htmlPath: './example/html/reverse-geocoding.html',
        jsPath: './example/js/reverse-geocoding.js'
    }, {
        comments: 'Get a family of colors based on different options <a href="https://cloud.thinkgeo.com/login.html">Thinkgeo  Cloud Service</a>.',
        title: 'Color Utilities ',
        htmlPath: './example/html/color-creation.html',
        jsPath: './example/js/color-creation.js'
    }]
}, {
    dataTarget: 'JavaScript-frameworks',
    styleName: 'JavaScript Frameworks',
    subitems: [{
        comments: 'Support the JQuery',
        title: 'JQuery',
        htmlPath: './example/html/jquery.html',
        jsPath: './example/js/Jquery.js'
    }, {
        comments: 'Support the Angular',
        title: 'Angular ',
        htmlPath: './example/html/angular.html',
        jsPath: './example/js/angular/angular.js'
    }, {
        comments: 'Support the React JS',
        title: 'React JS',
        htmlPath: './example/html/react.html',
        jsPath: './example/js/react.js'
    }, {
        comments: 'Support the React Vue.JS',
        title: 'Vue.JS',
        htmlPath: './example/html/vue.html',
        jsPath: './example/js/vue.js'
    }]
},];








export default menuData