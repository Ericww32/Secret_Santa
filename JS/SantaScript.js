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
let over_the_hill_JSON = {
    "person": [
        {
            "name": "Brenda",
            "assigned": "Robert",
            "ignore": ["David", "Morgan", "Lilly", "Izzy", "Mikey"],
            "history": "Melody",
            "link": "https://www.amazon.com/hz/wishlist/ls/2KVZA4434Y4LT"
        },
        {
            "name": "David",
            "assigned": "Imran",
            "ignore": ["Brenda", "Morgan", "Lilly", "Izzy", "Mikey"],
            "history": "Jeff",
            "link": "https://www.amazon.com/hz/wishlist/ls/8YPVRU8AU63M?type=wishlist"
        },
        {
            "name": "Jackie",
            "assigned": "Trystan",
            "ignore": ["Sam", "Erin", "Imran", "Aidan", "Ayla", "Aslan"],
            "history": "Mikey",
            "link": "https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"
        },
        {
            "name": "Sam",
            "assigned": "Eric",
            "ignore": ["Jackie", "Erin", "Imran", "Aidan", "Ayla", "Aslan"],
            "history": "David",
            "link": ""
        },
        {
            "name": "Annette",
            "assigned": "Sam",
            "ignore": ["Henry", "Robert", "Melody", "Jeff", "Eric", "Aria"],
            "history": "Cindy",
            "link": "https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"
        },
        {
            "name": "Robert",
            "assigned": "Morgan",
            "ignore": ["Henry", "Annette", "Melody", "Jeff", "Eric", "Aria"],
            "history": "Trystan",
            "link": ""
        },
        {
            "name": "Joe",
            "assigned": "Annette",
            "ignore": ["Cindy", "Mikayla"],
            "history": "Lilly",
            "link": ""
        },
        {
            "name": "Cindy",
            "assigned": "Lilly",
            "ignore": ["Joe", "Mikayla"],
            "history": "Sam",
            "link": "https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"
        },
        {
            "name": "Eric",
            "assigned": "David",
            "ignore": ["Henry", "Robert", "Annette", "Melody", "Jeff", "Aria"],
            "history": "Joe",
            "link": "https://www.amazon.com/registries/gl/guest-view/3L2IRM8WFNWWA"
        },
        {
            "name": "Erin",
            "assigned": "Mikey",
            "ignore": ["Imran", "Jackie", "Sam", "Aidan", "Ayla", "Aslan"],
            "history": "Eric",
            "link": "https://www.amazon.com/registries/gl/guest-view/39SGMJKKUOTKX"
        },
        {
            "name": "Imran",
            "assigned": "Melody",
            "ignore": ["Erin", "Jackie", "Sam", "Aidan", "Ayla", "Aslan"],
            "history": "Brenda",
            "link": ""
        },
        {
            "name": "Jeff",
            "assigned": "Jackie",
            "ignore": ["Henry", "Robert", "Annette", "Melody", "Eric", "Aria"],
            "history": "Mikayla",
            "link": "https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"
        },
        {
            "name": "Melody",
            "assigned": "Brenda",
            "ignore": ["Henry", "Robert", "Annette", "Jeff", "Eric", "Aria"],
            "history": "Imran",
            "link": "https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"
        },
        {
            "name": "Mikayla",
            "assigned": "Jeff",
            "ignore": ["Cindy", "Joe"],
            "history": "Morgan",
            "link": "https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"
        },
        {
            "name": "Morgan",
            "assigned": "Mikayla",
            "ignore": ["David", "Brenda", "Lilly", "Izzy", "Trystan", "Mikey"],
            "history": "Jackie",
            "link": "https://www.amazon.com/hz/wishlist/ls/U52SDC73CKFW?ref_=wl_share"
        },
        {
            "name": "Lilly",
            "assigned": "Cindy",
            "ignore": ["David", "Morgan", "Brenda", "Izzy", "Trystan", "Mikey"],
            "history": "Annette",
            "link": "https://www.amazon.com/registries/gl/guest-view/PK2YSMZEA27R"
        },
        {
            "name": "Trystan",
            "assigned": "Erin",
            "ignore": ["Lilly", "Morgan", "David", "Brenda", "Izzy", "Mikey"],
            "history": "Robert",
            "link": ""
        },
        {
            "name": "Mikey",
            "assigned": "Joe",
            "ignore": ["David", "Trystan", "Morgan", "Lilly", "Izzy", "Brenda"],
            "history": "Erin",
            "link": "https://www.amazon.com/hz/wishlist/ls/3Q58Z88ZHNE6Y?ref=cm_sw_sm_r_un_un_pLxxKqB5yIQir"
        }
    ]
};

