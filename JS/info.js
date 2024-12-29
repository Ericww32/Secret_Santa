// Get the current date
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

// Set the copyright and year
document.getElementById("currYear").innerHTML = "Copyright © Willoughby " + cYear;
document.getElementById("getYear").innerHTML = cYear;