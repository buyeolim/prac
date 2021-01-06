'''
섹션 7-4
동전 바꿔주기(DFS)
'''
import sys

def dfs(lv, coin_sum):
    global cnt
    
    if coin_sum > T: # cut-edge
        return

    if lv == k:
        if coin_sum == T:
            cnt += 1
    else:
        for i in range(N[lv] + 1):
            dfs(lv + 1, coin_sum + (P[lv] * i))

## 입력 
#sys.stdin = open("input.txt", "r")
T = int(input()) # 지페의 금액
k = int(input()) # 동전의 가지 수
P = [] # 동전의 금액(종류)
N = [] # 각 동전의 개수
for _ in range(k):
    p, n = map(int, input().split())
    P.append(p)
    N.append(n)


## 수행 
cnt = 0
dfs(0, 0)

print(cnt)
