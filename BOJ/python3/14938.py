'''
서강그라운드
https://www.acmicpc.net/problem/14938
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

n, m, r = map(int, input().split())
items = [0] + list(map(int, input().split()))

dist = [[sys.maxsize]*(n+1) for _ in range(n+1)]
for v in range(1, n+1):
    dist[v][v] = 0

# 인접행렬 초기화
for _ in range(r):
    a, b, l = map(int, input().split())
    dist[a][b] = l
    dist[b][a] = l

# 플로이드-와샬 i->j까지 최단경로 저장
for k in range(1, n+1):
    for i in range(1, n+1):
        for j in range(1, n+1):
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

# 가방에 넣을 수 있는 아이템 최댓값
ans = 0
for curr_v in range(1, n+1):
    bag = items[curr_v]
    for next_v in range(1, n+1):
        if curr_v == next_v:
            continue
        elif dist[curr_v][next_v] <= m:
            bag += items[next_v]

    if bag > ans:
        ans = bag

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
