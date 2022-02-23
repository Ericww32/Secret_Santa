// Location of where data is to go
let adultsDisplay = document.getElementById("adults");
let kidsDisplay = document.getElementById("kids");
let babiesDisplay = document.getElementById("babies");

// Pull in the JSON data
fetch("../JSON/adults.json")
    .then(function(response) {
        const adultsJSON = response;
        console.log("Adults JSON: " + adultsJSON);
    })
    .catch(function(err) {
        console.log("Adults Faild to load JSON data...");
    });

fetch("../JSON/kids.json")
    .then(function(response) {
        const kidsJSON = response;
        console.log("Kids JSON: " + kidsJSON);
    })
    .catch(function(err) {
        console.log("Adults Faild to load JSON data...");
    });

fetch("../JSON/babies.json")
    .then(function(response) {
        const babiesJSON = response;
        console.log("Babies JSON: " + babiesJSON);
    })
    .catch(function(err) {
        console.log("Adults Faild to load JSON data...");
    });

// var adultsJSON = '{ ' +
//     '"person": [' +
//         '{"name": "Brenda", "assigned": "Cindy", "ignore": "", "link": ""},' +
//         '{"name": "David", "assigned": "Jackie", "ignore": "", "link": ""},' +
//         '{"name": "Jackie", "assigned": "Annette", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/36UDARP2M10ZQ?ref_=wl_share"},' +
//         '{"name": "Sam", "assigned": "Joe", "ignore": "", "link": ""},' +
//         '{"name": "Annette", "assigned": "David", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
//         '{"name": "Joe", "assigned": "Sam", "ignore": "", "link": ""},' +
//         '{"name": "Cindy", "assigned": "Brenda", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/45542NYYP0KO?ref_=wl_share"}' +
//     ']' +
// '}';
//
// var kidsJSON = '{ ' +
//     '"person": [' +
//         '{"name": "Eric", "assigned": "Morgan", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/2TB6LH8QBNIRE?ref_=wl_share"},' +
//         '{"name": "Erin", "assigned": "Jeff", "ignore": "", "link": ""},' +
//         '{"name": "Imran", "assigned": "Mikayla", "ignore": "", "link": ""},' +
//         '{"name": "Jeff", "assigned": "Erin", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
//         '{"name": "Melody", "assigned": "Imran", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
//         '{"name": "Mikayla", "assigned": "Melody", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
//         '{"name": "Morgan", "assigned": "Eric", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"}' +
//     ']' +
// '}';
//
// var babiesJSON = '{ ' +
//     '"person": [' +
//         '{"name": "Aiden", "assigned": "Lilly", "ignore": "", "link": ""},' +
//         '{"name": "Ayla", "assigned": "Henry", "ignore": "", "link": ""},' +
//         '{"name": "Aslan", "assigned": "Izzy", "ignore": "", "link": ""},' +
//         '{"name": "Henry", "assigned": "Mikey", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
//         '{"name": "Izzy", "assigned": "Aslan", "ignore": "", "link": ""},' +
//         '{"name": "Lilly", "assigned": "Ayla", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/3N3JBCVC6P85?ref=cm_sw_sm_r_wl_ip_UbTqwFHjZOtmH"},' +
//         '{"name": "Mikey", "assigned": "Aiden", "ignore": "", "link": ""}' +
//     ']' +
// '}';

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
    console.log(obj);
    console.log(assigned);
    for (var i = 0; i < obj.person.length; i++) {
        // look for the entry with a matching `name` value
        if (obj.person[i].name == assigned) {
            result = obj.person[i].link;
            console.log(result);
            break;
        }
    }
    return result;
}
