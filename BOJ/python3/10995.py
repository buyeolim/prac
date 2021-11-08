'''
별 찍기 - 20
https://www.acmicpc.net/problem/10995
'''
N = int(input())

width = N * 2 - 1
height = N
row = [0] * width
for i in range(width):
    if i % 2 == 0:
        row[i] = 1

for h_idx in range(height):
    # 한 행 출력
    for i in range(width):
        if row[i] == 1:
            print('*', end='')
        else:
            print(' ', end='')
    print()
    
    # 다음 행을 위한 설정
    if h_idx % 2 == 0:
        row.insert(0, 0)
        width += 1
    else:
        row.pop(0)
        width -= 1