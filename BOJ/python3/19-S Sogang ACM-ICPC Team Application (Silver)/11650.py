'''
좌표 정렬하기
https://www.acmicpc.net/problem/11650
'''
N = int(input())
pos = []
for _ in range(N):
    x, y = map(int, input().split())
    pos.append((x, y))

pos.sort()
for p in pos:
    print(p[0], p[1])