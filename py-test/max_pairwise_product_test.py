# Uses python3
import math
from random import randint
from datetime import datetime
import unittest

# Reference algorithm known to work, but is slow
def slow (a):
  slow_start = datetime.now()
  result = 0
  for i in range(0, len(a)):
    for j in range(i + 1, len(a)):
        if a[i] * a[j] > result:
          result = a[i] * a[j]
  print(result)
  slow_end = datetime.now()
  print('Slow Duration', (slow_end - slow_start).total_seconds())
  return result

# Test algorithm to be compared to slow but accurate previous test
def fast (a):
  fast_start = datetime.now()
  b = a.sort(reverse=True)
  print(a[0] * a[1]);
  fast_end = datetime.now()
  print('Fast Duration', (fast_end - fast_start).total_seconds())
  return a[0] * a[1]

# Generate an array of length between 2 and 2000000
def generate_array():
  length = randint(2, 2 * math.pow(10, 5))
  array = []
  for i in range(0, length):
      array.append(randint(0, math.pow(10, 5)))
  return array

# Generate the array here so the inputs are the same for the tests
generated_array = generate_array()

class TestPairwiseMaxProduct(unittest.TestCase):
  def test(self):
    self.assertGreater(len(generated_array), 1)
    self.assertEqual(slow(generated_array), fast(generated_array))

unittest.main()

