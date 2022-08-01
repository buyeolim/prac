/*
최소공배수
boj.kr/13241
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map((x) => x * 1);

function euclidean(a, b) {
  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return a;
}

let gcd = euclidean(A, B);
let nA = parseInt(A / gcd);
let nB = parseInt(B / gcd);
let lcm = gcd * nA * nB;

console.log(lcm);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
