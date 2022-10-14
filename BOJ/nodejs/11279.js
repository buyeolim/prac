/*
최대 힙
boj.kr/11279
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const maxHeap = {
  arr: [null],
  push(x) {
    this.arr.push(x);

    let idx = this.arr.length - 1; // current node index
    let pidx = Math.floor(idx / 2); // parent node index
    while (idx > 1 && this.arr[idx] > this.arr[pidx]) {
      [this.arr[pidx], this.arr[idx]] = [this.arr[idx], this.arr[pidx]]; // swap

      idx = pidx;
      pidx = Math.floor(idx / 2);
    }
  },
  pop() {
    let max = this.arr[1] || null;
    let val = this.arr[this.arr.length - 1] || null;
    if (val !== null) {
      this.arr[1] = val;
      this.arr.pop();
    }

    let idx = 1; // current node idx
    let lidx = 2 * idx; // left-child node index
    let ridx = 2 * idx + 1; // right-child node index
    let cidx;
    while (
      (cidx = this.arr[lidx] > (this.arr[ridx] || -Infinity) ? lidx : ridx)
    ) {
      if (val >= this.arr[cidx] || this.arr[cidx] === undefined) break;

      [this.arr[idx], this.arr[cidx]] = [this.arr[cidx], this.arr[idx]];
      idx = cidx;
      lidx = 2 * idx;
      ridx = 2 * idx + 1;
    }

    return max;
  },
};

const N = 1 * input[0];
const ans = [];
for (let n = 0; n < N; n++) {
  let x = 1 * input[1 + n];
  if (x === 0) {
    let max = maxHeap.pop();
    max === null ? ans.push(0) : ans.push(max);
  } else {
    maxHeap.push(x);
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
