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
    if (!currentNode.isCompleteWord) {
      currentNode.isCompleteWord = true;
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
      if (!currentNode) {
        return [];
      }
    }
    
    function getWords(stringThusFar, node) {
      Object.keys(node.children).forEach(letterKey => {
        let newString = stringThusFar + letterKey;
        if (node.children[letterKey].isCompleteWord) {
          suggestedArray.push(newString);
        }
        getWords(newString, node.children[letterKey]);
      }); 
    }
    getWords(wordPrefix, currentNode);
    return suggestedArray;
  }
}