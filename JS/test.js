let kidDisplay = document.getElementById("kids");

readTextFile("./JSON_Kids.txt", function(kidsJSON){
    var kidsObj = JSON.parse(kidsJSON);
    console.log(kidsObj);
});

displayCalculated(kidsObj, kidDisplay);

function displayCalculated(obj, columnDisplay) {
    let html = '<ul>';
    for (let i = 0; i < obj.person.length; i++) {
        html += '<li>' + obj.person[i].name + ' ➡ ' + obj.person[i].assigned + '<br />' +
            '<button class="btn-jolly"><a href="' + getLink(obj, obj.person[i].assigned) +
            '">' + obj.person[i].assigned + '\'s wishlist</a></button></li>';
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

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
