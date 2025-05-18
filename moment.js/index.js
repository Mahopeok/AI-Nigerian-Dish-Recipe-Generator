let today = moment().format("dddd, MMMM D, YYYY ");
let todayElement = document.querySelector("#current-date");
todayElement.innerHTML = `Today is ${today}`;

let future = moment().add(10, "year").format("dddd, MMMM D, YYYY HH:MM:ss ");
let futureElement = document.querySelector("#future-date");
futureElement.innerHTML = `10 years from now, it will be ${future}`;
