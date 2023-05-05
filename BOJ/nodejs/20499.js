/*
Darius님 한타 안 함?
boj.kr/20499
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [K, D, A] = input[0].split("/").map(Number);

const ans = K + A < D || D === 0 ? "hasu" : "gosu";
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
