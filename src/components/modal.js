import {buttonCloseList, elementPopup, headingPopupElement, imagePopupElement, popupList} from "./consts.js";

// Закрытие попап по ESC
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Функция открытия попап форм
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

// Функция закрытия попап форм
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

// Функция открытия попап с картинкой
export function openElementPopup(name, link) {
  openPopup(elementPopup);
  headingPopupElement.textContent = name;
  imagePopupElement.src = link;
  imagePopupElement.alt = name;
}

// Закрытие попап по кнопке закрытия
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
})

// Закрытие попап по клику за пределами попап
popupList.forEach(item => (
  item.addEventListener('click', (e) => {
    if (e.target === item) {
      closePopup(item);
    }
  })
));
