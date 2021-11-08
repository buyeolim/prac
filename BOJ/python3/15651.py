'''
N과 M (3)
https://www.acmicpc.net/problem/15651
'''
def dfs(lv): # lv: 트리 레벨
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()

        return
    else:
        for n in range(1, N + 1):
            p.append(n)
            dfs(lv + 1)
            p.pop()


N, M = map(int, input().split()) # N: 1 ~ N까지의 자연수, M: 뽑은 개수

p = [] # 순열
dfs(0)