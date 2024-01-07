function showImage(imageId) {
  var imageElement = document.getElementById("imageone");

  switch (imageId) {
    case "imageone":
      imageElement.src = "../assets/watchone.png";
      subone.innerHTML = "DateJust 36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel and yello gold";

      break;
    case "imagetwo":
      imageElement.src = "../assets/watchtwo.png";
      subone.innerHTML = "DateJust 36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel";
      break;
    case "imagethree":
      imageElement.src = "../assets/watchthree.png";
      subone.innerHTML = "DateJust 31";
      oyeone.innerHTML = "Oyster,31mm,Everose gold and diamonds";
      break;
    case "imagefour":
      imageElement.src = "../assets/watchfour.png";
      subone.innerHTML = "DateJust 41";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel and white Gold";
      break;
    default:
      imageElement.src = "../assets/watchone.png";
  }
}

function redirectToPage(page) {
  window.location.href = page;
}



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
    if (scrollPosition > 50 && scrollPosition < 100) {
      header2.style.display = "block";
      //    var video=document.getElementById("firstVideo").style.marginTop="20%";
    } else {
      header2.style.display = "none";
    }
    if (scrollPosition > 100 && scrollPosition < 200) {
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
    if(scrollPosition < 3858){
      document.getElementById("heading").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  3831) {
      document.getElementById("heading").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 3858){
      document.getElementById("paraPink").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  3831) {
      document.getElementById("paraPink").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 5149){
      document.getElementById("downHead").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  5142) {
      document.getElementById("downHead").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 5149){
      document.getElementById("paraPinkTwo").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  5142) {
      document.getElementById("paraPinkTwo").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 2411 ){
      document.getElementById("headPeach").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2400) {
      document.getElementById("headPeach").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 2411 ){
      document.getElementById("paraPeach").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2400) {
      document.getElementById("paraPeach").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition <2434){
      document.getElementById("paratwo").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2416) {
      document.getElementById("paratwo").style.animation = "smooth-appear 1s ease forwards";
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

  if (scrollPosition > 0 && scrollPosition < 50) {
    this.document.body.style.paddingTop="0px";
    header1.style.display = "block";
    header2.style.display = "none";
    header3.style.display = "none";
  } else if (scrollPosition >50 && scrollPosition < 100) {
    header1.style.display = "none";
    header2.style.display = "block";
    header3.style.display = "block";
  } else if (scrollPosition > 100) {
    this.document.body.style.paddingTop="50px";
    header1.style.display = "none";
    header2.style.display = "none";
    header3.style.display = "block";
  }
});
















// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
//   authDomain: "rolex-clone.firebaseapp.com",
//   projectId: "rolex-clone",
//   storageBucket: "rolex-clone.appspot.com",
//   messagingSenderId: "195944459124",
//   appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
//   measurementId: "G-SYHPGRBD62"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Reference to the 'DateJust' collection and the 'Video1' document
// const dateJustRef = doc(db, "DateJust", "Video1");

// const dateJustimageone = doc(db, "DateJust", "Video1");
// // Reference to the video element
// const videoElement = document.getElementById("firstVideo");
// const videoSourceElement = document.getElementById("videoSource");

// // Get the document data from Firestore
// getDoc(dateJustRef)
//   .then((docSnapshot) => {
//     if (docSnapshot.exists()) {
//       // Extract the video link from the document data
//       const videoLink = docSnapshot.data().Video;

//       // Set the video source
//       videoSourceElement.src = videoLink;

//       // Load the new source
//       videoElement.load();
//     } else {
//       console.log("Document does not exist!");
//     }
//   })
//   .catch((error) => {
//     console.error("Error getting document:", error);
//   });

  