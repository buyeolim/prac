'''
구간 합 구하기 4
https://www.acmicpc.net/problem/11659
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, M = map(int, input().split())
nums = list(map(int, input().split()))

R = []
for _ in range(M):
    i, j = map(int, sys.stdin.readline().split())
    R.append((i, j))

# 누적합 계산
accs = [0] * (N+1)
acc = 0
for n in range(N):
    acc += nums[n]
    accs[n+1] = acc

# 구간합 계산
for m in range(M):
    i, j = R[m]
    ans = accs[j] - accs[i-1]
    print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
