'''
운동
https://www.acmicpc.net/problem/1956
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

V, E = map(int, input().split())

dist = [[sys.maxsize]*(V+1) for _ in range(V+1)]
for i in range(1, V+1):
    dist[i][i] = 0

for _ in range(E):
    a, b, c = map(int, input().split())
    dist[a][b] = c

for k in range(1, V+1):
    for i in range(1, V+1):
        for j in range(1, V+1):
            dist[i][j] = min(dist[i][j], dist[i][k]+dist[i][j])

ans = sys.maxsize
for i in range(1, V+1):
    for j in range(1, V+1):
        if i == j:
            continue

        if dist[i][j] != sys.maxsize and dist[j][i] != sys.maxsize:
            ans = min(ans, dist[i][j]+dist[j][i])

if ans == sys.maxsize:
    print(-1)
else:
    print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
