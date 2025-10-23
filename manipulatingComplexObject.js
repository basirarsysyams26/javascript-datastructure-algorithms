const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["DC", "8T", "LP"],
    gold: true,
  },
  {
    artist: "testing",
    title: "testing",
    release_year: 123,
    formats: ["testing", 123],
    gold: false,
  },
];
const result = myMusic[1]["title"];
console.log(result);

const person = {
  test1: "testing 123",
  test2: "abc",
};
const result2 = person.test2;
console.log(result2)
