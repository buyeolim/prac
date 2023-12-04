/*
가위 바위 보?
https://boj.kr/4493
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let lc = 0;
const t = +input[lc++];
const res = new Array(t);
for (let tc = 0; tc < t; tc++) {
  const n = +input[lc++];
  const cnt = [0, 0];
  for (let i = 0; i < n; i++) {
    const p = input[lc++].split(" ");
    switch (p[0]) {
      case "R":
        if (p[1] === "S") {
          cnt[0]++;
        } else if (p[1] === "P") {
          cnt[1]++;
        }
        break;
      case "P":
        if (p[1] === "R") {
          cnt[0]++;
        } else if (p[1] === "S") {
          cnt[1]++;
        }
        break;
      case "S":
        if (p[1] === "P") {
          cnt[0]++;
        } else if (p[1] === "R") {
          cnt[1]++;
        }
        break;
    }
  }

  if (cnt[0] > cnt[1]) {
    res[tc] = "Player 1";
  } else if (cnt[0] < cnt[1]) {
    res[tc] = "Player 2";
  } else {
    res[tc] = "TIE";
  }
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
