// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {   getFirestore, collection, getDocs, doc, getDoc,onSnapshot,
  setDoc, deleteDoc, 
  query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ... your Firebase configuration

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

// const series ="GMT-Masters II";
// const user = localStorage.getItem("user");
const user = "jintu@gmail.com";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userCollectionRef = collection(db,"User");
const userDocRef = doc(userCollectionRef,user)
const userWishlistCollectionRef = collection(userDocRef,"wishlist");

const menubarFavIcon = document.getElementById("menubar-fav-icon");
const wishlistSizeELement = document.getElementById("wishlist-size");

onSnapshot(userWishlistCollectionRef, (snapshot) => {
    // Get the current document count
    const wishlistSize = snapshot.size; 
    console.log("Wishlist Size:", wishlistSize);
    if(wishlistSize === 0){
        menubarFavIcon.classList.remove("bi-suit-heart-fill");
        menubarFavIcon.classList.add("bi-suit-heart");
        wishlistSizeELement.style.display = "none";
    }else{
        menubarFavIcon.classList.remove("bi-suit-heart");
        menubarFavIcon.classList.add("bi-suit-heart-fill");
        wishlistSizeELement.innerHTML = wishlistSize;
        wishlistSizeELement.style.display = "block";
    }
  
    // ... (handle UI updates based on changes)
  });
  