let adultsDisplay = document.getElementById("adults");
let kidsDisplay = document.getElementById("kids");
let babiesDisplay = document.getElementById("babies");

var adultsJSON = '{ ' +
    '"person": [' +
        '{"name": "Brenda", "assigned": "Jackie", "ignore": "", "link": ""},' +
        '{"name": "David", "assigned": "Joe", "ignore": "", "link": ""},' +
        '{"name": "Jackie", "assigned": "Cindy", "ignore": "", "link": ""},' +
        '{"name": "Sam", "assigned": "David", "ignore": "", "link": ""},' +
        '{"name": "Annette", "assigned": "Sam", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/3PUOS221DGMJU?ref=cm_sw_sm_r_wl_ip_PLh48gOkiQzUJ"},' +
        '{"name": "Donnie", "assigned": "Brenda", "ignore": "", "link": ""},' +
        '{"name": "Joe", "assigned": "Donnie", "ignore": "", "link": ""},' +
        '{"name": "Cindy", "assigned": "Annette", "ignore": "", "link": ""}' +
    ']' +
'}';

var kidsJSON = '{ ' +
    '"person": [' +
        '{"name": "Eric", "assigned": "Mikayla", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/2TB6LH8QBNIRE?ref_=wl_share"},' +
        '{"name": "Erin", "assigned": "Eric", "ignore": "", "link": ""},' +
        '{"name": "Imran", "assigned": "Morgan", "ignore": "", "link": ""},' +
        '{"name": "Jeff", "assigned": "Imran", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/2BI9NMK0ZTYX3?ref_=wl_share"},' +
        '{"name": "Melody", "assigned": "Erin", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/RJX3PDJ6XB8S?ref_=wl_share"},' +
        '{"name": "Mikayla", "assigned": "Jeff", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/2GJV6MB1EZB9Z?ref_=wl_share"},' +
        '{"name": "Morgan", "assigned": "Melody", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/RQ4O9T8XMS5?ref_=wl_share"}' +
    ']' +
'}';

var babiesJSON = '{ ' +
    '"person": [' +
        '{"name": "Aiden", "assigned": "Henry", "ignore": "", "link": ""},' +
        '{"name": "Ayla", "assigned": "Mikey", "ignore": "", "link": ""},' +
        '{"name": "Ashlan", "assigned": "Izzy", "ignore": "", "link": ""},' +
        '{"name": "Henry", "assigned": "Lilly", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/EYCB04U0H7MY/ref=nav_wishlist_lists_3?_encoding=UTF8&type=wishlist"},' +
        '{"name": "Izzy", "assigned": "Ashlan", "ignore": "", "link": ""},' +
        '{"name": "Lilly", "assigned": "Aiden", "ignore": "", "link": "https://www.amazon.com/hz/wishlist/ls/3N3JBCVC6P85?ref=cm_sw_sm_r_wl_ip_UbTqwFHjZOtmH"},' +
        '{"name": "Mikey", "assigned": "Ayla", "ignore": "", "link": ""}' +
    ']' +
'}';

var adultsObj = JSON.parse(adultsJSON);
var kidsObj = JSON.parse(kidsJSON);
var babiesObj = JSON.parse(babiesJSON);

displayCalculated(adultsObj, adultsDisplay);
displayCalculated(kidsObj, kidsDisplay);
displayCalculated(babiesObj, babiesDisplay);

function displayCalculated(obj, columnDisplay) {
    let html = '<ul>';
    for (let i = 0; i < obj.person.length; i++) {
        if (getLink(obj, obj.person[i].assigned) == ""){
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

function getLink(obj, assigned) {
    var result;
    console.log(obj);
    console.log(assigned);
    for(var i = 0; i < obj.person.length; i++) {
        // look for the entry with a matching `name` value
        if (obj.person[i].name == assigned) {
            result = obj.person[i].link;
            console.log(result);
            break;
        }
    }
    return result;
}
