

export class Triangle{
    constructor(side1,side2,side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
      }

      kind() {
        let sides = [this.side1,this.side2,this.side3].sort((a, b) => a - b)
        if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0 ){
            throw("sides cannot be 0")
        } else if (sides[0] + sides[1] < sides[2] ){
            throw("violates triangle inequality")
        } else if(this.side1 === this.side2 && this.side2 === this.side3){
            return "equilateral"
        } else if (this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3){
            return "scalene"  
        } else {
            return "isosceles"
        }
      } 

}