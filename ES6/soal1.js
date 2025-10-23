let a;
for (let b = 0; b < 4; b++) {
  console.log(b);
  if (b === 2) {
    a = function() {
      return b;
    } 
  }
}
console.log(a());