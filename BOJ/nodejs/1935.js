/*
후위 표기식2
boj.kr/1935
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const postfix = input[1].trimEnd();
const nums = new Array(26).fill(null);
for (let n = 0; n < N; n++) {
  nums[n] = 1 * input[2 + n];
}

const stack = new Array();
for (let ch of postfix) {
  if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
    stack.push(nums[ch.charCodeAt() - 65]);
  } else {
    let rt = stack.pop();
    let lt = stack.pop();
    switch (ch) {
      case "+":
        stack.push(lt + rt);
        break;
      case "-":
        stack.push(lt - rt);
        break;
      case "*":
        stack.push(lt * rt);
        break;
      case "/":
        stack.push(lt / rt);
        break;
    }
  }
}

let ans = stack.pop().toFixed(2);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
