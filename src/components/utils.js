export const settings = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

// Функция переключения состояния кнопки
export function setButtonState(button, isFormValid) {
  if(isFormValid) {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

// Функция переключения кнопки "Сохранить"
export function renderSaveLoading(popup, isLoading, buttonText='Сохранить', loadingText='Сохранение...') {
  const submitButton = popup.querySelector('.popup__submit');
  if(isLoading) {
    submitButton.textContent = loadingText;
    submitButton.disabled = true;
  } else {
    submitButton.textContent = buttonText;
    submitButton.disabled = false;
  }
}

// Функция переключения кнопки "Создать"
export function renderCreateLoading(popup, isLoading, buttonText='Создать', loadingText='Сохранение...') {
  const submitButton = popup.querySelector('.popup__submit');
  if(isLoading) {
    submitButton.textContent = loadingText;
    submitButton.disabled = true;
  } else {
    submitButton.textContent = buttonText;
    submitButton.disabled = false;
  }
}

export function cleanErrors(popup) {
  popup.querySelectorAll('.popup__input').forEach(item => item.classList.remove('popup__input_type_error'))
  popup.querySelectorAll('.popup__input-error').forEach(item => item.classList.remove('popup__input-error_active'))
}
