'''
섹션 6-5
바둑이 승차(DFS)
'''
import sys


 # W의 인덱스, 부분집합의 합, 현재 위치까지의 누적합
def dfs(idx, w_sum, pre_sum):
    global result

    if w_sum + (total_sum - pre_sum) < result: # 부분집합 합 + 남아있는 원소의 합
        return
    if w_sum > C:
        return

    if idx > N - 1:
        if w_sum > result:
            result = w_sum
    else:
        dfs(idx+1, w_sum+W[idx], pre_sum+W[idx])
        dfs(idx + 1, w_sum, pre_sum+W[idx])


# 입력
#sys.stdin = open("input.txt", "r")
C, N = map(int, input().split()) # C: 킬로그램 제한, N: 바둑이 수
W = []                           # 바둑이들의 무게 리스트
for i in range(N):
    W.append(int(input()))


# 무게의 합이 제한보다 작은 경우의 수를 dfs로 확인 후 max값 출력
result = 0
total_sum = sum(W)
dfs(0, 0, 0)


# 출력
print(result)



'''
def dfs(idx):
    global result

    if result > C:
        return

    if idx > N - 1:
        w_sum = 0
        for w in W:
            if w[1] == 1:
                w_sum += w[0]
        
        if w_sum > result and w_sum <= C:
            result = w_sum

        return
    else:
        W[idx][1] = 1
        dfs(idx + 1)
        W[idx][1] = 0
        dfs(idx + 1)


C, N = map(int, input().split()) # C: 킬로그램 제한, N: 바둑이 수
W = []                           # 바둑이들의 무게 리스트
for _ in range(N):
    n = int(input())
    W.append([n, 0])

# 모든 경우의 수를 dfs로 확인 후 max값 출력
result = 0
dfs(0)
print(result)

###
# 3, 4, 5 시간초과
# 5s 기준, 4, 5 시간초과
'''