'''
파이썬 기초 문법(선수지식)
    6강 -  중첩반복문(2중for문)
'''
'''
for i in range(5):
    print('i:', i, sep = '', end = ' ' )
    for j in range(5):
        print('j:', j, sep = '', end = ' ')
    print()
'''

'''
for i in range(5):
    for j in range(5):
        print('*', sep = '', end = ' ')
    print()
'''

'''
for i in range(5):
    for j in range(i + 1):
        print('*', end = ' ')
    print()
'''

for i in range(5):
    for j in range(5 - i):
        print('*', end = ' ')
    print()
