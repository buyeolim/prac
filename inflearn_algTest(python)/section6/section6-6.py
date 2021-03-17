'''
섹션 6-6
중복순열 구하기
'''
import sys


def dfs(level):
    global cnt

    if level == M:
        for i in range(M): # M개 뽑은것 출력
            print(result[i], end=' ')
        print()
        cnt = cnt + 1
    else:
        for i in range(1, N + 1): # 1 ~ n + 1 까지 탐색
            result[level] = i
            dfs(level + 1)


sys.stdin = open("input.txt", "r")
N, M = map(int, input().split())


result = [0] * N 
cnt = 0
dfs(0)


print(cnt)