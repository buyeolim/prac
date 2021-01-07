'''
별 찍기 - 6
https://www.acmicpc.net/problem/2443
'''
N = int(input())

width = 2*N - 1
left = 0
right = width - 1
row = [1] * width
for _ in range(N):
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
    left += 1
    right -= 1
    if right < 0:
        break
    else:
        for i in range(left):
            row[i] = 0
        for i in range(left, right + 1):
            row[i] = 1