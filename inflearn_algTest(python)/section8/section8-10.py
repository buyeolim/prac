'''
섹션 8-10
동전교환
'''
import sys


sys.stdin = open("input.txt", "r")
N = int(input())  # 동전 종류의 개수
coins = list(map(int, input().split()))  # 동전 종류(ex. 1$, 2$, 10$ ...)
M = int(input())  # 거슬러 줄 금액

dp = [1000] * (M+1)   # dp의 idx가 거슬러 줄 금액일 때 최소 동전의 개수
dp[0] = 0
for n in range(N):
    coin = coins[n]  # n번째 동전

    # dp 설정(범위: 현재 동전의 금액 ~ 거슬러 줄 금액)
    for c in range(coin, M+1):
        dp[c] = min(dp[c], dp[c-coin] + 1)

print(dp[M])


###
# BOJ 유사문제
# https://www.acmicpc.net/problem/14916