'''
별 찍기 - 13
https://www.acmicpc.net/problem/2523
'''
N = int(input())

width = N
height = 2*N - 1
right = 0
row = [0] * width
row[right] = 1
for h_idx in range(height):
    # 한 행 출력
    for i in range(width):
        if i > right:
            break
        elif row[i] == 1:
            print('*', end='')
        else:
            print(' ', end='')
    print()
    
    # 다음 행을 위한 설정
    if h_idx < N - 1:
        right += 1
        row[right] = 1
    elif h_idx < height - 1:
        row[right] = 0
        right -= 1