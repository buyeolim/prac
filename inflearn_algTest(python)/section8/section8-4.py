'''
섹션 8-4
최대 부분 증가수열
'''
import sys


#sys.stdin = open("input.txt", "r")
N = int(input())
nums = list(map(int, input().split()))

dp = [0] * N  # 최대 부분 증가수열의 길이 정보를 저장하기 위한 리스트(nums의 인덱스와 대응)
dp[0] = 1  # 첫 번째 원소일 때, 최대 부분 증가수열의 길이
for i in range(1, N):
    for j in range(i):  # i번째 원소일 때, 최대 부분 증가수열의 길이 설정
        if nums[j] < nums[i]:
            dp[i] = max(dp[j] + 1, dp[i])
        else:
            dp[i] = max(1, dp[i])

print(max(dp))


'''
# dfs 방식
def dfs(lv, prev_ele):
    global cnt, cnt_max

    if lv == N:
        #for n in visit:
        #    if n > 0:
        #        print(n, end=' ')
        #print('->' ,cnt)
        
        cnt_max = max(cnt, cnt_max)

        return
    else:
    
        ele = nums[lv]
        # 사용
        if ele > prev_ele:
            visit[lv] = ele
            cnt += 1
            dfs(lv + 1, ele)
            visit[lv] = 0
            cnt -= 1
        
        # 미사용
        dfs(lv + 1, prev_ele)
    

sys.stdin = open("input.txt", "r")
N = int(input())
nums = list(map(int, input().split()))

visit = [0] * N  # 사용한 원소를 상응하는 인덱스에 원소값으로 설정
cnt = 0
cnt_max = 0
dfs(0, 0)
    
print(cnt_max)
'''