"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");

var _firebaseFirestore = require("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62"
}; // Initialize Firebase

var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var db = (0, _firebaseFirestore.getFirestore)(app); // Reference to the 'DateJust' collection and the 'Video1' document

var storeWatchesRef = (0, _firebaseFirestore.collection)(db, 'StoreWatches'); // Get the document data from Firestore

(0, _firebaseFirestore.getDocs)(storeWatchesRef).then(function (snapshot) {
  var watches = [];
  snapshot.docs.forEach(function (doc) {
    watches.push(_objectSpread({}, doc.data()));
  });
  console.log(watches[0].name);
})["catch"](function (error) {
  console.error("Error getting document:", error);
});

function logScrollPosition() {
  var scrollPosition = parseInt(window.scrollY);
  console.log("Scroll Position: " + scrollPosition);

  if (scrollPosition > 250 && scrollPosition < 800) {
    document.getElementById("firsttext").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("datejust").style.opacity = "0";
  }

  if (scrollPosition > 800 && scrollPosition < 1300) {
    document.getElementById("firsttext").style.opacity = "0";
    document.getElementById("datejust").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("submariner").style.opacity = "0";
  }

  if (scrollPosition > 1300 && scrollPosition < 1800) {
    document.getElementById("datejust").style.opacity = "0";
    document.getElementById("submariner").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("gmtmaster").style.opacity = "0";
  }

  if (scrollPosition > 1800 && scrollPosition < 2400) {
    document.getElementById("submariner").style.opacity = "0";
    document.getElementById("gmtmaster").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("oyster").style.opacity = "0";
  }

  if (scrollPosition > 2400 && scrollPosition < 2900) {
    document.getElementById("gmtmaster").style.opacity = "0";
    document.getElementById("oyster").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("daydate").style.opacity = "0";
  }

  if (scrollPosition > 2900 && scrollPosition < 3400) {
    document.getElementById("oyster").style.opacity = "0";
    document.getElementById("daydate").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("seadweller").style.opacity = "0";
  }

  if (scrollPosition > 3400 && scrollPosition < 4000) {
    document.getElementById("daydate").style.opacity = "0";
    document.getElementById("seadweller").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("deepsea").style.opacity = "0";
  }

  if (scrollPosition > 4000 && scrollPosition < 4500) {
    document.getElementById("seadweller").style.opacity = "0";
    document.getElementById("deepsea").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("ladydatejust").style.opacity = "0";
  }

  if (scrollPosition > 4500 && scrollPosition < 5000) {
    document.getElementById("deepsea").style.opacity = "0";
    document.getElementById("ladydatejust").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("cosmograph").style.opacity = "0";
  }

  if (scrollPosition > 5000 && scrollPosition < 5500) {
    document.getElementById("ladydatejust").style.opacity = "0";
    document.getElementById("cosmograph").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("yatchmaster").style.opacity = "0";
  }

  if (scrollPosition > 5500 && scrollPosition < 6000) {
    document.getElementById("cosmograph").style.opacity = "0";
    document.getElementById("yatchmaster").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("airking").style.opacity = "0";
  }

  if (scrollPosition > 6000 && scrollPosition < 6500) {
    document.getElementById("yatchmaster").style.opacity = "0";
    document.getElementById("airking").style.animation = "smooth-appear 1s ease forwards";
    document.getElementById("explorer").style.opacity = "0";
  }

  if (scrollPosition > 6600 && scrollPosition < 7000) {
    document.getElementById("airking").style.opacity = "0";
    document.getElementById("explorer").style.animation = "smooth-appear 1s ease forwards";
  }
}

window.addEventListener('scroll', logScrollPosition);