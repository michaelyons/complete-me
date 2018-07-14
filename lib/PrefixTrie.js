import Node from './Node';

export default class PrefixTrie {
  constructor() {
    this.rootNode = new Node();
    this.wordCount = 0;
  }
  
  insert(word) {
    const letters = [...word];

    //takes given word and splits each individual letter 
    //into its own element and spreads those letters into an array //
    let currentNode = this.rootNode;

    //setting the current node to the root node or 
    //the first letter in the word being searched//
    letters.forEach(letter  => {
      //looping through the word and if the the current node child property
      //doesnt includes a key of the letter, create a new instance of node//
      // if current node.children doesnt not include the letter 
      // as a key, then make it a key
      if (!currentNode.children[letter]) {
        let newLetterNode = new Node (letter);

        currentNode.children[letter] = newLetterNode;
        currentNode.childrenCount++;
        //tells you how many nodes you have//
        currentNode = currentNode.children[letter];
      } else {
        currentNode = currentNode.children[letter];
      }
    });

    if (!currentNode.endOfTheWord) {
      currentNode.endOfTheWord = true;
      this.wordCount++;
    }
    //if the end of the word is reached, toggle endoftheworld property
    // from false to true and increment the workcount
  }




}