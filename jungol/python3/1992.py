'''
백설공주와난장이
http://www.jungol.co.kr/bbs/board.php?bo_table=pbank&wr_id=1265&sca=99
'''
DWARFS_NUM = 7
HEIGHTS_SUM = 100

heights = []
for _ in range(DWARFS_NUM):
    heights.append(int(input()))

diff = abs(sum(heights) - HEIGHTS_SUM)
for i in range(DWARFS_NUM):
    for j in range(i+1, DWARFS_NUM):
        if heights[i] + heights[j] == diff:
            heights[i] = heights[j] = -1
            break

heights.sort(reverse=True)
print(heights[0], heights[1], sep='\n')
