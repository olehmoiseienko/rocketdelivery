import Order from '../models/Order';

export type OrderState = {
  isLoading: boolean;
  currentOrder: Order | null;
  error: string;
};

export type Action =
  | { type: OrderAction.IS_LOADING; payload: boolean }
  | { type: OrderAction.SET_ORDERS; payload: Order }
  | { type: OrderAction.SET_ERROR; payload: string }
  | { type: OrderAction.RESET_ORDER_DATA };

export enum OrderAction {
  SET_ORDERS = 'SET_ORDERS',
  IS_LOADING = 'IS_LOADING',
  SET_ERROR = 'SET_ERROR',
  RESET_ORDER_DATA = 'RESET_ORDER_DATA'
}

export const OrderReducer = (state: OrderState, action: Action) => {
  const { type } = action;

  switch (type) {
    case OrderAction.SET_ORDERS: {
      return {
        ...state,
        currentOrder: action.payload
      };
    }

    case OrderAction.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }

    case OrderAction.SET_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    case OrderAction.RESET_ORDER_DATA: {
      return {
        ...state,
        isLoading: false,
        error: '',
        currentOrder: null
      };
    }

    default:
      throw new Error('Unknown action type requested');
  }
};
