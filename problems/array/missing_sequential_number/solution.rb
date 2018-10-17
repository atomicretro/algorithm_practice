def missing_number(nums)
  supposed_sum = 0
  nums.length.times { |n| supposed_sum += (n + 1) }
  actual_sum = nums.reduce(:+)
  supposed_sum - actual_sum
end
