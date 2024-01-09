import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62"
};

document.addEventListener('DOMContentLoaded', function() {
  storeLocator();
});

function storeLocator()
{
  
  var map = L.map('map').setView([52.6313102,1.292898], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map);
  fetchFirestoreGeopoints(map); 
  if ("geolocation" in navigator) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Access the latitude and longitude from the position object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        map.setView([latitude, longitude], 5);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        fetchFirestoreGeopoints(map);
      },
      function (error) {
        map.setView([52.6313102,1.292898], 13);
        console.error(`Error getting user location: ${error.message}`);
        fetchFirestoreGeopoints(map);
      }
    );
  } else {
    // Geolocation is not supported
    console.error("Geolocation is not supported by this browser.");
    map.setView([52.6313102,1.292898], 13);
        console.error(`Error getting user location: ${error.message}`);
        fetchFirestoreGeopoints(map);
  }
}


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch and display Firestore geopoints
function fetchFirestoreGeopoints(map) {
    const mapDataCollection = collection(db, "Map Data");
    getDocs(mapDataCollection)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();

                // Assuming each document has a field named "geopoint"
                const geopoint = data.geopoint;
                const name = data.name;
                const place = data.place;
                const image = data.image;
                const address = data.address;

                if (geopoint && geopoint.latitude && geopoint.longitude) {
                  map.on('moveend', function () {
                    // Get the current map bounds
                    var bounds = map.getBounds();
                
                    // Fetch and display stores within the current map bounds
                    fetchAndDisplayStoresInBounds(bounds);
                });
                function fetchAndDisplayStoresInBounds(bounds) {
                  document.getElementById("storename").innerHTML = `${name}`;
                  document.getElementById("storeplace").innerHTML = `${place}`;
                }
                    // Print latitude and longitude to console
                    console.log(`Document ID: ${doc.id}, Latitude: ${geopoint.latitude}, Longitude: ${geopoint.longitude}, name:${name}, place:${place}`);

                    // You can also add markers to the map if needed
                    var customIcon = L.icon({
                        iconUrl: '../assets/locationicon.gif', // Replace with the path to your custom icon image
                        iconSize: [32, 32], // Size of the icon
                        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
                        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
                      });
                    const marker = L.marker([geopoint.latitude, geopoint.longitude], { icon: customIcon });
                    marker.addTo(map)
                        .bindPopup(`<b>${name}</b><br>${place}`);
                    marker.on('click',function(){
                      map.setView([geopoint.latitude, geopoint.longitude], 15);
                      document.getElementById("storename").innerHTML = `${name}`;
                      document.getElementById("storeplace").innerHTML = `${place}`;
                      document.getElementById("storeimage").src = `${image}`;
                      document.getElementById("storeimage").style.width = '400px';
                      document.getElementById("storeimage").style.height = '250px';
                      document.getElementById("storeaddress").innerHTML = `${address}`;
                    })
                } else {
                    console.warn(`Invalid or missing geopoint data in document: ${doc.id}`);
                }
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });

        document.addEventListener('DOMContentloaded', function() {
          const gMapIcon = document.getElementById("g-map-icon");
          console.log(gMapIcon);
        
          // Check if the element exists before adding the click event listener
          if (gMapIcon) {
            console.log("exists");
            gMapIcon.addEventListener('click', function() {
              const mapUrl = `http://maps.google.co.uk/maps?q=${geopoint.latitude},${geopoint.longitude}`;
              window.open(mapUrl, '_blank'); // Open the URL in a new tab/window
            });
          }
        });
}

