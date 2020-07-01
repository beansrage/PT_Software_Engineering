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
        console.log(dMan.health);
    }
    fight() {
        console.log('i\'m ready to rumble!');
    }
}

const dMan = new Hero('Dougie');
dMan.talkSass();
dMan.currenHP();


console.log();