'''
03. 로그파일 재정렬
937. Reorder Data in Log Files
https://leetcode.com/problems/reorder-data-in-log-files/
'''
from typing import List  # 타입 별칭
import time


start = time.time()  # 시작 시간 저장

# 입력 예제
in_ex = [
            [
            "dig1 8 1 5 1",
            "let1 art can",
            "dig2 3 6",
            "let2 own kit dig",
            "let3 art zero"
            ], 
            [
            "a1 9 2 3 1",
            "g1 act car",
            "zo4 4 7",
            "ab1 off key dog",
            "a8 act zoo"
            ]
        ]

class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        """풀이 1. 람다와 + 연산자를 이용"""
        letters, digits = [], []

        # 숫자와 문자 분리
        for log in logs:
            if log.split()[1].isdigit():
                digits.append(log)
            else:  
                letters.append(log)

        # 2개의 키를 람다 표현식으로 정렬
        letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))

        return letters + digits

for s in in_ex:
    print(Solution.reorderLogFiles(Solution, s))

print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간