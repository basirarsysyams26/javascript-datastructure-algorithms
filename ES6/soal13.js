/* Destructuring via rest elements */
function removeFirstTwo(list) {
  const [, , ...rest] = list;
  return rest;
}
const x = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(removeFirstTwo(x));
