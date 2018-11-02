def reverse_words(sen)
  sen.split(' ').each{ |word| word.reverse! }.join(' ')
end
