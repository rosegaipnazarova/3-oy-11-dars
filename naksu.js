//n1

// findlongestword

// function flw(arr) {
//     let max=arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (max.length<arr[i].length) {
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(flw(["let","meeeeen","uuuuuuuuuuu"]));


//n2

//umumiy elements

// function abc(arr1,arr2) {
//     let newArr=[]
//     for (let i = 0; i < arr1.length; i++) {
//         const element = arr1[i]
//         if (arr2.includes(element)===true) {
//             newArr.push(element)
//         }
//     }
//     return newArr
// }
// console.log(abc([1,2,3],[4,3,2]));



//n3

//unique

// function findUniqueWords(str) {
//     let newArr=[...new Set(str.split(" "))]
//     return newArr
// }
// console.log(findUniqueWords("apple banana apple orange grape"));


//n4

// format number

// function formatPhNum(arr) {
//     let newStr=""
//     return newStr="("+arr[0]+arr[1]+arr[2]+")"+" "+arr[3]+arr[4]+arr[5]+"-"+arr[6]+arr[7]+arr[8]
// }
// console.log(formatPhNum([1,2,3,4,5,6,7,8,9,0]));
