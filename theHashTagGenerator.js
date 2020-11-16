/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
"use strict"
let str = "burgundy bart "

function generateHashtag(str){
    return str.length > 140 || str.length < 1 ?
    false :
    ("# " + str).trim()
    .replace(/(\s\w)/g, function(a, b){
      return b.slice(1).toUpperCase()
    })
}

console.log(generateHashtag(str))
// function generateHashtag (str) {
//   let prep = str
//     .split(" ").map(function(item){
//       return item.charAt(0).toUpperCase() + item.slice(1, item.length)
//     }).join("")
//
//   let result = "#" + prep
//
//   return prep.length === 0 || result.length > 140 ? false : result
// }

// function generateHashtag(str){
//   return str.length < 1 ? false :
//   "#" + str.split(" ")
//   .map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1, word.length)
//   })
//   .join("")
// }

// function generateHashtag(str){
//   var hashTag = str.split(" ")
//   return hashTag.reduce(function(tag, word){
//     return tag + word.charAt(0).toUpperCase() + word.slice(1, word.length)
//   }, "#")
// }
