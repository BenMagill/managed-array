// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ManagedArray<T = any> {
  private items: Array<T | undefined> = [];

  private emptyIndexes: number[] = [];

  constructor(defaultItems: T[] = []) {
    this.items = [ ...defaultItems ];
    this.emptyIndexes = [];
  }

  public get records(): T[] {
    const results: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item !== undefined) {
        results.push(item);
      }
    }
    return results;
  }

  public get recordsWithIds(): [number, T][] {
    const results: [number, T][] = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item !== undefined) {
        results.push([i, item]);
      }
    }
    return results;
  }

  // TODO: refactor?
  public add(items: T | T[]): void {
    if (Array.isArray(items)) {
      items.forEach((i) => this.add(i));
      return;
    }
    const index = this.emptyIndexes.pop();
    if (index !== undefined) {
      this.items[index] = items;
    } else {
      this.items.push(items);
    }
  }

  public remove(id: number): void {
    this.items[id] = undefined;
    this.emptyIndexes.push(id);
  }

  public update(id: number, newValue: T | Partial<T>): void {
    const currentItem = this.items[id];
    
    if (typeof currentItem === 'object') {
      this.items[id] = {
        ...currentItem,
        ...newValue,
      };
    } else {
      this.items[id] = newValue as T;
    }
  }

  public forEach(cb: (item: T, id: number) => unknown): void {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item !== undefined) {
        cb(item, i);
      }
    }
  }

  public map(cb: (item: T, id: number) => unknown): unknown[] {
    const results = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item !== undefined) {
        results.push(cb(item, i));
      }
    }
    return results;
  }
}