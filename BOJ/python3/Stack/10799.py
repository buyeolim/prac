'''
쇠막대기
https://www.acmicpc.net/problem/10799
'''
brackets = list(input())

stack = []
prev_bracket = ""
cnt = 0
for bracket in brackets:
    if bracket == '(':
        stack.append(bracket)
    else:
        if prev_bracket == '(':
            stack.pop()
            cnt += len(stack)
        else:
            stack.pop()
            cnt += 1

    prev_bracket = bracket  # 이전 괄호 저장

print(cnt)
