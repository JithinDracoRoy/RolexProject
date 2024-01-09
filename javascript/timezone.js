document.addEventListener("DOMContentLoaded", () => {
    const countries = ["America/New_York", "Europe/London", "Asia/Tokyo", "Asia/Kolkata",
      "Europe/Paris", "Australia/Sydney", "America/Los_Angeles", "Asia/Dubai",
      "Europe/Berlin"]; // Add more time zones as needed
    const timeContainer = document.getElementById("time-container");

    function fetchTimeForCountry(country) {
      fetch(`https://worldtimeapi.org/api/timezone/${country}`)
        .then(response => response.json())
        .then(data => displayTime(data))
        .catch(error => console.error("Error fetching time:", error));
    }

    function displayTime(data) {
      const countryTimeDiv = document.getElementById(data.timezone);
      const countryName = data.timezone.split("/")[1]; // Extract country name from the timezone

      const utcOffset = data.utc_offset;
      const localTime = new Date(new Date().toLocaleString("en-US", { timeZone: data.timezone }));

      if (!countryTimeDiv) {
        const newCountryTimeDiv = document.createElement("div");
        newCountryTimeDiv.classList.add("country-time");
        newCountryTimeDiv.id = data.timezone;
        newCountryTimeDiv.style.width="300px";
        newCountryTimeDiv.style.border="none";
        timeContainer.appendChild(newCountryTimeDiv);
        countryTimeDiv = newCountryTimeDiv;
      }

      countryTimeDiv.innerHTML = `<h2>${countryName}</h2><p>${localTime.toLocaleTimeString()}</p>`;
    }

    function fetchTimeForAllCountries() {
      countries.forEach(country => {
        fetchTimeForCountry(country);
      });
    }

    fetchTimeForAllCountries();

    // Update the time every second
    setInterval(() => {
      fetchTimeForAllCountries();
    }, 1000);
  });