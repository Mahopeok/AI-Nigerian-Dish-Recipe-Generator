let currentDate = document.querySelector("#current-date");
let currentTimeZone = moment
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY hh:mm A");
currentDate.innerHTML = `It is ${currentTimeZone} in Honolulu, Hawaii`;

let futureDate = document.querySelector("#future-date");
let futureTimeZone = moment
  .tz("Pacific/Honolulu")
  .add(10, "year")
  .format("dddd, MMMM D, YYYY hh:mm A");
futureDate.innerHTML = `10 years from now, it will be ${futureTimeZone} in Paris, France`;

let localTime = document.querySelector("#local-time-zone");
let localTimeZone = moment.tz.guess();
localTime.innerHTML = localTimeZone;
