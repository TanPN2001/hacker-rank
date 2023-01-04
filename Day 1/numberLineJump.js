// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true


function kangaroo(x1, v1, x2, v2) {
    let max = 9999
    
    let location1 = x1;
    let location2 = x2;
    
    for(let i = 0; i< max; i++){
        if(location1 === location2){
            return "YES"
        }
        else {
            location1 += v1;
            location2 += v2
        }
    }
    return "NO"
}

// function kangaroo(x1, v1, x2, v2) {

//     const t1 = Math.sign(x1 - x2)
//     const t2 = Math.sign(v1 - v2)

//     if(t1 * t2 === 1) return "YES"
//     else if(t1 ===0 && t2 === 0) return "YES"
//     else if(t1) {

//     }
// }
