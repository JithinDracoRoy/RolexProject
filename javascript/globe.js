import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "./config.js";
export { markersContainer };




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const mapDataCollection = collection(db, "Map Data");
getDocs(mapDataCollection).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const geopoint = data.geopoint;

        addMarker(geopoint.latitude, geopoint.longitude);
        console.log(addMarker(geopoint.latitude, geopoint.longitude));
        document.addEventListener('mousedown', onMouseDown);

    })
});

const textureLoader = new THREE.TextureLoader();

const markers = []; // Initialize markers array

const scene = new THREE.Scene(); //creating a scene of threejs

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer(); //create  an object
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

const solarSystemGeometry = new THREE.PlaneGeometry(80, 80, 1, 1);


const solarSystemTexture = textureLoader.load('../assets/textures/starstexture.jpg', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
});

const solarSystemMaterial = new THREE.MeshBasicMaterial({ map: solarSystemTexture, side: THREE.BackSide });


const solarSystem = new THREE.Mesh(solarSystemGeometry, solarSystemMaterial);
solarSystem.position.z = -5;
solarSystem.rotation.x = Math.PI;
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

var isAnimating = true;
var clickCount = 0;


globeContainer.addEventListener('click', () => {
    clickCount++;


    if (clickCount % 2 === 0) {
        box.classList.remove('show');

    }
});

function animate() {
    if (!isAnimating) {
        return;
    }
    requestAnimationFrame(animate);


    earth.rotation.y += 0.001;
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


function rotatePoint(point, rotationYEarth, rotationYClouds) {
    const xEarth = point.x * Math.cos(-rotationYEarth) - point.z * Math.sin(-rotationYEarth); //newX=originalX⋅cos(angle)−originalZ⋅sin(angle)
    const zEarth = point.x * Math.sin(-rotationYEarth) + point.z * Math.cos(-rotationYEarth);

    const xClouds = xEarth * Math.cos(-rotationYClouds) - point.y * Math.sin(-rotationYClouds);
    const yClouds = xEarth * Math.sin(-rotationYClouds) + point.y * Math.cos(-rotationYClouds);

    return { x: xClouds, y: yClouds, z: zEarth };
}



function addMarker(latitude, longitude) {
    console.log(latitude, longitude);

    const phi = (90 - latitude) * (Math.PI / 180);
    const theta = (180 - longitude) * (Math.PI / 180) + (Math.PI);

    const x = 2.07 * Math.sin(phi) * Math.cos(theta);
    const y = 2.07 * Math.cos(phi);
    const z = 2.07 * Math.sin(phi) * Math.sin(theta);
    console.log(x, y, z);

    const iconTexture = textureLoader.load('../assets/globemarker.png');


    const markerMaterial = new THREE.SpriteMaterial({ map: iconTexture });// Create a sprite (marker) at the calculated position
    const marker = new THREE.Sprite(markerMaterial);// Create a marker at the calculated position
    marker.scale.set(0.3, 0.3, 0.1); // Increase size


    marker.position.set(x, y, z);

    document.body.style.cursor = 'pointer';


    marker.userData.originalPosition = { x, y, z };


    marker.userData.isMarker = true;

    markersContainer.add(marker);
    scene.add(marker);


    markers.push(marker);
}



let previousMousePosition = { x: 0, y: 0 };

let isDragging = false;
let allowDragging = true;



globeContainer.addEventListener('mousedown', (event) => {
    if (!allowDragging || isMouseOverMarker(event)) {
        event.preventDefault();
        return;
    }
    else {
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


});


function isMouseOverMarker(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;


    const elements = document.elementsFromPoint(mouseX, mouseY);


    for (const element of elements) {
        if (element.classList.contains('marker')) {
            document.body.style.cursor = 'pointer';
            return true;
        }
    }

    document.body.style.cursor = 'default';
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
        const deltaY = 0;


        earth.rotation.x += deltaY * 0.005;
        earth.rotation.y += deltaX * 0.005;
        clouds.rotation.x += deltaY * 0.005;
        clouds.rotation.y += deltaX * 0.005;


        markers.forEach(marker => {
            const originalPosition = marker.userData.originalPosition;
            const rotatedPosition = rotatePoint(originalPosition, earth.rotation.y, clouds.rotation.y);
            marker.position.set(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);
        });


        markers.forEach(marker => {

            document.body.style.cursor = 'pointer';
        });

        renderer.render(scene, camera);

        previousMousePosition = { x: event.clientX, y: event.clientY };
    }
});


animate();


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const box = document.getElementById('box');






function onMouseDown(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;


    raycaster.setFromCamera(mouse, camera);


    const intersects = raycaster.intersectObjects(markers, true);


    if (intersects.length > 0) {

        const clickedMarker = intersects[0].object;


        const { x, y, z } = clickedMarker.position;


        const latitude = (90 - Math.acos(y / 2.07) * (180 / Math.PI)).toFixed(2);
        const longitude = ((Math.atan2(z, x) * (180 / Math.PI) + 360) % 360 - 180).toFixed(2);

        console.log('Marker clicked:', clickedMarker);
        console.log('Latitude:', latitude, 'Longitude:', longitude);


        if (clickedMarker.userData.isMarker) {
            console.log('Marker Data:', clickedMarker.userData);
        }


        const mapDataCollection = collection(db, "Map Data");
        const latitudesArray = [];

        getDocs(mapDataCollection).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const geopoint = doc.data().geopoint;
                const docLatitude = geopoint.latitude.toFixed(1);


                latitudesArray.push(docLatitude);

                if (docLatitude === latitude) {

                    const image = doc.data().textImage;
                    const head = doc.data().head;
                    const body = doc.data().text;
                    addContent(image, head, body);
                }
            });


            const closestLatitude = findClosestLatitude(latitudesArray, parseFloat(latitude));


            const index = latitudesArray.indexOf(closestLatitude);


            const closestDoc = querySnapshot.docs[index];


            const image = closestDoc.data().textImage;
            const head = closestDoc.data().head;
            const body = closestDoc.data().text;


            addContent(image, head, body);
        });

        box.classList.add('show');
    }
}


function findClosestLatitude(array, value) {
    return array.reduce(function (prev, curr) {
        return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
    });
}


const addContent = (image, head, body) => {
    document.getElementById("head").innerHTML = `${head}`;
    document.getElementById("body").innerHTML = `${body}`;
    document.getElementById("imageSrc").src = `${image}`;
    document.getElementById("imageSrc").style.width = '200px';
    document.getElementById("imageSrc").style.height = '250px';
    console.log(`image:${image},head:${head},body:${body}`);

}