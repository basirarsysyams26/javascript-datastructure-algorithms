/* Use class Syntax to Define a Constructor Function */

class Vegetable {
  constructor(name) {
    this.x = name;
  }
  x() {
    return this.x;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot);