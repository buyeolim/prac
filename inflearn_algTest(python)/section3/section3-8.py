'''
섹션 3-8
곳감(모래시계)
'''
import sys
#sys.stdin = open('input.txt', 'rt')

# 마당 크기 입력
N = int(input())
# 마당에 있는 감의 개수 입력
yard = []
for n in range(N):
    yard.append(list(map(int, input().split())))
# 회전명령 개수 입력
M = int(input())
# 회전명령 정보(행 방향 회전수) 입력
cmd = []
for c in range(M):
    cmd.append(list(map(int, input().split())))

# 1) M개의 회전명령 수행
for m in range(M):
    r = cmd[m][0] - 1
    count = cmd[m][2]

    if cmd[m][1] == 0:  # 왼쪽으로 회전
        while count > 0:
            bucket = yard[r].pop(0)
            yard[r].append(bucket)
            count -= 1
    else:               # 우측으로 회전
        while count > 0:
            bucket = yard[r].pop()
            yard[r].insert(0, bucket)
            count -= 1

# 2) 마당의 모래시계 영역에 있는 감의 개수의 합 출력
total = 0
cStart = 0
mat = N
for r in range(N):
    c = cStart
    for m in range(mat):
        total += yard[r][c]
        c += 1
    
    if r < N // 2:
        mat -= 2
        cStart += 1
    else:
        mat += 2
        cStart -= 1

print(total)



