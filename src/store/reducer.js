import { 
  ADD_QUESTION
} from './actions';

const initialState = {
  questions: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION: 
      return {
        ...state,
        questions: [...state.questions, action.payload] 
      }
    default:
      return state;
  }
}