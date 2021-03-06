mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuemFsbGF1c21hbiIsImEiOiJjbDFwZGtzdTkwYmNkM2NsbXJ6NDgybXNlIn0.h_EXZnsLm1V1SAXdFddoHQ";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/dark-v10", // style URL
  //   center: [40.52, 34.34], // starting position [lng, lat]

  // Amman, Jordan [E, N]
  center: [35.930359, 31.963158],
  zoom: 9, // starting zoom
});

map.on("load", () => {
  map.addSource("places", {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Abʿaad Gallery قاعة ابعاد للفنون</strong><p><a href="#" target="_blank" title="Opens in a new window">The Gallery</a> is a distinctive cultural space in Amman, Jordan that exhibits and provides contemporary art by emerging and established visual artists.</p>',
            icon: "art-gallery-15",
          },
          geometry: {
            type: "Point",
            coordinates: [35.85241806009911, 31.97564209346125],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Centre Culturel Français  معهد الثقافة الفرانسي</strong>",
            icon: "museum-15",
          },
          geometry: {
            type: "Point",
            coordinates: [35.92717072597913, 31.955947399058193],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>National Gallery of Fine Arts  المتحف الوطني الاردني للفنون الجميلة</strong>",
            icon: "art-gallery-15",
          },
          geometry: {
            type: "Point",
            coordinates: [35.915247839674024, 31.95800444351338],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Royal Cultural Center</strong><p>The <a href="https://form.jordan.gov.jo/wps/portal/Home/GovernmentEntities/Ministries/Ministry/Ministry%20of%20Culture/Royal%20Cultural%20Center?current=true&nameEntity=Royal%20Cultural%20Center&entityType=sub" target="_blank" title="Opens in a new window">Royal Cultural Center</a> has contributed to the development of cultural, literary and artistic life; it has also helped in creating the right atmosphere for creativity, artistic work and the development of arts and literature in Jordan. Its establishment is a true expression of the country’s appreciation of creative expression and its requirements in terms of artistic, human and material resources. Such artistic and creative expression are considered important basis in the advancement of a nation and its people, and in leading them towards advancement, civilization and development.</p>',
            icon: "museum-15",
          },
          geometry: {
            type: "Point",
            coordinates: [35.90466987856409, 31.97776965171408],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
            icon: "bicycle-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-77.052477, 38.943951],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
            icon: "rocket-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-77.043444, 38.909664],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
            icon: "music-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-77.031706, 38.914581],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
            icon: "music-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-77.020945, 38.878241],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
            icon: "music-15",
          },
          geometry: {
            type: "Point",
            coordinates: [-77.007481, 38.876516],
          },
        },
      ],
    },
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    minzoom: 11,
    layout: {
      "icon-image": "{icon}",
      "icon-allow-overlap": true,
    },
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on("click", "places", (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on("mouseenter", "places", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
  });

  map.addControl(new mapboxgl.NavigationControl());
});
