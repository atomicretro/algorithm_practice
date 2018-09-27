def find_complement(num)
  flipped = ''
  num.to_s(2).each_char { |ch| ch == '0' ? flipped += '1' : flipped += '0'}
  flipped.to_i(2)
end
