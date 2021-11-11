'''
기타 콘서트
https://www.acmicpc.net/problem/1497
'''
from itertools import combinations
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N, M = map(int, input().split())
S = []
for _ in range(N):
    _, songs = input().split()
    tmp = 0
    for song in songs:
        if song == "Y":
            tmp = (tmp << 1) + 1
        else:
            tmp = tmp << 1
    S.append(tmp)

# 모든 조합
C = []
for n in range(1, N+1):
    C += list(combinations([n for n in range(N)], n))

ans = [0] + [sys.maxsize for i in range(M)]  # 인덱스: 연주곡 수, 값: 기타의 수(최소)
max_song_cnt = 0  # 연주곡의 수(최대)
for c in C:
    check = 0
    # 모든 조합에서 모든 곡에 대한 연주가능 여부 확인
    for n in c:
        check |= S[n]

    # 연주 가능한 곡이 하나라도 있으면, 연주곡 개수 최대로
    if check != 0:
        song_cnt = bin(check).count("1")
        ans[song_cnt] = min(ans[song_cnt], len(c))  # 기타 개수는 최소로

# 연주 가능하면 기타의 최소 개수, 그 외 -1
for m in range(M, 0, -1):
    if ans[m] != sys.maxsize:
        print(ans[m])
        break
else:
    print(-1)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
