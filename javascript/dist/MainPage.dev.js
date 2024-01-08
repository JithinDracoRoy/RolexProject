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
var check = parseInt(localStorage.getItem("check"));

if (check === 1) {
  var user = localStorage.getItem("user");
  var docRef = (0, _firebaseFirestore.doc)(db, 'User', user); // Use async function to handle promises

  (function _callee() {
    var docSnapshot, newname, isDropdownOpen, flag;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _firebaseFirestore.getDoc)(docRef));

          case 3:
            docSnapshot = _context.sent;

            if (docSnapshot.exists()) {
              newname = docSnapshot.data().name;
              newname = newname.charAt(0).toUpperCase() + newname.slice(1);
              document.getElementById("login").innerHTML = "<i class=\"fa fa-user\" style=\"margin-left: -50px;font-size:18px;\" aria-hidden=\"true\"><span style=\"font-family: sans-serif;margin-left: 10px;\">".concat(newname, "</span></i>");
              document.getElementById("firstoption").innerHTML = "<i class=\"fa fa-user\" style=\"margin-left: -50px;font-size:18px;\" aria-hidden=\"true\"><span style=\"font-family: sans-serif;margin-left: 10px;\">".concat(newname, "</span></i>");
              isDropdownOpen = false;
              document.getElementById("login").addEventListener("click", function () {
                var dropdown = document.getElementById("dropdown");

                if (isDropdownOpen) {
                  dropdown.style.display = "none";
                } else {
                  // Open the dropdown
                  dropdown.style.display = "block";
                } // Toggle the dropdown state


                isDropdownOpen = !isDropdownOpen;
              }); // Close the dropdown when clicking outside of it

              flag = 0;
              document.addEventListener("click", function (event) {
                var dropdown = document.getElementById("dropdown");

                if (event.target.closest("#login") || event.target.closest("#dropdown")) {
                  return;
                } // Clicked outside the login button and dropdown, close the dropdown


                dropdown.style.display = "none";
                isDropdownOpen = false;
              });
            } else {
              console.error("Document does not exist.");
            }

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("Error getting document:", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  })();
} else {
  document.getElementById("login").addEventListener("click", function () {
    window.location.href = "../html/login-page.html";
  });
}

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