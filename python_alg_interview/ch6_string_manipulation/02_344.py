'''
02. 문자열 뒤집기
344. Reverse String
https://leetcode.com/problems/reverse-string/
'''
from typing import List  # 타입 별칭
import time


start = time.time()  # 시작 시간 저장

# 입력 예제
in_ex = [list("hello"), list("Hannah")]

class Solution:
    def reverseString(self, s: List[str]) -> None:
        # """풀이 1. 투 포인터를 이용한 스왑"""
        # left, right = 0, len(s) - 1
        # while left < right:
        #     s[left], s[right] = s[right], s[left]
        #     left += 1
        #     right -= 1
        # return s

        """풀이 2. 파이썬다운 방식"""
        s.reverse()

        return s

for s in in_ex:
    print(Solution.reverseString(Solution, s))

print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간