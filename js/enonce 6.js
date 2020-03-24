// var contacts = [{
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop) {


//     if (contacts[0].firstName.includes(name)) {

//         if (contacts[0][prop] !== undefined) {
//             console.log(contacts[0][prop])

//         } else {
//             console.log('Aucune propriété de ce type')
//         }

//     } else if (contacts[1].firstName.includes(name)) {

//         if (contacts[1][prop] !== undefined) {

//             console.log(contacts[1][prop])

//         } else {

//             console.log('Aucune propriété de ce type')

//         }

//     } else if (contacts[2].firstName.includes(name)) {

//         if (contacts[2][prop] !== undefined) {

//             console.log(contacts[2][prop])

//         } else {

//             console.log('Aucune propriété de ce type')

//         }

//     } else if (contacts[3].firstName.includes(name)) {

//         if (contacts[3][prop] !== undefined) {

//             console.log(contacts[3][prop])

//         } else {

//             console.log('Aucune propriété de ce type')

//         }
//     } else {

//         console.log('Aucun contact')
//     }
// }

// lookUpProfile("Kristian", "lastName");



var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
    {
        "Akira": 0,
        "Harry": 1,
        "Sherlock": 2,
        "Kristian": 3,


    }

];

let exist = false;

function lookUpProfile(name, prop) {

    for (i = 0; i < contacts.length - 1; i++) {

        if (contacts[i].firstName.includes(name)) {

            exist = true;
            if (contacts[i][prop] !== undefined) {

                console.log(contacts[contacts[4][name]][prop])
            } else {
                console.log('Aucune propriété de ce type')
            }

        } else if (!contacts[i].firstName.includes(name) && exist === false) {

            exist = true;
            console.log('Aucun contact')

        }


    }






}
lookUpProfile("Kristian", "lastName");