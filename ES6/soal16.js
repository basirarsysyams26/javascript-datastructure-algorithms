/* Write Concise Object Literal Declarations Using Object Property Shorthand */

// const createPerson = (firstName, age, gender) => {
//   // Only change code below this line
//   return { nama: firstName, age, gender };
// };
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Basir", "21", "Male"));

const person = {
    firstName : "basir",
    age: 21
};
const {nama: firstName, age} = {person};
console.log(nama);