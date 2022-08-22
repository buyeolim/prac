/*
트리 순회
boj.kr/1991
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
let BST = [".", "A"];
for (let n = 0; n < N; n++) {
  let [p, l, r] = input[1 + n].split(" ");

  // 이진 트리 확장
  let i = BST.indexOf(p);
  let tmpBST = Array.from({ length: 2 * i + 2 }, () => ".");
  BST = [...BST, ...tmpBST.slice(i + 1)];
  BST[2 * i] = l;
  BST[2 * i + 1] = r;
}

const preorder = (i) => {
  let p = BST[i];
  if (p === ".") return;

  ans += p;
  preorder(2 * i); // left child
  preorder(2 * i + 1); // right child
};

const inorder = (i) => {
  let p = BST[i];
  if (p === ".") return;

  inorder(2 * i); // left child
  ans += p;
  inorder(2 * i + 1); // right child
};

const postorder = (i) => {
  let p = BST[i];
  if (p === ".") return;

  postorder(2 * i); // left child
  postorder(2 * i + 1); // right child
  ans += p;
};

let ans = "";
preorder(1);
ans += "\n";
inorder(1);
ans += "\n";
postorder(1);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
