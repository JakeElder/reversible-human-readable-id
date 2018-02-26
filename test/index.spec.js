const { getHR, getId } = require('../index.js');

describe('cityhash', () => {
  describe('getHR', () => {
    it('should return a human readable name', () => {
      expect(getHR('9028j9ko39i53klf')).toBe('swift-engelbart-grasshopper');
      expect(getHR('34400394682')).toBe('brown-archimedes-kangaroo');
    });
  });
  describe('getId', () => {
    it('should return an id from a stored human readable name', () => {
      getHR('9028j9ko39i53klf');
      expect(getId('swift-engelbart-grasshopper')).toBe('9028j9ko39i53klf');
    });
  });
});
