'''
괄호
https://www.acmicpc.net/problem/9012
'''
T = int(input())  # 테스트케이스
string = []
stack = []
for _ in range(T):
    string = list(input())  # 괄호 문자열 입력

    for s in string:
        if s == '(':
            stack.append(s)
        else:
            top = len(stack) - 1
            if top >= 0 and stack[top] == '(':
                stack.pop()
            else:
                stack.append(s)
    
    if len(stack) == 0:
        print("YES")
    else:
        print("NO")

    stack.clear()