'''
섹션 6-3
부분집합 구하기(DFS)
'''
import sys

def dfs(x):
    if x > N:
        for i in range(1, N+1):
            if ch[i] == 1:
                print(i, end=' ')
        print()
        return
    else:
        ch[x] = 1 # 사용
        dfs(x+1)
        ch[x] = 0
        dfs(x+1)


#sys.stdin = open("input.txt", "r")
N = int(input())
ch = [0] * (N+1)

# 상태트리 사용
dfs(1)
