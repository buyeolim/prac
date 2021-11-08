'''
등수 구하기
https://www.acmicpc.net/problem/1205
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, new_score, P = map(int, input().split())

ans = -1
rank = 1
rank_list = []
if N != 0:
    scores = list(map(int, input().split()))

    prev_score = scores[0]
    for i in range(N):
        if scores[i] < prev_score:
            rank = i + 1
        rank_list.append(rank)

        if new_score > scores[i]:
            if prev_score == new_score:
                ans = rank_list[i-1]
            else:
                ans = rank
            break

        prev_score = scores[i]
    else:
        if P > N:
            if prev_score == new_score:
                ans = rank
            else:
                ans = len(rank_list) + 1
else:
    ans = rank

print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
