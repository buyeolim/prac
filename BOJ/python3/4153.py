'''
직각삼각형
https://www.acmicpc.net/problem/4153
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


while(True):
    sides = list(map(int, input().split()))
    if sum(sides) == 0:
        break

    sides.sort()
    if sides[0]**2 + sides[1]**2 == sides[2]**2:
        print("right")
    else:
        print("wrong")


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
