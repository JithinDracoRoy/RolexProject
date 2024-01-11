import { fetchFirestoreGeopoints } from "./map.js";
import { storeLocator } from "./map.js";
import { map, customIcon } from "./map.js";

let isDarkMode = false;

document.addEventListener("DOMContentLoaded", () => {
  storeLocator();
  addDarkModeToggle();
});

const updateMapTheme = () => {
  fetchFirestoreGeopoints(map);
  let tileLayerUrl = "";

  const close = document.getElementById("closeIcon");
  const content = document.getElementById("map-content");

  map.eachLayer((layer) => {
    if (layer instanceof L.TileLayer) {
      tileLayerUrl = isDarkMode
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
      layer.setUrl(tileLayerUrl);

      content.style.backgroundColor = isDarkMode
        ? "black"
        : "#8ca695";

      content.style.color = isDarkMode
        ? "#2ce35c"
        : "black";

      closeIcon.src = isDarkMode
        ? "../assets/greencloseicon.png"
        : "../assets/close icon.png";
    }

    if (layer instanceof L.Marker && layer.options.icon === customIcon) {
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

  const customIconUrl = isDarkMode
    ? "../assets/greenmarker.png"
    : "../assets/darkgreenmarker.png";

  customIcon.options.iconUrl = customIconUrl;
  console.log(customIcon.options.iconUrl);

  map.invalidateSize();
};

const addDarkModeToggle = () => {
  const darkModeToggle = document.getElementById("toggle-button");

  darkModeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    updateMapTheme();
  });
};

