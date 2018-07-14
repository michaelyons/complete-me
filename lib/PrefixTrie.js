export default class PrefixTrie {
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0;
  }
  
  insert(word) {
    const letters = [...word.split("")];
    let currentNode = this.rootNode;

    letters.forEach((letter, i)  => {
      if (!currentNode.children[letter]) {
        let newLetterNode = new Node (letter);

        if (i === letters.length - 1) {
          newLetterNode.endWord = true;
        }
        // ^keeps track of node that ends the word

        currentNode.children[letter] = newLetterNode;
        currentNode.childrenCount++;
        currentNode = currentNode.children[letter];
      } else {
        currentNode = currentNode.children[letter];
      }
    });

    this.wordCount++;
  }
}

