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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const mapDataCollection = collection(db, "Map Data");
getDocs(mapDataCollection).then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
    const data = doc.data();
    const geopoint = data.geopoint;
    addMarker(geopoint.latitude,geopoint.longitude);
})
})
const textureLoader = new THREE.TextureLoader();

const markers = []; // Initialize markers array

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

const solarSystemGeometry = new THREE.SphereGeometry(10, 1, 1);
const solarSystemTexture = textureLoader.load('../assets/textures/starstexture.jpg', (texture) => {
    // Set texture filtering to prevent blurring
    // texture.minFilter = THREE.NearestFilter;
    // texture.magFilter = THREE.NearestFilter;
});

const solarSystemMaterial = new THREE.MeshBasicMaterial({ map: solarSystemTexture, side: THREE.BackSide });

const solarSystem = new THREE.Mesh(solarSystemGeometry, solarSystemMaterial);
scene.add(solarSystem);

const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const cloudGeometry = new THREE.SphereGeometry(2.03, 32, 32); // Slightly larger sphere for clouds

// const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('../assets/textures/earthtexture.jpg');
const cloudTexture = textureLoader.load('../assets/textures/cloudstexture.jpg');

const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const cloudMaterial = new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true, opacity: 0.5 });

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

scene.add(earth);
scene.add(clouds);

const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);

const markersContainer = new THREE.Object3D();
scene.add(markersContainer);

renderer.setClearColor(0xffffff);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add animation
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Earth and clouds
    earth.rotation.y += 0.003;
    clouds.rotation.y += 0.003;
    solarSystemTexture.offset.x += 0.0001;
    solarSystemTexture.offset.y += 0.0001;

    markersContainer.rotation.x = -earth.rotation.x;
    markersContainer.rotation.y = -earth.rotation.y;
    markersContainer.rotation.z = -earth.rotation.z;

    markers.forEach(marker => {
        const originalPosition = marker.userData.originalPosition;
        const rotatedPosition = rotatePoint(originalPosition, earth.rotation.y, earth.rotation.x, -earth.rotation.z);
        marker.position.set(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);
    });

    renderer.render(scene, camera);
}

// Function to rotate a point in 3D space
function rotatePoint(point, rotationYEarth, rotationYClouds) {
    const x = point.x * Math.cos(-(rotationYEarth + rotationYClouds)) - point.z * Math.sin(-(rotationYEarth + rotationYClouds));
    const z = point.x * Math.sin(-(rotationYEarth + rotationYClouds)) + point.z * Math.cos(-(rotationYEarth + rotationYClouds));
    return { x, y: point.y, z };
}

// Define the addMarker function
function addMarker(latitude, longitude) {
    // Convert latitude and longitude to spherical coordinates
    const phi = (90 - latitude) * (Math.PI / 180);
    const theta = (180 - longitude) * (Math.PI / 180);

    // Convert spherical coordinates to Cartesian coordinates
    const x = 2.1 * Math.sin(phi) * Math.cos(theta);
    const y = 2.1 * Math.cos(phi);
    const z = 2.1 * Math.sin(phi) * Math.sin(theta);
    const textureLoader = new THREE.TextureLoader();
    const iconTexture = textureLoader.load('../assets/textures/placeholder.png');

    // Create a sprite (marker) at the calculated position
    const markerMaterial = new THREE.SpriteMaterial({ map: iconTexture });
    const marker = new THREE.Sprite(markerMaterial);
    // Create a marker (sphere) at the calculated position
    marker.scale.set(0.3, 0.3, 0.1); // Increase size


    marker.position.set(x, y, z);
    marker.rotation.x = Math.PI / 2 - phi;
    marker.rotation.y = theta;

    // Store the original position for later reference
    marker.userData.originalPosition = { x, y, z };

    // Set a flag to identify the marker
    marker.userData.isMarker = true;

    markersContainer.add(marker);
    scene.add(marker);

    // Add marker to the markers array
    markers.push(marker);
}


// Mouse interaction
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

document.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        // const deltaZ = event.clientZ - previousMousePosition.z;

        // Update Earth and clouds rotation based on drag movement
        earth.rotation.x += deltaY * 0.005;
        earth.rotation.y += deltaX * 0.005;
        clouds.rotation.x += deltaY * 0.005;
        clouds.rotation.y += deltaX * 0.005;
        solarSystem.rotation.y += deltaY * 0.0009;
        solarSystem.rotation.x += deltaX * 0.0009;

        // Update marker positions based on Earth and clouds rotation
        // Update marker positions based on Earth and clouds rotation
        markers.forEach(marker => {
          const originalPosition = marker.userData.originalPosition;
          const rotatedPosition = rotatePoint(originalPosition, earth.rotation.y, clouds.rotation.y);
          marker.position.set(rotatedPosition.x, rotatedPosition.y);
        });


        renderer.render(scene, camera);

        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
});

animate();
