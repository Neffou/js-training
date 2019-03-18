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

const jadenCase = (str) => {
    let arr = str.toLowerCase().split(' ')
    let newarray1 = []

    for (let i = 0 ; i < arr.length ; i++) {
        newarray1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
    }
    return newarray1.join(' ')

}





//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
