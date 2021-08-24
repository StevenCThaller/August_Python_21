/*
    Using Recursion, find the nth value of the fibonacci sequence.

    Fibonacci sequence:

    0, 1, 1, 2, 3, 5, 8, 13, ... 

    Where the first 2 numbers are 0 and 1, and then each consecutive value is the sum 
    of the previous 2 numbers

    So findNthFibNum(7) would return 8, because 8 is the 7th number in the fibonacci sequence.
*/

function findNthFibNum(n) {
    // Edge Case: If our number is less than 1, we can't find the 0th or -nth value of the fibonacci sequence 
    // (I guess we could depending on how we "indexed" it, but if n is 1, I'm going to assume they want the 1st number in
    // the fibonacci sequence)
    if(n < 1) {
        return false;
    }

    // Base Case: Here we actually have 2 base cases, because the first 2 numbers in the fibonacci sequence don't really
    // adhere to the same logic as the rest
    // Case 1: n == 1 -- according to what I put above, the first number in the sequence is 0, so... 
    if(n == 1) {
        return 0;
    } // Case 2: n == 2 -- according to what I put above, the second number in the sequence is 1, so...
    else if(n == 2) {
        return 1;
    }    

    // Recursive Case: Now that we have our base case set up, let's talk recursion.
    // If I asked for the 3rd number of the fibonacci sequence, you'd be able to give me that answer
    // easily, assuming you know what the first and second numbers in the sequence are.
    // Luckily, due to our base case, we do know that!  
    // the 3rd number in the fibonacci sequence is 1, because numbers 1 and 2 (0 and 1) respectively, 
    // add up to 1. But what if we want the 4th number in the sequence? or the 9th? or the 100th?
    // Well, each value in the sequence is just equal to the previous 2 added together,
    // and each of those values are just the 2 before that added together, and so on 
    // So:
    var nthNum = findNthFibNum(n - 1) + findNthFibNum(n - 2);
    // And recursion will work its magic (i.e. the world's most accurate game of telephone, assuming you wrote the code right!)

    return nthNum;
}