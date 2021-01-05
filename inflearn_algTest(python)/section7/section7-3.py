'''
섹션 7-3
양팔저울(DFS)
'''
import sys


def dfs(lv, cur_w):
    X[sum(c)] += 1

    if lv == 3:
        return
    else:
        if cur_w == 0:
            cur_w_idx = -1
        else:
            cur_w_idx = weights.index(cur_w)

        for i in range(cur_w_idx + 1, K):
            c.append(weights[i])
            dfs(lv + 1, weights[i])
            c.pop()

## 입력 ##
sys.stdin = open("input.txt", "r")
K = int(input()) # K개의 추
weights = list(map(int, input().split())) # 추의 무게 리스트

## 수행 ##
S = sum(weights)
c = [] # 추의 조합
X = [0] * (S + 1) # 그릇 무게(X의 index)와 같은 조합 수를 저정하는 리스트
dfs(0, 0)

print(X.count(0))
a = 0

