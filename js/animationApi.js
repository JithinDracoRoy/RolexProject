import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the 'DateJust' collection and the 'Video1' document
const YachtMasterRef = doc(db, "Yacht-Master Yacht-Master ", "Yatch-Master-Slider");

// Reference to the video element
// Reference to the video element
// const videoElement = document.getElementById("firstvideo");
const imageSourceElement=document.getElementById("firstImage");
const imageSourceElementOne=document.getElementById("secondImage");
const imageSourceElementTwo=document.getElementById("thirdImage");
const imageSourceElementThree=document.getElementById("fourthImage");
const imageSourceElementFour=document.getElementById("fivethImage");
const imageSourceElementFive=document.getElementById("sexithImage");
const imageSourceElementSix=document.getElementById("seventhImage");
// Get the document data from Firestore
getDoc(YachtMasterRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const imageLink=docSnapshot.data().ImageOne;
      const imageLinkOne=docSnapshot.data().ImageTwo;
      const imageLinkTwo=docSnapshot.data().ImageThree;
      const imageLinkThree=docSnapshot.data().ImageFour;
      const imageLinkFour=docSnapshot.data().ImageFive;
      const imageLinkFive=docSnapshot.data().ImageSix;
      const imageLinkSix=docSnapshot.data().ImageSix;
      // Set the video source
   
      imageSourceElement.src=imageLink;
      imageSourceElementOne.src=imageLinkOne;
      imageSourceElementTwo.src=imageLinkTwo;
      imageSourceElementThree.src=imageLinkThree;
      imageSourceElementFour.src=imageLinkFour;
      imageSourceElementFive.src=imageLinkFive;
      imageSourceElementSix.src= imageLinkSix;
      // Load the new source
    //   videoElement.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

