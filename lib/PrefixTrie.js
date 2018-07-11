export default class PrefixTrie {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  
  
  insert(position, word) {
    let node = new Node(word);
    let currNode = this.head;
    let currPos = 0;

    while(currPos < position - 1) {
      currNode = currNode.next;
      currPos++;
    }
    node.next = currNode.next;
    currNode.next = node;
    this.length++;
  }

  count() {

  }

  caseSensitive() {

  }

  
}

