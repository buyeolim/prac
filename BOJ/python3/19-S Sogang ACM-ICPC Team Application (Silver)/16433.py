'''
주디와 당근농장
https://www.acmicpc.net/problem/16433
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, R, C = map(int, input().split())  # 한 변의 길이, 당근 위치

# (1, 1)에서의 당근 플래그
carrot = 0
r, c = (R % 2, C % 2) # 홀수 1, 짝수 0
if (r, c) == (1, 1) or (r, c) == (0, 0):
    carrot = 1

# 당근 출력
for r in range(1, N+1):
    for c in range(1, N+1):
        if carrot == 1:
            print('v', end='')
        else:
            print('.', end='')
        carrot = (carrot+1) % 2
    print()
    if c % 2 == 0:
        carrot = (carrot+1) % 2


print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간