import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';

describe('PREFIX TRIE', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should start with zero elements', () => {
    expect(newTrie.length).to.eq(0);
  });

  it('should set its default head to null', () => {
    expect(newTrie.head).to.eq(null);
  });
});