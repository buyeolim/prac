'''
파이썬 기초 문법(선수지식)
    7강 - 문자열과 내장함수
'''

msg = "It is Time"
print(msg.upper())
print(msg.lower())
print(msg)

tmp = msg.upper()
print(tmp)
print(tmp.find('T'))
print(tmp.count('T'))

print(msg)
print(msg[:2])
print(msg[3:5])
print(len(msg))
for i in range(len(msg)):
    print(msg[i], end = ' ')
print()

for x in msg:
    print(x, end=' ')
print()

for x in msg:
    if x.isupper():
        print(x, end = ' ')
print()

for x in msg:
    if x.islower():
        print(x, end = ' ')
print()

for x in msg:
    if x.isalpha():
        print(x, end = '')
print()

tmp = "AZ"
for x in tmp:
    print(ord(x), end = ' ') # ASCII A 65, Z 90
print()

tmp = "az"
for x in tmp:
    print(ord(x), end = ' ') # ASCII a 97, z 122
print()

tmp = 65
print(chr(tmp))
