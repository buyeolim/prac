'''
알파벳
https://www.acmicpc.net/problem/1987
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

mat = []

R, C = map(int, sys.stdin.readline().split())
for _ in range(R):
    row = list(sys.stdin.readline().strip())
    mat.append(row)

sol_set = set()
sol_set.add((0, 0, mat[0][0]))

alphabets = [0] * 26
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

ans = 0
while len(sol_set) > 0:
    r, c, alphabets = sol_set.pop()
    if len(alphabets) > ans:
        ans = len(alphabets)

    for i in range(4):
        next_r = r + dr[i]
        next_c = c + dc[i]
        if 0 <= next_r < R and 0 <= next_c < C:
            if mat[next_r][next_c] not in alphabets:
                sol_set.add((next_r, next_c, alphabets + mat[next_r][next_c]))

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
