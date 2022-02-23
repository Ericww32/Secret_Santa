// This script needs to be overhauled to
// better handle what happens on december 25.
// Now that this site is using JSON,
// the shuffle method can be simplified

// 1. Get the current date
// 2. Check to see if the current date is Dec 25
// 3. If it is Dec 25 run this script

// SCRIPT STARTS HERE
// ******************
// 4. Grab the JSON objects and pass it to a variable
// 5. Create an array of names for each object

// 6. Shuffle every array
// **********************
// shuffle(adultsArr);
// shuffle(kidsArr);
// shuffle(babiesArr);

// 7. Assign the objects the new secret Santas
// *******************************************
// assignSanta(obj, adultsArr);
// assignSanta(obj, kidsArr);
// assignSanta(obj, babiesArr);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function assignSanta(obj, array) {
    var randomPick = array[randomIndex];

    if (obj.ignore == randomPick) {
            shuffle(array);
    } else {
        obj.person[i].assigned = randomPick;
    }
}
