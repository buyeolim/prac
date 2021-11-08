'''
N-Queen
https://www.acmicpc.net/problem/9663
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def n_queens(i):
    global cnt

    if promising(i):
        if i == N:
            # 모든 행에 퀸을 놓았을 때
            cnt += 1
        else:
            # 아닌 경우 i번째 행에서의 모든 열에 둔다.
            for j in range(1, N+1):
                col[i+1] = j
                n_queens(i+1)


def promising(i):
    k = 1
    flag = True
    while k < i and flag:
        if col[i] == col[k] or abs(col[i]-col[k]) == i-k:
            # 같은 열 또는 같은 대각선일때 가지치기
            flag = False
        k += 1

    return flag


N = int(input())

col = [0] * (N+1)  # 퀸이 i번째 행일 때, 열의 위치값
cnt = 0
n_queens(0)

print(cnt)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
