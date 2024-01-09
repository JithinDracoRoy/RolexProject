
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
if (check === 1) {
  const user = localStorage.getItem("user");
  const docRef = doc(db, 'User', user);

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
        }
        else {
          document.getElementById("opencart").style.display = "none";
          document.getElementById("closecart").style.display = "";
          document.getElementById("number").style.display = "";
          document.getElementById("number").innerHTML = cartId.length;
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
  // document.getElementById("opencart").style.display = "none";
  // document.getElementById("closecart").style.display = "none";
  // document.getElementById("number").style.display = "none";
  // document.getElementById("login").addEventListener("click", function () {
  //   window.location.href = "../html/login.html";
  // });
}