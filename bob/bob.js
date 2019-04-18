const responseObj = {
  question : 'Sure.',
  yell: 'Whoa, chill out!',
  yellQuestion : "Calm down, I know what I'm doing!",
  address: 'Fine. Be that way!',
  catch: 'Whatever.'
}

export function hey(message){
  if (isUpperCase(message) && message.includes('?')){
    return responseObj.yellQuestion
  }
  else if (isUpperCase(message))
    return responseObj.yell
  else if (isQuestion(message)){
    return responseObj.question
  }
  else if (stripString(message) == ""){
    return responseObj.address
  }
  else {
    return responseObj.catch
  }

}

function isQuestion(str){
  let spaceless = str.replace(/\s/g,'');
  let arrayOfCharacters = spaceless.split('')
  if (arrayOfCharacters.slice(-1)[0] == '?' ){
    return true
  }
}

function stripString(str){
  let newStr = str.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"")
  let spaceless = newStr.replace(/\s/g,'');
  return spaceless
}

function isUpperCase(str) {
    console.log(stripString(str))
    if (isNaN(stripString(str))){
      return str === str.toUpperCase();
    }
    else {
      return false
    }
    
}