'''
N과 M (9)
https://www.acmicpc.net/problem/15663 * 시간 초과
'''
import sys
sys.stdin = open("input.txt", "r")

def dfs(lv): # lv: 트리의 레벨
    if lv == M:
        if p not in P:
            P.append(p.copy())

        return
    else:
        for i, n in enumerate(num_set):
            p.append(n)
            num_set.pop(i)
            dfs(lv + 1)
            p.pop()
            num_set.insert(i, n)
        

N, M = map(int, input().split()) # N: 집합의 원소수, M: 뽑은 개수
num_set = list(map(int, input().split())) 

visit_flags = [0] * N # 방문 플래그(사용한 것은 1)
P = [] # 중복되지 않는 모든 순열 리스트
p = [] # 뽑아 생성한 하나의 순열
num_set.sort()
dfs(0)

# 출력
for p in P:
    for n in p:
        print(n, end=' ')
    print()