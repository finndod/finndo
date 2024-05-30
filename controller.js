mapboxgl.accessToken =
  "pk.eyJ1IjoibmFtaGFpcXUiLCJhIjoiY2x3N3hxc2F1MWZxbTJtcnpoaWIzNHNqbyJ9.pqFAMHce7XsTP_tH_p10tQ";


// Initialize the Mapbox map
let map = new mapboxgl.Map({
  container: "map", // HTML container ID for the map
  style: "mapbox://styles/mapbox/streets-v11", // Map style URL
  center: [10.75194559095554, 59.911011088089296], // Initial map center [longitude, latitude]
  zoom: 14, // Initial map zoom level
  preserveDrawingBuffer: true // Preserve the drawing buffer to maintain map state
});


map.on('load', function() {
  // Get user's current position as start point
  navigator.geolocation.getCurrentPosition(function(position) {
    var start = [position.coords.longitude, position.coords.latitude];
    var end;
  });

  if (navigator.geolocation) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLocation = [position.coords.longitude, position.coords.latitude];

      console.log(userLocation); // Logs the user's location

    });
  }
});
// Define the directions text in different languages
const directionsText = {
  en: "Next step: Turn left on Main Street.",
  no: "Neste steg: Ta til venstre på Hovedgaten."
};

// Event listener for the "Apply Language" button
document.getElementById('applyLanguage').addEventListener('click', function() {
  const selectedLanguage = document.getElementById('languageSelect').value;
  const directionsDiv = document.getElementById('directions');
  // Update the directions text based on the selected language
  directionsDiv.textContent = directionsText[selectedLanguage];
});


// Add navigation controls to the map (zoom and rotation)
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

// Define points of interest (admin points) with coordinates, descriptions, and custom images
const adminPoints = [
  {
    coordinates: [10.7386, 59.9074],
    description: "Akershus Fortress",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7426, 59.9280],
    description: "St. Hanshaugen Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.6992, 59.9281],
    description: "Frogner Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7542, 59.9143],
    description: "do 1",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7647, 59.9237],
    description: "Sofienberg Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7594, 59.9275],
    description: "Birkelunden Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7014, 59.9264],
    description: "Vigeland Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7528, 59.9111],
    description: "Oslo Central Station",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7590, 59.9026],
    description: "Ekebergparken",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7670, 59.9185],
    description: "Botanical Garden",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7819, 59.9193],
    description: "Tøyenbadet",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7597, 59.9083],
    description: "Opera House",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7579, 59.9127],
    description: "Aker Brygge",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7406, 59.9128],
    description: "Karl Johans Gate (main street)",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7709, 59.9140],
    description: "Grønland Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7731, 59.9159],
    description: "Kampen Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7404, 59.9138],
    description: "National Theatre",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7409, 59.9176],
    description: "Palace Park (Slottsparken)",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7790, 59.9310],
    description: "Tøyen Park",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7393, 59.9206],
    description: "Stensparken",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
  {
    coordinates: [10.7197, 59.9296],
    description: "Majorstuen (near public transport hub)",
    imageUrl: "https://i.pinimg.com/736x/32/d5/b0/32d5b098ae45df5ad62a2560c99aae61.jpg",
  },
];



// Get the content-block div
const contentBlock = document.querySelector('.content-block');

// Function to calculate the distance between two coordinates using the Haversine formula
function calculateDistance(coord1, coord2) {
  const [lon1, lat1] = coord1;
  const [lon2, lat2] = coord2;

  const R = 6371e3; // Radius of the Earth in meters
  const φ1 = lat1 * Math.PI / 180; // Convert latitude 1 to radians
  const φ2 = lat2 * Math.PI / 180; // Convert latitude 2 to radians
  const Δφ = (lat2 - lat1) * Math.PI / 180; // Difference in latitude
  const Δλ = (lon2 - lon1) * Math.PI / 180; // Difference in longitude

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  return distance;
}

function updateDistances(userLocation) {
  // Clear the content-block div before updating
  contentBlock.innerHTML = '';

  // Calculate distances for all adminPoints
  const adminPointsWithDistances = adminPoints.map(point => {
    const distance = calculateDistance(userLocation, point.coordinates);
    return { ...point, distance };
  });

  // Sort adminPoints by distance
  adminPointsWithDistances.sort((a, b) => a.distance - b.distance);

  // Loop through sorted adminPoints and display them
  adminPointsWithDistances.forEach(point => {
    // Create elements for the current point
    const adminLink = document.createElement('a');
    adminLink.href = '#';
    adminLink.className = 'popAdress';
    adminLink.textContent = point.description;

    const distancePara = document.createElement('p');
    distancePara.className = 'distanceAdress';
    // Display distance with appropriate unit
    const distanceText = point.distance < 1000 ? `${Math.round(point.distance)} meters` : `${(point.distance / 1000).toFixed(2)} km`;
    distancePara.textContent = distanceText;

    // Append elements for the current point to the content-block div
    contentBlock.appendChild(adminLink);
    contentBlock.appendChild(distancePara);

    adminLink.addEventListener('click', () => {
      // When clicked, calculate the route from userLocation to point.coordinates
      setRouteFromStartToEnd(userLocation, point.coordinates);
    });
  });
}



