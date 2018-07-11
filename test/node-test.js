import { expect } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let newNode;

  beforeEach(() => {
    newNode = new Node('letter');
  });

  it('should exist', () => {
    expect(newNode).to.exist;
  });

  it('should default next to null', () => {
    expect(newNode.next).to.equal(null);
  });

  it('should take data and assign it to data prop', () => {
    expect(newNode.data).to.equal('a');
  });
});
