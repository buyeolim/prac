/*
알파벳 뒤집기
https://boj.kr/30032
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, D] = input[0].split(" ").map(Number);
const mat = new Array(N);
for (let n = 0; n < N; n++) {
  mat[n] = input[1 + n].split("");
}

for (let n = 0; n < N; n++) {
  for (let i = 0; i < mat[n].length; i++) {
    if (D === 1) {
      // 상하
      switch (mat[n][i]) {
        case "d":
          mat[n][i] = "q";
          break;
        case "b":
          mat[n][i] = "p";
          break;
        case "q":
          mat[n][i] = "d";
          break;
        case "p":
          mat[n][i] = "b";
          break;
      }
    } else {
      // 좌우
      switch (mat[n][i]) {
        case "d":
          mat[n][i] = "b";
          break;
        case "b":
          mat[n][i] = "d";
          break;
        case "q":
          mat[n][i] = "p";
          break;
        case "p":
          mat[n][i] = "q";
          break;
      }
    }
  }
}
const ans = mat.map((row) => row.join("")).join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
