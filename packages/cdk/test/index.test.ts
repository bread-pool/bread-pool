import { add } from '../src';

describe('add', () => {
  it('returns the input added together', () => {
    expect(add(2, 3)).toEqual(5);
  });
});
