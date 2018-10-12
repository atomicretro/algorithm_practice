def detect_capital_use(word)
  num_uppercase = 0
  word.each_char { |ch| num_uppercase += 1 if is_upper?(ch) }
  if is_upper?(word[0])
    num_uppercase == 1 || num_uppercase == word.length
  else
    num_uppercase == 0
  end
end

def is_upper?(letter)
  letter == letter.upcase
end
