'''
윷놀이
https://www.acmicpc.net/problem/2490
'''
TESTCASE = 3
for _ in range(TESTCASE):
    yut = list(map(int, input().split())) # 윷의 배(0)와 등(1)을 저장하는 리스트

    yut_sum = sum(yut)
    if yut_sum == 3: # 도
        print('A')
    elif yut_sum == 2: # 개
        print('B')
    elif yut_sum == 1: # 걸
        print('C')
    elif yut_sum == 0: # 윷
        print('D')
    else: # 모
        print('E')