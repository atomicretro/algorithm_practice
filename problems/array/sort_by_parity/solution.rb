def sort_array_by_parity(arr)
  sorted = []
  arr.each { |n| n % 2 == 0 ? sorted.unshift(n) : sorted.push(n) }
  sorted
end
