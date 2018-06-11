//evaluated in strict mode-->code is more robust, readable, and accurate
'use strict';

//block-scoped 'let' declaration
const sentences = [
  { subject: 'coding', verb: 'is', object: 'awesome' },
  { subject: 'candy', verb: 'is', object: 'delicious' },
];
//object destructuring
function say({ subject, verb, object }){
  //template strings
  console.log(`${subject} ${verb} ${object}`);
}
//for...of
for(let s of sentences){
  say(s);
}
