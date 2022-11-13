// в переменные кладем нужный DOM-элемент
const popupEdit = document.querySelector('.popup__edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__form-close');
const likeButton = document.querySelector('.element__like');

// создаем функцию добавления класса для открытия модального окна
function openPopup() {
  popupEdit.classList.add('popup_opened');
}

// слушатель событий для кнопки редактирования профиля
profileEditButton.addEventListener(
  'click',
  function () {
    openPopup(popupEdit);
  });

// создаем функцию добавления класса для закрытия модального окна
function closePopup() {
  popupEdit.classList.remove('popup_opened');
}

// слушатель событий для кнопки закрытия модального окна
closeButton.addEventListener(
  'click',
  function () {
    closePopup(popupEdit);
  });

function likeCard() {
  likeButton.classList.toggle('element__like_active');
}

likeButton.addEventListener(
  'click',
  function() {
    likeCard();
  }
)
