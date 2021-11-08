'''
N과 M (6)
https://www.acmicpc.net/problem/15655
'''
def dfs(lv, cur_n): # lv: 트리의 레벨, cur_n: 현재 n
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()
        return
    else:
        if lv == 0:
            cur_n_idx = -1
        else:
            cur_n_idx = num_set.index(cur_n)

        for i in range(cur_n_idx + 1, N):
            n = num_set[i]
            p.append(n)
            dfs(lv + 1, n)
            p.pop()
        

N, M = map(int, input().split()) # N: 집합의 원소수, M: 뽑은 개수
num_set = list(map(int, input().split())) 

p = [] # 뽑아 생성한 하나의 순열
num_set.sort()
dfs(0, 0)