'''
박스 채우기
https://www.acmicpc.net/problem/1493
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def sol(l, w, h, idx):
    global flag, ans

    if l == 0 or w == 0 or h == 0:
        return

    for i in range(idx, N):
        if cubes[i][1] > 0:
            if l >= cubes[i][0] and w >= cubes[i][0] and h >= cubes[i][0]:
                cubes[i][1] -= 1
                ans += 1
                sol(l-cubes[i][0], w, h, i)
                sol(l, w-cubes[i][0], h, i)
                sol(l, w, h-cubes[i][0], i)
                return

    flag = True


cubes = []

length, width, height = map(int, sys.stdin.readline().split())
N = int(sys.stdin.readline())
for _ in range(N):
    A, B = map(int, sys.stdin.readline().split())
    cubes.append([A, B])

cubes.sort(key=lambda x: -x[0])  # 크기 내림차순
flag = False
ans = 0

sol(length, width, height, 0)

if flag == True:
    print(-1)
else:
    print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
