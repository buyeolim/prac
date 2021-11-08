'''
벽 부수고 이동하기
https://www.acmicpc.net/problem/2206
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

mat = []


N, M = map(int, sys.stdin.readline().split())
for _ in range(N):
    row = list(sys.stdin.readline().strip())

visited = [[[0, 0] for _ in range(M)] for _ in range(N)]
b = 0

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
