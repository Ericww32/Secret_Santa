// Get the current date
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

let reshuffle = 0;

let famJSON = '{ "person": [' +
        '{"name":"Brenda","assigned":"Imran","ignore":["David","Morgan","Lilly","Izzy","Mikey"],"history":"Sam","link":"https://www.amazon.com/hz/wishlist/ls/2KVZA4434Y4LT"},' +
        '{"name":"David","assigned":"Erin","ignore":["Brenda","Morgan","Lilly","Izzy","Mikey"],"history":"Joe","link":""},' +
        '{"name":"Jackie","assigned":"Morgan","ignore":["Sam","Erin","Imran","Aidan","Ayla","Aslan"],"history":"Brenda","link":"https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"},' +
        '{"name":"Sam","assigned":"Aria","ignore":["Jackie","Erin","Imran","Aidan","Ayla","Aslan"],"history":"Annette","link":""},' +
        '{"name":"Annette","assigned":"Mikayla","ignore":["Henry","Melody","Jeff","Eric", "Aria"],"history":"Cindy","link":"https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
        '{"name":"Joe","assigned":"Aslan","ignore":["Cindy","Mikayla"],"history":"David","link":""},' +
        '{"name":"Cindy","assigned":"Melody","ignore":["Joe","Mikayla"],"history":"Jackie","link":"https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"},' +
        '{"name":"Eric","assigned":"Lilly","ignore":["Henry","Annette","Melody","Jeff", "Aria"],"history":"Imran","link":"https://www.amazon.com/registries/gl/guest-view/3L2IRM8WFNWWA"},' +
        '{"name":"Erin","assigned":"Brenda","ignore":["Imran","Jackie","Sam","Aidan","Ayla","Aslan"],"history":"Morgan","link":""},' +
        '{"name":"Imran","assigned":"Annette","ignore":["Erin","Jackie","Sam","Aidan","Ayla","Aslan"],"history":"Jeff","link":""},' +
        '{"name":"Jeff","assigned":"Joe","ignore":["Henry","Annette","Melody","Eric", "Aria"],"history":"Erin","link":"https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
        '{"name":"Melody","assigned":"Aidan","ignore":["Henry","Annette","Jeff","Eric", "Aria"],"history":"Mikayla","link":"https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
        '{"name":"Mikayla","assigned":"Jeff","ignore":["Cindy","Joe"],"history":"Eric","link":"https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
        '{"name":"Morgan","assigned":"Ayla","ignore":["David","Brenda","Lilly","Izzy","Mikey"],"history":"Melody","link":"https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"},' +
        '{"name":"Aidan","assigned":"Henry","ignore":["Imran","Erin","Jackie","Sam","Ayla","Aslan"],"history":"Mikey","link":""},' +
        '{"name":"Ayla","assigned":"Mikey","ignore":["Aidan","Imran","Erin","Jackie","Sam","Ayla","Aslan"],"history":"Izzy","link":""},' +
        '{"name":"Aslan","assigned":"Cindy","ignore":["Aidan","Imran","Erin","Jackie","Sam","Ayla"],"history":"Lilly","link":""},' +
        '{"name":"Henry","assigned":"Izzy","ignore":["Annette","Melody","Jeff","Eric","Aria"],"history":"Aidan","link":"https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
        '{"name":"Aria","assigned":"David","ignore":["Annette","Melody","Jeff","Eric","Henry"],"history":"","link":""},{"name":"Izzy","assigned":"Sam","ignore":["David","Morgan","Lilly","Brenda","Mikey"],"history":"Ayla","link":""},' +
        '{"name":"Lilly","assigned":"Jackie","ignore":["David","Morgan","Brenda","Izzy","Mikey"],"history":"Henry","link":"https://www.amazon.com/registries/gl/guest-view/PK2YSMZEA27R"},' +
        '{"name":"Mikey","assigned":"Eric","ignore":["David","Morgan","Lilly","Izzy","Brenda"],"history":"Aslan","link":""}' +
    ']}';

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
  reshuffle++;
}

/*
 * Runs all the suffle functions together. This is the main function.
 */
function runShuffle() {
    reshuffle = 0;
    shuffle(famNames);
    assignSanta(famObj, famNames);
    document.getElementById("reshuffleNumber").innerHTML = "Number of reshuffles run in last shuffle: " + reshuffle;
}

function setHistory(obj) {
    for (let i = 0; i < obj.person.length; i++) {
        obj.person[i].history = obj.person[i].assigned;
    }
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

// *************************************************
// Save New Shuffled List
// *************************************************
function saveJSON() {
    let newfamObj = JSON.stringify(famObj);
    let contentType = "json";
    let title = (cYear + 1) + "_fam.json";
    var a = document.createElement("a");
    var file = new Blob([newfamObj], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = title;
    a.click();
}