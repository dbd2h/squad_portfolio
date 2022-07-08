const $body = document.querySelector("body");
const $button = document.querySelector("button");

let number = 0;
$body.style.backgroundImage = `url(../live1.png)`;
$body.style.backgroundSize = "100% 100%";
function backgroundChanger() {
  number++;
  number = number % 4;
  $body.style.backgroundImage = `url(../live${number + 1}.png)`;
}

setInterval(backgroundChanger, 2000);

$button.addEventListener("click", () => {
  location.href = "index.html";
});
