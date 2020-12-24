'''
섹션 5-9
Anagram(아나그램 : 구글 인터뷰 문제)
'''
import sys


#입력
#sys.stdin = open("input.txt", "r")
word_a = input()
word_b = input()

hash_table = [{} for _ in range(10)]

# 대문자
for ch in range(ord('A'), ord('Z') + 1):
    hash_code = ch % 10
    hash_table[hash_code][chr(ch)] = 0
# 소문자
for ch in range(ord('a'), ord('z') + 1):
    hash_code = ch % 10
    hash_table[hash_code][chr(ch)] = 0

# A 단어 알파벳 개수 업데이트
for ch in word_a:
    hash_code = ord(ch) % 10
    cnt = hash_table[hash_code].get(ch) + 1
    hash_table[hash_code][ch] = cnt

# B 단어 알파벳 개수 차감
for ch in word_b:
    hash_code = ord(ch) % 10
    cnt = hash_table[hash_code].get(ch) - 1
    hash_table[hash_code][ch] = cnt

flag_anagram = True
for d in hash_table:
    for key in list(d.keys()):
        if d.get(key) != 0:
            flag_anagram = False
            break

    if flag_anagram != True:
        print("NO")
        break
else:
    print("YES")

    