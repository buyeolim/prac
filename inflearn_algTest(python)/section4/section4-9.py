'''
섹션 4-9
증가수열 만들기(그리디)
'''
import sys


#입력옵션#sys.stdin = open('input.txt', 'r')

N = int(input())
s = list(map(int, input().split()))

inc_s = []
code = ''
prev_ele = 0
while len(s) > 0:
    if s[0] < prev_ele and s[-1] < prev_ele:
        break
    
    if s[0] < prev_ele:
        inc_s.append(s[-1])
        prev_ele = s.pop()
        code += 'R'
    elif s[-1] < prev_ele:
        inc_s.append(s[0])
        prev_ele = s.pop(0)
        code += 'L'
    elif s[0] <= s[-1]:
        inc_s.append(s[0])
        prev_ele = s.pop(0)
        code += 'L'
    else:
        inc_s.append(s[-1])
        prev_ele = s.pop()
        code += 'R'

print(len(inc_s))
print(code)
         
