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


