'''
N과 M (7)
https://www.acmicpc.net/problem/15656
'''
def dfs(lv): # lv: 트리의 레벨
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()
        return
    else:
        for n in num_set:
            p.append(n)
            dfs(lv + 1)
            p.pop()
        

N, M = map(int, input().split()) # N: 집합의 원소수, M: 뽑은 개수
num_set = list(map(int, input().split())) 

p = [] # 뽑아 생성한 하나의 순열
num_set.sort()
dfs(0)