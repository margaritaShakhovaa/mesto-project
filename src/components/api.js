const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-19',
  headers: {
    authorization: '0b8bf9f8-5a32-4136-a851-3b926c168a13',
    'Content-Type': 'application/json'
  }
}

export function getResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

// Загрузка карточек с сервера
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(getResponse)
}

// Загрузка информации о пользователе с сервера
export const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(getResponse)
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
}

// Удаление карточки
export const deleteCardApi = (idCard) => {
  return fetch (`${config.baseUrl}/cards/${idCard}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(getResponse)
}

// Постановка лайка
export const putLikeApi = (cardId) => {
  return fetch (`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(getResponse)
}

// Удаление лайка
export const deleteLikeApi = (idCard) => {
  return fetch (`${config.baseUrl}/cards/likes/${idCard}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(getResponse)
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
}
