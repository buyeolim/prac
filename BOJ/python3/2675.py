'''
문자열 반복
https://www.acmicpc.net/problem/2675
'''
T = int(input()) # 테스트 케이스
for _ in range(T):
    R, S = input().split() # 반복횟수, 문자열
    R = int(R)

    P = '' # 새 문자열
    for s in S:
        P += s * R

    print(P)
