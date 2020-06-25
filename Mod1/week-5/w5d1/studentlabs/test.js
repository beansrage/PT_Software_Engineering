let hotelCalifornia = {
    name: 'Hotel California',
    location: 'California',
    rating: 4,
    vacancies: true,
    tags: [
        'pink champagne',
        'wine',
        'lovely',
        'can\'t leave'
    ],
    rooms: [{
            'roomNumber': 102,
            'size': 'Queen Double',
            'price': 55,
            'booked': true
        },
        {
            'roomNumber': 202,
            'size': 'King Suite',
            'price': 68,
            'booked': false
        },
        {
            'roomNumber': 404,
            'size': 'Queen Double',
            'booked': false
        }
    ],
    whatIsTheName: function() {
        console.log('This hotels name is ...' + hotelCalifornia);               ///using inside a function
    }
};

// hotelCalifornia.whatIsTheName();

class Person {
    constructor() {
        this.legs = 2;
        this.arms = 2;      ///attach properties 
        this.eyes = 'brown';
        this.hair = 'dark brown'
    }

greet(name) {
    console.log('I am greeting someone' + name);
 }
}

class Animal {

}

const me = new Person();
const someoneElse = new Person(); //have to use a new keyword 'instantiating' or creat new objects using this class/from a class. 
const animal = new Animal();

console.log(me);
me.greet();

console.log(someoneElse);
someoneElse.greet(' Beans');