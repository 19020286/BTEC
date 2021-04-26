//Bài 1
const button1 = document.getElementById("button1");
const block1 = document.getElementById("block1");
button1.onclick = function Function1() {
  if (block1.style.display == "block") {
    block1.style.display = "none";
  } else {
    block1.style.display = "block";
  }
};

//Bài 2
const button2 = document.getElementById("button2");
const block2 = document.getElementById("block2");

button2.onclick = function Function2() {
  const randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
  block2.style.backgroundColor = "#" + randomColor;
};

//Bài 3
let tmp = "";
const block3a = document.getElementById("block3a");
const block3b = document.getElementById("block3b");
const button3 = document.getElementById("button3");
button3.onclick = function Function3() {
  tmp = block3a.innerText;
  block3a.innerText = block3b.innerText;
  block3b.innerText = tmp;
};

//Bài 4
const button4 = document.getElementById("button4");
const block4 = document.getElementById("block4");
let content = block4.innerText;
let size = 14;
button4.onclick = function Function4() {
  block4.style.fontSize = `${++size}px`;
  block4.innerText = `${content} .Cỡ chữ hiện tại là ${size}px`;
};
