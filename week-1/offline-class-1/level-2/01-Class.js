class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  static myType() {
    console.log("Animal"); //method directly on the class
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}
