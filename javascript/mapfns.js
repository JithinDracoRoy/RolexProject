
function menuBar(x) {
    x.classList.toggle("change");
  }
const currentDate = new Date();
const formattedDateTime = currentDate.toLocaleString();

console.log("Current Date and Time:", formattedDateTime);

function redirectToEmail() {
    window.location.href = "mailto:https://mail.google.com/mail/?view=cm&fs=1&to=kate.ann.rolex@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here";
}

function changeOnInput(){
  document.getElementById("searchbar").style.opacity=1;
  document.getElementById("searchbar").style.backgroundColor = 'white';
  document.getElementById("searchbar").style.color='black';
}
function closeDetails(){
  document.getElementById("map-content").style.display='none';
}


