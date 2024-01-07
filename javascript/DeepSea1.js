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


const deepseawatch = doc(db, "DeepSea", "video");
const deepseawatch1=doc(db,"DeepSea","image");
const deepSeaWatchText=doc(db,"DeepSea","text")


const videoElement1 = document.getElementById("firstVideo");
const videoElement2 = document.getElementById("secondVideo");
const imageElement1 = document.getElementById("image1");
const imageElement2 = document.getElementById("image2");




 
// Get the document data from Firestore
getDoc(deepseawatch)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      const videoLink1 = docSnapshot.data().video1;
      const videoLink2 = docSnapshot.data().video2;
      
      
      // Set the video source
      videoElement1.src = videoLink1;
      videoElement2.src= videoLink2;
      
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  getDoc(deepseawatch1)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      // Extract the video link from the document data
      
      const imageLink1 = docSnapshot.data().image1;
      const imageLink2 = docSnapshot.data().image2;
    
      
      // Set the video source
    
      imageElement1.src=imageLink1;
      imageElement2.src=imageLink2;
    
    

      // Load the new source
  
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
  const textElement1 = document.getElementById("text1");
const textElement2 = document.getElementById("text2");
const textElement3 = document.getElementById("text3");
const textElement4 = document.getElementById("text4");
const textElement5 = document.getElementById("text5");
const textElement6 = document.getElementById("text6");
const textElement7 = document.getElementById("text7");
const textElement8 = document.getElementById("text8");
const textElement9 = document.getElementById("text9");
const textElement10 = document.getElementById("text10");




  getDoc(deepSeaWatchText)
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
      
      
      
      
      // Set the video source
    
      textElement1.innerHTML=textLink1;
      textElement2.innerHTML=textLink2;
      textElement3.innerHTML=textLink3;
      textElement4.innerHTML=textLink4;
      textElement5.innerHTML=textLink5;
      textElement6.innerHTML=textLink6;
      textElement7.innerHTML=textLink7;
      textElement8.innerHTML=textLink8;
      textElement9.innerHTML=textLink9;
      textElement10.innerHTML=textLink10;
      
      
      
    
    
    

      // Load the new source
  
    } else {
      console.log("Document does not exist!");
    }
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
