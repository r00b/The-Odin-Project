def add(i,v)
  i + v
end

def subtract(i,v)
  i - v
end

def sum(array)
  array.inject(0) {|sum,x| sum + x}
end

def multiply(i,v)
  i * v
end

def power(i,v)
  i ** v
end

def factorial(i)
  if i == 0
    return 1
  end
  i * factorial(i-1)
end
