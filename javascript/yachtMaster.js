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
      if(scrollPosition < 6589){
        document.getElementById("heading").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  6576) {
        document.getElementById("heading").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
      if(scrollPosition < 6589){
        document.getElementById("headingSub").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  6576) {
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
      if(scrollPosition < 7400){
        document.getElementById("lastHeadingSub").style.animation="disappear 1s ease forwards";
      }
      else if (scrollPosition >  7300) {
        document.getElementById("lastHeadingSub").style.animation = "smooth-appear 1s ease forwards";
        // document.getElementById("datejust").style.opacity = "0";
      }
  
    }
      window.addEventListener('scroll', logScrollPosition);



      // document.addEventListener("DOMContentLoaded", function () {
      //   var header1 = document.getElementById("SecondText");
      //   var header2 = document.getElementById("thirdtext");
      //   var header3 = document.getElementById("row");
      
      //   // Add a scroll event listener to the window
      //   window.addEventListener("scroll", function () {
      //     // Get the current scroll position
      //     var scrollPosition = window.scrollY;
      
      //     // Show/hide the first heading based on scroll position
      //     if (scrollPosition > 0) {
      //       var video = (document.getElementById("firstVideo").style.marginTop =
      //         "0%");
      //       header1.classList.remove("hidden");
      //     } else {
      //       header1.classList.add("hidden");
      //     }
      
      //     // Show/hide the second heading based on scroll position
      //     if (scrollPosition > 150 && scrollPosition < 400) {
      //       header2.style.display = "block";
      //       //    var video=document.getElementById("firstVideo").style.marginTop="20%";
      //     } else {
      //       header2.style.display = "none";
      //     }
      //     if (scrollPosition > 200 && scrollPosition < 500) {
      //       header2.style.display = "none";
      //       header3.style.display = "block";
      //       //    var video=document.getElementById("firstVideo").style.marginTop="20%";
      //     } else {
      //       header3.style.display = "none";
      //     }
          
      //   });
      // });
      // // Add a scroll event listener to the window outside the DOM
      // window.addEventListener("scroll", function () {
      //   // Get the current scroll position
      //   var scrollPosition = window.scrollY;
      //   var header1 = document.getElementById("SecondText");
      //   var header2 = document.getElementById("thirdtext");
      //   var header3 = document.getElementById("row");
      
      //   if (scrollPosition > 100 && scrollPosition < 150) {
      //     header1.style.display = "block";
      //     header2.style.display = "none";
      //     header3.style.display = "none";
      //   } else if (scrollPosition > 150 && scrollPosition < 200) {
      //     header1.style.display = "none";
      //     header2.style.display = "block";
      //     header3.style.display = "block";
      //   } else if (scrollPosition > 200) {
      //     header1.style.display = "none";
      //     header2.style.display = "none";
      //     header3.style.display = "block";
      //   }
      // });
         
 


      
     