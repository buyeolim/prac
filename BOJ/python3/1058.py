'''
친구
https://www.acmicpc.net/problem/1058
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())

# 플로이드-와샬 인접행렬 초기화
dist = [[sys.maxsize]*N for _ in range(N)]
for i in range(N):
    row = list(input())
    for j in range(N):
        if i == j:
            dist[i][j] = 0
        elif row[j] == "Y":
            dist[i][j] = 1

# 플로이드-와샬
for k in range(N):
    for i in range(N):
        for j in range(N):
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

# 친구의 수 계산
ans = 0
for i in range(N):
    cnt = 0
    for j in range(N):
        if i == j:  # 자기자신
            continue

        if dist[i][j] <= 2:  # 2-친구이면 카운트
            cnt += 1

    ans = max(ans, cnt)

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
