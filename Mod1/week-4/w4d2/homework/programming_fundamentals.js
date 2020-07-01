// DRY
    /// Dont repeat the same concepts, create a new abstraction.

// KISS
    /// Keep it simple, make the code easy to read and change.

// Avoid creating a YAGNI
    /// Stay on task and add what is needed when the time comes.

// Do the simplest thing that could possibly work
    /// The easiest method with a high sucess rate.

        ///// This suprises me the most, becaue it makes the most sense and sheds a whole new light on the ceoncept of pseudo code.

            //// This is also what I struggle the most with, sometimes I feel its too easy and simple and theres no way that it can be that easy. 

// Don't make me think
    /// The code should be clear, and easy to read. 

// Write code for the maintainer
    /// Write the code so that anyone else can easliy read it and know what and where everything is.

// Single responsibility principle
    /// Code blocks should preform a single task and have definitive detail/instructions. 

// Avoid premature optimization
    /// Do not clean up your code until its finished and has been evaulated.

// Separation of concerns
    /// Code should be broken down by functionality with minimal overlap. 

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const f = l => {                        // Declaring the fucntion.
    let es = 0, p = 0, c = 1, n = 0     // Declaring variables es, p, c, and n.
    while (c <= l) {                    // The while loop stating while c is less than or equal to l
      n = c + p;                        // 0 = 1 + 0
      [c, p] = [n, c]                   // [1, 0] = [0, 1]
      es += (c % 2 === 0) ? c : 0       // 0 = 1 % 2 //Im not sure 
    }
    return es
  }
  
  console.log(f(55))


//I would use f2 to expand on. 
const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1 // the semi-colon was unnecessary
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))

