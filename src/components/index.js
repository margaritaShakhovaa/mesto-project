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
  buttonAddCardElement
} from "./consts.js";
import { closePopup, openPopup } from "./modal.js";
import { addCard, renderCard } from "./cards.js";
import {
  enableValidation,
  setEventListeners,
} from "./validate.js";
import {settings} from "./utils.js";


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
  formAddElement.reset();
  setEventListeners(formAddElement);
});

// Включение валидации форм
enableValidation(settings);
