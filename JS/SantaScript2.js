// Get the current date
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

let reshuffle = 0;

async function loadNames() {
  const response = await fetch("json/2022_fam.json");
  const data = await response.json();

  return data;
}

// Grab the JSON objects and pass it to a variable
// let famJSON = JSON.stringify(loadNames());

let famJSON = '{ ' +
    '"person": [' +
    '{"name": "Brenda", "assigned": "Sam", "ignore": ["David", "Morgan", "Lilly", "Izzy", "Mikey"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2KVZA4434Y4LT"},' +
    '{"name": "David", "assigned": "Joe", "ignore": ["Brenda", "Morgan", "Lilly", "Izzy", "Mikey"], "history": "", "link": ""},' +
    '{"name": "Jackie", "assigned": "Brenda", "ignore": ["Sam", "Erin", "Imran", "Aidan", "Ayla", "Aslan"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"},' +
    '{"name": "Sam", "assigned": "Annette", "ignore": ["Jackie", "Erin", "Imran", "Aidan", "Ayla", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Annette", "assigned": "Cindy", "ignore": ["Henry", "Melody", "Jeff", "Eric"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
    '{"name": "Joe", "assigned": "David", "ignore": ["Cindy", "Mikayla"], "history": "", "link": ""},' +
    '{"name": "Cindy", "assigned": "Jackie", "ignore": ["Joe", "Mikayla"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"},' +
    '{"name": "Eric", "assigned": "Imran", "ignore": ["Henry", "Annette", "Melody", "Jeff"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2TB6LH8QBNIRE?ref_=wl_share"},' +
    '{"name": "Erin", "assigned": "Morgan", "ignore": ["Imran", "Jackie", "Sam", "Aidan", "Ayla", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Imran", "assigned": "Jeff", "ignore": ["Erin", "Jackie", "Sam", "Aidan", "Ayla", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Jeff", "assigned": "Erin", "ignore": ["Henry", "Annette", "Melody", "Eric"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
    '{"name": "Melody", "assigned": "Mikayla", "ignore": ["Henry", "Annette", "Jeff", "Eric"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
    '{"name": "Mikayla", "assigned": "Eric", "ignore": ["Cindy", "Joe"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
    '{"name": "Morgan", "assigned": "Melody", "ignore": ["David", "Brenda", "Lilly", "Izzy", "Mikey"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"},' +
    '{"name": "Aidan", "assigned": "Mikey", "ignore": ["Imran", "Erin", "Jackie", "Sam", "Ayla", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Ayla", "assigned": "Izzy", "ignore": ["Aidan", "Imran", "Erin", "Jackie", "Sam", "Ayla", "Aslan"], "history": "", "link": ""},' +
    '{"name": "Aslan", "assigned": "Lilly", "ignore": ["Aidan", "Imran", "Erin", "Jackie", "Sam", "Ayla"], "history": "", "link": ""},' +
    '{"name": "Henry", "assigned": "Aidan", "ignore": ["Annette", "Melody", "Jeff", "Eric"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
    '{"name": "Izzy", "assigned": "Ayla", "ignore": ["David", "Morgan", "Lilly", "Brenda", "Mikey"], "history": "", "link": ""},' +
    '{"name": "Lilly", "assigned": "Henry", "ignore": ["David", "Morgan", "Brenda", "Izzy", "Mikey"], "history": "", "link": "https://www.amazon.com/registries/holiday/2HC3EM405FBX6/guest-view"},' +
    '{"name": "Mikey", "assigned": "Aslan", "ignore": ["David", "Morgan", "Lilly", "Izzy", "Brenda"], "history": "", "link": ""}' +
    ']' +
'}';

// Creating parsed JSON objects
let famObj = JSON.parse(famJSON);

// Create an array of names for each object
let famNames = createArrayNames(famObj);

function createArrayNames(obj) {
    let result = [];

    for (let i = 0; i < obj.person.length; i++) {
        result.push(obj.person[i].name);
    }

    return result;
}

// Shuffle every arrays
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);

  reshuffle ++;
}

// Assign the objects the new secret Santas
function assignSanta(obj, arr) {
    setHistory(obj);

    for (let i = 0; i < obj.person.length; i++) {

        if(obj.person[i].name == arr[i] ||
           obj.person[i].ignore[0] == arr[i] ||
           obj.person[i].ignore[1] == arr[i] ||
           obj.person[i].ignore[2] == arr[i] ||
           obj.person[i].ignore[3] == arr[i] ||
           obj.person[i].ignore[4] == arr[i] ||
           obj.person[i].ignore[5] == arr[i] ||
           obj.person[i].history == arr[i]) {

               shuffle(arr);
               i = -1;
        } else {
            obj.person[i].assigned = arr[i];
        }
    }

    displayNewlyShuffled(obj);
}

function displayNewlyShuffled(obj) {
    let col_0 = "<ul>";
    let col_1 = "<ul>";
    let col_2 = "<ul>";

    for (let i = 0; i < obj.person.length; i++) {
        if (i >= 14) {
            col_2 += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
        } else if (i >= 7 && i <= 13) {
            col_1 += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
        } else {
            col_0 += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
        }
    }

    col_0 += "</ul>";
    col_1 += "</ul>";
    col_2 += "</ul>";

    document.getElementById("column_0").innerHTML = col_0;
    document.getElementById("column_1").innerHTML = col_1;
    document.getElementById("column_2").innerHTML = col_2;
}

function setHistory(obj) {
    for (let i = 0; i < obj.person.length; i++) {
        obj.person[i].history = obj.person[i].assigned;
    }
}

/*
 * Runs all the suffle functions together. This is the main function.
 */
function runShuffle() {
    reshuffle = 0;

    shuffle(famNames);

    console.log("Before:::");
    console.log("Fam: " + JSON.stringify(famObj, 0, 4));
    console.log("************************************************************");

    assignSanta(famObj, famNames);

    console.log("************************************************************");
    console.log("After:::");
    console.log("Fam: " + JSON.stringify(famObj, 0, 4));

    console.log("Reshuffle attepts: " + reshuffle);
}

// *************************************************
// Future works
// *************************************************
function saveJSON(obj) {
    const link = document.querySelector(selector);
    let title = cYear + "_fam";
    link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(obj));
    link.setAttribute("download", `${title}.json`);
}
