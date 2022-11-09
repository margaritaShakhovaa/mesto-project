let popupEdit = document.querySelector('.popup__edit-profile');
let profileEditButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__form-close');

function addPopup() {
  popupEdit.classList.add('popup_opened');
}

function removePopup() {
  popupEdit.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', function () {
  addPopup(popupEdit);
});

closeButton.addEventListener('click', function () {
  removePopup(popupEdit);
});
