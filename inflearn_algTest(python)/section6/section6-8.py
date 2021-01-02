'''
섹션 6-8
순열 구하기
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
        for i in range(1, N+1): # 1 ~ n + 1 까지 탐색
            if use_flags[i] == 0:
                use_flags[i] = 1 # 사용
                result[level] = i
                dfs(level + 1)
                use_flags[i] = 0 # 사용취소(다음 원소를 위해)


#sys.stdin = open("input.txt", "r")
N, M = map(int, input().split()) # N: 1 ~ N 까지의 번호, M: 뽑는 개수


result = [0] * N 
use_flags = [0] * (N+1)
cnt = 0
dfs(0)


print(cnt)