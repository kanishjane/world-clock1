function updateClock(timeZone, elementId) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  document.getElementById(elementId).innerHTML =
    new Date().toLocaleString("en-GB", { ...options, timeZone: timeZone });
}

let city1 = {
  name: "Nairobi",
  timeZone: "Africa/Nairobi"
};

let city2 = {
  name: "London",
  timeZone: "Europe/London"
};

function refreshClocks() {
  updateClock(city1.timeZone, "clock-1");
  updateClock(city2.timeZone, "clock-2");
}

document.getElementById("city-select").addEventListener("change", function () {
  const selectedTimeZone = this.value;
  const selectedCityName = this.options[this.selectedIndex].text;

  if (selectedTimeZone) {
    city2.name = selectedCityName;
    city2.timeZone = selectedTimeZone;

    
    document.querySelectorAll(".city")[1].innerHTML = selectedCityName;
  }
});

refreshClocks();
setInterval(refreshClocks, 1000);