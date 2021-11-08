'''
분수찾기
https://www.acmicpc.net/problem/1193
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

X = int(input())

r, c = 0, 0  # 행, 열
d, n = 1, 0  # d번째 대각선, 나열된 분수들의 번호
flag = False  # 방향 플래그(순방향↙ true)
while(True):
    if n+d >= X:  # 현재 대각선에 X번째 번호가 존재
        if flag is True:
            r = 0
            c = d+1
            for i in range(X-n):
                r += 1
                c -= 1
        else:
            r = d+1
            c = 0
            for i in range(X-n):
                r -= 1
                c += 1
        break

    n += d  # 다음 대각선의 시작번호
    d += 1  # 다음 대각선의 분수 개수
    flag = not flag  # 번호의 진행 방향 전환

print(f"{r}/{c}")

print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
