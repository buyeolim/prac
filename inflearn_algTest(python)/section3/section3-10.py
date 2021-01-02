'''
섹션 3-10
스도쿠 검사
'''
import sys
#sys.stdin = open('input.txt', 'rt')

# 9 * 9 스도쿠 입력
mat = [list(map(int, input().split())) for _ in range(9)]

# 스도쿠 원소 배열
ele = [i + 1 for i in range(9)]

# 행 검사
for r in mat:
    tmp = []
    tmp += r
    tmp.sort()
    if tmp != ele:
        print("NO")
        sys.exit()

# 열 검사
for c in range(9):
    tmp = []
    tmp.append(mat[0][c])
    tmp.append(mat[1][c])
    tmp.append(mat[2][c])
    tmp.append(mat[3][c])
    tmp.append(mat[4][c])
    tmp.append(mat[5][c])
    tmp.append(mat[6][c])
    tmp.append(mat[7][c])
    tmp.append(mat[8][c])
    tmp.sort()
    if tmp != ele:
        print("NO")
        sys.exit()
    
# 3 x 3 사각형 검사
for s in range(0, 9, 3):
    tmp = []
    tmp += mat[s][0:3]
    tmp += mat[s + 1][0:3]
    tmp += mat[s + 2][0:3]
    tmp.sort()
    if tmp != ele:
        print("NO")
        sys.exit()

    tmp = []
    tmp += mat[s][3:6]
    tmp += mat[s + 1][3:6]
    tmp += mat[s + 2][3:6]
    tmp.sort()
    if tmp != ele:
        print("NO")
        sys.exit()

    tmp = []
    tmp += mat[s][6:9]
    tmp += mat[s + 1][6:9]
    tmp += mat[s + 2][6:9]
    tmp.sort()
    if tmp != ele:
        print("NO")
        sys.exit()
else:
     print("YES")
