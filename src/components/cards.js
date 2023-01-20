import { elementTemplate, elementsContainer } from "./consts.js";
import { openElementPopup } from "./modal.js";
import {settings} from "./utils";

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
  elementsContainer.append(addCard(item.name, item.link));
});

// ДОБАВЛЕНИЕ КАРТОЧКИ
export function renderCard(card) {
  elementsContainer.prepend(card);
}

// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
export function addCard(nameValue, linkValue) {
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

  imageElement.addEventListener(
    'click',
    function () {
      openElementPopup(nameValue, linkValue);
    });
  return elementItem;
}
