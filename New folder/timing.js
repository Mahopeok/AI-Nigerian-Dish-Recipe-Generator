function showDate() {
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = new Date();
}

function showMilliseconds() {
  let date = new Date();
  let millisecondsElement = document.querySelector("#milliseconds");
  millisecondsElement.innerHTML = `${date.getMilliseconds()}`;
}

setTimeout(showDate, 5000);
setInterval(showMilliseconds, 1);
