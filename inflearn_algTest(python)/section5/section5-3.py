'''
섹션 5-3
후위표기식 만들기
'''
import sys


# 우선순위 반환 함수
def get_priority(op_x):
    priority = -1
    if op_x == '*' or op_x == '/':
        priority = 3
    elif op_x == '+' or op_x == '-':
        priority = 2
    elif op_x == '(' or op_x == ')':
        priority = 1
    
    return priority

# 우선순위 비교 함수
def compare_priority(op_a, op_b):
    op_a_priority = get_priority(op_a)
    op_b_priority = get_priority(op_b)

    if op_a_priority > op_b_priority:
        val = 1
    elif op_a_priority < op_b_priority:
        val = -1
    else:
        val = 0
    
    return val


# 입력
#리다이렉션#sys.stdin = open('input.txt', 'r')
infix = list(input())


postfix, stack = '', [] # 후위, 스택
for tok in infix:

    if tok.isdecimal():
        postfix += tok
    else:
        if tok == '(':
            stack.append(tok)
        elif tok == ')':
            while True:
                tmp = stack.pop()
                if tmp == '(':
                    break
                postfix += tmp
        else:
            while len(stack) != 0 and compare_priority(stack[-1], tok) >= 0:
                postfix += stack.pop()
            stack.append(tok) 
        
while len(stack) != 0:
    postfix += stack.pop()


# 출력
print(postfix)