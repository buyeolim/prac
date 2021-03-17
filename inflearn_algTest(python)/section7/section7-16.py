'''
섹션 7-16
사다리 타기(DFS)
'''
import sys


def dfs(r, c):
    if r == 0:
        print(c)
        sys.exit()
    else:
        # 좌우방향 우선 확인
        for i in range(2):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_c < 10:  # 범위 초과 방지
                if mat[next_r][next_c] == 1:  # 좌우 사다리 확인
                    mat[next_r][next_c] = 2
                    dfs(next_r, next_c)
        
        # 위쪽 확인
        next_r = r + -1
        next_c = c + 0
        if 0 <= next_r < 10:
            if mat[next_r][next_c] == 1:
                mat[next_r][next_c] = 2
                dfs(next_r, next_c)

                    
#sys.stdin = open("input.txt", "r")
mat = []
for r in range(10):
    row = list(map(int, input().split()))
    mat.append(row)
    if r == 9:
        end = (r, row.index(2))  # 도착지점 좌표

# 좌우방향(9시, 3시)
dr = [0, 0]
dc = [-1, 1]
dfs(end[0], end[1])