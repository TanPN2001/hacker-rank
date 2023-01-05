function countMax(arr) {
    let max = arr[0]
    let min = arr[0]
    let count = 0;
    for(let i=0; i< arr.length; i++) {
        if(arr[i] >= max) max = arr[i]
        if(arr[i] <= min) min = arr[i]
    }

    let temp = []
    for(let i= min; i<=max; i++){
        temp[i] = 0;
    }
    for(let i = 0; i<= arr.length; i++) {
        temp[arr[i]] ++
    }

    let maxtemp = 0;
    let countTemp = 0;
    for(let i=0; i<temp.length; i++){
        if(temp[i] >= maxtemp) {maxtemp = temp[i]
        countTemp = i}
    }

    console.log(countTemp);
    return maxtemp

}

// function countMax(arr) {
//   arr.sort((a, b) => a - b);

//   let count = 1,
//     tmp = 0;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//       tmp++;
//       if (tmp >= count) count = tmp;
//     } else {
//       count++;
//       tmp = 0;
//     }
//   }

//   return count;
// }

console.log(countMax([1, 2, 3, 1, 2, 2, 3, 2, 4, 4, 4]));
