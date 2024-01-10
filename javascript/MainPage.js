
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import{firebaseConfig} from "../javascript/config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let check = parseInt(localStorage.getItem("check"));
let cartId=[];
if (check == 1) {
  const user = localStorage.getItem("user");
  const docRef = doc(db, 'User', user);
  // Use async function to handle promises
  (async () => {
    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        cartId=docSnapshot.data().cart;
        if(cartId.length>1){
          document.getElementById("opencart").style.display="none";
          document.getElementById("closecart").style.display="";
          document.getElementById("number").innerText=cartId.length;
          document.getElementById("openheart").style.visibility="visible";
        }else{
            document.getElementById("opencart").style.visibility="visible";
            document.getElementById("openheart").style.visibility="visible";
        }
        const store=localStorage.getItem("store");
        if(store==0){
        var newname = docSnapshot.data().name;
        newname = newname.charAt(0).toUpperCase() + newname.slice(1);
        document.getElementById("login").innerHTML = `<i class="fa fa-user" style="margin-left: -50px;font-size:18px;" aria-hidden="true"><span style="font-family: sans-serif;margin-left: 10px;"><b>${newname}</b></span></i>`;
        document.getElementById("firstoption").innerHTML = `<i class="fa fa-user" style="margin-left: -50px;font-size:18px;" aria-hidden="true"><span style="font-family: sans-serif;margin-left: 10px;"><b>${newname}</b></span></i>`;
        let isDropdownOpen = false;
        document.getElementById("login").addEventListener("click", function () {
          const dropdown = document.getElementById("dropdown");
          if (isDropdownOpen) {
            dropdown.style.display = "none";
          } else {
            // Open the dropdown
            dropdown.style.display = "block";
          }
          // Toggle the dropdown state
          isDropdownOpen = !isDropdownOpen;
        });
        // Close the dropdown when clicking outside of it
        document.addEventListener("click", function (event) {
          const dropdown = document.getElementById("dropdown");
          if (event.target.closest("#login") || event.target.closest("#dropdown")) {
            return;
          }
          // Clicked outside the login button and dropdown, close the dropdown
          dropdown.style.display = "none";
          isDropdownOpen = false;
        });}
        else{
          document.getElementById("login").innerHTML = `<b>Checkout</b>`;
          document.getElementById("login").addEventListener("click",function(){
            window.location.href="../html/cart.html"
          })
        }
      } else {
        console.error("Document does not exist.");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  })();
}
else {
    document.getElementById("login").addEventListener("click", function () {
    window.location.href = "../html/login-page.html";
  });
}