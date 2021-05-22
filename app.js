//Code to handle color choice
let color = document.getElementById("color");
let mag_img = document.getElementById("mag-image");
let imgArr = document.getElementsByClassName("min-image");
let colorArr = document.getElementsByClassName("choose-color");
function setBlueColor() {
  color.innerHTML = "Xanh Aqua";
  for (let i = 0; i < colorArr.length; i++) {
    colorArr[i].classList.remove("choose-color-amp");
  }
  colorArr[0].classList.add("choose-color-amp");
  imgArr[0].src = "./ảnh/magni-photo-1a.jpg";
  imgArr[1].src = "./ảnh/magni-photo-2a.jpg";
  imgArr[2].src = "./ảnh/magni-photo-3a.jpg";
  imgArr[3].src = "./ảnh/magni-photo-4a.jpg";
  imgArr[4].src = "./ảnh/magni-photo-5a.jpg";
  imgArr[5].src = "./ảnh/magni-photo-6a.jpg";
  mag_img.src = "./ảnh/magni-photo-1a.jpg";
}

function setBlackColor() {
  color.innerHTML = "Ghi đen";
  color.innerHTML = "Xanh Aqua";
  for (let i = 0; i < colorArr.length; i++) {
    colorArr[i].classList.remove("choose-color-amp");
  }
  colorArr[1].classList.add("choose-color-amp");
  imgArr[0].src = "./ảnh/magni-photo-1b.jpg";
  imgArr[1].src = "./ảnh/magni-photo-2b.jpg";
  imgArr[2].src = "./ảnh/magni-photo-3b.jpg";
  imgArr[3].src = "./ảnh/magni-photo-4b.jpg";
  imgArr[4].src = "./ảnh/magni-photo-5b.jpg";
  imgArr[5].src = "./ảnh/magni-photo-6b.jpg";
  mag_img.src = "./ảnh/magni-photo-1b.jpg";
}

document.querySelectorAll("min-image").forEach((item) => {
  item.addEventListener("click", function setMagImg() {
    mag_img.src = item.src;
  });
});
// Code to handle size choice
let size = document.getElementById("size");
let sizeDesc = document.getElementById("size-desc");
let sizeArr = document.getElementsByClassName("choose-size");

function setMSize() {
  size.innerHTML = "M";
  sizeDesc.innerHTML = "(1m60 - 1m64, 51kg - 60kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }

  sizeArr[0].classList.add("size-picked");
}

function setLSize() {
  size.innerHTML = "L";
  sizeDesc.innerHTML = "(1m65 - 1m70, 61kg - 70kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }
  sizeArr[1].classList.add("size-picked");
}

function setXLSize() {
  size.innerHTML = "XL";
  sizeDesc.innerHTML = "(1m70 - 1m74, 71kg - 80kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }
  sizeArr[2].classList.add("size-picked");
}

function set2XLSize() {
  size.innerHTML = "2XL";
  sizeDesc.innerHTML = "(Trên 1m75, 81kg - 85kg)";
  for (let i = 0; i < sizeArr.length; i++) {
    sizeArr[i].classList.remove("size-picked");
  }
  sizeArr[3].classList.add("size-picked");
}
