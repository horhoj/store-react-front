import {
  FlashMessageAction,
  FlashMessageActionType,
  FlashMessageState,
} from './types';

const initialState: FlashMessageState = {
  messages: [],
  currentId: 0,
};

export const flashMessageReducer = (
  state: FlashMessageState = initialState,
  action: FlashMessageAction,
): FlashMessageState => {
  switch (action.type) {
    case FlashMessageActionType.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    case FlashMessageActionType.SET_CURRENT_ID:
      return {
        ...state,
        currentId: state.currentId + 1,
      };
    case FlashMessageActionType.DELETE_MESSAGE: {
      const id = action.payload.id;
      const newMessages = state.messages.filter((msg) => msg.id !== id);
      return {
        ...state,
        messages: [...newMessages],
      };
    }
    default:
      return state;
  }
};
