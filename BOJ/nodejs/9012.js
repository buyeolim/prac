/*
괄호
https://boj.kr/9012
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = 1 * input[0];
const ans = new Array(T);
for (let t = 0; t < T; t++) {
  const PS = input[1 + t]; // 괄호 문자열(Parenthesis String, PS)

  const stack = new Array();
  let top = -1;
  for (let ch of PS) {
    if (ch === "(") {
      stack.push(ch);
    } else {
      if (stack[top] === "(") stack.pop();
      else stack.push(ch);
    }

    top = stack.length - 1;
  }

  ans[t] = top < 0 ? "YES" : "NO";
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
