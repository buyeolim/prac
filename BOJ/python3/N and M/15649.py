'''
N과 M (1)
https://www.acmicpc.net/problem/15649
'''
def dfs(lv): # lv: 트리 레벨
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()

        return
    else:
        for n in range(1, N + 1):
            if visit_flags[n] == 0:
                p.append(n)
                visit_flags[n] = 1
                dfs(lv + 1)
                p.pop()
                visit_flags[n] = 0


N, M = map(int, input().split()) # N: 1 ~ N 까지의 수, M: 뽑는 개수

p = [] # 순열
visit_flags = [0] * (N + 1) # 방문 플래그
dfs(0)