let littles_JSON = {
    "person": [
        {
            "name": "Aidan",
            "assigned": "Henry",
            "ignore": ["Imran", "Erin", "Jackie", "Sam", "Ayla", "Aslan"],
            "history": "Izzy",
            "link": "https://www.amazon.com/hz/wishlist/ls/1CSZFNNW942G8?ref=cm_sw_sm_r_un_un_U7DzFV0nopuBA"
        },
        {
            "name": "Ayla",
            "assigned": "Izzy",
            "ignore": ["Aidan", "Imran", "Erin", "Jackie", "Sam", "Aslan"],
            "history": "Aria",
            "link": "https://www.amazon.com/registries/gl/guest-view/2Z62GSZWETSQ2?ref_=cm_sw_r_apin_ggr-subnav-share_509QZ09DV816KAHAFJBV&language=en-US"
        },
        {
            "name": "Aslan",
            "assigned": "Aria",
            "ignore": ["Aidan", "Imran", "Erin", "Jackie", "Sam", "Ayla"],
            "history": "Henry",
            "link": ""
        },
        {
            "name": "Henry",
            "assigned": "Ayla",
            "ignore": ["Annette", "Melody", "Jeff", "Aria"],
            "history": "Aslan",
            "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"
        },
        {
            "name": "Aria",
            "assigned": "Aslan",
            "ignore": ["Annette", "Melody", "Jeff", "Henry"],
            "history": "Aidan",
            "link": "https://www.amazon.com/hz/wishlist/ls/2IFD7ALJ45TJM?ref_=wl_share"
        },
        {
            "name": "Izzy",
            "assigned": "Aidan",
            "ignore": ["David", "Morgan", "Lilly", "Brenda", "Mikey"],
            "history": "Ayla",
            "link": ""
        }
    ]
};

// Creating backups of objects to fall back to for more accurate results
const over_the_hill_JSONOrig = over_the_hill_JSON;
const littles_JSONOrig = littles_JSON;

// Set the copyright and year
document.getElementById("currYear").innerHTML = "Copyright © Willoughby " + cYear;

// Create an array of names for each object
let overTheHillNames = createArrayNames(over_the_hill_JSON);
let littlesNames = createArrayNames(littles_JSON);

// Display the data
displayOverTheHills(over_the_hill_JSON);
displayLittles(littles_JSON);

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
    // Assigning people
    let overTheHills = assignSanta(over_the_hill_JSON, overTheHillNames);
    let lils = assignSanta(littles_JSON, littlesNames);
    // Wait 5 seconds before displaying
    setTimeout(() => {
        console.log("Waited for 4 seconds");
        // Play winning music
        playWinner();
    }, 4000);
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
        if (i >= 9) {
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
        if (i >= 10) {
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
    let newfamObj = JSON.stringify(over_the_hill_JSON);
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
    let newfamObj = JSON.stringify(littles_JSON);
    let contentType = "json";
    var file = new Blob([newfamObj], { type: contentType });

    let title = (cYear) + "_littles.json";
    var a = document.createElement("a");

    a.href = URL.createObjectURL(file);
    a.download = title;
    a.click();
}