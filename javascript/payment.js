function validateInput() {
    var inputField = document.getElementById("username");
    var inputValue = inputField.value;
    var alphabet = /^[a-zA-Z]+$/;
    if (alphabet.test(inputValue)) {
        inputField.classList.remove("invalid");
    } else {
        inputField.classList.add("invalid");
    }
}

