/* Use getters and setters to Control Access to an Object
 */
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

class Thermostat {
    constructor(f) {
        this._f = f;
    }
    get temperature() {
       this._c = 5/9 * (this._f - 32);
       return this._c;
    }
    set temperature(c) {
        this._f = c * 9/5 + 32;
    }
}
const temp = new Thermostat(20);
console.log(temp.temperature);
temp.temperature = 25;
console.log(temp.temperature);
console.log(temp._f);