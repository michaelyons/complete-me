import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let newNode;

  beforeEach(() => {
    newNode = new Node('funk');
  });

  it('should exist', () => {
    expect(newNode).to.exist;
  });

  it('should have a children property that defaults to an empty object', () => {
    expect(newNode.children).to.deep.equal({});
  });

  it('should have a child count property that is default at 0', () => {
    expect(newNode.childrenCount).to.equal(0);
  });
  
  it('should have a leafNode property that is default at false', () => {
    expect(newNode.leafNode).to.equal(false);
  });
});
