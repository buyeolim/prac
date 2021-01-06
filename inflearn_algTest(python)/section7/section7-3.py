'''
섹션 7-3
양팔저울(DFS)
'''
import sys


def dfs(lv, w_sum):
    global X

    if lv == K:
        if 0 < w_sum <= S:
            X.add(w_sum)
        return
    else:
        dfs(lv + 1, w_sum + weights[lv]) # 추 왼쪽
        dfs(lv + 1, w_sum - weights[lv]) # 추 오른쪽
        dfs(lv + 1, w_sum) # 추 사용안함

## 입력 ##
#sys.stdin = open("input.txt", "r")
K = int(input()) # K개의 추
weights = list(map(int, input().split())) # 추의 무게 리스트

## 수행 ##
S = sum(weights)
X = set() # 측정 가능한 그릇 무게 저장
dfs(0, 0)

## 출력 ##
print(S - len(X))

