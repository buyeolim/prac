'''
섹션 8-3b
돌다리 건너기(Bottom-Up)
'''
import sys


#sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
N = int(input())

dp = [0] * (N+3)
dp[1] = 2
dp[2] = 3
for i in range(3, N+1):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[N])