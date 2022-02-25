import numpy as np
import json

# Opening JSON file and returns JSON object as a dictionary
# adultsLoad = open('../JSON/adults.json')
# adultsJSON = json.loads(adultsLoad)
#
# for x in json_load:
# 	print("%s: %d" % (x, json_load[x]))

with open('../JSON/family.json', 'r') as json_file:
	json_load = json.load(json_file)

print(json_load) # Figure out how to pretty print

# Assign array
arr = np.array(["Brenda", "David", "Jackie", "Sam", "Annette", "Joe", "Cindy"])
# arr = np.array(["Aiden", "Ayla", "Aslan", "Henry", "Izzy", "Lilly", "Mikey"])
# arr = np.array(["Eric", "Erin", "Imran", "Jeff", "Melody", "Mikayla", "Morgan"])

# Display original array
print("Original array: ", arr)

# Shuffle array
np.random.shuffle(arr)

# Display shuffled array
print("Shuffled array: ", arr)

# Assign people
# function assignSanta(obj, namesArr) {
#     var randomPick = namesArr[randomIndex];
#
#     if (obj.ignore == randomPick) {
#             shuffle(namesArr);
#     } else {
#         obj.person[i].assigned = randomPick;
#     }
# }

# Closing file
# adultsJSON.close()
