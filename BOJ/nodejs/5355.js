/*
화성 수학
https://boj.kr/5355
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = +input[0];
const res = new Array(T).fill(0);
for (let t = 0; t < T; t++) {
  const [N, ...E] = input[1 + t]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele : 1 * ele));

  res[t] = N;
  for (let e of E) {
    switch (e) {
      case "@":
        res[t] *= 3;
        break;
      case "%":
        res[t] += 5;
        break;
      case "#":
        res[t] -= 7;
        break;
    }
  }
  res[t] = res[t].toFixed(2);
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
