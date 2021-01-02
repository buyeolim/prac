'''
파이썬 기초 문법(선수지식)
    2강 - 변수입력과 연산자
'''

'''
a = input("숫자를 입력하세요 : ")
print(a)
'''

'''
a, b = input("숫자를 입력하세요 : ").split()
print(a + b) # 스트링형이므로 연결됨
print(type(a))
'''

'''
a, b = input("숫자를 입력하세요 : ").split()
a = int(a)
b = int(b)
print(a + b)
print(type(a + b))
'''

'''
a, b = map(int, input("숫자를 입력하세요 : ").split())
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b) # 몫
print(a % b) # 나머지
print(a ** b) # 거듭제곱 a^b
'''

a = 4.3
b = 5
c = a + b
print(c)
