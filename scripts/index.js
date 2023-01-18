// ПЕРЕМЕННЫЕ ДЛЯ DOM-элементов
// Переменные для открытия/закрытия попап форм
const popupEditElement = document.querySelector('.popup_edit-profile');
const buttonEditElement = document.querySelector('.profile__edit-button');
const popupAddCardElement = document.querySelector('.popup_add-card');
const buttonAddCardElement = document.querySelector('.profile__add-button');
const buttonCloseList = document.querySelectorAll('.popup__form-close');
const popupList = document.querySelectorAll('.popup');

// Переменные для редактирования/сохранение полей в формах
const formEditElement = document.querySelector('.popup__form-container_edit');
const formAddElement = document.querySelector('.popup__form-container_add');
const profileName = formEditElement.querySelector('[name="profileName"]');
const profileDescription = formEditElement.querySelector('[name="profileDescription"]');
const nameInputElement = document.querySelector('.profile__title');
const descriptionInputElement = document.querySelector('.profile__subtitle');

// Переменные для работы с карточками
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
const nameCardInput = document.querySelector('[name="cardName"]');
const linkInput = document.querySelector('[name="cardUrl"]');

// Переменные для открытия/закрытия попап картинки
const elementPopup = document.querySelector('.element-popup');
const imagePopupElement = elementPopup.querySelector('.element-popup__image');

// ФУНКЦИИ
// Функция открытия попап форм
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия попап форм
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
function addCard(nameValue, linkValue) {
  const elementItem = elementTemplate.querySelector('.element').cloneNode(true);
  const imageElement = elementItem.querySelector('.element__image');
  imageElement.src = linkValue;
  imageElement.alt = nameValue;
  elementItem.querySelector('.element__title').textContent = nameValue;

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
    function () {
      openElementPopup(nameValue, linkValue);
    });

  return elementItem;
}

// ДОБАВЛЕНИЕ КАРТОЧКИ
function renderCard(card) {
  elementsContainer.prepend(card);
}

// ДОБАВЛЕНИЕ ПЕРВОНАЧАЛЬНОГО МАССИВА КАРТОЧЕК ПРИ ЗАГРУЗКЕ
initialCards.forEach(function(item) {
  elementsContainer.append(addCard(item.name, item.link));
});

// ПОПАП КАРТИНКИ
// Функция открытия попап с картинкой
function openElementPopup(name, link) {
  openPopup(elementPopup);
  elementPopup.querySelector('.element-popup__heading').textContent = name;
  imagePopupElement.src = link;
  imagePopupElement.alt = name;
}

// ПОПАП РЕДАКТИРОВАНИЯ И СОХРАНЕНИЯ ИНФОРМАЦИИ О СЕБЕ
// 1. Находим форму в DOM
// 2. Обработчик «отправки» формы
function handleSubmitEditProfile (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получение значений полей и запись новых значений
  nameInputElement.textContent = profileName.value;
  descriptionInputElement.textContent = profileDescription.value;
  closePopup(popupEditElement);
}
// 3. Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»


// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
// 1. Находим форму в DOM
// 2. Обработчик «отправки» формы
function handleSubmitAddCard (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Элементы, куда будет вставлено новое значение
  renderCard(addCard(nameCardInput.value, linkInput.value));
  nameCardInput.value = '';
  linkInput.value = '';
  closePopup(popupAddCardElement);
}
// 3. Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»


// СЛУШАТЕЛИ
// ++ Открытие попап профиля
buttonEditElement.addEventListener('click', function () {
  profileName.value =  nameInputElement.textContent;
  profileDescription.value = descriptionInputElement.textContent;
  openPopup(popupEditElement);
});

// ++ Закрытие попап по кнопке закрытия
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
})

// ++ Закрытие попап по клику за пределами попап
popupList.forEach(item => (
  document.addEventListener('click', (e) => {
    if (e.target === item) {
      closePopup(item);
    }
  })
));

// ++ Закрытие попап по ESC
popupList.forEach(item => (
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup(item);
    }
  })
));

// ++ Открытие попап добавления
buttonAddCardElement.addEventListener('click', function () {
  openPopup(popupAddCardElement);
});

// ++ Сохранение в профиль обновленных данных через форму
formEditElement.addEventListener('submit', handleSubmitEditProfile);

// ++ Добавление новой карточки через форму
formAddElement.addEventListener('submit', handleSubmitAddCard);

popupEditElement.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup(popupEditElement);
    }
  })
