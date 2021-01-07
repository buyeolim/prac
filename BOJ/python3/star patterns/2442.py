'''
별 찍기 - 5
https://www.acmicpc.net/problem/2442
'''
N = int(input())

width = 2*N - 1
left = right = width // 2
row = [0] * width
row[left] = 1
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
    left -= 1
    right += 1
    if left < 0:
        break
    else:
        for i in range(left, right + 1):
            row[i] = 1