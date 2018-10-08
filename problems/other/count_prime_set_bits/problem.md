# Prime Number of Set Bits in Binary Representation

## Problem
Given two integers `left` and `right`, find the count of numbers in the range `(left, right)` inclusive having a prime number of set bits in their binary representation.

(N.B. The number of set bits an integer has is the number of `1's` present when written in binary. For example, `21` written in binary is `10101` which has 3 set bits. Also, 1 is not prime.)

Note: `left`, `right` will be integers `left <= right` in the range `(1, 10^6)`.

### Example 1:
```
Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110   (2 set bits, 2 is prime)
7  -> 111   (3 set bits, 3 is prime)
9  -> 1001  (2 set bits , 2 is prime)
10 -> 1010  (2 set bits , 2 is prime)
```

### Example 2:
```
Input: left = 10, right = 15
Output: 5
Explanation:
10 -> 1010  (2 set bits, 2 is prime)
11 -> 1011  (3 set bits, 3 is prime)
12 -> 1100  (2 set bits, 2 is prime)
13 -> 1101  (3 set bits, 3 is prime)
14 -> 1110  (3 set bits, 3 is prime)
15 -> 1111  (4 set bits, 4 is not prime)
```

## Solution
### Ruby
```ruby
def count_prime_set_bits(left, right)
  num_prime_set_bits = 0
  (left..right).each do |n|
    num_prime_set_bits += 1 if is_prime?(n.to_s(2).count('1'))
  end
  num_prime_set_bits
end

def is_prime?(num)
  return false if num == 1
  (2..(num / 2)).each { |n| return false if num % n == 0 }
  true
end
```

## Explanation
### Reasoning
I chose Ruby to solve this problem as Ruby has a rather nice built-in method for converting between numbers bases. For this problem, I step through the inclusive range created by the inputs `left` and `right`, converting from base `10` to binary using Ruby's `to_s(2)` method. I then count the number of set bits in the binary representation and send that count to a helper method `is_prime?`. If the count is prime, my results counter `num_prime_set_bits` is incremented. After I step through the entire range as defined by the inputs, I return `num_prime_set_bits`.

My helper method only checks the range of `(2..(num / 2))` for prime-ness as a real number cannot be cleanly divided by any other real number in the range `((num / 2)..num)`, and thus it's a waste of time to check those numbers!
