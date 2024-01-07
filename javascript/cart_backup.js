import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc,doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
  authDomain: "rolex-clone.firebaseapp.com",
  projectId: "rolex-clone",
  storageBucket: "rolex-clone.appspot.com",
  messagingSenderId: "195944459124",
  appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
  measurementId: "G-SYHPGRBD62",
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsListContainer = document.querySelector(".items-list");
const cartCollection = collection(db, "Cart");

let totalPrice = 0;
const shippingCharge = 1000;
let orderTotal = 0;
 
getDocs(cartCollection)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const itemDataDiv = document.createElement("div");
      itemDataDiv.className = "item-data";
 
      const itemPrice = doc.data().price;
      totalPrice += itemPrice;
      orderTotal = totalPrice + shippingCharge;
 
      itemDataDiv.innerHTML = `
<img id="img" src="${doc.data().image}" alt="Product Image">
<span id="name">${doc.data().name}</span>
<span id="icon"><i class="bi bi-trash"></i></span>
<span id="saveicon"><i class="bi bi-save"></i></span>
<p id="description">${doc.data().description}</p>
<hr>
<div class="price-div">
<span>Price</span>
<span id="price">${itemPrice}</span>
</div>
<hr>
<br><br><br><br>
      `;
 
      itemsListContainer.appendChild(itemDataDiv);
 

    
      const deleteIcon = itemDataDiv.querySelector("#icon");
 
      deleteIcon.addEventListener("click", () => {
      
        // Delete the item from Firestore
        const itemId = doc.id;
        console.log(itemId);
        const collectionRef = collection(db, "Cart");
        // const itemRef=doc(collectionRef,itemId);
       
        deleteDoc(collectionRef);
       
        // Delete the item from the page
        itemDataDiv.remove();
 
        // Update the total prices
        totalPrice -= itemPrice;
        orderTotal = totalPrice + shippingCharge;
 
        // Update the displayed totals
        displaySubtotal(totalPrice);
        displayTotalPrice(orderTotal);
      });
    });
     
     
    // Display the initial subtotal and total
    displaySubtotal(totalPrice);
    displayTotalPrice(orderTotal);
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
 
function displaySubtotal(subtotal) {
  const subTotalDiv = document.getElementById('amount');
  subTotalDiv.textContent = subtotal;
}
 
function displayTotalPrice(orderTotal) {
  const orderDiv = document.getElementById('total');
  orderDiv.textContent = orderTotal;
}






  
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
// const firebaseConfig = {
//   apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
//   authDomain: "rolex-clone.firebaseapp.com",
//   projectId: "rolex-clone",
//   storageBucket: "rolex-clone.appspot.com",
//   messagingSenderId: "195944459124",
//   appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
//   measurementId: "G-SYHPGRBD62",
// };
 
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// console.log(app);
// const cartCollection = collection(db, "Cart");
 
 
// window.addEventListener('load', (event) => {
//   let totalPrice = 0;
//   const shippingCharge = 1000;
//   let orderTotal = 0;
//   const itemsListContainer = document.getElementsByClassName('items-list');
 
//   getDocs(cartCollection)
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         const itemDataDiv = document.createElement("div");
//         itemDataDiv.className = "item-data";
//         const itemDataDivTwo = document.createElement("div");
 
//         // Set the HTML content of itemDataDiv
//         itemDataDiv.innerHTML = `
// <img id="img" src="${doc.data().image}" alt="Product Image">
// <span id="name">${doc.data().name}</span>
// <span id="icon"><i class="bi bi-trash"></i></span>
// <p id="description">${doc.data().description}</p>
// <hr>
// <div class="price-div">
// <span>Price</span>
// <span id="price">${doc.data().price}</span>
// </div>
// <hr>
// <br><br><br><br>
//         `;
 
//         // Append itemDataDiv to itemsListContainer
//         itemsListContainer.appendChild(itemDataDiv);
        
