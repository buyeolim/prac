/*
주사위
https://www.acmicpc.net/problem/1041
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0], 10);
const dise = [];
input[1].split(" ").forEach((ele) => dise.push(parseInt(ele, 10)));

const A = dise[0];
const B = dise[1];
const C = dise[2];
const D = dise[3];
const E = dise[4];
const F = dise[5];

const minThreeFace = () => {
  const min = Math.min(
    A + D + B,
    A + B + C,
    A + C + E,
    A + E + D,
    F + D + B,
    F + B + C,
    F + C + E,
    F + E + D
  );

  return min;
};

const minTwoFace = () => {
  const min = Math.min(
    A + D,
    A + B,
    A + C,
    A + E,
    B + D,
    B + F,
    B + C,
    C + F,
    C + E,
    D + F,
    D + E,
    E + F
  );

  return min;
};

if (N === 1) {
  // 주사위 6면 중, 최대값을 제외한 나머지의 합
  const max = Math.max.apply(null, dise);
  const idx = dise.indexOf(max);
  dise.splice(idx, 1); // 최대값 제거

  console.log(
    // 나머지 합
    dise.reduce((sum, val) => {
      return sum + val;
    }, 0)
  );
} else if (N === 2) {
  // 인접한 세 면의 최소값 * 4 +
  //  인접한 두 면의 최소값 * 4
  console.log(minThreeFace() * 4 + minTwoFace() * 4);
} else {
  // 인접한 세 면의 최소값 * 4 +
  //  인접한 두 면의 최소값 * (4(N-2) + 4(N-1)) +
  //  한 면의 최소값 * ((N-2)*(N-2) + 4(N-1)*(N-2))
  console.log(
    minThreeFace() * 4 +
      minTwoFace() * (4 * (N - 2) + 4 * (N - 1)) +
      Math.min.apply(null, dise) * ((N - 2) * (N - 2) + 4 * (N - 1) * (N - 2))
  );
}
