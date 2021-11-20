/*
곱셈
https://www.acmicpc.net/problem/2588
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let one = input[0];
let two = input[1];

let three = one * two[2];
let four = one * two[1];
let five = one * two[0];
let six = three + 10 * four + 100 * five;

console.log(three);
console.log(four);
console.log(five);
console.log(six);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
