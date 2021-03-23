// Creat meal object
const meal = {
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
}