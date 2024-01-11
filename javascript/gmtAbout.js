// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {firebaseConfig } from '../javascript/config.js' 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
// Reference to the 'GMT-Masters II' collection and the 'introduction' document
const watchesRef = doc(db, "GMT-Masters II", "about");

const aboutVidOneElement = document.getElementById("about-vid-one");
const aboutImgElement = document.getElementById("about-img");
const aboutDescElement = document.getElementById("about-desc");
const cardTitleElement = document.getElementById("card-title");
const cardBodyElement= document.getElementById("card-body");
const cardImgElement = document.getElementById("card-img");
const aboutVidTwoElement = document.getElementById("about-vid-two");
const aboutDescTwoTitleElement = document.getElementById("about-desc-two-title");
const aboutDescTwoBodyElement = document.getElementById("about-desc-two-body");
 
// Get the document data from Firestore
getDoc(watchesRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const aboutVidOneContent = docSnapshot.data().vidOne;
      const aboutImgContent = docSnapshot.data().bgImage;
      const aboutDescContent = docSnapshot.data().aboutDesc;
      const cardTitleContent = docSnapshot.data().cardTitle;
      const cardBodyContent = docSnapshot.data().cardBody;
      const cardImgContent = docSnapshot.data().cardImage;
      const aboutVidTwoContent = docSnapshot.data().vidTwo;
      const aboutDescTwoTitleContent = docSnapshot.data().descTwoTitle;
      const aboutDescTwoBodyContent = docSnapshot.data().descTwoBody;

      aboutVidOneElement.src= aboutVidOneContent;
      aboutImgElement.src= aboutImgContent;
      aboutDescElement.innerText = aboutDescContent ;
      cardTitleElement.innerText = cardTitleContent ;
      cardBodyElement.innerText = cardBodyContent;
      cardImgElement.src= cardImgContent;
      aboutVidTwoElement.src= aboutVidTwoContent;
      aboutDescTwoTitleElement.innerText = aboutDescTwoTitleContent ;
      aboutDescTwoBodyElement.innerText = aboutDescTwoBodyContent ;
      

    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });



  