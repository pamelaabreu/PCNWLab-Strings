/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/
//SOLUTION:
const makeEven = str => {
    const numChars = str.length

    if (numChars % 2 === 1){
        return `${str}#`
    }

    return str;
}

console.log(makeEven('hellllo'));
console.log(`----------------------------------------`)


/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

//SOLUTION:
//LONG WAY:
// const getLastChar = (str) =>{

//     return str[str.length - 1]
// }

// ONE LINER: 
const getLastChar = (str) => str[str.length - 1]

console.log(getLastChar('pamela'));
console.log(`----------------------------------------`)

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

//SOLTUION:
const get3rdChar = str => {

    if (str.length <= 2){  
          return 'not enough characters';
    }

    return str.charAt(2);

}

console.log(get3rdChar('pl') ,'not enough characters');
console.log(get3rdChar('playuh'), 'a')
console.log(`----------------------------------------`)

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

//SOLUTION:
const get3rdCharFromEnd = str => {

     if (str.length <= 2){  
        return 'not enough characters'}

  
    return str[str.length - 3];

}

console.log(get3rdCharFromEnd('pamela') , 'e');
console.log(get3rdCharFromEnd('taq') , 't');
console.log(get3rdCharFromEnd('mo') , 'not enough characters');
console.log(get3rdCharFromEnd('taq karim') , 'r');
console.log(get3rdCharFromEnd('taq karim good looks fam') , 'f');
console.log(`----------------------------------------`)

/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

//SOLUTION:

const startsWithVowel = str => {
    str = str.toLowerCase().slice(0,1);

    if ((str === 'a') || (str === 'e') || (str === 'i') || (str === 'o') || (str === 'u')) {
        return true;
        }

    return false;
}

console.log(startsWithVowel('pamela') , 'false');
console.log(startsWithVowel('taq'), 'false');
console.log(startsWithVowel('andy'), 'true');
console.log(startsWithVowel('Andy'), 'true');
console.log(`----------------------------------------`)
// Vowels: a, e, i, o, u

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

//SOLUTION:

const endsWithVowel = (str) => {
    vowel = getLastChar(str).toLowerCase();

    if ((vowel === 'a') || (vowel === 'e') || (vowel === 'i') || (vowel === 'o') || (vowel === 'u')) {
        return true;
        }

    return false;

}
// // Vowels: a, e, i, o, u

console.log(endsWithVowel('pamelA'), 'true');
console.log(endsWithVowel('taq'), 'false');
console.log(endsWithVowel('Dfghjkl'), 'false');
console.log(endsWithVowel('andi'), 'true');
console.log(endsWithVowel('AndI'), 'true');
console.log(`----------------------------------------`)


//indexOfFirst
const endsWithVowel2 = (str) => {
    vowel = getLastChar(str).toLowerCase();
    searchTerm = 'a'||'e'||'i'||'o'||'u';

    if ((vowel === str.indexOf(searchTerm)) ) {
        return true;
        }

    return false;

} 
console.log(endsWithVowel2('jaya'),'true');
console.log(endsWithVowel2('pam'),'false');

//.slice(-1)    
// const endsWithVowel3 = (str) => {        
//     vowel = getLastChar(str).slice(-1);

//     if ((vowel === 'a') || (vowel === 'e') || (vowel === 'i') || (vowel === 'o') || (vowel === 'u')) {
//         return true;
//         }

//     return false;

// }
// // // Vowels: a, e, i, o, u

// console.log(endsWithVowel3('kick'), 'false');
// console.log(endsWithVowel3('psycho'), 'true');


/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

//SOLUTION


/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

