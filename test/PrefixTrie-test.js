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

  it('increment count upon new node creation', () => {
    expect(newTrie.count()).to.eq(1);
  });

  it('should be able to insert new character', () => {
    expect(newTrie.insert()).to.eq('a');
  });

  it('should make all node input case insensitive', () => {
    expect(newTrie.insert()).to.eq('a');
  });

});