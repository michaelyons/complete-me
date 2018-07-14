import Node from './Node';

export default class PrefixTrie {
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0;
  }
  
  insert(word) {
    const letters = [...word];

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

    if (!currentNode.endOfTheWord) {
      currentNode.endOfTheWord = true;
      this.wordCount++;
    }
  }

  populate(wordArray) {
    wordArray.forEach(word => this.insert(word.toLowerCase()));
  }

  suggest(wordPrefix) {
    let letterKeys = [...wordPrefix];
    
    let currentNode = this.rootNode;

    for (let i = 0; i < letterKeys.length; i++) {
      currentNode = currentNode.children[letterKeys[i]];
      if (!currentNode) {
        return [];
      }
    }

    let suggestedArray = [];

    getWords(wordPrefix, currentNode);

    function getWords(stringSoFar, node) {

      Object.keys(node.children).forEach(key => {
        let newString = stringSoFar + key;

        if (node.children[key].endOfTheWord) {
          suggestedArray.push(newString);
        }
        
        getWords(newString, node.children[key]);
      }); 

    }
    return suggestedArray;
  }
}