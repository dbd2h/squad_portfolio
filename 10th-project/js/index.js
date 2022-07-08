const $mainButton = document.querySelector(".main-button");
const $profilePhoto = document.querySelector(".profile-photo");
const $profileChevron = document.querySelector(".profile-chevron>i");
const $checkChevron = document.querySelector(".check-chevron");

const profilePhotoHeight = $profilePhoto.offsetHeight;
$profilePhoto.style.width = `${profilePhotoHeight}px`;

$profileChevron.addEventListener("click", () => {
  location.href = "profile.html";
});

$mainButton.addEventListener("click", () => {
  location.href = "live.html";
});
