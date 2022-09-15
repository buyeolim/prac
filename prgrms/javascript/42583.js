/*
다리를 지나는 트럭
https://school.programmers.co.kr/learn/courses/30/lessons/42583
 */

const start = new Date().getTime();

function solution(bridgeLength, weight, truckWeights) {
  let answer = 0;
  let sum = 0;
  const done = [];
  const queue = [];
  const count = [];
  const trucks = truckWeights.length;

  while (done.length < trucks) {
    answer++;
    for (let i = 0; i < queue.length; i++) {
      count[i]++;
    }

    if (count[0] > bridgeLength) {
      sum -= queue[0];
      done.push(queue.shift());
      count.shift();
    }

    if (weight - sum - truckWeights[0] >= 0) {
      queue.push(truckWeights.shift());
      sum += queue[queue.length - 1];
      count.push(1);
    }
  }

  return answer;
}

const bridgeLength = 100,
  weight = 100,
  truckWeights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridgeLength, weight, truckWeights));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o /
 * 합계: 100.0 / 100.0
 */
