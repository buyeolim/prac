'''
섹션 5-8
단어 찾기
'''
import sys


# 함수
def hash_function(word):
    ch_sum = 0
    for ch in word:
        ch_sum += ord(ch)
    
    return ch_sum % 10


#입력
#sys.stdin = open("input.txt", "r")
N = int(input())
words = []
for _ in range(N):
    words.append(input())
used_words = []
for _ in range(N-1):
    used_words.append(input())

# 해시 테이블 생성
hash_table = [[] for _ in range(10)]
for word in words:
    hash_code = hash_function(word)
    hash_table[hash_code].append(word)

# 단어 찾기
for word in used_words:
    hash_code = hash_function(word)
    if word in hash_table[hash_code] and word in words:
        words.pop(words.index(word))


# 출력
print(words[0])