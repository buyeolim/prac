'''
별 찍기 - 9
https://www.acmicpc.net/problem/2446
'''
N = int(input())

width = height = 2*N - 1
left = 0 
right = width - 1
row = [1] * width
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
        row[left] = row[right] = 0

        left += 1
        right -= 1
    elif h_idx < height - 1:
        left -= 1
        right += 1

        row[left] = row[right] = 1