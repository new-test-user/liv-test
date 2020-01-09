import actions from 'redux/actions'

const initialState = {
  isLoading: false,
  isModalOpen: false,
  notes: '',
  files: [],
}

const details = (state = initialState, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case actions.CHANGE_DETAILS_MODAL_VISIBILITY: {
      return {
        ...state,
        isModalOpen: payload,
      }
    }

    case actions.CHANGE_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case actions.CHANGE_DETAILS_SUCCESS: {
      return {
        ...state,
        ...payload,
        isModalOpen: false,
        isLoading: false,
      }
    }

    case actions.CHANGE_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }

    default:
      return state
  }
}

export default details
