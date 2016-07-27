def translate(word)
	word.split(" ").map {|w| translateOneWord(w)}.join(" ")
end

def translateOneWord(word)
	vowels = %w[a e i o u]
	if vowels.include?(word[0])
		return word + "ay"
	elsif (!vowels.include?(word[0]) && !vowels.include?(word[1]) && !vowels.include?(word[2])) || (!vowels.include?(word[0]) && word[1..2] == "qu")
		return word[3..-1] + word[0..2] + "ay"
	elsif !vowels.include?(word[0]) && !vowels.include?(word[1]) || word[0..1] == "qu"
		return word[2..-1] + word[0..1] + "ay"
	else
		return word[1..-1] + word[0] + "ay"
	end
	
end
