'''
수리공 항승
https://www.acmicpc.net/problem/1449
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N, L = map(int, sys.stdin.readline().split())
holes = list(map(int, sys.stdin.readline().split()))

holes.sort()

cnt = 1
start_hole = holes[0]
for i in range(1, len(holes)):
    if holes[i] - start_hole >= L:
        cnt += 1
        start_hole = holes[i]

print(cnt)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
