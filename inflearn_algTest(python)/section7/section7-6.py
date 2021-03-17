'''
섹션 7-6
알파코드(DFS)
'''
import sys


def dfs(lv, n): # lv: 트리 레벨, code의 인덱스, n: code의 대응숫자, result의 인덱스
    global cnt

    if lv == code_len:
        cnt += 1
        for i in range(n):
            print(chr(result[i] + 64), end='') # result를 알파벳으로 변환 출력
        print()
    else:
        for i in range(1, 27):
            if code[lv] == i: 
                # i가 한 자리수
                result[n] = i
                dfs(lv + 1, n + 1)
            elif i >= 10 and code[lv] == i//10 and code[lv+1] == i%10:
                 # i가 두 자리수
                 result[n] = i
                 dfs(lv + 2, n + 1)

                
#sys.stdin = open("input.txt", "r")
code = list(map(int, input()))

code_len = len(code) # 종착점
code.insert(code_len, -1) # 인덱스 아웃 방지
result = [0] * (code_len + 3) # 알파벳과 대응하는 숫자를 저장
cnt = 0
dfs(0, 0)

print(cnt)