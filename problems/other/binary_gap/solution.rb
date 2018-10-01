def binary_gap(n)
  binary = n.to_s(2)
  current_gap = 0
  longest_gap = 0
  binary.each_char.with_index do |ch, idx|
    next if idx == 0
    current_gap += 1
    if ch == '1'
      longest_gap = current_gap if current_gap > longest_gap
      current_gap = 0
    end
  end
  longest_gap
end
