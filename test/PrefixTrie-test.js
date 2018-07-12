import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';

describe('PREFIX TRIE', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should start with zero children elements', () => {
    expect(newTrie.childrenCount).to.eq(0);
  });

  it('should set its default root to null', () => {
    expect(newTrie.root).to.eq(null);
  });

  it('increment childrencount upon new child creation', () => {
    expect(newTrie.countChildren()).to.eq(1);
  });

  it('should be able to insert new child', () => {
    expect(newTrie.insertChild()).to.eq('a');
  });

  it('should make all child inputs case insensitive', () => {
    expect(newTrie.insertChild('A')).to.eq('a');
  });

});