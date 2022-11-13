// в переменные кладем нужный DOM-элемент
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupAddCard = document.querySelector('.popup__add_card');
const addCardButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__form-close');
const likeButton = document.querySelector('.element__like');


// Открытие модального окна

// const editForm = document.querySelector('.popup__form-container');
// const nameInput = editForm.querySelector('.popup__input_type_name');
// const descriptionInput = editForm.querySelector('');

function openEditPopup() {
  popupEdit.classList.add('popup_opened');
}

// слушатель событий для кнопки редактирования профиля
profileEditButton.addEventListener('click',openEditPopup);


// слушатель событий для кнопки добавления карточки
addCardButton.addEventListener(
  'click',
  function () {
    popupAddCard.classList.add('popup_opened');
  });

// Закрытие модального окна
// функция для слушателя событий для кнопки закрытия модального окна
function closeAllPopups() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    popup.addEventListener('click', () =>
      popup.classList.remove('popup_opened'));
    });
}
closeButton.addEventListener('click', closeAllPopups);

//Лайк карточки
// слушатель событий для кнопки лайка
likeButton.addEventListener(
  'click',
  function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

// массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
