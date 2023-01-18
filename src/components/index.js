import '../pages/index.css';

import {
  nameInputElement,
  profileName,
  descriptionInputElement,
  profileDescription,
  popupEditElement,
  formEditElement,
  nameCardInput,
  linkInput,
  popupAddCardElement,
  formAddElement,
  buttonEditElement,
  buttonCloseList,
  buttonAddCardElement, popupList
} from "./consts.js";
import { closePopup, openPopup } from "./modal.js";
import { addCard, renderCard } from "./cards.js";
import { enableValidation } from "./validate.js";


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
// Сохранение в профиль обновленных данных через форму
formEditElement.addEventListener('submit', handleSubmitEditProfile);


// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
// 1. Находим форму в DOM
// 2. Обработчик «отправки» формы
export function handleSubmitAddCard (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Элементы, куда будет вставлено новое значение
  renderCard(addCard(nameCardInput.value, linkInput.value));
  nameCardInput.value = '';
  linkInput.value = '';
  closePopup(popupAddCardElement);
}
// 3. Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
// Добавление новой карточки через форму
formAddElement.addEventListener('submit', handleSubmitAddCard);


// СЛУШАТЕЛИ
// Открытие попап профиля
buttonEditElement.addEventListener('click', function () {
  profileName.value =  nameInputElement.textContent;
  profileDescription.value = descriptionInputElement.textContent;
  openPopup(popupEditElement);
});

// Открытие попап добавления карточки
buttonAddCardElement.addEventListener('click', function () {
  openPopup(popupAddCardElement);
});

// Закрытие попап по кнопке закрытия
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
})

// Закрытие попап по клику за пределами попап
popupList.forEach(item => (
  document.addEventListener('click', (e) => {
    if (e.target === item) {
      closePopup(item);
    }
  })
));

// Закрытие попап по ESC
popupList.forEach(item => (
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup(item);
    }
  })
));

// Включение валидации форм
enableValidation({
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
