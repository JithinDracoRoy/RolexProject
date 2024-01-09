function redirectToCheckout() {
 
  // Get the order total value
  const orderTotalValue = document.getElementById('total').textContent;
  
  // Encode the order total as a query parameter in the URL
  const url = `payment.html?orderTotal=${encodeURIComponent(orderTotalValue)}`;

  // Redirect to the payment page with the order total in the URL
  window.location.replace(url);
}
var cartVisible = false;

function toggleCart() {
    var cartDiv = document.querySelector('.Sub-Cart-Right');
    cartVisible = !cartVisible; // Toggle the visibility state

    if (cartVisible) {
        // Show the cart
        cartDiv.style.display = 'block';
    } else {
        // Hide the cart
        cartDiv.style.display = 'none';
    }
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

