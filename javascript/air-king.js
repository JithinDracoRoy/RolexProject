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
const db = getFirestore(app);
 

const AirkingRef = doc(db, "Air-King", "video1");
// const submarinerRef2 = doc(db, "Submariner", "video2");
 
// Reference to the video element
const videoElement = document.getElementById("ak-my-video-one");
const videoSourceElement = document.getElementById("ak-videone");


// Get the document data from Firestore
getDoc(AirkingRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink = docSnapshot.data().video;
 
      // Set the video source
      videoSourceElement.src = videoLink;
 
      // Load the new source
      videoElement.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  const AirkingRef2 = doc(db, "Air-King", "image1");  
  getDoc(AirkingRef2)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("ak-my-image-one").src = imageLink;
    //   document.getElementById("ak-my-image-one").style.width="280px";
      
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  const AirkingRef3 = doc(db, "Air-King", "image2");  
  getDoc(AirkingRef3)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("ak-my-image-two").src = imageLink;
    //   document.getElementById("ak-my-image-one").style.width="280px";
      
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  const AirkingRef4 = doc(db, "Air-King", "video2");
  // const submarinerRef2 = doc(db, "Submariner", "video2");
   
  // Reference to the video element
  const videoElement2 = document.getElementById("ak-my-video-two");
  const videoSourceElement2 = document.getElementById("ak-videotwo");
  
  
  // Get the document data from Firestore
  getDoc(AirkingRef4)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Extract the video link from the document data
        const videoLink = docSnapshot.data().video;
   
        // Set the video source
        videoSourceElement2.src = videoLink;
   
        // Load the new source
        videoElement2.load();
      } else {
        console.log("Document does not exist!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });