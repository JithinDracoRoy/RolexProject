
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { firebaseConfig } from "../javascript/config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the 'DateJust' collection and the 'Video1' document
const submarinerRef = doc(db, "Submariner", "video1");
// const submarinerRef2 = doc(db, "Submariner", "video2");

// Reference to the video element
const videoElement = document.getElementById("my-video-one");
const videoSourceElement = document.getElementById("videone");

// Get the document data from Firestore
getDoc(submarinerRef)
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

const submarinerRef2 = doc(db, "Submariner", "video2");

// Reference to the video element
const videoElement2 = document.getElementById("my-video-two");
const videoSourceElement2 = document.getElementById("videotwo");

getDoc(submarinerRef2)
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

const submarinerRef3 = doc(db, "Submariner", "video3");

// Reference to the video element
const videoElement3 = document.getElementById("my-video-three");
const videoSourceElement3 = document.getElementById("videothree");

getDoc(submarinerRef3)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink = docSnapshot.data().video;

      // Set the video source
      videoSourceElement3.src = videoLink;

      // Load the new source
      videoElement3.load();
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef4 = doc(db, "Submariner", "image1");

getDoc(submarinerRef4)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("feature-div-image-one-id").src = imageLink;
      document.getElementById("feature-div-image-one-id").style.width = "280px";
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef5 = doc(db, "Submariner", "image2");

// Reference to the video element

getDoc(submarinerRef5)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("feature-div-image-two-id").src = imageLink;
      document.getElementById("feature-div-image-two-id").style.width = "280px";
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef6 = doc(db, "Submariner", "image3");

// Reference to the video element

getDoc(submarinerRef6)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("feature-div-image-three-id").src = imageLink;
      document.getElementById("feature-div-image-three-id").style.width =
        "280px";
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef7 = doc(db, "Submariner", "image4");

// Reference to the video element

getDoc(submarinerRef7)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("feature-div-image-four-id").src = imageLink;
      document.getElementById("feature-div-image-four-id").style.width =
        "280px";
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef8 = doc(db, "Submariner", "image5");

// Reference to the video element

getDoc(submarinerRef8)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("feature-div-content-two-image-main").src =
        imageLink;
      // document.getElementById("feature-div-content-two-image-main");
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef9 = doc(db, "Submariner", "image8");

// Reference to the video element

getDoc(submarinerRef9)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("james-cameron-image").src = imageLink;
      // document.getElementById("feature-div-content-two-image-main");
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef10 = doc(db, "Submariner", "image6");

// Reference to the video element

getDoc(submarinerRef10)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("list-img1").src = imageLink;
      // document.getElementById("feature-div-content-two-image-main");
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerRef11 = doc(db, "Submariner", "image7");

// Reference to the video element

getDoc(submarinerRef11)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the image link from the document data
      const imageLink = docSnapshot.data().image;
      console.log(imageLink);

      // Set the image source
      document.getElementById("list-img2").src = imageLink;
      // document.getElementById("feature-div-content-two-image-main");
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const submarinerText = doc(db, "Submariner", "text");

const textElement1 = document.getElementById("text1");
const textElement2 = document.getElementById("text2");
const textElement3 = document.getElementById("text3");
const textElement4 = document.getElementById("text4");
const textElement5 = document.getElementById("feature-div-head");
const textElement6 = document.getElementById("feature-div-content");
const textElement7 = document.getElementById("feature-div-content-two-para");
const textElement8 = document.getElementById("text5");
const textElement9 = document.getElementById("text6");
const textElement10 = document.getElementById("text7");
const textElement11 = document.getElementById("james-cameron-quote");

getDoc(submarinerText)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data

      const textLink1 = docSnapshot.data().text4;
      const textLink2 = docSnapshot.data().text5;
      const textLink3 = docSnapshot.data().text6;
      const textLink4 = docSnapshot.data().text7;
      const textLink5 = docSnapshot.data().text8;
      const textLink6 = docSnapshot.data().text9;
      const textLink7 = docSnapshot.data().text10;
      const textLink8 = docSnapshot.data().text11;
      const textLink9 = docSnapshot.data().text12;
      const textLink10 = docSnapshot.data().text14;
      const textLink11 = docSnapshot.data().text15;


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

document.addEventListener("DOMContentLoaded", function() {
  var changingHeading = document.getElementById('mainhead');
  var changingVideo = document.getElementById('video-one-blackfilm');
  // var fixedVideo = document.getElementById('videoContent');
  var nextVideoChanging = document.getElementById('scrollingtwo');

  window.addEventListener('scroll', function() {
    var scrollPosition = parseInt(window.scrollY);
    // document.getElementById('scrollPosition').style.propertyName = 'value';
    console.log("Scroll Position: " + scrollPosition);
    
      // You can customize this threshold based on when you want the heading to change
      if (scrollPosition > 100 && scrollPosition<200) {
          document.getElementById('subhead').innerHTML='';
          document.getElementById('video-one-btn').style.display='none';
          document.getElementById('mainhead').innerHTML = 'Deep Confidence';
          document.getElementById('video-one-blackfilm').innerHTML.style.display='none';
          // fixedVideo.style.position='fixed';
      }
      else if (scrollPosition > 200 && scrollPosition<900) {
        // fixedVideo.style.position='fixed';
        document.getElementById('subhead').innerHTML='';
        document.getElementById('video-one-btn').style.display='none';
        document.getElementById('mainhead').innerHTML = 'Deep Confidence';
        var opacityValue = Math.min(scrollPosition / 100, 0.8); // Adjust the division factor for a smoother effect
        changingVideo.style.opacity = opacityValue;
        document.getElementById('video-one-blackfilm').innerHTML.style.display='none';
      }
      // else if(scrollPosition>700){
      //   document.getElementById('mainhead').innerHTML.style.display='none';
      // }
      else{
        changingVideo.style.opacity = 0;
        document.getElementById('subhead').innerHTML='Oyster Perpetual';
        document.getElementById('video-one-btn').style.display='block';
        document.getElementById('mainhead').innerHTML = 'Submariner';
      }
  });
});
  
function showImage(imageId) {
  var imageElement = document.getElementById('imageone');

  switch (imageId) {
    case 'imageone':
      imageElement.src = "../assets/vector1.png";
      subone.innerHTML ="Submariner";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel";
      break;
    case 'imagetwo':
      imageElement.src = "../assets/vector2.png";
      subone.innerHTML = "Submariner Date";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel and Yellow gold";
      break;
    case 'imagethree':
      imageElement.src = "../assets/vector3.png";
      subone.innerHTML = "Submariner Date";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel"
      break;
    case 'imagefour':
      imageElement.src = "../assets/vector4.png";
      subone.innerHTML = "Submariner Date";
      oyeone.innerHTML = "Oyster,41mm,Yellow Gold";
      break;
    default:
      imageElement.src = "../assets/default.png";
  }
}

function windowlocation(){
  window.location.href ="../html/map.html";
}

