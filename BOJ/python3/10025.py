'''
게으른 백곰
https://www.acmicpc.net/problem/10025
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

MAX_LEN = 1_000_000


N, K = map(int, input().split())

B = [0] * (MAX_LEN+1)  # 양동이
max_x = 0
for _ in range(N):
    g, x = map(int, sys.stdin.readline().split())
    B[x] = g
    max_x = max(max_x, x)

ans = 0
s = 0
l, h = 0, 0
while True:
    if h - l > 2 * K:
        s -= B[l]
        l += 1
    elif h > max_x:
        break
    else:
        s += B[h]
        h += 1

    if s > ans:
        ans = s

print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
