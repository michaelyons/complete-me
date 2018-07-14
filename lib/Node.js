export default class Node {
  constructor() {
    this.childrenCount = 0;
    this.endOfTheWord = false;
    this.leafNode = false;
    this.children = {};
  }
}