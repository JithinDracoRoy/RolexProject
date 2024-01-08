import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
export { map };
export { storeLocator };
export { fetchFirestoreGeopoints };
export { customIcon };
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

const map = L.map('map');
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    minZoom: 3,
    noWrap: true 
            }).addTo(map);
L.control.zoom({ position: 'bottomright' }).addTo(map);

const customIcon = L.icon({
  iconUrl: '../assets/darkgreenmarker.png', // Replace with the path to your custom icon image
  iconSize: [25, 25], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
            });

const gMapIcon = null;

function storeLocator()
{
  map.setView([52.6313102,1.292898], 13);
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
      },
      function (error) {
        map.setView([52.6313102,1.292898], 13);
        console.error(`Error getting user location: ${error.message}`);
      }
    );
  } else {
    // Geolocation is not supported
    console.error("Geolocation is not supported by this browser.");
    map.setView([52.6313102,1.292898], 13);
        console.error(`Error getting user location: ${error.message}`);
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
                 
                    // Print latitude and longitude to console
                    console.log(`Document ID: ${doc.id}, Latitude: ${geopoint.latitude}, Longitude: ${geopoint.longitude}, name:${name}, place:${place}`);
                    
                     
                    const marker = L.marker([geopoint.latitude, geopoint.longitude],{icon: customIcon});
                    marker.addTo(map)
                        .bindPopup(`<b>${name}</b><br>${place}`);
                    marker.on('click',function(){
                      map.setView([geopoint.latitude, geopoint.longitude], 15);
                      document.getElementById("storename").innerHTML = `${name}`;
                      document.getElementById("storeplace").innerHTML = `${place}`;
                      document.getElementById("storeimage").src = `${image}`;
                      document.getElementById("storeimage").style.width = '350px';
                      document.getElementById("storeimage").style.height = '250px';
                      document.getElementById("storeaddress").innerHTML = `${address}`;
                      document.getElementById("map-content").style.display='block';
                      document.getElementById("mail-icon").style.display='block';
                      const gMapIcon = document.getElementById("g-map-icon");
                      console.log(gMapIcon);
                      if (gMapIcon) 
                        console.log(geopoint);
                        gMapIcon.addEventListener('click', function() {
                          // geopoint.forEach(()=>{
                            calculateDirections(geopoint._lat, geopoint._long);
                            console.log(geopoint._lat, geopoint._long);
                          });
                        // });
                      

                    })
                } else {
                    console.warn(`Invalid or missing geopoint data in document: ${doc.id}`);
                }
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });

}

function calculateDirections(destinationLatitude, destinationLongitude) {
  const destination = `${destinationLatitude},${destinationLongitude}`;
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  window.open(mapUrl, '_blank'); // Open the URL in a new tab/window
}

