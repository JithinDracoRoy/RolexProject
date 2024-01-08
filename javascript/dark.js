import { fetchFirestoreGeopoints } from "./map.js";
import { storeLocator } from "./map.js";
import { map, customIcon } from "./map.js";

let isDarkMode = false;

document.addEventListener("DOMContentLoaded", function () {
  storeLocator();
  addDarkModeToggle();
});

function updateMapTheme() {
  fetchFirestoreGeopoints(map);
  let tileLayerUrl = "";

  // const navbar = document.getElementById("nav");
  const logo = document.getElementById("rolex");
  // const logoPath = logo.querySelector("path");
  const content = document.getElementById("map-content");

  map.eachLayer((layer) => {
    if (layer instanceof L.TileLayer) {
      tileLayerUrl = isDarkMode
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

      layer.setUrl(tileLayerUrl);
      // navbar.style.backgroundColor = isDarkMode ? "white" : "black";
      // logoPath.setAttribute("fill", isDarkMode ? "black" : "#ffffff");
      content.style.backgroundColor = isDarkMode ? "#f5f5f5" : "#1a1a1a";
    }

    if (layer instanceof L.Marker && layer.options.icon === customIcon) {
      // Update the marker's icon based on the dark mode state
      const newIconUrl = isDarkMode
        ? "../assets/greenmarker.png"
        : "../assets/darkgreenmarker.png";

      const newIcon = L.icon({
        iconUrl: newIconUrl,
        iconSize: [25, 25],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      layer.setIcon(newIcon);
    }
  });

  // Update the customIcon URL based on the current mode
  const customIconUrl = isDarkMode
    ? "../assets/greenmarker.png"
    : "../assets/darkgreenmarker.png";
  
  customIcon.options.iconUrl = customIconUrl;
  console.log(customIcon.options.iconUrl);
  // Make sure to update the map view after changing layers
  map.invalidateSize();
}

function addDarkModeToggle() {
  const darkModeToggle = document.getElementById("toggle-button");

  darkModeToggle.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    updateMapTheme();
  });
}
