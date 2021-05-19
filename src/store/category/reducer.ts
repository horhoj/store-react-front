import {
  CategoryAction,
  CategoryActionType,
  CategoryState,
  SetCategory,
  SetError,
  SetIsLoading,
  SetRedirectToCategoryAction,
} from './types';

const initialState: CategoryState = {
  isLoading: false,
  error: null,
  category: null,
  redirectToCategoryList: false,
};

export const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryAction,
): CategoryState => {
  switch (action.type) {
    case CategoryActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoading).payload.isLoading,
      };
    case CategoryActionType.SET_ERROR:
      return {
        ...state,
        error: (action as SetError).payload.error,
      };
    case CategoryActionType.SET_CATEGORY:
      return {
        ...state,
        category: (action as SetCategory).payload.category,
      };
    case CategoryActionType.SET_REDIRECT_TO_CATEGORY_LIST:
      return {
        ...state,
        redirectToCategoryList: (action as SetRedirectToCategoryAction).payload
          .redirect,
      };
    case CategoryActionType.CLEAR:
      return {
        ...state,
        category: null,
        error: null,
        redirectToCategoryList: false,
      };
    default:
      return {
        ...state,
      };
  }
};
