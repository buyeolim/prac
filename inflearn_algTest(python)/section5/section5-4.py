'''
섹션 5-4
후위식 연산
'''
import sys

# 입력
#리다이렉션#sys.stdin = open("input.txt", 'r')
# 후위표기식
postfix = list(input())


stack = []
for tok in postfix:

    if tok.isdecimal():
        stack.append(tok)
    else:
        a = int(stack.pop())
        b = int(stack.pop())
        if tok == '+':
            stack.append(b + a)
        elif tok == '-':
            stack.append(b - a)
        elif tok == '*':
            stack.append(b * a)
        elif tok == '/':
            stack.append(b / a)

# 출력
print(stack.pop())
        
