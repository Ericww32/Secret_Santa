var kidsArray; // to be used for the assigned section of the JSON

var kidsJSON = '{"person": [' +
    '{"name": "Eric", "assigned": "Erin", "ignore": "Jeff, Melody", "link": "https://www.apple.com"},' +
    '{"name": "Erin", "assigned": "Eric", "ignore": "Imran", "link": "https://www.bing.com"},' +
    '{"name": "Imran", "assigned": "Jeff", "ignore": "Erin", "link": "https://www.facebook.com"},' +
    '{"name": "Jeff", "assigned": "Morgan", "ignore": "Melody, Eric", "link": "https://www.amazon.com"},' +
    '{"name": "Morgan", "assigned": "Melody", "ignore": "", "link": "https://www.google.com"}' +
']}';

var kidsObj = JSON.parse(kidsJSON);

kidsArray = assignArray(kidsArray);
kidsArray = shuffle(kidsArray);


function assignArray(array) {
    array = [];
    for (var i = 0; i < array.length; i++) {
        array[i] = kidsJSON.getName();
        console.log(array[i]);
    }
}

function shuffle(array) {
    array = [];
   for (var i = array.length - 1; i > 0; i--) {

       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));

       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }

   return array;
}
