'''
섹션 8-5
최대 선 연결하기
'''
import sys


N = int(input())  # 자연수 N개
right_nums = list(map(int, input().split()))  # 오른쪽 번호 리스트

dp = [0] * N  # 인덱스에 해당하는 숫자를 끝으로하는 LIS 길이
dp[0] = 1  # 첫 번째 원소의 LIS 길이
cnt_max = 0  # LIS의 최대 길이
for i in range(1, N):
    for j in range(i):
        if right_nums[j] < right_nums[i]:
            dp[i] = max(dp[j] + 1, dp[i])
        else:
            dp[i] = max(dp[i], 1)

        cnt_max = max(dp[i], cnt_max)

print(cnt_max)



###
# BOJ 유사 문제
# 전깃줄(https://www.acmicpc.net/problem/2565)