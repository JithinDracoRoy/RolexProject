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
        document.getElementById("feature-div-image-one-id").style.width="280px";
        
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
        document.getElementById("feature-div-image-two-id").style.width="280px";
        
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
        document.getElementById("feature-div-image-three-id").style.width="280px";
        
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
        document.getElementById("feature-div-image-four-id").style.width="280px";
        
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
        document.getElementById("feature-div-content-two-image-main").src = imageLink;
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
     
    