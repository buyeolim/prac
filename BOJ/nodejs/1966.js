/*
프린터 큐
boj.kr/1966
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
const T = 1 * input[line++];
let ans = [];
for (let t = 0; t < T; t++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const queue = input[line++].split(" ").map(Number);
  const target = Array(N).fill(false);

  target[M] = true;
  let check = false;
  let cnt = 0;
  while (queue.length) {
    let max = Math.max(...queue);
    queue[0] === max
      ? (cnt++, queue.shift(), (check = target.shift()))
      : (queue.push(queue.shift()), target.push(target.shift()));

    if (check) break;
  }

  ans.push(cnt);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
