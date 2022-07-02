const clock = document.querySelector("div.chat__timestamp");
const time = document.querySelectorAll("span.message__time");

function getClock() {
  var day_array = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var month_array = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let month_label = month_array[month];
  let date = today.getDate();
  let day = today.getDay();
  let day_label = day_array[day];
  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);

  clock.innerText = `${day_label} ,${month_label} ${date}, ${year}`;
  let i;
  for (i = 0; i < time.length; i++) {
    time[i].innerText = `${hours}:${minutes}`;
  }
}

getClock();
