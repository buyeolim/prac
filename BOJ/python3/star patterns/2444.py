'''
별 찍기 - 7
https://www.acmicpc.net/problem/2444
'''
N = int(input())

width = height = 2*N - 1
left = right = width // 2
row = [0] * width
row[left] = 1
for h_idx in range(height):
    # 한 행 출력
    for i in range(width):
        if i > right:
            continue
        elif row[i] == 1:
            print('*', end='')
        else:
            print(' ', end='')
    print()
    
    # 다음 행을 위한 설정
    if h_idx < N - 1:
        left -= 1
        right += 1

        row[left] = 1
        row[right] = 1
    elif h_idx < height - 1:
        left += 1
        right -= 1

        for i in range(left):
            row[i] = 0
        for i in range(left, right + 1):
            row[i] = 1
        for i in range(right + 1, width):
            row[i] = 0