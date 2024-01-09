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
const YachtMasterRef = doc(db, "Yacht-Master Yacht-Master ", "Yacht-Section-One");

// Reference to the video element
// Reference to the video element
// const videoElement = document.getElementById("firstvideo");
const videoSourceElement = document.getElementById("firstvideo");
const imageSourceElement=document.getElementById("imageone");
const imageSourceElementtwo =document.getElementById("imagetwo")
// Get the document data from Firestore
getDoc(YachtMasterRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink = docSnapshot.data().Video;
      const imageLink=docSnapshot.data().Image;
      const imageTwoLink=docSnapshot.data().ImageTwo;
      // Set the video source
      videoSourceElement.src = videoLink;
      imageSourceElement.src=imageLink;
      imageSourceElementtwo.src=imageTwoLink;
      // Load the new source
    //   videoElement.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });


  const YachtMasterRefTwo = doc(db, "Yacht-Master Yacht-Master ", "Yacht-Section-Two");
  const imageSourceElementthree=document.getElementById("secFirstImage");
  const imageSourceElementfour=document.getElementById("secSecondImage");
  const imageSourceElementfive=document.getElementById("subSecondImage");
  const imageSourceElementsix=document.getElementById("secThreeImage");
  getDoc(YachtMasterRefTwo )
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
   
      const imageLinkthree=docSnapshot.data().Image;
      const imageLinkfour=docSnapshot.data().ImageTwo;
      const imageLinkFive=docSnapshot.data().ImageOne;
      const imageLinkSix=docSnapshot.data().ImageThree;
      // Set the video source
    
      imageSourceElementthree.src=imageLinkthree;
      imageSourceElementfour.src=imageLinkfour;
      imageSourceElementfive.src=imageLinkFive;
      imageSourceElementsix.src=imageLinkSix;
  
      // Load the new source
    //   videoElement.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });



  const YachtMasterRefThree = doc(db, "Yacht-Master Yacht-Master ", "Yacht-Section-Three");
  const imageSourceElementseven=document.getElementById("secThreeOne");
  const imageSourceElementeight=document.getElementById("secThreeTwo");
  const imageSourceElementnine=document.getElementById("secThreeLastImg");
  const imageSourceElementLast=document.getElementById("lastimage");
  getDoc(YachtMasterRefThree )
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
   
      const imageLinkseven=docSnapshot.data().ImageOne;
      const imageLinkeight=docSnapshot.data().ImgaeTwo;
      const imageLinknine=docSnapshot.data().ImageThree;
      const imageLinkLast=docSnapshot.data().ImageFinal;
      // Set the video source
    
      imageSourceElementseven.src=imageLinkseven;
      imageSourceElementnine.src=imageLinknine;
      imageSourceElementLast.src=imageLinkLast;
      imageSourceElementeight.src=imageLinkeight;
     
      // Load the new source
    //   videoElement.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

    
    function logScrollPosition() {
      var scrollPosition = parseInt(window.scrollY);
      console.log("Scroll Position: " + scrollPosition);
      if(scrollPosition <1533 ){
        document.getElementById("headtext").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition > 1574) {
        document.getElementById("headtext").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
      if(scrollPosition < 4473){
        document.getElementById("secPara").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition > 4465) {
        document.getElementById("secPara").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
      if(scrollPosition < 6470){
        document.getElementById("heading").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  6454) {
        document.getElementById("heading").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
      if(scrollPosition < 6470){
        document.getElementById("headingSub").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  6454) {
        document.getElementById("headingSub").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
      if(scrollPosition < 7500){
        document.getElementById("lastHeading").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  7400) {
        document.getElementById("lastHeading").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
      if(scrollPosition < 7500){
        document.getElementById("lastHeadingSub").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  7400) {
        document.getElementById("lastHeadingSub").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
  
    }
      window.addEventListener('scroll', logScrollPosition);


         
 


      
     