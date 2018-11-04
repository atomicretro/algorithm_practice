def unique_words(a, b)
  words = Hash.new(0)
  a.split(' ').each { |word| words[word] += 1 }
  b.split(' ').each { |word| words[word] += 1 }
  words.select { |k , v| v == 1 }.keys
end
