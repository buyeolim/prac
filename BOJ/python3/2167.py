'''
2차원 배열의 합
https://www.acmicpc.net/problem/2167
'''
# * 입력 
N, M = map(int, input().split()) # 배열의 크기
mat = [] # 2차원 배열
mat.append([0] * (M+1))
for _ in range(N):
    row = list(map(int, input().split()))
    row.insert(0, 0)
    mat.append(row)

# 누적합 계산
prefix_sum_mat = [[0] * (M+1) for _ in range(N+1)] # 누적합 배열
# 행 방향
for r in range(1, N+1):
    for c in range(1, M+1):
        if c == 1:
            prefix_sum_mat[r][c] = mat[r][c]
        else:
            prefix_sum_mat[r][c] = prefix_sum_mat[r][c-1] + mat[r][c]
# 열 방향
for r in range(2, N+1):
    for c in range(1, M+1):
        prefix_sum_mat[r][c] += prefix_sum_mat[r-1][c]

# * 입력 및 수행
K = int(input()) # 합을 구할 부분의 개수
for _ in range(K):
    i, j, x, y = map(int, input().split())

    sub_sum = prefix_sum_mat[x][y] 
    sub_sum -= prefix_sum_mat[i-1][y]
    sub_sum -= prefix_sum_mat[x][j-1]
    sub_sum += prefix_sum_mat[i-1][j-1]

    print(sub_sum)




###
# 참고 (https://eine.tistory.com/entry/2%EC%B0%A8%EC%9B%90-%EB%88%84%EC%A0%81%ED%95%A9-%EB%B6%80%EB%B6%84%ED%95%A9-%EA%B5%AC%ED%95%98%EA%B8%B0)


