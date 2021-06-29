import { ProductsAction, ProductsActionType, ProductsState } from './types';

const initialState: ProductsState = {
  isLoading: false,
  products: null,
  error: null,
  requestConfig: {
    page: 1,
    sort_asc: 1,
    search: '',
    per_page: 10,
    sort_field: 'id',
  },
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: ProductsAction,
): ProductsState => {
  switch (action.type) {
    case ProductsActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case ProductsActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case ProductsActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case ProductsActionType.SET_REQUEST_CONFIG_DIFF:
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
