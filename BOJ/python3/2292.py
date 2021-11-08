'''
벌집
https://www.acmicpc.net/problem/2292
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())

step = 0
diff = 1
num = 1
while(True):
    if num > N:
        break

    num += diff
    step += 1
    diff = step * 6

print(step)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
