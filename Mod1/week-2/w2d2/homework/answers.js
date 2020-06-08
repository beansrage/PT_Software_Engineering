////////////////////////////////
// Easy Going
////////////////////////////////
for(let i = 0; i < 21; i++){
    console.log(i);
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let i =0; i < 201; i+=2){
    console.log(i);
} 
console.log('');

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (i =0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz');
    } else if (i % 3 === 0){
        console.log('Buzz');
    } else if (i % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}

console.log('');
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1. 
    plantee[2] = 5001;
        console.log(plantee);
//2.
    wolfy[3] = 'Gotham City'
        console.log(wolfy);
//3. 
    dart[4] = 'Hawkins'
        console.log(dart);
//4.
    wolfy[0] = 'Gameboy'
        console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelango']
    for (let char of ninjaTurtles){
        console.log(char.toUpperCase(ninjaTurtles[i]));
    }
    
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 
'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 
'Snatch', 'Fast and Furious'];
        console.log(favMovies.indexOf('Titanic'));
    favMovies.sort();
        console.log(favMovies);
    favMovies.pop();
        console.log(favMovies);
    favMovies.push('Guardians of the Galaxy');
        console.log(favMovies);
    favMovies.reverse();
        console.log(favMovies);
    ///skipped shift function, cannot use shift to call specific element in array.
    favMovies.splice(15,1,'Avatar');
        console.log(favMovies);
    favMovies.slice();
        let cut = favMovies.slice(0,6)
        console.log(cut);
    



////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
            ["Lucinda", "Jacc", "Neff", "Snoop"],
            ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1);
    console.log(whereIsWaldo);
whereIsWaldo[1][2] = 'No One'
    console.log(whereIsWaldo);
    console.log(whereIsWaldo[2][1][1]);
                    console.log('');
////////////////////////////////
//  Excited Kitten
////////////////////////////////
const kittyTalk = ['...human...why you taking pictures of me?...', 
'...the catnip made me do it...', '...why does the red dot always get away...'];
let randomValue = kittyTalk[Math.floor(Math.random() * (1 + 3 - 0 ))];    
    let meow = 'Love me, pet me! HSSSSSS!';
for (let i = 0; i<20 ; i++){
    console.log(meow);
    if (i % 2 );
    console.log(randomValue);
    ///Im still 100% on if this is what you are asking of me, but i am eagar to find out what you think. 
}

////////////////////////////////
//  Find the Median
////////////////////////////////