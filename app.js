const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(meal) {
    if (typeof meal === "object") {
      //checks that the input is of the correct data type
      this._courses.appetizers.push(meal);
    } else {
      console.log("Please input meal as object");
    }
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(meal) {
    if (typeof meal === "object") {
      //checks that the input is of the correct data type
      this._courses.mains.push(meal);
    } else {
      console.log("Please input meal as object");
    }
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(meal) {
    if (typeof meal === "object") {
      //checks that the input is of the correct data type
      this._courses.desserts.push(meal);
    } else {
      console.log("Please input meal as object");
    }
  },
  get courses() {
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    if (Object.keys(this._courses).includes(courseName)) {
      //checks to make sure the input courseName matches one of the three course names defined within the _courses object.
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this[courseName] = dish;
    } else {
      console.log("Please Enter a valid course name");
    }
  },
  getRandomDishFromCourseName(courseName) {
    let dishes = this[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourseName("appetizers");
    const main = this.getRandomDishFromCourseName("mains");
    const dessert = this.getRandomDishFromCourseName("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, 
      and ${dessert.name}, and the total price is ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "salad", 4.0);
menu.addDishToCourse("appetizers", "wings", 4.5);
menu.addDishToCourse("appetizers", "fries", 5.0);

menu.addDishToCourse("mains", "steak", 10.25);
menu.addDishToCourse("mains", "salmon", 7.75);
menu.addDishToCourse("mains", "tofu", 11.2);

menu.addDishToCourse("desserts", "ice cream", 3.0);
menu.addDishToCourse("desserts", "coffe", 3.0);
menu.addDishToCourse("desserts", "cake", 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);
