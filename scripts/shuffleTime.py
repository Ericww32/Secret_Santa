import numpy as np
import json

# Opening JSON file and returns JSON object as a dictionary
adultsJSON = json.load(open('../JSON/adults.json'))

namesArr = []

# Assign array iterating through the json list
for i in adultsJSON['person.name']:
    namesArr.append(i)

# Display original array
print("Original array: ", namesArr)

# Shuffle array
np.random.shuffle(namesArr)

# function assignSanta(obj, namesArr) {
#     var randomPick = namesArr[randomIndex];
#
#     if (obj.ignore == randomPick) {
#             shuffle(namesArr);
#     } else {
#         obj.person[i].assigned = randomPick;
#     }
# }

# Display shuffled array
print("Shuffled array: ", namesArr)

# Closing file
adultsJSON.close()
