
// Assuming this is in your payment page JavaScript

// ... (your existing code)

// Function to retrieve the order total from the URL
function getOrderTotalFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderTotal = urlParams.get('orderTotal');
    return orderTotal;
}

// Function to set the order total in the "Amount To Be Paid" input field
function setAmountToBePaid() {
    const orderTotal = getOrderTotalFromURL();
    if (orderTotal) {
        document.getElementById('amountToBePaid').value = orderTotal;
    }
}

// Call the function to set the amount when the page loads
document.addEventListener('DOMContentLoaded', setAmountToBePaid);

// payment-page.js

// document.addEventListener('DOMContentLoaded', function() {
//     // Assuming cart.js is included before this script
//     fetchEmailAndSetInput();
//     // Additional code for the payment page...
// });


document.addEventListener('DOMContentLoaded', function () {
    // Fetch the user name from localStorage
    const userName = localStorage.getItem("userName");

    // Set the user name in the input field
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
        usernameInput.value = userName;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to check if all required fields are filled
    function checkFields() {
        const emailInput = document.getElementById('username');
        const userNameInput = document.getElementById('email'); // Assuming this is your email input field

        const proceedToPayButton = document.getElementById('button');

        // Check if both email and user name inputs are filled
        if (emailInput.value.trim() !== '' && userNameInput.value.trim() !== '') {
            // Enable the "Proceed to Pay" button
            proceedToPayButton.disabled = false;
        } else {
            // Disable the "Proceed to Pay" button if any field is empty
            proceedToPayButton.disabled = true;
        }
    }

    // Add event listeners to the input fields
    const emailInput = document.getElementById('username');
    const userNameInput = document.getElementById('email');

    emailInput.addEventListener('input', checkFields);
    userNameInput.addEventListener('input', checkFields);

    // Call the function to set the amount when the page loads
    window.onload = setAmountToBePaid;
});


