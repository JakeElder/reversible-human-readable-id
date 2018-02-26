const { getHR, getId } = require('../index.js');

describe('cityhash', () => {
  describe('getHR', () => {
    it('should return a human readable name', () => {
      expect(getHR('9028j9ko39i53klf')).toBe('massive-bartik-husky');
      expect(getHR('34400394682')).toBe('massive-lichterman-sheep');
    });
  });
  describe('getId', () => {
    it('should return an id from a stored human readable name', () => {
      const id = '9028j9ko39i53klf';
      expect(getId(getHR(id))).toBe(id);
    });
  });
});
