'''
듣보잡
https://www.acmicpc.net/problem/1764
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

first = set()  # 명단 하나에만 있는 이름
second = []  # 두 명단 모두에 있는 이름

N, M = map(int, input().split())
for _ in range(N+M):
    name = input()

    if name not in first:
        first.add(name)
    else:
        second.append(name)

second.sort()
print(len(second))
print(*second, sep="\n")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
