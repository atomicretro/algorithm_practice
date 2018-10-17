def climb_stairs(n)
  return 1 if n == 1
  fib = [1,2]
  fib.push(fib[-2] + fib[-1]) while fib.length < n
  fib.last
end
