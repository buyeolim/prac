'''
시간표 짜기
https://www.acmicpc.net/problem/14569
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

# 과목
N = int(input())
T = []
for _ in range(N):
    k, *t = list(map(int, sys.stdin.readline().split()))
    table_t = 0
    for i in range(k):
        table_t |= 2 << t[i]
    T.append(table_t)

# 학생
M = int(input())
Q = []
for _ in range(M):
    p, *q = list(map(int, sys.stdin.readline().split()))
    table_q = 0
    for i in range(p):
        table_q |= 2 << q[i]
    Q.append(table_q)

# 시간 확인
for m in range(M):
    ans = 0
    for n in range(N):
        if T[n] == Q[m] & T[n]:
            ans += 1

    print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
