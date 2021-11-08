'''
구간 합 구하기 5
https://www.acmicpc.net/problem/11660
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, M = map(int, input().split())
# N x N 표 입력
mat = [[0]*(N+1)]
for _ in range(N):
    row = [0] + list(map(int, sys.stdin.readline().split()))
    mat.append(row)

# 누적합 계산
#  1. 열 누적합
acc_col = [[0]*(N+1) for _ in range(N+1)]
for r in range(1, N+1):
    acc = 0
    for c in range(1, N+1):
        acc += mat[r][c]
        acc_col[r][c] = acc
#  2. 1에 대한 행 누적합
acc_row = [[0]*(N+1) for _ in range(N+1)]
for c in range(1, N+1):
    acc = 0
    for r in range(1, N+1):
        acc += acc_col[r][c]
        acc_row[r][c] = acc

# 구간 입력 및 구간합 계산
for _ in range(M):
    x1, y1, x2, y2 = map(int, sys.stdin.readline().split())

    a = acc_row[x2][y2]
    b = acc_row[x2][y1-1]
    c = acc_row[x1-1][y2]
    d = acc_row[x1-1][y1-1]
    ans = a - b - c + d

    print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
