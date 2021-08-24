# Recursion
A recursive function is a function that calls itself from within.
This may sound like an easy way to get caught in an infinite loop, and you would be right to think that!

But recursion can help us a lot when we would need to bounce back and forth.

A recursive function is broken up into two main parts.

## 1. Recursive Case
This is where the function calls itself.

## 2. Base Case
This is where we know our recursive function should "end," to prevent infinite loops.

## Let's look at an Example

The sum of a number `n` is `n + (n-1) + (n-2) + ... + 1`

We could find the sum of a number with a for loop, but let's do it recursively!

Let's start by looking at the `base case`. This is when we know we should be, quote on quote, done.

With the sum of a number, we don't necessarily know any steps between start and finish. But look
at that last number we want to add: `1`.

If num is 1, return 1, because the sum of 1 is 1.

```js
function sum(num){
    // Base Case: num is 1
    if(num == 1) {
        return 1;
    }
    // other code
}
```

Now let's look at our recursive case.

Let's say, for example, `num` is 2. In that case, sum should be 3, because 2 + 1 = 3.

What if we took num, and added it to what gets returned by `sum(num - 1)`?

When num is 2, that gives us 2 plus whatever sum(1) returns, which is 1!

```js
function sum(num) {
    if(num == 1){
        return 1;
    }
    
    var sum = num + sum(num-1);
    return sum;
}
```

But, we need to return that number, because `sum(num)` should return that numbers sum.

```js
function sum(num) {
    if(num == 1) {
        return 1;
    }

    return num + sum(num-1);
}
```
