let aShipFleet =[];
class Spaceship {
    constructor(name, health, firepower, accuracy) {
        this.name = name
        this.hp = health
        this.firepower = firepower
        this.accuracy = accuracy
    }
    Attack(enemy) {
        if (player.accuracy>=5){
        const enemyHealth = enemy.hp
        enemy.hp -= this.firepower
        console.log('hit!');
        console.log('remaining hp ... '+enemy.hp)
        console.log()
    } else if (player.accuracy<=5) {
        console.log('are you a storm trooper?');
        console.log('remaining hp ... '+enemy.hp);
        console.log();
    }
    if (enemy.hp < 0){
        console.log('Destroyed!');
    }
}
    hpRecall(enemy) {
        console.log(this.hp);
    }
  }
    const player = new Spaceship('USS Schwarzenegger', 20, 5, 7)
    player.accuracy = Math.floor(Math.random()*(1, 8)); 
//////////////////alien fleet
let A = this.accuracy = Math.floor(Math.random()*(9-6)+6);
let H = this.hull = Math.floor(Math.random()*(7-3)+3);
let F = this.firepower = Math.floor(Math.random()*(5-2)+2);

const as1 = new Spaceship('as1', A, H, F)
const as2 = new Spaceship('as2', H, F, H)
const as3 = new Spaceship('as3', F, A, H)
const as4 = new Spaceship('as4', F, H, A)
const as5 = new Spaceship('as5', H, A, F)
const as6 = new Spaceship('as6', A, F, H)
aShipFleet.push(as1,as2,as3,as4,as5,as6)

////attack sequence + medkit lol. 

const medKit = () => {
    if (player.hp <=5) {
        player.hp +=10; 
        console.log('Heal up! were not done yet! ... ' + player.hp);
        console.log();
    }
}
const roundOne = () => {
    console.log(player);
    // aShipFleet.splice(1)//////first alien
    console.log(as1);
    player.Attack(aShipFleet[0])//first strike by player, if alien survives, it attacks
    console.log();
    console.log('our TURN!');
    console.log();
    aShipFleet[0].Attack(player) //alien attack,..... if alien destroys player ship, restart/failure
    console.log('haha!!!');
    player.Attack(aShipFleet[0])
    if (as1.hp >= 0){
        console.log('STUPID HUMAN, YOU CANNOT STOP THE HIVEMIND');
        console.log();
        console.log(aShipFleet[1]);
        as2.Attack(player);
};
}
const roundTwo = () => {
    console.log(player);
    // aShipFleet.splice(1)//////first alien
    console.log(as2);
    player.Attack(aShipFleet[1])//first strike by player, if alien survives, it attacks
    console.log();
    console.log('our TURN!');
    console.log();
    aShipFleet[1].Attack(player) //alien attack,..... if alien destroys player ship, restart/failure
    console.log('haha!!!');
    player.Attack(aShipFleet[1])
    if (as2.hp >= 0){
        console.log('STUPID HUMAN, YOU CANNOT STOP THE HIVEMIND');
        console.log();
        console.log(aShipFleet[2]);
        as3.Attack(player);
};
}
const roundThree = () => {
    console.log(player);
    // aShipFleet.splice(1)//////first alien
    console.log(as3);
    player.Attack(aShipFleet[2])//first strike by player, if alien survives, it attacks
    console.log();
    console.log('our TURN!');
    console.log();
    aShipFleet[2].Attack(player) //alien attack,..... if alien destroys player ship, restart/failure
    console.log('haha!!!');
    player.Attack(aShipFleet[2])
    if (as3.hp >= 0){
        console.log('STUPID HUMAN, YOU CANNOT STOP THE HIVEMIND');
        console.log();
        console.log(aShipFleet[3]);
        as4.Attack(player);
};
}
const roundFour = () => {
    console.log(player);
    // aShipFleet.splice(1)//////first alien
    console.log(as4);
    player.Attack(aShipFleet[3])//first strike by player, if alien survives, it attacks
    console.log();
    console.log('our TURN!');
    console.log();
    aShipFleet[3].Attack(player) //alien attack,..... if alien destroys player ship, restart/failure
    console.log('haha!!!');
    player.Attack(aShipFleet[3])
    if (as4.hp >= 0){
        console.log('STUPID HUMAN, YOU CANNOT STOP THE HIVEMIND');
        console.log();
        console.log(aShipFleet[4]);
        as5.Attack(player);
};
}
const roundFive = () => {
    console.log(player);
    // aShipFleet.splice(1)//////first alien
    console.log(as5);
    player.Attack(aShipFleet[4])//first strike by player, if alien survives, it attacks
    console.log();
    console.log('our TURN!');
    console.log();
    aShipFleet[4].Attack(player) //alien attack,..... if alien destroys player ship, restart/failure
    console.log('haha!!!');
    player.Attack(aShipFleet[4])
    if (as2.hp >= 0){
        console.log('STUPID HUMAN, YOU CANNOT STOP THE HIVEMIND');
        console.log();
        console.log(aShipFleet[5]);
        as6.Attack(player);
};
}
const roundSix = () => {
    console.log('.....');
    console.log()
    console.log(player);
    // aShipFleet.splice(1)//////first alien
    console.log(as6);
    player.Attack(aShipFleet[5])//first strike by player, if alien survives, it attacks
    console.log();
    console.log('our TURN!');
    console.log();
    aShipFleet[5].Attack(player) //alien attack,..... if alien destroys player ship, restart/failure
    console.log('haha!!!');
    player.Attack(aShipFleet[5])
    if (as6.hp >= 0){
       console.log('WE WON!!!!!1!');
};
}
console.log(player);
console.log(aShipFleet);

////battle state method or 'battle loop'. 
battleState=()=>{
    
roundOne();
roundTwo();
roundThree();
medKit();
roundFour();
medKit();
roundFive();
medKit(); 
roundSix();
}
battleState();
