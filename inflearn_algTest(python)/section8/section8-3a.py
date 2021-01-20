'''
섹션 8-3a
계단오르기(Top-Down)
'''
import sys


def dfs(n):
    if dp[n] > 0:
        return dp[n]

    if n < 3:
        return n
    else:
        dp[n] = dfs(n-1) + dfs(n-2)

        return dp[n]


#sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
N = int(input())

dp = [0] * (N+1)  # 인덱스를 N으로 둘 때, 해당하는 답을 값으로 가지는 리스트(메모)

print(dfs(N))
