'''
섹션 6-13
경로 탐색(그래프 DFS)
'''
import sys


# 함수
def dfs(s):
    p.append(s)

    if s == N:
        paths.append(p.copy())

        return
    else:
        s_idx = s - 1
        visit_flags[s_idx] = 1
        
        for e_idx, e_flag in enumerate(adj_mat[s_idx]):
            e = e_idx + 1
            if e_flag == 1 and visit_flags[e_idx] == 0:
                dfs(e)
                visit_flags[e_idx] = 0
                p.pop()


# 입력
sys.stdin = open("input.txt", "r")
N, M = map(int, input().split()) # N: 정점의 수, M: 간선의 수
edges = []
for _ in range(M):
    edges.append(list(map(int, input().split())))

# 수행
adj_mat = [[0] * N for _ in range(N)]
for edge in edges:
    s = edge[0]
    e = edge[1]
    adj_mat[s - 1][e - 1] = 1

visit_flags = [0] * N
cnt = 0
paths = []
p = []
dfs(1)

# 출력
print(len(paths))