// Call the updateDistances function with the user's location once it's available
navigator.geolocation.getCurrentPosition(function(position) {
  const userLocation = [position.coords.latitude, position.coords.longitude];
  updateDistances(userLocation);
});

// Initialize variables for user location and marker
var userMarker;
var chosenDestination = null;
var userLocation = null;
var trackUser = true;
let routeCoordinates = [];

// Function to create a marker that moves along the route
function createMovingMarkerAlongRoute() {
  let currentIndex = 0; // Current index of the coordinate
  const totalCoordinates = routeCoordinates.length;

  // Function to move the marker along the route
  function moveMarker() {
    userMarker.setLngLat(routeCoordinates[currentIndex]); // Set marker position
    currentIndex++; // Move to the next coordinate
    if (currentIndex >= totalCoordinates) {
      currentIndex = 0; // Restart from the beginning when reaching the end
    }
    setTimeout(moveMarker, 1000); // Move marker every 1 second (adjust as needed)
  }

  // Start moving the marker
  moveMarker();
}

// Function to handle user location updates
function handleUserLocation(position) {
  const userLocation = [position.coords.longitude, position.coords.latitude];

  if (!userMarker) {
    const el = document.createElement('div');
    el.className = 'user-marker';
    el.style.backgroundImage = 'url(https://cdn0.iconfinder.com/data/icons/map-36/20/marker_person-512.png)';
    el.style.width = '50px';
    el.style.height = '50px';
    el.style.backgroundSize = 'cover';

    userMarker = new mapboxgl.Marker(el)
      .setLngLat(userLocation)
      .addTo(map);
  } else {
    userMarker.setLngLat(userLocation);
  }

  // If a destination is chosen, set the route
  const destination = [10.7386, 59.9074]; // Example destination coordinates
// Function to get the route between user location and destination
function getRoute(start, end) {
  const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      routeCoordinates = data.routes[0].geometry.coordinates;
      if (!map.getSource('route')) {
        // Add source and layer for the route
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: routeCoordinates
            }
          }
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
      } else {
        // Update the existing source data for the route
        map.getSource('route').setData({
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: routeCoordinates
          }
        });
      }

      createMovingMarkerAlongRoute(); // Start moving the marker along the route
    })
    .catch(error => {
      console.error('Error fetching route:', error);
    });
}

}

// Get the user's current position as start point
navigator.geolocation.getCurrentPosition(handleUserLocation, error => {
  console.error('Error getting user location:', error);
});


// Function to calculate the shortest distance from a point to a route
function calculateDistanceToRoute(userLocation, routeCoordinates) {
  let closestDistance = Infinity;
  for (let i = 0; i < routeCoordinates.length - 1; i++) {
    const segmentStart = routeCoordinates[i];
    const segmentEnd = routeCoordinates[i + 1];
    const distance = turf.pointToLineDistance(turf.point(userLocation), turf.lineString([segmentStart, segmentEnd]), { units: 'meters' });
    if (distance < closestDistance) {
      closestDistance = distance;
    }
  }
  return closestDistance;
}
// Function to get the route between user location and destination
function getRoute(start, end) {
  const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const route = data.routes[0].geometry.coordinates;
      map.getSource('route').setData({
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      });
      chosenDestination = end;
    });
}

// Add source and layer for the route
map.on('load', () => {
  map.addSource('route', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: []
      }
    }
  });

  map.addLayer({
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#3887be',
      'line-width': 5,
      'line-opacity': 0.75
    }
  });
});
// Add source and layer for the route
map.on('load', () => {
  map.addSource('route', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: []
      }
    }
  });

  map.addLayer({
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#3887be',
      'line-width': 5,
      'line-opacity': 0.75
    }
  });
});

