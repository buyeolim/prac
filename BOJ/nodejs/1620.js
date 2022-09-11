/*
나는야 포켓몬 마스터 이다솜
boj.kr/1620
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arrP = Array(N + 1).fill(-1);
const mapP = new Map();
for (let n = 0; n < N; n++) {
  let p = input[1 + n];

  arrP[n + 1] = p;
  mapP.set(p, n + 1);
}

const ans = [];
for (let m = 0; m < M; m++) {
  let q = input[1 + N + m];
  Number.isNaN(1 * q) ? ans.push(mapP.get(q)) : ans.push(arrP[1 * q]);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
