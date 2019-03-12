let alphabet = "abcdefghijklmnopqrstuvwxyz"

export function isPangram(message){
    if (!message) {
        return false
    } else {
        return message
        .split('')
        .map((letter)=>{
            return letter.toLowerCase()
        })
        .filter((letter)=> {
            if(letter === " ")
                return false;
            else{
                return true;
            }    
        })
        .sort()
        .filter((value, index, self)=> {
            return self.indexOf(value) === index;
        })
        .join('')
        .includes(alphabet)
    }
}