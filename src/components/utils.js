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
  } else {
    button.classList.remove(settings.inactiveButtonClass);
  }
}
