'''
수열
https://www.acmicpc.net/problem/2559
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, K = map(int, input().split())
nums = list(map(int, input().split()))

s = 0
for i in range(K):
    s += nums[i]

ans = s
l = 0
for h in range(K, N):
    s = s - nums[l] + nums[h]

    if s > ans:
        ans = s

    l += 1

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
