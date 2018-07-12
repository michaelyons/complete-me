export default class PrefixTrie {
  constructor() {
    this.childrenCount = 0;
    this.root = null;
    this.children = [];
  }
  
  
  insert(word) {
    let node = new Node(word);
    let currNode = this.root;
    let currPos = 0;

    while (currPos < position - 1) {
      currNode = currNode.next;
      currPos++;
    }
    node.next = currNode.next;
    currNode.next = node;
    this.childrenCount++;
  }

  countChildren() {

  }

  caseSensitive() {

  }

  
}

