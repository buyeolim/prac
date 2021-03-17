'''
섹션 7-1
최대점수 구하기(DFS)
'''
import sys


def dfs(lv, cur_q, score_sum, time_sum):
    '''순서 상관x, 같은 원소 중복x'''
    global max_score_sum

    if lv == N or time_sum == M: # 제한시간 내, 문제 다 풀면 끝
        if score_sum > max_score_sum:
            max_score_sum = score_sum

        return
    elif time_sum > M: # 시간 초과시
        score_sum -= cur_q[0]
        if score_sum > max_score_sum:
            max_score_sum = score_sum
        
        score_sum += cur_q[0]

        return
    else:
        if cur_q == 0:
            cur_q_idx = -1
        else:
            cur_q_idx = Q.index(cur_q)

        for i in range(cur_q_idx + 1, N): # 현재 q의 다음 인덱스 ~ N 까지
            q = Q[i]
            solved_Q.append(q)
            dfs(lv + 1, q, score_sum + q[0], time_sum + q[1])
            solved_Q.pop()


# 입력
#sys.stdin = open("input.txt", "r")
N, M = map(int, input().split()) # N: 문제의 개수, M: 제한 시간
Q = [] # (점수, 시간) 튜플을 가지는 리스트
for _ in range(N):
    buf = tuple(map(int, input().split()))
    Q.append(buf)

# 수행
max_score_sum = 0
Q.sort(reverse=True) # 점수 큰 순서대로 정렬
solved_Q = [] # 해결된 문제의 (점수, 시간)튜플을 가지는 리스트
dfs(0, 0, 0, 0)

# 출력
print(max_score_sum)
