'''
ACM 호텔
https://www.acmicpc.net/problem/10250
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

T = int(input())
for t in range(T):
    H, W, N = map(int, input().split())

    r = N % H
    if r != 0:
        c = N // H + 1
    else:
        r = H
        c = N // H

    if c < 10:
        print(f"{r}0{c}")  # 층수, 호수
    else:
        print(f"{r}{c}")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
