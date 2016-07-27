class Book

  def title
    @title
  end

  def title=(word)
  	small_words = ["a", "an", "the", "at", "by", "for", "in", "of",
  					"on","over", "to", "up", "and", "as", "but", "it", "or", "and", "nor"]
  	title = word.split.map { |e| small_words.include?(e) ? e : e.capitalize }
  	title[0] = title[0].capitalize
  	@title = title.join(" ")
  end
  
end
