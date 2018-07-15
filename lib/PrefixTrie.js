import Node from './Node';

export default class PrefixTrie {
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0;
  }
  
  insert(word) {
    let letters = [...word];

    let currentNode = this.rootNode;

    letters.forEach(letter  => {
      if (!currentNode.children[letter]) {
        let newLetterNode = new Node (letter);

        currentNode.children[letter] = newLetterNode;
        currentNode.childrenCount++;
        currentNode = currentNode.children[letter];
      } else {
        currentNode = currentNode.children[letter];
      }
    });

    //checking to make sure that the word is not already in the letters array
    //if the currentnode. endofword is not = true. checks to make 
    if (!currentNode.endOfTheWord) {
      currentNode.endOfTheWord = true;
      this.wordCount++;
    }
  }

  populate(wordArray) {
    wordArray.forEach(word => this.insert(word.toLowerCase()));
  }

  suggest(wordPrefix) {
    let letterKeys = [...wordPrefix.toLowerCase()];
    
    let suggestedArray = [];
    
    let currentNode = this.rootNode;

    for (let i = 0; i < letterKeys.length; i++) {
      currentNode = currentNode.children[letterKeys[i]];
      // for position 0, lets turn the current node into a what letters you have typed into so far
      //this gets the current node to the end of the prefix
      //narrows down where the prefix trie is going to look for possibilities 
      if (!currentNode) {
      //if the current node doesnt exist, return nothing and stop the function
        return [];
      }
    }
    
    function getWords(stringThusFar, node) {
      //give us an array of all the key names of the objects (in this case they are letters)
      //then loop through all the children 
      Object.keys(node.children).forEach(letterKey => {
        let newString = stringThusFar + letterKey;
        // concat each letter
        // starting with node at the end of the prefix
        //the key is the letter itself
        if (node.children[letterKey].endOfTheWord) {
          //if youve reached the end of the objects, then push word
          //we only want to push complete words into the suggestion array
          suggestedArray.push(newString);
        }
        
        getWords(newString, node.children[letterKey]);
      }); 
    }
    
    getWords(wordPrefix, currentNode);
    
    return suggestedArray;
  }
}