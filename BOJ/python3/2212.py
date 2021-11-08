'''
센서
https://www.acmicpc.net/problem/2212
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

dist = []

N = int(sys.stdin.readline())
K = int(sys.stdin.readline())
censors = list(map(int, sys.stdin.readline().split()))

if K >= N:
    print(0)
    sys.exit()

censors.sort()

# 현재센서 - 이전센서 거리
for i in range(1, len(censors)):
    d = censors[i] - censors[i-1]
    dist.append(d)

dist.sort()

# N-K개의 남는 센서 거리
ans = 0
for i in range(N-K):
    ans += dist[i]

print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
