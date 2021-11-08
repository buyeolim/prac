'''
랜선 자르기
https://www.acmicpc.net/problem/1654
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

wires = []

K, N = map(int, input().split())
for _ in range(K):
    wire = int(sys.stdin.readline())
    wires.append(wire)

ans = 0
l, r = 1, max(wires)
while l <= r:
    mid = (l+r) // 2

    cnt = 0
    for wire in wires:
        cnt = cnt + wire//mid

    if cnt >= N and mid > ans:
        ans = mid

    if cnt < N:
        r = mid - 1
    else:
        l = mid + 1

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
