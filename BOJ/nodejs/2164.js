/*
카드2
https://boj.kr/2164
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

const cards = Array.from({ length: N }, (v, i) => i + 1);

let type = 0;
let [front, rear] = [0, N - 1];
while (front !== rear) {
  if (type % 2 === 0) {
    // 제일 위에 있는 카드를 바닥에 버린다.
    front = (front + 1) % N;
  } else {
    // 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
    rear = (rear + 1) % N;
    cards[rear] = cards[front];
    front = (front + 1) % N;
  }
  type++;
}
const ans = cards[front];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
