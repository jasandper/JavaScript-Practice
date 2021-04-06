// Create menu object
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get courses () {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    get appetizers() {
        return this._courses.appetizers
    },
    get mains() {
        return this._courses.mains
    },
    get desserts() {
        return this._courses.desserts
    },
    set appetizers (appIn) {
        appIn = this._courses.appetizers
    },
    set mains (mainIn) {
        mainIn = this._courses.mains
    },
    set desserts (dessertIn) {
        dessertIn = this._courses.desserts
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: courseName,
            dish: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish)
    },
    generateRandomDish (courseName) {
        const dishes = this._courses[courseName]
        const randomNum = Math.floor(Math.random() * dishes.length)
        return dishes[randomNum]
    },
    generateMeal () {
        const appetizer = this.generateRandomDish('appetizers')
        const main = this.generateRandomDish('mains')
        const dessert = this.generateRandomDish('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price
        return `Appetizer: ${appetizer.dish}...Main: ${main.dish}...Dessert: ${dessert.dish}...Total: $${totalPrice}`
    }

}

// Add to menu
menu.addDishToCourse('appetizers', 'chef salad', 8.50)
menu.addDishToCourse('appetizers', 'tortilla soup', 7.50)
menu.addDishToCourse('appetizers', 'chips and queso', 9.50)
menu.addDishToCourse('mains', 'steak and shrimp', 20.50)
menu.addDishToCourse('mains', 'atlantic salmon', 21.50)
menu.addDishToCourse('mains', 'herb crusted chicken', 15.50)
menu.addDishToCourse('desserts', 'lemon cake', 7.50)
menu.addDishToCourse('desserts', 'cheesecake', 9.25)
menu.addDishToCourse('desserts', 'lava cake', 7.25)

// Create unique meal
let meal = menu.generateMeal()
console.log(meal);
