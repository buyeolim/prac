'''
달팽이는 올라가고 싶다
https://www.acmicpc.net/problem/2869
'''
from math import ceil
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
A, B, V = map(int, input().split())

r = V - A  # 마지막날 제외한 거리
days = r / (A - B)
print(ceil(days+1))


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
