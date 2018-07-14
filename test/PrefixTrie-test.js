import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';

describe('PREFIX TRIE', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should exist', () => {
    expect(newTrie).to.exist;
  });
  
  it('should have a default word count value of 0', () => {
    expect(newTrie.wordCount).to.eq(0);
  });

  it('should have rootnode', () => {
    expect(newTrie.rootNode).to.deep.eq({
      childrenCount: 0,
      leafNode: false,
      children: {},
      endOfTheWord: false
    });
  });

  it('should be able to insert a word', () => {
    newTrie.insert('michael');
    newTrie.insert('is');
    newTrie.insert('a');
    newTrie.insert('tennis');
    newTrie.insert('player');
    expect(newTrie.wordCount).to.eq(5);
  });

});