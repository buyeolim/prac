'''
과제
https://www.acmicpc.net/problem/13904
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

A = []
max_d = 0  # 마지막 마감일

N = int(sys.stdin.readline())
for _ in range(N):
    d, w = map(int, sys.stdin.readline().split())
    A.append((d, w))

    if d > max_d:
        max_d = d

A.sort(key=lambda x: (-x[1], x[0]))  # 점수 오름차순

days = [-1] * (N+1)  # 과제하는 날(A의 index값)
for i in range(N):
    d, w = A[i]
    for j in range(d, 0, -1):  # 마감일부터 역순
        if days[j] == -1:  # 날짜 분배
            days[j] = i
            break

ans = 0
for d in range(1, max_d+1):
    if days[d] != -1:
        idx = days[d]
        w = A[idx][1]
        ans += w

print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
