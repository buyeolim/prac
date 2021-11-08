'''
회의실 배정
https://www.acmicpc.net/problem/1931
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

res = []

N = int(sys.stdin.readline())
for _ in range(N):
    s, e = map(int, sys.stdin.readline().split())
    res.append((s, e))

res = sorted(res, key=lambda x: (x[1], x[0]))

cnt = 0
prev_e = 0
for r in res:
    s, e = r
    if s >= prev_e:
        cnt += 1
        prev_e = e

print(cnt)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
