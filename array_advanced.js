//1.

//Code dung chung cho tat ca cac phan ben duoi, lam phan nao uncomment phan day.
// let input = prompt("Nhap vao day so: ");
// let arr = input.split(",");
// let len = parseInt(arr.length, 10);
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }

//a+b.
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(`Lon thu 2: ${arr[len - 2]}, Be thu 2: ${arr[1]}`);

//c.
// function isPrime(num) {
//   let num_sqrt = Math.sqrt(num);
//   if (num <= 1) return false;
//   else if (num == 2) return true;
//   else {
//     for (let i = 2; i <= num_sqrt + 1; i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }
// }
// let primeArray = [];
// for (let i = 0; i < len; i++) {
//   if (isPrime(arr[i])) primeArray.push(i);
// }
// if (primeArray.length > 0) {
//   console.log(primeArray);
// } else {
//   console.log("NOT FOUND!");
// }

//d.
// arr.sort(function (a, b) {
//   return a - b;
// });
// let mid = parseInt((len - 1) / 2, 10);

// if (len % 2 == 0)
//   console.log(`Phan tu trung vi cua day la ${(arr[mid] + arr[mid + 1]) / 2}`);
// else {
//   console.log(`Phan tu trung vi cua day la ${arr[mid]}`);
// }

//e.
// arr.sort(function (a, b) {
//   return a - b;
// });
// let result = [];
// let n = parseInt(prompt("Nhap tong can tim: "), 10);
// while (len > 1) {
//   let pairs = [];
//   let last = len - 1;
//   let tmp = parseInt(arr[0] + arr[last], 10);
//   if (tmp > n) {
//     arr.pop();
//   } else if (tmp < n) {
//     arr.shift();
//   } else {
//     pairs.push(arr.shift());
//     pairs.push(arr.pop());
//   }
//   if (pairs.length != 0) {
//     result.push(pairs);
//   }
//   len = arr.length;
// }
// if (result.length == 0) {
//   console.log("NOT FOUND!");
// } else {
//   console.log(result);
// }

//2.
// function isPalindrome(str) {
//   let last = str.length - 1;
//   for (let i = 0; i <= last / 2; i++) {
//     if (str[i] != str[last - i]) return false;
//   }
//   return true;
// }
// let input = prompt("Nhap vao day cac chuoi: ");
// let strArray = input.split(",");
// let count = 0;
// for (let i = 0; i < strArray.length; i++) {
//   if (isPalindrome(strArray[i])) count++;
// }
// console.log(count);

//3.

//Code dung chung cho tat ca cac phan ben duoi, lam phan nao uncomment phan day.
// let two_D_array = [];
// let row = Number(prompt("Nhap so hang: "));
// let col = Number(prompt("Nhap so cot: "));
// for (let i = 0; i < row; i++) {
//   let row_array = [];
//   for (let j = 0; j < col; j++) {
//     row_array.push(Number(prompt(`Nhap vao hang ${i}, cot ${j}:`)));
//   }
//   two_D_array.push(row_array);
// }

//a.
// console.log(two_D_array);

//b.
// let row_sum = [];
// for (let i = 0; i < row; i++) {
//   let sum = 0;
//   for (let j = 0; j < col; j++) {
//     sum += two_D_array[i][j];
//   }
//   row_sum.push(sum);
//   console.log(`Tong cua hang ${i} la ${sum}`);
// }

//c.
// let col_sum = [];
// for (let i = 0; i < col; i++) {
//   let sum = 0;
//   for (let j = 0; j < row; j++) {
//     sum += two_D_array[j][i];
//   }
//   col_sum.push(sum);
//   console.log(`Tong cua cot ${i} la ${sum}`);
// }

//d.
// let dia_sum = 0;
// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < col; j++) {
//     if (i == j || i + j == row - 1) {
//       dia_sum += two_D_array[i][j];
//     }
//   }
// }
// console.log(dia_sum);

//e.
// let min = two_D_array[0][0];
// let max = two_D_array[0][0];
// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < col; j++) {
//     let tmp = two_D_array[i][j];
//     if (tmp >= max) max = tmp;
//     if (tmp <= min) min = tmp;
//   }
// }
// console.log(`max cua ma tran la: ${max}`);
// console.log(`min cua ma tran la: ${min}`);

//f.
// let neg_sum = 0;
// let pos_sum = 0;
// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < col; j++) {
//     let tmp = two_D_array[i][j];
//     if (tmp < 0) neg_sum += tmp;
//     else {
//       pos_sum += tmp;
//     }
//   }
// }
// console.log(`Tong am cua ma tran la: ${neg_sum}`);
// console.log(`Tong duong cua ma tran la: ${pos_sum}`);
