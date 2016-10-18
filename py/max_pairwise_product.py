# Uses python3
from math import pow
n = int(input())
a = [int(x) for x in input().split()]
assert(len(a) == n)

def slow (a):
    result = 0

    for i in range(0, n):
        for j in range(i+1, n):
            if a[i]*a[j] > result:
                result = a[i]*a[j]
    print(result)

def fast (a):
    b = a.sort(reverse=True)
    print(a[0] * a[1]);

def generateArray():
    length = randint(2, 2 * math.pow(10, 5))
    array = []
    for i in range(0, length):
        array.append(randInt(0, math.pow(10, 5)))

assert(slow(a) == fast(a))