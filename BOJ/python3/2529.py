'''
부등호
https://www.acmicpc.net/problem/2529
'''
import sys

def dfs(lv):
    if lv == k + 1:
        print(result)
        return
    else:
        
        
        if lv == 0:
            # 사용
            visit_flags[lv] = 1
            result.append(nums[lv])
            dfs(lv + 1)
            result.pop()
        
            # 사용안함
            dfs(nums[lv])
        else:
            # 들어갈 수 있는 수 조건 확인
            ok = 0
            if signs[lv - 1] == '<':
                if nums[lv - 1] < nums[lv]:
                    ok = 1
            else:
                if nums[lv - 1] > nums[lv]:
                    ok = 1
            
            if ok == 1:
                # 사용
                visit_flags[lv] = 1
                result.append(nums[lv])
                dfs(lv + 1)
                result.pop()

                # 사용안함
                dfs(nums[lv])

sys.stdin = open("input.txt", "r")
k = int(input()) # 부등호 문자의 개수
signs = list(input().split())
nums = [i for i in range(0, 10)] # 사용 가능한 수 0 ~ 9
visit_flags = [0] * 10
result = []
dfs(0)