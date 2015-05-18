// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

// function max(){
function max(x, y) {
    if (x > y) {
        return (x);
    } else {
        console.log("Your number is less than.");
    }
};



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

// function maxOfThree(){
function maxOfThree(x, y, z) {
    return Math.ceil(x, y, z) * 3;
};


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

// function isVowel(char){
var char = ["a", "e", "i", "o", "u"];

function isVowel(char) {
        if (char.length = 1); {
            console.log('true');
        } else {
            console.log('false');
        };


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

// function rovarspraket(phrase){
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

// function sum() {
        function sum(previousValue, currentValue) {
            return previousValue + currentValue;
        };


// function multiply(){
function multiply(previousValue, currentValue) {
    return previousValue * currentValue;
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// function reverse(){
var words = ["head", "apple"];
words.reverse();
console.log(words);
};


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

// function findLongestWord(words){
findLongestWord.length {
    return(words.length);
}
};


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

// function filterLongWords(words, i){
if (filterLongWorkds.length > i); {
    return words;
}
};


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

// function charFreq(string){
//     //...
// }
