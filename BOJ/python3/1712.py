'''
손익분기점
https://www.acmicpc.net/problem/1712
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

A, B, C = map(int, input().split())

diff = C - B
if diff > 0:
    print(A // diff + 1)
else:
    print(-1)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
