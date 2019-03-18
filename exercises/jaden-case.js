'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function jadenCase(str) {
    let str1 = str.split(' ');
    for (let i = 0; i < str1.length; i++) {
        let a = str1[i].split('');
        a[0] = a[0].toUpperCase();
        str1[i] = a.join('');
    }
    str1 = str1.join(' ');
    return str1;
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?');
// assert.fail('You must write your own tests')
// End of tests */