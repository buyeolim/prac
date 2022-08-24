/*
Run-Length Encoding, Run!
boj.kr/16634
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [work, msg] = input[0].split(" ");

const encoding = (str) => {
  let cnt;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    cnt = 1;
    while (str[i] === str[i + 1]) {
      cnt++;
      i++;
    }

    res += str[i] + cnt.toString();
  }

  return res;
};

const decoding = (str) => {
  let cnt;
  let res = "";
  for (let i = 0; i < str.length - 1; i += 2) {
    cnt = 1 * str[i + 1];
    while (cnt > 0) {
      res += str[i];
      cnt--;
    }
  }

  return res;
};

let ans;
work === "E" ? (ans = encoding(msg)) : (ans = decoding(msg));
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
