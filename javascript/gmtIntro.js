// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {firebaseConfig } from '../javascript/config.js' 


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
// Reference to the 'GMT-Masters II' collection and the 'introduction' document
const watchesRef = doc(db, "GMT-Masters II", "introduction");

const introTitleElement = document.getElementById("intro-title");
const introSeiresElement = document.getElementById("intro-series");
const introSubTitleElement = document.getElementById("intro-sub-title");
const introDescBitleElement = document.getElementById("intro-desc-title");
const introDescBodyElement = document.getElementById("intro-desc-body");
const vidOneElement = document.getElementById("intro-vid");
 
// Get the document data from Firestore
getDoc(watchesRef)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const titleContent = docSnapshot.data().title;
      const seriesContent = docSnapshot.data().series;
      const subTitleContent = docSnapshot.data().subTitle
      const descTitleContent = docSnapshot.data().descTitle;
      const descBodyContent = docSnapshot.data().descBody;
      const videoContent = docSnapshot.data().video;

      introTitleElement.innerText = titleContent ;
      introSeiresElement.innerText = seriesContent ;
      introSubTitleElement.innerText = subTitleContent ;
      introDescBitleElement.innerText = descTitleContent ;
      introDescBodyElement.innerText = descBodyContent ;
      vidOneElement.src=videoContent;

    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });



  