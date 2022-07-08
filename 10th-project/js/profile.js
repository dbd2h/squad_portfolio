const $profilePhoto = document.querySelector(".user-photo");
const $elseRanking = document.querySelectorAll(".else-ranking");
const $footerIcon = document.querySelectorAll(".footer-icon");

const profilePhotoHeight = $profilePhoto.offsetHeight;
$profilePhoto.style.width = `${profilePhotoHeight}px`;

for (let i = 0; i < $elseRanking.length; i++) {
  const width = $elseRanking[i].offsetWidth;
  $elseRanking[i].style.height = `${width}px`;
}

for (let i = 0; i < $footerIcon.length; i++) {
  const height = $footerIcon[i].offsetHeight;
  $footerIcon[i].style.width = `${height}px`;
}

$footerIcon[0].addEventListener("click", () => {
  location.href = "index.html";
});
