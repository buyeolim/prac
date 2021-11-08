'''
연결 요소의 개수
https://www.acmicpc.net/problem/11724
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def bfs(node):
    visit[node] = 1
    queue.append(node)
    while len(queue) > 0:
        curr_node = queue.popleft()
        for next_node in adj_list[curr_node]:
            if visit[next_node] == 0:
                visit[next_node] = 1
                queue.append(next_node)


N, M = map(int, input().split())

adj_list = [[] for _ in range(N+1)]
visit = [0]*(N+1)
for _ in range(M):
    u, v = map(int, sys.stdin.readline().split())
    adj_list[u].append(v)
    adj_list[v].append(u)

queue = deque()
ans = 0
for node in range(1, N+1):
    if visit[node] == 0:
        ans += 1
        bfs(node)

        if sum(visit) == N:
            break

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
