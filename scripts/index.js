// в переменные кладем нужный DOM-элемент
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupAddCard = document.querySelector('.popup__add_card');
const addCardButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__form-close');
const likeButton = document.querySelector('.element__like');


// Открытие модального окна
// функция
function openEditPopup() {
  popupEdit.classList.add('popup_opened');
}

// слушатель событий для кнопки открытия редактирования профиля
profileEditButton.addEventListener('click',openEditPopup);

//функция
function openAddCardPopup() {
  popupAddCard.classList.add('popup_opened');
}

// слушатель событий для кнопки открытия добавления карточки
addCardButton.addEventListener('click', openAddCardPopup);


// Редактирование и сохранение имени и информации о себе
// Находим форму в DOM
const formElement = document.querySelector('.popup__form-container');

// функция закрытия формы после сохранения
function closeForm() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Элементы, куда будет вставлено новое значение
  let nameInput = document.querySelector('.profile__title');
  let descriptionInput = document.querySelector('.profile__subtitle');
  // Получение значений полей и запись новых значений
  nameInput.textContent = formElement.querySelector('[name="profileName"]').value;
  descriptionInput.textContent = formElement.querySelector('[name="profileDescription"]').value;
  closeForm();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»*
formElement.addEventListener('submit', formSubmitHandler);


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

// Шесть карточек «из коробки»
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
