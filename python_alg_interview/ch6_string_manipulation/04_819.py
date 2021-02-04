'''
04. 가장 흔한 단어
819. Most Common Word
https://leetcode.com/problems/most-common-word/
'''
from collections import defaultdict
from collections import Counter
import re
from typing import List  # 타입 별칭
import time


start = time.time()  # 시작 시간 저장

# 입력 예제
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        """풀이 1. 리스트 컴프리헨션, counter 객체 사용"""
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph)
            .lower().split() if word not in banned]
        
        counts = Counter(words)
       
        # 가장 흔하게 등장하는 단어의 첫 번째 인덱스 리턴
        return counts.most_common(1)[0][0]

print(Solution.mostCommonWord(Solution, paragraph, banned))

print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간