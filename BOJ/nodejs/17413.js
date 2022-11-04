/*
단어 뒤집기 2
boj.kr/17413
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];

const stack = new Array();
let ans = "";
let lv = 0;
for (let ch of S) {
  switch (ch) {
    case "<":
      // reverse
      while (stack.length !== 0) {
        ans += stack.pop();
      }
      stack.push(ch);
      lv++;

      break;
    case ">":
      ans += stack.join("") + ">";
      let top = stack.length - 1;
      while (stack[top] !== "<") {
        stack.pop();
        top--;
      }
      stack.pop();
      lv--;

      break;
    case " ":
      if (lv === 0) {
        // reverse
        while (stack.length !== 0) {
          ans += stack.pop();
        }
        ans += " ";
      } else {
        stack.push(ch);
      }

      break;
    default:
      stack.push(ch);

      break;
  }
}
// reverse
while (stack.length !== 0) {
  ans += stack.pop();
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
