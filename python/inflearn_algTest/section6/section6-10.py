'''
섹션 9-10
조합 구하기
'''
import sys

def dfs(level):
    tmp = c.copy()
    tmp.sort()
    if level == M and tmp not in C:
        C.append(tmp)

        return
    else:
        for n in range(1, N+1): # 1 ~ N+1개의 자식노드
            if n not in c:
                c.append(n)
                dfs(level+1)
                c.pop()


# 입력
#sys.stdin = open("input.txt", "r")
N, M = map(int, input().split()) # N: 1 ~ N 까지의 번호, M: 뽑는 개수

C = []
c = []
dfs(0)

# 출력
for c in C:
    for n in c:
        print(n, end=' ')
    print()
print(len(C))