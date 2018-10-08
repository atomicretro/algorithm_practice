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
