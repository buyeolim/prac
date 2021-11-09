'''
시간표 짜기
https://www.acmicpc.net/problem/14569
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
T = []
for _ in range(N):
    tmp = list(map(int, sys.stdin.readline().split()))
    T.append(tmp[1:])
M = int(input())
Q = []
for _ in range(M):
    tmp = list(map(int, sys.stdin.readline().split()))
    Q.append(tmp[1:])

for m in range(M):
    ans = 0
    table = [0 for _ in range(51)]  # 전체 시간표

    # 학생이 가능한 시간표
    for t in Q[m]:
        table[t] = 1
    # 과목별 수업시간과 확인
    for n in range(N):
        flag = True
        for t in T[n]:
            if table[t] == 0:
                flag = False
                break

        if flag == True:
            ans += 1

    print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
