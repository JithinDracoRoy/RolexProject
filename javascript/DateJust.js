

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import{firebaseConfig} from "../javascript/config.js";

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


const dateJustReftextOne = doc(db, "DateJust", "TextOne");
const ElementTextOne = document.getElementById("h1");

getDoc(dateJustReftextOne)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLink = docSnapshot.data().Text;
      ElementTextOne.innerHTML = TextLink;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextTwo = doc(db, "DateJust", "TextTwo");
const ElementTextTwo = document.getElementById("paraone");
console.log("Hi");
getDoc(dateJustReftextTwo)
  .then((docSnapshot) => {
    console.log("Hi");
    if (docSnapshot.exists()) {
      console.log("Hi");
      const TextLinkTwo = docSnapshot.data().Text;
      ElementTextTwo.textContent = TextLinkTwo;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextThree = doc(db, "DateJust", "TextThree");
const ElementTextThree = document.getElementById("paratwo");
console.log("Hi");
getDoc(dateJustReftextThree)
  .then((docSnapshot) => {
    console.log("Hi");
    if (docSnapshot.exists()) {
      console.log("Hi");
      const TextLinkThree = docSnapshot.data().Text;
      ElementTextThree.textContent = TextLinkThree;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextFour = doc(db, "DateJust", "TextFour");
const ElementTextFour = document.getElementById("headPeach");
getDoc(dateJustReftextFour)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkFour = docSnapshot.data().Text;
      ElementTextFour.innerHTML = TextLinkFour;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextFive = doc(db, "DateJust", "TextFive");
const ElementTextFive = document.getElementById("paraPeach");
getDoc(dateJustReftextFive)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkFive = docSnapshot.data().Text;
      ElementTextFive.innerHTML = TextLinkFive;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextSix = doc(db, "DateJust", "TextSix");
const ElementTextSix = document.getElementById("heading");
getDoc(dateJustReftextSix)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkSix = docSnapshot.data().Text;
      ElementTextSix.innerHTML = TextLinkSix;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextSeven = doc(db, "DateJust", "TextSeven");
const ElementTextSeven = document.getElementById("paraPink");
getDoc(dateJustReftextSeven)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkSeven = docSnapshot.data().Text;
      ElementTextSeven.innerHTML = TextLinkSeven;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextEight = doc(db, "DateJust", "TextEight");
const ElementTextEight = document.getElementById("mainhead");
getDoc(dateJustReftextEight)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkEight = docSnapshot.data().Text;
      ElementTextEight.innerHTML = TextLinkEight;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });


const dateJustReftextNine = doc(db, "DateJust", "TextNine");
const ElementTextNine = document.getElementById("paraPinkTwo");
getDoc(dateJustReftextNine)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkNine = docSnapshot.data().Text;
      ElementTextNine.innerHTML = TextLinkNine;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });

const dateJustReftextTen = doc(db, "DateJust", "TextTen");
const ElementTextTen = document.getElementsByClassName("paratwo");
getDoc(dateJustReftextTen)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const TextLinkTen = docSnapshot.data().Text;
      ElementTextTen[0].innerHTML = TextLinkTen;
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });





