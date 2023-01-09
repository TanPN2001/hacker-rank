// https://leetcode.com/problems/longest-palindromic-substring/
// https://leetcode.com/problems/longest-palindromic-substring/solutions/3023841/javascript-o-n-n/


function longestPalindrome(s) {
    let max = 0;
    let arr = ''
    
    for(let i = 0; i < s.length; i++) {
        let pre = ''
        let next = ''
        for(let j = i; j < s.length; j++) {
            pre = pre + s[j];   // a + b = ab
            next = s[j] + next; // b + a = ba
            
            if(pre === next && max < pre.length) {
                max = pre.length;
                arr = pre;
            }
        }
    }
    return arr;
};

console.log(longestPalindrome('ccc'));





// var longestPalindrome = function (s) {
//   if (s.length <= 1) {
//     return s;
//   }
//   let max = 0;
//   let arr = "";
//   for (let i = 0; i < s.length; i++) {

//     if (s[i - 1] === s[i] && s[i] === s[i + 1]) {
//         console.log('av=bc');
//       let start = i - 1;
//       let end = i + 1;
//       let sum = 1;
//       while (start >= 0 && end <= s.length - 1) {
//         if (s[start] === s[end]) {
//           sum += 2;
//           console.log(start, end+1);
//           console.log(s.substring(start, end+1));
//           arr = s.substring(start, end + 1);
//           start--;
//           end++;
//         } else break;
//       }
//       max = Math.max(sum, max);
//     }
//     else if (s[i - 1] === s[i]) {
//       let start = i - 1;
//       let end = i;
//       let sum = 0;
//       while (start >= 0 && end <= s.length - 1) {
//         if (s[start] === s[end]) {
//           sum += 2;
//           arr = s.substring(start, end + 1);
//           start--;
//           end++;
//         } else break;
//       }
//       max = Math.max(sum, max);
//     } else {
//       let start = i - 1;
//       let end = i + 1;
//       let sum = 1;
//       while (start >= 0 && end <= s.length - 1) {
//         if (s[start] === s[end]) {
//           sum += 2;
//           arr = s.substring(start, end + 1);
//           start--;
//           end++;
//         } else break;
//       }
//       max = Math.max(sum, max);
//     }
//   }

//   if (max === 1) return s[0];
//   else return arr;
// };

// console.log(longestPalindrome('ccc'));