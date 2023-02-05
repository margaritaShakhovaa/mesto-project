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

// Загрузка информации о пользователе с сервера и загрузка карточек с сервера
Promise.all([getUser(), getInitialCards()])
  .then(([userInfo, cards]) => {
    userId = userInfo._id;
    nameInputElement.textContent = userInfo.name;
    descriptionInputElement.textContent = userInfo.about;
    avatarElement.src = userInfo.avatar;

    cards.forEach(item => elementsContainer.append(addCard(item.name, item.link, item.likes, item.owner._id, item._id, userId)))
})
  .catch(err => console.log(err))

// ПОПАП РЕДАКТИРОВАНИЯ И СОХРАНЕНИЯ ИНФОРМАЦИИ О СЕБЕ
function handleSubmitEditProfile (evt) {
  evt.preventDefault();
  renderSaveLoading(popupEditElement, true);
  saveUser(profileName.value, profileDescription.value)
    .then(() => {
      nameInputElement.textContent = profileName.value
      descriptionInputElement.textContent = profileDescription.value
      closePopup(popupEditElement)
    })
    .catch(err => console.log(err))
    .finally(() => renderSaveLoading(popupEditElement, false))
}

// ПОПАП РЕДАКТИРОВАНИЯ И СОХРАНЕНИЯ АВАТАРА
function handleSubmitAvatar (evt) {
  evt.preventDefault();
  renderSaveLoading(popupAvatarElement, true);
  setUserAvatar(avatarInput.value)
    .then(res => avatarElement.src = res.avatar)
    .then(() => closePopup(popupAvatarElement))
    .catch(err => console.log(err))
    .finally(() => renderSaveLoading(popupAvatarElement, false))
}

// ПОПАП ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
export function handleSubmitAddCard (evt) {
  evt.preventDefault();
  renderCreateLoading(popupAddCardElement, true);
  addNewCard(nameCardInput.value,linkInput.value).then(card => renderCard(addCard(card.name, card.link, card.likes, card.owner._id, card._id, userId)))
    .then(() => closePopup(popupAddCardElement))
    .catch(err => console.log(err))
    .finally(() => renderCreateLoading(popupAddCardElement, false))
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
