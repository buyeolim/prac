'''
게임
https://www.acmicpc.net/problem/1072
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

X, Y = map(int, input().split())

ans = -1
winrate = Y*100 // X
l, r = 1, 1000000000
while l <= r:
    mid = (l+r) // 2

    new_winrate = (Y+mid)*100 // (X+mid)

    if new_winrate > winrate:
        r = mid - 1
        ans = mid
    else:
        l = mid + 1

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
