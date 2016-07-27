def echo(phrase)
  phrase
end

def shout(phrase)
  phrase.upcase
end

def repeat(phrase,num=2)
  ((phrase + " ") * num).strip
end

def start_of_word(word,num)
  word[0..num-1]
end

def first_word(phrase)
  phrase.split.first
end

def titleize(word)
	little_words = ["a", "an", "the", "at", "by", "for", "in", "of", "on","over", "to", "up", "and", "as", "but", "it", "or", "and", "nor"]
	title = word.split.map {|w| little_words.include?(w)? w: w.capitalize!}
	title[0] = title[0].capitalize
	title.join(" ")
end
