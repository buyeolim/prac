'''
solved.ac
https://www.acmicpc.net/problem/18110
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def get_avg(arr):
    arr.sort()
    arr = deque(arr)
    cnt = int(n * 0.15 + 0.5)
    for i in range(cnt):
        arr.popleft()
        arr.pop()

    sum_arr = 0
    for ele in arr:
        sum_arr += ele

    return int(sum_arr / len(arr) + 0.5)


scores = []

n = int(input())
for _ in range(n):
    score = int(sys.stdin.readline())
    scores.append(score)

if n == 0:
    print(0)
else:
    avg = get_avg(scores)
    print(avg)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
