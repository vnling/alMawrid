mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuemFsbGF1c21hbiIsImEiOiJjbDFwZGtzdTkwYmNkM2NsbXJ6NDgybXNlIn0.h_EXZnsLm1V1SAXdFddoHQ";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [74.36, 31.52], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
