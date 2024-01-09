import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import{firebaseConfig} from "../javascript/config.js";



//const user=localStorage.getItem("user");
const user = localStorage.getItem("user");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsListContainer = document.querySelector(".items-list");

const storeWatchesRef = collection(db, "StoreWatches");
const docRef = doc(db, "User", user);
const docSnapshot = await getDoc(docRef);
let totalPrice = 0;
const shippingCharge = 1000;
let orderTotal = 0;

let check = parseInt(localStorage.getItem("check"));
let cartId = [];
if (check === 1) {
  const user = localStorage.getItem("user");
  const docRef = doc(db, "User", user);

  // Use async function to handle promises
  (async () => {
    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        cartId = docSnapshot.data().cart;
        console.log(cartId.length);
        if (cartId.length == 0) {
          document.getElementById("opencart").style.display = "";
          document.getElementById("closecart").style.display = "none";
          document.getElementById("number").style.display = "none";
        } else {
          document.getElementById("opencart").style.display = "none";
          document.getElementById("closecart").style.display = "";
          document.getElementById("number").style.display = "";
          document.getElementById("number").style.marginLeft = "10px";
          document.getElementById("number").innerHTML = cartId.length;
        }
        var newname = docSnapshot.data().name;
        newname = newname.charAt(0).toUpperCase() + newname.slice(1);
        document.getElementById(
          "login"
        ).innerHTML = `<i class="fa fa-user" style="font-size:28px;"><p style="font-family: sans-serif;"><b>${newname}</b></p></i>`;
        document.getElementById(
          "firstoption"
        ).innerHTML = `<i class="fa fa-user" style="margin-left: -50px;font-size:18px;" aria-hidden="true"><span style="font-family: sans-serif;margin-left: 10px;"><b>${newname}</b></span></i>`;
        let isDropdownOpen = false;
        document.getElementById("login").addEventListener("click", function () {
          const dropdown = document.getElementById("dropdown");
          if (isDropdownOpen) {
            dropdown.style.display = "none";
          } else {
            dropdown.style.display = "block";
          }
          // Toggle the dropdown state
          isDropdownOpen = !isDropdownOpen;
        });
        // Close the dropdown when clicking outside of it
        document.addEventListener("click", function (event) {
          const dropdown = document.getElementById("dropdown");
          if (
            event.target.closest("#login") ||
            event.target.closest("#dropdown")
          ) {
            return;
          }
          // Clicked outside the login button and dropdown, close the dropdown
          dropdown.style.display = "none";
          isDropdownOpen = false;
        });
      } else {
        console.error("Document does not exist.");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  })();
} else {
  document.getElementById("opencart").style.display = "none";
  document.getElementById("closecart").style.display = "none";
  document.getElementById("number").style.display = "none";
  document.getElementById("login").addEventListener("click", function () {
    window.location.href = "../html/login.html";
  });
}

// Function to delete a document from the "Cart" collection
async function deleteItemFromCart(itemId) {
  console.log(itemId);
  const userId = localStorage.getItem("user");
  const userRef = doc(collection(db, "User"), userId);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    // Get the user's cart array
    const cartArray = userDoc.data().cart || [];
    // Log the cart items
    console.log("Current cart:", cartArray);
    // Find the index of the item to be removed
    const indexToRemove = cartArray.indexOf(itemId);
    if (indexToRemove !== -1) {
      cartArray.splice(indexToRemove, 1);
      console.log("Item removed from cart");
      await updateDoc(userRef, { cart: cartArray });
      document.getElementById("number").innerHTML = cartArray.length;
    } else {
      console.log("Item not found in the cart");
    }
  } else {
    console.log("User not found");
  }
}

// Function to add a document to the "SaveForLater" collection
async function saveItemForLater(itemData) {
  const userId = localStorage.getItem("user");
  const userRef = doc(collection(db, "User"), userId);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    const saveArray = userDoc.data().saveforlater || [];
    console.log("Current save:", saveArray);
    saveArray.push(itemData);
    await updateDoc(userRef, { saveforlater: saveArray }); 
  } else {
    console.log("User not found");
  }
}

