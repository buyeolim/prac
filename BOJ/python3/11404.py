'''
플로이드
https://www.acmicpc.net/problem/11404
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

n = int(input())
m = int(input())

dist = [[sys.maxsize]*(n+1) for _ in range(n+1)]
for i in range(1, n+1):
    dist[i][i] = 0

for _ in range(m):
    a, b, c = map(int, sys.stdin.readline().split())

    if dist[a][b] == sys.maxsize:
        dist[a][b] = c
    else:
        dist[a][b] = min(dist[a][b], c)

for k in range(1, n+1):
    for i in range(1, n+1):
        for j in range(1, n+1):
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

for i in range(1, n+1):
    for j in range(1, n+1):
        if dist[i][j] == sys.maxsize:
            print(0, end=" ")
        else:
            print(dist[i][j], end=" ")
    print()
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
