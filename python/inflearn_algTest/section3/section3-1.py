'''
섹션 3-1
회문 문자열 검사
'''
import sys
sys.stdin =  open("input.txt", "rt")

def isPalindrome(_s):
    """문자열(_s)를 받아 회문 검사결과 출력"""
    if _s == _s[::-1]:
        print("YES")
    else:
        print("NO")

# N : 입력받을 문자열의 수
N = int(sys.stdin.readline())

for n in range(1, N + 1):
    s = sys.stdin.readline().rstrip()
    print("#" + str(n), end = ' ')
    isPalindrome(s.lower())