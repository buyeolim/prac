'''
사탕 게임
https://www.acmicpc.net/problem/3085
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
mat = []
for _ in range(N):
    row = list(map(str, input()))
    mat.append(row)


def reset_colors(colors):
    colors[0] = 0
    colors[1] = 0
    colors[2] = 0
    colors[3] = 0


def color_to_index(color):
    if color == 'C':
        return 0
    elif color == 'P':
        return 1
    elif color == 'Z':
        return 2
    else:  # Y
        return 3


# 우, 하
dr = [0, 1]
dc = [1, 0]

cnt_max = 0
colors = [0, 0, 0, 0]  # C, P, Z, Y
for r in range(N):
    for c in range(N):
        # 우, 하 비교
        for i in range(2):
            rr = r+dr[i]
            cc = c+dc[i]

            if rr >= N or cc >= N:
                continue

            if mat[r][c] != mat[rr][cc]:
                mat[r][c], mat[rr][cc] = mat[rr][cc], mat[r][c]  # swap

                # 행 검사
                cnt_row = 0
                reset_colors(colors)
                prev_color = ""
                for i in range(N):
                    for j in range(N):
                        idx = color_to_index(mat[i][j])
                        if prev_color == "" or prev_color == mat[i][j]:
                            colors[idx] += 1
                        else:
                            colors[idx] = 1

                        prev_color = mat[r][n]

                    cnt = max(colors)

                # 열 검사
                cnt_col = 0
                reset_colors(colors)
                prev_color = ""
                for n in range(N):
                    idx = color_to_index(mat[n][c])
                    if prev_color == "" or prev_color == mat[n][c]:
                        colors[idx] += 1
                    else:
                        if colors[idx] < 1:
                            colors[idx] = 1

                    prev_color = mat[n][c]

                cnt_col = max(colors)

                # 연속인 개수의 최대값
                cnt_max = max(cnt_max, cnt_row, cnt_col)

                mat[r][c], mat[rr][cc] = mat[rr][cc], mat[r][c]  # re-swap

print(cnt_max)

print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
