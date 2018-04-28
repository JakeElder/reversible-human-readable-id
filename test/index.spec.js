const { getHR, getId } = require('../index.js');

describe('cityhash', () => {
  describe('getHR', () => {
    it('should return a human readable name', () => {
      const id = '9028j9ko39i53klf';
      expect(getHR(id)).toBe('charming-amber-turner');
    });
    it('should always return the same human readable name', () => {
      const id = '9028j9ko39i53klf';
      let timesToTest = 10;
      while (timesToTest < 10) {
        expect(id).toBe(getId(getHR(id)));
        timesToTest -= 1;
      }
    });
  });
  describe('getId', () => {
    it('should return an id from a stored human readable name', () => {
      const id = '9028j9ko39i53klf';
      const hr = getHR(id);
      expect(getId(hr)).toBe(id);
    });

    it('should return null if not found', () => {
      const id = '9028j9ko39i53klf';
      expect(getId(id)).toBe(null);
    });
  });
  describe('Collision likelyhood', () => {
    it('should return different human readable names from this list', () => {
      const listOfIds = [
        '36640305',
        '30657676',
        '31920767',
        '28807469',
        '35551245',
        '42637996',
        '43229588',
        '43978587',
        '41131192'
      ];
      const uniquedHRs = new Set(listOfIds.map(getHR));
      expect(uniquedHRs.size).toBe(listOfIds.length);
    });
  });
});
