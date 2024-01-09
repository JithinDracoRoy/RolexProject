// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {   getFirestore, collection, getDocs, doc, getDoc,onSnapshot,
  setDoc, deleteDoc, 
  query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ... your Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {firebaseConfig} from "../javascript/config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const series ="Submariner";
const user = localStorage.getItem("user");

//colRef -> docRef -> colRef2 -> docRef2
const watchCollectionRef = collection(db,"WatchCollection"); //Get collection "WatchCollection" from databse
const mainWatchCollectionDocRef = doc(watchCollectionRef,"watchCollection");  // Get doc "watchCollection" from collection "WatchCollection"
const seriesCollectionRef = collection(mainWatchCollectionDocRef,series);//Get collection "Submariner" from doc "watchCollection"
const userCollectionRef = collection(db,"User");
const userDocRef = doc(userCollectionRef,user)
const userWishlistCollectionRef = collection(userDocRef,"wishlist");
const watchIdArray =[];
let timeoutId=null;
let currentWatchId;
let isPaused = "false";
let iconPaused;


getDocs(seriesCollectionRef).then((snapshot)=>{  
    snapshot.docs.forEach(async (doc) => { 
     createButton(doc);     
  })
  currentWatchId = watchIdArray[0];
  displayWatchData(currentWatchId)
})
.catch(err => {
  console.log(err.message)
})

const createButton=(doc)=>{
  let button = document.createElement("button");
  button.id = doc.id; // Set button ID to document ID
  watchIdArray.push(doc.id)
  button.classList.add("btnround");

  // Attach click event listener
  button.addEventListener("click", async (event) => {
    // event.preventDefault();
    const watchId = button.id;
    await displayWatchData(watchId);
  })
//   currentWatchId = watchIdArray[0];
  document.querySelector(".watch-models-button").appendChild(button);
}

// Function to display watch data based on ID
async function displayWatchData(watchId) {
  currentWatchId = watchId;
  try {  
    changeButtonColor();
    const watchDocRef = doc(seriesCollectionRef, watchId);
    const snapshot = await getDoc(watchDocRef);
    const watchData = snapshot.data();

    // Access and display the fields
    const watchSeriesElement = document.getElementById("subone");
    const watchModelElement = document.getElementById("oyeone");
    const watchImageElement = document.getElementById("imageone");

    watchSeriesElement.textContent = watchData.series;
    watchModelElement.textContent = watchData.model;
    watchImageElement.src = watchData.img; 
    document.getElementById(watchId).style.backgroundColor="white";

    const wishlistButton = document.querySelector(".add-fav-label");
    wishlistButton.id = snapshot.id + "-fav";

    await checkWishlistStatus(watchId);
    autoDisplayWatchData(watchId);
    
    watchImageElement.addEventListener('mouseenter', ()=>{
      pauseAutoDisplayWatchData();
    })
    watchImageElement.addEventListener('mouseleave', ()=>{
      if(iconPaused != "true"){
        playAutoDisplayWatchData();
      }
    })

  } catch (error) {
    console.error("Error loading watch data:", error);
    // Handle the error appropriately, e.g., display an error message
  }
}

//Change Button Color
 const changeButtonColor=()=>{
  getDocs(seriesCollectionRef)
  .then((snapshot)=>{
      snapshot.docs.forEach((doc) => {
      document.getElementById(doc.id).style.backgroundColor="#6a7f95"; 
    })
  })
  .catch(err => {
    console.log(err.message)
  })
}

//check presence of document in wishlist
async function checkWishlistStatus(watchId) {

//   const wishlistCollectionRef = collection(db,"Wishlist")
  const userWishlistCollectionRef = collection(userDocRef,"wishlist");
  const wishlistDocRef = doc(userWishlistCollectionRef, watchId);
  const wishlistButton = document.querySelector(".add-fav-label");
  const wishlistButtonIcon = document.querySelector(".fav-icon");
  const wishlistButtonLabel = document.querySelector(".fav-label");

  getDoc(wishlistDocRef)
  .then(snapshot =>{
    if(snapshot.exists()){
      wishlistButtonLabel.textContent = "Remove from Wishlist";
      wishlistButtonIcon.classList.remove("bi-suit-heart");
      wishlistButtonIcon.classList.add("bi-suit-heart-fill");
    }
    else{
      wishlistButtonLabel.textContent = "Add to Wishlist";
      wishlistButtonIcon.classList.remove("bi-suit-heart-fill");
      wishlistButtonIcon.classList.add("bi-suit-heart");
    }
  })
  
  wishlistButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const wishlistButton = document.querySelector(".add-fav-label");
    let watchId = wishlistButton.id;
    watchId = watchId.replace("-fav","");
    await updateWishlistCollection(watchId);
  });
}

//Function to update wishlist
async function updateWishlistCollection(watchId){
  
//   const wishlistCollectionRef = collection(db,"Wishlist")
  const userWishlistCollectionRef = collection(userDocRef,"wishlist");
  const wishlistDocRef = doc(userWishlistCollectionRef, watchId);
  const watchDocRef = doc(seriesCollectionRef, watchId);
  const snapshot = await getDoc(watchDocRef);
  const watchData = snapshot.data();
 
  getDoc(wishlistDocRef)
  .then(snapshot =>{
    if(snapshot.exists()){
      deleteDoc(wishlistDocRef);
    }
    else{  
      setDoc(wishlistDocRef,watchData);
    }
    checkWishlistStatus(watchId)
  })
}

onSnapshot(userWishlistCollectionRef, (snapshot) => {
  const changes = snapshot.docChanges(); // Get all changes since the last snapshot
  changes.forEach((change) => {
      const type = change.type; // added, modified, or removed
      const data = change.doc.data(); // Document data for the change
      const watchId = change.doc.id; // Document ID
    checkWishlistStatus(watchId)
  });
});

const autoDisplayWatchData=(watchId)=>{
  if(isPaused =="false"){
    let index = watchIdArray.indexOf(watchId);
    if(index < watchIdArray.length - 1 ){
      index++;
    }
    else{
      index=0;
    }
    watchId = watchIdArray[index];
    if(timeoutId != null){
        clearTimeout(timeoutId);
        timeoutId = null;
    }  
    timeoutId = setTimeout(() => {
      displayWatchData(watchId)
     }, 5000);

  }
}

const playAutoDisplayWatchData =()=>{
  isPaused ="false";
  autoDisplayWatchData(currentWatchId);
  playPauseIcon.classList.remove("bi-play-circle");
  playPauseIcon.classList.add("bi-pause-circle");
}
const pauseAutoDisplayWatchData=()=>{
  clearTimeout(timeoutId); 
  timeoutId = null;
  isPaused ="true";
  playPauseIcon.classList.remove("bi-pause-circle");
  playPauseIcon.classList.add("bi-play-circle");
}

const playPauseIcon = document.querySelector(".play-pause-icon")
playPauseIcon.addEventListener("click",(event) => {
  if(isPaused =="false"){
    pauseAutoDisplayWatchData();
    iconPaused ="true";
  }
  else{ 
    playAutoDisplayWatchData(); 
    iconPaused = "false";  
  }
});




    
  
 



 
    