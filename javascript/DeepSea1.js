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


const deepseawatch = doc(db, "DeepSea", "video");
const deepseawatch1=doc(db,"DeepSea","image");


const videoElement1 = document.getElementById("firstVideo");
const videoElement2 = document.getElementById("secondVideo");
const imageElement1 = document.getElementById("image1");
const imageElement2 = document.getElementById("image2");




 
// Get the document data from Firestore
getDoc(deepseawatch)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink1 = docSnapshot.data().video1;
      const videoLink2 = docSnapshot.data().video2;
      
      
      // Set the video source
      videoElement1.src = videoLink1;
      videoElement2.src= videoLink2;
      
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  getDoc(deepseawatch1)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      
      const imageLink1 = docSnapshot.data().image1;
      const imageLink2 = docSnapshot.data().image2;
    
      
      // Set the video source
    
      imageElement1.src=imageLink1;
      imageElement2.src=imageLink2;
    
    

      // Load the new source
  
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });