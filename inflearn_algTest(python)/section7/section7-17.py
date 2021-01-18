'''
섹션 7-17
피자 배달 거리(삼성 SW역량평가 기출문제 : DFS활용)
'''
import sys


def dfs(lv, s):  # lv: 트리 레벨(뽑은 개수), s: 가게(S)의 인덱스
    """nCm"""
    if lv == M:
        tmp = comb.copy()
        C.append(tmp)

        return
    else:
        for i in range(s, len(S)):
            comb[lv] = i
            dfs(lv + 1, i + 1)


#sys.stdin = open("input.txt", "r")
N, M = map(int, input().split())

mat = []  # 지도
H = []  # 집
S = []  # 가게
for r in range(N):
    row = list(map(int, input().split()))
    mat.append(row)

    for c in range(N):
        if mat[r][c] == 1:
            H.append((r, c))
        elif mat[r][c] == 2:
            S.append((r, c))

# 서로 다른 N개의 원소 중에서 순서에 상관없이 M개를 선택: nCm
C = []  # 조합들 리스트
comb = [0] * M  # 조합(가게(S)의 인덱스 정보)
dfs(0, 0)

city_dist_min = sys.maxsize  # 최소 도시배달거리
for comb in C:
    # 집(h)에서 가게(s)까지의 최소거리(dist_min) 및 도시배달거리(city_dist) 계산
    city_dist = 0
    for h in H:
        dist_min = sys.maxsize
        for i in comb:
            dist = abs(S[i][0] - h[0]) + abs(S[i][1] - h[1])
            dist_min = min(dist, dist_min)

        city_dist += dist_min  # 해당 조합(comb)에서의 도시 배달 거리 합

    # 최소 도시배달거리 계산
    city_dist_min = min(city_dist, city_dist_min)

print(city_dist_min)

###
# 2, 3, 4, 5 시간초과 -> dfs에서 범위 안좁히고 전체 탐색한 것이 원인
