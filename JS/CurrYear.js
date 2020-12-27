// Get today's date
var date = new Date();
var year = date.getYear()+1900;

// Output the result in an element with id="demo"
document.getElementById("currYear").innerHTML =  "Copyright © Willoughby " + year;
console.log("Current year: " + date.getYear()+1900);

// If the year is over, write out error
if (now == null) {
    document.getElementById("currYear").innerHTML = "Current year error...";
}
