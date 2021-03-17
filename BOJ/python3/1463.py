'''
1로 만들기
https://www.acmicpc.net/problem/1463
'''
N = int(input())

dp = [0] * (N+4)  # 숫자 N일때의 답을 해당 인덱스에 삽입
dp[2] = 1
dp[3] = 1
dp[4] = 2
for n in range(5, N+1):  # 5부터 bottom-up으로 dp 계산
    op_a = 0   # 연산 1 플래그
    if n % 3 == 0:
        op_a = 1

    op_b = 0  # 연산 2 플래그
    if n % 2 == 0:
        op_b = 1

    op_flag = (op_a, op_b, 1)  # 연산 1, 2, 3 플래그
    if op_flag == (1, 1, 1):
        dp[n] = min(dp[n//3] + 1, dp[n//2] + 1, dp[n-1] + 1)
    elif op_flag == (1, 0, 1):
        dp[n] = min(dp[n//3] + 1, dp[n-1] + 1)
    elif op_flag == (0, 1, 1):
        dp[n] = min(dp[n//2] + 1, dp[n-1] + 1)
    elif op_flag == (0, 0, 1):
        dp[n] = dp[n-1] + 1

print(dp[N])



###
# 테스트케이스 참고(https://www.acmicpc.net/board/view/49959)

''' DFS 연습
def dfs(n):
    global answer, cnt

    if n < 1:
       return
    elif n == 1:
        answer = min(cnt, answer)

        return
    else:
        for o in op:
            if o == 'a' and n % 3 == 0:
                cnt += 1
                dfs(n // 3)
                cnt -= 1
            elif o == 'b' and n % 2 == 0:
                cnt += 1
                dfs(n // 2)
                cnt -= 1
            else:
                cnt += 1
                dfs(n - 1)
                cnt -= 1


N = int(input())

cnt = 0
answer = sys.maxsize
op = ['a', 'b', 'c']
dfs(N)

print(answer)
'''
