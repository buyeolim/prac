'''
섹션4-3
뮤직비디오(결정알고리즘)
'''
import sys
#sys.stdin = open('input.txt', 'r')

def count(capacity):
    cnt = 1
    sum = 0
    for x in songs:
        if sum + x > capacity:
            cnt += 1
            sum = x
        else sum += x
    
    return cnt

N, M = map(int, input().split())
songs = list(map(int, input().split()))

l = 1
r = sum(songs)
result = 0
while l <= r:
    mid = (l + r) // 2
    if count(mid)
'''
# M개의 DVD는 모두 같은 크기여야하므로 M으로 나눈다
dvdLen = sum(songs) // M

dvds = []
dvd = []
sumLen = 0

while True:
    for song in songs:
        if sumLen + song > dvdLen:
            dvds.append(dvd)
            dvd = [] # dvd.clear 이용시 append한 것 사라지므로 새로 생성
            sumLen = 0

        dvd.append(song)
        sumLen += song

    dvds.append(dvd)

    if len(dvds) == M:
        break
    else:
        dvdLen += 1

    dvds.clear()
    dvd.clear()
    sumLen = 0


print(sum(dvds[-1]))
''' 
    








