// Time Code One

// var span = document.getElementById("span");

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   span.textContent =
//     ("0" + h).substr(-2) +
//     ":" +
//     ("0" + m).substr(-2) +
//     ":" +
//     ("0" + s).substr(-2);
// }

// setInterval(time, 1000);

// Time Code Two

// const clock12 = document.getElementById("clock12");
// const clock24 = document.getElementById("clock24");

// // Concatenate a zero to the left of every single digit time frame
// function concatZero(timeFrame) {
//   return timeFrame < 10 ? "0".concat(timeFrame) : timeFrame;
// }

// function realTime() {
//   let date = new Date();
//   let sec = date.getSeconds();
//   let mon = date.getMinutes();
//   let hr = date.getHours();
//   // 12 hour time
//   // If the hour equals 0 or 12, the remainder equals 0, so output 12 instead. (0 || 12 = 12)
//   clock12.textContent = `${concatZero(hr % 12 || 12)} : ${concatZero(
//     mon
//   )} : ${concatZero(sec)} ${hr >= 12 ? "PM" : "AM"}`;
//   // 24 hour time
//   clock24.textContent = `${concatZero(hr)} : ${concatZero(mon)} : ${concatZero(
//     sec
//   )}`;
// }

// setInterval(realTime, 1000);

// Time Code Three
window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //make clock a 12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of all months in  a year
    const monthList = [
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
      "December",
    ];

    //get current date and time
    const date = monthList[month] + " " + day + ", " + year;
    const time = hourTime + ":" + minute + ":" + second + ampm;

    //combine current date and time
    const dateTime = date + " - " + time;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});

// Time Code Four
// create a function to update the date and time
// function updateDateTime() {
//   // create a new Date object
//   const now = new Date();

//   // get the current date and time as a string
//   const currentDateTime = now.toLocaleString();

//   // update the textContent property of the span element with the id of datetime
//   document.querySelector("#datetime").textContent = currentDateTime;
// }

// // call the updateDateTime function every second
// setInterval(updateDateTime, 1000);
