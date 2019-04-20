export class Triangle {
    constructor(numberofRows){
        this.numberofRows = numberofRows;
        this.rows = this.generateRows()
    } 

    generateRows(){
        let startingArray = []
        let smallArray = []
        var i;
        for (i = 0; i < (this.numberofRows); i++) { 
            console.log(`smallArray: ${smallArray}`)
            startingArray.splice( i , 0 ,  smallArray.push(1))
          };
        console.log(startingArray)
        return startingArray
    }
}