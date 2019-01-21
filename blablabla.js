'use strict'

# test if I am a string
let testTest = function(str){
  let myStringObj = { string: true, data: str };
  if (!str.length || !str.charAt(0)) {
    myStringObj.string = false;
    return myStringObj;
  } // else 
  return myStringObj;
};

let result = testTest('test');
console.log(result);

