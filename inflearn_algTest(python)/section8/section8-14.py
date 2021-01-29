'''
섹션 8-14
위상정렬(그래프 정렬)
'''
import sys
from collections import deque

sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
N, M = map(int, input().split())  # 전체 일의 개수, 일의 순서 정보의 개수

# 인접 행렬 및 진입 차수 리스트 초기화
adj_mat = [[-1] * (N+1)]
for _ in range(N):
    row = [-1] + [0] * N
    adj_mat.append(row)

in_degree = [-1] + [0] * N

# 인접 행렬 및 진입 차수설정
for _ in range(M):
    work, next_work = map(int, input().split())  # 전, 후
    adj_mat[work][next_work] = 1
    in_degree[next_work] += 1

# 위상 정렬을 이용하여 차례로 출력
# 진입 차수가 없는 작업은 큐에 삽입
queue = deque()
for w in range(1, N+1):
    if in_degree[w] == 0:
        queue.append(w)

while len(queue) > 0:
    # 큐에 있는 작업 Dequeue
    work = queue.popleft()
    print(work, end=' ')
    
    for next_work in range(1, N+1):
        # 인접행렬에 다음작업이 있다면 진입차수 감소
        if adj_mat[work][next_work] == 1:
            in_degree[next_work] -= 1
            # 진입차수가 0이면, 큐에 삽입
            if in_degree[next_work] == 0:
                queue.append(next_work)


###
# 참고 (https://yjs03057.tistory.com/4)
# BOJ 유사문제
# https://www.acmicpc.net/problem/14567