import { ManagedArray } from '../../src';

describe('index', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('ManagedArray', () => {
    describe('constructor', () => {
      it('will create an empty array', () => {
        const array = new ManagedArray();
        expect(array.records).toEqual([]);
      });
      it('will create an array with items', () => {
        const array = new ManagedArray([1, 2, 3]);
        expect(array.records).toEqual([1, 2, 3]);
      });
    });
    describe('records', () => {
      it('will return an empty array', () => {
        const array = new ManagedArray();
        expect(array.records).toEqual([]);
      });
      it('will return an array with items', () => {
        const array = new ManagedArray([1, 2, 3]);
        array.add(4);
        expect(array.records).toEqual([1, 2, 3, 4]);
      });
    });
    describe('add', () => {
      it('can add an item', () => {
        const array = new ManagedArray();
        array.add(1);
        expect(array.records).toEqual([1]);
      });
      it('can add multiple items', () => {
        const array = new ManagedArray();
        array.add(1);
        array.add(2);
        array.add(3);
        expect(array.records).toEqual([1, 2, 3]);
      });
      it('can add multiple items at once', () => {
        const array = new ManagedArray();
        array.add([1, 2, 3]);
        expect(array.records).toEqual([1, 2, 3]);
      });
      it('will fill empty slots first', () => {
        const array = new ManagedArray();
        array.add(1);
        array.add(2);
        array.add(3);
        array.remove(1);
        array.add(4);
        expect(array.records).toEqual([1, 4, 3]);
      });
    });

    describe('remove', () => {
      it('can remove items', () => {
        const array = new ManagedArray();
        array.add(1);
        array.add(2);
        array.add(3);
        array.remove(1);
        expect(array.records).toEqual([1, 3]);
      });
    });
    describe('forEach', () => {
      it('can iterate over items', () => {
        const array = new ManagedArray();
        array.add(1);
        array.add(2);
        array.remove(1);
        array.add(3);
        const results: number[] = [];
        array.forEach((item) => results.push(item));
        expect(results).toEqual([1, 3]);
      });
    });
    describe('map', () => {
      it('can map over items', () => {
        const array = new ManagedArray();
        array.add(1);
        array.add(2);
        array.remove(1);
        array.add(3);
        const results = array.map((item) => item * 2);
        expect(results).toEqual([2, 6]);
      });
    });
  });
});