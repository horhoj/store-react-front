import {
  CategoriesAction,
  CategoriesActionType,
  CategoriesState,
  SetCategories,
  SetError,
  SetIsLoading,
  SetRequestConfigDiff,
} from './types';

const initialState: CategoriesState = {
  isLoading: false,
  categories: null,
  error: null,
  requestConfig: {
    page: 1,
    sort_asc: 1,
    search: '',
    per_page: 10,
    sort_field: 'title',
  },
};

export const categoriesReducer = (
  state: CategoriesState = initialState,
  action: CategoriesAction,
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: (action as SetIsLoading).payload.isLoading,
      };
    case CategoriesActionType.SET_ERROR:
      return {
        ...state,
        error: (action as SetError).payload.error,
      };
    case CategoriesActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: (action as SetCategories).payload.categories,
      };
    case CategoriesActionType.SET_REQUEST_CONFIG_DIFF:
      return {
        ...state,
        requestConfig: {
          ...state.requestConfig,
          ...(action as SetRequestConfigDiff).payload.requestConfigDiff,
        },
      };
    default:
      return state;
  }
};
