/*
에디터
boj.kr/1406
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0].trimEnd();
const N = 1 * input[1];
const L = [...S];
const R = [];
for (let n = 0; n < N; n++) {
  const cmd = input[2 + n].trimEnd().split(" ");
  switch (cmd[0]) {
    case "L":
      L.length > 0 ? R.push(L.pop()) : null;
      break;
    case "D":
      R.length > 0 ? L.push(R.pop()) : null;
      break;
    case "B":
      L.length > 0 ? L.pop() : null;
      break;
    case "P":
      L.push(cmd[1]);
      break;
  }
}

R.reverse();
console.log([...L, ...R].join(""));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
