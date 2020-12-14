'''
섹션 3-11
격자판 회문수
'''
import sys
sys.stdin = open('input.txt', 'rt')

mat = [list(map(int, input().split())) for _ in range(7)]

cnt = 0
for r in range(7):
    for c in range(7):
        # 5 x 1 가로방향 검사
        tmp = []
        if c < 3:
            tmp.append(mat[r][c])
            tmp.append(mat[r][c + 1])
            tmp.append(mat[r][c + 2])
            tmp.append(mat[r][c + 3])
            tmp.append(mat[r][c + 4])

            palindrome = True
            for i in range(5 // 2):    
                if tmp[i] != tmp[4 - i]:
                    palindrome = False
                    break
            
            if palindrome == True:
                cnt += 1

        # 1 x 5 세로방향 검사
        tmp = []
        if r < 3:
            tmp.append(mat[r][c])
            tmp.append(mat[r + 1][c])
            tmp.append(mat[r + 2][c])
            tmp.append(mat[r + 3][c])
            tmp.append(mat[r + 4][c])

            palindrome = True
            for i in range(5 // 2):    
                if tmp[i] != tmp[4 - i]:
                    palindrome = False
                    break
            
            if palindrome == True:
                cnt += 1

print(cnt)



