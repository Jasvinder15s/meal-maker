const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this.courses.appetizers;
  },
  get mains() {
    return this.courses.mains;
  },
  get desserts() {
    return this.courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = apptizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishCourseName(courseName) {
      const dishes = this._courses[course]
  }
};