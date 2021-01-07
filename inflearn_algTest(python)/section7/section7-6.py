'''
섹션 7-6
알파코드(DFS)
'''
import sys


def dfs(lv, P):
    global cnt

    if lv == n:
        cnt += 1
        for i in range(P):
            print(chr(res[i]+64), end=' ')
        print()
    else:
        for i in range(1, 27):
            if code[lv] == i: # i가 한 자리수
                res[P] = i
                dfs(lv + 1, P + 1)
            elif i >= 10 and code[lv] == i//10 and code[lv+1] == i%10 :
                 # i가 두 자리수
                 res[P] = i
                 dfs(lv + 2, P + 1)

                
#sys.stdin = open("input.txt", "r")
code = list(map(int, input()))

n = len(code) # 종착점
code.insert(n, -1) # 인덱스 아웃 방지
res = [0] * (n+3) # 알파벳과 대응하는 숫자
cnt = 0
dfs(0, 0)
