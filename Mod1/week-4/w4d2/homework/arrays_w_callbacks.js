const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//every 
    //1. Determine if every number is greater than or equal to 0
    let result = nums.every(function(number){
        return number <= 0
    })
    console.log(result) // true
       
    //2. Determine if every word shorter than 8 characters
    let result2 = panagram.every(function(){
        return panagram.length > 8
    })
    console.log(result2) // true


                //Filter\\
// 1.filter the array for numbers less than 4
const fN = nums.filter (function(number){
    return number < 4
})
console.log(fN)
    

// 2.filter words that have an even length
const fl = panagram.filter (function(words){
    return words.length === 4
})
console.log(fl)


                    //Find\\
// 1. Find the first value divisible by 5
    const divBy = nums.find(element => element % 5 === 0);
        console.log(divBy)

// 2. Find the first word that is longer than 5 characters
    const fW = panagram.every(function(w){
        return w.length > 5
});
console.log(fW + ' there are no words longer than 5 characters')

                //Find Index\\
//1. Find the index of the first number that is divisible by 3
    const fI = nums.findIndex(i => i % 3 === 0);
        console.log(fI)

//2. Find the index of the first word that is less than 2 characters long
    
    const lT = panagram.every(function(w){
        return w.length < 2
        //There are no words with with less than 2 characters
});
console.log(lT)

                //For Each\\
// 1. console.log each value of the nums array multiplied by 3
    const multiplied = nums.forEach(function(t){
        return console.log(t*3)
    })
// 2. console.log each word with an exclamation point at the end of it
const eX = panagram.forEach(function(e){
    return console.log(e.length === '!')
})


                //Map\\
//1. make a new array of each number multiplied by 100
    const nA = nums.map(function(O){
        return console.log(O*100)
    })
//2. make a new array of all the words in all uppercase 
    const uC = panagram.map(function(c){
        return c.toUpperCase()
    })
    console.log(uC)


                //Some\\
// 1. Find out if some numbers are divisible by 7
    const div = nums.some(function(s){
        return s % 7 === 0
})
    console.log(div)

//2. Find out if some words have the letter a in them
    const AA = panagram.some(function(lA){
        return lA = 'a'
})
console.log(AA)