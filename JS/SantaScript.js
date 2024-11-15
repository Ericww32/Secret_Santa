// Get the current date
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

/**
 * Reshuffle counter to see how many times the
 * shuffle had to be run before getting a satisfied result.
 */
let reshuffle = 0;

// JSON varaibles
let over_the_hill_JSON = '{ "person":[' +
    '{"name":"Brenda","assigned":"Mikayla","ignore":["David","Morgan","Lilly","Izzy","Mikey"],"history":"Imran","link":"https://www.amazon.com/hz/wishlist/ls/2KVZA4434Y4LT"},' +
    '{"name":"David","assigned":"Jackie","ignore":["Brenda","Morgan","Lilly","Izzy","Mikey"],"history":"Erin","link":""},' +
    '{"name":"Jackie","assigned":"Cindy","ignore":["Sam","Erin","Imran","Aidan","Ayla","Aslan"],"history":"Morgan","link":"https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"},' +
    '{"name":"Sam","assigned":"Joe","ignore":["Jackie","Erin","Imran","Aidan","Ayla","Aslan"],"history":"Aria","link":""},' +
    '{"name":"Annette","assigned":"Erin","ignore":["Henry","Melody","Jeff","Eric","Aria"],"history":"Mikayla","link":"https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
    '{"name":"Joe","assigned":"Eric","ignore":["Cindy","Mikayla"],"history":"Aslan","link":""},' +
    '{"name":"Cindy","assigned":"Morgan","ignore":["Joe","Mikayla"],"history":"Melody","link":"https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"},' +
    '{"name":"Eric","assigned":"David","ignore":["Henry","Annette","Melody","Jeff","Aria"],"history":"Lilly","link":"https://www.amazon.com/registries/gl/guest-view/3L2IRM8WFNWWA"},' +
    '{"name":"Erin","assigned":"Jeff","ignore":["Imran","Jackie","Sam","Aidan","Ayla","Aslan"],"history":"Brenda","link":"https://www.amazon.com/registries/gl/guest-view/39SGMJKKUOTKX"},' +
    '{"name":"Imran","assigned":"Lilly","ignore":["Erin","Jackie","Sam","Aidan","Ayla","Aslan"],"history":"Annette","link":""},' +
    '{"name":"Jeff","assigned":"Mikey","ignore":["Henry","Annette","Melody","Eric","Aria"],"history":"Joe","link":"https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
    '{"name":"Melody","assigned":"Brenda","ignore":["Henry","Annette","Jeff","Eric","Aria"],"history":"Aidan","link":"https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
    '{"name":"Mikayla","assigned":"Annette","ignore":["Cindy","Joe"],"history":"Jeff","link":"https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
    '{"name":"Morgan","assigned":"Sam","ignore":["David","Brenda","Lilly","Izzy","Mikey"],"history":"Ayla","link":"https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"},' +
    '{"name":"Lilly","assigned":"Melody","ignore":["David","Morgan","Brenda","Izzy","Mikey"],"history":"Jackie","link":"https://www.amazon.com/registries/gl/guest-view/PK2YSMZEA27R"},' +
    '{"name":"Mikey","assigned":"Imran","ignore":["David","Morgan","Lilly","Izzy","Brenda"],"history":"Eric","link":""}' +
    ']}';

let littles_JSON = '{ "person":[' +
    '{"name":"Aidan","assigned":"Aria","ignore":["Imran","Erin","Jackie","Sam","Ayla","Aslan"],"history":"Henry","link":"https://www.amazon.com/hz/wishlist/dl/invite/d4ILntS?ref=cm_sw_sm_r_un_un_jEiHUZ2rlrJtY"},' +
    '{"name":"Ayla","assigned":"Henry","ignore":["Aidan","Imran","Erin","Jackie","Sam","Aslan"],"history":"Mikey","link":""},' +
    '{"name":"Aslan","assigned":"Izzy","ignore":["Aidan","Imran","Erin","Jackie","Sam","Ayla"],"history":"Cindy","link":""},' +
    '{"name":"Henry","assigned":"Aidan","ignore":["Annette","Melody","Jeff","Aria"],"history":"Izzy","link":"https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
    '{"name":"Aria","assigned":"Ayla","ignore":["Annette","Melody","Jeff","Henry"],"history":"David","link":"https://www.amazon.com/hz/wishlist/ls/2IFD7ALJ45TJM?ref_=wl_share"},' +
    '{"name":"Izzy","assigned":"Aslan","ignore":["David","Morgan","Lilly","Brenda","Mikey"],"history":"Sam","link":""}' +
    ']}';

// Creating parsed JSON objects
let overTheHillObj = JSON.parse(over_the_hill_JSON);
let littlesObj = JSON.parse(littles_JSON);

// Creating backups of objects to fall back to for more accurate results
const overTheHillObjOrig = JSON.parse(over_the_hill_JSON);
const littlesObjOrig = JSON.parse(littles_JSON);

// Set the copyright and year
document.getElementById("currYear").innerHTML = "Copyright © Willoughby " + cYear;
document.getElementById("getYear").innerHTML = cYear;

// Create an array of names for each object
let overTheHillNames = createArrayNames(overTheHillObj);
let littlesNames = createArrayNames(littlesObj);