//         // Now query for deleteIcon within itemDataDiv
//         const deleteIcon = itemDataDiv.querySelector("#icon");
        
//         // Add event listener to deleteIcon
//         deleteIcon.addEventListener("click", () => {
//           // Delete the item from Firestore
//           const itemId = doc;
//           console.log(itemId);
//           // const itemRef = collection(db, "Cart", itemId);
//           // deleteDoc(itemRef);
           
//           // Delete the item from the page
//           itemDataDiv.remove();
 
//           // Accumulate the price
//           const itemPrice = doc.data().price;
//           totalPrice += itemPrice;
//           orderTotal = totalPrice + shippingCharge;
//           displaySubtotal(totalPrice);
//           displayTotalPrice(orderTotal);
//         });
//       });
 
//       // Display the subtotal
//       displaySubtotal(totalPrice);
//       displayTotalPrice(orderTotal);
//     })
//     .catch((error) => {
//       console.error("Error getting documents: ", error);
//     });
 
//   function displaySubtotal(subtotal) {
//     console.log(subtotal);
//     const subTotalDiv = document.getElementById('amount');
//     subTotalDiv.textContent = subtotal;
//   }
 
//   function displayTotalPrice(orderTotal) {
//     console.log(orderTotal);
//     const orderDiv = document.getElementById('total');
//     orderDiv.textContent = orderTotal;
//   }
// });






















// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAru6JgHWgmu9eMdCi2b9eP7R8xLOxteqA",
//   authDomain: "rolex-clone.firebaseapp.com",
//   projectId: "rolex-clone",
//   storageBucket: "rolex-clone.appspot.com",
//   messagingSenderId: "195944459124",
//   appId: "1:195944459124:web:ee7f54a1a87ef193119a21",
//   measurementId: "G-SYHPGRBD62",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// console.log(app);
// const itemsListContainer = document.querySelector(".items-list");
// const cartCollection = collection(db, "Cart");



// let totalPrice = 0;
// const shippingCharge = 1000; 
// let orderTotal=0;
// getDocs(cartCollection)
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       const itemDataDiv = document.createElement("div");
//       itemDataDiv.className = "item-data";
//       const itemDataDivTwo=document.createElement("div");




//       const deleteIcon = itemDataDiv.querySelector("#icon");
//       deleteIcon.addEventListener("click", () => {
//         // Delete the item from Firestore
//         const itemId = doc.id;
//         const itemRef = collection(db, "Cart", itemId);
//         deleteDoc(itemRef);

//         // Delete the item from the page
//         itemDataDiv.remove();
//       // Accumulate the price
//       const itemPrice = doc.data().price;
//       totalPrice += itemPrice;
//       orderTotal=totalPrice+shippingCharge;
//       displaySubtotal(totalPrice);
//         displayTotalPrice(orderTotal);
//       });




//       itemDataDiv.innerHTML = `
//         <img id="img" src="${doc.data().image}" alt="Product Image">
//         <span id="name">${doc.data().name}</span>
//         <span id="icon"><i class="bi bi-trash"></i></span>
//         <p id="description">${doc.data().description}</p>
//         <hr>
//         <div class="price-div">
//           <span>Price</span>
//           <span id="price">${itemPrice}</span>
//         </div>
//         <hr>
//         <br><br><br><br>
//       `;

//       itemsListContainer.appendChild(itemDataDiv);
//     });

//     // Display the subtotal
//     displaySubtotal(totalPrice);
//     displayTotalPrice(orderTotal);
//   })
//   .catch((error) => {
//     console.error("Error getting documents: ", error);
//   });

// function displaySubtotal(subtotal) {
//   console.log(subtotal);
//   const subTotalDiv = document.getElementById('amount');
//   subTotalDiv.textContent = subtotal;
// }

// function displayTotalPrice(orderTotal) {
//   console.log(orderTotal);
//   const orderDiv = document.getElementById('total');
//   orderDiv.textContent = orderTotal;
// }

