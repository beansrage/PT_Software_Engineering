// 1. A light switch that can be either on or off.
    // Datatype: Boolean. 
    // ==> Data structure example: const lightswitch = true;

//2.  A user's email address.
     // Datatype: String
    // ==> Data structure example: userName = {
        //email: ==> 'e@amil.com', <===
    // }

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    // Datatype: Object
    // ==> Data structure example: spaceShip = {
        // container: 'hull',
        // weapon: 'laserblasters', 
        // beam: 'tractor',
        // drive: 'warp'
    // }

//4. A list of student names from our class.
    // Datatype: Array
    // ==> Data structure example: let classMates = ['Me', 'Tomas', 'Bruce', 'Sara','etc']

// A list of student names from our class, each with a location.
    // Datatype: Object
    // ==> Data structure example: const classList = {
        // { name: 'Mike', location: 'Earth'},
        // { name: 'Jack', location: 'Earth'},
        // { name: 'Sam', location: 'Earth'}
    // }

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
       // Datatype: Object
    // ==> Data structure example: const classList = {
        // { name: 'Mike', location: 'Earth', favMovies : ['Superbad', 'MIB']},
        // { name: 'Sam', location: 'Earth', favMovies : ['kjngfsjf', 'fd']},
        // { name: 'Jon', location: 'Earth', favMovies : ['XXX', 'ttys']},
    // }


    ///////Take it easy////////
    const rainBow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'] ; 
        console.log(rainBow[4]);

     Bob = {
        favoriteFood: 'chinese',
        hobby: 'fishing',
        currentTown: 'Groveport',
        faovriteDataType: 'OBJECTS!!!'
        
    }
        // console.log(Bob.hobby);


////////Crazy Object!///////
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
}
//1.
console.log(crazyObject.taco[1].salsa[5])

//2.
console.log(crazyObject.larry.quotes[0]);

//3.
console.log(crazyObject.larry.characters[2].favourtieHobby);

//4.
console.log(crazyObject.larry.characters[1]);

//5. 
crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk')
console.log(crazyObject.larry.quotes);