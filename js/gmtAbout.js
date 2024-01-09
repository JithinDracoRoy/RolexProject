// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
      const vidOneContent = docSnapshot.data().vidOne;
      const aboutImgContent = docSnapshot.data().bgImage;
      const aboutDescContent = docSnapshot.data().aboutDesc;
      const cardTitleContent = docSnapshot.data().cardTitle;
      const cardBodyContent = docSnapshot.data().cardBody;
      const cardImgContent = docSnapshot.data().cardImage;
      const aboutVidTwoContent = docSnapshot.data().vidTwo;
      const aboutDescTwoTitleContent = docSnapshot.data().descTwoTitle;
      const aboutDescTwoBodyContent = docSnapshot.data().descTwoBody;

      aboutVidOneElement.src= vidOneContent;
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



  