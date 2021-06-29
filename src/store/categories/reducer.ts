import {
  CategoriesAction,
  CategoriesActionType,
  CategoriesState,
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
    sort_field: 'id',
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
        isLoading: action.payload.isLoading,
      };
    case CategoriesActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case CategoriesActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case CategoriesActionType.SET_REQUEST_CONFIG_DIFF:
      return {
        ...state,
        requestConfig: {
          ...state.requestConfig,
          ...action.payload.requestConfigDiff,
        },
      };
    default:
      return state;
  }
};
