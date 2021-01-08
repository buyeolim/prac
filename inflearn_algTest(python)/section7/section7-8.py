'''
섹션 7-8
사과나무(BFS)
'''
import sys


def visit(r, c, lv): # 방문 안했으면 flag 세팅 후 queue에 삽입
    if visit_flags[r][c] == -1:
        visit_flags[r][c] = lv + 1
        queue.append((r, c))

def bfs(r, c):
    global ele_sum

    lv = 0
    visit_flags[r][c] = lv
    queue.append((r, c))

    while len(queue) > 0:
        cur_pos = queue.pop(0)
        r = cur_pos[0]
        c = cur_pos[1]
        lv = visit_flags[r][c]
        ele_sum += mat[r][c]
        #print(mat[r][c])

        if lv < N // 2:
            # 시계방향(12시 -> 3시 -> 6시 -> 9시)
            visit(r - 1, c, lv)
            visit(r, c + 1, lv)
            visit(r + 1, c, lv)
            visit(r, c - 1, lv)
        elif lv == 2:
            continue # 탐색하지 않고 다음으로


#sys.stdin = open("input.txt", "r")
N = int(input()) # N * N 격자판의 길이
mat = []
for _ in range(N):
    row = list(map(int, input().split()))
    mat.append(row)

visit_flags = [[-1] * N for _ in range(N)] # 방문 플래그(방문시 lv값)
queue = []
ele_sum = 0
bfs(N // 2, N // 2) # 중앙부터 시작

print(ele_sum)
