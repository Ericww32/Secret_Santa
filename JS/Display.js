// Location of where data is to go
let adultsDisplay = document.getElementById("adults");
let kidsDisplay = document.getElementById("kids");
let babiesDisplay = document.getElementById("babies");

// Pull in the JSON data
var adultsJSON = '{ ' +
    '"person": [' +
    '{"name": "Brenda", "assigned": "Sam", "ignore": ["David"], "link": ""},' +
    '{"name": "David", "assigned": "Joe", "ignore": ["Brenda"], "link": ""},' +
    '{"name": "Jackie", "assigned": "Brenda", "ignore": ["Sam"], "link": "https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"},' +
    '{"name": "Sam", "assigned": "Annette", "ignore": ["Jackie"], "link": ""},' +
    '{"name": "Annette", "assigned": "Cindy", "ignore": [""], "link": "https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
    '{"name": "Joe", "assigned": "David", "ignore": ["Cindy"], "link": ""},' +
    '{"name": "Cindy", "assigned": "Jackie", "ignore": ["Joe"], "link": "https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"}' +
    ']' +
'}';

var kidsJSON = '{ ' +
    '"person": [' +
    '{"name": "Eric", "assigned": "Imran", "ignore": ["Melody", "Jeff"], "link": "https://www.amazon.com/hz/wishlist/ls/2TB6LH8QBNIRE?ref_=wl_share"},' +
    '{"name": "Erin", "assigned": "Morgan", "ignore": ["Imran"], "link": ""},' +
    '{"name": "Imran", "assigned": "Jeff", "ignore": ["Erin"], "link": ""},' +
    '{"name": "Jeff", "assigned": "Erin", "ignore": ["Melody", "Eric"], "link": "https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
    '{"name": "Melody", "assigned": "Mikayla", "ignore": ["Jeff", "Eric"], "link": "https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
    '{"name": "Mikayla", "assigned": "Melody", "ignore": [""], "link": "https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
    '{"name": "Morgan", "assigned": "Eric", "ignore": [""], "link": "https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"}' +
    ']' +
'}';

var babiesJSON = '{ ' +
    '"person": [' +
    '{"name": "Aiden", "assigned": "Mikey", "ignore": ["Ayla", "Aslan"], "link": ""},' +
    '{"name": "Ayla", "assigned": "Izzy", "ignore": ["Aiden", "Aslan"], "link": ""},' +
    '{"name": "Aslan", "assigned": "Lilly", "ignore": ["Ayla", "Aiden"], "link": ""},' +
    '{"name": "Henry", "assigned": "Aiden", "ignore": [""], "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
    '{"name": "Izzy", "assigned": "Ayla", "ignore": ["Lilly", "Mikey"], "link": ""},' +
    '{"name": "Lilly", "assigned": "Henry", "ignore": ["Izzy", "Mikey"], "link": "https://www.amazon.com/hz/wishlist/ls/3N3JBCVC6P85?ref=cm_sw_sm_r_wl_ip_UbTqwFHjZOtmH"},' +
    '{"name": "Mikey", "assigned": "Aslan", "ignore": ["Izzy", "Lilly"], "link": ""}' +
    ']' +
'}';

// Creating locally parsed JSON objects
var adultsObj = JSON.parse(adultsJSON);
var kidsObj = JSON.parse(kidsJSON);
var babiesObj = JSON.parse(babiesJSON);

// Displaying the data
displayCalculated(adultsObj, adultsDisplay);
displayCalculated(kidsObj, kidsDisplay);
displayCalculated(babiesObj, babiesDisplay);

// Displaying the data and putting it where it belongs
function displayCalculated(obj, columnDisplay) {
    let html = '<ul>';
    for (let i = 0; i < obj.person.length; i++) {
        if (getLink(obj, obj.person[i].assigned) == "") {
            html += obj.person[i].name + ' ➡ ' + obj.person[i].assigned + '<br />' +
                '<button class="btn-jolly-dead">' + obj.person[i].assigned + '\'s wishlist</a></button><br />';
        } else {
            html += obj.person[i].name + ' ➡ ' + obj.person[i].assigned + '<br />' +
                '<button class="btn-jolly"><a href="' + getLink(obj, obj.person[i].assigned) +
                '">' + obj.person[i].assigned + '\'s wishlist</a></button><br />';
        }
    }
    html += '</ul>';
    columnDisplay.innerHTML = html;
}

// Exactly how it sounds.
// This function gets the link from the person that is assigned
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
