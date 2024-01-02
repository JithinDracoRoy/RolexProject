// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
//     authDomain: "rolex-clone.firebaseapp.com",
//     projectId: "rolex-clone",
//     storageBucket: "rolex-clone.appspot.com",
//     messagingSenderId: "195944459124",
//     appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
//     measurementId: "G-SYHPGRBD62"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// // getDoc(doc(db,'DateJust','Video1')).then(docSnap=>){
// //   if(docSnap.exists()){
// //     console.log('Document data',docSnap.data())
// //   }
// //   else{
// //     console.log('no much data')
// //   }
// // }

// const db = firebase.firestore();

// // Assuming you have a 'videos' collection with documents containing a 'videoUrl' field
// const videoDocRef = db.collection('DateJust').doc('Video1');

// videoDocRef.get().then((doc) => {
//   if (doc.exists) {
//     const videoUrl = doc.data().videoUrl;
//     // Now you have the video URL, and you can use it to dynamically load the video in your app.
//     console.log('Video URL:', videoUrl);
//   } else {
//     console.log('No such document!');
//   }
// }).catch((error) => {
//   console.error('Error getting document:', error);
// });

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
const dateJustRef = doc(db, "DateJust", "Video1");

// Reference to the video element
const videoElement = document.getElementById("firstVideo");
const videoSourceElement = document.getElementById("videoSource");

// Get the document data from Firestore
getDoc(dateJustRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink = docSnapshot.data().Video;

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

// next get

const dateJustRefImageOne = doc(db, "DateJust", "ImageOne");

// Reference to the image element
// const ImageElementOneDiv =document.getElementById("img-gold")
const ImageElementOne = document.getElementById("Imageonesource");

// Get the document data from Firestore
getDoc(dateJustRefImageOne)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const ImageLink = docSnapshot.data().Image;

      // Set the image source
      ImageElementOne.src = ImageLink;

      // ImageElementOneDiv.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustRefImageTwo = doc(db, "DateJust", "ImageTwo");
const ImageElementTwo = document.getElementById("img-blue");

getDoc(dateJustRefImageTwo)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const ImageTwoLink = docSnapshot.data().Image;
      ImageElementTwo.src = ImageTwoLink;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });


const dateJustRefImageThree = doc(db, "DateJust", "ImageThree");
const ImageElementThree = document.getElementById("peachImage");

getDoc(dateJustRefImageThree)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const ImageThreeLink = docSnapshot.data().Image;
      ImageElementThree.src = ImageThreeLink;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });


const dateJustRefImageFour = doc(db, "DateJust", "ImageFour");
const ImageElementFour = document.getElementById("pinkWatchImage");

getDoc(dateJustRefImageFour)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const ImageFourLink = docSnapshot.data().Image;
      ImageElementFour.src = ImageFourLink;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });


  const dateJustRefImageFive = doc(db, "DateJust", "ImageFive");
  const ImageElementFive = document.getElementById("oneimage");
  
  getDoc(dateJustRefImageFive)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const ImageFiveLink = docSnapshot.data().Image;
        ImageElementFive.src = ImageFiveLink;
      } else {
        console.log("Document does not exist!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });

  const dateJustRefImageSix = doc(db, "DateJust", "ImageSix");
  const ImageElementSix = document.getElementById("twoimage");
  
  getDoc(dateJustRefImageSix)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const ImageSixLink = docSnapshot.data().Image;
        ImageElementSix.src = ImageSixLink;
      } else {
        console.log("Document does not exist!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });


    const dateJustRefImageSeven = doc(db, "DateJust", "ImageSeven");
  const ImageElementseven = document.getElementById("lastimage");
  
  getDoc(dateJustRefImageSeven)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const ImageSevenLink = docSnapshot.data().Image;
        ImageElementseven.src = ImageSevenLink;
      } else {
        console.log("Document does not exist!");
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });

document.addEventListener("DOMContentLoaded", function () {
  var header1 = document.getElementById("header1");
  var header2 = document.getElementById("header2");
  var header3 = document.getElementById("row");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Show/hide the first heading based on scroll position
    if (scrollPosition > 0) {
      var video = (document.getElementById("firstVideo").style.marginTop =
        "0%");
      header1.classList.remove("hidden");
    } else {
      header1.classList.add("hidden");
    }

    // Show/hide the second heading based on scroll position
    if (scrollPosition > 150 && scrollPosition < 400) {
      header2.style.display = "block";
      //    var video=document.getElementById("firstVideo").style.marginTop="20%";
    } else {
      header2.style.display = "none";
    }
    if (scrollPosition > 200 && scrollPosition < 500) {
      header2.style.display = "none";
      header3.style.display = "block";
      //    var video=document.getElementById("firstVideo").style.marginTop="20%";
    } else {
      header3.style.display = "none";
    }
    if(scrollPosition < 1368){
      document.getElementById("h1").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  1438) {
      document.getElementById("h1").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 1413){
      document.getElementById("paraone").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  1431) {
      document.getElementById("paraone").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 4200){
      document.getElementById("heading").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  4250) {
      document.getElementById("heading").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 4200){
      document.getElementById("paraPink").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  4250) {
      document.getElementById("paraPink").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 5467){
      document.getElementById("downHead").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  5458) {
      document.getElementById("downHead").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 5467){
      document.getElementById("paraPinkTwo").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  5458) {
      document.getElementById("paraPinkTwo").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    
  });
});
// Add a scroll event listener to the window outside the DOM
window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY;
  var header1 = document.getElementById("header1");
  var header2 = document.getElementById("header2");
  var header3 = document.getElementById("row");

  if (scrollPosition > 100 && scrollPosition < 150) {
    header1.style.display = "block";
    header2.style.display = "none";
    header3.style.display = "none";
  } else if (scrollPosition > 150 && scrollPosition < 200) {
    header1.style.display = "none";
    header2.style.display = "block";
    header3.style.display = "block";
  } else if (scrollPosition > 200) {
    header1.style.display = "none";
    header2.style.display = "none";
    header3.style.display = "block";
  }
});

