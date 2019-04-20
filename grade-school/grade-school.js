export class GradeSchool {
   
    constructor(studentInfo){
        this.studentInfo = {}
    }

    add(name, grade){

        if (this.studentInfo[grade]){
            this.studentInfo[grade].push(name)
        } else {
            this.studentInfo[grade] = [name]
        }
    }

    roster(){

        for (var key in this.studentInfo) {
            key = this.studentInfo[key].sort() ;
          }

        
        return this.studentInfo
    }


    grade(grade){
        if ( !this.studentInfo[grade]) {
            return []
        } else {
            return this.studentInfo[grade].sort()

        }
    }
}