
export class Triangle{
    constructor(side1,side2,side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.sides = [this.side1, this.side2, this.side3]
      }


    kind() {
        this.errorCheck();

        if (this.side1 == this.side2 && this.side2 ==this.side3){
            return 'equilateral'
        } else if (this.side1 == this.side2 || this.side2 == this.side3 || this.side1 == this.side3) {
            return 'isosceles'
        } else {
            return 'scalene'
        }
        }

    errorCheck(){
        this.checkZero();
        this.checkNegative();
        this.checkInequality();
    }
    
    checkZero(){
        if (this.sides.includes(0)) {
            throw "not a triangle"
        }
    }

    checkNegative(){
        if (this.sides.some(v => v < 0)){
            throw "not a triangle"
        }
    }

    checkInequality(){
        let sortedSides = this.sides.sort(function(a, b){return a-b})
        console.log(sortedSides)
        if ((sortedSides[0] + sortedSides[1]) < sortedSides[2] ){
            throw "not a triangle"
        }
    }

}


