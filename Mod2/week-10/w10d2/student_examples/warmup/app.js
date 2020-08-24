///The two-dimensional array in js is an array of arrays, creates an array of one-dimensional array objects



// Make a function that returns the greatest sum of a row or column from a two dimensional array

// Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row and column.


const arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

const one = arr[0][0] + arr[0][1] + arr[0][2]
const two = arr[1][0] + arr[1][1] + arr[1][2]
const three = arr[2][0] + arr[2][1] + arr[2][2]

function greatestSum(){
    console.log(arr)
}

greatestSum(arr); //180



