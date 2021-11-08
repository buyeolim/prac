'''
영화감독 숌
https://www.acmicpc.net/problem/1436
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())

titles = []
for n in range(666, 2000000):
    if "666" in str(n):
        titles.append(n)

print(titles[N-1])
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
