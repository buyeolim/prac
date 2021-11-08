'''
2×n 타일링 2
https://www.acmicpc.net/problem/11727
'''
n = int(input())  # 직사각형의 가로 길이

dp = [0] * (n+3)
dp[1] = 1
dp[2] = 3
for i in range(3, n+1):
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-2]) % 10007

print(dp[n])



###
# 참고(https://youtu.be/HTgcW34AnVQ)
# 1. dfs -> 2.memoization -> 3.recurrence relation