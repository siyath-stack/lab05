
/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
In this module we write more functions that illustrate the use of loops (for
and while).  We will also build algorithms that depend on sub-algorithms
and explore the HTML DOM!
**/


/**
 * Adds an event listener to the button in your HTML page!
 * 
 * This event listener should be activated upon a `click' event.
 * When the user clicks, your code should:
 * 1. Obtain the value from the select box.
 * 2. Obtain the numeric value from the input.
 * 3. If the select box value is "pyramid":
 * -- Check if the numeric input is less than or equal to 10. 
 * -- If yes, call your pyramid function and pass the input number to this function.
 * -- Print the result to the innerText of the output element in the HTML.
 * -- If no, print "Input is too large!" to the output element in the HTML.
 * 4. If the select box value is "pyramidPair":
 * -- Check if the numeric input is less than or equal to 10. 
 * -- If yes, call your pyramidPair function and pass the input number to this function.
 * -- Print the result to the innerText of the output element in the HTML.
 * -- If no, print "Input is too large!" to the output element in the HTML.
 * 5. If the select box value is "luhnsAlgo":
 * -- Check if the input is numeric.
 * -- If no, print "Invalid Input!" to the output element in the HTML.
 * -- If yes, call your luhnsAlgo function and pass the input number to this function.
 * -- If the return value is true, print "Credit Card Number is Valid!" to the output element.
 * -- If the return value is false, print "Credit Card Number is Invalid!" to the output element. * 
 */
function activateButton(){
    /* write your code here! */
}
 

/**
 * Accepts a number and extracts every other digit, starting with the number’s last digit.
 * For example, if the input is 4203615041322314, the last digit is 4. Every other 
 * digit that follows is 3, 2, 1, 0, 1, 3 and finally 2. The output array, in this 
 * case, should therefore be [4, 3, 2, 1, 0, 1, 3, 2].
 * 
 * Precondition: input is an integer
 * 
 * @param {number} n - number (an integer)
 * @return {number []} an array containing every other digit in the input number, starting from the end.
 */
function extractOddDigits( number ) {
    /* write your code here! */
}


/**
 * Accepts a number and extracts and doubles every other digit, starting with the number’s 
 * second to last digit.
 * For example, if the input is 4003605040302014, the second to last digit is 1. 
 * Every other digit that follows is 2, 3, 4, 5, 6, 0 and finally 4.  The output array, 
 * in this case, should therefore be [4, 6, 8, 10, 12, 0, 8].
 * 
 * Precondition: input is an integer
 * 
 * @param {number} n - number (an integer)
 * @return {number []} an array containing every other digit in the input number times two, 
 * starting from the second to last.
 */
function doubleEvenDigits( number ) {
    /* write your code here! */
}


/**
 * Accepts a number and returns the sum of all its digits. 
 * For example, if the input is 123, the sum of the digits is 
 * 6 because 1+2+3 is 6.
 * 
 * Precondition: input is a positive integer
 * 
 * @param {number} number - an input number
 * @return {number} the sum of all digits in number
 */
function addAllDigits( number ) {
    /* write your code here! */
}


/**
 * Accepts a number and determines if it is a valid credit card number 
 * according to Luhn`s algorithm. Returns true if yes, else false.
 * See https://en.wikipedia.org/wiki/Luhn_algorithm and the lab 5 specification
 * for more details.  You may call your sub-algorithms here!
 * 
 * Precondition: input is a positive integer
 * 
 * @param {number} n - input number (a positive integer)
 * @return {boolean} true if input is valid credit card number, else false
 */
function luhnsAlgo( number ) {
    /* write your code here! */

}

/**
 * Accepts a number (height) and creates a string representation of a pyramid that is 
 * formed with that number of rows of asterisks, all justified to the left 
 * For example, if the input number is 3, the output string should look like:
 *             *
 *            **
 *           ***
 * 
 * Precondition: height is a positive integer
 * 
 * @param {number} height - the height of the pyramid to render
 * @return {string} a string representation of a pyramid with height rows
 */
function pyramid( height ) {
    /* write your code here! */
}


/**
 * Accepts a number (height) and creates a string representation of a pyramid that is 
 * formed with that number of rows of asterisks, with a space in the central row.
 * For example, if the input number is 3, the output string should look like:
 *             * *
 *            ** **
 *           *** ***
 * 
 * Precondition: height is a positive integer
 * 
 * @param {number} height - the height of the pyramid to render
 * @return {string} a string representation of a pyramid with height rows
 */
function pyramidPair( height ) {
    /* write your code here! */
}


//You will need to comment out line the line below to run your code within the browser!!
//This line is required to run vitest, however.
export { luhnsAlgo, pyramid, pyramidPair, extractOddDigits, doubleEvenDigits, addAllDigits }