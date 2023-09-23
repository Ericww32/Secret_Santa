// Get the current date
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

// Check to see if the current date is Dec 24 and if it is, run this script
// if (cMonth == 12) {
//     if (cDay == 24) {
//
//     }
// }

// Grab the JSON objects and pass it to a variable
let adultsJSON = '{ ' +
    '"person": [' +
    '{"name": "Brenda", "assigned": "Sam", "ignore": ["David"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2KVZA4434Y4LT"},' +
    '{"name": "David", "assigned": "Joe", "ignore": ["Brenda"], "history": "", "link": ""},' +
    '{"name": "Jackie", "assigned": "Brenda", "ignore": ["Sam"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"},' +
    '{"name": "Sam", "assigned": "Annette", "ignore": ["Jackie"], "history": "", "link": ""},' +
    '{"name": "Annette", "assigned": "Cindy", "ignore": ["NULL"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
    '{"name": "Joe", "assigned": "David", "ignore": ["Cindy"], "history": "", "link": ""},' +
    '{"name": "Cindy", "assigned": "Jackie", "ignore": ["Joe"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"}' +
    ']' +
'}';

let kidsJSON = '{ ' +
    '"person": [' +
    '{"name": "Eric", "assigned": "Imran", "ignore": ["Melody", "Jeff"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2TB6LH8QBNIRE?ref_=wl_share"},' +
    '{"name": "Erin", "assigned": "Morgan", "ignore": ["Imran"], "history": "", "link": ""},' +
    '{"name": "Imran", "assigned": "Jeff", "ignore": ["Erin"], "history": "", "link": ""},' +
    '{"name": "Jeff", "assigned": "Erin", "ignore": ["Melody", "Eric"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
    '{"name": "Melody", "assigned": "Mikayla", "ignore": ["Jeff", "Eric"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
    '{"name": "Mikayla", "assigned": "Eric", "ignore": ["NULL"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
    '{"name": "Morgan", "assigned": "Melody", "ignore": ["NULL"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"}' +
    ']' +
'}';

let babiesJSON = '{ ' +
    '"person": [' +
    '{"name": "Aidan", "assigned": "Mikey", "ignore": ["Ayla", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Ayla", "assigned": "Izzy", "ignore": ["Aidan", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Aslan", "assigned": "Lilly", "ignore": ["Ayla", "Aidan"], "history": "", "link": ""},' +
    '{"name": "Henry", "assigned": "Aidan", "ignore": ["NULL"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
    '{"name": "Izzy", "assigned": "Ayla", "ignore": ["Lilly", "Mikey"], "history": "", "link": ""},' +
    '{"name": "Lilly", "assigned": "Henry", "ignore": ["Izzy", "Mikey"], "history": "", "link": "https://www.amazon.com/registries/holiday/2HC3EM405FBX6/guest-view"},' +
    '{"name": "Mikey", "assigned": "Aslan", "ignore": ["Izzy", "Lilly"], "history": "", "link": ""}' +
    ']' +
'}';

// Creating parsed JSON objects
let adultsObj = JSON.parse(adultsJSON);
let kidsObj = JSON.parse(kidsJSON);
let babiesObj = JSON.parse(babiesJSON);

// Create an array of names for each object
let adultNames = createArrayNames(adultsObj);
let kidNames = createArrayNames(kidsObj);
let babyNames = createArrayNames(babiesObj);

// function createArrayNames(obj) {
//     let result = [];

//     for (let i = 0; i < obj.person.length; i++) {
//         result.push(obj.person[i].name);
//     }

//     return result;
// }

// Shuffle every arrays
// function shuffle(arr) {
//   arr.sort(() => Math.random() - 0.5);
// }

// Assign the objects the new secret Santas
function assignSanta(obj, arr, columnDisplay) {

    for (let i = 0; i < obj.person.length; i++) {

        if(obj.person[i].name == arr[i] ||
           obj.person[i].ignore[0] == arr[i] ||
           obj.person[i].ignore[1] == arr[i] ||
           obj.person[i].history == arr[i]) {

               // console.log("Person: " + JSON.stringify(obj.person[i]));
               // console.log("Array: " + arr[i]);
               shuffle(arr);
               i = -1;
        } else {
            obj.person[i].assigned = arr[i];
            // console.log(obj.person[i].name + " was assigned " + obj.person[i].assigned);
        }
    }

    displayNewlyShuffled(obj, columnDisplay);
}

// function displayNewlyShuffled(obj, columnDisplay) {
//     let html = "<ul>";

//     for (let i = 0; i < obj.person.length; i++) {
//         html += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
//     }

//     html += "</ul>";
//     columnDisplay.innerHTML = html;
// }

// function setHistory(obj) {
//     for (let i = 0; i < obj.person.length; i++) {
//         obj.person[i].history = obj.person[i].assigned;
//     }
// }

// function saveJSON(selector, obj) {
//     const link = document.querySelector(selector);
//     let name = "";

//     switch (selector) {
//         case "adultsModal":
//                 name = "adults";
//             break;
//         case "kidsModal":
//                 name = "kids";
//             break;
//         case "babiesModal":
//                 name = "babies";
//             break;
//         default: "fam";

//     }
//     let title = cYear + "_" + name;
//     link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(obj));
//     link.setAttribute("download", `${title}.json`);
// }

// function saveAllJSON() {
//     saveJSON("adultsModal");
//     saveJSON("kidsModal");
//     saveJSON("babiesModal");
// }

/*
 * Runs all the suffle functions together. This is the main function.
 */
// function runShuffle() {
//     shuffle(adultNames);
//     shuffle(kidNames);
//     shuffle(babyNames);

//     // console.log("Before:::");
//     // console.log("Adults: " + JSON.stringify(adultsObj, 0, 4));
//     // console.log("Kids: " + JSON.stringify(kidsObj, 0, 4));
//     // console.log("Babies: " + JSON.stringify(babiesObj, 0, 4));
//     console.log("************************************************************");

//     setHistory(adultsObj);
//     setHistory(kidsObj);
//     setHistory(babiesObj);

//     assignSanta(adultsObj, adultNames, document.getElementById("adultsModal"));
//     assignSanta(kidsObj, kidNames, document.getElementById("kidsModal"));
//     assignSanta(babiesObj, babyNames, document.getElementById("babiesModal"));

//     console.log("************************************************************");
//     // console.log("After:::");
//     // console.log("Adults: " + JSON.stringify(adultsObj, 0, 4));
//     // console.log("Kids: " + JSON.stringify(kidsObj, 0, 4));
//     // console.log("Babies: " + JSON.stringify(babiesObj, 0, 4));
// }
