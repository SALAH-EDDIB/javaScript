// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};


// Completer la fonction suivante
function updateRecords(id, prop, value) {

    if (value == null || value == '') {

        delete collection[id][prop]

    } else if (prop === "artist") {

        collection[id].artist = value

    } else if (prop === "tracks") {

        if (collection[id].tracks === undefined) {
            collection[id].tracks = [];
        }

        collection[id].tracks.push(value)

    } else if (prop === "album") {

        collection[id].album = value
    }




    return collection[id];
}


// var contacts = [{
//     "firstName": "Akira",
//     "lastName": "Laine",
//     "number": "0543236543",
//     "likes": ["Pizza", "Coding", "Brownie Points"]
// },
// {
//     "firstName": "Harry",
//     "lastName": "Potter",
//     "number": "0994372684",
//     "likes": ["Hogwarts", "Magic", "Hagrid"]
// },
// {
//     "firstName": "Sherlock",
//     "lastName": "Holmes",
//     "number": "0487345643",
//     "likes": ["Intriguing Cases", "Violin"]
// },
// {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["JavaScript", "Gaming", "Foxes"]
// },
// {
//     "Akira": 0,
//     "Harry": 1,
//     "Sherlock": 2,
//     "Kristian": 3,


// }

// ];

// let exist = false;

// function lookUpProfile(name, prop) {

// for (i = 0; i < contacts.length - 1; i++) {

//     if (contacts[i].firstName.includes(name)) {

//         exist = true;
//         if (contacts[i][prop] !== undefined) {

//             console.log(contacts[contacts[4][name]][prop])
//         } else {
//             console.log('Aucune propriété de ce type')
//         }

//     } else if (!contacts[i].firstName.includes(name) && exist === false) {
//         console.log('Aucun contact')
//     }


// }






// }

// lookUpProfile("Akia", "likes");