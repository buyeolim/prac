'''
별 찍기 - 23
https://www.acmicpc.net/problem/13015
'''
def print_star(row, i):
    """한 행과 인덱스를 입력받아 공백 또는 별 출력"""
    if row[i] == 0:
        print(' ', end='')
    else:
        print('*', end='')


N = int(input())  # 숫자 입력

width = 4*N - 3  # 가로길이: 2*(2*N - 1) - 1 
height = 2*N - 1  # 세로길이

row_floor = [0] * (width // 2 + 1)  # 'X'의 천장 혹은 바닥행 설정
for i in range(N):
    row_floor[i] = 1

row_else = [0] * (width // 2 + 1)  # 그 나머지 행 설정
e = 0  # 돌아올 때의 끝 위치(출력시 무의미한 뒷 공백 제거)
row_else[e] = 1
row_else[N-1] = 1

width_mid = width // 2  # 가로의 중간(반환점)
height_mid = height // 2  # 세로의 중간(반환점)

# 'X' 출력 수행
for r in range(height):
    c = 0
    dc = 1  # 열의 변위(반환시 뒤에서 앞으로 이동)
    while c >= 0:
        # 'X'의 천장과 바닥일 때 구분
        if r == 0 or r == height - 1:
            print_star(row_floor, c)
        else:
            print_star(row_else, c)

            # 돌아올 때, 끝 위치에 도달하면 출력 종료
            if dc < 0 and c == e: 
                break
        
        # 출력할 열 조정
        c += dc
        if c == width_mid:
            dc = -1

    print()  # 행 바꿈

    # 가운데 행의 출력을 위한 위치 조정
    if r < height_mid:
        row_else.insert(0, 0)
        e += 1
    else:
        row_else.pop(0)
        e -= 1



###
# 가로 : 교차점을 포함한 칸의 수 => N + (N - 1)개
# 세로 : 교차점을 포함한 칸의 수 => N개
# 대칭을 이용