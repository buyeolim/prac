'''
네 번째 점
https://www.acmicpc.net/problem/3009
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

X = set()
Y = set()
vertexs = []
for _ in range(3):
    x, y = map(int, input().split())
    X.add(x)
    Y.add(y)
    vertexs.append((x, y))

for x in X:
    for y in Y:
        if (x, y) not in vertexs:
            print(x, y)
            break
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
