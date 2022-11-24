/*
캐시
https://school.programmers.co.kr/learn/courses/30/lessons/17680
 */
const start = new Date().getTime();

function solution(cacheSize, cities) {
  let answer = 0;

  const cache = Array(cacheSize).fill(null);

  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      answer += 1; // cache hit

      let cidx = cache.indexOf(city);
      for (let i = cidx; i > 0; i--) {
        cache[i] = cache[i - 1];
      }
      cache[0] = city;
    } else if (cacheSize === 0) {
      answer += 5; // cache miss
    } else if (cache.includes(null)) {
      answer += 5; // cache miss

      let cidx = cache.indexOf(null);
      for (let i = cidx; i > 0; i--) {
        cache[i] = cache[i - 1];
      }
      cache[0] = city;
    } else {
      answer += 5; // cache miss

      for (let i = cacheSize - 1; i > 0; i--) {
        cache[i] = cache[i - 1];
      }
      cache[0] = city;
    }
  });

  return answer;
}

const cacheSize = 3;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
];

console.log(solution(cacheSize, cities));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 100.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o / o // o / o / o / o / o //
 * 합계: 100.0 / 100.0
 */
