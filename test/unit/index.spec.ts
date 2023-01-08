import { ManagedArray } from '../../src';

describe('index', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('ManagedArray', () => {
    it('will construct', () => {
      expect(new ManagedArray()).toBeInstanceOf(ManagedArray);
    });
  });
});