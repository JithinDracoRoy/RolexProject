import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "./config.js";
export { markersContainer };

// Your Firebase configuration


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const mapDataCollection = collection(db, "Map Data");
getDocs(mapDataCollection).then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
    const data = doc.data();
    const geopoint = data.geopoint;
    const image = data.textImage;
    const head = data.head;
    const body = data.text;
    addMarker(geopoint.latitude,geopoint.longitude);
    console.log(addMarker(geopoint.latitude,geopoint.longitude));
    document.addEventListener('mousedown', onMouseDown);
    // addContent(image, head, body);
})
});

const textureLoader = new THREE.TextureLoader(); // for loding textures

const markers = []; // Initialize markers array

const scene = new THREE.Scene(); //creating a scene of threejs

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer(); //create  an object
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement); //converts the mathematical representation of 
//3D objects and their properties into pixels that can be displayed on the screen.

const solarSystemGeometry = new THREE.PlaneGeometry(80, 80, 1, 1);


const solarSystemTexture = textureLoader.load('../assets/textures/starstexture.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4); 
});

const solarSystemMaterial = new THREE.MeshBasicMaterial({ map: solarSystemTexture, side: THREE.BackSide });


const solarSystem = new THREE.Mesh(solarSystemGeometry, solarSystemMaterial);
solarSystem.position.z = -5; // Move the solar system plane behind the Earth
solarSystem.rotation.x = Math.PI; // Rotate the plane 180 degrees to face the back
scene.add(solarSystem);


const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const cloudGeometry = new THREE.SphereGeometry(2, 32, 32); 


const earthTexture = textureLoader.load('../assets/textures/earthtexture.jpg');
const cloudTexture = textureLoader.load('../assets/textures/cloudstexture.jpg');

const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const cloudMaterial = new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true, opacity: 0.5 });

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

const globeContainer = document.getElementById('globe-container');

scene.add(earth);
scene.add(clouds); // add earth and clouds to the threejs scene
earth.position.set(0, 0, 0); // set origin

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const markersContainer = new THREE.Object3D();
scene.add(markersContainer);

renderer.setClearColor(0x000000);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

var isAnimating = true; // Initial animation state
var clickCount = 0; // Counter for click events

// Add a click event listener to the globe container
globeContainer.addEventListener('click', () => {
    clickCount++; // Increment the click count

    // Toggle animation state every two clicks
    if (clickCount % 2 === 0) {
        isAnimating = !isAnimating;

        if (isAnimating) {
            // Restart the animation
            animate();
        }
    }
});
// Add animation
function animate() {
    if (!isAnimating) {
        return; // Stop the animation if not in the animating state
    }
    requestAnimationFrame(animate); // create loop for animation for each interval.

    // Rotate the Earth and clouds
    earth.rotation.y += 0.001;   //earth's rotation along 
    clouds.rotation.y += 0.001;
    solarSystemTexture.offset.x += 0.003;
    solarSystemTexture.offset.y += 0.003;

    markersContainer.rotation.x = -earth.rotation.x;
    markersContainer.rotation.y = -earth.rotation.y;
    markersContainer.rotation.z = -earth.rotation.z;

    markers.forEach(marker => {
        const originalPosition = marker.userData.originalPosition;
        const rotatedPosition = rotatePoint(originalPosition, earth.rotation.y, earth.rotation.x, -earth.rotation.z);
        marker.position.set(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);
    });

    renderer.render(scene, camera); //rendering of the scene and camera.
}

// Function to rotate markers in 3D space according to the rotation of earth and clouds.
function rotatePoint(point, rotationYEarth, rotationYClouds) {
    const xEarth = point.x * Math.cos(-rotationYEarth) - point.z * Math.sin(-rotationYEarth); //newX=originalX⋅cos(angle)−originalZ⋅sin(angle)
    const zEarth = point.x * Math.sin(-rotationYEarth) + point.z * Math.cos(-rotationYEarth);

    const xClouds = xEarth * Math.cos(-rotationYClouds) - point.y * Math.sin(-rotationYClouds);
    const yClouds = xEarth * Math.sin(-rotationYClouds) + point.y * Math.cos(-rotationYClouds);

    return { x: xClouds, y: yClouds, z: zEarth };
}


