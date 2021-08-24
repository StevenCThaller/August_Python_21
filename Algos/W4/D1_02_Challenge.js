/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
   * Recursively sum the given int and every previous positive int.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} num
   * @returns {number}
*/
function recursiveSigma(num) {
    // Edge Case: If our number coming in (regardless of whether the first call or 100th call) is less than 1, we've messed up.
    if(num < 1) {
        return false;
    }
    // Base Case: If our number coming in (regardless of whether the first call or 100th call) is 1, we return 1
    // because Σ1 is 1
    if(num == 1) {
        return 1;
    }

    // Recursive Case: The sigma of a number, n, is n + (n-1) + (n-2) + (n-3) + ... + 2 + 1
    // Alternatively (and lazily), Σn = n + Σ(n-1)
    // So
    var sigma = num * recursiveSigma(num - 1);
    
    // And we let recursion work its magic
    return sigma;
}