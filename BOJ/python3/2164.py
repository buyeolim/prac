'''
카드2
https://www.acmicpc.net/problem/2164
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
cards = deque([n for n in range(1, N+1)])

while len(cards) > 1:
    cards.popleft()
    card = cards.popleft()
    cards.append(card)

print(cards[0])

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
