'''
최단경로
https://www.acmicpc.net/problem/1753
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

V, E = map(int, input().split())
K = int(input())

adj_list = [[] for _ in range(V+1)]
for _ in range(E):
    u, v, w = map(int, sys.stdin.readline().split())
    adj_list[u].append((v, w))

dist = [sys.maxsize] * (V+1)
dist[K] = 0

priority_queue = []
heapq.heappush(priority_queue, (0, K))
while len(priority_queue) > 0:
    weight, vertex = heapq.heappop(priority_queue)
    if dist[vertex] >= weight:
        for next_vertex, next_weight in adj_list[vertex]:
            acc_weight = weight + next_weight
            if dist[next_vertex] > acc_weight:
                dist[next_vertex] = acc_weight
                heapq.heappush(priority_queue, (acc_weight, next_vertex))

for v in range(1, V+1):
    if dist[v] == sys.maxsize:
        print("INF")
    else:
        print(dist[v])

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
