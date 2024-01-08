
  function menuBar(x) {
    x.classList.toggle("change");
  }
  function displayMenu() {
    if (document.getElementById("hiddennav").style.height == "500px") {
      document.getElementById("hiddennav").style.height = "0px";
      document.getElementById("menuname").innerHTML = "Menu";
      const myTimeout = setTimeout(delay, 1000);
      document.body.style.overflow = "";
    }
    else {
      document.getElementById("hiddennav").style.height = "500px";
      document.body.style.overflow = "hidden";
      document.getElementById("menuname").innerHTML = "Close";
      document.getElementById("problem").style.zIndex = -20;
    }
  }
  function delay() {
    document.getElementById("problem").style.zIndex = 0;
  }
  function redirectToPage(pageURL) {
    window.location.href = pageURL;
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