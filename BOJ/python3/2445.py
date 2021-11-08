'''
별 찍기 - 8
https://www.acmicpc.net/problem/2445
'''
N = int(input())

width = 2*N
height = 2*N - 1
left = 0
right = width - 1
row = [0] * width
row[left] = row[right] = 1
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
        left += 1
        right -= 1

        row[left] = row[right] = 1
    elif h_idx == N - 1:
        row[left] = row[right] = 0
    elif h_idx < height - 1:
        left -= 1
        right += 1

        for i in range(left, right + 1):
            row[i] = 0

# N이 짝수, 홀수 일때