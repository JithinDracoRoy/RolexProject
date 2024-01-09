function redirectToCheckout() {
  const orderTotalValue = document.getElementById('total').textContent;
  const url = `payment.html?orderTotal=${encodeURIComponent(orderTotalValue)}`;
  window.location.replace(url);
}
var cartVisible = false;

function toggleCart() {
    var cartDiv = document.querySelector('.Sub-Cart-Right');
    cartVisible = !cartVisible;

    if (cartVisible) {

        cartDiv.style.display = 'block';
    } else {
        cartDiv.style.display = 'none';
    }
}


