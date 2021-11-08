'''
골드바흐의 추측
https://www.acmicpc.net/problem/9020
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


MAX_N = 10000

# 에라토스테네스의 체
primes = [True for _ in range(MAX_N+1)]
primes[0] = primes[1] = False
for i in range(2, MAX_N+1):
    if primes[i] == False:
        continue

    for j in range(i, MAX_N+1, i):
        if j == i:
            continue

        primes[j] = False

T = int(input())
for _ in range(T):
    n = int(input())

    # 골드바흐 파티션 찾기
    goldbachs = set()
    for i in range(2, n//2+1):
        if primes[i] is True and primes[n-i] is True:
            goldbachs.add((i, n-i))

    # 두 소수의 차이가 가장 작은 것 출력
    min_diff = MAX_N
    ans = None
    for g in goldbachs:
        diff = abs(g[0] - g[1])
        if diff < min_diff:
            min_diff = diff
            ans = g

    print(ans[0], ans[1])

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
