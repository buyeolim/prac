'''
거스름돈
https://www.acmicpc.net/problem/14916
'''
# DP
N = int(input())  # 거스름돈 액수

coins = [2, 5]  # 동전의 종류
dp = [-1] * (N+1)  # idx가 거스름돈 액수일 때, 최소 동전의 개수
for coin in coins:
    for p in range(coin, N+1):
        if p % coin == 0:
            dp[p] = p // coin
        elif dp[p-coin] > 0:
            dp[p] = dp[p-coin] + 1


""" GREEDY
import sys


N = int(input())  # 거스름돈 액수

for j in range(N//5, -1, -1):
    for i in range(N//2, -1, -1):
        if 2*i + 5*j == N:
            print(i+j)
            sys.exit()
else:
    print(-1)
"""


""" BF - 시간초과
N = int(input())  # 거스름돈 액수

answer = []
for i in range(N//2 + 1):
    for j in range(N//5 + 1):
        if 2*i + 5*j == N:
            answer.append(i+j)

if len(answer) != 0:
    print(min(answer))
else:
    print(-1)
"""