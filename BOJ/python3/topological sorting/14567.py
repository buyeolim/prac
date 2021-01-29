'''
선수과목
https://www.acmicpc.net/problem/14567
'''
import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())  # 과목의 수, 선수 조건의 수

# 인접 리스트 및 진입 차수 리스트 초기화
adj_list = [[-1] for _ in range(N+1)]
in_degree = [-1] + [0] * N

# 인접 리스트 및 진입 차수설정
for _ in range(M):
    A, B = map(int, sys.stdin.readline().split())  # B의 선수과목, A의 후수과목
    adj_list[A].append(B)
    in_degree[B] += 1

# 위상 정렬을 이용하여 차례로 출력
# 진입 차수가 없는 과목은 큐에 삽입
queue = deque()
terms = [-1] + [0] * N
for subj in range(1, N+1):
    if in_degree[subj] == 0:
        queue.append(subj)  # 과목
        terms[subj] = 1  # 이수학기


while len(queue) > 0:
    # 큐에 있는 과목 Dequeue
    subj = queue.popleft()
    
    for next_subj in range(1, N+1):
        # 인접리스트에 후수과목이 있다면 진입차수 감소
        if adj_list[subj].count(next_subj) == 1:
            in_degree[next_subj] -= 1
            # 진입차수가 0이면 큐에 삽입, 학기는 선수과목 학기의 다음 학기
            if in_degree[next_subj] == 0:
                queue.append(next_subj)
                terms[next_subj] = terms[subj] + 1

# 출력
terms.remove(-1)
for t in terms:
    print(t, end=' ')


###
# 시간초과 이유
# 1. 인접 행렬
# 2. input()의 속도
# 참고(https://talksis.tistory.com/31)
