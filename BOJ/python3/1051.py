'''
숫자 정사각형
https://www.acmicpc.net/problem/1051
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def check_square(pos, w):
    r, c = pos[0], pos[1]
    ch = mat[r][c]

    # 우측, 대각선, 아래 꼭지점
    dr = [0, w-1, w-1]
    dc = [w-1, w-1, 0]
    for i in range(3):
        new_r, new_c = r+dr[i], c+dc[i]
        if new_r >= N or new_c >= M:
            return -1
        if mat[new_r][new_c] != ch:
            return -1
    else:
        return w


mat = []

N, M = map(int, input().split())
for _ in range(N):
    row = list(input())
    mat.append(row)

max_width = 0
for r in range(N):
    for c in range(M):
        for w in range(1, min(N, M)+1):
            width = check_square((r, c), w)
            if width > max_width:
                max_width = width

print(max_width**2)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
