'''
베르트랑 공준
https://www.acmicpc.net/problem/4948
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


MAX_N = 123456

# 에라토스테네스의 체
primes = [True for _ in range(MAX_N*2+1)]
primes[0] = primes[1] = False
for i in range(2, MAX_N*2+1):
    if primes[i] == False:
        continue

    for j in range(i, MAX_N*2+1, i):
        if j == i:
            continue

        primes[j] = False

# n+1 ~ 2n 까지 소수의 개수
while(True):
    n = int(input())
    if n == 0:
        break

    cnt = 0
    for i in range(n+1, 2*n+1):
        if primes[i] is True:
            cnt += 1

    print(cnt)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
