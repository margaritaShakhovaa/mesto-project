export const buttonCloseList = document.querySelectorAll('.popup__form-close');
export const popupList = document.querySelectorAll('.popup');

// Переменные для редактирования профиля
export const buttonEditElement = document.querySelector('.profile__edit-button');
export const formEditElement = document.querySelector('.popup__form-container_edit');
export const popupEditElement = document.querySelector('.popup_edit-profile');
export const submitEditButton = formEditElement.querySelector('.popup__submit');
export const profileName = formEditElement.querySelector('[name="profileName"]');
export const profileDescription = formEditElement.querySelector('[name="profileDescription"]');
export const nameInputElement = document.querySelector('.profile__title');
export const descriptionInputElement = document.querySelector('.profile__subtitle');

// Переменные для добавления новой карточки
export const buttonAddCardElement = document.querySelector('.profile__add-button');
export const formAddElement = document.querySelector('.popup__form-container_add');
export const popupAddCardElement = document.querySelector('.popup_add-card');
export const submitAddButton = formAddElement.querySelector('.popup__submit');

// Переменные для редактирования аватара
export const buttonAvatarElement = document.querySelector('.profile__avatar-button');
export const formAvatar = document.querySelector('.popup__form-container_avatar');
export const avatarInput = formAvatar.querySelector('[id="avatar-input"]');
export const popupAvatarElement = document.querySelector('.popup__avatar-edit');
export const submitAvatarButton = formAvatar.querySelector('.popup__submit');
export const avatarElement = document.querySelector('.profile__avatar');

// Переменные для работы с карточками
export const elementsContainer = document.querySelector('.elements');
export const elementTemplate = document.querySelector('#element-template').content;
export const nameCardInput = document.querySelector('[name="cardName"]');
export const linkInput = document.querySelector('[name="cardUrl"]');

// Переменные для открытия/закрытия попап картинки
export const elementPopup = document.querySelector('.element-popup');
export const imagePopupElement = elementPopup.querySelector('.element-popup__image');

