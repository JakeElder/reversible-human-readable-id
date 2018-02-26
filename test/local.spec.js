const local = require('../local.js');

describe('local storage', () => {
  describe('remove item', () => {
    it('should remove a stored item', () => {
      local.setItem('1', 'a');
      local.removeItem('1');
      expect(local.getItem('1')).toBe(null);
    });

    it('should return false if cannot find item', () => {
      expect(local.removeItem('2')).toBe(false);
    });
  });
  describe('clear', () => {
    it('should remove all from the local storage', () => {
      local.setItem('1', 'a');
      local.setItem('2', 'b');
      local.clear();
      expect(local.getItem('1')).toBe(null);
      expect(local.getItem('2')).toBe(null);
    });
  });
});
