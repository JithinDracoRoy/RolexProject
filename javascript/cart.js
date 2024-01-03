import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
console.log(app);
const itemsListContainer = document.querySelector(".items-list");
const cartCollection = collection(db, "Cart");


// Assuming you have a variable to store the total price
// let totalPrice = 0;
let totalPrice = 0;
const shippingCharge = 1000; 
let orderTotal=0;
getDocs(cartCollection)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const itemDataDiv = document.createElement("div");
      itemDataDiv.className = "item-data";
      const itemDataDivTwo=document.createElement("div");
      // Accumulate the price
      const itemPrice = doc.data().price;
      totalPrice += itemPrice;
      const formattedNumber = itemPrice.toLocaleString("en-IN");
      const price = "&#8377; "+formattedNumber;
      orderTotal=totalPrice+shippingCharge;
      itemDataDiv.innerHTML = `
        <img id="img" src="${doc.data().image}" alt="Product Image">
        <span id="name">${doc.data().name}</span>
       
        <p id="description">${doc.data().details}</p>
        <hr>
        <div class="price-div">
          <span>Price</span>
          <span id="price">${price}</span>
        </div>
        <hr>
      `;

      itemsListContainer.appendChild(itemDataDiv);
    });

    // Display the subtotal
    const formattedNumber = totalPrice.toLocaleString("en-IN");
    const price = "Rs."+formattedNumber;
    displaySubtotal(price);
    const formattedNumber1 = orderTotal.toLocaleString("en-IN");
    const price1= "Rs."+formattedNumber1;
    displayTotalPrice(price1);
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });

function displaySubtotal(subtotal) {
  console.log(subtotal);
  const subTotalDiv = document.getElementById('amount');
  subTotalDiv.textContent = subtotal;
}

function displayTotalPrice(orderTotal) {
  console.log(orderTotal);
  const orderDiv = document.getElementById('total');
  orderDiv.textContent = orderTotal;
}

// getDocs(cartCollection)
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       const itemDataDiv = document.createElement("div");
//       itemDataDiv.className = "item-data";

//       itemDataDiv.innerHTML = `
     
//         <img id = "img" src="${doc.data().image}" alt="Product Image">
//         <span id="name">${doc.data().name}</span>
//         <span id="icon"><i class="bi bi-plus-circle"></i></span>
//         <p id="description">${doc.data().description}</p>
//         <hr>
//         <div class="price-div">
//           <span>Price</span>
//           <span id="price">${doc.data().price}</span>
//         </div>
//         <hr>
//       `;

//       itemsListContainer.appendChild(itemDataDiv);
//     });
//   })
//   .catch((error) => {
//     console.error("Error getting documents: ", error);
//   });


  