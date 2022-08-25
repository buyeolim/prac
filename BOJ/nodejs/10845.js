/*
큐
boj.kr/10845
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = "";
const queue = [];
for (let n = 0; n < N; n++) {
  let cmd = input[1 + n].trim().split(" ");

  switch (cmd[0]) {
    case "push":
      queue.push(1 * cmd[1]);
      break;
    case "pop":
      if (queue.length > 0) {
        ans += `${queue.shift()}\n`;
      } else {
        ans += "-1\n";
      }
      break;
    case "size":
      ans += `${queue.length}\n`;
      break;
    case "empty":
      if (queue.length > 0) {
        ans += "0\n";
      } else {
        ans += "1\n";
      }
      break;
    case "front":
      if (queue.length > 0) {
        ans += `${queue[0]}\n`;
      } else {
        ans += "-1\n";
      }
      break;
    case "back":
      if (queue.length > 0) {
        ans += `${queue[queue.length - 1]}\n`;
      } else {
        ans += "-1\n";
      }
      break;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
