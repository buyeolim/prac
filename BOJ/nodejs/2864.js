/*
5와 6의 차이
boj.kr/2864
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = input[0].split(" ");

let min = 1 * A.replace(/[6]/g, "5") + 1 * B.replace(/[6]/g, "5");
let max = 1 * A.replace(/[5]/g, "6") + 1 * B.replace(/[5]/g, "6");

console.log(min, max);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
