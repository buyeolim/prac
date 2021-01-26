'''
섹션 8-8
알리바바와 40인의 도둑(Top-Down)
'''
import sys


def dfs(r, c):
    if dp[r][c] > 0:  # cut-edge
        return dp[r][c]

    if (r, c) == (1, 1):
        return mat[r][c]
    else:
        if r == 1:
            dp[r][c] = dfs(r, c-1) + mat[r][c]
        elif c == 1:
            dp[r][c] = dfs(r-1, c) + mat[r][c]
        else:
            dp[r][c] = min(dfs(r-1, c), dfs(r, c-1)) + mat[r][c]

        return dp[r][c]


#sys.stdin = open("input.txt", "r")
N = int(input())  # 정사각형 한 변의 길이 N
mat = []
mat.append([0] * (N+1))
for _ in range(N):
    row = list(map(int, input().split()))
    row.insert(0, 0)
    mat.append(row)

dp = [[0] * (N+1) for _ in range(N+1)]  # 해당 (r, c)까지 이동하기 위한 최소에너지 저장

print(dfs(N, N))



###
# 맨 끝에서 부터 찾아간다

""" DFS
def dfs(r, c):
    if (r, c) == (1, 1):
        return mat[r][c]
    else:
        if r == 1:
            return dfs(r, c-1) + mat[r][c]
        elif c == 1:
            return dfs(r-1, c) + mat[r][c]
        else:
            return min(dfs(r-1, c), dfs(r, c-1)) + mat[r][c]


sys.stdin = open("input.txt", "r")
N = int(input())  # 정사각형 한 변의 길이 N
mat = []
mat.append([0] * (N+1))
for _ in range(N):
    row = list(map(int, input().split()))
    row.insert(0, 0)
    mat.append(row)

print(dfs(N, N))
"""