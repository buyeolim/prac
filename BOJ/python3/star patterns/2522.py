'''
별 찍기 - 12
https://www.acmicpc.net/problem/2522
'''
N = int(input())

width = N
height = 2*N - 1
left = width - 1
row = [0] * width
row[left] = 1
for h_idx in range(height):
    # 한 행 출력
    for i in range(width):
        if row[i] == 1:
            print('*', end='')
        else:
            print(' ', end='')
    print()
    
    # 다음 행을 위한 설정
    if h_idx < N - 1:
        left -= 1
        row[left] = 1
    elif h_idx < height - 1:
        row[left] = 0
        left += 1
        