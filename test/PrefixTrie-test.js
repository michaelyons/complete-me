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

  it('should have rootnode thats an instance of node', () => {
    expect(newTrie.rootNode).to.deep.eq({
      childrenCount: 0,
      leafNode: false,
      children: {},
      endOfTheWord: false
    });
  });

  describe('insert', () => {

    it('should increment word count of trie when word is inserted', () => {
      newTrie.insert('michael');
      newTrie.insert('is');
      newTrie.insert('a');
      newTrie.insert('tennis');
      newTrie.insert('player');
      expect(newTrie.wordCount).to.eq(5);
    });
    
    it('should be able to add a node to the trie', () => {
      newTrie.insert('mike');
      expect(Object.keys(newTrie.rootNode.children)).to.deep.eq(['m']);
    });
    
    it('should not increment word count when inserting duplicate words', () => {
      newTrie.insert('michael');
      newTrie.insert('disco');
      newTrie.insert('michael');
      newTrie.insert('michael');
      newTrie.insert('disco');
      expect(newTrie.wordCount).to.eq(2);
    });
  });
});