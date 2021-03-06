// console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
          const $meDiv = $("<section>").attr('id', 'middle-earth')
  // 2. append the section to the body of the DOM.
          $("body").append($meDiv)
  // 3. use a for loop to iterate over the lands array that does the following:
          for (let i=0; i < lands.length; i++) {
            const element = lands[i]
  // // //   3a. creates an article tag (there should be one for each land when the loop is done)
            const $aDiv = $('<article>')
// // // //     3b. gives each land article an `id` tag of the corresponding land name
            $($aDiv).attr('id', element)
  // // //   3c. includes an h1 with the name of the land inside each land article
            const $h1 = $('<h1>').attr('name', element)
            $($aDiv).append($h1)
            $h1.text(element);
  // // //   3d. appends each land to the middle-earth section
            $($meDiv).append($aDiv)
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

// Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
        const $ul = $('<ul>')
  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
        for (let i=0; i<hobbits.length; i++) {
          const element = hobbits[i]
          const $li = $('<li>')
          $li.text(element)
          $ul.append($li);
  // 3. also, give each hobbit (`li`) a class of "hobbit"
          $li.addClass('hobbit')
  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
          const $ts = document.getElementById('The-Shire');
          $($ts).append($ul)
        }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
      const $rDiv = $('<div>').attr('id', 'the-ring')
  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
       const $iH = document.getElementsByClassName('hobbit')
      $($iH).append($rDiv);
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
    const $bU = $('<ul>')
      for (let i=0; i<baddies.length; i++) {
        const $bL = baddies[i]
        const $lI = $('<li>')
          $lI.text($bL)
          $bU.append($lI);
  // 2. give each of the baddies a class of "baddy"
    $lI.addClass('baddy')
  // 3. remember to append the ul to Mordor
    const $nD = document.getElementById('Mordor')
      $($nD).append($bU)
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
      const $aT = $('<aside>')
      const $gM = document.getElementById('middle-earth')
      $($gM).append($aT)
  // 2. display an unordered list of buddies in the aside
      const $uL = $('<ul>')
        for (let i=0; i<buddies.length; i++) {
          const ele = buddies[i]
          const $lI = $('<li>')
            $lI.text(ele)
  // 3. give each of the buddies a class of "buddy"
      $lI.addClass('buddy')
  // 4. don't forget to append them to the aside
            $uL.append($lI)
            $aT.append($uL)
    }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
      const $gH = document.getElementById("The-Shire")
      const $gR = document.getElementById('Rivendell')
      const $gM = document.getElementById("Mordor")
      let $cC = $gH.childNodes[1] 
      $($gR).append($cC)
};

// COMMIT YOUR WORK
// The commit message should read:  "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'
    const $bT = document.getElementsByTagName('aside')[0]
    $bT.getElementsByTagName('li')[3].innerHTML = 'Aragorn'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
    const $nD = $('<div>').attr('id', 'the-fellowship')
  // 2. add an h1 with the text 'The Fellowship' to this new div
    const $h1 = $('<h1>')
    $h1.text('The Fellowship')
    $($nD).append($h1)
  // 3. append the fellowship to middle-earth 
    const $gM = document.getElementById('middle-earth')
    $($gM).append($nD)
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
    const $gR = document.getElementById('Rivendell')
    let $cC = $gR.childNodes[1]
    $($nD).append($cC)
    const $aS = document.getElementsByTagName('aside')[0]
    $($nD).append($aS)    
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White'
  const $tW = document.getElementsByTagName('aside')[0]
  $tW.getElementsByTagName('li')[0].innerHTML = 'Gandalf the White'
  // 2. add a class "the-white" to this element
    const $c = document.getElementsByTagName('li')[8]
    $c.classList.remove('buddy')
    $c.classList.add('the-white')
    console.log($c)
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
        // .the-white {
        //   background-color: white;
        //  border-width: 1px;
        //  border-style: solid;
        //  border-color: grey
        // }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
    alert("the horn of gondor has been blown!");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
    const $sT = document.getElementsByTagName('li')[12]
    $sT.style.setProperty("text-decoration", "line-through");
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const $rU = document.getElementsByTagName('li')[2]
  $rU.parentNode.removeChild($rU);  
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
    const $mF = document.getElementsByTagName('li')[3]
    const $mS = document.getElementsByTagName('li')[4]
    const $gM = document.getElementById("Mordor")
    $($gM).append($mF, $mS)
  // 2. add a div with an id of 'mount-doom' to Mordor
    // const $mR = document.getElementById('Mordor')
    const $mD = $('<div>').attr('id', 'mount-doom')
    $($gM).append($mD)
    
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
    const $G = $('<div>').attr('id', 'gollum')
    const $m = document.getElementById('Mordor')
    $($m).append($G)
  // 2. Move the ring from Frodo and give it to Gollum
  const $gR = document.getElementById('the-ring')
  const $g = document.getElementById('gollum')
  $($g).append($gR)
  // 3. Move Gollum into Mount Doom
    const $mD = document.getElementById('mount-doom')
    $($mD).append($g)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
    const $rG = document.getElementById('gollum')
    let elem = document.querySelector('#gollum');
    elem.parentNode.removeChild(elem);
  // 2. remove all the baddies from the DOM
    let $rB = document.getElementsByClassName('baddy')
    $('.baddy').remove();  
  // 3. Move all the hobbits back to the shire
    const $mH = document.getElementsByClassName('hobbit')
    const $tS = document.getElementById('The-Shire')
    $($tS).append($mH)

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
