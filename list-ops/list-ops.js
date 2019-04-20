export class List {
    
    constructor(list) {
        this.list = list ;
        
      }
    
    append(newArray){
        return this.list.push(newArray)
    }
}