def digital_root(num)
  return num if num < 10
  return add_digits(num / 10 + num % 10)
end
