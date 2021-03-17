'''
터렛
https://www.acmicpc.net/problem/1002
'''
T = int(input())  # 테스트 케이스
for t in range(1, T+1):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())

    d = ((x1-x2)**2 + (y1-y2)**2)**0.5 # 두 점 사이의 거리
    r_l = max(r1, r2)  # 더 긴것
    r_s = min(r1, r2)  # 더 짧은 것

    if d == 0 and r_l == r_s:  # 동심원
        print(-1)
    elif r_l-r_s < d < r_s+r_l:  # 두 점
        print(2)
    elif r_s+r_l == d or r_l-r_s == d:  # 한 점(외접 or 내접)
        print(1)
    elif r_s+r_l < d or r_l-r_s > d:  # 없음(외부 or 내부)
        print(0)

###
# 참고(https://mathbang.net/101)
# 수정 사항, 동심원 조건을 위로 올리고 d == 0 -> d == 0 and r_l == r_s 변경