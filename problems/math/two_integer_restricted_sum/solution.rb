def get_sum(a, b)
  largest = a.abs >= b.abs ? a.abs * 2 : b.abs * 2;
  number_line = (-largest..largest).to_a
  number_line.rotate!(a)
  number_line.rotate!(b)
  number_line[number_line.length / 2]
end
