function includeHTML(url, targetElementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {

      document.getElementById(targetElementId).innerHTML = data;
    })
    .catch((error) => console.error("Error fetching HTML:", error));
}
includeHTML("../html/navbar.html", "imported");