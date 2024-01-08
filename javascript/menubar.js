function menubar(x) {
  x.classList.toggle("change");
}

function displayMenu() {
  if (document.getElementById("hiddennav").style.height == "550px") {
    document.getElementById("hiddennav").style.height = "0px";
    document.getElementById("menuname").innerHTML = "Menu";
    setTimeout(delay, 1000);
    document.body.style.overflow = "";
  }
  else {
    document.getElementById("hiddennav").style.height = "550px";
    document.body.style.overflow = "hidden";
    document.getElementById("menuname").innerHTML = "Close";
    document.getElementById("header1").style.display="none";
  }
}
function delay() {
  document.getElementById("header1").style.zIndex = 0;
}
function logout() {
  localStorage.setItem("check",0);
  location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading delay (you can replace this with your actual loading logic)
  setTimeout(function () {
      // Hide the loading screen
      document.getElementById("loadingScreen").style.display = "none";
      // Display the content
      document.getElementById("firstpart").style.visibility = "visible";
      document.getElementById("lastpart").style.display = "block";
  }, 2000); // Change 2000 to your desired loading time in milliseconds
});

let check = parseInt(localStorage.getItem("check"));
let cartId=[];
if (check === 1) {
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
          document.getElementById("closecart").style.display="block";
          document.getElementById("number").innerText=cartId.length;
        }
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
        });
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