'''
별 찍기 - 21
https://www.acmicpc.net/problem/10996
'''
N = int(input())

width = N
height = N
row_a = [0] * width
row_b = [0] * width
for h_idx in range(height):
    # 첫째 행 설정 및 출력    
    for i in range(width):
        if i % 2 == 0:
            row_a[i] = 1

        if row_a[i] == 1:
            print('*', end='')
        else:
            print(' ', end='')
    print()
    
    if width == 1:
        break
    
    # 둘째 행 설정 및 출력
    for i in range(width):
        if i % 2 == 1:
            row_b[i] = 1

        if row_b[i] == 1:
            print('*', end='')
        else:
            print(' ', end='')
    print()