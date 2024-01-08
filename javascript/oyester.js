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
const oyesterwatch1 = doc(db, "Oyester", "images");
const oyesterWatchText = doc(db, "Oyester", "text");

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
      videoElement2.src = videoLink2;
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

      imageElement1.src = imageLink1;
      imageElement2.src = imageLink2;
      imageElement3.src = imageLink3;
      imageElement4.src = imageLink4;


      // Load the new source

    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
const textElement1 = document.getElementById("firsttxt");
const textElement2 = document.getElementById("secondtxt");
const textElement3 = document.getElementById("text3");
const textElement4 = document.getElementById("text4");
const textElement5 = document.getElementById("text5");
const textElement6 = document.getElementById("text6");
const textElement7 = document.getElementById("text7");
const textElement8 = document.getElementById("text8");
const textElement9 = document.getElementById("text9");
const textElement10 = document.getElementById("text10");
const textElement11 = document.getElementById("text11");
const textElement12 = document.getElementById("text12");


getDoc(oyesterWatchText)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data

      const textLink1 = docSnapshot.data().text1;
      const textLink2 = docSnapshot.data().text2;
      const textLink3 = docSnapshot.data().text3;
      const textLink4 = docSnapshot.data().text4;
      const textLink5 = docSnapshot.data().text5;
      const textLink6 = docSnapshot.data().text6;
      const textLink7 = docSnapshot.data().text7;
      const textLink8 = docSnapshot.data().text8;
      const textLink9 = docSnapshot.data().text9;
      const textLink10 = docSnapshot.data().text10;
      const textLink11 = docSnapshot.data().text11;
      const textLink12 = docSnapshot.data().text12;


      // Set the video source

      textElement1.innerHTML = textLink1;
      textElement2.innerHTML = textLink2;
      textElement3.innerHTML = textLink3;
      textElement4.innerHTML = textLink4;
      textElement5.innerHTML = textLink5;
      textElement6.innerHTML = textLink6;
      textElement7.innerHTML = textLink7;
      textElement8.innerHTML = textLink8;
      textElement9.innerHTML = textLink9;
      textElement10.innerHTML = textLink10;
      textElement11.innerHTML = textLink11;
      textElement12.innerHTML = textLink12;





      // Load the new source

    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
