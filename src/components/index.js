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
  buttonAddCardElement,
  submitEditButton,
  submitAddButton,
  elementsContainer,
  buttonAvatarElement,
  popupAvatarElement,
  submitAvatarButton,
  formAvatar,
  avatarElement,
  avatarInput
} from "./consts.js";
import { closePopup, openPopup } from "./modal.js";
import { addCard, renderCard } from "./cards.js";
import { enableValidation } from "./validate.js";
import {renderCreateLoading, renderSaveLoading, setButtonState, settings} from "./utils.js";
import {addNewCard, getInitialCards, getUser, saveUser, setUserAvatar} from "./api.js";

let userId;

// Загрузка информации о пользователе с сервера
getUser().then(data => {
  nameInputElement.textContent = data.name;
  descriptionInputElement.textContent = data.about;
  userId = data._id;
  avatarElement.src = data.avatar;
})

// Загрузка карточек с сервера
getInitialCards().then(data => {
  data.forEach(item => elementsContainer.append(addCard(item.name, item.link, item.likes, item.owner._id, item._id, userId)))
})

// ПОПАП РЕДАКТИРОВАНИЯ И СОХРАНЕНИЯ ИНФОРМАЦИИ О СЕБЕ
function handleSubmitEditProfile (evt) {
  evt.preventDefault();
  renderSaveLoading(popupEditElement, true);
  nameInputElement.textContent = profileName.value;
  descriptionInputElement.textContent = profileDescription.value;
  saveUser(profileName.value, profileDescription.value).then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => renderSaveLoading(popupEditElement, false))
  closePopup(popupEditElement);
}

// ПОПАП РЕДАКТИРОВАНИЯ И СОХРАНЕНИЯ АВАТАРА
function handleSubmitAvatar (evt) {
  evt.preventDefault();
  renderSaveLoading(popupAvatarElement, true);
  setUserAvatar(avatarInput.value).then(res => avatarElement.src = res.avatar)
    .catch(err => console.log(err))
    .finally(() => renderSaveLoading(popupAvatarElement, false))
  closePopup(popupAvatarElement);
}

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
export function handleSubmitAddCard (evt) {
  evt.preventDefault();
  renderCreateLoading(popupAddCardElement, true);
  addNewCard(nameCardInput.value,linkInput.value).then(card => renderCard(addCard(card.name, card.link, card.likes, card.owner._id, card._id, userId)))
    .catch(err => console.log(err))
    .finally(() => renderCreateLoading(popupAddCardElement, false))
  closePopup(popupAddCardElement);
}

// СЛУШАТЕЛИ
// Открытие попап профиля
buttonEditElement.addEventListener('click', function () {
  profileName.value =  nameInputElement.textContent;
  profileDescription.value = descriptionInputElement.textContent;
  openPopup(popupEditElement);
  setButtonState(submitEditButton, true);
});

// Открытие попап редактирования аватара
buttonAvatarElement.addEventListener('click', function () {
  openPopup(popupAvatarElement);
  formAvatar.reset();
  setButtonState(submitAvatarButton, true);
})

// Открытие попап добавления карточки
buttonAddCardElement.addEventListener('click', function () {
  openPopup(popupAddCardElement);
  formAddElement.reset();
  setButtonState(submitAddButton, true);
});

formEditElement.addEventListener('submit', handleSubmitEditProfile);

formAvatar.addEventListener('submit', handleSubmitAvatar);

formAddElement.addEventListener('submit', handleSubmitAddCard);

// // Включение валидации форм
enableValidation(settings);
