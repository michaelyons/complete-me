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
}