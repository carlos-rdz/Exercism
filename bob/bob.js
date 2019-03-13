/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let i = 0
  if (checkUpper(message) && message.includes('?') ){
    return 'Calm down, I know what I\'m doing!'
  } else if (checkUpper(message)){
    return 'Whoa, chill out!'
  }
  else if (message.includes("?")){
    return 'Sure.'
  }
  return 'Whatever.'
};


function checkUpper(message){
  return message === message.toUpperCase()
}