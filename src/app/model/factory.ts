export class Factory<T> {
   type: T;
  constructor(type: (new () => T)) {
    this.type = new type;

  }

  create(): T {
    return this.type;
  }
}
