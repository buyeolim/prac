'''
섹션 6-11
수들의 조합
'''
import sys


def dfs(lv, s, c_sum):
    global cnt

    if lv == K:
        if c_sum % M == 0:
            cnt += 1
    else:
        for i in range(s, N):
            dfs(lv + 1, i + 1, c_sum + nums[i])


# 입력
#sys.stdin = open("input.txt", "r")
N, K = map(int, input().split()) # N: 1 ~ N까지의 번호, K: 뽑는 개수
nums = list(map(int, input().split())) # n개의 정수 리스트
M = int(input()) # M: 조합의 합

cnt = 0
dfs(0, 0, 0)

# 출력
print(cnt)



'''
def dfs(level):
    if level == K:
        tmp = c.copy()
        tmp.sort()
        if tmp not in C and sum(tmp)%M == 0:
            C.append(tmp)

        return
    else:
        for n in nums:
            if n not in c:
                c.append(n)
                dfs(level+1)
                c.pop()

   
# 입력
#sys.stdin = open("input.txt", "r")
N, K = map(int, input().split()) # N: 1 ~ N까지의 번호, K: 뽑는 개수
nums = list(map(int, input().split())) # n개의 정수 리스트
M = int(input()) # M: 조합의 합

C = []
c = []
dfs(0) # level 0을 매개변수로 시작

# 출력
print(len(C))

## 4, 5 시간 초과
'''