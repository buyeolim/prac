'''
회사에 있는 사람
https://www.acmicpc.net/problem/7785
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

log = set()
n = int(input())
for _ in range(n):
    name, state = list(input().split())

    if state == "enter":
        log.add(name)
    else:
        log.remove(name)

sorted_log = sorted(log)
sorted_log.sort(reverse=True)
print(*sorted_log, sep="\n")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
