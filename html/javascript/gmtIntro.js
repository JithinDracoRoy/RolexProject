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



  