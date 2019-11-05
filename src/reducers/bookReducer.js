const defaultState = {
  books: [],
  book: {name:{}},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_BOOKS_FULFILLED': {
      return {
        ...state,
        books: action.payload.data.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_BOOKS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_BOOKS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_BOOK': {
      return {
        ...state,
        book: {name:{}}
      }
    }

    case 'SAVE_BOOK_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_BOOK_FULFILLED': {
      return {
        ...state,
        books: [...state.books, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_BOOK_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { name, genre, rating, author, price } = data.errors;
      const errors = { global: data.message, name, genre, rating, author, price };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_BOOK_PENDING': {
      return {
        ...state,
        loading: true,
        book: {name:{}}
      }
    }

    case 'FETCH_BOOK_FULFILLED': {
      return {
        ...state,
        book: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_BOOK_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_BOOK_FULFILLED': {
      const book = action.payload.data;
      return {
        ...state,
        books: state.books.map(item => item._id === book._id ? book : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_BOOK_REJECTED': {
      const data = action.payload.response.data;
      const { name, genre, rating, author, price } = data.errors;
      const errors = { global: data.message, name, genre, rating, author, price };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_BOOK_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        books: state.books.filter(item => item._id !== _id)
      }
    }

    default:
      return state;
  }
}
