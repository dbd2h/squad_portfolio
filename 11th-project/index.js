const $body = document.querySelector("body");
const $startP = document.querySelector(".start");
const $pictureBox = document.querySelector(".picture-box");
const $endP = document.querySelector(".end");
const imgRec = ["imgRec1.jpg", "imgRec2.jpg", "imgRec3.jpg"];
const imgSqu = [
  "imgSqu1.jpg",
  "imgSqu2.jpg",
  "imgSqu3.jpg",
  "imgSqu4.jpg",
  "imgSqu5.jpg",
  "imgSqu6.jpg",
  "imgSqu7.jpg",
  "imgSqu8.jpg",
  "imgSqu9.jpg",
];

function randomNumber(i) {
  const number = Math.floor(Math.random() * i);
  return number;
}

function pictureBox() {
  const caseNum = randomNumber(3);
  if (caseNum == 0) {
    const picNum = randomNumber(3);
    const $div = document.createElement("div");
    $div.classList.add("case1");
    const $img = document.createElement("img");
    $img.setAttribute("src", imgRec[picNum]);
    $img.addEventListener("click", () => {
      $body.classList.add("scroll-none");
      console.log("push");
      const $topDiv = document.createElement("div");
      $topDiv.classList.add("top-box");
      const $toptopDiv = document.createElement("div");
      const $topImg = document.createElement("img");
      $topImg.setAttribute("src", imgRec[picNum]);
      const $bottomIcon = document.createElement("i");
      $bottomIcon.setAttribute("class", "fa fa-arrow-up");
      $bottomIcon.addEventListener("click", () => {
        const black = document.querySelector(".black-ground");
        black.remove();
        const top = document.querySelector(".top-box");
        top.remove();
        $body.classList.remove("scroll-none");
      });
      $toptopDiv.append($topImg);
      $topSpan = document.createElement("span");
      $topSpan.innerHTML = '"동해물과 백두산이"';
      $toptopDiv.append($topSpan);
      $topDiv.append($toptopDiv);
      $topDiv.append($bottomIcon);
      $blackDiv = document.createElement("div");
      $blackDiv.classList.add("black-ground");
      $body.append($blackDiv);
      $body.append($topDiv);
    });
    $div.append($img);
    $pictureBox.append($div);
  }
  if (caseNum == 1) {
    const $div = document.createElement("div");
    $div.classList.add("case2");
    for (let i = 0; i < 3; i++) {
      const picNum = randomNumber(9);
      const $img = document.createElement("img");
      $img.setAttribute("src", imgSqu[picNum]);
      $img.addEventListener("click", () => {
        $body.innerHTML = '"UX가 종료됩니다."';
      });
      $div.append($img);
    }
    $pictureBox.append($div);
  }
  if (caseNum == 2) {
    const $div = document.createElement("div");
    const $smallDiv = document.createElement("div");
    $div.classList.add("case3");
    for (let i = 0; i < 3; i++) {
      const picNum = randomNumber(9);
      const $img = document.createElement("img");
      $img.setAttribute("src", imgSqu[picNum]);
      $img.addEventListener("click", () => {
        $body.innerHTML = '"UX가 종료됩니다."';
      });
      if (i == 0) {
        $div.append($img);
      } else {
        $smallDiv.append($img);
      }
    }
    $div.append($smallDiv);
    $pictureBox.append($div);
  }
}

const bodyHeight = $body.offsetHeight;

const interval = setInterval(() => {
  pictureBox();
  if (bodyHeight != $body.offsetHeight) {
    clearInterval(interval);
  }
}, 30);
