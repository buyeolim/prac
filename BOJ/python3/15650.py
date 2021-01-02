'''
N과 M (2)
https://www.acmicpc.net/problem/15650
'''
def dfs(lv, cur_n): # lv: 트리 레벨, cur_n: 현재 n
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()

        return
    else:
        for n in range(cur_n + 1, N + 1):
            p.append(n)
            dfs(lv + 1, n)
            p.pop()


N, M = map(int, input().split()) # N: 1 ~ N까지의 자연수, M: 뽑은 개수

p = [] # 순열
dfs(0, 0)