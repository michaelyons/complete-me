import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';
import Node from '../lib.Node';

describe('PREFIX TRIE', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should have a default word count value of 0', () => {
    expect(newTrie.wordCount).to.eq(0);
  });

  it('should be able to insert new child', () => {
    expect(newTrie.insert()).to.eq('a');
  });

});