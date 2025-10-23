// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
/* 
    algoritma:
    1. buat variable untuk mendapatkan index dari parameter name atau property parameter name
    2. buat pengkondisian apabila firsname tidak ditemukan maka return No such contact, cek apakah index dari namenya ada atau tidak 
    3. apabila name ditemukan tetapi prop tidak ada maka return No such property
    4. apabila name dan propertynya ada maka return property dari index name
*/
/* 
    contacts[index][prop]
    masalah saat ini contacts[firstname][prop]
*/
/* function lookUpProfile(name, prop) {
    const index = contacts.findIndex((x) => x.firstName === name);
    if (contacts[index] == undefined) {
        return "No such contact";
    } else if (contacts[index][prop] == undefined) {
        return "No such property";
    } 
    return contacts[index][prop];
 
}

console.log(lookUpProfile("Akira", "klk")); */

function lookUpProfile(name, prop) {
    const contact = contacts.find((c) => c.firstName === name);
    if (!contact) {
        return "No such contact";
    }
    if (!(prop in contact)) {
        return "No such property";
    }
    return contact[prop];
}
console.log(lookUpProfile("Akira", "number"));


const person = {
    name: "Amel",
    umur: 20
}

// console.log(person."name")
