'''
섹션 3-4
두 리스트 합치기
'''
import sys
#sys.stdin = open('input.txt', 'rt')

# 첫 번째 리스트의 크기
N = int(input())
# N개의 리스트 원소
listN = list(map(int, input().split()))
# 두 번째 리스트의 크기
M = int(input())
# M개의 리스트 원소
listM = list(map(int, input().split()))

'''
# sort() 쓰지 않는 방법으로 할 것
# 리스트 합치고 오름차순 정렬
for m in listM:
    listN.append(m)
listN.sort()

for n in listN:
    print(n, end = ' ')
'''

# 이미 두 리스트가 오름차순이므로 sort() 사용은 시간적 손해
L = []
n = m = 0
while n < N and m < M:
    if listN[n] < listM[m]:
        L.append(listN[n])
        n += 1
    elif listN[n] > listM[m]:
        L.append(listM[m])
        m += 1
    else:
        L.append(listN[n])
        L.append(listM[m])
        n += 1
        m += 1


for n in range(n, N):
    L.append(listN[n])
for m in range(m, M):
    L.append(listM[m])

for l in L:
    print(l, end = ' ')
