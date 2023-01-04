// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function checkGrades(num) {
    if(num < 38 || num % 5 === 0) {
        return num
    }
    else if((num + 1) % 5 == 0) {
         return num + 1
    }
    else if((num + 2) % 5 == 0) {
         return num + 2
    }
    return num
}

function gradingStudents(grades) {
    let result = []
    for(let i=0; i<grades.length; i++){
        result.push(checkGrades(grades[i]))
    }
    return result
}
