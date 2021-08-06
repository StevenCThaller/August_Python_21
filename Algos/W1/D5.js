/*
    Generate Coin Change

    Given a number of U.S. cents, return an object with the optimal 
    configuration of coins.

    EXAMPLE:

    var input = 173;
    var output = {
        quarters: 6,
        dimes: 2,
        nickels: 0,
        pennies: 3
    }

    A couple of different approaches:

    Option 1: Keep decrementing by the highest coin value possible, adding to that 
    key value pair each time, making your way down the hierarchy of coins

    Option 2: Our old friend modulo (i.e. the % operator)

    Modulo example:
    42 % 25 would give us 17, because 25 x 1 is 25, and there's 17 left to get us to 42

    Because (6 x 25) + (2 x 10) + (0 x 5) + (3 x 1) 
    is 150 + 20 + 0 + 3 = 173.
*/

function generateCoinChangeObject(cents){
    // EDGE CASE: If we have negative cents, that's not a real thing
    if(cents < 0) {
        return false; 
    }

    // Let's create our object, with all of the key value pairs' values set to zero
    var change = {
        quarters: 0,
        dimes: 0,
        nickels: 0, 
        pennies: 0
    }

    // The general goal here is that we want to find out the largest coin first, and work our way down the line.

    // For each coin: 
    // 1. Calculate how many we can get from the amount of cents left
    // 2. Decrement cents to what would be left if we took that many coins worth out
    // 3. Go to the next coin

    // Quarters:
    // 1. If we divide how many cents we have by 25, and round that number down, it will give us
    // how many quarters are available.
    change.quarters = Math.floor(cents / 25);
    // 2. Now, we need to decrement our cents by change.quarters * 25, or, perform a modulo operation
    cents %= 25;
    // 3. On to the next

    // Dimes:
    // 1. Same as above but by 10 because of dimes
    change.dimes = Math.floor(cents / 10);
    // 2. Same as above but by 10 because of dimes
    cents %= 10;
    // 3. On to the next

    // Nickels: 
    // See above
    change.nickels = Math.floor(cents / 5);
    cents %= 5;
    
    // Pennies:
    // This one is the easiest. By now, our total cents is less than 5, which would be
    // how many pennies we needed. So
    change.pennies = cents;

    // And finally, return our change object
    return change;
}