'''
테트로미노
https://www.acmicpc.net/problem/14500
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def dfs(pos, lv, ele_sum):
    global max_ele_sum

    if lv == 3:
        max_ele_sum = max(max_ele_sum, ele_sum)
        return
    else:
        r, c = pos[0], pos[1]
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_r < N and 0 <= next_c < M:
                if visited[next_r][next_c] == 0:
                    visited[next_r][next_c] = 1
                    dfs((next_r, next_c), lv+1, ele_sum+mat[next_r][next_c])
                    visited[next_r][next_c] = 0


def sum_t_block(pos, ele):
    global max_ele_sum

    r, c = pos[0], pos[1]
    for i in range(4):
        ele_sum = ele

        for j in range(4):
            if j == i:  # T-block 이므로 한 방향 제한
                continue
            else:
                next_r = r + dr[j]
                next_c = c + dc[j]
                if 0 <= next_r < N and 0 <= next_c < M:
                    ele_sum += mat[next_r][next_c]
                else:
                    break
        else:
            max_ele_sum = max(max_ele_sum, ele_sum)


N, M = map(int, sys.stdin.readline().split())  # 행, 열
mat = []
for _ in range(N):
    row = list(map(int, sys.stdin.readline().split()))
    mat.append(row)

visited = [[0]*M for _ in range(N)]
# 상, 우, 하, 좌
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

max_ele_sum = 0
for r in range(N):
    for c in range(M):
        visited[r][c] = 1
        dfs((r, c), 0, mat[r][c])  # dfs를 이용한 I, O, L(J), S(Z) block 합
        sum_t_block((r, c), mat[r][c])  # T block 합
        visited[r][c] = 0

print(max_ele_sum)


print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
