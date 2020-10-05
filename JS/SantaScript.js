let adultDisplay = document.getElementById("adults");
let kidDisplay = document.getElementById("kids");
let babiesDisplay = document.getElementById("babies");

const adults = ["Brenda", "David", "Jackie", "Sam", "Annette", "Donnie", "Joe", "Cindy"];
const kids = ["Morgan", "Erin", "Imran", "Eric", "Melody", "Jeff", "Mikayla"];
const babies = ["Henry", "Baby Esat", "Ayla", "Izzy", "Lilly", "Mikey", "Aiden"];

let adultsAssignedList = ["Jackie", "Joe", "Cindy", "David", "Sam", "Brenda", "Donnie", "Annette"];
let kidsAssignedList = ["Melody", "Eric", "Morgan", "Mikayla", "Erin", "Imran", "Jeff"];
let babiesAssignedList = ["Lilly", "Izzy", "Mikey", "Baby Esat", "Aiden", "Ayla", "Henry"];

// shuffleAdults();
// shuffleKids();
// shuffleBabies();

function shuffleAdults() {
    adultsAssignedList = [];

    for (let i = 0; i < adults.length; i++) {
        let randomIndex = -1;
        let attempts = 0;
        while (randomIndex == -1 || randomIndex == i || adultsAssignedList.indexOf(adults[randomIndex]) != -1) {
            randomIndex = Math.floor(Math.random() * adults.length);
            attempts++;
            if (attempts >= adults.length) {
                shuffleAdults();
                return;
            }
        }

        var randomPick = adults[randomIndex];

        if (adults[i] == "Brenda") {
            if (randomPick == "David") {
                --i;
            }
        }

        if (adults[i] == "David") {
            if (randomPick == "Brenda") {
                --i;
            }
        }

        if (adults[i] == "Jackie") {
            if (randomPick == "Sam") {
                --i;
            }
        }

        if (adults[i] == "Sam") {
            if (randomPick == "Jackie") {
                --i;
            }
        }

        adultsAssignedList.push(randomPick);
    }
}

function shuffleKids() {
    kidsAssignedList = [];
    for (let i = 0; i < kids.length; i++) {
        let randomIndex = -1;
        let attempts = 0;
        while (randomIndex == -1 || randomIndex == i || kidsAssignedList.indexOf(kids[randomIndex]) != -1) {
            randomIndex = Math.floor(Math.random() * kids.length);
            attempts++;
            if (attempts >= kids.length) {
                shuffleKids();
                return;
            }
        }

        var randomPick = kids[randomIndex];

        if (kids[i] == "Erin") {
            if (randomPick == "Imran") {
                --i;
            }
        }

        if (kids[i] == "Imran") {
            if (randomPick == "Erin") {
                --i;
            }
        }

        if (kids[i] == "Melody") {
            if (randomPick == "Jeff" || randomPick == "Eric") {
                --i;
            }
        }

        if (kids[i] == "Jeff") {
            if (randomPick == "Melody" || randomPick == "Eric") {
                --i;
            }
        }

        if (kids[i] == "Eric") {
            if (randomPick == "Melody" || randomPick == "Jeff") {
                --i;
            }
        }

        kidsAssignedList.push(kids[randomIndex]);
    }
}

function shuffleBabies() {
    babiesAssignedList = [];
    for (let i = 0; i < babies.length; i++) {
        let randomIndex = -1;
        let attempts = 0;
        while (randomIndex == -1 || randomIndex == i || babiesAssignedList.indexOf(babies[randomIndex]) != -1) {
            randomIndex = Math.floor(Math.random() * babies.length);
            attempts++;
            if (attempts >= babies.length) {
                shuffleBabies();
                return;
            }
        }
        var randomPick = kids[randomIndex];

        if (babies[i] == "Ayla") {
            if (randomPick == "Aiden") {
                --i;
            }
        }

        if (babies[i] == "Aiden") {
            if (randomPick == "Ayla") {
                --i;
            }
        }

        if (babies[i] == "Lilly") {
            if (randomPick == "Izzy" || randomPick == "Mikey") {
                --i;
            }
        }

        if (babies[i] == "Izzy") {
            if (randomPick == "Lilly" || randomPick == "Mikey") {
                --i;
            }
        }

        if (babies[i] == "Mikey") {
            if (randomPick == "Izzy" || randomPick == "Lilly") {
                --i;
            }
        }

        babiesAssignedList.push(babies[randomIndex]);
    }
}

displayCalculated(adults, adultsAssignedList, adultDisplay);
displayCalculated(kids, kidsAssignedList, kidDisplay);
displayCalculated(babies, babiesAssignedList, babiesDisplay);

function displayCalculated(namesList, assignedList, columnDisplay) {
    let html = '<ul>';
    for (let i = 0; i < namesList.length; i++) {
        html += '<li>' + namesList[i] + ' ➡ ' + assignedList[i] + '</li>';
    }
    html += '</ul>';
    columnDisplay.innerHTML = html;
}
