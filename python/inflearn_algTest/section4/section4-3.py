'''
섹션4-3
뮤직비디오(결정알고리즘)
'''
import sys


def count_dvds(dvd_len):
    cnt = 1
    sum_len = 0
    for song_len in songs:
        if sum_len + song_len > dvd_len:
            cnt += 1
            sum_len = song_len
        else:
            sum_len += song_len

    return cnt


#입력옵션#sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split())        # N: 노래수, M: DVD수
songs = list(map(int, input().split())) # 노래의 길이 리스트

# 이진 탐색을 이용하여 값을 찾는다
min_dvd_len = 1           # DVD의 최소 길이 초기화
max_dvd_len = sum(songs)  # DVD의 최대 길이 초기화
max_song_len = max(songs) # 노래의 최대 길이(한 앨범에는 최소한 하나의 곡 존재)
res = 0
while min_dvd_len <= max_dvd_len:
    mid_dvd_len = (min_dvd_len + max_dvd_len) // 2

    cnt = count_dvds(mid_dvd_len)
    if mid_dvd_len >= max_song_len and cnt <= M:
        res = mid_dvd_len
        max_dvd_len = mid_dvd_len - 1
    else:
        min_dvd_len = mid_dvd_len + 1

print(res)

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
    








