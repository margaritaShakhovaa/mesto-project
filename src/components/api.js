const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-19',
  headers: {
    authorization: '0b8bf9f8-5a32-4136-a851-3b926c168a13',
    'Content-Type': 'application/json'
  }
}

export function getResponse(res) {
  return res.json();
}

function getError(err) {
  return Promise.reject(`Ошибка: ${err.status}`);
}

// Загрузка карточек с сервера
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(getResponse)
    .catch(getError)
}

// Загрузка информации о пользователе с сервера
export const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(getResponse)
    .catch(getError)
}

// Сохранение обновленных данных профиля
export const saveUser = (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: description
    })
  })
    .then(getResponse)
    .catch(getError)
}

// Добавление новой карточки
export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(getResponse)
    .catch(getError)
}

// Удаление карточки
export const deleteCardApi = (idCard) => {
  return fetch (`${config.baseUrl}/cards/${idCard}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(getResponse)
    .catch(getError)
}

// Постановка лайка
export const putLikeApi = (cardId) => {
  return fetch (`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(getResponse)
    .catch(getError)
}

// Удаление лайка
export const deleteLikeApi = (idCard) => {
  return fetch (`${config.baseUrl}/cards/likes/${idCard}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(getResponse)
    .catch(getError)
}

// Обновление аватара пользователя
export function setUserAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(getResponse)
    .catch(getError)
}
