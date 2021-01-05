'''
전북대학교
https://www.acmicpc.net/problem/14624
'''
## 입력 ##
N = int(input()) # N: 가로 길이

## 수행 및 출력 ##
if N % 2 == 0:
    print("I LOVE CBNU")
else:
    # 'ㅡ' 부분
    for _ in range(N):
        print('*', end='')
    print()

    # 'ㅅ' 부분
    row = [0 for _ in range(N)]
    left = right = N // 2
    row[left] = 1
    for _ in range(N // 2 + 1):
        # 한 행 출력
        for c in range(N):
            if row[c] == 1:
                print('*', end='')
            elif c > right:
                continue
            else:
                print(' ', end='')
        print()
        
        # 다음 행을 위한 수정
        row[left] = 0
        row[right] = 0
        left -= 1
        right += 1
        if left >= 0:
            row[left] = 1
            row[right] = 1

        



