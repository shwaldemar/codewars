/*

This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one.

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
*/
"use strict"
let morse_obj = {
				".-": "A",
				"-...": "B",
				"-.-.": "C",
				"-..": "D",
				".": "E",
				"..-.": "F",
				"--.": "G",
				"....": "H",
				"..": "I",
				".---": "J",
				"-.-": "K",
				".-..": "L",
				"--": "M",
				"-.": "N",
				"---": "O",
				".--.": "P",
				"--.-": "Q",
				".-.": "R",
				"...": "S",
				"-": "T",
				"..-": "U",
				"...-": "V",
				".--": "W",
				"-..-": "X",
				"-.--": "Y",
				"--..": "Z",
				"-----": "0",
				".----": "1",
				"..---": "2",
				"...--": "3",
				"....-": "4",
				".....": "5",
				"-....": "6",
				"--...": "7",
				"---..": "8",
				"----.": "9"
}

// MUCH BETTER
// function decodeMorse(morseCode){
//   return morseCode
//     .trim()
//     .split(/  | /)
//     .map(function(code){ return morse_obj[code] ||' '})
//     .join(" ")
//
// }

// Works but really long
// function decodeMorse(code){
//   let words = (code).split("  ")
//   let letters = words.map(function(letter){
//     return letter.split(" ")
//   })
//   let decoded = [];
//
//   for (let i = 0; i < letters.length; i++){
//     decoded[i] = [];
//     for (let j = 0; j < letters[i].length; j++){
//       if (morse_obj[letters[i][j]]){
//         decoded[i].push(morse_obj[letters[i][j]])
//       }
//     }
//   }
//   return decoded.map((arr => arr.join(""))).join(" ")
// }

//WORKS ORIGINAL ATTEMPT
function decodeMorse(encoded){
  let morse = Object.keys(morse_obj);
  encoded = encoded.split(/\s/);
  return encoded.map(function(key){
    if (morse_obj[key]) return morse_obj[key];
  }).join(" ");
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."))
