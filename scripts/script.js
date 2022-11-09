let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__form-close');
let profileEdit = document.querySelector('.popup__form-container');

profileEditButton.addEventListener('click', function () {
  addPopup(profileEdit);
});

function addPopup() {
  popup.classList.add('popup_opened');
}


