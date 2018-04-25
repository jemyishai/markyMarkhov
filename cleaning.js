  // regex whitelist (versus a blacklist containing a limited set of punctuation) and also removes redundant https://stackoverflow.com/a/4328546
  // The only limitation is that it only works on English, which as long as you note, I think would be OK for a code challenge.
let wordBank = str.replace(/[^\w\s]|_/g, "")
                    .replace(/\s+/g, " ")
                    .toLowerCase()
                    .split(" ")

//clean up allFollow and markov

var allFollowingWords = (word, copy) => {
    //create an array of every instance of a word that follows the WORD being added
  var values =[];
  for (var i = 0; i < copy.length; i ++){
    if (copy[i] === word){
      values.push(copy[(i+1)])
    }
  }
  return values
}

var markov =  (input) => {
  markyObj = {};
  var copy = input.slice();
  var word;
  for (var i = 0; i < copy.length-1; i++){
    word = input.shift()
    if (input.includes(word) === false){
      dudeObj[word] = allFollowingWords(word, copy)
    }
  }
  return markyObj
}
