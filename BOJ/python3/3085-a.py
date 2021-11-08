'''
사탕 게임
https://www.acmicpc.net/problem/3085
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def check():
    max_cnt = 1

    for i in range(N):
        cnt = 1
        for j in range(N-1):
            if mat[i][j] == mat[i][j+1]:
                cnt += 1
            else:
                cnt = 1

            if cnt > max_cnt:
                max_cnt = cnt

        cnt = 1
        for j in range(N-1):
            if mat[j][i] == mat[j+1][i]:
                cnt += 1
            else:
                cnt = 1

            if cnt > max_cnt:
                max_cnt = cnt

    return max_cnt


mat = []

N = int(input())
for _ in range(N):
    row = list(input())
    mat.append(row)

ans = 0
for r in range(N):
    for c in range(N):
        if c < N-1:
            # 현재 열 <-> 오른쪽 열
            mat[r][c], mat[r][c+1] = mat[r][c+1], mat[r][c]
            cnt1 = check()
            mat[r][c+1], mat[r][c] = mat[r][c], mat[r][c+1]

        if r < N-1:
            # 현재 행 <-> 아래 행
            mat[r][c], mat[r+1][c] = mat[r+1][c], mat[r][c]
            cnt2 = check()
            mat[r+1][c], mat[r][c] = mat[r][c], mat[r+1][c]

        ans = max(ans, cnt1, cnt2)

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
