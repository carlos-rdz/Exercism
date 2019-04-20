export class Allergies {
    constructor(score){
        this.score = score
        this.checker = {
            eggs: 1,
            peanuts: 2,
            shellfish: 4,
            strawberries: 8,
            tomatoes: 16,
            chocolate: 32,
            pollen: 64,
            cats: 128
        }
      
    }

    getKeyByValue(value) {
        return Object.keys(this.checker).find(key => this.checker[key] === value);
      }

    list(){
        let scoreArray = Object.values(this.checker)
                            .sort(function(a, b){return b-a})
        let answers = []   
        for (var element of scoreArray){
            if (this.score - element >= 0){
                this.score -= element;
                answers.unshift(this.getKeyByValue(element));
            }
        }
        return answers
    }

    allergicTo(food){
        if (!this.list().includes(food)){
            return false
        } else {
            return true
        }
    }
}