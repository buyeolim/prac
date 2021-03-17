'''
섹션 5-2
쇠막대기
'''
import sys


#입력옵션#sys.stdin = open('input.txt', 'r')

arr = list(input())
stack = []
laser_cnt = 0 # 레이저 개수
stick_cnt = 0 # 쇠막대기 개수
total_stick_cnt = 0 # 총 쇠막대기 개수
for i, ch in enumerate(arr):

    if ch == '(':
        '''
        stack.append(i)
        '''

        stack.append(laser_cnt)
    else:
        '''
        dist = i - stack.pop()
        
        if dist == 1:
            laser_cnt += 1
        else:
            
            stick_cnt = laser_cnt + 1
        '''

        if arr[i - 1] == '(': # LASER일 경우
            laser_cnt += 1
            stack.pop()
        else:
            stick_cnt = laser_cnt - stack.pop() + 1
            total_stick_cnt += stick_cnt
        
    if len(stack) == 0:
        laser_cnt = 0

print(total_stick_cnt)