// Display the data
displayOverTheHills(overTheHillObj);
displayLittles(littlesObj);

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
    // Shuffling names
    shuffle(overTheHillNames);
    shuffle(littlesNames);
    // Assigning people... other people
    let overTheHills = assignSanta(overTheHillObj, overTheHillNames);
    let lils = assignSanta(littlesObj, littlesNames);
    // Display output
    displayOverTheHillsShuffled(overTheHills);
    displayLittlesShuffled(lils);
    // Logging scores
    console.log("Reshuffle Count: " + reshuffle);
}

function setHistory(obj) {
    for (let i = 0; i < obj.person.length; i++) {
        obj.person[i].history = obj.person[i].assigned;
    }
}

// Assign the objects the new Secret Santas
function assignSanta(obj, arr) {
    setHistory(obj);

    for (let i = 0; i < obj.person.length; i++) {

        if (obj.person[i].name == arr[i] ||
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

    return obj;
}

/**
 * linkOrNo
 * Link or no link (that is the question)
 * @param {*} obj the family object containing the list of names and assigned people.
 * @param {*} i index placement of the preceeding loop to find the assigned person.
 * @returns the HTML to use depending on if a link is found or not.
 */
function linkOrNo(obj, i) {
    let result = "";

    if (getLink(obj, obj.person[i].assigned) == "") {
        result += obj.person[i].name + ' ➡ ' + obj.person[i].assigned + '<br />' +
            '<button class="btn-jolly-dead">' + obj.person[i].assigned + '\'s wishlist</a></button><br />';
    } else {
        result += obj.person[i].name + ' ➡ ' + obj.person[i].assigned + '<br />' +
            '<button class="btn-jolly"><a style="color: black;" href="' + getLink(obj, obj.person[i].assigned) +
            '">' + obj.person[i].assigned + '\'s wishlist</a></button><br />';
    }

    return result;
}

/**
 * getLink
 * Exactly how it sounds. This function gets the link from the person that is assigned
 * @param {*} obj the family object containing the list of names and assigned people.
 * @param {*} assigned the person assigned to the gift giver.
 * @returns a link of the assigned person's wishlist or a blank ""
 */
function getLink(obj, assigned) {
    var result;

    for (var i = 0; i < obj.person.length; i++) {
        // look for the entry with a matching `name` value
        if (obj.person[i].name == assigned) {
            result = obj.person[i].link;
            break;
        }
    }
    return result;
}

/**
 * displayOverTheHills
 * Displaying the data and putting it in the columns
 * @param {*} obj the "over the hill" object containing the list of names and assigned people.
 */
function displayOverTheHills(obj) {
    let col_0 = "<ul>";
    let col_1 = "<ul>";

    for (let i = 0; i < obj.person.length; i++) {
        if (i >= 8) {
            col_1 += linkOrNo(obj, i);
        } else {
            col_0 += linkOrNo(obj, i);
        }
    }

    col_0 += "</ul>";
    col_1 += "</ul>";

    document.getElementById("santa_favs").innerHTML = col_0;
    document.getElementById("naughty_list").innerHTML = col_1;
}

/**
 * displayLittles
 * Displaying the data and putting it in the columns
 * @param {*} obj the "littles" object containing the list of names and assigned people.
 */
function displayLittles(obj) {
    let lil_column = "<ul>";

    for (let i = 0; i < obj.person.length; i++) {
        lil_column += linkOrNo(obj, i);
    }

    lil_column += "</ul>";

    document.getElementById("nice_list").innerHTML = lil_column;
}

/**
 * displayOverTheHillsShuffled
 * Displaying the data and putting it in the columns
 * @param {*} obj the "over the hill" object containing the list of names and assigned people.
 */
function displayOverTheHillsShuffled(obj) {
    let col_0 = "<ul>";
    let col_1 = "<ul>";

    for (let i = 0; i < obj.person.length; i++) {
        if (i >= 8) {
            col_1 += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
        } else {
            col_0 += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
        }
    }

    col_0 += "</ul>";
    col_1 += "</ul>";

    document.getElementById("column_0").innerHTML = col_0;
    document.getElementById("column_1").innerHTML = col_1;
}

/**
 * displayLittlesShuffled
 * Displaying the data and putting it in the columns
 * @param {*} obj the "littles" object containing the list of names and assigned people.
 */
function displayLittlesShuffled(obj) {
    let col_2 = "<ul>";

    for (let i = 0; i < obj.person.length; i++) {
        col_2 += obj.person[i].name + " now gets " + obj.person[i].assigned + "<br />*******<br />";
    }

    col_2 += "</ul>";

    document.getElementById("column_2").innerHTML = col_2;
}

/**
 * save_over_the_hill_JSON
 * Save New Over The Hill Shuffled List
 */
function save_over_the_hill_JSON() {
    let newfamObj = JSON.stringify(overTheHillObj);
    let contentType = "json";
    var file = new Blob([newfamObj], { type: contentType });

    let title = (cYear) + "_over_the_hill.json";
    var a = document.createElement("a");

    a.href = URL.createObjectURL(file);
    a.download = title;
    a.click();
}

/**
 * save_littles_JSON
 * Save New Littles Shuffled List
 */
function save_littles_JSON() {
    let newfamObj = JSON.stringify(littlesObj);
    let contentType = "json";
    var file = new Blob([newfamObj], { type: contentType });

    let title = (cYear) + "_littles.json";
    var a = document.createElement("a");

    a.href = URL.createObjectURL(file);
    a.download = title;
    a.click();
}