'''
섹션 7-5
동전 분배하기(DFS)
'''
import sys


def dfs(lv):
    global gap_min
    if lv == N:
        # A, B, C 각각 동전의 합 중 최대 최소의 차이
        coins_sum =[]
        coins_sum.append(sum(A))
        coins_sum.append(sum(B))
        coins_sum.append(sum(C))
        
        gap = max(coins_sum) - min(coins_sum)
        if gap < gap_min:
            tmp = set() # 중복을 저장하지 않기 위해
            for x in coins_sum: 
                tmp.add(x)
            
            if len(tmp) == 3: # 세 명 모두 다른 돈을 가질때
                gap_min = gap

        return
    else:
        cur_coin = coins[lv]
        A.append(cur_coin)
        dfs(lv + 1)
        A.pop()

        B.append(cur_coin)
        dfs(lv + 1)
        B.pop()

        C.append(cur_coin)
        dfs(lv + 1)
        C.pop()


#sys.stdin = open("input.txt", "r")
N = int(input()) # 동전의 개수
coins = []
for _ in range(N):
    tmp = int(input()) # 동전의 금액
    coins.append(tmp)

A = [] # A가 받은 동전 
B = [] # B가 받은 동전
C = [] # C가 받은 동전
gap_min = sys.maxsize
dfs(0)

print(gap_min)

### 
# 상태 트리 만들기 중요