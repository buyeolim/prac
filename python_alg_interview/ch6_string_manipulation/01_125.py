'''
01. 유효한 팰린드롬
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/
'''
from collections import deque  # 데크
import re  # 정규표현식
import time


start = time.time()  # 시작 시간 저장

# 입력 예제
in_ex = ["A man, a plan, a canal: Panama", "race a car"]

class Solution:
    def isPalindrome(self, s: str) -> bool:
        """풀이 3. 슬라이싱 사용"""
        s = s.lower()
        
        # 정규표현식으로 불필요한 문자 필터링
        s = re.sub('[^a-z0-9]', '', s)

        return s == s[::-1]  # 슬라이싱

        # """풀이 2. 데크 자료형을 이용한 최적화"""
        # strs = deque() # 자료형 데크로 선언
        
        # for char in s:
        #     if char.isalnum():
        #         strs.append(char.lower())

        # while len(strs) > 1:
        #     if strs.popleft() != strs.pop():
        #         return False

        # return True


        # """풀이 1. 리스트로 변환"""
        # strs = []
        # for char in s:
        #     if char.isalnum():  # 알파벳, 숫자일때
        #         strs.append(char.lower())

        # # 팰린드롬 확인
        # while len(strs) > 1:
        #     if strs.pop(0) != strs.pop():
        #         return False

        # return True

for s in in_ex:
    print(Solution.isPalindrome(Solution, s))

print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간