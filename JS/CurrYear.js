// Get today's date
var date = new Date();
var year = date.getYear()+1900;

document.getElementById("currYear").innerHTML =  "Copyright © Willoughby " + year;
document.getElementById("getYear").innerHTML = year;
