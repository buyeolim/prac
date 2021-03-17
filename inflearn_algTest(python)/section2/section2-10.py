'''
섹션 2-10
점수계산
'''
import sys
sys.stdin = open("input.txt", "rt")

N = int(sys.stdin.readline())
ans = list(map(int, sys.stdin.readline().split()))

score = 0
cont = 0
for n in range(1, N + 1):
    if ans[n - 1] == 1:
        if cont == 0:
            cont += 1
            score += ans[n - 1]
        else:
            cont += 1
            score += ans[n - 1] * cont
    else:
        cont = 0

print(score)

