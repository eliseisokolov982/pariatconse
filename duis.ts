class SomeEntity {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    if (value <= 0) {
      throw new Error('ID must be a positive number.');
    }
    this._id = value;
  }
}

// Usage
const entity = new SomeEntity(1);
console.log(entity.id); // Outputs: 1
entity.id = 10; // Sets the ID to 10
