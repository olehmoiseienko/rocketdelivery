import Order from "../models/Order";

export type OrderState = {
  isLoading: boolean;
  currentOrder: Order | null,
}

export type Action =
  | { type: OrderAction.IS_LOADING; payload: boolean }
  | { type: OrderAction.SET_ORDERS; payload: Order }

export enum OrderAction {
  SET_ORDERS = 'SET_ORDERS',
  IS_LOADING = 'IS_LOADING',
};

export const OrderReducer = (state: OrderState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case OrderAction.SET_ORDERS: {
      return {
        ...state,
        currentOrder: payload,
      };
    }

    case OrderAction.IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default:
      throw new Error('Unknown action type requested');
  }
};
