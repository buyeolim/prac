'''
소수
https://www.acmicpc.net/problem/2581
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


M = int(input())
N = int(input())

primes = [True for _ in range(N+1)]
primes[0] = primes[1] = False
for i in range(2, N+1):
    if primes[i] == False:
        continue

    for j in range(i, N+1, i):
        if j == i:
            continue

        primes[j] = False

primes_sum = 0
primes_min = 10000
for i in range(M, N+1):
    if primes[i] == True:
        primes_sum += i

        if i < primes_min:
            primes_min = i

if primes_sum != 0:
    print(primes_sum)
    print(primes_min)
else:
    print(-1)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
