'''
최솟값 구하기
'''

arr = [5, 3, 7, 9, 2, 5, 2, 6]

# 1) 무한대 이용
arrMin = float('inf') # 무한대값
for i in range(len(arr)):
    if arr[i] < arrMin:
        arrMin = arr[i]
print(arrMin)

# 2) 첫번째 값 이용
arrMin = arr[0]
for i in range(1, len(arr)):
    if arr[i] < arrMin:
        arrMin = arr[i]
print(arrMin)

# 3) arr의 값 직접 이용
arrMin = float('inf')
for x in arr:
    if x < arrMin:
        arrMin = x
print(arrMin)