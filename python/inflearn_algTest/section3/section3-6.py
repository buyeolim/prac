'''
섹션 3-6
격자판 최대합
'''
import sys
#sys.stdin = open('input.txt', 'rt')

N = int(input())

# N * N판의 각 격자에 들어가는 수 입력
board = []
for n in range(N):
    board.append(list(map(int, input().split())))

# 행의 합
sums = []
for r in range(N):
    sums.append(sum(board[r]))

# 열의 합
for c in range(N):
    sumCol = 0
    for r in range(N):
        sumCol += board[r][c]
    sums.append(sumCol)
    
# 대각선 합
sumD1 = sumD2 = c = 0
for r in range(N):
    sumD1 += board[r][c]
    sumD2 += board[r][N - 1- c]
    c += 1
sums.append(sumD1)
sums.append(sumD2)

print(max(sums))