'''
Jumbled Communication
https://www.acmicpc.net/problem/11675
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

n = int(input())
B = list(map(int, input().split()))

scrambleds = [x ^ (x << 1 & 255) for x in range(256)]

ans = ""
for b in B:
    ans += str(scrambleds.index(b)) + " "

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
