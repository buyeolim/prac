'''
택시 기하학
https://www.acmicpc.net/problem/3053
'''
from math import pi
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

R = int(input())

euclidean = pi * R**2
taxicab = (2*R)**2 / 2

print(f"{euclidean:.6f}")
print(f"{taxicab:.6f}")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
