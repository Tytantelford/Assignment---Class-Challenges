class Array {
  constructor(numbers) {
    this.numbers = numbers;
    this.start = 0;
    this.end = numbers.length - 1;
    this.removeFromFront = true;
  }

  getNumber() {
    if (this.start > this.end) return "";

    let currentNumber;
    if (this.removeFromFront) {
      currentNumber = this.numbers[this.start];
      this.start++;
    } else {
      currentNumber = this.numbers[this.end];
      this.end--;
    }
    this.removeFromFront = !this.removeFromFront;
    return currentNumber;
  }
}

const list = new Array([1, 2, 3, 4, 5]);

console.log(list.getNumber());
console.log(list.getNumber());
console.log(list.getNumber());
console.log(list.getNumber());
console.log(list.getNumber());
console.log(list.getNumber());
