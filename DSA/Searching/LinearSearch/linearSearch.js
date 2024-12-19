function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArr = [1, 2, 7, 4, 6, 9, 0, 11];
const target = 0;
const targetTwo = 90;
console.log(linearSearch(myArr, target)); // should return 1
console.log(linearSearch(myArr, targetTwo)); // should return -1
