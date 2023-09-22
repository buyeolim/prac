/*
세준세비
boj.kr/1524
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];

const ans = new Array(T);
for (let t = 0; t < T; t++) {
  const _ = input[1 + 4 * t];
  const [N, M] = input[2 + 4 * t].split(" ").map(Number); // [세준 병사수, 세비 병사수]
  const S = input[3 + 4 * t].split(" ").map(Number); // 세준 각 병사의 힘
  const B = input[4 + 4 * t].split(" ").map(Number); // 세비 각 병사의 힘

  // 병사 힘 오름차순 정렬
  S.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let [n, m] = [0, 0]; // 세준, 세비 인덱스

  while (n !== N && m !== M) {
    if (S[n] > B[m]) {
      B[m++] = -1;
    } else if (S[n] < B[m]) {
      S[n++] = -1;
    } else {
      B[m++] = -1;
    }
  }

  ans[t] = N - n > M - m ? "S" : "B";
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
