// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
  let resultTemp =[]
  let result = []

  const max = Math.max(...a);
  const min = Math.min(...b);

  for (let i = max; i <= min; i++) {
    if (a.every((x) => i % x === 0)) resultTemp.push(i);
  }
  
  for (let i = 0, len = resultTemp.length; i < len; i++) {
    if (b.every((x) => x % resultTemp[i] === 0)) result.push(resultTemp[i]);
  }
  return result.length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));



// function UCLN(a, b) {
//   if (a == 0 || b == 0) {
//     return a + b
//   } else {
//     while (a != b) {
//       if (a > b) {
//         a -= b;
//       } else {
//         b -= a;
//       }
//     }
//     return a
//   }
// }

// function BCNN(a, b) {
//     return a * b / UCLN(a, b)
// }

// function getTotalX(a , b) {
//     // Write your code here

//     const max = Math.max(a)
//     const min = Math.max(b)

//     let bcnn = 1
//     let count = 0;

//     for(let i =0; i<a.length; i++){
//         bcnn = BCNN(bcnn, a[i])
//     }

//     for(let i = max; i<min; i++) {
//         if()
//     }

//     return count
// }

// console.log(getTotalX([2, 4], [24, 36]));