async function getId(user) {
  try {
    if (docSnapshot.exists()) {
      return docSnapshot.data().cart;
    } else {
      console.error("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error updating cart:", error);
    return null;
  }
}

getDocs(storeWatchesRef)
  .then(async (querySnapshot) => {
    const user = localStorage.getItem("user");
    const cartId = await getId(user); // Get the cartId

    querySnapshot.forEach((doc) => {
      // Check if the item is in the user's cart
      if (cartId.includes(doc.id)) {
        const namedata = doc.data().name;
        const imageData = doc.data().image;
        const detailsData = doc.data().details;
        const priceData = doc.data().price;
        const formatPrice = priceData.toLocaleString("en-IN");
        const price = "Rs." + formatPrice;
        const itemId = doc.id; // Save the document ID for later reference

        const itemDataDiv = document.createElement("div");

        itemDataDiv.className = "item-data";
        itemDataDiv.innerHTML = `
         <div class=maindiv>
          <div class=cartimage>
          <img id="img" src="${imageData}" alt="Product Image">
          </div>
          <div class=cartname>
          <span id="name">${namedata}</span>
          </div>
          <div class=trashicon>
          <span class="icon-trash" data-item-id="${itemId}"><i class="bi bi-trash"></i></span>
          </div>
          <div class=saveicon>
         
          </div>
         </div>
          <div class=desc>
          <p id="description"><b>${detailsData}</b></p>
          </div>
          <hr id=firstline>
          <div class="price-div">
            <span id="pricename"><b>Price</b></span>
            <span id="price">${price}</span>
          </div>
          <hr id=secondline>
        `;
        const itemPrice = doc.data().price;
        totalPrice += itemPrice;
        orderTotal = totalPrice + shippingCharge;
        itemsListContainer.appendChild(itemDataDiv);

        // Add a click event listener to the trash icon
        const trashIcon = itemDataDiv.querySelector(".icon-trash");
        trashIcon.addEventListener("click", async () => {
          deleteItemFromCart(itemId);
          itemDataDiv.remove();
          totalPrice -= itemPrice;
          orderTotal = totalPrice + shippingCharge;

          // Update the displayed totals
          displaySubtotal(totalPrice);
          displayTotalPrice(orderTotal);
        });

        // Add a click event listener to the save icon
        const saveIcon = itemDataDiv.querySelector(".icon-save");
      }
    });

    // Display the initial subtotal and total
    displaySubtotal(totalPrice);
    displayTotalPrice(orderTotal);
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

function displaySubtotal(subtotal) {
  const formatSubtotal = subtotal.toLocaleString("en-IN");
  const subtotall = "Rs." + formatSubtotal;
  const subTotalDiv = document.getElementById("amount");
  subTotalDiv.textContent = subtotall;
}

function displayTotalPrice(orderTotal) {
  const formatOrdertotal = orderTotal.toLocaleString("en-IN");
  const ordertotall = "Rs." + formatOrdertotal;
  const orderDiv = document.getElementById("total");
  orderDiv.textContent = ordertotall;
}

// Use async function to handle promises
(async () => {
  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      var newname = docSnapshot.data().name;
      newname = newname.charAt(0).toUpperCase() + newname.slice(1);
      console.log(newname);
      document.getElementById(
        "login"
      ).innerHTML = `<i class="fa fa-user"  aria-hidden="true"><span style="margin-left:9px" ">${newname}</span></i>`;
    }
  } catch (error) {
    console.error("Error fetching user document:", error);
  }
})();

localStorage.setItem("userName", user);

$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true, // Set to true for automatic slideshow
    autoplaySpeed: 1000, // Adjust the delay between slides in milliseconds
    dots: true, // Display dots for navigation
    infinite: true, // Enable infinite loop
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  });
});
