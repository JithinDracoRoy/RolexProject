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