// Loop through all adminPoints to add markers and popups
adminPoints.forEach((point) => {
  // Create a marker element
  var markerElement = document.createElement("div");
  markerElement.className = "custom-marker";

  // Create an image element for the marker
  var img = document.createElement("img");
  img.src = point.imageUrl; // Set the image URL
  img.style.width = "50px"; // Set the image width
  img.style.height = "50px"; // Set the image height
  markerElement.appendChild(img);

  // Create a marker with the custom element
  const marker = new mapboxgl.Marker(markerElement)
    .setLngLat(point.coordinates) // Set the marker's coordinates
    .addTo(map); // Add the marker to the map

  // Create a popup with the description and button
  const popupContent = document.createElement('div');
  popupContent.innerHTML = `<h3>${point.description}</h3><button class="navigateBtn">Navigate</button>`;

  // Add a popup to the marker
  const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupContent);
  marker.setPopup(popup);

  // Add click event listener to the navigate button inside the popup
  popupContent.querySelector(".navigateBtn").addEventListener("click", () => {
    setRouteFromStartToEnd(userLocation, point.coordinates);
  });
});


flyToUserLocation();


  // If the user's location is known, set the route
  if (userLocation) {
    setRouteFromStartToEnd(userLocation, chosenDestination); // Update this line
    map.flyTo({
      center: userLocation,
      zoom: 22,
    });
  }


// Initialize Mapbox Directions plugin
var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken, // Mapbox access token
  unit: "metric", // Unit of measurement for distances
  profile: "mapbox/walking", // Routing profile (walking)
  interactive: false, // Make the directions control non-interactive
  language: "norsk",
});

// Add the directions control to the map

// Event listener for changes to the origin in the directions control
directions.on("origin", function (event) {
  if (event.feature) {
    // Check if the new origin matches the user's location
    if (
      event.feature.geometry.coordinates[0] === userLocation[0] &&
      event.feature.geometry.coordinates[1] === userLocation[1]
    ) {
      trackUser = true; // Enable user tracking if the origin is the user's location
    } else {
      trackUser = false; // Disable user tracking if the origin is different
    }
  } else {
    // Enable user tracking if the origin input is cleared
    trackUser = true;
    if (userLocation) {
      // Manually set the origin to the user's location
      directions.setOrigin(userLocation);
    }
  }
});
let marker; // Declare marker variable in the global scope to keep track of it

// Function to update the marker position along the route
function updateMarkerAlongRoute(coordinate) {
  // If marker doesn't exist, create one
  if (!marker) {
    const el = document.createElement('div');
    el.className = 'marker';
    el.className = 'custom-marker'; // Assign a custom class
    el.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/005/971/822/original/race-start-point-flat-icon-of-start-line-vector.jpg)'; // Set the custom image
    el.style.width = '50px'; // Set the width of the marker
    el.style.height = '50px'; // Set the height of the marker
    el.style.backgroundSize = 'cover'; // Ensure the image covers the entire div

    marker = new mapboxgl.Marker(el)
      .setLngLat(coordinate)
      .addTo(map);
  } else {
    // Update the existing marker's position
    marker.setLngLat(coordinate);
  }
}

// Function to continuously update the marker position based on the user's location
function trackUserLocation() {
  // Check if geolocation is available
  if ('geolocation' in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = [position.coords.longitude, position.coords.latitude];
      updateMarkerAlongRoute(userLocation); // Update the marker position with the user's location
    }, error => {
      console.error('Error getting user location:', error);
    });
  } else {
    console.error('Geolocation is not supported.');
  }
}

// Call the trackUserLocation function to start tracking the user's location
trackUserLocation();


// Variable to store the current route
let currentRoute = null;

// Function to set the route from start to end point
function setRouteFromStartToEnd(start, end) {
  const url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + encodeURIComponent(start[0]) + ',' + encodeURIComponent(start[1]) + ';' + encodeURIComponent(end[0]) + ',' + encodeURIComponent(end[1]) + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data.routes || !data.routes.length) {
        throw new Error("No routes found");
      }

      const route = data.routes[0].geometry.coordinates;
      const steps = data.routes[0].legs[0].steps;

      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      // Check if the route source already exists, update it if it does, otherwise add it
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      } else {
        map.addSource('route', {
          type: 'geojson',
          data: geojson
        });

        // Add a new layer using the data source.
        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          paint: {
            'line-color': '#888',
            'line-width': 8
          }
        });
      }
      flyToUserLocation();

      // Update the current route
      currentRoute = route;

      // Set the trackUser flag to true to enable continuous tracking
      trackUser = true;

      // Function to update directions step by step
      function updateStep() {
        if (steps.length > 0) {
          const step = steps.shift(); // Get the next step
          document.getElementById('directions').innerHTML = `Next step: ${step.maneuver.instruction}`;

          // Monitor the distance to the next step
          const interval = setInterval(() => {
            const distance = calculateDistance(userLocation, step.maneuver.location);
            if (distance < 20) { // Change step when within 20 meters
              clearInterval(interval);
              updateStep(); // Update to the next step
            }
          }, 1000); // Check distance every second
        } else {
          document.getElementById('directions').innerHTML = 'You have arrived at your destination.';
        }
      }

      updateStep(); // Start updating steps

      // Update the content of the estimate div with the adjusted distance text
      const distance = data.routes[0].distance;
      const distanceText = distance >= 1000 ? `${(distance / 1000).toFixed(2)} km` : `${Math.round(distance)} meters`;
      const duration = Math.round(data.routes[0].duration / 60);
      document.getElementById('estimate').innerHTML = `Distance: ${distanceText}, Duration: ${duration} minutes`;

      // Ensure the route exists before trying to update the marker position
      if (route && route.length > 0) {
        updateMarkerAlongRoute(route[0]); // Update the marker position to the start of the route
      }
    })
    .catch(error => {
      console.error('Error fetching route:', error);
      document.getElementById('directions').innerHTML = 'Error fetching route. Please try again.';
    });
}

