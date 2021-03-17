'''
체스판 다시 칠하기
https://www.acmicpc.net/problem/1018
'''
def compare_chessboard(start_color):
    """체스판과 비교하여 수정해야할 정사각형 개수 반환"""
    cnt = 0  # 다시 칠해야 하는 정사각형의 개수
    for r in range(8):
        for c in range(8):
            if mat[n + r][m + c] != start_color:
                cnt += 1
                
            start_color = (start_color + 1) % 2 # 흑백 변환

        start_color = (start_color + 1) % 2 # 행 바뀔 때 고려

    return cnt


N, M = map(int, input().split())  # N: 세로(행), M: 가로(열)
mat = []  # M * N 임의의보드
for _ in range(N):
    row = list(input())
    for c in range(M):
        if row[c] == 'B':
            row[c] = 0
        else:
            row[c] = 1

    mat.append(row)

chessboard = [[0] * 8 for _ in range(8)]
cnt_min = 8 * 8  # 정사각형 개수의 최솟값(체스판 칸의 최댓값으로 초기화)
for n in range(N - 8 + 1):
    for m in range(M - 8 + 1):
        # 체스판의 시작위치(n, m)의 색, 흑(0) 또는 백(1) 모두 고려
        cnt_min = min(compare_chessboard(0), cnt_min)
        cnt_min = min(compare_chessboard(1), cnt_min)
                
print(cnt_min)