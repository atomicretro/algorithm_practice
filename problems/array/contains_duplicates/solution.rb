def contains_duplicates(nums)
  uniques = {}
  nums.each do |n|
    return true if uniques[n]
    uniques[n] = true
  end
  false
end
