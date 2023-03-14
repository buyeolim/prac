/*
찬반투표
boj.kr/27736
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const votes = input[1].split(" ").map(Number);

let ans;
let res = [0, 0];

votes.forEach((val) => (val < 0 ? res[1]-- : res[val]++));

if (res[0] >= N / 2) ans = "INVALID";
else if (res[1] > 0) ans = "APPROVED";
else ans = "REJECTED";

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
