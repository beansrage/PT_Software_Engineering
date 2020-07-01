class Hero {
    constructor(name, health, weapons, catchPhrases){
    this.name = name
    this.health = 100
    this.weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza', 
    'you can\'t count my calories']
    }
    talkSass() {
       const random = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
       console.log(random);
    }   
    currenHP() {
        console.log('Need... more... sprinkles');
        console.log(dMan.health);
    }
    fight(enemy) {
        const damage = enemy.health -=this.weapons.sprinkleSpray;
        console.log('i\'m ready to rumble!');
        console.log(this.weapons.sprinkleSpray);
        console.log('');
        console.log('I got him!, he should have ' + pRat.health + ' left');
       
        
    }
}

class Enemy {
    constructor(name, health, weapons, catchPhrases){
    this.name = name
    this.health = 100
    this.weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10 
    }
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        const random = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
        console.log(random);
     } 
    currenHP() {
        console.log('Feelin kinda low, better cheese it up!');
        console.log(pRat.health);
    }
     fight(enemy) {
        const damage = enemy.health -=this.weapons.pepperoniStars;  // decrementing dMans hp by value of specific weapon
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
        console.log(this.weapons.pepperoniStars); 
        console.log('');
        console.log('Hit!, there should be ' + dMan.health + ' left');
         
        

    }
}
const dMan = new Hero('Dougie');
const pRat = new Enemy('Pizza Rat');
console.log(dMan);
console.log('');
console.log(pRat);


dMan.fight(pRat);
console.log('');
pRat.fight(dMan);

console.log('');

dMan.currenHP();
console.log('');
pRat.currenHP();

 