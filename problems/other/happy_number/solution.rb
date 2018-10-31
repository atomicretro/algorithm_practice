def is_happy(n)
  seen = {}
  while !seen[n]
    seen[n] = true
    n = square_the_digits(n)
    return true if n == 1
  end
  false
end

def square_the_digits(n)
  return n**2 if n / 10 == 0
  (n % 10)**2 + square_the_digits(n / 10)
end
