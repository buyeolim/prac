'''
DFS와 BFS
https://www.acmicpc.net/problem/1260
'''
MAX_N = 1000


def dfs(v):
    visit_flags[v] = 1
    print(v, end=' ')

    for next_v in adj_list[v]:
        if visit_flags[next_v] == 0:
            dfs(next_v)
    else:
        return

def bfs(v):
    visit_flags[v] = 1
    queue.append(v)
    print(v, end=' ')

    while len(queue) != 0:
        v = queue.pop(0)

        for next_v in adj_list[v]:
            if visit_flags[next_v] == 0:
                visit_flags[next_v] = 1
                queue.append(next_v)
                print(next_v, end=' ')

        
## 입력 ##
N, M, V = map(int, input().split()) # 정점 개수, 간선 개수, 정점 시작 번호
adj_list = [[] for _ in range(MAX_N+1)] # 인접 리스트
for _ in range(M):
    v, next_v = map(int, input().split())
    if adj_list[v].count(next_v) == 0:
        adj_list[v].append(next_v)
        adj_list[next_v].append(v) # 양방향
    
## 수행 및 출력 ##
for v in range(1, MAX_N+1):
    if adj_list[v].count != 0:
        adj_list[v].sort()

visit_flags = [0] * (MAX_N+1)
dfs(V)
print()

visit_flags = [0] * (MAX_N+1)
queue = []
bfs(V)

### 
# BFS 참고 (https://gmlwjd9405.github.io/2018/08/15/algorithm-bfs.html)
# 런타임 에러 참고 (https://www.acmicpc.net/board/view/51403)