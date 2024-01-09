
const currentDate = new Date();
const formattedDateTime = currentDate.toLocaleString();

console.log("Current Date and Time:", formattedDateTime);

const redirectToEmail = () => {
  const emailuser = localStorage.getItem("user");
  const subject = 'Enquiring about the stores';
  window.location.href = `mailto:${emailuser}?subject=${encodeURIComponent(subject)}`;
};

const changeOnInput = () => {
  document.getElementById("searchbar").style.opacity = 1;
  document.getElementById("searchbar").style.backgroundColor = 'white';
  document.getElementById("searchbar").style.color = 'black';
};

const closeDetails = () => {
  document.getElementById("map-content").style.display = 'none';
};


