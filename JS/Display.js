// Pull in the JSON data
let familyJSON = '{ ' +
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
    '{"name": "Henry", "assigned": "Aidan", "ignore": ["Annette", "Melody", "Jeff", "Eric", "Aria"], "history": "", "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
    '{"name": "Aria", "assigned": "", "ignore": ["Annette", "Melody", "Jeff", "Eric", "Henry"], "history": "", "link": ""},' +
    '{"name": "Izzy", "assigned": "Ayla", "ignore": ["David", "Morgan", "Lilly", "Brenda", "Mikey"], "history": "", "link": ""},' +
    '{"name": "Lilly", "assigned": "Henry", "ignore": ["David", "Morgan", "Brenda", "Izzy", "Mikey"], "history": "", "link": "https://www.amazon.com/registries/holiday/2HC3EM405FBX6/guest-view"},' +
    '{"name": "Mikey", "assigned": "Aslan", "ignore": ["David", "Morgan", "Lilly", "Izzy", "Brenda"], "history": "", "link": ""}' +
    ']' +
    '}';

// Creating locally parsed JSON objects
let familyObj = JSON.parse(familyJSON);

// Display the data
displayCalculated(familyObj);

/**
 * displayCalculated
 * Displaying the data and putting it in the columns
 * @param {*} obj the family object containing the list of names and assigned people.
 */
function displayCalculated(obj) {
    let col_0 = "<ul>";
    let col_1 = "<ul>";
    let col_2 = "<ul>";

    for (let i = 0; i < obj.person.length; i++) {
        if (i >= 14) {
            col_2 += linkOrNo(obj, i);
        } else if (i >= 7 && i <= 13) {
            col_1 += linkOrNo(obj, i);
        } else {
            col_0 += linkOrNo(obj, i);
        }
    }

    col_0 += "</ul>";
    col_1 += "</ul>";
    col_2 += "</ul>";

    document.getElementById("santa_favs").innerHTML = col_0;
    document.getElementById("naughty_list").innerHTML = col_1;
    document.getElementById("nice_list").innerHTML = col_2;
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
            '<button class="btn-jolly"><a href="' + getLink(obj, obj.person[i].assigned) +
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
