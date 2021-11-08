'''
동전 0
https://www.acmicpc.net/problem/11047
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

coins = []

N, K = map(int, sys.stdin.readline().split())
for _ in range(N):
    coin = int(sys.stdin.readline())
    coins.append(coin)

coins.sort(reverse=True)
cnt = 0
for coin in coins:
    if K // coin != 0:
        cnt += K // coin
        K = K % coin

    if K == 0:
        print(cnt)
        break


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
