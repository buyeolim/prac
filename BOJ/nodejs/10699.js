/*
오늘 날짜
boj.kr/10699
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const today = new Date();
const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000;

const todayKR = new Date(utc + 9 * 60 * 60 * 1000);
const year = todayKR.getFullYear();
const month = todayKR.getMonth() + 1;
const date = todayKR.getDate();

let ans = `${year}-${month < 9 ? "0" + month : month}-${
  date < 9 ? "0" + date : date
}`;
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
