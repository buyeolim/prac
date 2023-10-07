/*
연산자 끼워넣기 (2)
boj.kr/15658
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const nums = input[1].split(" ").map(Number);
const ops = input[2].split(" ").map(Number); // [+, -, *, /]

function dfs(idx, res, ops) {
  if (idx === N) {
    [ans[0], ans[1]] = [Math.max(ans[0], res), Math.min(ans[1], res)];

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (ops[i] > 0) {
      const newOps = [...ops.slice(0, i), ops[i] - 1, ...ops.slice(i + 1)];
      i === 0 && dfs(idx + 1, res + nums[idx], newOps);
      i === 1 && dfs(idx + 1, res - nums[idx], newOps);
      i === 2 && dfs(idx + 1, res * nums[idx], newOps);
      i === 3 &&
        dfs(
          idx + 1,
          res < 0
            ? Math.floor(-res / nums[idx]) * -1
            : Math.floor(res / nums[idx]),
          newOps
        );
    }
  }
}

const ans = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]; // [최대, 최소]

dfs(1, nums[0], ops); // [사용 연산자 수, 연산 결과값, 각 연산자의 수]

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
