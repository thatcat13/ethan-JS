//evaluated in strict mode-->code is more robust, readable, and accurate
'use strict';

//block-scoped 'let' declaration
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Bats', verb: 'are', object: 'adorable' },
];
//object destructuring
function say({ subject, verb, object }){
  //template strings
  console.log(`${subject} ${verb} ${object}`);
}
//for...of
for(let s of sentences){
  say(s)
}
