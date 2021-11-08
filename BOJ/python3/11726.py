'''
2×n 타일링
https://www.acmicpc.net/problem/11726
'''
n = int(input())  # 직사각형의 가로 길이

dp = [0] * (n+3)
dp[1] = 1
dp[2] = 2
for i in range(3, n+1):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n] % 10007)



###
# 참고(https://youtu.be/v_x3JJzaqnc)