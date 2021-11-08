'''
Fly me to the Alpha Centauri
https://www.acmicpc.net/problem/1011
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

T = int(input())
for _ in range(T):
    x, y = map(int, input().split())

    cnt = 0
    k = 0
    dist = y - x
    half = x + dist//2
    pos = x
    while(pos <= half):
        cnt += 1
        k += 1
        pos += k

    print(cnt)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
