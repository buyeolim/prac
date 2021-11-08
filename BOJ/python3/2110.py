'''
공유기 설치
https://www.acmicpc.net/problem/2110
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

X = []

N, C = map(int, input().split())
for _ in range(N):
    x = int(input())
    X.append(x)
X.sort()

l, r = 1, X[N-1] - X[0]
dist = 0
ans = 0
while l <= r:
    mid = (l+r) // 2

    set_point = X[0]
    cnt = 1
    for i in range(N):
        dist = X[i] - set_point
        if mid <= dist:
            cnt += 1
            set_point = X[i]

    if cnt < C:
        r = mid - 1
    else:
        l = mid + 1
        ans = mid

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
