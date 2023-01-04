// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true


function checkBetween(s, t, x) {
    if(x >=s && x <= t){
        return true
    }
    return false
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let posApples = apples.map(apple => apple + a)
    let posOrranges = oranges.map(orange => orange + b)
    
    let countApples = 0;
    let countOrange = 0;
    
    for(let i=0;i<apples.length; i++) {
        if(checkBetween(s, t, posApples[i])) countApples++
    }
    
    for(let i=0;i<oranges.length; i++) {
        if(checkBetween(s, t, posOrranges[i])) countOrange++
    }
    
    console.log(`${countApples}${'\n'}${countOrange}`)
}


