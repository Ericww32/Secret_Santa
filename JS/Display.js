let adultsDisplay = document.getElementById("adults");
let kidsDisplay = document.getElementById("kids");
let babiesDisplay = document.getElementById("babies");

var adultsJSON = '{ ' +
    '"person": [' +
        '{"name": "Brenda", "assigned": "Jackie", "ignore": "", "link": "#"},' +
        '{"name": "David", "assigned": "Joe", "ignore": "", "link": "#"},' +
        '{"name": "Jackie", "assigned": "Cindy", "ignore": "", "link": "#"},' +
        '{"name": "Sam", "assigned": "David", "ignore": "", "link": "#"},' +
        '{"name": "Annette", "assigned": "Sam", "ignore": "", "link": "#"},' +
        '{"name": "Donnie", "assigned": "Brenda", "ignore": "", "link": "#"},' +
        '{"name": "Joe", "assigned": "Donnie", "ignore": "", "link": "#"},' +
        '{"name": "Cindy", "assigned": "Annette", "ignore": "", "link": "#"}' +
    ']' +
'}';

var kidsJSON = '{ ' +
    '"person": [' +
        '{"name": "Eric", "assigned": "Mikayla", "ignore": "", "link": "#"},' +
        '{"name": "Erin", "assigned": "Eric", "ignore": "", "link": "#"},' +
        '{"name": "Imran", "assigned": "Morgan", "ignore": "", "link": "#"},' +
        '{"name": "Jeff", "assigned": "Imran", "ignore": "", "link": "#"},' +
        '{"name": "Melody", "assigned": "Erin", "ignore": "", "link": "#"},' +
        '{"name": "Mikayla", "assigned": "Jeff", "ignore": "", "link": "#"},' +
        '{"name": "Morgan", "assigned": "Melody", "ignore": "", "link": "#"}' +
    ']' +
'}';

var babiesJSON = '{ ' +
    '"person": [' +
        '{"name": "Aiden", "assigned": "Henry", "ignore": "", "link": "#"},' +
        '{"name": "Ayla", "assigned": "Mikey", "ignore": "", "link": "#"},' +
        '{"name": "Baby Esat", "assigned": "Izzy", "ignore": "", "link": "#"},' +
        '{"name": "Henry", "assigned": "Lilly", "ignore": "", "link": "#"},' +
        '{"name": "Izzy", "assigned": "Baby Esat", "ignore": "", "link": "#"},' +
        '{"name": "Lilly", "assigned": "Aiden", "ignore": "", "link": "#"},' +
        '{"name": "Mikey", "assigned": "Ayla", "ignore": "", "link": "#"}' +
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
        html += obj.person[i].name + ' ➡ ' + obj.person[i].assigned + '<br />' +
            '<button class="btn-jolly"><a href="' + getLink(obj, obj.person[i].assigned) +
            '">' + obj.person[i].assigned + '\'s wishlist</a></button><br />';
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
