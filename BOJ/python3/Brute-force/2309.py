'''
일곱 난쟁이
https://www.acmicpc.net/problem/2309
'''
import sys


DWARFS_NUM = 9
HEIGHTS_SUM = 100

heights = []
for _ in range(DWARFS_NUM):
    heights.append(int(input()))

diff = abs(sum(heights) - HEIGHTS_SUM)
for i in range(DWARFS_NUM):
    for j in range(i+1, DWARFS_NUM):
        if heights[i] + heights[j] == diff:
            heights[i] = heights[j] = -1

            heights.sort()
            heights.remove(-1)
            heights.remove(-1)
            print('\n'.join(map(str, heights)))

            sys.exit()
