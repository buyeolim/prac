'''
가장 긴 증가하는 부분 수열
https://www.acmicpc.net/problem/11053
'''
N = int(input())
nums = list(map(int, input().split()))

dp = [0] * N  # 최대 부분 증가수열의 길이 정보를 저장하기 위한 리스트(nums의 인덱스와 대응)
dp[0] = 1  # 첫 번째 원소일 때, 최대 부분 증가수열의 길이
for i in range(1, N):
    for j in range(i):  # i번째 원소일 때, 최대 부분 증가수열의 길이 설정
        if nums[j] < nums[i]:
            dp[i] = max(dp[j] + 1, dp[i])
        else:
            dp[i] = max(1, dp[i])

print(max(dp))