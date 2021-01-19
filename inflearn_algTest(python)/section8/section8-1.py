'''
섹션 8-1
네트워크 선 자르기(Bottom-Up)
'''
import sys


#sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
N = int(input())

dp = [0] * (N+1)  # 인덱스를 N으로 둘 때, 해당하는 답을 값으로 가지는 리스트
dp[1] = 1  # 1m: 1개(1m)
dp[2] = 2  # 2m: 2개(1m + 1m, 2m)
for n in range(3, N+1):
    dp[n] = dp[n-1] + dp[n-2]  # 점화식

print(dp[N])