import { elementTemplate, elementsContainer } from "./consts.js";
import { openElementPopup } from "./modal.js";
import { deleteCardApi, deleteLikeApi, putLikeApi } from "./api.js";

// ДОБАВЛЕНИЕ КАРТОЧКИ
export function renderCard(card) {
  elementsContainer.prepend(card);
}

// Добавления лайка
const putLike = (button, counter, idCard) => {
  return putLikeApi(idCard).then((res) => {
    button.classList.add('element__like_active');
    counter.textContent = res.likes.length;
  })
    .catch((err) => {console.log(err)});
};

// Удаление лайка
const deleteLike = (button, counter, idCard) => {
  return deleteLikeApi(idCard).then((res) => {
    button.classList.remove('element__like_active');
    counter.textContent = res.likes.length;
  })
    .catch((err) => {console.log(err)});
};

// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
export function addCard(nameValue, linkValue, likes, idOwner, idCard, userId) {
  const elementItem = elementTemplate.querySelector('.element').cloneNode(true);
  const imageElement = elementItem.querySelector('.element__image');
  const titleElement = elementItem.querySelector('.element__title');
  const deleteElement = elementItem.querySelector('.element__delete');
  const likeElement = elementItem.querySelector('.element__like');
  const likeCounterElement = elementItem.querySelector('.element__like-counter');
  const likesArray = Array.from(likes);

  imageElement.src = linkValue;
  imageElement.alt = nameValue;
  titleElement.textContent = nameValue;
  likeCounterElement.textContent = likes.length;
  elementItem.id = idCard;

  likesArray.forEach((item) => {
    if (idCard === userId) {
      likeElement.classlist.add('element__like_active');
    }
  })

  if (idOwner !== userId) {
    deleteElement.remove();
  }

  likeElement.addEventListener('click', function () {
    if (likeElement.classList.contains('element__like_active')) {
      deleteLike(likeElement, likeCounterElement, idCard);
    } else {
      putLike(likeElement, likeCounterElement, idCard);
    }
  });

  deleteElement.addEventListener('click', function () {
    deleteCardApi(idCard).then(() => elementItem.remove())
      .catch((err) => console.log(err))
  })

  imageElement.addEventListener('click', function () {
      openElementPopup(nameValue, linkValue);
  });

  return elementItem;
}
