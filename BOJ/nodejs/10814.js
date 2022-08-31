/*
나이순 정렬
boj.kr/10814
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const members = [];
for (let n = 0; n < N; n++) {
  let [age, name] = input[1 + n].split(" ");
  members.push([n + 1, 1 * age, name.trimEnd()]);
}

const ans = members.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log(ans.map((member) => `${member[1]} ${member[2]}`).join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
