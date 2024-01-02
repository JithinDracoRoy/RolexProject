import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const oyesterwatch = doc(db, "Oyester", "videos");
const oyesterwatch1=doc(db,"Oyester","images");

const videoElement1 = document.getElementById("firstVedio");
const videoSourceElement1 = document.getElementById("videoSource1");
const videoElement2 = document.getElementById("secondvideo");
const videoElement3 = document.getElementById("thirdvideo");
const videoSourceElement3 = document.getElementById("videoSource3");
const imageElement1 = document.getElementById("greenimage");
const imageElement2 = document.getElementById("blueimage");
const imageElement3 = document.getElementById("manimage");
const imageElement4 = document.getElementById("womanimage");



 
// Get the document data from Firestore
getDoc(oyesterwatch)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink1 = docSnapshot.data().video1;
      const videoLink2 = docSnapshot.data().video2;
      const videoLink3 = docSnapshot.data().video3;
      
      // Set the video source
      videoSourceElement1.src = videoLink1;
      videoElement2.src= videoLink2;
      videoSourceElement3.src = videoLink3;
      
      // Load the new source
      videoElement1.load();
      videoElement3.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  getDoc(oyesterwatch1)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      
      const imageLink1 = docSnapshot.data().image1;
      const imageLink2 = docSnapshot.data().image2;
      const imageLink3 = docSnapshot.data().image3;
      const imageLink4 = docSnapshot.data().image4;
      
      // Set the video source
    
      imageElement1.src=imageLink1;
      imageElement2.src=imageLink2;
      imageElement3.src=imageLink3;
      imageElement4.src=imageLink4;
    

      // Load the new source
  
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
function menuBar(x) {
  x.classList.toggle("change");
}

function showImage(imageId) {
    var imageElement = document.getElementById('imageone');
   
    switch (imageId) {
      case 'imageone':
        imageElement.src = "../assets/imgpos1-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,41";
        oyeone.innerHTML = "Oyster,41mm,Oystersteel";
        break;
      case 'imagetwo':
        imageElement.src = "../assets/imgpos2-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,36";
        oyeone.innerHTML = "Oyster,36mm,Oystersteel";
        break;
      case 'imagethree':
        imageElement.src = "../assets/imgpos3-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,34";
        oyeone.innerHTML = "Oyster,34mm,Oystersteel";
        break;
      case 'imagefour':
        imageElement.src = "../assets/imgpos4-removebg-preview (1).png";
        subone.innerHTML = "Oyester Perptual,31";
        oyeone.innerHTML = "Oyster,31mm,Oystersteel";
        break;
        case 'imagefive':
        imageElement.src = "../assets/imgpos5-removebg-preview.png";
        subone.innerHTML = "Oyester Perptual,28";
        oyeone.innerHTML = "Oyster,28mm,Oystersteel";
        break;
      default:
        imageElement.src = "../assets/imgpos1-removebg-preview (1).png";
    }
}
