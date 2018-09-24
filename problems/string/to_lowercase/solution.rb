def to_lowercase(str)
  converter = create_converter

  converted_str = ''
  str.each_char { |ch| converted_str += converter[ch] ? converter[ch] : ch }
  converted_str
end

def create_converter
  converter = {}
  lower = ('a'..'z').to_a
  upper = ('A'..'Z').to_a
  upper.each_with_index { |ch, i| converter[ch] = lower[i] }
  converter
end
