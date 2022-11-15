// ПЕРЕМЕННЫЕ ДЛЯ DOM-элементов
const editElement = document.querySelector('.popup_edit-profile');
const editButtonElement = document.querySelector('.profile__edit-button');
const addCardElement = document.querySelector('.popup_add-card');
const addCardButtonElement = document.querySelector('.profile__add-button');
const closeEditButtonElement = document.querySelector('.popup__form-close_edit');
const closeAddButtonElement = document.querySelector('.popup__form-close_add');
const elements = document.querySelector('.elements');
const elementPopup = document.querySelector('.element-popup');

// ФУНКЦИИ ОТКРЫТИЯ/ЗАКРЫТИЯ ПОПАП
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// СЛУШАТЕЛИ (РЕДАКТИРОВАНИЕ ПРОФИЛЯ)
// Открытие попап
editButtonElement.addEventListener('click', function () {
  openPopup(editElement);
});

// Закрытие попап
closeEditButtonElement.addEventListener('click', function () {
  closePopup(editElement);
});

// СЛУШАТЕЛИ (ДОБАВЛЕНИЕ КАРТОЧКИ)
// Открытие попап
addCardButtonElement.addEventListener('click', function () {
  openPopup(addCardElement);
});

// Закрытие попап
closeAddButtonElement.addEventListener('click', function () {
  closePopup(addCardElement);
});


// ПОПАП РЕДАКТИРОВАНИЯ И СОХРАНЕНИЯ ИНФОРМАЦИИ О СЕБЕ
// 1. Находим форму в DOM
const formEditElement = document.querySelector('.popup__form-container_edit');

// 2. Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandlerEditProfile (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const nameInputElement = document.querySelector('.profile__title');
  const descriptionInputElement = document.querySelector('.profile__subtitle');
  // Получение значений полей и запись новых значений
  nameInputElement.textContent = formEditElement.querySelector('[name="profileName"]').value;
  descriptionInputElement.textContent = formEditElement.querySelector('[name="profileDescription"]').value;
  closePopup(editElement);
}

// 3. Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', formSubmitHandlerEditProfile);


// ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
function addCard(nameValue, linkValue) {
  const elementTemplate = document.querySelector('#element-template').content;
  const elementItem = elementTemplate.querySelector('.element').cloneNode(true);
  elementItem.querySelector('.element__title').textContent = nameValue;
  elementItem.querySelector('.element__image').src = linkValue;
  elementItem.querySelector('.element__image').alt = nameValue;

  elementItem.querySelector('.element__delete').addEventListener(
    'click',
    function (evt) {
      evt.target.closest('.element').remove();
    });

  elementItem.querySelector('.element__like').addEventListener(
    'click',
    function(evt) {
      evt.target.classList.toggle('element__like_active');
    });

  elementItem.querySelector('.element__image').addEventListener(
    'click',
    function (evt) {
      openElementPopup(nameValue, evt.target.src);
    });

  elements.prepend(elementItem);

  return elementItem;
}

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

// ДОБАВЛЕНИЕ ПЕРВОНАЧАЛЬНОГО МАССИВА КАРТОЧЕК ПРИ ЗАГРУЗКЕ
initialCards.forEach(function(item) {
  elements.append(addCard(item.name, item.link));
})


// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
// 1. Находим форму в DOM
const formAddElement = document.querySelector('.popup__form-container_add');

// 2. Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandlerAddCard (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Элементы, куда будет вставлено новое значение
  const nameCardInput = document.querySelector('[name="cardName"]');
  const linkInput = document.querySelector('[name="cardUrl"]');
  addCard(nameCardInput.value, linkInput.value);
  closePopup(addCardElement);
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formAddElement.addEventListener('submit', formSubmitHandlerAddCard);


// ПОПАП КАРТИНКИ
// Функция открытия попап с картинкой
function openElementPopup(name, link) {
  elementPopup.classList.add('element-popup_opened');
  elementPopup.querySelector('.element-popup__heading').textContent = name;
  elementPopup.querySelector('.element-popup__image').src = link;
  elementPopup.querySelector('.element-popup__image').setAttribute('alt', name);
}

// Функция закрытия попап с картинкой
function closeElementPopup() {
  elementPopup.classList.remove('element-popup_opened');
}
// Слушатель для закрытия попап с картинкой
elementPopup.querySelector('.element-popup__close').addEventListener('click', closeElementPopup);
