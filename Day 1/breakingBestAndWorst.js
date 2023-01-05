https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
    // Write your code here
    
    let max = scores[0]
    let min = scores[0]
    let countMax = 0, countMin = 0
    
    for(let i=0; i< scores.length - 1; i++){ 
        max = Math.max(max, scores[i+1])
        min = Math.min(min, scores[i+1])
        if(max == scores[i+1] && scores[i] != scores[i+1]) countMax++

    if(min == scores[i+1] && scores[i] != scores[i+1]) countMin++

    console.log(countMin);
    }
    
    return [countMax, countMin]

}

console.log(breakingRecords([17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50]));
// console.log(breakingRecords([100, 45, 41, 60, 17, 41, 45, 43, 100, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50]));