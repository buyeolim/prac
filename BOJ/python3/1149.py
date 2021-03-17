'''
RGB거리
https://www.acmicpc.net/problem/1149
'''
N = int(input())  # 집의 수
costs = []
for _ in range(N):
    r, g, b = map(int, input().split())
    costs.append((r, g, b))

dp = [[0] * 3 for _ in range(N)]
dp[0] = list(costs[0])
for n in range(1, N):
    dp[n][0] = min(dp[n-1][1], dp[n-1][2]) + costs[n][0]
    dp[n][1] = min(dp[n-1][0], dp[n-1][2]) + costs[n][1]
    dp[n][2] = min(dp[n-1][0], dp[n-1][1]) + costs[n][2]

print(min(dp[n]))


###
# 참고(https://m.blog.naver.com/occidere/220785383050)

""" DFS
def dfs(lv, prev_color):
    global cost, answer

    if lv == N:
        answer = min(cost, answer)

        return
    else:
        for color in range(3):
            if prev_color == color:
                continue
            else:
                cost += costs[lv][color]
                color_num.append(color)
                dfs(lv + 1, color)
                cost -= costs[lv][color]
                color_num.pop()
                
                
N = int(input())  # 집의 수
costs = []
for _ in range(N):
    r, g, b = map(int, input().split())
    costs.append((r, g, b))

cost = 0
answer = sys.maxsize
color_num = []
dfs(0, -1)
print(answer)
"""
