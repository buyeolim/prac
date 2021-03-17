'''
섹션 2-4
대표값
'''
import sys
#sys.stdin = open("input.txt", "rt")

# N : 학생 수
N = int(sys.stdin.readline())
# scores : 각 학생들의 점수 리스트
scores = list(map(int, sys.stdin.readline().split()))

# 평균
avg = round(sum(scores, 0) / N)

# 평균과 가장 가까운 점수 구하기
reps = [] # 가장 가까운 점수들 배열
diffMin = float('inf')
for score in scores:
    diff = abs(score - avg) 
    if diff < diffMin: # 더 가까운 점수 있을 시, 배열 초기화 후 삽입
        diffMin = diff
        reps.clear()
        reps.append(score)
    elif diff == diffMin: # 같은 차이일 때, 배열에 추가 삽입
        reps.append(score)

# 같은 점수가 존재할 경우 더 앞번호 출력
print(avg, scores.index(max(reps)) + 1)