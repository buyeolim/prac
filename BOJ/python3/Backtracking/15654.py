'''
N과 M (5)
https://www.acmicpc.net/problem/15654
'''
import sys
sys.stdin = open("input.txt", "r")

def dfs(lv):
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()

        return
    else:
        for n in num_set:
            n_idx = num_set.index(n)
            p.append(num_set.pop(n_idx))
            dfs(lv + 1)
            num_set.insert(n_idx, n)
            p.pop()


N, M = map(int, input().split()) # N: 집합의 원소수, M: 뽑은 개수
num_set = list(map(int, input().split())) 

p = []
num_set.sort()
dfs(0)