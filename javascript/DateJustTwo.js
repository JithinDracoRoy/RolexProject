function showImage(imageId) {
  var imageElement = document.getElementById("imageone");

  switch (imageId) {
    case "imageone":
      imageElement.src = "../assets/watchone.png";
      subone.innerHTML = "DateJust 36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel and yello gold";

      break;
    case "imagetwo":
      imageElement.src = "../assets/watchtwo.png";
      subone.innerHTML = "DateJust 36";
      oyeone.innerHTML = "Oyster,36mm,Oystersteel";
      break;
    case "imagethree":
      imageElement.src = "../assets/watchthree.png";
      subone.innerHTML = "DateJust 31";
      oyeone.innerHTML = "Oyster,31mm,Everose gold and diamonds";
      break;
    case "imagefour":
      imageElement.src = "../assets/watchfour.png";
      subone.innerHTML = "DateJust 41";
      oyeone.innerHTML = "Oyster,41mm,Oystersteel and white Gold";
      break;
    default:
      imageElement.src = "../assets/watchone.png";
  }
}

function redirectToPage(page) {
  window.location.href = page;
}

function includeHTML(url, targetElementId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          // Insert the HTML content into the target element
          document.getElementById(targetElementId).innerHTML = data;
      })
      .catch(error => console.error('Error fetching HTML:', error));
}

// Call the function with the URL of your HTML file and the target element ID
includeHTML('../html/navbar.html', 'imported');



document.addEventListener("DOMContentLoaded", function () {
  var header1 = document.getElementById("header1");
  var header2 = document.getElementById("header2");
  var header3 = document.getElementById("row");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Show/hide the first heading based on scroll position
    if (scrollPosition > 0) {
      var video = (document.getElementById("firstVideo").style.marginTop =
        "0%");
      header1.classList.remove("hidden");
    } else {
      header1.classList.add("hidden");
    }

    // Show/hide the second heading based on scroll position
    if (scrollPosition > 50 && scrollPosition < 100) {
      header2.style.display = "block";
      //    var video=document.getElementById("firstVideo").style.marginTop="20%";
    } else {
      header2.style.display = "none";
    }
    if (scrollPosition > 100 && scrollPosition < 200) {
      header2.style.display = "none";
      header3.style.display = "block";
      //    var video=document.getElementById("firstVideo").style.marginTop="20%";
    } else {
      header3.style.display = "none";
    }

    if (scrollPosition < 1368) {
      document.getElementById("h1").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 1438) {
      document.getElementById("h1").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if (scrollPosition < 1413) {
      document.getElementById("paraone").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 1431) {
      document.getElementById("paraone").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 4174){
      document.getElementById("heading").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  4141) {
      document.getElementById("heading").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 4174){
      document.getElementById("paraPink").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  4141) {
      document.getElementById("paraPink").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if (scrollPosition < 5149) {
      document.getElementById("downHead").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 5142) {
      document.getElementById("downHead").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if (scrollPosition < 5149) {
      document.getElementById("paraPinkTwo").style.animation = "disappear 1s ease forwards";
    }
    else if (scrollPosition > 5142) {
      document.getElementById("paraPinkTwo").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 2966 ){
      document.getElementById("headPeach").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2945) {
      document.getElementById("headPeach").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition < 2966 ){
      document.getElementById("paraPeach").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2954) {
      document.getElementById("paraPeach").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }
    if(scrollPosition <2529){
      document.getElementById("paratwo").style.animation="disappear 1s ease forwards";
    }
    else if (scrollPosition >  2495) {
      document.getElementById("paratwo").style.animation = "smooth-appear 1s ease forwards";
      // document.getElementById("datejust").style.opacity = "0";
    }

  });
});
// Add a scroll event listener to the window outside the DOM

window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY;
  var header1 = document.getElementById("header1");
  var header2 = document.getElementById("header2");
  var header3 = document.getElementById("row");

  if (scrollPosition > 0 && scrollPosition < 50) {
    this.document.body.style.paddingTop = "0px";
    header1.style.display = "block";
    header2.style.display = "none";
    header3.style.display = "none";
  } else if (scrollPosition > 50 && scrollPosition < 100) {
    header1.style.display = "none";
    header2.style.display = "block";
    header3.style.display = "block";
  } else if (scrollPosition > 100) {
    this.document.body.style.paddingTop = "50px";
    header1.style.display = "none";
    header2.style.display = "none";
    header3.style.display = "block";
  }
});
















  
