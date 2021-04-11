//1.
// let x = parseInt(prompt("Nhap x: "), 10);
// let y = parseInt(prompt("Nhap y: "), 10);
// if (x > y) {
//   alert("Khong hop le!");
// }
// let count = 0;
// let sum = 0;
// arr = [];
// for (let i = x; i <= y; i += 2) {
//   arr.push(i);
//   sum += i;
//   count++;
// }
// console.log(`${arr}, trung binh cong la ${(sum / count).toFixed(2)}`);

//2.
// let input = prompt("Nhap day so dang string:");
// let arr = input.split(",");
// let oddsum = 0;
// let evensum = 0;
// let convArray = [];
// for (let i = 0; i < arr.length; i++) {
//   let element = parseInt(arr[i], 10);
//   convArray.push(element);
//   if (element % 2 == 0) {
//     evensum += element;
//   } else {
//     oddsum += element;
//   }
// }
// convArray.sort(function (a, b) {
//   return a - b;
// });
// console.log(convArray);
// let len = convArray.length;

// console.log(`tong chan la: ${evensum}`);
// console.log(`tong le la: ${oddsum}`);
// console.log(`min la: ${convArray[0]}`);
// console.log(`max la: ${convArray[len - 1]}`);

//3.
// let arr = [1, 2, 4, 6, [3, 5], [10, 12]];
// let str = arr.toString();
// let sum = 0;
// arr = str.split(",");
// let convArray = [];
// for (let i = 0; i < arr.length; i++) {
//   let element = parseInt(arr[i], 10);
//   convArray.push(element);
//   sum += element;
// }
// console.log(`Tong cua mang la: ${sum}`);
// convArray = convArray.map(plus10);

// function plus10(value, index, array) {
//   return value + 10;
// }
// console.log(convArray);

//4.
// let input = prompt("Nhap vao day so dang string: ");
// let arr = input.split(",");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }
// let min = Infinity;
// let max = -Infinity;
// for (let i = 0; i < len; i++) {
//   if (arr[i] > max) max = arr[i];
//   if (arr[i] < min) min = arr[i];
// }

// let checkArr = []; //Mảng check sự xuất hiện của phần tử
// for (let i = min; i <= max; i++) {
//   checkArr[i] = false;
// }
// for (let i = 0; i < len; i++) {
//   let tmp = arr[i];
//   checkArr[tmp] = true;
// }

// let finalArr = [];
// for (let i = 0; i < len; i++) {
//   let x = arr[i];

//   if (checkArr[x] == true) {
//     finalArr.push(x);
//     checkArr[x] = false;
//   }
// }
// console.log(finalArr);

//5.
// let input = prompt("Nhap 1 cau bat ky: ");
// input.trim();
// let arr = input.split(" ");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   let head = arr[i].slice(0, 1);
//   let tail = arr[i].slice(1);
//   arr[i] = head.toUpperCase().concat(tail);
// }
// console.log(arr.join(" "));

//6.
// let input = prompt("Nhap vao chuoi so: ");
// let arr = input.split(",");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }
// let n = prompt("Nhap vao vi tri cat: ");
// console.log(arr.splice(0, n));

//7.
// let input = prompt("Nhap chuoi so: ");
// let n = parseInt(prompt("Nhap n: "), 10);
// let arr = input.split(",");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }
// let newArr = [];
// let newLen = parseInt(len / n, 10);
// for (let i = 0; i < newLen; i++) {
//   newArr.push(arr.splice(0, n));
// }
// if (arr.length != 0) newArr.push(arr);
// console.log(newArr);

//8.
// let input = prompt("Nhap vao chuoi so: ");
// let arr = input.split(",");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr[len - 1] - arr[0]);

//9.
// let input = prompt("Nhap vao chuoi so: ");
// let arr = input.split(",");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }
// arr.sort(function (a, b) {
//   return a - b;
// });
// let min = arr[0];
// let max = arr[len - 1];
// let checkArr = [];
// for (let i = min; i <= max; i++) {
//   checkArr[i] = 0;
// }
// for (let i = 0; i < len; i++) {
//   let tmp = arr[i];
//   checkArr[tmp]++;
// }
// let finalArr = [];
// let max_ = checkArr[min];
// for (let i = min; i <= max; i++) {
//   if (checkArr[i] >= max_) max_ = checkArr[i];
// }
// for (let i = min; i <= max; i++) {
//   if (checkArr[i] == max_) finalArr.push(i);
// }
// console.log(finalArr);

//10.
// function isPalindrome(str, len) {
//   let count = 0;
//   for (let i = 0; i < len / 2; i++) {
//     if (str.charAt(i) != str.charAt(len - i - 1)) count++;
//   }
//   if (count == 0) {
//     return true;
//   }
//   return false;
// }
// let input = prompt("Nhap chuoi can kiem tra: ");
// let inputLength = input.length;
// let result = isPalindrome(input, inputLength);
// console.log(result);
