'''
섹션 6-9
수열 추측하기
'''
import sys

def dfs(level, p_sum):
    """이항계수와의 곱이 F와 같은 순열 구하기"""
    if level == N and p_sum == F:
        for ele in p:
            print(ele, end=' ')
        sys.exit() # 답 출력 후 프로그램 종료
        return
    else:
        for n in range(1, N+1): # 1 ~ n 까지
            if use_flags[n] == 0:
                use_flags[n] = 1
                p[level] = n
                dfs(level + 1, p_sum + bin_coef[level] * p[level])
                use_flags[n] = 0


# 입력
#sys.stdin = open("input.txt", "r")
N, F = map(int, input().split()) # N: 맨 윗줄의 숫자 개수, F: 맨 아랫줄의 숫자

# 1) 이항계수 구하기
bin_coef = [1] * N # 이항계수
for i in range(1, N): # 2 ~ N-1 번째 계수
    bin_coef[i] = bin_coef[i-1] * (N-i) // i

# 2) 이항계수와의 곱이 F와 같은 순열 구하기
p = [0] * N # 순열 
use_flags = [0] * (N+1) # 1 ~ n까지의 사용확인 플래그 리스트
dfs(0, 0)



'''
def dfs(level):
    """모든 순열 찾기"""
    if level == N:
        P.append(p.copy())

        return
    else:
        for n in range(1, N+1): # 1 ~ n 까지
            if use_flags[n] == 0:
                use_flags[n] = 1
                p[level] = n
                dfs(level + 1)
                use_flags[n] = 0

def adj_sum(num_set):
    """수열에서 인접한 두 수의 합"""
    global total_sum

    if total_sum > F:
        return

    if len(num_set) == 1:
        total_sum = num_set[0]
        return
    else:
        tmp_set = []
        for i in range(len(num_set) - 1): # 0 ~ n-1 까지
            tmp_set.append(num_set[i] + num_set[i+1])

        adj_sum(tmp_set)


#sys.stdin = open("input.txt", "r")
N, F = map(int, input().split()) # N: 맨 윗줄의 숫자 개수, F: 맨 아랫줄의 숫자

# 1) N개의 숫자 중에서 N개를 뽑아 나열한 순열(경우의 수 N!)
P = [] # 모든 순열 리스트
p = [0] * N # 순열 
use_flags = [0] * (N+1)

dfs(0)

total_sum = 0
results = []
for p in P:
    adj_sum(p)

    if total_sum == F:
        results.append(p)

    total_sum = 0

results.sort()

# 결과 출력
for n in results[0]:
    print(n, end=' ')

### 2, 3, 5 시간 초과
'''