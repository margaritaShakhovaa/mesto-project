import { elementPopup, imagePopupElement } from "./consts.js";

// Функция открытия попап форм
export function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия попап форм
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopup);
}

// Функция открытия попап с картинкой
export function openElementPopup(name, link) {
  openPopup(elementPopup);
  elementPopup.querySelector('.element-popup__heading').textContent = name;
  imagePopupElement.src = link;
  imagePopupElement.alt = name;
}





