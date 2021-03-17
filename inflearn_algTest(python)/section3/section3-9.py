'''
섹션 3-9
봉우리
'''
import sys
#sys.stdin = open('input.txt', 'rt')

N = int(input())

mat = [[0] * (N + 2)]
for r in range(N):
    mat.append(list(map(int, input().split())))
    mat[r + 1].insert(0, 0)
    mat[r + 1].append(0)
mat.append([0] * (N + 2))

count = 0
peak = True
for r in range(1, N + 1):
    for c in range(1, N + 1):
        # 봉우리 확인
        if peak == True and mat[r][c - 1] >= mat[r][c]: # 상
            peak = False
        if peak == True and mat[r][c + 1] >= mat[r][c]: # 하
            peak = False
        if peak == True and mat[r - 1][c] >= mat[r][c]: # 좌
            peak = False
        if peak == True and mat[r + 1][c] >= mat[r][c]: # 우
            peak = False

        #
        if peak == True:
            count += 1

        peak = True

print(count)







