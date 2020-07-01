class Hamster {
    constructor(owner, name, price){
    this.owner = ''
    this.name = name
    this.price = 15
}
wheelRun(Hamster) {
    console.log('squeak squeak');
}
eatFood() {
    console.log('nibble nibble');
}
getPrice() {
    return Hamster.price
    }
}
class Person {
    constructor(name, age, height, mood, hamsters,bankAccount ){
    this.name = name
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
    }
getName() {
    console.log(Person.name);
    }
getAge() {
    console.log(Person.age); 
}
getWeight() {
    console.log(Person.weight);
}
greet() {
    console.log('Hello ' + Person.name + '. How are you?');
}
eat() {
   this.weight ++; 
   this.mood ++; 
}
exercise() {
    this.weight --;
}
sayhi() {
    console.log('Hello');
    
}
ageUp() {
    this.age ++;
    this.height ++;
    this.weight ++;
    this.mood ++;
    this.bankAccount +=10;
}
justAgeOdd() {
    this.age += 5;
}
justAgeEven(){
    this.age += 2;
}
buyHamster(hamster) {
    this.hamsters.push(Gus)
    this.mood ++;
    this.bankAccount -=15; 
}

}
const Gus = new Hamster('Gus')
const Timmy = new Person('Timmy');
Timmy.ageUp(); 
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();

Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();

Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();
Timmy.exercise();

Timmy.justAgeOdd()
Timmy.justAgeEven();
Timmy.buyHamster(Gus)

Timmy.ageUp(); 
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp(); 
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp(); 
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.eat();
Timmy.eat();

Timmy.exercise();
Timmy.exercise();

Gus.name = 'Gus'
Gus.owner = 'Timmy'
console.log(Timmy);










    




