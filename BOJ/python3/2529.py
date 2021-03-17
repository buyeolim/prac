'''
부등호
https://www.acmicpc.net/problem/2529
'''
def dfs(lv):
    if lv == k + 1:
        results.append(result.copy())

        return
    else:  
        
        for i, n in enumerate(nums):
            # 들어갈 수 있는 수 조건 확인
            use_flag = 0
            if lv != 0:
                if signs[lv - 1] == '<' and result[lv - 1] < n:
                            use_flag = 1
                elif signs[lv - 1] == '>' and result[lv - 1] > n:
                            use_flag = 1
            else:
                use_flag = 1
                
            if use_flag == 1:
                nums.pop(i)
                result.append(n)
                visit_flags[lv] = 1
                dfs(lv + 1)
                result.pop()
                nums.insert(i, n)
                visit_flags[lv] = 0


k = int(input()) # 부등호 문자의 개수
signs = list(input().split()) # 부등호 리스트

nums = [i for i in range(0, 10)] # 사용 가능한 수 0 ~ 9
visit_flags = [0] * 10 
result = [] # 부등호를 만족시키는 결과
results = [] # 결과들의 리스트
dfs(0)

for n in max(results):
    print(n, end='')
print()
for n in min(results):
    print(n, end='')