Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.

###Examples

findOccurrences("Hello World", "o") ➞ {
  "hello" : 1,
  "world" : 1
}

findOccurrences("Create a nice JUICY function", "c") ➞  {
  "create" : 1,
  "a" : 0,
  "nice" : 1,
  "juicy" : 1,
  "function" : 1
}

findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
}