// Function to continuously update the route as the user follows it
function updateRoute() {
  if (currentRoute && userLocation) {
    // Find the index of the coordinate closest to the user's current location
    let closestIndex = 0;
    let closestDistance = Infinity;
    for (let i = 0; i < currentRoute.length; i++) {
      const distance = calculateDistance(userLocation, currentRoute[i]);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    // Remove all coordinates before the closest index
    currentRoute = currentRoute.slice(closestIndex);

    // Update the route source data
    map.getSource('route').setData({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: currentRoute
      }
    });
  }
}


// Call the updateRoute function to start updating the route
setInterval(updateRoute, 500); // Update the route every 0.5 seconds







if (navigator.geolocation) {
  var watchId = navigator.geolocation.watchPosition(
    (position) => {
      userLocation = [position.coords.longitude, position.coords.latitude];
      updateDistances(userLocation);

      if (userMarker) {
        userMarker.remove();
      }
      var el = document.createElement("img");
      el.src = "https://photos.peopleimages.com/picture/202305/2829513-idea-pointing-and-portrait-of-black-man-for-question-and-deal-on-an-isolated-and-transparent-png-background.-target-solution-and-sales-with-hand-gesture-of-guy-for-discount-decision-and-choice-fit_400_400.jpg";
      el.style.width = "50px";
      el.style.height = "50px";
      userMarker = new mapboxgl.Marker({ element: el })
        .setLngLat(userLocation)
        .addTo(map);

      if (chosenDestination) {
        getRoute(userLocation, chosenDestination);
      }
    },
    (error) => {
      console.error("Error watching position:", error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}


// Initialize variable to track recentering state
let recenterEnabled = false;

// Function to recenter the map to the user's location
function recenterMap() {
  // Check if geolocation is available
  if ('geolocation' in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = [position.coords.longitude, position.coords.latitude];
      console.log('New user location:', userLocation);
      map.flyTo({
        center: userLocation,
        zoom: 18, // Adjust the zoom level as needed
        essential: true // Allow the map to stay at the specified zoom level
      });
    }, error => {
      console.error('Error getting user location:', error);
    });
  } else {
    console.error('Geolocation is not supported.');
  }
}

// Function to toggle continuous recentering
function toggleContinuousRecentering() {
  if (recenterEnabled) {
    clearInterval(recenterInterval); // If enabled, stop recentering
  } else {
    recenterMap(); // Initial recentering
    // Start interval for continuous recentering
    recenterInterval = setInterval(recenterMap, 500); // Recenter every 500ms
  }
  recenterEnabled = !recenterEnabled; // Toggle the recentering flag
}

// Add event listener to toggle continuous recentering when button is clicked
document.getElementById('toggleRecenterButton').addEventListener('click', toggleContinuousRecentering);

// Function to fly to the user's location
function flyToUserLocation() {
  // Check if geolocation is supported by the browser
  if ('geolocation' in navigator) {
      // Get current position
      navigator.geolocation.getCurrentPosition(
          position => {
              // Extract latitude and longitude from the position
              const { latitude, longitude } = position.coords;

              // Fly to the user's current location
              map.flyTo({
                  center: [longitude, latitude],
                  essential: true // Ensures smoother animation
              });
          },
          error => {
              console.error('Error getting user location:', error);
              // Handle error, e.g., by showing an alert to the user
          }
      );
  } else {
      // Geolocation is not supported
      console.error('Geolocation is not supported by this browser.');
      // Handle this case, e.g., by showing a message to the user
  }
}