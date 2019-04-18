export class Matrix {
    constructor(numbers){
        this.numbers = numbers
        this.rows = this.getRows();
        this.columns = this.getColumns();

    }


getRows(){
    return this.numbers
        .split("\n")
        .map((rows)=>{
            return rows
                    .split(" ")
                    .map((number) => {
                        return parseInt(number)
            })
    })
}   

getColumns(){
    return this.numbers
        .split("\n")
        .map((rows) => {
            return rows
                .split(" ")
                .map((number) => {
                    return parseInt(number)
                })
        })
        .map((newRows,index) => {
            return newRows[index]
        })
        

}



}