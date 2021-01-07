'''
별 찍기 - 15
https://www.acmicpc.net/problem/10990
'''
N = int(input())

width = 2*N - 1
height = N
left = right = width // 2
row = [0] * width
row[left] = row[right] = 1
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
        left -= 1
        right += 1
        row[left] = row[right] = 1
