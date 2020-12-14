'''
파이썬 기초 문법(선수지식)
    11강 - 함수만들기
'''

'''
def add(a, b):
    c = a + b
    print(c)

add(3, 2)
add(5, 7)
'''
'''
def add(a, b):
    c = a + b
    return c

x = add(3, 2)
print(x)
'''
'''
def add(a, b):
    c = a + b
    d = a - b
    return c, d

print(add(3,2)) # 튜플 자료구조 형태로 리턴
'''

def isPrime(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return True

a = [12, 13, 7, 9, 19]
for y in a:
    if isPrime(y):
        print(y, end = ' ')