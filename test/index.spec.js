const { getHR, getId } = require('../index.js');

describe('cityhash', () => {
  describe('getHR', () => {
    it('should return a human readable name', () => {
      expect(getHR('9028j9ko39i53klf')).toBe('engelbart-mole');
      expect(getHR('34400394682')).toBe('brown-archimedes-owl');
    });
  });
  describe('getId', () => {
    it('should return an id from a stored human readable name', () => {
      getHR('9028j9ko39i53klf');
      expect(getId('engelbart-mole')).toBe('9028j9ko39i53klf');
    });
  });
});
