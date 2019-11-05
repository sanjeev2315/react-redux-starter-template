import { client } from './';

const url = '/books';

export function fetchBooks(){
  return dispatch => {
    dispatch({
      type: 'FETCH_BOOKS',
      payload: client.get(url)
    })
  }
}

export function newBook() {
  return dispatch => {
    dispatch({
      type: 'NEW_BOOK'
    })
  }
}

export function saveBook(book) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_BOOK',
      payload: client.post(url, book)
    })
  }
}

export function fetchBook(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_BOOK',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateBook(book) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_BOOK',
      payload: client.put(`${url}/${book._id}`, book)
    })
  }
}

export function deleteBook(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_BOOK',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
