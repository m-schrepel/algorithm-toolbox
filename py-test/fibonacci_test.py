import unittest
from datetime import datetime

def slow(n):
  if (n <= 1):
      return n

  return slow(n - 1) + slow(n - 2)

n = int(input())
tick = datetime.now();
print(slow(n))
tock = datetime.now();
print('Slow Duration: ', (tock - tick).total_seconds())
class FibTest(unittest.TestCase):
  def test(self):
    self.assertEqual(fast(random_seed) == slow(random_seed))
