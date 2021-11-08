'''
창고 다각형
https://www.acmicpc.net/problem/2304
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

columns = []
highest = (0, 0)

N = int(input())
for _ in range(N):
    x, h = map(int, input().split())
    columns.append((x, h))
    if h > highest[1]:
        highest = (x, h)


S = 0
# 좌측
columns.sort()  # x 좌표, 오름차순 정렬
stack = []
for col in columns:
    if len(stack) > 0:
        if stack[0][1] <= col[1]:
            w = col[0] - stack[0][0]
            h = stack[0][1]
            S += w * h

            stack.pop()
            stack.append(col)
    else:
        stack.append(col)

    # 반환점(최고높이)에 도달하면 종료
    if col == highest:
        break

# 가운데
S += highest[1]

# 우측
columns.sort(reverse=True)  # x 좌표, 내림차순 정렬
stack = []
for col in columns:
    if len(stack) > 0:
        if stack[0][1] <= col[1]:
            w = stack[0][0] - col[0]
            h = stack[0][1]
            S += w * h

            stack.pop()
            stack.append(col)
    else:
        stack.append(col)

    # 반환점(최고높이)에 도달하면 종료
    if col == highest:
        break

print(S)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
