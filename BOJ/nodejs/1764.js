/*
듣보잡
https://boj.kr/1764
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number); // [듣도 못한 사람수, 보도 못한 사람수]

const names = new Map();
for (let n = 0; n < N; n++) {
  names.set(input[1 + n]);
}
let cnt = 0;
const res = new Array();
for (let m = 0; m < M; m++) {
  if (names.has(input[1 + N + m])) {
    cnt++;
    res.push(input[1 + N + m]);
  }
}
const ans = cnt + "\n" + res.sort().join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
