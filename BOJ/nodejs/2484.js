/*
주사위 네개
boj.kr/2484
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

let ans = 0;
for (let n = 0; n < N; n++) {
  const nums = input[1 + n]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let sum = 0;
  if (nums[0] === nums[1] && nums[1] === nums[2] && nums[2] === nums[3]) {
    // 1. 같은 눈이 4개가 나오면 50,000원+(같은 눈)×5,000원의 상금을 받게 된다.
    sum += 50000 + nums[0] * 5000;
  } else if (
    (nums[0] === nums[1] && nums[1] === nums[2]) ||
    (nums[1] === nums[2] && nums[2] === nums[3])
  ) {
    // 2. 같은 눈이 3개만 나오면 10,000원+(3개가 나온 눈)×1,000원의 상금을 받게 된다.
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
      sum += 10000 + nums[0] * 1000;
    } else {
      sum += 10000 + nums[1] * 1000;
    }
  } else if (nums[0] === nums[1] && nums[2] === nums[3]) {
    // 3. 같은 눈이 2개씩 두 쌍이 나오는 경우에는 2,000원+(2개가 나온 눈)×500원+(또 다른 2개가 나온 눈)×500원의 상금을 받게 된다.
    if (nums[0] === nums[1]) {
      sum += 2000 + nums[0] * 500 + nums[2] * 500;
    } else {
      sum += 2000 + nums[2] * 500 + nums[0] * 500;
    }
  } else if (
    nums[0] === nums[1] ||
    nums[1] === nums[2] ||
    nums[2] === nums[3]
  ) {
    // 4. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
    if (nums[0] === nums[1]) {
      sum += 1000 + nums[0] * 100;
    } else if (nums[1] === nums[2]) {
      sum += 1000 + nums[1] * 100;
    } else {
      sum += 1000 + nums[2] * 100;
    }
  } else {
    // 5. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
    sum += nums[3] * 100;
  }

  ans = Math.max(ans, sum);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
