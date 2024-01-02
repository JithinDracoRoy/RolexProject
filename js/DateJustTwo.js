function showImage(imageId) {
  var imageElement = document.getElementById("imageone");

  switch (imageId) {
    case "imageone":
      imageElement.src = "../assests/watchone.png";
      subone.innerHTML = "DateJust 36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel and yello gold";

      break;
    case "imagetwo":
      imageElement.src = "../assests/watchtwo.png";
      subone.innerHTML = "DateJust 36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel";
      break;
    case "imagethree":
      imageElement.src = "../assests/watchthree.png";
      subone.innerHTML = "DateJust 31";
      oyeone.innerHTML = "Oyster,31mm,Everose gold and diamonds";
      break;
    case "imagefour":
      imageElement.src = "../assests/watchfour.png";
      subone.innerHTML = "DateJust 41";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel and white Gold";
      break;
    default:
      imageElement.src = "../assests/watchone.png";
  }
}

function redirectToPage(page) {
  window.location.href = page;
}


















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

  