'''
진짜 공간
https://www.acmicpc.net/problem/1350
'''
import sys
sys.stdin = open("input.txt", "r")

N = int(input()) # 파일 개수
files = list(map(int, input().split())) # 파일들 크기 리스트
cluster = int(input()) # 클러스터 크기

disk = 0
for i in range(N):
    cluster_cnt = 0
    if files[i] == 0:
        continue
    elif files[i] % cluster == 0:
        cluster_cnt = files[i] // cluster
    else:
        cluster_cnt = files[i] // cluster + 1

    disk += cluster * cluster_cnt

print(disk)