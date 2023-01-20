import { elementTemplate, elementsContainer } from "./consts.js";
import { openElementPopup } from "./modal.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1648761617_81-vsegda-pomnim-com-p-sofiiskie-ozera-arkhiz-foto-86.png'
  },
  {
    name: 'Мурманская область',
    link: 'https://photocentra.ru/images/main89/892236_main.jpg'
  },
  {
    name: 'Соловки',
    link: 'https://photocentra.ru/images/main47/476758_main.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Москва Сити',
    link: 'https://phonoteka.org/uploads/posts/2021-06/1624353296_15-phonoteka_org-p-moskva-siti-oboi-krasivo-15.jpg'
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
