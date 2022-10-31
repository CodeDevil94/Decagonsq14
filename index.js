"use strict";
//CHALLENGE  1

function countTruthy(arr) {
  let count = 0;
  for (let element of arr) if (element) count++;
  return count;
}

console.log(countTruthy([6, 3, 0, 30, 7]));
console.log(countTruthy(["", 3, 0, 30, 7]));
console.log(countTruthy(["", 0, 0, undefined, 7]));

//CHALLENGE 2

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
}
console.log(fizzBuzz(15));

//CHALLENGE 4

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let score = sum / arr.length;
  if (score < 50) {
    return "F";
  }
  if (score >= 50 && score <= 59) {
    return "E";
  }
  if (score >= 60 && score <= 69) {
    return "D";
  }
  if (score >= 70 && score <= 79) {
    return "B";
  }
  if (score <= 80 && score <= 89) {
    return "A";
  } else {
    return " A genuis";
  }
}
console.log(calcAverage([80, 80, 70]));
console.log(calcAverage([19, 5, 42, 2, 77]));
console.log(calcAverage([59, 80, 40, 2, 77]));
console.log(calcAverage([89, 50, 40, 90, 40]));

//CHALLENGE 5

function filterList(num) {
  return num.filter((x) => typeof x === "number");
}

console.log(filterList([1, 2, "a", "b"]));
console.log(filterList([1, "a", "b", 0, 15]));
console.log(filterList([1, 2, "aasf", "1", "123", 123]));
