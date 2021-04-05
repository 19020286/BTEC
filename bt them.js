//1.
// let arr = ["tom", "cat", "dog"];
// //a)
// let len = arr.length;
// for (i = 0; i < len; i++) {
//   console.log(arr[i]);
// }

// //b)
// arr[3] = "bird"; //arr.splice(len, 0, "bird"); arr.push("bird");

// //c)
// arr.shift(); //arr.splice(0, 1); delete arr[0];

// //d)
// arr.unshift("chicken"); //arr.splice(0, 0, "chicken");

// //e)
// arr.pop(); //arr.splice(len, 1); delete arr[len-1];

// //f)
// delete arr[1]; //arr.splice(1, 1);

//2.
// let arr2 = [1, 5, 9, 3, 7, 5, 6];
// let len2 = arr2.length;

//a)
// let sum = 0;0
// for (i = 0; i < len2; i++) {
//   sum += arr2[i];
// }
// console.log(sum);

//b)
// arr2.sort(function (a, b) {
//   return a - b;
// });
// for (i = 0; i < len2; i++) {
//   console.log(arr2[i]);
// }

//c)
// var MAX = -Infinity;
// var MIN = Infinity;
// for (i = 0; i < len2; i++) {
//   if (arr2[i] > MAX) MAX = arr2[i];
//   if (arr2[i] < MIN) MIN = arr2[i];
// }
// console.log(MAX, MIN);
