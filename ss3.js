//Array
// let name = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// name.splice(4, 2, 7, 8, 9);
// console.log(name);

//arr.push(last) && arr.unshift(0): return new arr.length.
//arr.pop(last) && arr.shift(0): return popped/shifted value.
//arr.concat(arr1): return updated arr.
//arr.splice(): return deleted arr.
//arr2 = arr1.map(function): return new arr, performing a function on each array element.
//arr2 = arr.filter(condition): return new arr with elements passing a condition.

//console.table
//confirm("msg")

let arr = ["Apple", "Banana", "Orange", "Strawberry", "Mango"];
let check = true;

while (check === true) {
  let input = prompt("Nhap thao tac:");
  switch (input) {
    case "C":
      arr.push(prompt("Them cai gi?"));
      alert("Them thanh cong!");
      break;
    case "R":
      console.table(arr);
      break;
    case "U":
      let indexU = prompt("Nhap index can update: ");
      arr[indexU] = prompt("Sua thanh cai gi?");
      alert("Sua thanh cong!");
      break;
    case "D":
      let indexD = prompt("Nhap index can xoa: ");
      let cf = confirm("Chac chan xoa khong?");
      let txt;
      if ((cf = true)) {
        arr.splice(indexD, 1);
        alert("Xoa thanh cong!");
      } else {
        alert("Khong xoa nua!");
      }
      break;
    case "S":
      let substr = prompt("Nhap chuoi can tim:");
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(substr)) {
          arr2.push(arr[i]);
        }
      }
      console.log(arr2);
      break;
    case "0":
      check = false;
      break;
    default:
      prompt("Moi nhap lai thao tac!");
      break;
  }
}
