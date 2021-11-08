'''
수들의 합 2
https://www.acmicpc.net/problem/2003
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, M = map(int, input().split())
nums = list(map(int, input().split()))

ans = 0  # 합이 M이 되는 경우의 수
i, j = 0, 0  # low, high pointer
s = 0  # 구간의 합
while True:
    if s >= M:
        s -= nums[i]
        i += 1
    elif j == N:
        break
    else:
        s += nums[j]
        j += 1

    if s == M:
        ans += 1

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
