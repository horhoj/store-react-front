import { CategoryAction, CategoryActionType, CategoryState } from './types';

const initialState: CategoryState = {
  isLoading: false,
  error: null,
  category: null,
};

export const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryAction,
): CategoryState => {
  switch (action.type) {
    case CategoryActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case CategoryActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case CategoryActionType.SET_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    case CategoryActionType.CLEAR:
      return {
        ...state,
        category: null,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
