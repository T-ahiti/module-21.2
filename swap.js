
//  2ta value swap korar jonno
let first = 5;
let second = 7;
// console.log(first, second)

// approach 1
// const temp = first
// first = second
// second = temp
// console.log(first, second)

// approach 2: Destructure 
[first, second] = [second, first]
console.log(first, second)