// Define the addMarker function
function addMarker(latitude, longitude) {
    console.log(latitude,longitude);
    // Convert latitude and longitude to spherical coordinates
    const phi = (90 - latitude) * (Math.PI / 180);
    const theta = (180 - longitude) * (Math.PI / 180)+(Math.PI);

    // Convert spherical coordinates to Cartesian coordinates
    const x = 2.07 * Math.sin(phi) * Math.cos(theta);
    const y = 2.07 * Math.cos(phi);
    const z = 2.07 * Math.sin(phi) * Math.sin(theta);
    console.log(x,y,z);
    // const textureLoader = new THREE.TextureLoader();
    const iconTexture = textureLoader.load('../assets/globemarker.png');

    
    const markerMaterial = new THREE.SpriteMaterial({ map: iconTexture });// Create a sprite (marker) at the calculated position
    const marker = new THREE.Sprite(markerMaterial);// Create a marker at the calculated position
    marker.scale.set(0.3, 0.3, 0.1); // Increase size


    marker.position.set(x, y, z);
    // marker.rotation.x = Math.PI / 2 - phi;
    // marker.rotation.y = theta;
    document.body.style.cursor = 'pointer'; // Change cursor to pointer when hovering over the marker


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

let previousMousePosition = { x: 0, y: 0 };
// Mouse interaction
let isDragging = false;
let allowDragging = true;

// Add an event listener to the globe container instead of the document

globeContainer.addEventListener('mousedown', (event) => {
    if (!allowDragging || isMouseOverMarker(event)) {
        event.preventDefault(); // Prevent dragging if clicking on a marker
        return;
    }
    else{
    isDragging = true;
    document.body.style.cursor = 'grabbing';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'grab';
});

globeContainer.addEventListener('mousemove', (event) => {
    if (isDragging || isMouseOverMarker(event)) {
        event.preventDefault();
        return;
    }

    // Handle other mousemove logic if needed
});

// Function to check if the mouse is over a marker
function isMouseOverMarker(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Use document.elementsFromPoint or document.elementFromPoint based on browser support
    const elements = document.elementsFromPoint(mouseX, mouseY);

    // Check if any of the elements are markers
    for (const element of elements) {
        if (element.classList.contains('marker')) {
            document.body.style.cursor = 'pointer'; // Change cursor to pointer when hovering over the marker
            return true;
        }
    }

    document.body.style.cursor = 'default'; // Change cursor back to default when leaving the marker
    return false;
}

globeContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
});

globeContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

globeContainer.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = 0;  // Set deltaY to zero to disable Y-axis movement
        // const deltaZ = event.clientZ - previousMousePosition.z;

        // Update Earth and clouds rotation based on drag movement
        earth.rotation.x += deltaY * 0.005;
        earth.rotation.y += deltaX * 0.005;
        clouds.rotation.x += deltaY * 0.005;
        clouds.rotation.y += deltaX * 0.005;

        // Update marker positions based on Earth and clouds rotation
        markers.forEach(marker => {
            const originalPosition = marker.userData.originalPosition;
            const rotatedPosition = rotatePoint(originalPosition, earth.rotation.y, clouds.rotation.y);
            marker.position.set(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);
        });
        
        // Add event listeners outside the loop
        markers.forEach(marker => {
           
                document.body.style.cursor = 'pointer'; // Change cursor to pointer when hovering over the marker// Change cursor back to default when leaving the marker
        });
        
        renderer.render(scene, camera);
        
        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
});


animate();

// Assuming you have a camera and a renderer defined in your code
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const box = document.getElementById('box');
// Assuming you have a markers array containing your marker objects


// document.addEventListener('mousedown', onMouseDown);


function onMouseDown(event) {
    // Calculate normalized device coordinates (NDC)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate intersections with the markers
    const intersects = raycaster.intersectObjects(markers, true);

    // Check if there are any intersections
    if (intersects.length > 0) {
        // An intersection occurred, get the clicked marker
        const clickedMarker = intersects[0].object;

        // Extract latitude and longitude from the clicked marker's position
        const { x, y, z } = clickedMarker.position;

        // Adjust for the offset introduced in the addMarker function
        const latitude = (90 - Math.acos(y / 2.07) * (180 / Math.PI)).toFixed(2);
        const longitude = ((Math.atan2(z, x) * (180 / Math.PI) + 360) % 360 - 180).toFixed(2);

        console.log('Marker clicked:', clickedMarker);
        console.log('Latitude:', latitude, 'Longitude:', longitude);

        // If you have access to the marker's original data, you can log it
        if (clickedMarker.userData.isMarker) {
            console.log('Marker Data:', clickedMarker.userData);
        }

        // Query Firebase based on latitude
        const mapDataCollection = collection(db, "Map Data");
        const latitudesArray = []; // Array to store geopoint latitudes

        getDocs(mapDataCollection).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const geopoint = doc.data().geopoint;
                const docLatitude = geopoint.latitude.toFixed(1);

                // Push each latitude to the array
                latitudesArray.push(docLatitude);

                // Compare the rounded latitude with the clicked latitude
                if (docLatitude === latitude) {
                    // Match found, call addContent function with Firebase data
                    const image = doc.data().textImage;
                    const head = doc.data().head;
                    const body = doc.data().text;
                    addContent(image, head, body);
                }
            });

            // Find the closest latitude in the array
            const closestLatitude = findClosestLatitude(latitudesArray, parseFloat(latitude));

            // Find the index of the closest latitude in the array
            const index = latitudesArray.indexOf(closestLatitude);

            // Access the corresponding document in the collection
            const closestDoc = querySnapshot.docs[index];

            // Extract data from the closest document
            const image = closestDoc.data().textImage;
            const head = closestDoc.data().head;
            const body = closestDoc.data().text;

            // Call addContent function with Firebase data
            addContent(image, head, body);
        });

        box.classList.add('show');
    }
}

// Function to find the closest latitude in the array
function findClosestLatitude(array, value) {
    return array.reduce(function (prev, curr) {
        return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    });
}




const addContent = (image,head,body) =>{
    document.getElementById("head").innerHTML = `${head}`;
    document.getElementById("body").innerHTML = `${body}`;
    document.getElementById("imageSrc").src = `${image}`;
    document.getElementById("imageSrc").style.width = '200px';
    document.getElementById("imageSrc").style.height = '250px';
    console.log(`image:${image},head:${head},body:${body}`);
    
}