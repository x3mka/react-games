import {Cross, CrossData} from './cross';

const data: CrossData = [
  [1,1,1,1,1],
  [1,0,1,0,1],
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,1,1,1,1]
]

describe('Cross', () => {

  describe('#initialization', () => {

    it('can initialize with valid data', () => {
      const c = new Cross(data);
      expect(c.width).toBe(5);
      expect(c.height).toBe(5);
    });

    it('throws if bad data', () => {
      expect(() => {
        const c = new Cross([]);
      }).toThrow();
    });

  })

  describe('#topNumbers', () => {

    it('can calculate top numbers', () => {
      const c = new Cross(data);
      const top = c.topNumbers();
      expect(top).toEqual([
        [5],
        [1, 1, 1],
        [3, 1],
        [1, 1, 1],
        [5]
      ]);
    });

  })

  describe('#leftNumbers', () => {

    it('can calculate left numbers', () => {
      const c = new Cross(data);
      const top = c.leftNumbers();
      expect(top).toEqual([
        [5],
        [1, 1, 1],
        [5],
        [1, 1],
        [5]
      ]);
    });

  })




});
