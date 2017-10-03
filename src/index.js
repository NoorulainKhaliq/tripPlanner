const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

const marker = buildMarker("activities", [-74.009151, 40.705086]);
marker.addTo(map);

mapboxgl.accessToken = 'pk.eyJ1IjoicGx1Y2tlcjE4IiwiYSI6ImNqOGJ0bWxyZjAxeGYyd3A1ZHVkMmZreTIifQ.S_nPZraCXSLQ6J6bJ3zi_g';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
