//1.
// let str_input = prompt("Nhap vao chuoi:");
// let len = str_input.length;
// let result = "";
// let arr = [];
// let rev_arr = [];
// for (let i = 0; i < len; i++) {
//   arr.push(str_input[i]);
// }
// for (let i = 0; i < len; i++) {
//   let x = arr.pop();
//   result += x;
// }
// console.log(result);
//done

//2.
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

//3.
// let input = prompt("Nhap vao mang: ");
// let arr = input.split(",");
// let arr_len = arr.length;
// function rmvExist(arr_, len) {
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr_[j] === arr_[i]) {
//         arr_.splice(j, 1);
//       }
//     }
//   }
//   len = arr_.length;
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr_[j] === arr_[i]) {
//         arr_.splice(j, 1);
//       }
//     }
//   }
//   return arr_;
// }
// let result = rmvExist(arr, arr_len);
// console.log(result);
//done

//4.
// let contact = [
//   {
//     name: "Dat",
//     age: 22,
//     sdt: "0123456789",
//     pos: "tro giang",
//   },
//   {
//     name: "Cuong",
//     age: 25,
//     sdt: "0987654321",
//     pos: "dai ca",
//   },
//   {
//     name: "Chuong",
//     age: 23,
//     sdt: "1900100co",
//     pos: "tay sai",
//   },
// ];

// let checkLoop = true;
// while (checkLoop) {
//   let input = prompt("Nhap thao tac: ");
//   switch (input) {
//     case "C":
//       let newContact = {};
//       newContact = {};
//       newContact.name = prompt("Nhập tên: ");
//       newContact.age = parseInt(prompt("Nhập tuổi: "), 10);
//       newContact.sdt = prompt("Nhập SĐT:");
//       newContact.email = prompt("Nhập địa chỉ email: ");
//       contact.push(newContact);
//       break;

//     case "R":
//       console.table(contact);
//       break;

//     case "U":
//       let indexU = prompt("Nhập vị trí muốn sửa: ");
//       let action = prompt("Sửa cái gì? (name, age, phonenumber, email): ");
//       if (action == "name") {
//         contact[indexU].name = prompt("Sửa tên thành gì: ");
//       } else if (action == "age") {
//         contact[indexU].age = parseInt(prompt("Sửa tuổi thành gì: "), 10);
//       } else if (action == "phonenumber") {
//         contact[indexU].sdt = prompt("Sửa sđt thành gì: ");
//       } else if (action == "email") {
//         contact[indexU].email = prompt("Sửa email thành gì: ");
//       } else {
//         alert("Thoát sửa!");
//       }
//       break;

//     case "D":
//       let confirm = confirm("Chắc chắn muốn xóa không?");
//       if (confirm) {
//         let indexD = prompt("Nhập vị trí muốn xóa: ");
//         contact.splice(indexD, 1);
//         alert("Xóa thành công!");
//       } else {
//         alert("Hủy xóa!");
//       }
//       break;
//     case "0":
//       checkLoop = false;
//       break;

//     default:
//       alert("Nhập kí tự khác đê!");
//       break;
//   }
// }
//done

//5A
// let day = prompt("Nhap ngay:");
// let month = prompt("Nhap thang:");
// let year = prompt("Nhap nam:");

// function checkLeap(year_) {
//   if (year_ % 4 == 0) {
//     if (year_ % 100 == 0 && year_ % 400 != 0) {
//       return false;
//     } else return true;
//   }
//   return false;
// }

// function checkMonth(month_) {
//   if (month_ > 12 && month_ < 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function checkDay(day_) {
//   if (
//     month == 1 ||
//     month == 3 ||
//     month == 5 ||
//     month == 7 ||
//     month == 8 ||
//     month == 10 ||
//     month == 12
//   ) {
//     if (day_ >= 1 && day_ <= 31) return true;
//     else return false;
//   } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     if (day_ >= 1 && day_ <= 30) return true;
//     else return false;
//   } else if (month == 2) {
//     if (checkLeap(year)) {
//       if (day_ >= 1 && day_ <= 29) return true;
//       else return false;
//     } else if (!checkLeap(year)) {
//       if (day_ >= 1 && day_ <= 28) return true;
//       else return false;
//     }
//   }
// }
