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
      const dishes = this._courses[course];
      const randomIndex = Math.floor(Math.random * dishes.length);
      return dishes[randomIndex];
  },
  generateRandomMeal() {
      const appetizer = this.getRandomDishCourseName("appetizers");
      const main = this.getRandomDishCourseName("mains");
      const dessert = this.getRandomDishCourseName("desserts");
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`
  }
};