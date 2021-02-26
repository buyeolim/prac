'''
사탕 게임
https://www.acmicpc.net/problem/3085
'''
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


def count_max_continuous(r, c, d):  # row, column, direction
    global cnt_max

    if d == 'r':  # 한 행에 대하여 이동
        c = 0
    else:  # 한 열에 대하여 이동
        r = 0
    reset_colors(colors_max)
    reset_colors(colors)
    prev_color = ''
    for _ in range(N):
        idx = color_to_index(mat[r][c])
        if prev_color == '' or prev_color == mat[r][c]:
            colors[idx] += 1
            colors_max[idx] = max(colors[idx], colors_max[idx])
        else:
            colors[idx] = 1

        prev_color = mat[r][c]
        if d == 'r':
            c += 1
        else:
            r += 1

    cnt_max = max(cnt_max, max(colors_max))


# 우, 하
dr = [0, 1]
dc = [1, 0]

cnt_max = 0
colors = [0, 0, 0, 0]  # C, P, Z, Y
colors_max = [0, 0, 0, 0]  # max of C, P, Z, Y
for r in range(N):
    for c in range(N):
        # 교환 전 최대 연속 개수 파악
        count_max_continuous(r, c, 'r')  # 행 검사
        count_max_continuous(r, c, 'c')  # 열 검사

        # 우측, 하측 원소와 교환 후 최대 연속 개수 파악
        for i in range(2):
            rr = r+dr[i]
            cc = c+dc[i]

            if rr >= N or cc >= N:  # 범위 초과시 다음으로
                continue

            if mat[r][c] != mat[rr][cc]:
                mat[r][c], mat[rr][cc] = mat[rr][cc], mat[r][c]  # swap
                count_max_continuous(r, c, 'r')
                count_max_continuous(r, c, 'c')
                count_max_continuous(rr, cc, 'r')
                count_max_continuous(rr, cc, 'c')
                mat[r][c], mat[rr][cc] = mat[rr][cc], mat[r][c]  # re-swap

print(cnt_max)
