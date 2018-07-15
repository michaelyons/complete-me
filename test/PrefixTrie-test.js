import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';
import fs from 'fs';

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

  describe('populate', () => {
    
    it('should bring in dictionary & return an array of words', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');
      const newTrieComplete = new PrefixTrie();

      newTrieComplete.populate(dictionary);
      expect(newTrieComplete.wordCount).to.eq(234371);
    });

    it('should provide suggestions with the dictionary array', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');
      const newTrieComplete = new PrefixTrie();

      newTrieComplete.populate(dictionary);
      newTrieComplete.suggest('texa');

      expect(newTrieComplete.suggestedArray).to.deep.eq(['texas']);
    });
  });

  describe('suggest', () => {

    it('should have a suggest method', () => {
      expect(newTrie).respondsTo('suggest');
    });

    it('should return an empty array if no words contain that prefix', () => {
      newTrie.insert('money');
      newTrie.insert('moth');
      newTrie.insert('monkey');
      expect(newTrie.suggest('mzz')).to.deep.eq([]);
    });

    it('should return an array of all the words containing the prefix', () => {
      newTrie.insert('money');
      newTrie.insert('month');
      newTrie.insert('mister');
      expect(newTrie.suggest('m')).to.deep.eq(['money', 'month', 'mister']);
      expect(newTrie.suggest('mo')).to.deep.eq(['money', 'month']);
    });

    it.skip('should make word suggestions based on the prefix provided', () => {

    });

  });

});