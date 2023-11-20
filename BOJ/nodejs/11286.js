/*
절댓값 힙
https://boj.kr/11286
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  // 최댓값 꺼내지 않고 출력
  peek() {
    return this.heap[0];
  }
  // 비어있는지 확인
  isEmpty() {
    return this.heap.length ? false : true;
  }
  // 부모 노드의 인덱스 계산
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  // 왼쪽 자식 노드의 인덱스 계산
  leftChild(index) {
    return 2 * index + 1;
  }
  // 오른쪽 자식 노드의 인덱스 계산
  rightChild(index) {
    return 2 * index + 2;
  }
  // 요소를 추가하면서 최소 힙 유지
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  // 최상단의 최대값 추출하면서 최대 힙 유지
  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return max;
  }
  // 최대 힙 유지: 요소를 부모와 비교하여 위치 조정
  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.parent(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        // 부모와 값 교체
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  // 최대 힙 유지: 최상단에서부터 자식과 비교하여 위치 조정
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);
      let swapIndex = null;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[index]
      ) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] >
          (swapIndex === null ? this.heap[index] : this.heap[leftChildIndex])
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) {
        break;
      }

      // 자식과 값 교체
      [this.heap[index], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[index],
      ];
      index = swapIndex;
    }
  }
}
class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 최솟값 꺼내지 않고 출력
  peek() {
    return this.heap[0];
  }
  // 비어있는지 확인
  isEmpty() {
    return this.heap.length ? false : true;
  }
  // 부모 노드의 인덱스 계산
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  // 왼쪽 자식 노드의 인덱스 계산
  leftChild(index) {
    return 2 * index + 1;
  }
  // 오른쪽 자식 노드의 인덱스 계산
  rightChild(index) {
    return 2 * index + 2;
  }
  // 요소를 추가하면서 최소 힙 유지
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  // 최상단의 최소값 추출하면서 최소 힙 유지
  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return min;
  }
  // 최소 힙 유지: 요소를 부모와 비교하여 위치 조정
  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = this.parent(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        // 부모와 값 교체
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  // 최소 힙 유지: 최상단에서부터 자식과 비교하여 위치 조정
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);
      let swapIndex = null;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[index]
      ) {
        swapIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] <
          (swapIndex === null ? this.heap[index] : this.heap[leftChildIndex])
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) {
        break;
      }

      // 자식과 값 교체
      [this.heap[index], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[index],
      ];
      index = swapIndex;
    }
  }
}

const N = 1 * input[0];

const minHeap = new MinHeap();
const maxHeap = new MaxHeap();
const res = new Array();

for (let n = 0; n < N; n++) {
  const x = 1 * input[1 + n];

  if (x !== 0) {
    // 1. 배열에 정수 x (x ≠ 0)를 넣는다.
    x > 0 ? minHeap.insert(x) : maxHeap.insert(x);
  } else {
    // 2. 배열에서 절댓값이 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다.
    //    절댓값이 가장 작은 값이 여러개일 때는, 가장 작은 수를 출력하고, 그 값을 배열에서 제거한다.
    if (maxHeap.isEmpty() && minHeap.isEmpty()) {
      res.push(0);
    } else if (maxHeap.isEmpty()) {
      res.push(minHeap.extractMin());
    } else if (minHeap.isEmpty()) {
      res.push(maxHeap.extractMax());
    } else {
      Math.abs(minHeap.peek()) < Math.abs(maxHeap.peek())
        ? res.push(minHeap.extractMin())
        : res.push(maxHeap.extractMax());
    }
  }
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
