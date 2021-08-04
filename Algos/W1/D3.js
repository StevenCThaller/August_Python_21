/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
*/

// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
 function isPalindrome(str) {
    // EZ: If it's 1 character, it's a palindrome
    if(str.length == 1) {
        return true;
    }
    // If we want to know if it's the same string forwards and backwards, then the base logic is as follows:
    // The first character should be the same as the last character
    // The second character should be the same as the second to last character
    // The third character should be the same as the third to last character
    // etc. etc.

    // I'll write out two options

    // Option 1: While loop with left index and right index
    var left = 0;
    var right = str.length - 1;
    // We'll check each character, and increment the left and decrement the right each time 
    // assuming the characters are the same, but we should stop when left and right meet.
    while (left < right) {
        // Check to see if the characters are NOT the same. 
        if(str[left] != str[right]) {
            // If they're not, it's not a palindrome, so return false
            return false;
        }
        // If we are still running, then the characters must be the same, so let's increment left and
        // decrement right
        left++;
        right--;
    }

    // If we reached the end of the while loop, then the string MUST be a palindrome
    return true;

    // Option 2: For loop using i to calculate i from the end
    for(var i = 0; i < str.length; i++) {
        // Now, we don't have left and right, we just have i. But we can
        // calculate the latter character's index in relation to i and the string length
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }

    // if we get here, it is a palindrome
    return true;
}
