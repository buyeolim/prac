'''
행렬
https://www.acmicpc.net/problem/1080
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def reverse(r, c):
    for i in range(3):
        for j in range(3):
            diff[r+i][c+j] = not diff[r+i][c+j]


mat_A = []
mat_B = []

N, M = map(int, sys.stdin.readline().split())
for _ in range(N):
    row = list(sys.stdin.readline().strip())
    mat_A.append(row)
for _ in range(N):
    row = list(sys.stdin.readline().strip())
    mat_B.append(row)

# 다른 위치 표시
diff = [[False]*M for _ in range(N)]
sum_val = 0
for r in range(N):
    for c in range(M):
        if mat_A[r][c] != mat_B[r][c]:
            diff[r][c] = True
            sum_val += 1

# 같은 행렬이면 종료
if sum_val == 0:
    print(0)
    sys.exit()

# 3*3 보다 작다면 같도록 바꾸기에 불가능하므로 종료
if N < 3 or M < 3:
    print(-1)
    sys.exit()

# 뒤집기 시작
ans = 0
for r in range(N-3 + 1):
    for c in range(M-3 + 1):
        # 다르다면 뒤집기
        if diff[r][c] == True:
            ans += 1
            reverse(r, c)

        # 나머지 열 검사
        if c == M-3:
            if diff[r][c+1] == True or diff[r][c+2] == True:
                print(-1)
                sys.exit()

        # 나머지 행 검사
        if r == N-3:
            if diff[r+1][c] == True or diff[r+2][c] == True:
                print(-1)
                sys.exit()

        # 나머지 행렬 검사
        if r == N-3 and c == M-3:
            for i in range(3):
                for j in range(3):
                    if diff[r+i][c+j] == True:
                        print(-1)
                        sys.exit()
else:
    print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
