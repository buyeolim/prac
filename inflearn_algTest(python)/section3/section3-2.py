'''
섹션 3-2
숫자만 추출
'''
import sys
sys.stdin = open("input.txt", "rt")

s = input()

digit = ''
for ch in s:
    if ch.isdigit() == True:
        digit += ch
 
digit = int(digit)
print(digit)

cnt = 0
for d in range(1, digit + 1):
    if digit % d == 0:
        cnt += 1

print(cnt)