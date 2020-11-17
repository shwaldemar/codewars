/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

console.log(validParentheses(")(()))"))

// function validParentheses(parens){
//   re = /\(\)/g
//   while (re.test(parens)){
//     parens = parens.replace(re, "")
//   }
//   return !parens
// }
// function validParentheses(parens){
//   let n = 0;
//   if (parens.length === 0){
//     return "No parentheses to validate"
//   }
//   for (let i = 0; i < parens.length; i++){
//     parens[i] === ")" ? n+=1 : n-=1
//   }
//
//   return n === 0
// }
// function validParentheses(parens){
// let n = 0;
//   for (let i = 0 ; i < parens.length; i++){
//     if (parens[i] === "("){
//       n+=1
//     } else if (parens[i] === ")"){
//       n-=1
//       if (n < 0){return false}
//     }
//   }
//   return n === 0
// }
